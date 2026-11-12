import "server-only";
import { getMailbox, getMailboxes, MIN_GAP_MINUTES, type Mailbox } from "./config";
import { db, type Campaign, type Lead } from "./db";
import { checkInbox, type InboxResult } from "./inbox";
import { sendEmail } from "./mailer";
import { leadVars, render } from "./template";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** True when "now" is inside the campaign's sending days/hours in its timezone. */
export function inSendWindow(c: Pick<Campaign, "timezone" | "send_days" | "start_hour" | "end_hour">, now = new Date()): boolean {
  let parts: Intl.DateTimeFormatPart[];
  try {
    parts = new Intl.DateTimeFormat("en-US", { timeZone: c.timezone, weekday: "short", hour: "numeric", hourCycle: "h23" }).formatToParts(now);
  } catch {
    return false;
  }
  const day = WEEKDAYS.indexOf(parts.find((p) => p.type === "weekday")?.value ?? "");
  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  return c.send_days.includes(day) && hour >= c.start_hour && hour < c.end_hour;
}

export type RunResult = {
  inbox: InboxResult[];
  sent: { mailbox: string; to: string; step: number }[];
  skipped: string[];
  errors: string[];
};

export function buildEmail(campaign: Campaign, lead: Lead, stepIndex: number, mailbox: Mailbox) {
  const step = campaign.steps[stepIndex];
  const vars = leadVars(lead, mailbox.fromName);
  const ownSubject = render(step.subject ?? "", vars).trim();
  const subject =
    ownSubject || (lead.thread_subject ? `Re: ${lead.thread_subject.replace(/^re:\s*/i, "")}` : render(campaign.steps[0]?.subject ?? "", vars));
  // Follow-ups without their own subject are sent as replies in the same thread.
  const threaded = stepIndex > 0 && !ownSubject && lead.message_ids.length > 0;
  return {
    to: lead.email,
    subject,
    body: render(step.body, vars),
    inReplyTo: threaded ? lead.message_ids[lead.message_ids.length - 1] : undefined,
    references: threaded ? lead.message_ids : undefined,
  };
}

function isPermanentRecipientError(e: unknown): boolean {
  const err = e as { responseCode?: number; code?: string; command?: string };
  return err?.code === "EENVELOPE" || (!!err?.responseCode && err.responseCode >= 550 && err.responseCode <= 553 && err.command === "RCPT TO");
}

function isAuthError(e: unknown): boolean {
  const err = e as { responseCode?: number; code?: string };
  return err?.code === "EAUTH" || err?.responseCode === 535 || err?.code === "ECONNECTION" || err?.code === "ETIMEDOUT";
}

/**
 * One tick of the outreach engine. Meant to run every ~5 minutes:
 *  1. reads the inboxes and stops sequences for leads who replied or bounced
 *  2. sends at most one email per mailbox, respecting send windows, daily limits and spacing
 */
