"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap, isTouchDevice, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: ReactNode;
  /** Movement amount as a fraction of the viewport height (default 0.15) */
  speed?: number;
  className?: string;
  start?: string;
  end?: string;
};

export function Parallax({
  children,
  speed = 0.15,
  className,
  start = "top bottom",
  end = "bottom top",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || isTouchDevice()) return;

    const ctx = gsap.context(() => {
      const distance = speed * window.innerHeight;
      gsap.fromTo(
        el,
        { y: -distance },
        {
          y: distance,
          ease: "none",
          scrollTrigger: { trigger: el, start, end, scrub: true },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [speed, start, end]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
