"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CountUpProps = {
  to: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
  className?: string;
  ease?: "easeOut" | "easeInOut" | "linear";
};

const EASING = {
  easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
  easeInOut: (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
  linear: (t: number) => t,
} as const;

export function CountUp({
  to,
  duration = 1.8,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = true,
  className,
  ease = "easeOut",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let raf = 0;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now + delay * 1000;
      const elapsed = Math.max(0, now - startTime);
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setValue(to * EASING[ease](progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, delay, ease]);

  const formatted = (() => {
    const [int, dec] = value.toFixed(decimals).split(".");
    const grouped = separator ? int.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : int;
    return dec ? `${grouped}.${dec}` : grouped;
  })();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
