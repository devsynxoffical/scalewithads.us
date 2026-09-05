"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  borderRadius?: number;
};

export function GradientText({
  children,
  className,
  colors = ["#ff003c", "#ff5a24", "#ff2b5e", "#ff003c"],
  animationSpeed = 8,
  showBorder = false,
  borderRadius = 9999,
}: GradientTextProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatePosition = useMotionValue(0);
  const backgroundPosition = useTransform(
    animatePosition,
    (v) => `${v}% 0%`
  );

  useAnimationFrame((_, delta) => {
    animatePosition.set(animatePosition.get() + delta / 1000 / (animationSpeed / 100));
  });

  useEffect(() => {
    animatePosition.set(0);
  }, [animatePosition]);

  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
    backgroundSize: "200% auto",
    backgroundPosition,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  } as const;

  return (
    <span ref={elementRef} className={cn("relative z-10", className)}>
      <motion.span style={gradientStyle}>{children}</motion.span>
      {showBorder && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 rounded-full"
          style={{
            padding: "2px",
            borderRadius,
            background: `linear-gradient(90deg, ${colors.join(", ")})`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            backgroundSize: "200% auto",
            backgroundPosition,
          }}
        />
      )}
    </span>
  );
}
