"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

export function ProblemSection() {
  const problems = [
    "Most agencies only run ads.",
    "Some build funnels.",
    "Others write copy.",
    "Someone else handles follow-up.",
    "Nobody owns the entire customer journey.",
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-[#FDFBF7] text-stone-900 border-b border-stone-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 bg-purple-100 px-3.5 py-1.5 rounded-full inline-block mb-4">
            The Scaling Bottleneck
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
            Most Businesses Don&apos;t Have A Lead Problem... <br className="hidden sm:inline" />
            <span className="text-purple-700">They Have A Client Acquisition System Problem.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Fragmented Approach Card */}
          <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-200/80 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full blur-2xl -z-10" />
            <h3 className="text-xl font-bold text-rose-950 mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
              <span>The Fragmented Agency Trap</span>
            </h3>

            <div className="space-y-4">
              {problems.map((prob, idx) => (
                <div key={idx} className="flex items-start gap-3 text-stone-700 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span>{prob}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-rose-200 text-xs font-bold text-rose-900 leading-relaxed">
              That&apos;s exactly why businesses struggle to scale consistently.
            </div>
          </div>

          {/* Scale With Ads Unified System */}
          <div className="p-8 rounded-3xl bg-purple-900 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl -z-10" />
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-purple-400 shrink-0" />
              <span>The Unified Ecosystem</span>
            </h3>

            <p className="text-purple-100 text-sm font-medium leading-relaxed mb-6">
              At <strong className="text-white">Scale With Ads™</strong>, we build one complete ecosystem where every part works together seamlessly.
            </p>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-xs text-purple-200 space-y-2 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>First Click &rarr; Offer Positioning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ad Creatives &rarr; Sales Funnel</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AI Nurturing &rarr; Qualified Calendar Booking</span>
              </div>
            </div>

            <div className="mt-8 text-xs font-semibold text-purple-300">
              One accountability partner. One predictable client stream.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
