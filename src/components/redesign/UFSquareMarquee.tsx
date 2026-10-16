"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";

const RANDOM_PHOTOS = [
  {
    src: "/images/random/cropped/anastasia.webp",
    alt: "Client funnel preview",
    tag: "Funnel Build",
    title: "Client Offer Architecture",
    tilt: "-rotate-1 sm:-rotate-2",
    badgeTheme: "border-purple-200 bg-purple-100 text-purple-950",
    dotColor: "bg-purple-600",
  },
  {
    src: "/images/random/cropped/ann.webp",
    alt: "Strategy call with Ann",
    tag: "Strategy Session",
    title: "Live Growth Breakdown",
    tilt: "rotate-1 sm:rotate-2",
    badgeTheme: "border-blue-200 bg-blue-100 text-blue-950",
    dotColor: "bg-blue-600",
  },
  {
    src: "/images/random/cropped/analytics.webp",
    alt: "Analytics dashboard proof",
    tag: "ROAS Verified",
    title: "Real-Time Tracking Core",
    tilt: "-rotate-1",
    badgeTheme: "border-emerald-200 bg-emerald-100 text-emerald-950",
    dotColor: "bg-emerald-600",
  },
  {
    src: "/images/random/cropped/george.webp",
    alt: "Team call with George",
    tag: "Scaling Audit",
    title: "Backend Conversion Review",
    tilt: "rotate-1 sm:rotate-1.5",
    badgeTheme: "border-amber-200 bg-amber-100 text-amber-950",
    dotColor: "bg-amber-600",
  },
  {
    src: "/images/random/cropped/edgar_jeermei.webp",
    alt: "Edgar & Jeremi",
    tag: "Deep-Dive",
    title: "Offer & Angle Mapping",
    tilt: "-rotate-1 sm:-rotate-2",
    badgeTheme: "border-rose-200 bg-rose-100 text-rose-950",
    dotColor: "bg-rose-600",
  },
  {
    src: "/images/random/cropped/guilia.webp",
    alt: "Client session with Giulia",
    tag: "Client Onboarding",
    title: "High-Ticket Pipeline Setup",
    tilt: "rotate-2",
    badgeTheme: "border-purple-200 bg-purple-100 text-purple-950",
    dotColor: "bg-purple-600",
  },
  {
    src: "/images/random/cropped/ig_shot.webp",
    alt: "Performance snapshot",
    tag: "Traffic Scale",
    title: "Paid Acquisition Proof",
    tilt: "-rotate-1.5",
    badgeTheme: "border-blue-200 bg-blue-100 text-blue-950",
    dotColor: "bg-blue-600",
  },
  {
    src: "/images/random/cropped/owne.webp",
    alt: "Client session with Owen",
    tag: "Growth Workshop",
    title: "Unit Economics Audit",
    tilt: "rotate-1",
    badgeTheme: "border-amber-200 bg-amber-100 text-amber-950",
    dotColor: "bg-amber-600",
  },
  {
    src: "/images/random/cropped/sina.webp",
    alt: "Client session with Sina",
    tag: "Pipeline Review",
    title: "Closing Optimization",
    tilt: "-rotate-2",
    badgeTheme: "border-emerald-200 bg-emerald-100 text-emerald-950",
    dotColor: "bg-emerald-600",
  },
];

/**
 * Landscape photo ribbon above the footer.
 * Distinct 3D glassmorphic window cards styled according to the website theme:
 * #FDFBF7 soft cream backdrop, crisp white cards, Mac window buttons,
 * purple accent highlights, and smooth infinite marquee glide.
 */
