"use client";

import Link from "next/link";
import { BOOKING_PATH } from "../lib/offer";
import AnimatedDotBackground from "./ui/AnimatedDotBackground";
import { Reveal } from "./Reveal";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

const pains = [
  "Stop guessing.",
  "Stop relying on referrals.",
  "Stop switching agencies.",
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0e] py-20 text-white md:py-28 border-t border-white/10">
      {/* Animated red dots background with lower opacity for perfect readability */}
      <AnimatedDotBackground color="#ed1c24" particleCount={90} speed={0.5} opacity={0.35} />

      {/* Ambient gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(237,28,36,0.12),transparent_100%)]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 text-center md:px-8 z-10">
        <Reveal>
          {/* Section Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#ed1c24] animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ed1c24]">
              FINAL STEP
            </span>
          </div>

          {/* Main Title */}
          <h2 className="display mx-auto mt-6 max-w-4xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            Ready To Build A Predictable{" "}
            <span className="text-[#ed1c24]">
              Client Acquisition System?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 font-medium sm:text-lg">
            Install a complete Client Acquisition System that consistently
            attracts, qualifies, nurtures, and books premium clients, so you can
            focus on closing deals and scaling your business.
          </p>

          {/* Pain Point Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {pains.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:border-[#ed1c24]/40 hover:bg-white/10"
              >
                <CheckCircle2 className="h-4 w-4 text-[#ed1c24]" />
                <span>{item}</span>
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={BOOKING_PATH}
              className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-[#ed1c24] px-8 py-4 text-base font-extrabold text-white shadow-[0_0_30px_rgba(237,28,36,0.4)] transition-all duration-300 hover:bg-[#d0171e] hover:shadow-[0_0_45px_rgba(237,28,36,0.6)] hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Book Your Free Strategy Call</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="#system"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              See How It Works
            </Link>
          </div>

          {/* Guarantee / Fine Print */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-white/60">
            <ShieldCheck className="h-4 w-4 text-[#ed1c24]" />
            <span>$10K/month minimum · 90-day written guarantee · You own everything.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