export async function runOutreach(): Promise<RunResult> {
  const sql = await db();
  const mailboxes = getMailboxes();
  const result: RunResult = { inbox: [], sent: [], skipped: [], errors: [] };
  if (!mailboxes.length) {
    result.errors.push("No mailboxes configured (OUTREACH_MAILBOXES).");
    return result;
  }

  // 1. Replies and bounces.
  const inbox = await Promise.allSettled(mailboxes.map((m) => checkInbox(m)));
  for (const r of inbox) {
    if (r.status === "fulfilled") result.inbox.push(r.value);
    else result.errors.push(String(r.reason));
  }

  // Leads that unsubscribed or bounced anywhere are stopped everywhere.
  await sql`
    UPDATE outreach_leads l SET status = CASE WHEN s.reason = 'bounced' THEN 'bounced' ELSE 'unsubscribed' END
    FROM outreach_suppressions s WHERE s.email = l.email AND l.status = 'active'`;

  // 2. Sending.
  const campaigns = await sql<Campaign[]>`SELECT * FROM outreach_campaigns WHERE status = 'active'`;
  const open = campaigns.filter((c) => c.steps.length > 0 && inSendWindow(c));
  if (!open.length) {
    result.skipped.push(campaigns.length ? "Outside every active campaign's send window." : "No active campaigns.");
    return result;
  }
  const byId = new Map(campaigns.map((c) => [c.id, c]));
  const allIds = mailboxes.map((m) => m.id);

  for (const m of [...mailboxes].sort(() => Math.random() - 0.5)) {
    const campaignIds = open.filter((c) => !c.mailbox_ids.length || c.mailbox_ids.includes(m.id)).map((c) => c.id);
    if (!campaignIds.length) continue;

    const [usage] = await sql<{ sent_today: number; last_sent: Date | null }[]>`
      SELECT count(*)::int AS sent_today, max(sent_at) AS last_sent FROM outreach_sends
      WHERE mailbox_id = ${m.id} AND status = 'sent' AND sent_at > now() - interval '24 hours'`;
    if (usage.sent_today >= m.dailyLimit) {
      result.skipped.push(`${m.email}: daily limit reached (${m.dailyLimit}).`);
      continue;
    }
    const gapMs = MIN_GAP_MINUTES * 60_000 * (1 + Math.random() * 0.6);
    if (usage.last_sent && Date.now() - new Date(usage.last_sent).getTime() < gapMs) {
      result.skipped.push(`${m.email}: waiting between sends.`);
      continue;
    }

    // Claim one due lead (follow-ups first). Leads keep their mailbox so threads stay together.
    const [lead] = await sql<(Lead & { prev_mailbox: string | null })[]>`
      UPDATE outreach_leads l SET next_send_at = now() + interval '20 minutes', mailbox_id = ${m.id}
      FROM (SELECT id, mailbox_id AS prev_mailbox FROM outreach_leads c
            WHERE c.status = 'active' AND c.next_send_at <= now() AND c.campaign_id = ANY(${campaignIds})
              AND (c.mailbox_id IS NULL OR c.mailbox_id = ${m.id} OR NOT (c.mailbox_id = ANY(${allIds})))
              AND NOT EXISTS (SELECT 1 FROM outreach_suppressions s WHERE s.email = c.email)
            ORDER BY c.current_step DESC, c.next_send_at ASC
            LIMIT 1 FOR UPDATE SKIP LOCKED) picked
      WHERE l.id = picked.id
      RETURNING l.*, picked.prev_mailbox`;
    if (!lead) continue;

    const campaign = byId.get(lead.campaign_id)!;
    if (lead.current_step >= campaign.steps.length) {
      await sql`UPDATE outreach_leads SET status = 'completed' WHERE id = ${lead.id}`;
      continue;
    }

    const email = buildEmail(campaign, lead, lead.current_step, m);
    try {
      const messageId = await sendEmail(m, email);
      const next = campaign.steps[lead.current_step + 1];
      const nextAt = next ? new Date(Date.now() + Math.max(0, next.delayDays) * 24 * 3600 * 1000) : null;
      await sql`
        UPDATE outreach_leads SET
          current_step = current_step + 1,
          message_ids = array_append(message_ids, ${messageId}),
          thread_subject = COALESCE(thread_subject, ${email.subject}),
          last_sent_at = now(),
          error = NULL,
          status = ${next ? "active" : "completed"},
          next_send_at = ${nextAt ?? new Date()}
        WHERE id = ${lead.id}`;
      await sql`
        INSERT INTO outreach_sends (lead_id, campaign_id, mailbox_id, step, to_email, subject, message_id, status)
        VALUES (${lead.id}, ${campaign.id}, ${m.id}, ${lead.current_step}, ${lead.email}, ${email.subject}, ${messageId}, 'sent')`;
      result.sent.push({ mailbox: m.email, to: lead.email, step: lead.current_step + 1 });
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      await sql`
        INSERT INTO outreach_sends (lead_id, campaign_id, mailbox_id, step, to_email, subject, status, error)
        VALUES (${lead.id}, ${campaign.id}, ${m.id}, ${lead.current_step}, ${lead.email}, ${email.subject}, 'failed', ${msg})`;
      if (isAuthError(e)) {
        // Mailbox problem, not the lead's fault: release the lead untouched.
        await sql`UPDATE outreach_leads SET next_send_at = now(), mailbox_id = ${lead.prev_mailbox} WHERE id = ${lead.id}`;
        result.errors.push(`${m.email}: cannot send (${msg}). Check the password / app password.`);
      } else if (isPermanentRecipientError(e)) {
        await sql`UPDATE outreach_leads SET status = 'bounced', error = ${msg} WHERE id = ${lead.id}`;
        await sql`INSERT INTO outreach_suppressions (email, reason) VALUES (${lead.email}, 'bounced') ON CONFLICT DO NOTHING`;
        result.errors.push(`${lead.email}: rejected (${msg}).`);
      } else {
        await sql`UPDATE outreach_leads SET next_send_at = now() + interval '1 hour', error = ${msg} WHERE id = ${lead.id}`;
        result.errors.push(`${lead.email}: will retry in 1h (${msg}).`);
      }
    }
  }
  return result;
}

/** Sends one step of a campaign to a test address, using a real lead (or sample data) for variables. */
export async function sendTestEmail(campaignId: number, stepIndex: number, to: string, mailboxId?: string) {
  const sql = await db();
  const [campaign] = await sql<Campaign[]>`SELECT * FROM outreach_campaigns WHERE id = ${campaignId}`;
  if (!campaign) throw new Error("Campaign not found.");
  if (!campaign.steps[stepIndex]) throw new Error("Step not found.");
  const m = getMailbox(mailboxId) ?? getMailbox(campaign.mailbox_ids[0]) ?? getMailboxes()[0];
  if (!m) throw new Error("No mailboxes configured (OUTREACH_MAILBOXES).");
  const [sample] = await sql<Lead[]>`SELECT * FROM outreach_leads WHERE campaign_id = ${campaignId} ORDER BY id LIMIT 1`;
  const lead: Lead =
    sample ??
    ({ email: to, first_name: "Alex", last_name: "Sample", company: "Acme Inc", website: "acme.com", vars: {}, message_ids: [], thread_subject: null } as unknown as Lead);
  const threadSubject = stepIndex > 0 ? render(campaign.steps[0]?.subject ?? "", leadVars(lead, m.fromName)) || "Follow-up" : null;
  const email = buildEmail(campaign, { ...lead, message_ids: [], thread_subject: threadSubject }, stepIndex, m);
  await sendEmail(m, { ...email, to, subject: `[TEST] ${email.subject}` });
  return { from: m.email, sampleLead: sample?.email ?? "sample data" };
}
