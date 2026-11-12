import Link from "next/link";
import type { ReactNode } from "react";
import { logout } from "./actions";

export const input =
  "w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900";
export const btn =
  "inline-flex items-center justify-center rounded-md bg-stone-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-stone-700 disabled:opacity-50";
export const btnGhost =
  "inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-3 py-1.5 text-sm font-medium text-stone-800 hover:bg-stone-100";
export const btnDanger =
  "inline-flex items-center justify-center rounded-md border border-red-200 bg-white px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50";

export function Shell({ children, crumb }: { children: ReactNode; crumb?: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/outreach" className="font-semibold tracking-tight text-base">
            DevSynx Outreach
          </Link>
          {crumb && <span className="text-stone-400">/</span>}
          {crumb}
        </div>
        <form action={logout}>
          <button className="text-sm text-stone-500 hover:text-stone-900">Log out</button>
        </form>
      </header>
      {children}
    </div>
  );
}

export function Card({ title, children, id, aside }: { title?: string; children: ReactNode; id?: string; aside?: ReactNode }) {
  return (
    <section id={id} className="mb-6 scroll-mt-6 rounded-xl border border-stone-200 bg-white p-5">
      {title && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-[15px] font-semibold">{title}</h2>
          {aside}
        </div>
      )}
      {children}
    </section>
  );
}

export function Flash({ ok, err }: { ok?: string; err?: string }) {
  if (!ok && !err) return null;
  return (
    <div
      className={`mb-6 rounded-lg border px-4 py-3 text-sm ${
        err ? "border-red-200 bg-red-50 text-red-800" : "border-emerald-200 bg-emerald-50 text-emerald-800"
      }`}
    >
      {err ?? ok}
    </div>
  );
}

const STATUS_STYLES: Record<string, string> = {
  active: "bg-blue-50 text-blue-700",
  completed: "bg-stone-100 text-stone-600",
  replied: "bg-emerald-50 text-emerald-700",
  bounced: "bg-red-50 text-red-700",
  unsubscribed: "bg-amber-50 text-amber-800",
  failed: "bg-red-50 text-red-700",
  paused: "bg-stone-100 text-stone-600",
  sent: "bg-emerald-50 text-emerald-700",
};

export function Badge({ status }: { status: string }) {
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[status] ?? "bg-stone-100 text-stone-600"}`}>
      {status}
    </span>
  );
}

export function Stat({ label, value, hint }: { label: string; value: ReactNode; hint?: string }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-white px-4 py-3">
      <div className="text-xs text-stone-500">{label}</div>
      <div className="mt-1 text-xl font-semibold tabular-nums">{value}</div>
      {hint && <div className="text-xs text-stone-400">{hint}</div>}
    </div>
  );
}

export function fmtDate(d: Date | string | null | undefined): string {
  if (!d) return "–";
  return new Date(d).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

export function first(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}
