"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  speed?: string | number;
  className?: string;
  mask?: boolean;
};

export function Marquee({
  children,
  reverse = false,
  speed = "40s",
  className,
  mask = true,
}: MarqueeProps) {
  const duration = typeof speed === "number" ? `${speed}s` : speed;

  return (
    <div
      className={cn("relative flex w-full overflow-hidden", mask && "mask-fade-x", className)}
      aria-hidden={reverse === undefined ? true : undefined}
    >
      <div
        className="flex w-max shrink-0 animate-marquee items-center"
        style={{ animationDuration: duration, animationDirection: reverse ? "reverse" : "normal" }}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center">{children}</div>
      </div>
    </div>
  );
}
