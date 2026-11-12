import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/outreach/auth";
import { getMailboxes } from "@/lib/outreach/config";
import { db, type Campaign, type Lead } from "@/lib/outreach/db";
import { inSendWindow } from "@/lib/outreach/engine";
import { leadVars, missingVars, render } from "@/lib/outreach/template";
import { deleteCampaign, importLeads, saveSequence, saveSettings, setCampaignStatus, testSend, updateLead } from "../../actions";
import { ConfirmButton } from "../../confirm-button";
import { Badge, btn, btnDanger, btnGhost, Card, first, Flash, fmtDate, input, Shell, Stat } from "../../ui";

export const dynamic = "force-dynamic";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const STATUSES = ["all", "active", "completed", "replied", "bounced", "unsubscribed"];
const PAGE_SIZE = 100;

export default async function CampaignPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await requireAdmin();
  const { id: idStr } = await params;
  const sp = await searchParams;
  const id = Number(idStr);
  if (!Number.isInteger(id)) notFound();

  const sql = await db();
  const [campaign] = await sql<Campaign[]>`SELECT * FROM outreach_campaigns WHERE id = ${id}`;
  if (!campaign) notFound();

  const filter = STATUSES.includes(first(sp.status) ?? "") ? first(sp.status)! : "all";
  const page = Math.max(1, Number(first(sp.page) ?? 1) || 1);
  const [stats, sentCount, leads, sample] = await Promise.all([
    sql<{ status: string; n: number }[]>`SELECT status, count(*)::int AS n FROM outreach_leads WHERE campaign_id = ${id} GROUP BY 1`,
    sql<{ n: number }[]>`SELECT count(*)::int AS n FROM outreach_sends WHERE campaign_id = ${id} AND status = 'sent'`,
    sql<Lead[]>`
      SELECT * FROM outreach_leads WHERE campaign_id = ${id}
        AND (${filter} = 'all' OR status = ${filter})
      ORDER BY id DESC LIMIT ${PAGE_SIZE} OFFSET ${(page - 1) * PAGE_SIZE}`,
    sql<Lead[]>`SELECT * FROM outreach_leads WHERE campaign_id = ${id} ORDER BY id LIMIT 1`,
  ]);
  const n = (s?: string) => stats.filter((r) => !s || r.status === s).reduce((a, r) => a + r.n, 0);
  const total = n();
  const filteredTotal = filter === "all" ? total : n(filter);
  const mailboxes = getMailboxes();
  const path = `/outreach/campaigns/${id}`;
  const active = campaign.status === "active";
  const sampleLead = sample[0];
  const sampleVars = leadVars(
    sampleLead ?? { email: "alex@acme.com", first_name: "Alex", last_name: "Sample", company: "Acme Inc", website: "acme.com", vars: {} },
    mailboxes[0]?.fromName ?? "Your Name",
  );
  const varNames = Object.keys(sampleLead?.vars ?? {});

  return (
    <Shell crumb={<span className="text-stone-600">{campaign.name}</span>}>
      <Flash ok={first(sp.ok)} err={first(sp.err)} />

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold">{campaign.name}</h1>
          <div className="mt-1 flex items-center gap-2 text-sm text-stone-500">
            <Badge status={campaign.status} />
            {active && (inSendWindow(campaign) ? "Sending window open now" : "Outside the send window right now, will resume automatically")}
          </div>
        </div>
        <div className="flex gap-2">
          <form action={setCampaignStatus}>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="status" value={active ? "paused" : "active"} />
            <button className={active ? btnGhost : btn}>{active ? "Pause campaign" : "Start campaign"}</button>
          </form>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-5">
        <Stat label="Leads" value={total} />
        <Stat label="In sequence" value={n("active")} />
        <Stat label="Emails sent" value={sentCount[0].n} />
        <Stat label="Replied" value={n("replied")} hint={total ? `${((n("replied") / total) * 100).toFixed(1)}%` : undefined} />
        <Stat label="Bounced / unsub" value={`${n("bounced")} / ${n("unsubscribed")}`} />
      </div>

      <Card title="Email sequence" id="sequence">
        <div className="mb-4 rounded-lg bg-stone-50 p-3 text-xs leading-relaxed text-stone-600">
          <b>Variables:</b> <code>{"{{firstName}}"}</code> <code>{"{{lastName}}"}</code> <code>{"{{company}}"}</code>{" "}
          <code>{"{{website}}"}</code> <code>{"{{senderFirstName}}"}</code>
          {varNames.length > 0 && (
            <>
              {" "}
              and any CSV column, e.g.{" "}
              {varNames.slice(0, 6).map((v) => (
                <code key={v} className="mr-1">{`{{${v}}}`}</code>
              ))}
            </>
          )}
          <br />
          <b>Fallback:</b> <code>{"{{firstName|there}}"}</code> uses &quot;there&quot; when empty. <b>Spintax:</b>{" "}
          <code>{"{Hi|Hey|Hello}"}</code> picks one at random so emails don&apos;t look identical.
          <br />
          Follow-ups with an <b>empty subject</b> are sent as a reply in the same thread. Sequences stop automatically when the lead replies.
          Write plain text: no images, few links.
        </div>
        <form action={saveSequence}>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="count" value={campaign.steps.length} />
          {/* Pressing Enter in a field triggers the first submit button: make that "save". */}
          <button name="intent" value="save" className="sr-only" tabIndex={-1} aria-hidden="true" />
          {campaign.steps.map((s, i) => {
            const preview = { subject: render(s.subject, sampleVars), body: render(s.body, sampleVars) };
            const missing = missingVars(`${s.subject}\n${s.body}`, sampleVars);
            return (
              <div key={i} className="mb-4 rounded-lg border border-stone-200 p-4">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-medium">
                    {i === 0 ? (
                      "Step 1 · first email"
                    ) : (
                      <>
                        Step {i + 1} · follow-up, wait
                        <input
                          name={`delay_${i}`}
                          type="number"
                          min={0}
                          step={0.5}
                          defaultValue={s.delayDays}
                          className="w-16 rounded-md border border-stone-300 px-2 py-1 text-sm"
                        />
                        days after step {i}
                      </>
                    )}
                  </div>
                  {campaign.steps.length > 1 && (
                    <button name="intent" value={`remove_${i}`} className="text-xs text-red-700 hover:underline">
                      Remove step
                    </button>
                  )}
                </div>
                <input
                  name={`subject_${i}`}
                  defaultValue={s.subject}
                  placeholder={i === 0 ? "Subject" : "Subject (leave empty to reply in the same thread)"}
                  className={`${input} mb-2`}
                />
                <textarea name={`body_${i}`} defaultValue={s.body} rows={i === 0 ? 10 : 6} className={`${input} font-mono text-[13px]`} />
                <details className="mt-2 text-sm">
                  <summary className="cursor-pointer text-stone-500">
                    Preview for {sampleLead?.email ?? "sample lead"}
                    {missing.length > 0 && <span className="ml-2 text-amber-700">missing: {missing.join(", ")} (add a fallback)</span>}
                  </summary>
                  <div className="mt-2 whitespace-pre-wrap rounded-md bg-stone-50 p-3 text-[13px]">
                    <div className="mb-2 font-medium">{preview.subject || <span className="text-stone-400">(same thread: Re: …)</span>}</div>
                    {preview.body}
                  </div>
                </details>
              </div>
            );
          })}
          <div className="flex flex-wrap gap-2">
            <button name="intent" value="save" className={btn}>
              Save sequence
            </button>
            <button name="intent" value="add" className={btnGhost}>
              + Add follow-up
            </button>
          </div>
        </form>
      </Card>

      <Card title="Send a test email" id="test">
        <form action={testSend} className="grid gap-2 sm:grid-cols-[1fr_auto_auto_auto]">
          <input type="hidden" name="id" value={id} />
          <input name="to" type="email" required placeholder="your@email.com" className={input} />
          <select name="step" className={input}>
            {campaign.steps.map((_, i) => (
              <option key={i} value={i}>
                Step {i + 1}
              </option>
            ))}
          </select>
          <select name="mailbox" className={input}>
            {mailboxes.map((m) => (
              <option key={m.id} value={m.id}>
                {m.email}
              </option>
            ))}
          </select>
          <button className={btn}>Send test</button>
        </form>
      </Card>

      <Card title="Import leads" id="import">
        <form action={importLeads} className="space-y-3">
          <input type="hidden" name="id" value={id} />
          <p className="text-stone-500">
            CSV with an <code>email</code> column. Recognised: first name, last name, name, company, website. Every other column becomes a
            variable. Export from Apollo, Hunter, Google Sheets (File → Download → CSV) etc.
          </p>
          <input name="file" type="file" accept=".csv,text/csv,text/plain" className="block text-sm" />
          <textarea
            name="csv"
            rows={5}
            placeholder={"email,first name,company,website\njohn@acme.com,John,Acme Inc,acme.com"}
            className={`${input} font-mono text-[13px]`}
          />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="skip_other" defaultChecked /> Skip emails already in another campaign
          </label>
          <button className={btn}>Import</button>
        </form>
      </Card>

      <Card title={`Leads (${filteredTotal})`} id="leads">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {STATUSES.map((s) => (
            <Link
              key={s}
              href={`${path}?status=${s}#leads`}
              className={`rounded-full px-3 py-1 text-xs ${s === filter ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"}`}
            >
              {s} {s === "all" ? total : n(s)}
            </Link>
          ))}
        </div>
        {leads.length === 0 ? (
          <p className="text-stone-500">No leads here yet.</p>
        ) : (
          <div className="-mx-5 overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="border-b border-stone-200 text-xs text-stone-500">
                <tr>
                  <th className="px-5 py-2 font-medium">Lead</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                  <th className="px-3 py-2 font-medium">Progress</th>
                  <th className="px-3 py-2 font-medium">Next email</th>
                  <th className="px-5 py-2" />
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id} className="border-b border-stone-100 align-top last:border-0">
                    <td className="px-5 py-2.5">
                      <div className="font-medium">{l.email}</div>
                      <div className="text-xs text-stone-400">
                        {[l.first_name, l.last_name].filter(Boolean).join(" ")}
                        {l.company ? ` · ${l.company}` : ""}
                      </div>
                      {l.error && <div className="text-xs text-red-700">{l.error}</div>}
                    </td>
                    <td className="px-3 py-2.5">
                      <Badge status={l.status} />
                      {l.replied_at && <div className="text-xs text-stone-400">{fmtDate(l.replied_at)}</div>}
                    </td>
                    <td className="px-3 py-2.5 tabular-nums">
                      {l.current_step} / {campaign.steps.length} sent
                      {l.mailbox_id && <div className="text-xs text-stone-400">{l.mailbox_id}</div>}
                    </td>
                    <td className="px-3 py-2.5 text-xs text-stone-500">{l.status === "active" ? fmtDate(l.next_send_at) : "–"}</td>
                    <td className="px-5 py-2.5">
                      <form action={updateLead} className="flex justify-end gap-1.5">
                        <input type="hidden" name="id" value={l.id} />
                        <input type="hidden" name="campaign_id" value={id} />
                        {l.status === "active" && (
                          <button name="action" value="replied" className={btnGhost} title="Stop the sequence for this lead">
                            Mark replied
                          </button>
                        )}
                        {(l.status === "completed" || l.status === "replied") && l.current_step < campaign.steps.length && (
                          <button name="action" value="resume" className={btnGhost}>
                            Resume
                          </button>
                        )}
                        <button name="action" value="delete" className={btnDanger}>
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {filteredTotal > PAGE_SIZE && (
          <div className="mt-3 flex gap-2 text-sm">
            {page > 1 && (
              <Link className={btnGhost} href={`${path}?status=${filter}&page=${page - 1}#leads`}>
                ← Previous
              </Link>
            )}
            {page * PAGE_SIZE < filteredTotal && (
              <Link className={btnGhost} href={`${path}?status=${filter}&page=${page + 1}#leads`}>
                Next →
              </Link>
            )}
          </div>
        )}
      </Card>

      <Card title="Settings" id="settings">
        <form action={saveSettings} className="grid gap-4 md:grid-cols-2">
          <input type="hidden" name="id" value={id} />
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Campaign name</span>
            <input name="name" defaultValue={campaign.name} className={input} />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Timezone of your leads</span>
            <input name="timezone" defaultValue={campaign.timezone} list="tz" className={input} />
            <datalist id="tz">
              {["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "Europe/London", "Europe/Berlin", "Asia/Dubai", "Asia/Kolkata", "Australia/Sydney"].map(
                (t) => (
                  <option key={t} value={t} />
                ),
              )}
            </datalist>
          </label>
          <div>
            <span className="mb-1 block text-sm font-medium">Send on</span>
            <div className="flex flex-wrap gap-3">
              {DAYS.map((d, i) => (
                <label key={d} className="flex items-center gap-1 text-sm">
                  <input type="checkbox" name="days" value={i} defaultChecked={campaign.send_days.includes(i)} /> {d}
                </label>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-2">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">From hour</span>
              <input name="start_hour" type="number" min={0} max={23} defaultValue={campaign.start_hour} className={`${input} w-24`} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">To hour</span>
              <input name="end_hour" type="number" min={1} max={24} defaultValue={campaign.end_hour} className={`${input} w-24`} />
            </label>
          </div>
          <div className="md:col-span-2">
            <span className="mb-1 block text-sm font-medium">Send from (none ticked = rotate across all mailboxes)</span>
            <div className="flex flex-wrap gap-4">
              {mailboxes.map((m) => (
                <label key={m.id} className="flex items-center gap-1.5 text-sm">
                  <input type="checkbox" name="mailboxes" value={m.id} defaultChecked={campaign.mailbox_ids.includes(m.id)} /> {m.email}
                </label>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <button className={btn}>Save settings</button>
          </div>
        </form>
      </Card>

      <form action={deleteCampaign} className="mb-10 text-right">
        <input type="hidden" name="id" value={id} />
        <ConfirmButton className={btnDanger} message="Delete this campaign and all its leads? This cannot be undone.">
          Delete campaign and its leads
        </ConfirmButton>
      </form>
    </Shell>
  );
}
