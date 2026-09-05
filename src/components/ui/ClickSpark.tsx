"use client";

import { useCallback, useRef, useEffect, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type ClickSparkProps = {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  className?: string;
  children?: React.ReactNode;
};

export function ClickSpark({
  sparkColor = "#ff2b3d",
  sparkSize = 10,
  sparkRadius = 28,
  sparkCount = 8,
  duration = 400,
  className,
  children,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<{ x: number; y: number; angle: number; speed: number }[]>([]);
  const startTimeRef = useRef(0);

  const sparks = useCallback((x: number, y: number) => {
    const newSparks = Array.from({ length: sparkCount }, (_, i) => {
      const angle = (Math.PI * 2 * i) / sparkCount;
      const speed = 0.8 + Math.random() * 0.6;
      return { x, y, angle, speed };
    });
    sparksRef.current = newSparks;
    startTimeRef.current = performance.now();
  }, [sparkCount]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    sparks(e.clientX - rect.left, e.clientY - rect.top);

    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const elapsed = performance.now() - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const spark of sparksRef.current) {
        const distance = spark.speed * progress * sparkRadius;
        const x = spark.x + Math.cos(spark.angle) * distance;
        const y = spark.y + Math.sin(spark.angle) * distance;
        const opacity = 1 - progress;

        ctx.beginPath();
        ctx.arc(x, y, (1 - progress) * sparkSize * 0.5 + 0.5, 0, Math.PI * 2);
        ctx.fillStyle = sparkColor;
        ctx.globalAlpha = opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className={cn("relative overflow-hidden", className)} onClick={handleClick}>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-50 h-full w-full" />
      {children}
    </div>
  );
}
