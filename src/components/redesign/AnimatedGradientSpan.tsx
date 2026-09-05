"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedGradientSpanProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientSpan({ children, className = "" }: AnimatedGradientSpanProps) {
  return (
    <motion.span
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`bg-gradient-to-r from-purple-800 via-purple-500 to-indigo-600 bg-[length:200%_auto] bg-clip-text text-transparent inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
}
