"use client";

import { FormEvent, useState } from "react";

const options = [
  "Marketing & Ads",
  "Scale Funnels",
  "AI Automations",
  "Lead Qualification",
];

const inputCls =
  "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3.5 text-[15px] text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(237,28,36,0.12)]";

const labelCls = "block text-sm font-semibold text-zinc-700";

function SectionTitle({ index, children }: { index: string; children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--accent)] text-[11px] font-extrabold text-white">
        {index}
      </span>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
        {children}
      </h3>
      <span className="h-px flex-1 bg-zinc-200" />
    </div>
  );
}

const steps = [
  ["1", "Submit your application", "Takes about 2 minutes."],
  ["2", "We review fit", "Our team responds within 24 hours."],
  ["3", "Book your strategy call", "We map the system to your business."],
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Marketing & Ads");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="booking" className="section-shell bg-[var(--bg)]">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-10 text-center shadow-xl sm:p-14">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] shadow-lg shadow-[rgba(237,28,36,0.35)]">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="display mt-6 text-3xl text-[var(--ink)]">
              Application Received
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-zinc-500">
              Thank you! Our growth team will review your business fit and
              contact you within 24 hours to book your strategy call.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-600">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                <rect x="4" y="10" width="16" height="10" rx="2" />
                <path d="M8 10V7a4 4 0 018 0v3" strokeLinecap="round" />
              </svg>
              100% confidential
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section-shell bg-[var(--bg)]">
      <div className="mx-auto max-w-[1240px]">
        {/* Centered Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="pill-badge mb-4 justify-center">
            <span className="dot-accent" />
            <span>APPLY NOW</span>
          </div>
          <h2 className="display text-3xl font-extrabold leading-[1.1] tracking-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
            Tell us what you&apos;re working on.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            We build client acquisition systems for scale. Tell us about your
            business goals and let&apos;s build a system engineered to double
            your revenue.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {[
              "100% Done-For-You Implementation",
              "Written 90-Day Revenue Agreement",
              "Exclusive to $10K+/month Businesses",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-[var(--ink-soft)]">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-white">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What happens next */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {steps.map(([num, title, sub]) => (
            <div
              key={num}
              className="flex flex-col items-start rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:items-center sm:text-center"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-extrabold text-white">
                {num}
              </span>
              <p className="mt-3 text-sm font-extrabold tracking-tight text-[var(--ink)]">
                {title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                {sub}
              </p>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl sm:p-10"
        >
          {/* Card Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                Application Form
              </span>
            </div>
            <h3 className="display mt-3 text-2xl tracking-tight text-[var(--ink)] sm:text-[28px]">
              Book your free strategy call
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Takes 2 minutes. Our team responds within 24 hours.
            </p>
          </div>

          {/* Your Details */}
          <SectionTitle index="01">Your Details</SectionTitle>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="full-name">
                Full Name *
              </label>
              <input
                id="full-name"
                required
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                className={`mt-2 ${inputCls}`}
              />
            </div>

            <div>
              <label className={labelCls} htmlFor="work-email">
                Work Email *
              </label>
              <input
                id="work-email"
                required
                type="email"
                placeholder="john@company.com"
                autoComplete="email"
                className={`mt-2 ${inputCls}`}
              />
            </div>
          </div>

          <div className="mt-5">
            <label className={labelCls} htmlFor="phone">
              Phone / WhatsApp *
            </label>
            <input
              id="phone"
              required
              type="tel"
              placeholder="+1 (555) 000-0000"
              autoComplete="tel"
              className={`mt-2 ${inputCls}`}
            />
          </div>

          {/* Your Business */}
          <div className="mt-9 border-t border-zinc-100 pt-8">
            <SectionTitle index="02">Your Business</SectionTitle>

            <div className="mt-5">
              <span className={labelCls}>What is your primary focus?</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedTopic(opt)}
                    className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                      selectedTopic === opt
                        ? "bg-[var(--accent)] text-white shadow-md shadow-[rgba(237,28,36,0.3)]"
                        : "border border-zinc-300 bg-white text-zinc-600 hover:border-zinc-500 hover:text-[var(--ink)]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className={labelCls} htmlFor="revenue">
                Current Monthly Revenue *
              </label>
              <div className="relative mt-2">
                <select
                  id="revenue"
                  required
                  defaultValue="$10k - $25k/mo"
                  className={`${inputCls} appearance-none pr-10`}
                >
                  <option value="under-10k">Under $10k/mo (do not apply)</option>
                  <option value="$10k - $25k/mo">$10k - $25k / month</option>
                  <option value="$25k - $50k/mo">$25k - $50k / month</option>
                  <option value="$50k - $100k/mo">$50k - $100k / month</option>
                  <option value="$100k+/mo">$100k+ / month</option>
                </select>
                <svg
                  viewBox="0 0 20 20"
                  className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Your Project */}
          <div className="mt-9 border-t border-zinc-100 pt-8">
            <SectionTitle index="03">Your Project</SectionTitle>

            <div className="mt-5">
              <label className={labelCls} htmlFor="message">
                Message / Details
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your current offer, spend, and client acquisition goals..."
                className={`mt-2 resize-none ${inputCls}`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-accent mt-8 w-full py-4 text-base font-bold shadow-md hover:shadow-xl"
          >
            Submit Application →
          </button>

          <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-zinc-500">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
              <rect x="4" y="10" width="16" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 018 0v3" strokeLinecap="round" />
            </svg>
            100% confidential. Backed by a written agreement. No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}
