import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";

const points = [
  "If we don't help you achieve the mutually agreed growth milestones within the first 90 days after implementing your Client Acquisition System...",
  "We'll continue working for you at no management fee until we do.",
  "Everything is backed by a written agreement.",
];

export function Guarantee() {
  return (
    <section
      id="guarantee"
      className="relative overflow-hidden border-b border-zinc-800 bg-transparent py-16 text-white md:py-24"
    >
      <div className="jobber-grid-dark pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(237,28,36,0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
        <Reveal className="h-full">
          <div className="relative overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-md/60 px-6 py-12 text-white shadow-[0_24px_60px_-24px_rgba(16,24,40,0.6)] backdrop-blur-sm md:px-12 md:py-16">
            <div className="studio-grid absolute inset-0 opacity-60" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 80% at 10% 50%, rgba(237,28,36,0.28), transparent 55%), radial-gradient(ellipse 40% 60% at 90% 20%, rgba(255,255,255,0.1), transparent 50%)",
              }}
            />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-[var(--accent-bright)] backdrop-blur-sm">
                  <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden>
                    <path
                      d="M12 2c4 1.5 6.5 5 6.5 9.5 1.5 1.8 2.5 4 2.5 6.5l-4-1c-1.2 1.6-3 2.8-5 3-2-.2-3.8-1.4-5-3l-4 1c0-2.5 1-4.7 2.5-6.5C5.5 7 8 3.5 12 2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-bright)]">
                  Our 90-day guarantee
                </p>
                <h2 className="display mt-3 text-[clamp(1.8rem,4vw,2.8rem)]">
                  We Take The Risk...
                  <br />
                  <span className="text-[var(--accent-bright)]">Not You.</span>
                </h2>
              </div>

              <div className="space-y-4">
                {points.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur-sm md:p-6"
                  >
                    <span className="display flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bright)] text-lg text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-white/85 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-10 text-center">
          <Link
            href={BOOKING_PATH}
            className="btn btn-accent inline-flex min-w-[280px] px-8 py-4 text-sm font-bold shadow-md"
          >
            Book Your Free Strategy Call →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
