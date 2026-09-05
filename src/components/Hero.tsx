import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";

const trustBadges = [
  "Scale With Ads™ Client Acquisition System",
  "$50M+ Meta Ad Spend",
  "90-Day Written Guarantee",
  "100% DFY System",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pb-16 pt-28 text-white md:pb-24 md:pt-36">
      <div className="jobber-grid-dark pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 80% 10%, rgba(237,28,36,0.22), transparent 60%), radial-gradient(ellipse 45% 55% at 10% 95%, rgba(237,28,36,0.12), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="pill-badge-red animate-fade-in mb-4 shadow-xs">
            <span className="dot-red" />
            <span>SCALE WITH ADS™ · $10K+/MONTH BUSINESSES ONLY</span>
          </div>

          <h1 className="display animate-fade-up text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Double your revenue{" "}
            <span className="text-[var(--accent)]">in 90 days.</span>
          </h1>

          <p className="animate-fade-up mt-5 max-w-2xl text-lg font-medium leading-relaxed text-zinc-300 sm:text-xl">
            We install a complete done-for-you client acquisition system, 
            offer positioning, Meta Ads, high-converting funnels, CRM, and AI
            follow-up, so your only job is to take the calls and close premium
            clients.
          </p>

          <div className="animate-fade-up mt-8 flex w-full flex-col items-center gap-3.5 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href={BOOKING_PATH}
              className="btn btn-accent w-full px-8 py-4 text-base font-bold shadow-md transition-all hover:shadow-xl sm:w-auto"
            >
              Book Your Free Strategy Call →
            </Link>
            <Link
              href="#system"
              className="btn btn-outline-dark w-full px-7 py-4 text-base font-semibold sm:w-auto"
            >
              See the 8-Step System →
            </Link>
          </div>

          {/* Trust Badges Bar */}
          <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-zinc-800 pt-8">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent)] text-[9px] font-extrabold text-white">
                  ✓
                </span>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
