"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { requireAdmin, SESSION_COOKIE } from "@/lib/outreach/auth";
import { getMailbox, getMailboxes } from "@/lib/outreach/config";
import { csvToLeads, isEmail } from "@/lib/outreach/csv";
import { db, type Step } from "@/lib/outreach/db";
import { runOutreach, sendTestEmail } from "@/lib/outreach/engine";
import { verifyMailbox } from "@/lib/outreach/mailer";
import { adminSessionValue, checkPassword } from "@/lib/outreach/tokens";

const errMsg = (e: unknown) => (e instanceof Error ? e.message : String(e));
/** Redirects back with a flash message; keeps an optional #anchor at the end of the URL. */
const back = (target: string, msg: string, kind: "ok" | "err" = "ok"): never => {
  const [path, hash] = target.split("#");
  redirect(`${path}${path.includes("?") ? "&" : "?"}${kind}=${encodeURIComponent(msg)}${hash ? `#${hash}` : ""}`);
};

export async function login(formData: FormData) {
  if (!process.env.OUTREACH_ADMIN_PASSWORD) back("/outreach/login", "OUTREACH_ADMIN_PASSWORD is not set on the server.", "err");
  if (!checkPassword(String(formData.get("password") ?? ""))) back("/outreach/login", "Wrong password.", "err");
  const store = await cookies();
  store.set(SESSION_COOKIE, adminSessionValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  redirect("/outreach");
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/outreach/login");
}

const DEFAULT_STEPS: Step[] = [
  {
    delayDays: 0,
    subject: "{Quick question|Idea} for {{company|your team}}",
    body: "{Hi|Hey} {{firstName|there}},\n\nI came across {{company|your company}} and had a quick idea on how we could help you ship faster with DevSynx.\n\nWe build web apps, websites and automations for businesses like yours, done-for-you and on a fixed timeline.\n\nWorth a 15-minute chat next week?\n\nBest,\n{{senderFirstName}}",
  },
  {
    delayDays: 3,
    subject: "",
    body: "Hi {{firstName|there}}, just floating this to the top of your inbox. Would it make sense to talk?\n\n{{senderFirstName}}",
  },
  {
    delayDays: 4,
    subject: "",
    body: "Hi {{firstName|there}}, I'll stop here so I don't clutter your inbox. If building or improving software is on the roadmap for {{company|you}} later this year, just reply and I'll send over a few examples.\n\nAll the best,\n{{senderFirstName}}",
  },
];

export async function createCampaign(formData: FormData) {
  await requireAdmin();
  const name = String(formData.get("name") ?? "").trim() || "New campaign";
  const sql = await db();
  const [c] = await sql<{ id: number }[]>`
    INSERT INTO outreach_campaigns (name, steps) VALUES (${name}, ${sql.json(DEFAULT_STEPS)}) RETURNING id`;
  redirect(`/outreach/campaigns/${c.id}?ok=${encodeURIComponent("Campaign created with a 3-step starter sequence. Edit it below.")}`);
}

export async function setCampaignStatus(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id"));
  const status = formData.get("status") === "active" ? "active" : "paused";
  const sql = await db();
  const path = `/outreach/campaigns/${id}`;
  if (status === "active") {
    const [c] = await sql<{ steps: Step[] }[]>`SELECT steps FROM outreach_campaigns WHERE id = ${id}`;
    if (!c?.steps.length || !c.steps[0].subject.trim() || !c.steps[0].body.trim())
      back(path, "Step 1 needs a subject and a body before the campaign can start.", "err");
    if (!getMailboxes().length) back(path, "Add at least one mailbox in OUTREACH_MAILBOXES first.", "err");
  }
  await sql`UPDATE outreach_campaigns SET status = ${status} WHERE id = ${id}`;
  back(path, status === "active" ? "Campaign is live. Emails go out on the next scheduled run." : "Campaign paused.");
}

export async function deleteCampaign(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id"));
  const sql = await db();
  await sql`DELETE FROM outreach_campaigns WHERE id = ${id}`;
  back("/outreach", "Campaign deleted.");
}

export async function saveSettings(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id"));
  const path = `/outreach/campaigns/${id}`;
  const name = String(formData.get("name") ?? "").trim() || "Untitled";
  const timezone = String(formData.get("timezone") ?? "America/New_York").trim();
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: timezone });
  } catch {
    back(path, `Unknown timezone "${timezone}". Use e.g. America/New_York or Europe/Berlin.`, "err");
  }
  const days = formData.getAll("days").map(Number).filter((d) => d >= 0 && d <= 6);
  const start = Math.min(23, Math.max(0, Number(formData.get("start_hour") ?? 9)));
  const end = Math.min(24, Math.max(1, Number(formData.get("end_hour") ?? 17)));
  if (end <= start) back(path, "End hour must be after start hour.", "err");
  const mailboxIds = formData.getAll("mailboxes").map(String).filter((m) => getMailbox(m));
  const sql = await db();
  await sql`
    UPDATE outreach_campaigns SET name = ${name}, timezone = ${timezone}, send_days = ${days},
      start_hour = ${start}, end_hour = ${end}, mailbox_ids = ${mailboxIds}
    WHERE id = ${id}`;
  back(path, "Settings saved.");
}

