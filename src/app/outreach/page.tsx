import Link from "next/link";
import { requireAdmin } from "@/lib/outreach/auth";
import { getBaseUrl, getMailboxes } from "@/lib/outreach/config";
import { db, type Campaign } from "@/lib/outreach/db";
import { inSendWindow } from "@/lib/outreach/engine";
import { addSuppressions, createCampaign, runNow, testMailbox } from "./actions";
import { Badge, btn, btnGhost, Card, first, Flash, fmtDate, input, Shell, Stat } from "./ui";

export const dynamic = "force-dynamic";

type Sp = Promise<Record<string, string | string[] | undefined>>;

const ENV_CHECKS: { key: string; why: string; optional?: boolean }[] = [
  { key: "DATABASE_URL", why: "Postgres database (Neon / Supabase free tier works)" },
  { key: "OUTREACH_MAILBOXES", why: "Your sending inboxes (SMTP / Gmail app passwords)" },
  { key: "OUTREACH_SECRET", why: "Random string that signs unsubscribe links" },
  { key: "OUTREACH_ADMIN_PASSWORD", why: "Password for this panel" },
  { key: "CRON_SECRET", why: "Protects the scheduled run endpoint" },
  { key: "OUTREACH_FOOTER", why: "Your business postal address under each email (CAN-SPAM)", optional: true },
  { key: "OUTREACH_BASE_URL", why: "Public URL used in unsubscribe links", optional: true },
];

