"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  PenTool,
  Layout,
  Megaphone,
  Bot,
  Filter,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Market Research & Customer Analysis",
      desc: "We identify exactly who your ideal clients are and what makes them buy.",
      icon: Search,
      accent: "from-purple-500 to-indigo-600",
    },
    {
      number: "02",
      title: "Offer Positioning",
      desc: "We package and position your service so it stands out from competitors.",
      icon: Target,
      accent: "from-indigo-500 to-blue-600",
    },
    {
      number: "03",
      title: "Messaging & Creative Development",
      desc: "We create ad copy and creatives that attract premium buyers.",
      icon: PenTool,
      accent: "from-blue-500 to-cyan-600",
    },
    {
      number: "04",
      title: "Landing Pages & Sales Funnel",
      desc: "We build high-converting landing pages and funnels designed to convert traffic into booked appointments.",
      icon: Layout,
      accent: "from-cyan-500 to-emerald-600",
    },
    {
      number: "05",
      title: "Meta Ads Management",
      desc: "We launch, manage, and optimise your campaigns daily.",
      icon: Megaphone,
      accent: "from-rose-500 to-purple-600",
    },
    {
      number: "06",
      title: "CRM & AI Automations",
      desc: "Every lead automatically enters your CRM with automated email, SMS, reminders, and follow-up.",
      icon: Bot,
      accent: "from-purple-600 to-pink-600",
    },
    {
      number: "07",
      title: "Lead Qualification",
      desc: "Our proprietary multi-validation process filters leads before they reach your calendar, improving booking and show-up rates.",
      icon: Filter,
      accent: "from-pink-500 to-rose-600",
    },
    {
      number: "08",
      title: "Close Premium Clients",
      desc: "You simply attend the appointments and close the deals while our system works in the background.",
      icon: CheckCircle2,
      accent: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 bg-[#FDFBF7] text-stone-900 border-b border-stone-200 relative overflow-hidden">
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-purple-200/30 via-rose-100/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            ✦ SECTION 5 — HOW OUR CLIENT ACQUISITION SYSTEM WORKS
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-stone-950 leading-tight uppercase font-hero">
            Our 8-Step Client Acquisition <span className="text-purple-700">Process</span>
          </h2>

          <p className="mt-4 text-stone-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            From deep market research to automated qualification & booked deals—here is our exact end-to-end blueprint.
          </p>
        </div>

        {/* 8 Connected Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-stone-200/90 hover:border-purple-600 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group cursor-pointer overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${step.accent}`} />

                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-black text-purple-900 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full tracking-wider">
                      STEP {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-stone-950 text-white flex items-center justify-center shadow-lg group-hover:bg-purple-700 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-purple-300 group-hover:text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-stone-950 mb-3 leading-snug font-hero group-hover:text-purple-700 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator Arrow */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-400 group-hover:text-purple-700 transition-colors">
                  <span>Phase {step.number}</span>
                  <Sparkles className="w-3.5 h-3.5 text-purple-400 group-hover:rotate-12 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#1D1435] hover:bg-[#2C1D50] text-white font-bold text-base transition-all shadow-xl hover:shadow-2xl active:scale-95 group"
          >
            <span>BOOK YOUR FREE STRATEGY CALL</span>
            <ArrowRight className="w-5 h-5 text-purple-300 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
