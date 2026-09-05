"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  ShieldCheck,
  Zap,
  Lock,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Bot,
  Check,
} from "lucide-react";
import Link from "next/link";

interface AdvantageItem {
  number: string;
  advTag: string;
  title: string;
  desc: string;
  highlight: string;
  icon: any;
  href: string;
}

export function DifferenceSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0); // Default active on 1st advantage

  const steps = [
    { num: "01", title: "Attracting Prospects" },
    { num: "02", title: "Qualifying Buyers" },
    { num: "03", title: "Nurturing & Follow-Up" },
    { num: "04", title: "Booked Appointments" },
  ];

  const advantages: AdvantageItem[] = [
    {
      number: "01",
      advTag: "ADVANTAGE 01",
      title: "Complete DFY Client Acquisition System",
      desc: "We build, launch, and optimize your entire ecosystem—from offer positioning and Meta Ads to high-converting funnels and CRM automation.",
      highlight: "100% Done-For-You",
      icon: Layers,
      href: "/services",
    },
    {
      number: "02",
      advTag: "ADVANTAGE 02",
      title: "Lead Qualification & Multi-Validation",
      desc: "Our proprietary multi-stage qualification filters leads before they hit your calendar, maximizing show-up and close rates.",
      highlight: "High-Ticket Filter",
      icon: ShieldCheck,
      href: "/features",
    },
    {
      number: "03",
      advTag: "ADVANTAGE 03",
      title: "CRM + AI Follow-Up Automations",
      desc: "Automated SMS, email sequences, and AI reminders execute instant follow-up to nurture leads 24 hours a day.",
      highlight: "Instant Follow-Up",
      icon: Bot,
      href: "/services",
    },
    {
      number: "04",
      advTag: "ADVANTAGE 04",
      title: "Everything Belongs To Your Business",
      desc: "You retain 100% ownership of your funnels, copy, ad assets, CRM, and customer data with zero lock-in contracts.",
      highlight: "100% Asset Ownership",
      icon: Lock,
      href: "/work",
    },
    {
      number: "05",
      advTag: "ADVANTAGE 05",
      title: "Revenue-Focused Growth Strategy",
      desc: "We focus exclusively on revenue growth, qualified sales calls, and top-line ROI—not vanity clicks or impressions.",
      highlight: "Revenue Over Clicks",
      icon: TrendingUp,
      href: "/contact",
    },
  ];

  return (
    <section id="difference" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#FDFBF7] text-stone-900 border-b border-stone-200 relative overflow-hidden select-none">
      
      {/* Decorative Curving Accent Ribbon (Matching Reference Layout) */}
      <div className="absolute top-0 right-10 md:right-32 w-48 sm:w-64 h-48 sm:h-64 border-r-8 border-t-8 border-rose-500 rounded-tr-[120px] opacity-90 pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-48 sm:w-64 h-48 sm:h-64 border-l-8 border-b-8 border-purple-400/40 rounded-bl-[120px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full mb-6 inline-block shadow-sm"
          >
            ✦ THE DIFFERENCE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-black text-stone-950 tracking-tight leading-[1.05] uppercase font-hero max-w-5xl"
          >
            We Don&apos;t Just Generate Leads... <br />
            <span className="animate-purple-gradient font-extrabold normal-case tracking-normal block mt-2">
              We Build A Complete Client Acquisition Ecosystem.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-stone-600 text-base sm:text-xl font-medium max-w-3xl leading-relaxed"
          >
            Unlike traditional marketing agencies, we handle every step of your customer journey inside one proven system.
          </motion.p>
        </div>

        {/* 4 Customer Journey Steps Grid / Pills Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {steps.map((step, sIdx) => (
            <div
              key={sIdx}
              className="p-5 rounded-2xl bg-white border-2 border-stone-950 shadow-md flex items-center gap-4 hover:border-purple-600 transition-colors group"
            >
              <span className="text-lg font-black font-mono text-purple-700 bg-purple-100 border border-purple-200 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                {step.num}
              </span>
              <span className="text-sm font-extrabold text-stone-950 group-hover:text-purple-700 transition-colors leading-tight">
                {step.title}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Core Advantages Sub-Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-300 pb-6">
          <div>
            <span className="text-xs font-mono font-black uppercase tracking-widest text-stone-500 block mb-1">
              OUR CORE ADVANTAGES
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-stone-950 uppercase font-hero tracking-tight">
              5 Pillar Architecture
            </h3>
          </div>
          <p className="text-xs font-mono font-extrabold text-purple-700 uppercase tracking-wider bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full w-fit">
            ✦ PROPRIETARY SCALE SYSTEM
          </p>
        </div>

        {/* 5 Interactive Hover Stacked Cards (Reference Layout from FourWaysSection) */}
        <div className="flex flex-col space-y-3">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`relative transition-all duration-300 ease-out cursor-pointer ${
                  isHovered
                    ? "bg-[#9333EA] text-white border-3 border-stone-950 shadow-2xl shadow-purple-950/25 py-10 sm:py-12 px-6 sm:px-10 rounded-3xl my-2"
                    : "bg-white text-stone-900 border-2 border-stone-900 hover:border-purple-500 py-8 px-6 sm:px-8 rounded-2xl my-1 shadow-sm"
                }`}
              >
                <div className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Number / Advantage Tag */}
                    <div className="md:col-span-3 flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-black tracking-widest px-3 py-1 rounded-full border ${
                          isHovered
                            ? "bg-white/20 text-white border-white/30"
                            : "bg-purple-100 text-purple-900 border-purple-300"
                        }`}
                      >
                        {item.advTag}
                      </span>
                    </div>

                    {/* Main Title & Description */}
                    <div className="md:col-span-6">
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-black font-hero uppercase tracking-tight leading-tight">
                        {item.title}
                      </h4>
                      <p
                        className={`mt-2 text-xs sm:text-sm font-medium leading-relaxed ${
                          isHovered ? "text-purple-100" : "text-stone-600"
                        }`}
                      >
                        {item.desc}
                      </p>

                      {/* Included in Ecosystem Highlight Tag */}
                      <div className="mt-4 flex items-center gap-2">
                        <span
                          className={`text-[11px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 ${
                            isHovered
                              ? "bg-amber-400 text-stone-950"
                              : "bg-stone-900 text-amber-300"
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                          <span>Included in Ecosystem</span>
                        </span>
                        <span
                          className={`text-[11px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full ${
                            isHovered
                              ? "bg-white/20 text-white"
                              : "bg-purple-100 text-purple-900 border border-purple-200"
                          }`}
                        >
                          {item.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Icon Column (No Arrow Button) */}
                    <div className="md:col-span-3 flex items-center justify-end">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                          isHovered
                            ? "bg-white text-purple-900 shadow-lg scale-110"
                            : "bg-purple-100 text-purple-700 border border-purple-200"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
