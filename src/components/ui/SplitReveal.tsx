"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap, prefersReducedMotion, EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SplitRevealProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  mode?: "lines" | "words" | "chars";
  stagger?: number;
  delay?: number;
  scroll?: boolean;
  start?: string;
};

export function SplitReveal({
  children,
  className,
  as: Tag = "h2",
  mode = "lines",
  stagger = 0.06,
  delay = 0,
  scroll = false,
  start = "top 85%",
}: SplitRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      return;
    }

    let split: { revert: () => void } | null = null;
    let ctx = gsap.context(() => {});

    ctx = gsap.context(() => {
      const run = async () => {
        const { default: SplitText } = await import("gsap/SplitText");
        gsap.registerPlugin(SplitText);

        split = new SplitText(el, {
          type: mode === "chars" ? "lines,words,chars" : mode === "words" ? "lines,words" : "lines",
          linesClass: "sr-line",
          wordsClass: "sr-word",
          charsClass: "sr-char",
        });

        const pieces =
          mode === "chars"
            ? (split as unknown as { chars: HTMLElement[] }).chars
            : mode === "words"
              ? (split as unknown as { words: HTMLElement[] }).words
              : (split as unknown as { lines: HTMLElement[] }).lines;

        gsap.set(pieces, {
          yPercent: 120,
          rotate: mode === "chars" ? 8 : 0,
          opacity: mode === "words" ? 0 : 1,
        });

        const tl = gsap.timeline({
          delay,
          defaults: { ease: EASE.outExpo, stagger },
          scrollTrigger: scroll ? { trigger: el, start, once: true } : undefined,
        });

        tl.to(pieces, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.1,
        });
      };

      void run();
    }, el);

    return () => {
      ctx.revert();
      split?.revert();
    };
  }, [mode, stagger, delay, scroll, start]);

  return (
    <Tag ref={ref as never} className={cn("[&_.sr-line]:overflow-hidden", className)}>
      {children}
    </Tag>
  );
}
