"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface Partner {
  name: string;
  logo: string;
  targetX: number;
  mobileTargetX: number;
  zIndex: number;
}

// Sub-component for individual Partner circle (Strictly complying with React Rules of Hooks)
function PartnerCircle({
  partner,
  expandProgress,
  opacityProgress,
}: {
  partner: Partner;
  expandProgress: MotionValue<number>;
  opacityProgress: MotionValue<number>;
}) {
  const x = useTransform(expandProgress, (val: number) => val * partner.targetX);
  const scale = useTransform(expandProgress, (val: number) => 0.85 + val * 0.15);

  return (
    <motion.div
      style={{
        x,
        opacity: opacityProgress,
        scale,
        zIndex: partner.zIndex,
      }}
      whileHover={{ scale: 1.12, zIndex: 60 }}
      className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-2 border-stone-950 bg-white shadow-2xl absolute overflow-hidden flex items-center justify-center p-6 cursor-pointer select-none transition-colors hover:border-purple-600 group"
    >
      {/* Large Brand Logo Container */}
      <div className="w-32 h-20 sm:w-44 sm:h-28 flex items-center justify-center">
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    </motion.div>
  );
}

export function ClientsPartnersSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through a tall 220vh sticky container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const partners: Partner[] = [
    {
      name: "Partner 01",
      logo: "/media/logos/logo-01.png",
      targetX: 0,
      mobileTargetX: 0,
      zIndex: 50,
    },
    {
      name: "Partner 02",
      logo: "/media/logos/logo-02.png",
      targetX: -200,
      mobileTargetX: -100,
      zIndex: 45,
    },
    {
      name: "Partner 03",
      logo: "/media/logos/logo-03.png",
      targetX: 200,
      mobileTargetX: 100,
      zIndex: 45,
    },
    {
      name: "Partner 04",
      logo: "/media/logos/logo-04.png",
      targetX: -400,
      mobileTargetX: -200,
      zIndex: 40,
    },
    {
      name: "Partner 05",
      logo: "/media/logos/logo-05.png",
      targetX: 400,
      mobileTargetX: 200,
      zIndex: 40,
    },
    {
      name: "Partner 06",
      logo: "/media/logos/logo-06.png",
      targetX: -600,
      mobileTargetX: -300,
      zIndex: 35,
    },
    {
      name: "Partner 07",
      logo: "/media/logos/logo-07.png",
      targetX: 600,
      mobileTargetX: 300,
      zIndex: 35,
    },
    {
      name: "Partner 08",
      logo: "/media/logos/logo-08.png",
      targetX: -800,
      mobileTargetX: -400,
      zIndex: 30,
    },
  ];

  // Sticky Pinned Scroll Progress:
  const expandProgress = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0.0, 0.25], [0.5, 1]);

  return (
    <div ref={containerRef} className="relative h-[220vh] bg-[#FDFBF7] text-stone-900 border-b border-stone-200">
      
      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Official ScaleWithAds Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16 px-4">
            <div className="flex items-center gap-2">
              <span className="text-rose-500 text-xl">✦</span>
              <h3 className="font-extrabold text-xs sm:text-sm tracking-widest text-purple-700 font-mono uppercase bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full">
                TRUSTED BY 1,000+ BRANDS & 9-FIGURE OPERATORS WORLDWIDE
              </h3>
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-stone-800 font-hero">
              20+ industries · 17+ client operators · one system
            </span>
          </div>

          {/* Sticky Pinned Expanding Circles Chain with Large Brand Logos */}
          <div className="relative min-h-[360px] sm:min-h-[420px] flex items-center justify-center py-6">
            <div className="relative w-full max-w-6xl flex items-center justify-center">
              {partners.map((partner, idx) => (
                <PartnerCircle
                  key={idx}
                  partner={partner}
                  expandProgress={expandProgress}
                  opacityProgress={opacityProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
