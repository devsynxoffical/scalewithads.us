"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap, prefersReducedMotion, EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FadeContentProps = {
  children: ReactNode;
  className?: string;
  blur?: boolean;
  blurRadius?: number;
  duration?: number;
  delay?: number;
  y?: number;
  ease?: string;
  threshold?: number;
  once?: boolean;
};

export function FadeContent({
  children,
  className,
  blur = false,
  blurRadius = 8,
  duration = 1.1,
  delay = 0,
  y = 40,
  ease = EASE.outExpo,
  threshold = 0.12,
  once = true,
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const visible = { autoAlpha: 1, y: 0 };
      const hidden = { autoAlpha: 0, y };

      const tl = gsap.timeline({ delay, ease });
      tl.fromTo(
        el,
        { ...hidden, ...(blur ? { filter: `blur(${blurRadius}px)` } : {}) },
        {
          ...visible,
          ...(blur ? { filter: "blur(0px)" } : {}),
          duration,
          scrollTrigger: {
            trigger: el,
            start: `top ${(1 - threshold) * 100}%`,
            once,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [blur, blurRadius, duration, delay, y, ease, threshold, once]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
