"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Clock, GraduationCap, X, Volume2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface TrainingItem {
  id: string;
  badge: string;
  badgeBg: string;
  title: string;
  desc: string;
  duration: string;
  statLabel: string;
  initialTilt: number;
  poster: string;
  videoUrl: string;
  client: string;
  metric1: string;
  metric1Val: string;
  metric2: string;
  metric2Val: string;
}

// 3D Scroll-Linked Card Straightening / Un-Tilting Subcomponent
function StraighteningCard({
  item,
  onPlay,
}: {
  item: TrainingItem;
  onPlay: (item: TrainingItem) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.95", "start 0.35"],
  });

  const rotateZ = useTransform(scrollYProgress, [0, 1], [item.initialTilt, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <div ref={cardRef} className="perspective-1000 py-4 select-none">
      <motion.div
        style={{
          rotateZ,
          rotateX,
          scale,
          y,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className="rounded-3xl border-2 border-stone-950 bg-white p-6 sm:p-8 shadow-2xl transition-all duration-200"
      >
        <div className="flex flex-col justify-between gap-6">
          {/* Top Badge & Header */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full border ${item.badgeBg}`}>
                {item.badge}
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono font-bold">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>{item.duration}</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight leading-tight mb-2 font-hero">
              {item.title}
            </h3>

            <p className="text-stone-600 font-medium text-xs sm:text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* Video Preview Player Box */}
          <div
            onClick={() => onPlay(item)}
            className="relative w-full aspect-video rounded-2xl overflow-hidden bg-stone-950 border-2 border-stone-900 cursor-pointer group shadow-xl"
          >
            <img
              src={item.poster}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-300 shadow-2xl">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
              </div>
            </div>

            {/* Top Right Audio Badge */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
              <Volume2 className="w-4 h-4" />
            </div>

            {/* Bottom Overlay Label */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
              <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 font-bold">
                {item.client}
              </span>
              <span className="text-amber-400 font-bold">CLICK TO WATCH</span>
            </div>
          </div>

          {/* Stat Highlight & Link */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-purple-900 font-mono">
                {item.metric1Val}
              </span>
              <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mt-0.5">
                {item.statLabel}
              </p>
            </div>

            <button
              onClick={() => onPlay(item)}
              className="px-5 py-2.5 rounded-full bg-stone-950 hover:bg-purple-900 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2 group"
            >
              <span>Watch Video</span>
              <Play className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function SelectedWorkShowcase() {
  const [activeVideo, setActiveVideo] = useState<TrainingItem | null>(null);

  const trainings: TrainingItem[] = [
    {
      id: "01",
      badge: "🎓 MODULE 01",
      badgeBg: "bg-purple-100 text-purple-900 border-purple-300",
      title: "Market Research & Customer Analysis",
      desc: "Short, practical training on identifying your ideal high-ticket buyers and structuring your offer for maximum conversion.",
      duration: "7:51",
      statLabel: "Module 01 Training",
      initialTilt: -16,
      poster: "/media/training/DPHgI7fEuIA-poster.jpg",
      videoUrl: "/media/training/DPHgI7fEuIA.mp4",
      client: "B2B Agency Ecosystem",
      metric1: "Monthly Revenue",
      metric1Val: "7:51 Min",
      metric2: "Campaign ROAS",
      metric2Val: "4.9x",
    },
    {
      id: "02",
      badge: "🎓 MODULE 02",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
      title: "Offer Positioning & Creative Development",
      desc: "Learn how we craft direct-response ad copy, high-converting VSL scripts, and creative hooks to dominate paid traffic.",
      duration: "14:29",
      statLabel: "Module 02 Training",
      initialTilt: 16,
      poster: "/media/training/DQXUnRNkjR3-poster.jpg",
      videoUrl: "/media/training/DQXUnRNkjR3.mp4",
      client: "Coaching & Mastermind Engine",
      metric1: "Monthly Revenue",
      metric1Val: "14:29 Min",
      metric2: "Qualified Demos",
      metric2Val: "180+/mo",
    },
    {
      id: "03",
      badge: "🎓 MODULE 03",
      badgeBg: "bg-teal-100 text-teal-900 border-teal-300",
      title: "Meta Ads, CRM & Lead Qualification",
      desc: "Automated lead qualification and CRM workflows to ensure only pre-validated, sales-ready clients land on your calendar.",
      duration: "4:49",
      statLabel: "Module 03 Training",
      initialTilt: -16,
      poster: "/media/training/DVjcGrUEr1Y-poster.jpg",
      videoUrl: "/media/training/DVjcGrUEr1Y.mp4",
      client: "Commercial Services Scale",
      metric1: "Contract Revenue",
      metric1Val: "4:49 Min",
      metric2: "Ad ROAS",
      metric2Val: "6.1x",
    },
  ];

  return (
    <section id="work" className="py-28 px-4 md:px-8 bg-[#FDFBF7] text-stone-900 border-b border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: STICKY Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:h-fit">
            <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full inline-block mb-4 shadow-sm">
              ✦ SYSTEM TRAINING LIBRARY
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight leading-[0.98] uppercase font-hero">
              System Training <br />
              & Upgrades <span className="animate-purple-gradient">✦</span>
            </h2>
            <p className="mt-4 text-stone-600 font-medium text-base leading-relaxed max-w-md">
              Short, practical training videos that teach you the exact plays, scripts and upgrades behind your client acquisition system.
            </p>

            <div className="mt-8 flex flex-col items-start gap-8">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border-2 border-stone-950 bg-stone-950 hover:bg-purple-900 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
              >
                <span>Book Strategy Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* Yellow Star Graphic */}
              <div className="w-28 h-28 relative opacity-90 animate-spin-slow pointer-events-none hidden sm:block">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-amber-400 stroke-stone-950 stroke-[3]">
                  <path d="M50 0 L58 35 L93 15 L70 45 L100 65 L65 70 L75 100 L50 75 L25 100 L35 70 L0 65 L30 45 L7 15 L42 35 Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Un-tilting Cards Stack as you scroll down */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {trainings.map((item) => (
              <StraighteningCard key={item.id} item={item} onPlay={setActiveVideo} />
            ))}
          </div>

        </div>
      </div>

      {/* Video Modal Lightbox */}
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
              className="relative w-full max-w-4xl bg-stone-900 border border-stone-700 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="font-extrabold text-sm text-white font-hero">
                    {activeVideo.badge}: {activeVideo.title}
                  </span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-stone-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  key={activeVideo.id}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain"
                >
                  <source src={activeVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
