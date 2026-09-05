"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function NoiseOverlay({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 256;
    canvas.width = size;
    canvas.height = size;

    const image = ctx.createImageData(size, size);
    const draw = () => {
      const data = image.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 255;
      }
      ctx.putImageData(image, 0, 0);
    };
    draw();

    let raf = 0;
    let last = 0;
    const tick = (t: number) => {
      if (t - last > 66) {
        draw();
        last = t;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={cn("pointer-events-none fixed inset-0 z-[95] mix-blend-overlay opacity-[0.035]", className)}>
      <canvas ref={ref} className="h-full w-full" />
    </div>
  );
}
