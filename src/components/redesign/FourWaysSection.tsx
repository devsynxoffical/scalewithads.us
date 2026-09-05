"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, AlertTriangle, TrendingUp, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface CardItem {
  number: string;
  title: string;
  italicWord?: string;
  subtitle: string;
  icon: any;
  href: string;
}

export function FourWaysSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(3); // Default hover on 4th card

  const ways: CardItem[] = [
    {
      number: "01",
      title: "Most Agencies Only Run",
      italicWord: "ads",
      subtitle: "Most agencies only run ads. Some build funnels.",
      icon: Layers,
      href: "/services",
    },
    {
      number: "02",
      title: "Others Write",
      italicWord: "copy",
      subtitle: "Others write copy. Someone else handles follow-up.",
      icon: AlertTriangle,
      href: "/features",
    },
    {
      number: "03",
      title: "Nobody Owns The Customer",
      italicWord: "journey",
      subtitle: "Nobody owns the entire customer journey. That's exactly why businesses struggle to scale consistently.",
      icon: TrendingUp,
      href: "/work",
    },
    {
      number: "04",
      title: "One Complete Scale",
      italicWord: "ecosystem",
      subtitle: "At Scale With Ads™, we build one complete ecosystem where every part works together—from the first click to a qualified client sitting on your calendar.",
      icon: CheckCircle2,
      href: "/contact",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 bg-[#FDFBF7] text-stone-900 border-b border-stone-200 relative overflow-hidden">
      
      {/* Decorative Curving Accent Ribbon (Matching Lusion Studio Orange/Rose Curve) */}
      <div className="absolute top-0 right-10 md:right-32 w-48 sm:w-64 h-48 sm:h-64 border-r-8 border-t-8 border-rose-500 rounded-tr-[120px] opacity-90 pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header with requested title (NO BLACK) */}
        <div className="mb-20">
          <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full mb-6 inline-block shadow-sm">
            ✦ WHY MOST BUSINESSES NEVER SCALE
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-stone-950 tracking-tight leading-[1.02] uppercase font-hero max-w-5xl">
            Most Businesses Don't Have A Lead Problem... <br />
            <span className="text-purple-700 font-extrabold normal-case tracking-normal block mt-2">
              They Have A Client Acquisition System Problem.
            </span>
          </h2>
        </div>

        {/* 4 Interactive Hover Cards (Purple Inversion - NO BLACK) */}
        <div className="flex flex-col border-t border-stone-300">
          {ways.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`relative transition-all duration-400 ease-out border-b cursor-pointer ${
                  isHovered
                    ? "bg-[#9333EA] text-white border-2 border-stone-950 shadow-2xl shadow-purple-950/20 py-12 px-6 sm:px-10 rounded-3xl my-4"
                    : "bg-transparent text-stone-900 border-stone-300 py-10 px-4 sm:px-6 hover:border-stone-400"
                }`}
              >
                <Link href={item.href} className="block w-full">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Number Code */}
                    <div className="md:col-span-1">
                      <span
                        className={`text-xs font-mono font-bold tracking-widest transition-colors ${
                          isHovered ? "text-purple-200 font-black" : "text-stone-400"
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Main Title & Subtitle */}
                    <div className="md:col-span-8 flex flex-col gap-2">
                      <h3
                        className={`text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-none font-hero transition-colors ${
                          isHovered ? "text-white" : "text-stone-950"
                        }`}
                      >
                        {item.title}{" "}
                        {item.italicWord && (
                          <span
                            className={`italic font-serif font-normal lowercase pl-1.5 transition-colors ${
                              isHovered ? "text-purple-200" : "text-purple-900"
                            }`}
                          >
                            {item.italicWord}
                          </span>
                        )}
                      </h3>
                      <p
                        className={`text-sm sm:text-base font-semibold max-w-xl transition-colors mt-2 leading-relaxed ${
                          isHovered ? "text-purple-100" : "text-stone-600"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Right Side Icon & Arrow */}
                    <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-4">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all ${
                          isHovered
                            ? "bg-white/10 text-white border border-white/20 scale-110 shadow-lg"
                            : "bg-purple-100 text-purple-900 border border-purple-200"
                        }`}
                      >
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          isHovered
                            ? "bg-purple-600 text-white translate-x-1 -translate-y-1"
                            : "bg-transparent text-purple-700"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
