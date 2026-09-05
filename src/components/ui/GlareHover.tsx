"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlareHoverProps = {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  glareSize?: number;
};

export function GlareHover({
  children,
  className,
  glareColor = "rgba(255, 255, 255, 0.25)",
  glareSize = 160,
}: GlareHoverProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--glare-x", `${x}px`);
    el.style.setProperty("--glare-y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("group relative h-full w-full overflow-hidden", className)}
    >
      <div className="relative z-10 h-full">{children}</div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${glareSize}px circle at var(--glare-x, 50%) var(--glare-y, 50%), ${glareColor}, transparent 70%)`,
        }}
      />
    </div>
  );
}