export async function saveSequence(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id"));
  const path = `/outreach/campaigns/${id}`;
  const count = Number(formData.get("count") ?? 0);
  let steps: Step[] = [];
  for (let i = 0; i < count; i++) {
    steps.push({
      subject: String(formData.get(`subject_${i}`) ?? ""),
      body: String(formData.get(`body_${i}`) ?? ""),
      delayDays: i === 0 ? 0 : Math.max(0, Number(formData.get(`delay_${i}`) ?? 3) || 0),
    });
  }
  const intent = String(formData.get("intent") ?? "save");
  if (intent === "add") steps.push({ subject: "", body: "Hi {{firstName|there}},\n\n", delayDays: 3 });
  if (intent.startsWith("remove_")) {
    const idx = Number(intent.slice(7));
    steps = steps.filter((_, i) => i !== idx);
  }
  const sql = await db();
  await sql`UPDATE outreach_campaigns SET steps = ${sql.json(steps)} WHERE id = ${id}`;
  back(path + "#sequence", intent === "add" ? "Follow-up added." : intent.startsWith("remove_") ? "Step removed." : "Sequence saved.");
}

export async function importLeads(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id"));
  const path = `/outreach/campaigns/${id}`;
  let text = String(formData.get("csv") ?? "");
  const file = formData.get("file");
  if (file instanceof File && file.size > 0) text = await file.text();
  if (!text.trim()) back(path + "#import", "Paste CSV text or choose a CSV file.", "err");

  let parsed: ReturnType<typeof csvToLeads>;
  try {
    parsed = csvToLeads(text);
  } catch (e) {
    return back(path + "#import", errMsg(e), "err");
  }
  const skipOther = formData.get("skip_other") === "on";
  const sql = await db();
  const emails = [...new Set(parsed.leads.map((l) => l.email))];
  const blocked = new Set(
    (
      await sql<{ email: string }[]>`
        SELECT email FROM outreach_suppressions WHERE email = ANY(${emails})
        UNION SELECT email FROM outreach_leads WHERE email = ANY(${emails})
          AND (${skipOther} OR campaign_id = ${id} OR status IN ('replied','bounced','unsubscribed'))`
    ).map((r) => r.email),
  );
  const seen = new Set<string>();
  const rows = parsed.leads.filter((l) => !blocked.has(l.email) && !seen.has(l.email) && seen.add(l.email));
  for (let i = 0; i < rows.length; i += 500) {
    const chunk = rows.slice(i, i + 500).map((l) => ({
      campaign_id: id,
      email: l.email,
      first_name: l.firstName || null,
      last_name: l.lastName || null,
      company: l.company || null,
      website: l.website || null,
      vars: sql.json(l.vars),
    }));
    await sql`INSERT INTO outreach_leads ${sql(chunk)} ON CONFLICT (campaign_id, email) DO NOTHING`;
  }
  const skipped = parsed.leads.length - rows.length;
  back(
    path + "#leads",
    `Imported ${rows.length} lead${rows.length === 1 ? "" : "s"}.` +
      (skipped ? ` Skipped ${skipped} duplicate / already contacted / unsubscribed.` : "") +
      (parsed.invalid ? ` ${parsed.invalid} row(s) had no valid email.` : ""),
  );
}

