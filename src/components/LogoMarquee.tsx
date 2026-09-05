"use client";

import Image from "next/image";
import { logos } from "../lib/library";
import { SectionBackground } from "./ui/SectionBackground";

export function LogoMarquee({ title }: { title?: string }) {
  const row1 = logos.slice(0, 11);
  const row2 = logos.slice(11, 22);

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-transparent py-14 text-white backdrop-blur-[2px]">

      <div className="relative mx-auto max-w-[1400px] px-5 text-center md:px-8">
        {/* Title pill */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#ed1c24]/30 bg-[#ed1c24]/10 px-6 py-2.5 backdrop-blur-md mb-12 shadow-[0_0_20px_rgba(237,28,36,0.2)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff4d55] animate-ping" />
          <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
            {title ?? "TRUSTED BY 1,000+ BRANDS & 9-FIGURE OPERATORS WORLDWIDE"}
          </span>
        </div>

        {/* Marquee Wrapper with CSS Mask for clean edge fading without solid colors */}
        <div style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}>
        {/* Row 1 - Smooth Left Marquee */}
        <div className="relative overflow-hidden py-4">
          <div className="flex gap-10 overflow-hidden">
            <div className="marquee-track flex shrink-0 items-center gap-4 md:gap-8">
              {[...row1, ...row1, ...row1].map((src, i) => (
                <div
                  key={i}
                  className="group relative flex h-32 w-auto px-4 md:px-8 shrink-0 items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src={src}
                    alt="Client logo"
                    width={320}
                    height={160}
                    className="max-h-28 md:max-h-36 w-auto object-contain brightness-0 invert opacity-100 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - Smooth Right Marquee */}
        <div className="relative overflow-hidden py-4 mt-4">
          <div className="flex gap-10 overflow-hidden">
            <div className="marquee-track-reverse flex shrink-0 items-center gap-4 md:gap-8">
              {[...row2, ...row2, ...row2].map((src, i) => (
                <div
                  key={i}
                  className="group relative flex h-32 w-auto px-4 md:px-8 shrink-0 items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src={src}
                    alt="Client logo"
                    width={320}
                    height={160}
                    className="max-h-28 md:max-h-36 w-auto object-contain brightness-0 invert opacity-100 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        </div>
      </div>
    </section>
  );
}
