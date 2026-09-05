"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKING_PATH } from "../lib/offer";
import { CheckCircle2, ArrowRight, Shield, Zap, Sparkles } from "lucide-react";

export function DetailedAgencyBox() {
  return (
    <section className="relative z-10 w-full bg-transparent py-20 md:py-32 text-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 md:p-14 shadow-2xl"
        >
          {/* Ambient red lighting glow */}
          <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-[#ed1c24]/20 blur-[130px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#7a3cff]/10 blur-[120px]" />

          {/* Top accent line */}
          <span className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-[#ed1c24]/80 to-transparent" />

          {/* Subtle grid texture */}
          <div className="studio-grid pointer-events-none absolute inset-0 opacity-40" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/40 bg-[#ed1c24]/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#ed1c24]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>AGENCY PHILOSOPHY</span>
              </div>

              <h2 className="display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
                CREATIVELY PLAYFUL, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
                  COMMERCIALLY POWERFUL.
                </span>
              </h2>

              <p className="text-base text-white/80 font-medium leading-relaxed max-w-xl">
                We believe that performance advertising shouldn&apos;t look like cheap infomercials. We blend high-end cinematic visual aesthetics with aggressive direct-response psychology to produce ads that scale predictably.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "100% Written 90-Day Guarantee",
                  "Full Ad Asset & Creative Ownership",
                  "Dedicated Senior Growth Team",
                  "Live Transparent KPI Dashboard",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                    <CheckCircle2 className="h-5 w-5 text-[#ed1c24] shrink-0" />
                    <span className="text-xs font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Row */}
              <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href={BOOKING_PATH}
                  className="btn btn-accent group flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 text-base font-extrabold shadow-[0_10px_35px_rgba(237,28,36,0.5)] transition-all hover:scale-[1.02]"
                >
                  <span>CLAIM YOUR GROWTH AUDIT</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
                  <Shield className="h-4 w-4 text-[#ed1c24]" />
                  <span>No long lock-in contracts</span>
                </div>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#ed1c24]/25 via-transparent to-transparent blur-2xl" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
                <Image
                  src="/media/covers/cover-mastermind.jpeg"
                  alt="Scale With Ads Team Studio"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Metric Badge over image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/20 bg-black/40 backdrop-blur-md/80 p-3.5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ed1c24] text-white">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-white">Scale With Ads™ Protocol</p>
                      <p className="text-[10px] text-white/70">$50M+ Meta & Google Ad Engine</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-emerald-500/20 px-2 py-1 text-[10px] font-extrabold text-emerald-400">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
