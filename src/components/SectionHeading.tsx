import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SplitReveal } from "./ui/SplitReveal";
import { FadeContent } from "./ui/FadeContent";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`mx-auto flex max-w-3xl flex-col items-center text-center ${className}`}
    >
      <FadeContent blur delay={0.05}>
        <div className={cn("mb-3", light ? "pill-badge-red" : "pill-badge-dark")}>
          <span className="dot-red" />
          <span>{eyebrow}</span>
        </div>
      </FadeContent>
      <SplitReveal
        as="h2"
        mode="words"
        scroll
        stagger={0.05}
        className={cn(
          "display [&_.sr-line]:overflow-hidden text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-zinc-950" : "text-white"
        )}
      >
        {title}
      </SplitReveal>
      {description ? (
        <FadeContent blur delay={0.25} y={24}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-relaxed",
              light ? "text-zinc-600" : "text-zinc-400"
            )}
          >
            {description}
          </p>
        </FadeContent>
      ) : null}
    </Reveal>
  );
}