export async function updateLead(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id"));
  const campaignId = Number(formData.get("campaign_id"));
  const action = String(formData.get("action"));
  const sql = await db();
  if (action === "delete") await sql`DELETE FROM outreach_leads WHERE id = ${id}`;
  if (action === "replied") await sql`UPDATE outreach_leads SET status = 'replied', replied_at = now() WHERE id = ${id}`;
  if (action === "resume") await sql`UPDATE outreach_leads SET status = 'active', error = NULL, next_send_at = now() WHERE id = ${id}`;
  back(`/outreach/campaigns/${campaignId}#leads`, "Lead updated.");
}

export async function testSend(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id"));
  const path = `/outreach/campaigns/${id}`;
  const to = String(formData.get("to") ?? "").trim();
  if (!isEmail(to)) back(path + "#test", "Enter a valid email address.", "err");
  let result: string;
  try {
    const r = await sendTestEmail(id, Number(formData.get("step") ?? 0), to, String(formData.get("mailbox") ?? "") || undefined);
    result = `Test sent from ${r.from} to ${to} (variables from ${r.sampleLead}).`;
  } catch (e) {
    return back(path + "#test", `Test failed: ${errMsg(e)}`, "err");
  }
  back(path + "#test", result);
}

export async function runNow() {
  await requireAdmin();
  let msg: string;
  try {
    const r = await runOutreach();
    const replies = r.inbox.reduce((n, i) => n + i.replies.length, 0);
    const bounces = r.inbox.reduce((n, i) => n + i.bounces.length, 0);
    msg = `Run finished: ${r.sent.length} sent, ${replies} new replies, ${bounces} bounces.`;
    const notes = [...r.errors, ...r.inbox.filter((i) => i.error).map((i) => `${i.mailboxId} inbox: ${i.error}`), ...r.skipped];
    if (notes.length) msg += " " + notes.slice(0, 4).join(" ");
  } catch (e) {
    return back("/outreach", `Run failed: ${errMsg(e)}`, "err");
  }
  back("/outreach", msg);
}

export async function testMailbox(formData: FormData) {
  await requireAdmin();
  const m = getMailbox(String(formData.get("mailbox")));
  if (!m) return back("/outreach", "Mailbox not found.", "err");
  let error: string | null = null;
  try {
    await verifyMailbox(m);
  } catch (e) {
    error = errMsg(e);
  }
  if (error) back("/outreach", `${m.email}: SMTP login failed: ${error}`, "err");
  back("/outreach", `${m.email}: SMTP login works.`);
}

export async function addSuppressions(formData: FormData) {
  await requireAdmin();
  const emails = String(formData.get("emails") ?? "")
    .split(/[\s,;]+/)
    .map((e) => e.trim().toLowerCase())
    .filter(isEmail);
  const sql = await db();
  for (const email of emails) {
    await sql`INSERT INTO outreach_suppressions (email, reason) VALUES (${email}, 'manual') ON CONFLICT DO NOTHING`;
  }
  await sql`UPDATE outreach_leads SET status = 'unsubscribed' WHERE email = ANY(${emails}) AND status = 'active'`;
  back("/outreach", `Blocked ${emails.length} address(es).`);
}
