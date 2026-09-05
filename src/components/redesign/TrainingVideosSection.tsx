"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Volume2, Clock, GraduationCap, X, Sparkles } from "lucide-react";

interface TrainingVideo {
  id: string;
  moduleNumber: string;
  moduleTitle: string;
  title: string;
  duration: string;
  description: string;
  poster: string;
  videoUrl: string;
  highlightBorder?: boolean;
}

export function TrainingVideosSection() {
  const [activeVideo, setActiveVideo] = useState<TrainingVideo | null>(null);

  const trainings: TrainingVideo[] = [
    {
      id: "01",
      moduleNumber: "01",
      moduleTitle: "MODULE 01",
      title: "Training 01",
      duration: "7:51",
      description: "Placeholder description - replace with the training topic.",
      poster: "/media/training/DPHgI7fEuIA-poster.jpg",
      videoUrl: "/media/training/DPHgI7fEuIA.mp4",
      highlightBorder: true,
    },
    {
      id: "02",
      moduleNumber: "02",
      moduleTitle: "MODULE 02",
      title: "Training 02",
      duration: "14:29",
      description: "Placeholder description - replace with the training topic.",
      poster: "/media/training/DQXUnRNkjR3-poster.jpg",
      videoUrl: "/media/training/DQXUnRNkjR3.mp4",
    },
    {
      id: "03",
      moduleNumber: "03",
      moduleTitle: "MODULE 03",
      title: "Training 03",
      duration: "4:49",
      description: "Placeholder description - replace with the training topic.",
      poster: "/media/training/DVjcGrUEr1Y-poster.jpg",
      videoUrl: "/media/training/DVjcGrUEr1Y.mp4",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 bg-[#0a0a0e] text-white border-t border-b border-stone-800 relative overflow-hidden select-none">
      
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 bg-purple-950/80 border border-purple-800/60 px-4 py-1.5 rounded-full inline-block mb-6 shadow-sm">
            ✦ SYSTEM TRAINING LIBRARY
          </span>

          <p className="text-lg sm:text-2xl text-stone-200 font-medium leading-relaxed max-w-2xl mx-auto">
            Short, practical training videos that teach you the exact plays, scripts and upgrades behind your client acquisition system.
          </p>
        </div>

        {/* 3 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {trainings.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveVideo(item)}
              className={`rounded-3xl bg-[#14141b] overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group relative shadow-2xl ${
                item.highlightBorder
                  ? "border-amber-400/80 shadow-[0_0_30px_rgba(251,191,36,0.15)]"
                  : "border-stone-800 hover:border-stone-600"
              }`}
            >
              {/* Top Video Preview Container */}
              <div className="relative w-full aspect-video bg-stone-900 overflow-hidden border-b border-stone-800/80">
                {/* Poster Image */}
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

                {/* Top Right Audio Badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-stone-300">
                  <Volume2 className="w-4 h-4" />
                </div>

                {/* Bottom Left Duration Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.duration}</span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-2xl">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Bottom Metadata Info */}
              <div className="p-6 sm:p-7 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>{item.moduleTitle}</span>
                </div>

                <h3 className="text-xl font-black text-white tracking-tight font-hero group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-400 font-medium leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Guarantee Subtext */}
        <div className="text-center">
          <p className="text-xs sm:text-sm font-mono text-stone-400 font-semibold tracking-wide">
            Training is included with every install - new lessons added as we roll out upgrades to the system.
          </p>
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
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="font-extrabold text-sm text-white font-hero">
                    {activeVideo.moduleTitle}: {activeVideo.title}
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
