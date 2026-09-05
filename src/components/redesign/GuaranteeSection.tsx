"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, FileCheck2, Award, CheckCircle2, Zap, Scale } from "lucide-react";

export function GuaranteeSection() {
  const guaranteePillars = [
    {
      step: "01",
      title: "90-Day Milestones",
      desc: "We establish clear, mutually agreed revenue benchmarks tailored to your business model.",
      tag: "AGREED TARGETS",
    },
    {
      step: "02",
      title: "Zero Management Fee",
      desc: "If we don't hit the target in 90 days, we work completely free until we do. Period.",
      tag: "NO RISK",
    },
    {
      step: "03",
      title: "Legally Binding",
      desc: "Every milestone and guarantee is written directly into our signed client agreement.",
      tag: "IN WRITING",
    },
  ];

  return (
    <section className="py-28 px-4 md:px-8 bg-[#FDFBF7] text-stone-900 border-b border-stone-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
            <span>OUR 90-DAY WRITTEN GUARANTEE</span>
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 tracking-tight leading-tight uppercase font-hero">
            We Take The Risk... <br />
            <span className="font-serif italic lowercase text-purple-700">not you.</span>
          </h2>
          <p className="mt-4 text-stone-600 font-medium text-base sm:text-lg max-w-xl mx-auto">
            A complete performance-backed partnership. We align our skin in the game directly with your revenue growth.
          </p>
        </div>

        {/* Editorial Guarantee Certificate Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[36px] border-2 border-stone-950 p-8 sm:p-12 shadow-xl mb-10 relative overflow-hidden"
        >
          {/* Top Stamp / Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-stone-200 mb-8">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 border-2 border-stone-950 text-purple-900 flex items-center justify-center shadow-sm">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-stone-950 font-hero tracking-tight">
                  Written Revenue Growth Agreement
                </h3>
                <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">
                  SIGNED ONBOARDING COVENANT // ZERO MANAGEMENT FEE CLAUSE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>100% RISK-FREE COVENANT</span>
            </div>
          </div>

          {/* Core Guarantee Statement */}
          <div className="space-y-6 mb-8">
            <p className="text-stone-700 text-lg sm:text-xl font-medium leading-relaxed">
              If we don&apos;t help you achieve the mutually agreed revenue growth milestones within the first <strong className="text-stone-950 font-extrabold">90 days</strong> of deploying your Client Acquisition System...
            </p>

            {/* High Impact Highlight Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-purple-50 border-2 border-purple-200 shadow-sm flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-stone-950 font-black text-lg sm:text-xl tracking-tight leading-snug font-hero mb-1">
                  We continue working at <span className="text-purple-700 underline decoration-purple-400 underline-offset-4">ZERO management fee</span> until we hit your target.
                </h4>
                <p className="text-stone-600 text-sm sm:text-base font-medium">
                  Everything is backed by a signed, legally binding contract before we run a single campaign.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Pillars Grid Inside the Guarantee */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-stone-200">
            {guaranteePillars.map((p, idx) => {
              const rot = idx === 0 ? -1 : idx === 1 ? 1 : -0.5;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, rotate: 0, y: -4 }}
                  animate={{ rotate: rot }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-5 rounded-2xl bg-[#FDFBF7] border-2 border-stone-950 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-black text-purple-700 bg-purple-100 border border-purple-200 px-2 py-0.5 rounded-full">
                        #{p.step}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest">
                        {p.tag}
                      </span>
                    </div>
                    <h5 className="text-base font-extrabold text-stone-950 font-hero tracking-tight mb-1.5">
                      {p.title}
                    </h5>
                    <p className="text-xs text-stone-600 font-medium leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Action Row */}
          <div className="mt-10 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-mono font-bold">
              <Scale className="w-4 h-4 text-purple-700" />
              <span>Standard written addendum with every client engagement</span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg active:scale-95 group"
            >
              <span>BOOK YOUR FREE STRATEGY CALL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
