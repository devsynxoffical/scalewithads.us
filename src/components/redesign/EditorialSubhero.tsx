"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Sparkles, Trophy, ArrowUpRight } from "lucide-react";

export function EditorialSubhero() {
  // 20 Client Logos from /media/logos/ (excluding logo-09.png & logo-14.png)
  const excludedLogos = new Set(["09", "14"]);
  const logos = Array.from({ length: 22 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, "0");
    return {
      id: num,
      src: `/media/logos/logo-${num}.png`,
    };
  }).filter((item) => !excludedLogos.has(item.id));

  const repeatedLogos = [...logos, ...logos];

  // Lunvoro-Style Colorful Circle Borders
  const ringStyles = [
    "border-[#9333EA] bg-purple-50/50 shadow-purple-200/40",
    "border-[#FF4D4D] bg-rose-50/50 shadow-rose-200/40",
    "border-[#FFB703] bg-amber-50/50 shadow-amber-200/40",
    "border-[#06D6A0] bg-emerald-50/50 shadow-emerald-200/40",
    "border-[#3A86FF] bg-blue-50/50 shadow-blue-200/40",
    "border-[#C77DFF] bg-fuchsia-50/50 shadow-fuchsia-200/40",
  ];

  // Card Creative Color Themes (Matching Header Vibrancy)
  const cardThemes = [
    {
      border: "border-purple-600 hover:shadow-[0_0_35px_rgba(147,51,234,0.4)]",
      badge: "bg-purple-100 text-purple-950 border-purple-300",
      roleColor: "text-purple-700",
      glow: "from-purple-500/20 to-transparent",
    },
    {
      border: "border-rose-500 hover:shadow-[0_0_35px_rgba(244,63,94,0.4)]",
      badge: "bg-rose-100 text-rose-950 border-rose-300",
      roleColor: "text-rose-600",
      glow: "from-rose-500/20 to-transparent",
    },
    {
      border: "border-amber-500 hover:shadow-[0_0_35px_rgba(245,158,11,0.4)]",
      badge: "bg-amber-100 text-amber-950 border-amber-300",
      roleColor: "text-amber-700",
      glow: "from-amber-500/20 to-transparent",
    },
    {
      border: "border-emerald-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.4)]",
      badge: "bg-emerald-100 text-emerald-950 border-emerald-300",
      roleColor: "text-emerald-700",
      glow: "from-emerald-500/20 to-transparent",
    },
    {
      border: "border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]",
      badge: "bg-blue-100 text-blue-950 border-blue-300",
      roleColor: "text-blue-700",
      glow: "from-blue-500/20 to-transparent",
    },
  ];

  // Real ScaleWithAds High-Impact Client Cards
  const clients = [
    {
      name: "Darrell Stern",
      role: "Webinar Scaling Coach",
      metric: "19K Followers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c2-1.jpg",
    },
    {
      name: "Pierce Grimes",
      role: "7 Figure Agency Owner",
      metric: "Two Comma Club Winner",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c12.webp",
    },
    {
      name: "Officer Baker",
      role: "Hollywood Celebrity",
      metric: "1.5M Followers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c3-1.jpg",
    },
    {
      name: "Jesse Rogers | Casper SMC",
      role: "Online Trading Coach",
      metric: "537K Subscribers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/07/499065155_18048058970591983_6379732473583506227_n.webp",
    },
    {
      name: "Tim Burd",
      role: "9 Figure Agency Owner",
      metric: "101K Followers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/07/1663106313718.webp",
    },
    {
      name: "Dr. Amy",
      role: "Cancer Researcher",
      metric: "259K Subscribers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c13.webp",
    },
    {
      name: "Travis Stephenson",
      role: "9 Figure Agency Owner",
      metric: "114k Followers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c14.webp",
    },
    {
      name: "Dr. Bea. Kinderaerztin",
      role: "Pediatrician",
      metric: "144k Followers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c1-1.jpg",
    },
    {
      name: "Steven Juergensen",
      role: "Founder @ Vedgenutrition",
      metric: "87k Followers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c11-1.jpg",
    },
    {
      name: "Rafael Cintron",
      role: "E-commerce Coach",
      metric: "55.7K Subscribers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c8-1.jpg",
    },
    {
      name: "Sarah Grace Fitness",
      role: "NPC Figure Competitor",
      metric: "94K Followers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/293754880_589072929247952_5961924528271733378_n-1.jpg",
    },
    {
      name: "Mark Shay",
      role: "Agency Owner & Coach",
      metric: "29.8k Followers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c10-1.jpg",
    },
    {
      name: "Jared Van Yperen",
      role: "Founder @ Vintage Muscle",
      metric: "21k Followers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c9-1.jpg",
    },
    {
      name: "M Mahdi Syed",
      role: "Business Scaling Coach",
      metric: "Two Comma Club Winner",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c7-1.jpg",
    },
    {
      name: "Aref Jomah",
      role: "7 Figure Agency Scaling Coach",
      metric: "Two Comma Club Winner",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c6-1.jpg",
    },
    {
      name: "Jimmy Rutkowsky",
      role: "7 Figure Agency Owner",
      metric: "7.2K Followers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/07/645595064_10244915396526046_7773684313775506507_n-scaled.webp",
    },
    {
      name: "Marie Grace Berg",
      role: "Agency Owner",
      metric: "7K Followers",
      img: "https://milliondollarmedia.us/wp-content/uploads/2026/06/c5.-1.jpg",
    },
  ];

  const repeatedClients = [...clients, ...clients];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-8 bg-[#FDFBF7] text-stone-900 border-t border-b border-stone-200 overflow-hidden select-none">
      
      {/* 1. Lunvoro-Style Small Circle Logo Scroller (Using /media/logos/) */}
      <div className="w-full mb-16 overflow-hidden">
        <div className="text-center mb-8">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>TRUSTED BY 300+ HIGH-GROWTH BRANDS</span>
          </span>
        </div>

        {/* Marquee Row 1 */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex items-center gap-6 sm:gap-8 whitespace-nowrap w-max py-2"
        >
          {repeatedLogos.map((logo, idx) => {
            const ring = ringStyles[idx % ringStyles.length];
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.15, rotate: idx % 2 === 0 ? 6 : -6 }}
                className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 ${ring} shadow-xl flex items-center justify-center p-4 bg-white shrink-0 cursor-pointer group transition-all duration-300 relative overflow-hidden`}
              >
                <img
                  src={logo.src}
                  alt={`Client Logo ${logo.id}`}
                  className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* 2. Playful Header-Inspired Client Cards Marquee */}
      <div className="w-full overflow-hidden">
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-purple-700" />
            <span>FEATURED CLIENT RESULTS & CASE STUDIES</span>
          </span>
        </div>

        {/* Marquee Row 2 (Playful Tilted Header-Style Cards) */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          className="flex items-center gap-7 whitespace-nowrap w-max py-6 px-4"
        >
          {repeatedClients.map((client, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            const initialTilt = idx % 2 === 0 ? -2.5 : 2.5;

            return (
              <motion.div
                key={idx}
                initial={{ rotate: initialTilt }}
                whileHover={{
                  rotate: 0,
                  scale: 1.06,
                  y: -10,
                  zIndex: 30,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className={`w-[240px] sm:w-[270px] h-[360px] sm:h-[390px] rounded-[32px] border-3 ${theme.border} bg-white text-stone-900 shadow-xl p-3.5 flex flex-col justify-between shrink-0 group cursor-pointer transition-all duration-300 relative overflow-hidden`}
              >
                {/* Arc Accent Lines (Matching Header Design) */}
                <svg
                  className="absolute -top-1 left-4 w-12 h-3 text-purple-400 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 40 12"
                  fill="none"
                >
                  <path d="M 4 10 Q 20 1 36 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

                {/* Top Image Frame with Glassmorphic Badge */}
                <div className="h-[220px] sm:h-[245px] w-full rounded-[24px] overflow-hidden border-2 border-stone-950 bg-stone-900 relative shadow-inner">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-500"
                  />
                  
                  {/* Top-Left Glassmorphic Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-stone-950/85 backdrop-blur-md text-white text-[10px] font-mono font-black border border-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <span className="text-amber-400 font-extrabold">°o</span>
                    <span className="uppercase tracking-wider">{client.metric}</span>
                  </div>

                  {/* Top-Right Arrow Action Icon */}
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md text-stone-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight className="w-4 h-4 text-purple-700" />
                  </div>

                  {/* Bottom Gradient Glow Overlay */}
                  <div className={`absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${theme.glow} pointer-events-none`} />
                </div>

                {/* Bottom Card Header-Style Content */}
                <div className="px-1 py-1 flex flex-col justify-between flex-1 mt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-black text-stone-950 tracking-tight uppercase font-hero leading-tight group-hover:text-purple-700 transition-colors truncate max-w-[190px]">
                      {client.name}
                    </h4>
                    <span className="text-[10px] font-mono font-extrabold text-stone-400 group-hover:text-purple-600">
                      ★ 5.0
                    </span>
                  </div>

                  <div className="mt-1 flex items-center justify-between gap-1">
                    <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${theme.badge} truncate max-w-[210px]`}>
                      {client.role}
                    </span>
                  </div>
                </div>

                {/* Arc Bottom Accent */}
                <svg
                  className="absolute -bottom-1 right-4 w-12 h-3 text-purple-400 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 40 12"
                  fill="none"
                >
                  <path d="M 4 2 Q 20 11 36 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}
