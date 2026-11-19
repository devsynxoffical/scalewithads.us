"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, Loader2, Lock, MessageCircle } from "lucide-react";

const BUDGETS = ["Under $3,000 / month", "$3,000 – $10,000 / month", "$10,000 – $30,000 / month", "$30,000+ / month", "Not sure yet"];
const WHATSAPP = "https://wa.me/918287782334?text=" + encodeURIComponent("Hi, I'd like to talk about getting leads from Meta Ads.");

type Props = {
  /** Sent with the lead so you know which offer it came from. */
  industry: string;
  title?: string;
  subtitle?: string;
  companyLabel?: string;
  submitLabel?: string;
  /** "light" for white sections, "dark" for dark sections (card stays white). */
  className?: string;
};

function track(event: string, params: Record<string, string>) {
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  if (w.gtag) w.gtag("event", event, params);
  else w.dataLayer.push({ event, ...params });
}

const input =
  "w-full rounded-xl border-2 border-stone-200 bg-white px-4 py-3 text-[16px] text-stone-950 placeholder:text-stone-400 outline-none transition-colors focus:border-purple-600 focus:ring-4 focus:ring-purple-100";

export function LeadForm({
  industry,
  title = "Get your free lead plan",
  subtitle = "Tell us about your business. We reply within one business day with a plan for your market.",
  companyLabel = "Company",
  submitLabel = "Get my free plan",
  className = "",
}: Props) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, industry, page: window.location.pathname }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      track("generate_lead", { industry, page_path: window.location.pathname });
      setState("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className={`rounded-3xl border-2 border-stone-950 bg-white p-7 sm:p-9 text-center shadow-[0_25px_60px_rgba(147,51,234,0.22)] ${className}`}>
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <p className="mt-5 text-2xl font-black text-stone-950 font-hero">Thanks, we&apos;ve got your details.</p>
        <p className="mt-2 text-[16px] text-stone-600 leading-relaxed">We&apos;ll reply within one business day. Want to skip the wait? Pick a time for your strategy call now.</p>
        <Link href="/contact" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-4 text-sm font-black uppercase tracking-wider text-white hover:bg-purple-700 transition-colors">
          <CalendarCheck className="h-4 w-4" /> Book a call now
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-3xl border-2 border-stone-950 bg-white p-6 sm:p-8 text-left shadow-[0_25px_60px_rgba(147,51,234,0.22)] ${className}`}
      aria-label={title}
    >
      <p className="text-2xl font-black text-stone-950 tracking-tight font-hero">{title}</p>
      <p className="mt-1.5 text-[15px] text-stone-600 leading-relaxed">{subtitle}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Full name</span>
          <input name="name" required autoComplete="name" placeholder="Full name *" className={input} />
        </label>
        <label className="block">
          <span className="sr-only">{companyLabel}</span>
          <input name="company" autoComplete="organization" placeholder={companyLabel} className={input} />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="Email *" className={input} />
        </label>
        <label className="block">
          <span className="sr-only">Phone</span>
          <input name="phone" type="tel" required autoComplete="tel" placeholder="Phone *" className={input} />
        </label>
        <label className="block sm:col-span-2">
          <span className="sr-only">Monthly ad budget</span>
          <select name="budget" defaultValue="" className={`${input} appearance-none`}>
            <option value="" disabled>Monthly ad budget</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="sr-only">Anything we should know?</span>
          <textarea name="message" rows={3} placeholder="Your market, case types or services (optional)" className={`${input} resize-none`} />
        </label>
        {/* Honeypot: hidden from people, often filled by bots. */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      </div>

      {state === "error" && (
        <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error} You can also <Link href="/contact" className="underline">book a call</Link> or{" "}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="underline">message us on WhatsApp</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-700 px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_15px_35px_rgba(147,51,234,0.35)] transition-colors hover:bg-stone-950 disabled:opacity-70"
      >
        {state === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {state === "sending" ? "Sending…" : submitLabel}
        {state !== "sending" && <ArrowRight className="h-4 w-4" />}
      </button>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-semibold text-stone-500">
        <span className="inline-flex items-center gap-1"><Lock className="h-3.5 w-3.5" /> Your details stay private</span>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-emerald-700">
          <MessageCircle className="h-3.5 w-3.5" /> Prefer WhatsApp?
        </a>
      </div>
    </form>
  );
}
