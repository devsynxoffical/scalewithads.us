"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  glow?: boolean;
  borderGlow?: boolean;
}

export function TiltCard({
  children,
  className,
  maxTilt = 12,
  perspective = 1000,
  glow = true,
  borderGlow = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const rotateX = useSpring(0, { stiffness: 300, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 25 });

  const borderBackground = useMotionTemplate`radial-gradient(220px circle at ${mouseX}% ${mouseY}%, rgba(237, 28, 36, 0.65), rgba(237, 28, 36, 0.12) 45%, transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    mouseX.set(percentX);
    mouseY.set(percentY);

    const calcRotateX = (0.5 - y / rect.height) * maxTilt * 2;
    const calcRotateY = (x / rect.width - 0.5) * maxTilt * 2;

    rotateX.set(calcRotateX);
    rotateY.set(calcRotateY);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: `${perspective}px`, transformStyle: "preserve-3d" }}
      className={cn("relative transition-all duration-300", className)}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full rounded-2xl"
      >
        {borderGlow && (
          <motion.div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute -inset-px z-40 rounded-2xl transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            style={{
              border: "1px solid transparent",
              background: borderBackground,
              WebkitMask:
                "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
            }}
          />
        )}
        {children}

        {glow && (
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 rounded-2xl z-30 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            style={{
              background: "radial-gradient(400px circle at 50% 50%, rgba(237, 28, 36, 0.14), transparent 70%)",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default TiltCard;
