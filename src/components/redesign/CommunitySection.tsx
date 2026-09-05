"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowUpRight, Sparkles, Flame, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CommunitySection() {
  return (
    <section id="community" className="py-24 sm:py-32 px-4 sm:px-8 bg-white text-stone-900 border-b border-stone-200 relative overflow-hidden select-none">
      {/* Subtle Purple Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[520px] bg-gradient-to-tr from-purple-200/40 via-purple-100/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm"
          >
            <Users className="w-3.5 h-3.5 text-purple-700" />
            <span>PRIVATE COMMUNITY</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 tracking-tight uppercase font-hero leading-tight"
          >
            See What&apos;s Working. <br />
            <span className="font-serif italic lowercase animate-purple-gradient font-normal">in real time.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-stone-700 text-base sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed font-sans"
          >
            Join the private <span className="font-extrabold text-stone-950">ScaleWithAds™ Community</span> for Agency Owners, High-Ticket Coaches & Service Providers where we share real campaigns, client wins, strategies, tests, and what&apos;s working right now.
          </motion.p>
        </div>

        {/* 3 Metric Stat Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          <div className="p-6 rounded-3xl bg-[#FDFBF7] border-2 border-stone-950 shadow-md text-center hover:border-purple-600 transition-colors group">
            <span className="text-4xl sm:text-5xl font-black text-purple-900 font-hero tracking-tight block">
              350+
            </span>
            <span className="text-xs font-mono font-extrabold text-stone-600 uppercase tracking-wider block mt-2">
              Active Members
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-[#FDFBF7] border-2 border-stone-950 shadow-md text-center hover:border-purple-600 transition-colors group">
            <span className="text-4xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight block">
              Daily
            </span>
            <span className="text-xs font-mono font-extrabold text-purple-700 uppercase tracking-wider block mt-2">
              Strategy Drops
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-[#FDFBF7] border-2 border-stone-950 shadow-md text-center hover:border-purple-600 transition-colors group">
            <span className="text-4xl sm:text-5xl font-black text-purple-900 font-hero tracking-tight block">
              Live
            </span>
            <span className="text-xs font-mono font-extrabold text-stone-600 uppercase tracking-wider block mt-2">
              Campaign Data
            </span>
          </div>
        </motion.div>

        {/* Call to Action Banner & Facebook Group Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#1D1435] text-white border-2 border-stone-950 shadow-2xl text-center max-w-4xl mx-auto flex flex-col items-center justify-between gap-6"
        >
          <p className="text-stone-100 text-base sm:text-lg font-semibold max-w-2xl leading-relaxed">
            <span className="font-black text-purple-300 uppercase tracking-wider">Free to join.</span> Updated daily with real results, strategies and what&apos;s working right now across 30+ niches.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.facebook.com/groups/milliondollarmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-black text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center gap-3 active:scale-95 group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Join the Community - It&apos;s Free</span>
              <ArrowUpRight className="w-4 h-4 text-purple-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <span className="text-xs font-mono font-extrabold text-purple-300 bg-purple-900/60 border border-purple-700/60 px-4 py-2 rounded-full inline-flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>Facebook Group · Free Access</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
