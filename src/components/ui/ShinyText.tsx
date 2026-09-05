"use client";

import { motion } from "framer-motion";

type ShinyTextProps = {
  text: string;
  baseColor?: string;
  shineColor?: string;
  speed?: number;
  spread?: number;
  className?: string;
};

/**
 * Text with a continuously sweeping shine highlight.
 * Animates backgroundPosition via framer-motion for a buttery, jank-free
 * gradient sweep from left to right.
 */
export function ShinyText({
  text,
  baseColor = "#ed1c24",
  shineColor = "#ffffff",
  speed = 3,
  spread = 100,
  className,
}: ShinyTextProps) {
  return (
    <motion.span
      className={className}
      style={{
        backgroundImage: `linear-gradient(${spread}deg, ${baseColor} 0%, ${shineColor} 45%, ${baseColor} 55%, ${baseColor} 100%)`,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        backgroundSize: "200% 100%",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        whiteSpace: "nowrap",
      }}
      animate={{ backgroundPositionX: ["200%", "-200%"] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      {text}
    </motion.span>
  );
}
