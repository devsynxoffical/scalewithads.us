"use client";

import { useRef, useEffect } from "react";
import { gsap, prefersReducedMotion, EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  splitType?: "lines" | "words" | "chars";
  delay?: number;
  duration?: number;
  stagger?: number;
  from?: string;
  to?: string;
  scroll?: boolean;
  start?: string;
  once?: boolean;
};

export function SplitText({
  text,
  className,
  tag: Tag = "h2",
  splitType = "words",
  delay = 0,
  duration = 1.1,
  stagger = 0.06,
  from = "start",
  to = "start",
  scroll = false,
  start = "top 85%",
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) return;

    let split: { revert: () => void } | null = null;
    const ctx = gsap.context(() => {
      const run = async () => {
        const { default: SplitTextPlugin } = await import("gsap/SplitText");
        gsap.registerPlugin(SplitTextPlugin);

        split = new SplitTextPlugin(el, {
          type: splitType === "chars" ? "lines,words,chars" : splitType === "words" ? "lines,words" : "lines",
          linesClass: "split-line",
          wordsClass: "split-word",
          charsClass: "split-char",
        });

        const pieces =
          splitType === "chars"
            ? (split as unknown as { chars: HTMLElement[] }).chars
            : splitType === "words"
              ? (split as unknown as { words: HTMLElement[] }).words
              : (split as unknown as { lines: HTMLElement[] }).lines;

        gsap.set(pieces, {
          yPercent: 110,
          opacity: splitType === "words" ? 0 : 1,
        });

        const tl = gsap.timeline({
          delay,
          defaults: { ease: EASE.outExpo, stagger },
          scrollTrigger: scroll
            ? { trigger: el, start, once }
            : undefined,
        });

        tl.to(pieces, {
          yPercent: 0,
          opacity: 1,
          duration,
          transformOrigin: from,
        });
      };

      void run();
    }, el);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, [text, splitType, delay, duration, stagger, from, to, scroll, start, once]);

  return (
    <Tag ref={ref as never} className={cn("[&_.split-line]:overflow-hidden", className)}>
      {text}
    </Tag>
  );
}
