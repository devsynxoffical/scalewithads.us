import { type ReactNode } from "react";
import { SplitReveal } from "./SplitReveal";
import { FadeContent } from "./FadeContent";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  container?: boolean;
};

export function Section({ id, children, className, container = true }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-32 lg:py-40", className)}>
      {container ? <div className="container-x">{children}</div> : children}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "mb-14 sm:mb-20",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {eyebrow && (
        <FadeContent blur>
          <span className={cn("eyebrow-xl", align === "center" && "justify-center")}>
            {eyebrow}
          </span>
        </FadeContent>
      )}
      <SplitReveal
        as="h2"
        mode="words"
        scroll
        stagger={0.05}
        className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-fog sm:text-5xl lg:text-6xl"
      >
        {title}
      </SplitReveal>
      {subtitle && (
        <FadeContent blur delay={0.2} y={24}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-pretty text-[1rem] leading-relaxed text-mist sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </FadeContent>
      )}
    </header>
  );
}
