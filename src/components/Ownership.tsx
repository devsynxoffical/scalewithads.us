import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const owned = [
  "Landing Pages",
  "Sales Funnel",
  "CRM",
  "Automations",
  "Ad Creatives",
  "Copy",
  "Follow-Up Sequences",
  "Customer Data",
];

export function Ownership() {
  return (
    <section
      id="ownership"
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

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHeading
          eyebrow="NO LOCK-INS · NO HIDDEN OWNERSHIP"
          title={
            <>
              Unlike Most Agencies...
              <br className="hidden sm:block" />
              <span className="text-[var(--accent)]">You Own Everything.</span>
            </>
          }
          description="When we build your Client Acquisition System, it becomes your business asset."
        />

        <Reveal delay={120}>
          <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-zinc-800 bg-white/5 backdrop-blur-md/50 px-6 py-12 backdrop-blur-sm md:px-12 md:py-16">
            <div className="jobber-grid-dark pointer-events-none absolute inset-0" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 70% at 15% 20%, rgba(237,28,36,0.16), transparent 55%), radial-gradient(ellipse 40% 60% at 90% 90%, rgba(255,255,255,0.05), transparent 55%)",
              }}
            />
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <h3 className="display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                  You own every single{" "}
                  <span className="text-[var(--accent)]">asset we build.</span>
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
                  No lock-ins. No hidden ownership. No dependence on another
                  agency.
                </p>
                <Link
                  href={BOOKING_PATH}
                  className="btn btn-accent mt-8 inline-flex min-w-[260px] px-8 py-4 text-sm font-bold shadow-md"
                >
                  Book Your Free Strategy Call →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {owned.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-transparent/60 px-4 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-[var(--accent)]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-extrabold text-white">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
