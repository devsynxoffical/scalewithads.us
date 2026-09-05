"use client";

import { CalendarDays, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SplitReveal } from "./SplitReveal";
import { Button } from "./Button";
import { MeshGradient } from "./MeshGradient";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type CTABannerProps = {
  className?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  compact?: boolean;
};

export function CTABanner({
  className,
  eyebrow = "Limited spots each month",
  title,
  compact = false,
}: CTABannerProps) {
  return (
    <Reveal y={48} className={cn("container-x", className)}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-[2rem] border border-line",
          compact ? "px-6 py-12 sm:px-12 sm:py-16" : "px-6 py-16 sm:px-12 sm:py-24"
        )}
      >
        <div className="absolute inset-0">
          <MeshGradient colors={["#0a0c0f", "#2a1013", "#160a0d", "#1a1206"]} />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_100%,transparent_40%,var(--color-ink)_100%)]" />
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-lime/70 to-transparent" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <Reveal delay={0.05}>
            <span className="eyebrow-xl justify-center">{eyebrow}</span>
          </Reveal>

          <SplitReveal
            as="h3"
            className={cn(
              "mt-6 max-w-3xl text-balance font-semibold tracking-tight text-fog",
              compact ? "text-3xl leading-[1.08] sm:text-4xl" : "text-4xl leading-[1.05] sm:text-6xl"
            )}
          >
            {title ?? (
              <>
                Let&apos;s install the system that{" "}
                <em className="font-semibold not-italic text-lime">books your clients</em>{" "}
                by this week.
              </>
            )}
          </SplitReveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-[1rem] leading-relaxed text-mist sm:text-lg">
              Book a free strategy call. We&apos;ll audit your offer, show you the exact funnel you
              need — and get qualified clients onto your calendar. No pressure, no fluff.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col items-center gap-5">
              <Button
                href={site.bookCallUrl}
                size="xl"
                icon="up-right"
                className="w-full sm:w-auto"
                ariaLabel="Book your free strategy call"
                dataCursor="book"
              >
                Book Your Free Strategy Call
              </Button>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-dim">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-lime" />
                  No commitment required
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-lime" />
                  90-day written guarantee
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
}
