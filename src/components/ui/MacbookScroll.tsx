"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

export const MacbookScroll = ({
  src,
  videoSrc,
}: {
  src?: string;
  videoSrc?: string;
}) => {
  const videoId = videoSrc ? videoSrc.split('/').pop()?.split('?')[0] : "1PGP3xs_nBk";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0&modestbranding=1`;

  // Mouse tilt animation state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-5xl w-full mx-auto my-8 px-2 sm:px-4 perspective-1000 select-none cursor-pointer"
      style={{ perspective: "1200px" }}
    >
      {/* Dynamic Animated Glow Aura Behind Laptop */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-6 bg-gradient-to-r from-purple-600/30 via-rose-500/25 to-amber-500/20 rounded-[50px] blur-3xl pointer-events-none"
      />



      {/* 3D TILT CONTAINER */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative transition-transform duration-200 ease-out"
      >

        {/* LAPTOP DISPLAY TOP LID */}
        <div className="relative w-full bg-[#0d0d11] rounded-t-[20px] sm:rounded-t-[28px] p-2.5 sm:p-4 border-[3px] sm:border-[6px] border-[#22222a] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)]">

          {/* TOP CAMERA NOTCH */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-3.5 sm:h-5 bg-[#22222a] rounded-b-xl z-20 flex justify-center items-center gap-2 shadow-inner">
            {/* Camera lens */}
            <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0d] border border-blue-900/40 relative">
              <div className="absolute inset-0.5 rounded-full bg-blue-500/40 animate-pulse" />
            </div>
            {/* Green live indicator */}
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          </div>

          {/* SCREEN DISPLAY AREA (16:9) */}
          <div className="relative w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-black shadow-inner border border-white/10 group">
            {videoSrc ? (
              <iframe
                src={embedUrl}
                title="Scale With Ads System Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <img src={src} className="w-full h-full object-cover" alt="MacBook Display" />
            )}

            {/* Glossy Screen Glare Pass */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-40 pointer-events-none group-hover:opacity-60 transition-opacity" />
          </div>

          {/* BOTTOM BEZEL BRANDING */}
          <div className="mt-1.5 flex justify-center items-center gap-2">
            <Sparkles className="w-3 h-3 text-purple-400 opacity-60" />
            <span className="text-[9px] sm:text-[10px] font-mono font-semibold tracking-[0.3em] text-stone-400/90 uppercase select-none">
              Scale With Ads™
            </span>
          </div>
        </div>

        {/* LAPTOP BOTTOM BASE & HINGE */}
        <div className="relative w-[104%] -ml-[2%] h-4 sm:h-6 bg-gradient-to-b from-[#2a2a33] via-[#1a1a22] to-[#101015] rounded-b-2xl shadow-2xl border-t border-white/10 flex justify-center items-start">
          {/* Center thumb notch for opening lid */}
          <div className="w-16 sm:w-28 h-1.5 sm:h-2 bg-[#0d0d11] rounded-b-md border-b border-stone-700/30" />
        </div>

        {/* LAPTOP SHADOW ON DESK */}
        <div className="w-[94%] mx-auto h-4 bg-black/50 blur-lg rounded-full mt-1 pointer-events-none" />

      </motion.div>
    </motion.div>
  );
};
