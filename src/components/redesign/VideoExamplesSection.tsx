"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface VideoCard {
  id: string;
  number: string;
  title: string;
  category: string;
  aspect: string;
  poster: string;
  videoUrl?: string;
  highlightOrange?: boolean;
}

export function VideoExamplesSection() {
  const [activeVideo, setActiveVideo] = useState<VideoCard | null>(null);

  const videoCards: VideoCard[] = [
    {
      id: "01",
      number: "01",
      title: "DFY VSL Films",
      category: "Longform",
      aspect: "16:9",
      poster: "/media/ads/ad-car-accident.jpg",
      videoUrl: "/media/videos/metads.mp4",
    },
    {
      id: "02",
      number: "02",
      title: "Vertical UGC Cuts",
      category: "Social",
      aspect: "Portrait 9:16",
      poster: "/media/ads/ad-fitness.jpg",
      videoUrl: "/media/videos/metads.mp4",
    },
    {
      id: "03",
      number: "03",
      title: "High-ROAS Hooks",
      category: "Motion",
      aspect: "Shortform",
      poster: "/media/ads/ad-finance.jpg",
      videoUrl: "/media/videos/metads.mp4",
      highlightOrange: true,
    },
    {
      id: "04",
      number: "04",
      title: "Scale Motion Ads",
      category: "Performance",
      aspect: "Square 1:1",
      poster: "/media/ads/ad-wellness.jpg",
      videoUrl: "/media/videos/metads.mp4",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-[#121316] text-white border-t border-stone-800 relative overflow-hidden select-none">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section (Exact Lusion Studio Screenshot Match) */}
        <div className="mb-16">
          
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 -ml-4" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400">
              VIDEO EXAMPLES
            </span>
          </div>

          {/* Massive Headline: "Work, in motion." */}
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-extrabold tracking-tight leading-[0.95] text-white uppercase font-hero">
            Work, <span className="font-serif italic lowercase font-normal text-stone-300">in motion.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-stone-400 text-base sm:text-lg max-w-md font-medium">
            Four kinds of high-converting moving work engineered to scale.
          </p>
        </div>

        {/* 4 Minimalist Dark Video Cards Grid (Exact Lusion Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoCards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => setActiveVideo(card)}
              className={`relative rounded-3xl overflow-hidden border-2 cursor-pointer group transition-all duration-300 min-h-[420px] sm:min-h-[480px] flex flex-col justify-between p-6 ${
                card.highlightOrange
                  ? "border-orange-500 shadow-[0_0_35px_rgba(249,115,22,0.25)] bg-stone-900"
                  : "border-stone-800 bg-stone-900/90 hover:border-stone-600"
              }`}
            >
              {/* Background Poster Image */}
              <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <img
                  src={card.poster}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
              </div>

              {/* Top Card Header: Giant Number + Watch Badge */}
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-4xl sm:text-5xl font-black text-white font-hero tracking-tighter opacity-90">
                  {card.number}
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-stone-300">
                  WATCH
                </span>
              </div>

              {/* Center Play Button with Hover Pulse */}
              <div className="relative z-10 my-auto flex items-center justify-center">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                    card.highlightOrange
                      ? "bg-orange-500 text-white group-hover:scale-110 group-hover:bg-orange-400 shadow-orange-500/50"
                      : "bg-white/20 backdrop-blur-md text-white border border-white/40 group-hover:scale-110 group-hover:bg-white group-hover:text-black"
                  }`}
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Metadata Info */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-hero">
                  {card.title}
                </h3>
                <p className="text-xs font-mono font-bold text-stone-400 mt-1 uppercase tracking-wider">
                  {card.category} · {card.aspect}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-stone-400">
            HIGH-PRODUCTION CREATIVE LAB // SCALEWITHADS
          </span>
          <Link
            href="/medialibrary"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-orange-500/20"
          >
            <span>Explore All Video Examples</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-stone-900 border border-stone-700 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  <span className="font-extrabold text-sm text-white font-hero">
                    {activeVideo.title}
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    ({activeVideo.category} · {activeVideo.aspect})
                  </span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
