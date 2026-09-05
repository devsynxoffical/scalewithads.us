"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  X,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export function ResultsSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // All 59 proof images from /public/workproof/
  const proofFiles = [
    "Screenshot 2026-08-17 at 5.46.06 PM.png",
    "Screenshot 2026-08-17 at 5.54.23 PM.png",
    "Screenshot 2026-08-17 at 5.55.25 PM.png",
    "Screenshot 2026-08-17 at 5.56.26 PM.png",
    "Screenshot 2026-08-17 at 5.57.01 PM.png",
    "Screenshot 2026-08-17 at 5.57.38 PM.png",
    "Screenshot 2026-08-17 at 5.58.17 PM.png",
    "Screenshot 2026-08-17 at 5.59.22 PM.png",
    "Screenshot 2026-08-17 at 5.59.39 PM.png",
    "Screenshot 2026-08-17 at 6.00.34 PM.png",
    "Screenshot 2026-08-17 at 6.01.09 PM.png",
    "Screenshot 2026-08-17 at 6.01.36 PM.png",
    "Screenshot 2026-08-17 at 6.02.06 PM.png",
    "Screenshot 2026-08-17 at 6.02.37 PM.png",
    "Screenshot 2026-08-17 at 6.02.58 PM.png",
    "Screenshot 2026-08-17 at 6.03.13 PM.png",
    "Screenshot 2026-08-17 at 6.03.59 PM.png",
    "Screenshot 2026-08-17 at 6.05.25 PM.png",
    "Screenshot 2026-08-19 at 3.18.50 PM.png",
    "Screenshot 2026-08-19 at 3.19.20 PM.png",
    "Screenshot 2026-08-19 at 3.19.41 PM.png",
    "Screenshot 2026-08-19 at 3.19.55 PM.png",
    "Screenshot 2026-08-19 at 3.20.36 PM.png",
    "Screenshot 2026-08-19 at 3.20.46 PM.png",
    "Screenshot 2026-08-19 at 3.21.03 PM.png",
    "Screenshot 2026-08-19 at 3.21.36 PM.png",
    "Screenshot 2026-08-19 at 3.21.49 PM.png",
    "Screenshot 2026-08-19 at 3.22.11 PM.png",
    "Screenshot 2026-08-19 at 3.22.25 PM.png",
    "Screenshot 2026-08-19 at 3.22.55 PM.png",
    "Screenshot 2026-08-19 at 3.23.19 PM.png",
    "Screenshot 2026-08-19 at 3.23.31 PM.png",
    "Screenshot 2026-08-19 at 3.23.39 PM.png",
    "Screenshot 2026-08-19 at 3.23.57 PM.png",
    "Screenshot 2026-08-19 at 3.24.27 PM.png",
    "Screenshot 2026-08-19 at 3.24.37 PM.png",
    "Screenshot 2026-08-19 at 3.24.48 PM.png",
    "Screenshot 2026-08-19 at 3.25.17 PM.png",
    "Screenshot 2026-08-19 at 3.25.33 PM.png",
    "Screenshot 2026-08-19 at 3.25.49 PM.png",
    "Screenshot 2026-08-19 at 3.26.12 PM.png",
    "Screenshot 2026-08-19 at 3.26.34 PM.png",
    "Screenshot 2026-08-19 at 3.26.47 PM.png",
    "Screenshot 2026-08-19 at 3.27.02 PM.png",
    "Screenshot 2026-08-19 at 3.29.29 PM.png",
    "Screenshot 2026-08-19 at 3.29.45 PM.png",
    "Screenshot 2026-08-19 at 3.29.56 PM.png",
    "Screenshot 2026-08-19 at 3.30.11 PM.png",
    "Screenshot 2026-08-19 at 3.31.27 PM.png",
    "Screenshot 2026-08-19 at 3.31.40 PM.png",
    "Screenshot 2026-08-19 at 3.32.18 PM.png",
    "Screenshot 2026-08-19 at 3.32.34 PM.png",
    "Screenshot 2026-08-19 at 3.32.48 PM.png",
    "Screenshot 2026-08-19 at 3.32.59 PM.png",
    "Screenshot 2026-08-19 at 3.33.08 PM.png",
    "Screenshot 2026-08-19 at 3.33.25 PM.png",
    "Screenshot 2026-08-19 at 4.33.48 PM.png",
    "Screenshot 2026-08-19 at 4.33.58 PM.png",
    "Screenshot 2026-08-19 at 4.34.11 PM.png",
  ];

  // Helper to build encoded image src
  const getImgSrc = (file: string) => `/workproof/${encodeURIComponent(file)}`;

  // Split images into 2 continuous scrolling rows for the marquee
  const row1 = proofFiles.slice(0, 20);
  const row2 = proofFiles.slice(20, 40);
  const row3 = proofFiles.slice(40);

  const featuredProof = proofFiles.slice(0, 6);

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 bg-[#FDFBF7] text-stone-900 border-b border-stone-200 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-purple-200/30 via-rose-200/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            ✦ PROVEN TRACK RECORD
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-stone-950 leading-tight uppercase font-hero">
            Don&apos;t Take Our Word For It... <br />
            <span className="font-serif italic lowercase animate-purple-gradient">see what our clients have achieved.</span>
          </h2>

          <p className="mt-4 text-stone-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Real revenue dashboards, verified Meta Ads ROI, and client case studies.
          </p>
        </div>

        {/* FEATURED PROOF CARDS GRID (Top Highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProof.map((file, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedImg(file)}
              className="group relative rounded-3xl bg-white border-2 border-stone-200/90 hover:border-purple-600 shadow-lg hover:shadow-2xl transition-all duration-300 p-3 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative w-full h-[240px] sm:h-[270px] rounded-2xl overflow-hidden bg-stone-900 border border-stone-200">
                <img
                  src={getImgSrc(file)}
                  alt={`Verified Client Proof ${idx + 1}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Glassmorphic Overlay Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>VERIFIED RESULT #{idx + 1}</span>
                </div>

                {/* Expand Hover Badge */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                  <div className="px-4 py-2 rounded-full bg-white text-stone-950 font-bold text-xs flex items-center gap-2 shadow-xl">
                    <Maximize2 className="w-4 h-4 text-purple-700" />
                    <span>Click to Expand</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Title */}
              <div className="p-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-stone-950 block uppercase tracking-wider">
                    Client Telemetry & ROI
                  </span>
                  <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5" /> Verified Revenue Growth
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center group-hover:bg-purple-700 group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 50+ SCREENSHOTS CONTINUOUS MARQUEE STREAM */}
        <div className="mb-16 select-none overflow-hidden rounded-3xl bg-stone-950 p-6 sm:p-10 border border-stone-800 text-white shadow-2xl relative">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-stone-300">
                50+ LIVE VERIFIED REVENUE DASHBOARDS
              </span>
            </div>
            <span className="text-xs font-mono text-purple-400 font-bold bg-purple-950/80 px-3 py-1 rounded-full border border-purple-800/50">
              UPDATED LIVE
            </span>
          </div>

          {/* Marquee Row 1 */}
          <div className="overflow-hidden mb-6">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 45, repeat: Infinity }}
              className="flex items-center gap-4 w-max"
            >
              {[...row1, ...row1].map((file, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImg(file)}
                  className="w-[260px] sm:w-[320px] h-[170px] sm:h-[200px] rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shrink-0 cursor-pointer group hover:border-purple-500 transition-all duration-300 relative"
                >
                  <img
                    src={getImgSrc(file)}
                    alt="Client Proof Screenshot"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-6 h-6 text-white drop-shadow-md" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Marquee Row 2 */}
          <div className="overflow-hidden mb-6">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 50, repeat: Infinity }}
              className="flex items-center gap-4 w-max"
            >
              {[...row2, ...row2].map((file, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImg(file)}
                  className="w-[260px] sm:w-[320px] h-[170px] sm:h-[200px] rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shrink-0 cursor-pointer group hover:border-purple-500 transition-all duration-300 relative"
                >
                  <img
                    src={getImgSrc(file)}
                    alt="Client Proof Screenshot"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-6 h-6 text-white drop-shadow-md" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Marquee Row 3 */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
              className="flex items-center gap-4 w-max"
            >
              {[...row3, ...row3].map((file, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImg(file)}
                  className="w-[260px] sm:w-[320px] h-[170px] sm:h-[200px] rounded-xl overflow-hidden border border-stone-800 bg-stone-900 shrink-0 cursor-pointer group hover:border-purple-500 transition-all duration-300 relative"
                >
                  <img
                    src={getImgSrc(file)}
                    alt="Client Proof Screenshot"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-6 h-6 text-white drop-shadow-md" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

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

      {/* FULLSCREEN LIGHTBOX POPUP */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full bg-stone-900 rounded-3xl overflow-hidden border border-stone-700 shadow-2xl flex flex-col"
            >
              {/* Lightbox Header */}
              <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between text-white bg-stone-950/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-wider">
                    VERIFIED CLIENT REVENUE TELEMETRY
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImg(null)}
                  className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Image View */}
              <div className="p-4 sm:p-6 overflow-auto max-h-[80vh] flex items-center justify-center bg-black">
                <img
                  src={getImgSrc(selectedImg)}
                  alt="Full-size Client Proof"
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-stone-800"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
