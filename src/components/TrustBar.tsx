import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SectionBackground } from "./ui/SectionBackground";
import { SpotlightCard } from "./ui/SpotlightCard";
import { CountUp } from "./ui/CountUp";
import { TrendingUp, Target, ShieldCheck, Zap } from "lucide-react";

const stats = [
  {
    to: 12,
    suffix: "+",
    label: "Years of Experience",
    sub: "Across agencies, coaches & B2B",
    icon: TrendingUp,
  },
  {
    to: 50,
    prefix: "$",
    suffix: "M+",
    label: "Managed in Meta Ads",
    sub: "Tested & proven campaigns",
    icon: Target,
  },
  {
    to: 90,
    suffix: " Days",
    label: "Revenue Guarantee",
    sub: "Backed by written agreement",
    icon: ShieldCheck,
  },
  {
    to: 100,
    suffix: "%",
    label: "DFY Client Acquisition",
    sub: "Offer, Ads, CRM, AI & Funnels",
    icon: Zap,
  },
];

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fafafa] py-16 text-zinc-950 md:py-24">
      <SectionBackground variant="light" grid />

      {/* Ambient red glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[46rem] max-w-full -translate-x-1/2 rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "radial-gradient(circle, #ed1c24 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHeading
          light
          eyebrow="THE PROVEN SYSTEM"
          title={
            <>
              The proven system behind{" "}
              <span className="text-[#ed1c24]">
                $50M+ in managed ad spend
              </span>
            </>
          }
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={idx * 70}>
                <SpotlightCard
                  border={false}
                  borderRadius={16}
                  spotlightColor="rgba(237, 28, 36, 0.14)"
                  className="rounded-2xl"
                >
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ed1c24]/50 hover:shadow-[0_18px_44px_-16px_rgba(237,28,36,0.4)]">
                    <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Icon */}
                    <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-red-900 bg-red-950 text-[#ed1c24] transition-all duration-300 group-hover:scale-110 group-hover:border-[#ed1c24]/30 group-hover:bg-[#ed1c24] group-hover:text-white group-hover:shadow-[0_0_16px_rgba(237,28,36,0.4)]">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="display stat-number text-2xl font-extrabold text-[#ed1c24] sm:text-3xl">
                      <CountUp
                        to={s.to}
                        prefix={s.prefix}
                        suffix={s.suffix}
                        duration={2}
                        separator={s.to >= 1000}
                      />
                    </span>
                    <p className="mt-1.5 text-sm font-bold text-zinc-900">{s.label}</p>
                    <p className="mt-0.5 text-xs font-medium text-zinc-500">
                      {s.sub}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <span className="h-px w-8 bg-zinc-300" />
            20+ industries · 17+ client operators · one system
            <span className="h-px w-8 bg-zinc-300" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
