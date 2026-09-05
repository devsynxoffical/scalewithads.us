"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type VantaBackgroundProps = {
  className?: string;
  effect?: "net" | "dots" | "halo";
};

export function VantaBackground({
  className,
  effect = "net",
}: VantaBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion()) return;

    let vantaEffect: any = null;

    const initVanta = async () => {
      try {
        let vantaModule: any;
        if (effect === "dots") {
          // @ts-ignore
          vantaModule = (await import("vanta/dist/vanta.dots.min")).default;
        } else if (effect === "halo") {
          // @ts-ignore
          vantaModule = (await import("vanta/dist/vanta.halo.min")).default;
        } else {
          // @ts-ignore
          vantaModule = (await import("vanta/dist/vanta.net.min")).default;
        }

        if (!container) return;

        vantaEffect = vantaModule({
          el: container,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xed1c24,           // Primary Red accent
          backgroundColor: 0x070709,  // Deep black background
          points: 10.0,               // Number of network points
          maxDistance: 22.0,          // Connection line distance
          spacing: 18.0,              // Grid spacing for dots
          showDots: true,
        });
      } catch (err) {
        console.warn("Vanta initialization fallback:", err);
      }
    };

    void initVanta();

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [effect]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 select-none overflow-hidden opacity-30 z-0",
        className
      )}
    />
  );
}
