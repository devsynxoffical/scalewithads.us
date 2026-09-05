"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Volume2, X, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

interface TestimonialCard {
  id: string;
  clientName: string;
  title: string;
  subtitle: string;
  duration: string;
  videoUrl: string;
  aspectRatio: string;
}

export function ClientTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<TestimonialCard | null>(null);

  const testimonials: TestimonialCard[] = [
    {
      id: "01",
      clientName: "Edgar",
      title: "How Edgar Landed High-Ticket Clients Using Our ScaleWithAds Client Acquisition System",
      subtitle: "High-Ticket Client Acquisition Walkthrough",
      duration: "2:04",
      videoUrl: "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media/69624f63f8a93b76e0751a55.mp4",
      aspectRatio: "aspect-[16/10]",
    },
    {
      id: "02",
      clientName: "Marie Grace Berg",
      title: "Generated 2,000+ High-Ticket Registrations & Sales for Mary Grace Berg Summit",
      subtitle: "2,000+ Summit Registrations Case Study",
      duration: "1:12",
      videoUrl: "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media/69624f62f8a93b0480751a4e.mp4",
      aspectRatio: "aspect-[16/10]",
    },
    {
      id: "03",
      clientName: "Edgar & Jeremi",
      title: "How Edgar & Jeremi Are Getting High-Ticket Clients Using Our Million Dollar Funnel™ System",
      subtitle: "$4,500 MRR Deal at $7 CPL Walkthrough",
      duration: "0:45",
      videoUrl: "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media/6978f116d560857126a4804c.mp4",
      aspectRatio: "aspect-[16/10]",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 bg-white text-stone-900 border-t border-b border-stone-200 relative overflow-hidden select-none">
      
      {/* Subtle Purple Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-900 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>VERIFIED CLIENT PROOF</span>
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 tracking-tight uppercase font-hero leading-tight">
            CLIENT <span className="animate-purple-gradient font-hero">TESTIMONIALS</span>
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg font-medium">
            Real founders, coaches & agencies sharing their client acquisition scaling results.
          </p>
        </div>

        {/* 3 Video Cards Grid (Sleek White Cards with Black Border & Hover Glow) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveVideo(item)}
              className="rounded-3xl bg-white border-2 border-stone-950 hover:border-purple-600 shadow-xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.18)] overflow-hidden cursor-pointer group relative flex flex-col justify-between"
            >
              {/* Direct Video Preview Frame Container */}
              <div className="relative w-full aspect-video bg-stone-950 flex items-center justify-center p-2 overflow-hidden rounded-t-3xl border-b border-stone-200">
                <video
                  src={item.videoUrl}
                  preload="metadata"
                  muted
                  playsInline
                  className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-10 transition-opacity pointer-events-none" />

                {/* Top Right Duration Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-[11px] font-mono text-purple-200 shadow-lg pointer-events-none">
                  <Volume2 className="w-3 h-3 text-purple-400" />
                  <span>{item.duration}</span>
                </div>

                {/* Center Play Icon with Purple Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-600 text-white border-2 border-purple-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-700 transition-all duration-300 shadow-[0_0_35px_rgba(147,51,234,0.6)]">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 bg-white border-t border-stone-100 flex flex-col justify-between grow">
                <div>
                  <span className="text-xs font-mono font-black text-purple-700 uppercase tracking-wider block mb-1">
                    ✦ {item.clientName}
                  </span>
                  <h3 className="text-base font-extrabold text-stone-950 font-hero leading-snug group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Result</span>
                  </span>
                  <span className="text-purple-700 font-black uppercase">Watch Video ↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Playable Video Modal Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-stone-950 border-2 border-purple-600 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(147,51,234,0.5)]"
            >
              {/* Modal Top Header Bar */}
              <div className="p-4 bg-stone-950 border-b border-purple-900/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
                  <span className="font-extrabold text-sm text-white font-hero tracking-wide">
                    {activeVideo.clientName} Video Walkthrough
                  </span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center text-stone-300 hover:text-white hover:bg-purple-900 transition-colors"
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

