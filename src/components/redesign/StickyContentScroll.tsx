"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { CheckCircle2, Layers, Target, Bot, ArrowRight } from "lucide-react";

interface StepItem {
  id: string;
  stepNum: string;
  title: string;
  subtitle: string;
  bullets: string[];
  gradient: string;
  icon: any;
  metric: string;
}

export function StickyContentScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setActiveIdx(0);
    } else if (latest < 0.5) {
      setActiveIdx(1);
    } else if (latest < 0.75) {
      setActiveIdx(2);
    } else {
      setActiveIdx(3);
    }
  });

  const steps: StepItem[] = [
    {
      id: "01",
      stepNum: "/01",
      title: "Market Research & Positioning",
      subtitle: "STEP 1 & STEP 2",
      bullets: [
        "Customer Analysis: Identify ideal client buying triggers",
        "Offer Positioning: Package your service to stand out from competitors",
        "Messaging Strategy: Formulate high-converting hook angles",
        "Competitive Landscape Audit",
      ],
      gradient: "from-purple-900 via-stone-900 to-black",
      icon: Target,
      metric: "Phase 1: Foundation",
    },
    {
      id: "02",
      stepNum: "/02",
      title: "Creatives & Sales Funnels",
      subtitle: "STEP 3 & STEP 4",
      bullets: [
        "Messaging & Creative Development: Direct-response ad copy & visuals",
        "Landing Pages & Funnels: Custom high-converting appointment flows",
        "VSL Scripting: Video sales letters engineered to convert cold traffic",
        "Conversion Rate Optimization (CRO)",
      ],
      gradient: "from-amber-600 via-rose-600 to-purple-950",
      icon: Layers,
      metric: "Phase 2: Conversion Assets",
    },
    {
      id: "03",
      stepNum: "/03",
      title: "Meta Ads & CRM AI Automations",
      subtitle: "STEP 5 & STEP 6",
      bullets: [
        "Meta Ads Management: Daily campaign management & scaling",
        "CRM & AI Automations: Automated SMS, email, and reminder flows",
        "Server-Side CAPI: 100% conversion attribution tracking",
        "Nurture Sequences: Automated lead follow-up 24/7",
      ],
      gradient: "from-purple-950 via-stone-950 to-purple-900",
      icon: Bot,
      metric: "Phase 3: Traffic & Nurture",
    },
    {
      id: "04",
      stepNum: "/04",
      title: "Lead Qualification & Closing",
      subtitle: "STEP 7 & STEP 8",
      bullets: [
        "Proprietary Multi-Validation: Filters out unqualified leads",
        "Show-Up Optimization: SMS reminders ensure high appointment attendance",
        "Close Premium Clients: You show up, take the calls & close deals",
        "90-Day Written Guarantee Milestones",
      ],
      gradient: "from-emerald-900 via-purple-950 to-black",
      icon: CheckCircle2,
      metric: "Phase 4: Revenue & Scale",
    },
  ];

  const currentStep = steps[activeIdx];
  const Icon = currentStep.icon;

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-white text-stone-900 border-b border-stone-200">
      
      {/* Sticky Container (Diroz Reference Layout) */}
      <div className="sticky top-0 h-screen flex flex-col justify-center px-4 sm:px-8 md:px-12 py-12 max-w-7xl mx-auto overflow-hidden">
        
        {/* Top Header Tag */}
        <div className="mb-8 flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full">
            ✦ HOW OUR CLIENT ACQUISITION SYSTEM WORKS
          </span>
          <span className="text-xs font-mono font-bold text-stone-400">
            Scroll down to explore phases ({activeIdx + 1}/4)
          </span>
        </div>

        {/* 2-Column Diroz Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Dynamic Animated Text Step */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-5xl font-black text-purple-900 font-mono">
                    {currentStep.stepNum}
                  </span>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-900">
                    {currentStep.subtitle}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight">
                  {currentStep.title}
                </h3>

                <div className="space-y-3.5 mt-6 pt-6 border-t border-stone-200">
                  {currentStep.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-stone-700 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Step Progress Indicators */}
            <div className="flex items-center gap-2 pt-6">
              {steps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIdx === idx
                      ? "w-12 bg-purple-700"
                      : "w-3 bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Cards / Image Visual */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotate: 3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className={`w-full aspect-[4/3] rounded-3xl p-8 sm:p-10 shadow-2xl border-4 border-stone-950 bg-gradient-to-br ${currentStep.gradient} text-white flex flex-col justify-between relative overflow-hidden`}>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-300" />
                    </div>
                    <span className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-white/20 text-white backdrop-blur-md">
                      {currentStep.metric}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase leading-none font-hero mb-2">
                      {currentStep.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-purple-200 font-medium">
                      Seamless 100% Done-For-You Implementation
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-stone-300 pt-4 border-t border-white/20">
                    <span>Scale With Ads™ Protocol</span>
                    <span>Phase {activeIdx + 1} of 4</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
