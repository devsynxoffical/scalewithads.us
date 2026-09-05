"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, LineChart, ShieldCheck, Rocket, TrendingUp, Sparkles, Target, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface Pillar {
  id: string;
  number: string;
  stat: string;
  name: string;
  role: string;
  icon: any;
  gradient: string;
  badgeBg: string;
  targetX: number;
  targetRotate: number;
  zIndex: number;
  graphicType: "experience" | "chart" | "guarantee" | "acquisition";
}

export function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through a tall 280vh sticky container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const pillars: Pillar[] = [
    {
      id: "01",
      number: "001",
      stat: "12+ Years",
      name: "Years of Experience",
      role: "Across agencies, coaches & B2B",
      icon: Award,
      gradient: "from-[#1D1435] via-[#2A1B4E] to-[#0F0B1E]",
      badgeBg: "bg-purple-100 border-purple-300 text-purple-900",
      targetX: -390,
      targetRotate: -6,
      zIndex: 10,
      graphicType: "experience",
    },
    {
      id: "02",
      number: "002",
      stat: "$50M+",
      name: "Managed in Meta Ads",
      role: "Tested & proven campaigns",
      icon: LineChart,
      gradient: "from-[#2E1065] via-[#3B0764] to-[#1E1B4B]",
      badgeBg: "bg-purple-100 border-purple-300 text-purple-900",
      targetX: -130,
      targetRotate: -2,
      zIndex: 20,
      graphicType: "chart",
    },
    {
      id: "03",
      number: "003",
      stat: "90 Days",
      name: "Revenue Guarantee",
      role: "Backed by written agreement",
      icon: ShieldCheck,
      gradient: "from-[#064E3B] via-[#022C22] to-[#0F172A]",
      badgeBg: "bg-emerald-100 border-emerald-300 text-emerald-900",
      targetX: 130,
      targetRotate: 2,
      zIndex: 30,
      graphicType: "guarantee",
    },
    {
      id: "04",
      number: "004",
      stat: "100%",
      name: "DFY Client Acquisition",
      role: "Offer, Ads, CRM, AI & Funnels",
      icon: Rocket,
      gradient: "from-[#581C87] via-[#4C1D95] to-[#1E1035]",
      badgeBg: "bg-purple-100 border-purple-300 text-purple-900",
      targetX: 390,
      targetRotate: 6,
      zIndex: 40,
      graphicType: "acquisition",
    },
  ];

  // Stage 1 — Vertical Stacking Sequence (0.0 -> 0.55):
  const y0 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y1 = useTransform(scrollYProgress, [0.0, 0.15, 0.30], [500, 500, 0]);
  const y2 = useTransform(scrollYProgress, [0.0, 0.30, 0.45], [500, 500, 0]);
  const y3 = useTransform(scrollYProgress, [0.0, 0.45, 0.60], [500, 500, 0]);

  // Stage 2 — Horizontal Spread Sequence (0.55 -> 0.88):
  const spreadProgress = useTransform(scrollYProgress, [0.55, 0.88], [0, 1]);

  const x0 = useTransform(spreadProgress, (val) => val * pillars[0].targetX);
  const x1 = useTransform(spreadProgress, (val) => val * pillars[1].targetX);
  const x2 = useTransform(spreadProgress, (val) => val * pillars[2].targetX);
  const x3 = useTransform(spreadProgress, (val) => val * pillars[3].targetX);

  const rotate0 = useTransform(spreadProgress, (val) => val * pillars[0].targetRotate);
  const rotate1 = useTransform(spreadProgress, (val) => val * pillars[1].targetRotate);
  const rotate2 = useTransform(spreadProgress, (val) => val * pillars[2].targetRotate);
  const rotate3 = useTransform(spreadProgress, (val) => val * pillars[3].targetRotate);

  const cardY = [y0, y1, y2, y3];
  const cardX = [x0, x1, x2, x3];
  const cardRotate = [rotate0, rotate1, rotate2, rotate3];

  return (
    <div ref={containerRef} className="relative h-[280vh] bg-[#FDFBF7] text-stone-900 border-b border-stone-200">
      
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 pt-28 sm:pt-36 pb-8">
        <div className="max-w-6xl mx-auto text-center w-full flex flex-col items-center justify-center">
          

          {/* 2-Stage Sticky Interactive Data Cards Deck */}
          <div className="relative min-h-[400px] sm:min-h-[460px] w-full flex items-center justify-center mt-2 mb-6">
            <div className="relative w-full max-w-5xl flex items-center justify-center">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.id}
                    style={{
                      y: cardY[idx],
                      x: cardX[idx],
                      rotate: cardRotate[idx],
                      opacity: 1, // 100% Solid Opaque
                      zIndex: pillar.zIndex,
                    }}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 60 }}
                    className="w-64 sm:w-72 md:w-80 h-[380px] sm:h-[430px] rounded-[36px] border-2 border-stone-950 bg-white shadow-2xl absolute overflow-hidden flex flex-col justify-between cursor-pointer select-none transition-shadow hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)]"
                  >
                    {/* Top Hole Punch & Pillar Number */}
                    <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between">
                      <span className="text-xl font-mono text-white/70 font-bold">°</span>
                      <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30">
                        {pillar.number}
                      </span>
                    </div>

                    {/* Vector Data & Metric Graphic Background (No Client Photos) */}
                    <div className={`absolute inset-0 w-full h-full z-0 overflow-hidden bg-gradient-to-br ${pillar.gradient} p-6 flex flex-col justify-center`}>
                      
                      {/* Ambient Grid Overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                      {/* Dynamic Graphic Content Based on Pillar Type */}
                      {pillar.graphicType === "experience" && (
                        <div className="relative z-10 flex flex-col items-center justify-center text-center mt-4">
                          <div className="w-16 h-16 rounded-3xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-xl mb-3">
                            <Award className="w-8 h-8" />
                          </div>
                          <span className="text-4xl font-black text-white font-mono tracking-tight">12+ YEARS</span>
                          <span className="text-xs font-bold font-mono text-purple-300 uppercase tracking-widest mt-1">Multi-Vertical Mastery</span>
                          <div className="mt-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono text-stone-200">
                            <Target className="w-3 h-3 text-purple-300" />
                            <span>Agencies · Coaches · B2B</span>
                          </div>
                        </div>
                      )}

                      {pillar.graphicType === "chart" && (
                        <div className="relative z-10 flex flex-col items-center justify-center text-center mt-4">
                          <div className="w-16 h-16 rounded-3xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-xl mb-3">
                            <LineChart className="w-8 h-8" />
                          </div>
                          <span className="text-4xl font-black text-white font-mono tracking-tight">$50M+</span>
                          <span className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest mt-1 flex items-center gap-1">
                            <TrendingUp className="w-3.5 h-3.5" /> +142% ROAS Telemetry
                          </span>
                          
                          {/* Mini SVG Curve */}
                          <div className="w-full h-10 mt-3 relative">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40">
                              <path d="M 0 35 Q 50 25 100 15 T 200 5" fill="none" stroke="#A855F7" strokeWidth="3" />
                              <circle cx="200" cy="5" r="4" fill="#A855F7" />
                            </svg>
                          </div>
                        </div>
                      )}

                      {pillar.graphicType === "guarantee" && (
                        <div className="relative z-10 flex flex-col items-center justify-center text-center mt-4">
                          <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-xl mb-3">
                            <ShieldCheck className="w-8 h-8" />
                          </div>
                          <span className="text-4xl font-black text-white font-mono tracking-tight">90 DAYS</span>
                          <span className="text-xs font-bold font-mono text-emerald-300 uppercase tracking-widest mt-1">Written Agreement</span>
                          <div className="mt-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-mono text-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                            <span>Double Revenue or $0 Fee</span>
                          </div>
                        </div>
                      )}

                      {pillar.graphicType === "acquisition" && (
                        <div className="relative z-10 flex flex-col items-center justify-center text-center mt-4">
                          <div className="w-16 h-16 rounded-3xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-xl mb-3">
                            <Rocket className="w-8 h-8" />
                          </div>
                          <span className="text-4xl font-black text-white font-mono tracking-tight">100% DFY</span>
                          <span className="text-xs font-bold font-mono text-purple-300 uppercase tracking-widest mt-1">Complete Tech Stack</span>
                          <div className="mt-4 flex flex-wrap justify-center gap-1">
                            {["Offer", "Ads", "CRM", "AI", "Funnels"].map((t) => (
                              <span key={t} className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-mono font-bold text-stone-200">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Bottom White Identity Badge with Icon & Official Stat Info */}
                    <div className="relative z-10 mt-auto p-4">
                      <div className="bg-white rounded-2xl border-2 border-stone-950 p-4 text-left shadow-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-white">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-base font-black text-purple-700 font-mono tracking-tight">
                            {pillar.stat}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-base sm:text-lg text-stone-950 tracking-tight leading-tight font-hero">
                          {pillar.name}
                        </h3>
                        <p className="text-stone-500 text-xs font-semibold mt-1">
                          {pillar.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA Link */}
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-950 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-purple-700 transition-colors"
            >
              <span>Book Your Free Call Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
