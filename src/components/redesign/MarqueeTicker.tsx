"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, X, Star, Sparkles } from "lucide-react";

export function MarqueeTicker() {
  const items = [
    { icon: Zap, text: "SUSTAINING GROWTH" },
    { icon: X, text: "E-COMMERCE SCALE" },
    { icon: Star, text: "HIGH-CONVERTING ADS" },
    { icon: X, text: "FAST DELIVERY" },
    { icon: Sparkles, text: "PROFIT GUARANTEED" },
    { icon: X, text: "DATA-DRIVEN BUYING" },
  ];

  // Repeat for smooth infinite marquee loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#E11D48] text-white py-4 overflow-hidden border-y-2 border-stone-950 shadow-md">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 45,
          repeat: Infinity,
        }}
        className="flex items-center gap-8 whitespace-nowrap w-max"
      >
        {repeatedItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-6">
              <span className="font-extrabold text-sm sm:text-base tracking-widest uppercase font-sans">
                {item.text}
              </span>
              <Icon className="w-4 h-4 text-amber-300 flex-shrink-0" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
