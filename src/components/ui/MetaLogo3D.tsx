"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MetaLogo } from "./MetaLogo";
import { cn } from "@/lib/utils";

type MetaLogo3DProps = {
  className?: string;
  glow?: boolean;
};

/**
 * Smooth 3D scaling animation of the Meta logo — continuous Y-axis rotation,
 * a gentle X-axis sway, and a slow breathing scale. Designed to sit quietly
 * behind hero content as an ambient watermark.
 */
export function MetaLogo3D({ className, glow = true }: MetaLogo3DProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <MetaLogo className={cn("h-full w-full", className)} />;
  }

  return (
    <div
      className={cn("relative h-full w-full", className)}
      style={{ perspective: 900 }}
      aria-hidden="true"
    >
      {glow && (
        <div
          className="absolute inset-[12%] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(237,28,36,0.35) 0%, transparent 65%)",
          }}
        />
      )}

      <motion.div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateY: [0, 360],
          rotateX: [0, -14, 0, 14, 0],
          scale: [1, 1.12, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Front layer */}
        <div className="absolute inset-0" style={{ transform: "translateZ(42px)" }}>
          <MetaLogo className="h-full w-full" />
        </div>
        {/* Back layer adds depth as it spins */}
        <div
          className="absolute inset-0"
          style={{ transform: "translateZ(-42px) scale(0.96)" }}
        >
          <MetaLogo className="h-full w-full opacity-50" />
        </div>
      </motion.div>
    </div>
  );
}
