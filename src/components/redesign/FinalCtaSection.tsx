"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#1D1435] text-white text-center relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/80 border border-purple-500/30 text-purple-300 font-mono text-xs font-bold uppercase tracking-wider mb-8">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Transform Your Acquisition Infrastructure</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
          Ready To Build A Predictable <br className="hidden sm:inline" />
          <span className="text-purple-300">Client Acquisition System?</span>
        </h2>

        <p className="text-purple-100 text-base sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-10">
          Stop guessing. Stop relying on referrals. Stop switching agencies. <br className="hidden sm:inline" />
          Install a complete Client Acquisition System that consistently attracts, qualifies, nurtures, and books premium clients—so you can focus on closing deals and scaling your business.
        </p>

        <div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-lg transition-all shadow-2xl hover:shadow-purple-500/50 active:scale-95"
          >
            <span>BOOK YOUR FREE STRATEGY CALL</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