export default function UFSquareMarquee() {
  const [isSystemActive, setIsSystemActive] = useState(true);

  return (
    <section className="relative w-full overflow-hidden bg-[#FDFBF7] text-stone-900 border-y border-stone-200 py-16 sm:py-24 select-none">
      {/* Subtle Ambient Background Aura matching site theme */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-purple-200/35 via-purple-100/20 to-amber-100/15 rounded-full blur-3xl -z-0" />

      {/* Left and Right Edge Vignette Fades to #FDFBF7 */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/85 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-[#FDFBF7] via-[#FDFBF7]/85 to-transparent" />

      {/* Marquee Row */}
      <div className="marquee-row relative w-full overflow-hidden py-4 sm:py-6">
        <div
          className="marquee-track-left flex w-max hover:[animation-play-state:paused]"
          style={{ "--marquee-duration": "48s" } as React.CSSProperties}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center gap-6 py-4 pr-6 sm:gap-8 sm:pr-8 md:gap-10 md:pr-10"
              aria-hidden={copy === 1 || undefined}
            >
              {RANDOM_PHOTOS.map((p, idx) => (
                <div
                  key={`${copy}-${idx}`}
                  className={`group relative shrink-0 transition-all duration-500 ease-out hover:z-30 hover:scale-[1.05] hover:rotate-0 ${p.tilt}`}
                >
                  {/* Outer Window Frame styled with website theme (crisp white, stone border, purple hover glow) */}
                  <div className="relative w-[290px] sm:w-[350px] md:w-[410px] overflow-hidden rounded-2xl border-2 border-stone-950 bg-white p-3 sm:p-3.5 shadow-xl transition-all duration-300 hover:border-purple-600 hover:shadow-[0_20px_50px_rgba(147,51,234,0.22)] hover:-translate-y-1">
                    
                    {/* Top Window Header with Mac Dots & Status Badge */}
                    <div className="mb-2.5 flex items-center justify-between px-1">
                      {/* Mac Traffic Light Dots */}
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] border border-black/15 shadow-[0_0_6px_rgba(255,95,86,0.3)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] border border-black/15 shadow-[0_0_6px_rgba(255,189,46,0.3)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] border border-black/15 shadow-[0_0_6px_rgba(39,201,63,0.3)]" />
                      </div>

                      {/* Top Right Live Pill Badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[9.5px] font-black uppercase tracking-wider ${p.badgeTheme}`}
                      >
                        <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${p.dotColor}`} />
                        {p.tag}
                      </div>
                    </div>

                    {/* Image Display Area with Dark Studio Framing */}
                    <div className="relative h-[160px] sm:h-[195px] md:h-[230px] w-full overflow-hidden rounded-xl border border-stone-950 bg-[#060816] shadow-inner">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.src}
                        alt={copy === 0 ? p.alt : ""}
                        className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Subtle Glare Gradient Overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.08]" />
                    </div>

                    {/* Bottom Caption Pill */}
                    <div className="mt-2.5 flex items-center justify-between px-1">
                      <span className="font-hero text-xs sm:text-[13px] font-bold text-stone-950 group-hover:text-purple-700 transition-colors uppercase tracking-tight truncate max-w-[200px] sm:max-w-[240px]">
                        {p.title}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] font-bold text-stone-400 group-hover:text-stone-600 uppercase tracking-wider shrink-0 transition-colors">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        LIVE RECORDING
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lower Hero Callout Section Matching Website Theme */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 text-center flex flex-col items-center">
        {/* Playbook Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-100 text-purple-950 font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-purple-700" />
          <span>THE SCALEWITHADS™ PLAYBOOK</span>
        </div>

        {/* Headline styled with website theme: bold black headline with purple script accent */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-stone-950 font-hero uppercase leading-[1.02]">
          Scale your acquisition{" "}
          <span className="italic font-light text-purple-600 lowercase font-serif">
            without
          </span>
          <br />
          <span className="font-serif italic font-normal text-purple-600 lowercase text-5xl sm:text-7xl md:text-8xl block mt-1">
            leaks.
          </span>
        </h2>

        {/* Live System State Toggle Widget */}
        <div className="mt-8 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setIsSystemActive(!isSystemActive)}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-stone-900 bg-stone-950 hover:bg-stone-900 text-white font-mono text-xs font-bold tracking-wider transition-all shadow-md cursor-pointer"
          >
            <span className="flex items-center gap-1">
              <span className={`h-1.5 w-1.5 rounded-full ${isSystemActive ? "bg-emerald-400" : "bg-stone-500"}`} />
              <span className={`h-1.5 w-1.5 rounded-full ${isSystemActive ? "bg-emerald-400" : "bg-stone-500"}`} />
              <span className={`h-1.5 w-1.5 rounded-full ${isSystemActive ? "bg-emerald-400" : "bg-stone-500"}`} />
              <span className={`h-1.5 w-1.5 rounded-full ${isSystemActive ? "bg-emerald-400" : "bg-stone-500"}`} />
            </span>
            <span className={isSystemActive ? "text-emerald-400" : "text-stone-400"}>
              {isSystemActive ? "SYSTEM ACTIVE" : "STANDBY"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
