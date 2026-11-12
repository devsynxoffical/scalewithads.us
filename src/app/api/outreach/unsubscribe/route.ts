import type { NextRequest } from "next/server";
import { db } from "@/lib/outreach/db";
import { verifyUnsubscribeToken } from "@/lib/outreach/tokens";

function page(title: string, body: string, status = 200) {
  const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${title}</title>
<style>body{font-family:system-ui,sans-serif;background:#f6f6f4;color:#222;display:grid;place-items:center;min-height:100vh;margin:0;padding:16px}
main{background:#fff;border:1px solid #e5e5e5;border-radius:12px;padding:32px;max-width:420px;text-align:center}
button{background:#111;color:#fff;border:0;border-radius:8px;padding:10px 18px;font-size:15px;cursor:pointer}</style></head>
<body><main><h1 style="font-size:20px">${title}</h1>${body}</main></body></html>`;
  return new Response(html, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

async function unsubscribe(email: string) {
  const sql = await db();
  await sql`INSERT INTO outreach_suppressions (email, reason) VALUES (${email}, 'unsubscribed') ON CONFLICT DO NOTHING`;
  await sql`UPDATE outreach_leads SET status = 'unsubscribed' WHERE email = ${email} AND status IN ('active', 'completed')`;
}

// GET shows a confirm button, so link scanners that open URLs don't unsubscribe people by accident.
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("t") ?? "";
  const email = verifyUnsubscribeToken(token);
  if (!email) return page("Link not valid", "<p>This unsubscribe link is invalid or incomplete.</p>", 400);
  const safe = email.replace(/[<>&"]/g, "");
  return page(
    "Unsubscribe",
    `<p>Stop all emails to <b>${safe}</b>?</p><form method="post"><input type="hidden" name="t" value="${token}"><button type="submit">Unsubscribe</button></form>`,
  );
}

// POST handles both the button above and one-click unsubscribe from Gmail/Outlook (RFC 8058).
export async function POST(request: NextRequest) {
  let token = request.nextUrl.searchParams.get("t") ?? "";
  if (!token) {
    const form = await request.formData().catch(() => null);
    token = String(form?.get("t") ?? "");
  }
  const email = verifyUnsubscribeToken(token);
  if (!email) return page("Link not valid", "<p>This unsubscribe link is invalid or incomplete.</p>", 400);
  await unsubscribe(email);
  return page("You're unsubscribed", "<p>You won't receive any more emails from us. Sorry for the interruption.</p>");
}
