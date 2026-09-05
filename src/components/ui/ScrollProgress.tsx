"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ScrollProgress({ className }: { className?: string }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const el = barRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ready]);

  return (
    <div className={cn("pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px]", className)}>
      <div
        ref={barRef}
        className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#ed1c24] via-[#ff6b70] to-[#ed1c24]"
      />
    </div>
  );
}
