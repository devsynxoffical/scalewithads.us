"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BOOKING_PATH } from "../../lib/offer";
import { ClickSpark } from "./ClickSpark";

export default function ResponsiveHeroBanner() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={sectionRef} className="relative flex flex-col items-center justify-center min-h-[60vh] pt-32 pb-4 px-4 text-center z-10">
      {/* Subtle dark overlay to ensure text visibility against bright tunnel */}
      <div className="absolute inset-0 bg-black/30 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.1)_0%,_rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        <div className="status-row mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#ed1c24] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#ed1c24] animate-pulse" />
            DFY Client Acquisition System
          </span>
        </div>

        <div className="text-sm md:text-base font-bold tracking-widest uppercase text-white/70 mb-4 animate-fade-in-up">
          Stop guessing. Start scaling with predictability.
        </div>

        <div className="w-full flex flex-col items-center justify-center mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] leading-[1.1]">
            Scale With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d55] to-[#ed1c24] drop-shadow-[0_0_25px_rgba(237,28,36,0.6)]">Ads™</span>
          </h1>
        </div>

        <p className="max-w-3xl text-lg md:text-2xl text-white/90 mb-10 mx-auto font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] text-center">
          We install our proprietary $50M+ proven Meta Ads system directly into your business. 
          <br className="hidden md:block" />
          Double your revenue within the next 90 days — or we work at no management fee until we do.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
        <ClickSpark sparkColor="#ed1c24" sparkCount={10} sparkRadius={42}>
          <Link href={BOOKING_PATH} className="relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#ed1c24] px-8 font-bold text-white transition-all hover:scale-105 hover:bg-white hover:text-[#ed1c24] shadow-[0_0_30px_rgba(237,28,36,0.4)]">
            Book Your Free Call
          </Link>
        </ClickSpark>
        <a href="#systems" className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#ed1c24]/50">
          Explore Systems
        </a>
      </div>


      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce z-10">
        <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