export default async function OutreachDashboard({ searchParams }: { searchParams: Sp }) {
  await requireAdmin();
  const sp = await searchParams;
  const missing = ENV_CHECKS.filter((c) => !process.env[c.key]);

  let setupError: string | null = null;
  let mailboxes: ReturnType<typeof getMailboxes> = [];
  try {
    mailboxes = getMailboxes();
  } catch (e) {
    setupError = e instanceof Error ? e.message : String(e);
  }

  if (missing.some((m) => m.key === "DATABASE_URL")) {
    return (
      <Shell>
        <SetupCard missing={missing} />
      </Shell>
    );
  }

  const sql = await db();
  const [campaigns, leadStats, sendStats, usage, states, recent, totals] = await Promise.all([
    sql<Campaign[]>`SELECT * FROM outreach_campaigns ORDER BY created_at DESC`,
    sql<{ campaign_id: number; status: string; n: number }[]>`
      SELECT campaign_id, status, count(*)::int AS n FROM outreach_leads GROUP BY 1, 2`,
    sql<{ campaign_id: number; n: number }[]>`
      SELECT campaign_id, count(*)::int AS n FROM outreach_sends WHERE status = 'sent' GROUP BY 1`,
    sql<{ mailbox_id: string; n: number }[]>`
      SELECT mailbox_id, count(*)::int AS n FROM outreach_sends
      WHERE status = 'sent' AND sent_at > now() - interval '24 hours' GROUP BY 1`,
    sql<{ mailbox_id: string; checked_at: Date | null; error: string | null }[]>`SELECT * FROM outreach_mailbox_state`,
    sql<{ to_email: string; subject: string; mailbox_id: string; step: number; status: string; error: string | null; sent_at: Date; campaign_id: number | null }[]>`
      SELECT to_email, subject, mailbox_id, step, status, error, sent_at, campaign_id FROM outreach_sends ORDER BY sent_at DESC LIMIT 25`,
    sql<{ sent7: number; replies7: number; suppressed: number }[]>`
      SELECT (SELECT count(*)::int FROM outreach_sends WHERE status = 'sent' AND sent_at > now() - interval '7 days') AS sent7,
             (SELECT count(*)::int FROM outreach_leads WHERE replied_at > now() - interval '7 days') AS replies7,
             (SELECT count(*)::int FROM outreach_suppressions) AS suppressed`,
  ]);
  const count = (cid: number, status?: string) =>
    leadStats.filter((r) => r.campaign_id === cid && (!status || r.status === status)).reduce((n, r) => n + r.n, 0);
  const usageOf = (id: string) => usage.find((u) => u.mailbox_id === id)?.n ?? 0;
  const stateOf = (id: string) => states.find((s) => s.mailbox_id === id);
  const capacity = mailboxes.reduce((n, m) => n + m.dailyLimit, 0);
  const t = totals[0];
  const lastRun = states.reduce<Date | null>((d, s) => (s.checked_at && (!d || s.checked_at > d) ? s.checked_at : d), null);

  return (
    <Shell>
      <Flash ok={first(sp.ok)} err={first(sp.err) ?? setupError ?? undefined} />
      {missing.length > 0 && <SetupCard missing={missing} />}

      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Sent, last 7 days" value={t.sent7} />
        <Stat label="Replies, last 7 days" value={t.replies7} hint={t.sent7 ? `${((t.replies7 / t.sent7) * 100).toFixed(1)}% reply rate` : undefined} />
        <Stat label="Daily capacity" value={capacity} hint={`${mailboxes.length} mailbox${mailboxes.length === 1 ? "" : "es"}`} />
        <Stat label="Last automatic run" value={<span className="text-base">{fmtDate(lastRun)}</span>} hint="should update every ~5 min" />
      </div>

      <Card
        title="Campaigns"
        aside={
          <form action={runNow}>
            <button className={btnGhost} title="Check inboxes and send what is due right now">
              Run now
            </button>
          </form>
        }
      >
        {campaigns.length === 0 ? (
          <p className="mb-4 text-stone-500">No campaigns yet. Create your first one below.</p>
        ) : (
          <div className="-mx-5 mb-4 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-stone-200 text-xs text-stone-500">
                <tr>
                  <th className="px-5 py-2 font-medium">Name</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                  <th className="px-3 py-2 font-medium text-right">Leads</th>
                  <th className="px-3 py-2 font-medium text-right">In sequence</th>
                  <th className="px-3 py-2 font-medium text-right">Emails sent</th>
                  <th className="px-3 py-2 font-medium text-right">Replied</th>
                  <th className="px-5 py-2 font-medium text-right">Bounced</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((c) => {
                  const total = count(c.id);
                  const replied = count(c.id, "replied");
                  return (
                    <tr key={c.id} className="border-b border-stone-100 last:border-0 hover:bg-stone-50">
                      <td className="px-5 py-2.5">
                        <Link href={`/outreach/campaigns/${c.id}`} className="font-medium hover:underline">
                          {c.name}
                        </Link>
                        <div className="text-xs text-stone-400">
                          {c.steps.length} step{c.steps.length === 1 ? "" : "s"}
                          {c.status === "active" && !inSendWindow(c) ? " · outside send window now" : ""}
                        </div>
                      </td>
                      <td className="px-3 py-2.5">
                        <Badge status={c.status} />
                      </td>
                      <td className="px-3 py-2.5 text-right tabular-nums">{total}</td>
                      <td className="px-3 py-2.5 text-right tabular-nums">{count(c.id, "active")}</td>
                      <td className="px-3 py-2.5 text-right tabular-nums">{sendStats.find((s) => s.campaign_id === c.id)?.n ?? 0}</td>
                      <td className="px-3 py-2.5 text-right tabular-nums">
                        {replied}
                        {total ? <span className="text-xs text-stone-400"> ({((replied / total) * 100).toFixed(0)}%)</span> : null}
                      </td>
                      <td className="px-5 py-2.5 text-right tabular-nums">{count(c.id, "bounced")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <form action={createCampaign} className="flex flex-wrap gap-2">
          <input name="name" placeholder="New campaign name, e.g. US agencies, web dev offer" className={`${input} max-w-md flex-1`} />
          <button className={btn}>Create campaign</button>
        </form>
      </Card>

      <Card title="Mailboxes">
        {mailboxes.length === 0 ? (
          <p className="text-stone-500">
            No mailboxes yet. Add them to the <code>OUTREACH_MAILBOXES</code> environment variable (see OUTREACH.md).
          </p>
        ) : (
          <div className="-mx-5 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-stone-200 text-xs text-stone-500">
                <tr>
                  <th className="px-5 py-2 font-medium">Mailbox</th>
                  <th className="px-3 py-2 font-medium">Sent (24h)</th>
                  <th className="px-3 py-2 font-medium">Reply tracking</th>
                  <th className="px-5 py-2" />
                </tr>
              </thead>
              <tbody>
                {mailboxes.map((m) => {
                  const st = stateOf(m.id);
                  return (
                    <tr key={m.id} className="border-b border-stone-100 last:border-0">
                      <td className="px-5 py-2.5">
                        <div className="font-medium">{m.email}</div>
                        <div className="text-xs text-stone-400">
                          {m.fromName} · {m.smtpHost}:{m.smtpPort}
                        </div>
                      </td>
                      <td className="px-3 py-2.5 tabular-nums">
                        {usageOf(m.id)} / {m.dailyLimit}
                      </td>
                      <td className="px-3 py-2.5 text-xs">
                        {!m.imapHost ? (
                          <span className="text-amber-700">off (no IMAP), replies won&apos;t stop follow-ups</span>
                        ) : st?.error ? (
                          <span className="text-red-700">error: {st.error}</span>
                        ) : st?.checked_at ? (
                          <span className="text-emerald-700">checked {fmtDate(st.checked_at)}</span>
                        ) : (
                          <span className="text-stone-500">not checked yet</span>
                        )}
                      </td>
                      <td className="px-5 py-2.5 text-right">
                        <form action={testMailbox}>
                          <input type="hidden" name="mailbox" value={m.id} />
                          <button className={btnGhost}>Test login</button>
                        </form>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <Card title="Recent activity">
        {recent.length === 0 ? (
          <p className="text-stone-500">Nothing sent yet.</p>
        ) : (
          <div className="-mx-5 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <tbody>
                {recent.map((r, i) => (
                  <tr key={i} className="border-b border-stone-100 last:border-0">
                    <td className="whitespace-nowrap px-5 py-2 text-xs text-stone-500">{fmtDate(r.sent_at)}</td>
                    <td className="px-3 py-2">
                      <Badge status={r.status} />
                    </td>
                    <td className="px-3 py-2">{r.to_email}</td>
                    <td className="px-3 py-2 text-stone-600">
                      Step {r.step + 1}: {r.subject}
                      {r.error && <div className="text-xs text-red-700">{r.error}</div>}
                    </td>
                    <td className="px-5 py-2 text-xs text-stone-400">{r.mailbox_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <Card title={`Do-not-contact list (${t.suppressed})`}>
        <p className="mb-3 text-stone-500">
          Unsubscribes and bounces are added automatically. Add addresses here to never email them from any campaign.
        </p>
        <form action={addSuppressions} className="flex flex-col gap-2 sm:flex-row">
          <textarea name="emails" rows={2} placeholder="one@example.com, two@example.com" className={input} />
          <button className={`${btn} sm:self-start`}>Block</button>
        </form>
      </Card>

      <p className="text-xs text-stone-400">
        Scheduler URL: <code>{getBaseUrl()}/api/outreach/cron</code> (call it every 5 minutes with your CRON_SECRET)
      </p>
    </Shell>
  );
}

function SetupCard({ missing }: { missing: typeof ENV_CHECKS }) {
  return (
    <Card title="Finish setup">
      <p className="mb-3 text-stone-600">Set these environment variables on your host (for example Vercel → Settings → Environment Variables) and redeploy:</p>
      <ul className="space-y-1.5">
        {missing.map((m) => (
          <li key={m.key}>
            <code className="rounded bg-stone-100 px-1.5 py-0.5 text-xs">{m.key}</code>{" "}
            <span className="text-stone-500">
              {m.why}
              {m.optional ? " (recommended)" : ""}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-stone-400">The full guide is in OUTREACH.md in the repository.</p>
    </Card>
  );
}
