import "server-only";
import { ImapFlow } from "imapflow";
import type { Mailbox } from "./config";
import { db } from "./db";

const BOUNCE_FROM = /mailer-daemon|postmaster|mail-daemon|mailerdaemon/i;
const BOUNCE_SUBJECT = /undeliver|delivery status notification|delivery failure|returned mail|not delivered|delivery has failed|failure notice|address not found/i;
const AUTO_SUBJECT = /out of (the )?office|automatic reply|auto[- ]?reply|autoreply|abwesenheit|vacation|away from/i;
const MAX_MESSAGES_PER_RUN = 400;

export type InboxResult = { mailboxId: string; replies: string[]; bounces: string[]; error?: string };

/**
 * Reads new INBOX messages of one mailbox and marks matching leads as replied or bounced,
 * so follow-ups stop automatically.
 */
export async function checkInbox(m: Mailbox): Promise<InboxResult> {
  const result: InboxResult = { mailboxId: m.id, replies: [], bounces: [] };
  const sql = await db();
  if (!m.imapHost) {
    // Still record the run so the dashboard can show when the scheduler last fired.
    await sql`
      INSERT INTO outreach_mailbox_state (mailbox_id, checked_at) VALUES (${m.id}, now())
      ON CONFLICT (mailbox_id) DO UPDATE SET checked_at = now(), error = NULL`;
    return result;
  }
  const [state] = await sql<{ uid_validity: string | null; last_uid: string }[]>`
    SELECT uid_validity, last_uid FROM outreach_mailbox_state WHERE mailbox_id = ${m.id}`;

  const client = new ImapFlow({
    host: m.imapHost,
    port: m.imapPort,
    secure: m.imapPort === 993,
    auth: { user: m.user, pass: m.password },
    logger: false,
  });

  try {
    await client.connect();
    const lock = await client.getMailboxLock("INBOX");
    try {
      const box = client.mailbox;
      const uidValidity = box && typeof box === "object" ? String(box.uidValidity) : "";
      let lastUid = state && state.uid_validity === uidValidity ? Number(state.last_uid) : -1;

      if (lastUid < 0) {
        // First run (or the mailbox was reset): look back 3 days.
        const since = new Date(Date.now() - 3 * 24 * 3600 * 1000);
        const uids = (await client.search({ since }, { uid: true })) || [];
        lastUid = uids.length ? Math.min(...uids) - 1 : Math.max(0, Number(box && typeof box === "object" ? box.uidNext : 1) - 1);
      }

      const replyFroms = new Set<string>();
      const bounceUids: number[] = [];
      let maxUid = lastUid;
      let count = 0;

      for await (const msg of client.fetch(
        `${lastUid + 1}:*`,
        { uid: true, envelope: true, headers: ["auto-submitted", "x-autoreply", "x-autorespond"] },
        { uid: true },
      )) {
        if (msg.uid <= lastUid) continue;
        if (++count > MAX_MESSAGES_PER_RUN) break;
        maxUid = Math.max(maxUid, msg.uid);
        const from = msg.envelope?.from?.[0]?.address?.toLowerCase() ?? "";
        const subject = msg.envelope?.subject ?? "";
        const headers = msg.headers?.toString("utf8").toLowerCase() ?? "";
        const isBounce = BOUNCE_FROM.test(from) || (BOUNCE_SUBJECT.test(subject) && (!from || /daemon|postmaster|no-?reply/.test(from)));
        if (isBounce) {
          bounceUids.push(msg.uid);
        } else if (/auto-submitted:\s*auto-(replied|generated)|x-autore(ply|spond)/.test(headers) || AUTO_SUBJECT.test(subject)) {
          // Out-of-office and other auto replies don't count as a reply.
        } else if (from) {
          replyFroms.add(from);
        }
      }

      const bouncedEmails = new Set<string>();
      for (const uid of bounceUids.slice(0, 50)) {
        const full = await client.fetchOne(String(uid), { source: true }, { uid: true });
        const src = full && full.source ? full.source.toString("utf8") : "";
        for (const e of src.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) ?? []) bouncedEmails.add(e.toLowerCase());
      }

      if (replyFroms.size) {
        const rows = await sql<{ email: string }[]>`
          UPDATE outreach_leads SET status = 'replied', replied_at = now()
          WHERE email = ANY(${[...replyFroms]}) AND status IN ('active', 'completed')
          RETURNING email`;
        result.replies = [...new Set(rows.map((r) => r.email))];
      }
      if (bouncedEmails.size) {
        // Only leads this mailbox actually emailed can bounce back to it.
        const rows = await sql<{ email: string }[]>`
          UPDATE outreach_leads SET status = 'bounced', error = 'Bounce received'
          WHERE email = ANY(${[...bouncedEmails]}) AND mailbox_id = ${m.id}
            AND status IN ('active', 'completed') AND last_sent_at IS NOT NULL
          RETURNING email`;
        result.bounces = [...new Set(rows.map((r) => r.email))];
        for (const email of result.bounces) {
          await sql`INSERT INTO outreach_suppressions (email, reason) VALUES (${email}, 'bounced') ON CONFLICT DO NOTHING`;
        }
      }

      await sql`
        INSERT INTO outreach_mailbox_state (mailbox_id, uid_validity, last_uid, checked_at, error)
        VALUES (${m.id}, ${uidValidity}, ${maxUid}, now(), NULL)
        ON CONFLICT (mailbox_id) DO UPDATE SET uid_validity = EXCLUDED.uid_validity,
          last_uid = EXCLUDED.last_uid, checked_at = now(), error = NULL`;
    } finally {
      lock.release();
    }
    await client.logout();
  } catch (e) {
    result.error = e instanceof Error ? e.message : String(e);
    await sql`
      INSERT INTO outreach_mailbox_state (mailbox_id, checked_at, error) VALUES (${m.id}, now(), ${result.error})
      ON CONFLICT (mailbox_id) DO UPDATE SET checked_at = now(), error = EXCLUDED.error`;
    client.close();
  }
  return result;
}
