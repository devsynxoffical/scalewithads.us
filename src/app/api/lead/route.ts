/**
 * Lead form endpoint. Emails each lead through Resend (https://resend.com).
 *
 * Vercel environment variables:
 *   RESEND_API_KEY   Resend API key
 *   LEAD_EMAIL_TO    where leads are sent (comma-separated for several inboxes)
 *   LEAD_EMAIL_FROM  verified sender, e.g. "Scale With Ads <leads@scalewithads.us>"
 *                    (defaults to Resend's test sender, which only delivers to the
 *                    Resend account owner's own address)
 *
 * Every lead is also written to the server log, so nothing is lost if email
 * is not configured yet or the email service fails.
 */

type Lead = {
  name: string;
  company: string;
  email: string;
  phone: string;
  budget: string;
  industry: string;
  message: string;
  page: string;
};

const MAX = { name: 100, company: 150, email: 200, phone: 40, budget: 60, industry: 60, message: 1500, page: 200 };

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "website" field.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const lead: Lead = {
    name: clean(body.name, MAX.name),
    company: clean(body.company, MAX.company),
    email: clean(body.email, MAX.email),
    phone: clean(body.phone, MAX.phone),
    budget: clean(body.budget, MAX.budget),
    industry: clean(body.industry, MAX.industry),
    message: clean(body.message, MAX.message),
    page: clean(body.page, MAX.page),
  };

  if (!lead.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) || lead.phone.replace(/\D/g, "").length < 7) {
    return Response.json({ ok: false, error: "Please enter your name, a valid email and a phone number." }, { status: 400 });
  }

  // Always keep a copy in the server log.
  console.log("NEW_LEAD", JSON.stringify({ ...lead, at: new Date().toISOString() }));

  const key = process.env.RESEND_API_KEY;
  const to = (process.env.LEAD_EMAIL_TO || "").split(",").map((s) => s.trim()).filter(Boolean);
  if (!key || !to.length) {
    console.warn("Lead email not sent: RESEND_API_KEY or LEAD_EMAIL_TO is not set.");
    return Response.json({ ok: true, emailed: false });
  }

  const rows = ([
    ["Name", lead.name],
    ["Company / firm", lead.company],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Monthly ad budget", lead.budget],
    ["Industry", lead.industry],
    ["Message", lead.message],
    ["Page", lead.page],
  ] as const)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#57534e"><b>${k}</b></td><td style="padding:6px 12px">${esc(v)}</td></tr>`)
    .join("");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.LEAD_EMAIL_FROM || "Scale With Ads <onboarding@resend.dev>",
        to,
        reply_to: lead.email,
        subject: `New lead: ${lead.name}${lead.company ? ` (${lead.company})` : ""}${lead.industry ? ` · ${lead.industry}` : ""}`,
        html: `<h2 style="font-family:sans-serif">New website lead</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows}</table>`,
      }),
    });
    if (!res.ok) {
      console.error("Lead email failed:", res.status, await res.text());
      return Response.json({ ok: true, emailed: false });
    }
  } catch (e) {
    console.error("Lead email error:", e);
    return Response.json({ ok: true, emailed: false });
  }

  return Response.json({ ok: true, emailed: true });
}
