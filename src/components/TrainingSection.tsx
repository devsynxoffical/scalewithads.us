"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BOOKING_PATH } from "../lib/offer";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./ui/TiltCard";
import { SectionBackground } from "./ui/SectionBackground";
import { Play, Sparkles, Video, ArrowRight, ShieldCheck } from "lucide-react";

const trainingVideos = [
  {
    id: "training-1",
    title: "Meta Ads Campaign Architecture Breakdown",
    subtitle: "System Training Video #1",
    src: "/media/training/DQXUnRNkjR3.mp4",
    poster: "/media/training/DQXUnRNkjR3-poster.jpg",
    tag: "META ADS MASTERCLASS",
    duration: "14:20",
  },
  {
    id: "training-2",
    title: "Hidden Facebook Interest Targeting Framework",
    subtitle: "System Training Video #2",
    src: "/media/training/DVjcGrUEr1Y.mp4",
    poster: "/media/training/DVjcGrUEr1Y-poster.jpg",
    tag: "TARGETING PLAYBOOK",
    duration: "09:45",
  },
  {
    id: "training-3",
    title: "Client Acquisition & AI Nurture Walkthrough",
    subtitle: "System Training Video #3",
    src: "/media/training/DPHgI7fEuIA.mp4",
    poster: "/media/training/DPHgI7fEuIA-poster.jpg",
    tag: "SYSTEM WALKTHROUGH",
    duration: "11:15",
  },
];

function TrainingVideoCard({
  item,
  onOpen,
}: {
  item: (typeof trainingVideos)[0];
  onOpen: (v: (typeof trainingVideos)[0]) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <TiltCard maxTilt={6} className="h-full">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onOpen(item)}
        data-cursor="play"
        className="group relative flex h-full flex-col cursor-pointer overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-[#ed1c24] hover:shadow-[0_20px_50px_-15px_rgba(237,28,36,0.45)]"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-3xl border-b border-white/10">
          <video
            ref={videoRef}
            src={item.src}
            poster={item.poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Top Tag & Duration */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
            <span className="rounded-full bg-[#ed1c24] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-md">
              {item.tag}
            </span>
            <span className="rounded-full bg-black/40 backdrop-blur-md/80 px-2.5 py-1 text-[10px] font-bold text-white/90 backdrop-blur-md border border-white/15">
              {item.duration} HD
            </span>
          </div>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ed1c24] text-white shadow-[0_0_40px_rgba(237,28,36,0.8)] transition-all duration-300 group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </div>
          </div>
        </div>

        {/* Card Footer Info */}
        <div className="flex flex-1 flex-col p-6 text-left">
          <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">
            {item.subtitle}
          </p>
          <h3 className="display mt-2 text-xl font-extrabold text-white group-hover:text-[#ed1c24] transition-colors">
            {item.title}
          </h3>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold text-zinc-300">
            <span className="flex items-center gap-1.5 text-[#ed1c24]">
              <Video className="h-4 w-4" />
              Watch Full Video
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#ed1c24]" />
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

export function TrainingSection() {
  const [selectedTraining, setSelectedTraining] = useState<
    (typeof trainingVideos)[0] | null
  >(null);

  return (
    <section
      id="training"
      className="relative overflow-hidden border-b border-zinc-800 bg-transparent py-20 text-white md:py-28"
    >
      <SectionBackground variant="dark" grid />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHeading
          eyebrow="SYSTEM TRAINING & WALKTHROUGHS"
          title={
            <>
              Inside Our DFY Media &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed1c24] via-[#ed1c24] to-[#ff8f93]">
                Acquisition System
              </span>
            </>
          }
          description="Watch these private system walkthroughs detailing our campaign architecture, hidden interest framework, and automated lead qualification."
        />

        {/* 3 Sleek Training Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {trainingVideos.map((item) => (
            <TrainingVideoCard
              key={item.id}
              item={item}
              onOpen={(v) => setSelectedTraining(v)}
            />
          ))}
        </div>

        {/* Bottom Booking Action */}
        <div className="mt-14 text-center">
          <Link
            href={BOOKING_PATH}
            className="btn btn-accent inline-flex items-center gap-2 px-8 py-4 text-sm font-extrabold uppercase tracking-wider shadow-[0_0_35px_rgba(237,28,36,0.6)]"
          >
            <span>APPLY TO INSTALL THIS SYSTEM</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Training Video Lightbox Modal */}
      <AnimatePresence>
        {selectedTraining && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 backdrop-blur-md/90 p-4 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-black/40 backdrop-blur-md p-2 shadow-2xl"
            >
              <button
                onClick={() => setSelectedTraining(null)}
                className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                ✕
              </button>

              <div className="aspect-video w-full overflow-hidden rounded-2xl">
                <video
                  src={selectedTraining.src}
                  controls
                  autoPlay
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4 text-center">
                <span className="rounded-full bg-[#ed1c24] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white">
                  {selectedTraining.tag}
                </span>
                <h3 className="display text-xl font-extrabold text-white mt-2">
                  {selectedTraining.title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
