"use client";

import { type ReactNode, type MouseEventHandler } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler;
  variant?: "primary" | "outline" | "ghost" | "dark";
  size?: "md" | "lg" | "xl";
  icon?: "arrow" | "up-right" | "none";
  className?: string;
  ariaLabel?: string;
  dataCursor?: string;
  type?: "button" | "submit";
};

const variants: Record<string, string> = {
  primary:
    "bg-[#ed1c24] text-white hover:bg-[#c4181e] shadow-[0_0_40px_-12px_rgba(237,28,36,0.6)] group-hover:shadow-[0_0_60px_-10px_rgba(237,28,36,0.7)]",
  outline:
    "border border-line-strong text-fog hover:border-[#ed1c24]/60 hover:text-[#ff6b70] bg-white/[0.02]",
  ghost: "text-fog hover:text-[#ff6b70]",
  dark: "bg-ink text-fog border border-line hover:border-[#ed1c24]/50",
};

const sizes: Record<string, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[15px]",
  xl: "px-10 py-5 text-[1rem] sm:px-12",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "lg",
  icon = "arrow",
  className,
  ariaLabel,
  dataCursor,
  type = "button",
}: ButtonProps) {
  const cls = cn(
    "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300 ease-out",
    variants[variant],
    sizes[size],
    className
  );

  const Icon = icon === "up-right" ? ArrowUpRight : ArrowRight;

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2.5">
        <span>{children}</span>
        {icon !== "none" && (
          <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" strokeWidth={2.5} />
        )}
      </span>
      <span className="pointer-events-none absolute inset-0 z-0 translate-y-full rounded-full bg-white/10 transition-transform duration-500 ease-out group-hover:translate-y-0" />
    </>
  );

  if (href) {
    return (
      <Magnetic>
        <a
          href={href}
          className={cls}
          aria-label={ariaLabel}
          data-cursor={dataCursor}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {inner}
        </a>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel} data-cursor={dataCursor}>
        {inner}
      </button>
    </Magnetic>
  );
}
