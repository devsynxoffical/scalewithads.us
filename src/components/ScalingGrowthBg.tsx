"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, DollarSign } from "lucide-react";

export function ScalingGrowthBg() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {/* Background Subtle Gradient Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient Red & Cyan Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ed1c24]/10 blur-[140px]" />
      <div className="absolute bottom-1/3 right-1/4 h-[600px] w-[600px] rounded-full bg-[#ed1c24]/10 blur-[160px]" />

      {/* SVG Animated Scaling Growth Line 📈 */}
      <svg
        data-parallax
        data-speed="0.05"
        className="absolute inset-0 h-full w-full opacity-65"
        preserveAspectRatio="none"
        viewBox="0 0 1400 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Line Neon Gradient */}
          <linearGradient id="chartGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ed1c24" stopOpacity="0.2" />
            <stop offset="35%" stopColor="#ff2e38" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#ff575d" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>

          {/* Under Line Glow Gradient Fill */}
          <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ed1c24" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#ed1c24" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ed1c24" stopOpacity="0" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Dynamic Grid Horizontal Ticks */}
        <g stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="4 8">
          <line x1="0" y1="200" x2="1400" y2="200" />
          <line x1="0" y1="400" x2="1400" y2="400" />
          <line x1="0" y1="600" x2="1400" y2="600" />
          <line x1="0" y1="800" x2="1400" y2="800" />
        </g>

        {/* Area under the chart curve */}
        <motion.path
          d="M 0,850 C 250,820 400,680 650,550 C 900,420 1100,220 1400,80 L 1400,900 L 0,900 Z"
          fill="url(#chartFill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Primary Scaling Growth Path 📈 */}
        <motion.path
          d="M 0,850 C 250,820 400,680 650,550 C 900,420 1100,220 1400,80"
          stroke="url(#chartGradient)"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Dynamic Nodes along the growth line */}
        {[
          { cx: 250, cy: 820, label: "$45K" },
          { cx: 400, cy: 680, label: "$180K" },
          { cx: 650, cy: 550, label: "$420K" },
          { cx: 900, cy: 420, label: "$890K" },
          { cx: 1100, cy: 220, label: "$1.45M" },
          { cx: 1380, cy: 95, label: "$2.8M+" },
        ].map((node, i) => (
          <g key={i}>
            {/* Outer pulsing ring */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r="12"
              fill="rgba(237, 28, 36, 0.15)"
              className="animate-ping"
              style={{ animationDuration: `${2.5 + i * 0.4}s` }}
            />
            {/* Inner glowing node */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r="5"
              fill="#ffffff"
              stroke="#ed1c24"
              strokeWidth="3"
            />
          </g>
        ))}
      </svg>

      {/* Floating Dynamic Metrics Badges in BG */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-[18%] right-[8%] hidden lg:flex items-center gap-3 rounded-2xl border border-white/15 bg-black/40 backdrop-blur-md/60 px-4 py-2.5 backdrop-blur-xl shadow-2xl"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ed1c24]/20 text-[#ed1c24]">
          <TrendingUp className="h-5 w-5" />
        </div>
        <div>
          <div className="flex items-center gap-1 text-xs font-bold text-white">
            <span>SCALING PERFORMANCE</span>
            <span className="text-[#ed1c24] font-extrabold">+420% ROAS</span>
          </div>
          <p className="text-[10px] text-white/60">Real-time Meta/Google ad growth</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-[28%] left-[6%] hidden lg:flex items-center gap-3 rounded-2xl border border-white/15 bg-black/40 backdrop-blur-md/60 px-4 py-2.5 backdrop-blur-xl shadow-2xl"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
          <DollarSign className="h-5 w-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-white">
            <span>CLIENT REVENUE TARGET</span>
            <span className="flex items-center text-emerald-400 font-extrabold">
              <ArrowUpRight className="h-3.5 w-3.5" /> +$1.24M
            </span>
          </div>
          <p className="text-[10px] text-white/60">Generated within 90 days</p>
        </div>
      </motion.div>
    </div>
  );
}
