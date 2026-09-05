"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "./ui/TiltCard";
import { SectionBackground } from "./ui/SectionBackground";
import { SectionHeading } from "./SectionHeading";
import { GradientText } from "./ui/GradientText";
import { Play, ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";

const systems = [
  {
    slug: "metads",
    href: "/metads",
    cover: "/media/covers/cover-mastermind.jpeg",
    videoSrc: "/media/videos/metads.mp4",
    tag: "META ADS SYSTEM",
    title: "Meta Ads That Sell",
    subtitle: "LTO Meta Ads Cash Cow Framework",
    desc: "The complete system behind high-converting Meta campaigns across all industries. $50M+ spend framework.",
    stats: [
      { label: "Client ROAS", value: "3.32x" },
      { label: "Tracked Sales", value: "$847K" },
    ],
    features: [
      "Hidden Facebook Interest Framework",
      "Creative & Offer Angle Library",
      "ROAS-Driven Media Buying",
    ],
  },
  {
    slug: "leadpilot",
    href: "/leadpilot",
    cover: "/media/covers/cover-leadpilot.jpg",
    videoSrc: "https://assets.cdn.filesafe.space/W8B8H8FvOolLCrvxXzYp/media/69ef9443717d5dd4e170f445.mp4",
    tag: "DONE-FOR-YOU LEAD PILOT",
    title: "Done-For-You Client Acquisition",
    subtitle: "Complete DFY Installation",
    desc: "We write, target, build funnels, and manage campaigns daily. You only close qualified booked clients.",
    stats: [
      { label: "Target", value: "90 Days" },
      { label: "Agreement", value: "In Writing" },
    ],
    features: [
      "Done-For-You Funnels & Ad Copy",
      "Multi-Step AI Qualification",
      "100% Asset Ownership",
    ],
  },
  {
    slug: "privatemastermind",
    href: "/privatemastermind",
    cover: "/media/covers/cover-mastermind.jpeg",
    videoSrc: "/media/videos/mastermind.mp4",
    tag: "AGENCY MASTERMIND",
    title: "Agency 1:1 Growth Mastermind",
    subtitle: "For Media Agencies & Operators",
    desc: "We train agency owners on how to win high-ticket clients with proven ad systems that sell outcomes.",
    stats: [
      { label: "Agency Format", value: "1:1 Private" },
      { label: "Minimum", value: "$10K+" },
    ],
    features: [
      "Client Acquisition for Agencies",
      "Offer Positioning & Retention",
      "Proven Scale Playbook",
    ],
  },
];

export function SystemsShowcase() {
  const [activeTab, setActiveTab] = useState<string>("metads");
  const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);

  const activeSystem = systems.find((s) => s.slug === activeTab) || systems[0];

  return (
    <section
      id="systems"
      className="relative overflow-hidden border-b border-zinc-800 bg-transparent py-20 text-white md:py-28"
    >
      <SectionBackground variant="dark" grid />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHeading
          eyebrow="PROVEN ACQUISITION SYSTEMS"
          title={
            <>
              Engineered for Brands, Agencies &{" "}
              <GradientText
                colors={["#ff8f93", "#ed1c24", "#ed1c24", "#ff5a24", "#ff8f93"]}
                animationSpeed={6}
              >
                High-Ticket Operators
              </GradientText>
            </>
          }
          description="Whether you need complete done-for-you ads management or private 1:1 agency training — explore our specialized systems."
        />

        {/* Tab Switcher */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {systems.map((item) => (
            <button
              key={item.slug}
              onClick={() => setActiveTab(item.slug)}
              className={`group flex items-center gap-2.5 rounded-full px-6 py-3 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeTab === item.slug
                  ? "bg-[#ed1c24] text-white shadow-[0_0_25px_rgba(237,28,36,0.6)] scale-105"
                  : "border border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:text-white"
              }`}
            >
              <Zap className="h-4 w-4 text-white" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Active System Spotlight Bento */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSystem.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md/80 p-6 md:p-10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            >
              {/* Gradient accent glow in top corner */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 right-10 h-48 w-48 rounded-full opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(237,28,36,0.9), transparent 70%)",
                }}
              />
              {/* Left Column: Interactive VSL Card */}
              <TiltCard maxTilt={6}>
                <div
                  onClick={() => setActiveVideoSrc(activeSystem.videoSrc)}
                  data-cursor="play"
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/40 backdrop-blur-md cursor-pointer shadow-2xl"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={activeSystem.cover}
                      alt={activeSystem.title}
                      fill
                      priority
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ed1c24] text-white shadow-[0_0_40px_rgba(237,28,36,0.8)] transition duration-300 group-hover:scale-110">
                        <Play className="ml-1 h-7 w-7 fill-current" />
                      </div>
                    </div>

                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-[#ed1c24] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white">
                        {activeSystem.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                          {activeSystem.subtitle}
                        </p>
                        <p className="display text-lg font-extrabold text-white">
                          Click to Watch System VSL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Right Column: System Specs & Features */}
              <div className="flex flex-col text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#ed1c24]">
                  <Sparkles className="h-4 w-4" />
                  SYSTEM BREAKDOWN
                </span>
                <h3 className="display mt-2 text-3xl font-extrabold text-white">
                  {activeSystem.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-300">
                  {activeSystem.desc}
                </p>

                {/* Features List */}
                <div className="mt-6 space-y-3">
                  {activeSystem.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#ed1c24]" />
                      <span className="text-sm font-semibold text-zinc-200">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  {activeSystem.stats.map((s, idx) => (
                    <div key={idx}>
                      <p className="display text-2xl font-extrabold text-white">{s.value}</p>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Links */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={activeSystem.href}
                    className="btn btn-accent inline-flex items-center gap-2 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(237,28,36,0.5)]"
                  >
                    <span>EXPLORE THIS SYSTEM</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <button
                    onClick={() => setActiveVideoSrc(activeSystem.videoSrc)}
                    className="btn btn-outline-dark px-6 py-3.5 text-xs font-bold text-white"
                  >
                    WATCH OVERVIEW
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideoSrc && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 backdrop-blur-md/90 p-4 backdrop-blur-xl">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-black/40 backdrop-blur-md p-2 shadow-2xl">
            <button
              onClick={() => setActiveVideoSrc(null)}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
            >
              ✕
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
              <video
                src={activeVideoSrc}
                controls
                autoPlay
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
