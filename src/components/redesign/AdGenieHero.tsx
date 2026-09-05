"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { MacbookScroll } from "../ui/MacbookScroll";

export function AdGenieHero() {
  // Ultra-smooth slow silk cubic-bezier curve (Webflow signature easing)
  const silkEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 px-4 md:px-8 bg-white text-stone-900 overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-purple-200/40 via-purple-100/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">

        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: silkEase }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-xs tracking-widest uppercase mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-purple-700" />
          <span>SCALEWITHADS™ CLIENT ACQUISITION SYSTEM</span>
        </motion.div>

        {/* 1. TOP SUB-TEXT (Above Giant Headline) */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.15, ease: silkEase }}
          className="text-lg sm:text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight font-sans max-w-3xl leading-snug"
        >
          We Will Install Our Proprietary <span className="text-purple-700 font-black">ScaleWithAds™</span> <br className="hidden sm:inline" />
          Client Acquisition System Into Your Business.
        </motion.p>

        {/* 2. CENTER GIANT HEADLINE WITH MOVING ANIMATED GRADIENT */}
        <div className="overflow-hidden py-4 my-2 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 60, skewX: -8, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              y: 0,
              skewX: 0,
              filter: "blur(0px)",
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              opacity: { duration: 1.6, delay: 0.3, ease: silkEase },
              y: { duration: 1.6, delay: 0.3, ease: silkEase },
              skewX: { duration: 1.6, delay: 0.3, ease: silkEase },
              filter: { duration: 1.6, delay: 0.3, ease: silkEase },
              backgroundPosition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tighter uppercase leading-[0.98] font-hero bg-gradient-to-r from-stone-950 via-purple-700 to-stone-950 bg-[length:200%_auto] bg-clip-text text-transparent select-none drop-shadow-sm"
          >
            Double Your Revenue <br />
            Within The Next 90 Days
          </motion.h1>
        </div>

        {/* 3. BOTTOM SUB-TEXT (Below Giant Headline) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.55, ease: silkEase }}
          className="mt-2 max-w-3xl text-center space-y-3 font-sans"
        >
          <p className="text-base sm:text-xl font-bold text-stone-800 max-w-2xl mx-auto leading-relaxed">
            Or We&apos;ll Continue Working For You At <span className="font-extrabold text-stone-950 underline underline-offset-4 decoration-purple-500">No Management Fee</span> Until We Do.
          </p>

          <p className="text-xs sm:text-sm font-semibold text-stone-600 tracking-wide uppercase">
            Done-For-You Client Acquisition From Meta Ads To The Booked Call.
          </p>

          {/* Clean Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3">
            <span className="px-4 py-1.5 rounded-full bg-stone-950 text-white font-mono text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>Backed By A Written Agreement</span>
            </span>
            <span className="px-4 py-1.5 rounded-full bg-purple-100 text-purple-950 border border-purple-300 font-mono text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-700" />
              <span>100% Asset Ownership</span>
            </span>
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-mono text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-700" />
              <span>Zero Risk Guarantee</span>
            </span>
          </div>
        </motion.div>

        {/* Static Realistic MacBook Pro Container containing VSL */}
        <div className="w-full mt-6 sm:mt-10">
          <MacbookScroll videoSrc="https://www.youtube.com/embed/1PGP3xs_nBk" />
        </div>

        {/* Hero CTA Button Moved Below VSL */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.75, ease: silkEase }}
          className="mt-10 sm:mt-14 flex flex-col items-center justify-center"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-12 py-5 sm:px-16 sm:py-6 text-xl sm:text-2xl font-black rounded-full bg-stone-950 hover:bg-purple-700 text-white shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-purple-500/40 inline-flex items-center justify-center gap-3 tracking-wider uppercase"
          >
            <span>BOOK YOUR FREE STRATEGY CALL</span>
            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </Link>
          <span className="mt-3.5 text-xs font-mono font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% Free Strategy Session • Limited Weekly Spots</span>
          </span>
        </motion.div>

      </div>
    </section>
  );
}
