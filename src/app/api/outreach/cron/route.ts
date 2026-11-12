import type { NextRequest } from "next/server";
import { runOutreach } from "@/lib/outreach/engine";
import { checkCronSecret } from "@/lib/outreach/tokens";

export const maxDuration = 60;

/**
 * Hit this every 5 minutes (Vercel Cron, cron-job.org, GitHub Actions, ...):
 *   Authorization: Bearer <CRON_SECRET>    or    /api/outreach/cron?key=<CRON_SECRET>
 */
async function handle(request: NextRequest) {
  const bearer = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? null;
  const key = bearer ?? request.nextUrl.searchParams.get("key");
  if (!checkCronSecret(key)) return Response.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const result = await runOutreach();
    return Response.json({ ok: true, ...result });
  } catch (e) {
    return Response.json({ ok: false, error: e instanceof Error ? e.message : String(e) }, { status: 500 });
  }
}

export const GET = handle;
export const POST = handle;
