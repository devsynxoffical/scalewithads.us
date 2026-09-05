"use client";

import { ArrowRight } from "lucide-react";
import { ShinyText } from "./ui/ShinyText";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

export function DesignProHero() {
  return (
    <section
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black/40 backdrop-blur-md text-white"
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      {/* Full-screen looping video background — tinted red to match theme */}
      <video
        className="absolute inset-0 h-full w-full object-cover [filter:grayscale(1)_sepia(1)_hue-rotate(-40deg)_saturate(4)]"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      {/* Readability overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md/50" />
      {/* Red ambient tint layer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(237,28,36,0.35), transparent 65%)",
          mixBlendMode: "screen",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-4 pt-12 sm:px-6 lg:px-8 md:pt-16">
        {/* Page content */}
        <div className="flex flex-1 flex-col">
          {/* Top two-column intro */}
          <div className="grid gap-6 py-4 md:py-6 lg:grid-cols-2 lg:items-start">
            <p className="max-w-md text-sm text-white/80 md:text-base">
              We deliver transformative programs that empower emerging product
              designers with cutting-edge expertise and vision to thrive
              globally.
            </p>
            <p className="text-sm text-white/80 md:text-base lg:justify-self-end lg:text-right">
              8000+ Talented Designers Launched !
            </p>
          </div>

          {/* Centered hero */}
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="flex items-center gap-2 text-xs uppercase tracking-tight text-white/80 sm:text-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ed1c24]" />
              Seats for Next Program Opening Soon
            </p>

            <h1 className="mt-5 font-medium leading-[0.85] tracking-tighter text-5xl sm:text-7xl md:text-8xl xl:text-9xl">
              <span className="block text-white">Become</span>
              <span className="block">
                <ShinyText
                  text="Product Leader."
                  baseColor="#c4181e"
                  shineColor="#ed1c24"
                  speed={3}
                  spread={100}
                />
              </span>
            </h1>

            <a
              href="#"
              className="group mt-10 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-gray-900 md:px-8 md:py-4"
            >
              Apply for Next Enrollment
              <ArrowRight className="h-4 w-4 text-[#ed1c24] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
