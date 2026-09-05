"use client";

import { useEffect, type ReactNode } from "react";
import { gsap, ScrollTrigger, EASE, isTouchDevice, prefersReducedMotion } from "@/lib/motion";

type SmoothScrollProps = {
  children: ReactNode;
  lerp?: number;
};

const NAV_OFFSET = -80;

/**
 * Global scroll-effects engine for decorative data-attributes:
 *
 *   <div data-reveal />                    fade + rise when scrolled into view
 *   <div data-reveal data-reveal-dir="up|down|left|right|zoom" />
 *   <div data-reveal data-reveal-delay="120" />
 *
 *   <div data-parallax />                  vertical parallax drift
 *   <div data-parallax data-speed="0.2" /> amount (fraction of viewport height)
 *
 * Runs after every DOM mutation so it also covers client-side route changes.
 */
function registerScrollEffects() {
  if (prefersReducedMotion()) return;

  gsap.utils
    .toArray<HTMLElement>("[data-reveal]:not([data-reveal-set])")
    .forEach((el) => {
      el.dataset.revealSet = "true";
      const dir = el.dataset.revealDir ?? "up";
      const delay = Number(el.dataset.revealDelay ?? 0) / 1000 || 0;
      const distance = 48;

      const from =
        dir === "down"
          ? { y: -distance }
          : dir === "left"
            ? { x: -distance }
            : dir === "right"
              ? { x: distance }
              : dir === "zoom"
                ? { scale: 0.92, filter: "blur(6px)" }
                : { y: distance };

      gsap.fromTo(
        el,
        { ...from, opacity: 0 },
        {
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
          ease: EASE.outExpo,
          duration: 1.0,
          delay,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        }
      );
    });

  // Stagger reveal for .stagger-parent containers
  gsap.utils
    .toArray<HTMLElement>(".stagger-parent:not([data-stagger-set])")
    .forEach((container) => {
      container.dataset.staggerSet = "true";
      const children = Array.from(container.children) as HTMLElement[];
      gsap.fromTo(
        children,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: EASE.outExpo,
          stagger: 0.09,
          scrollTrigger: { trigger: container, start: "top 88%", once: true },
        }
      );
    });

  if (isTouchDevice()) return;

  gsap.utils
    .toArray<HTMLElement>("[data-parallax]:not([data-parallax-set])")
    .forEach((el) => {
      el.dataset.parallaxSet = "true";
      const speed = Number(el.dataset.speed ?? el.dataset.parallax ?? 0.15) || 0;
      if (!speed) return;
      const distance = speed * window.innerHeight;

      gsap.fromTo(
        el,
        { y: -distance },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
}

export function SmoothScroll({ children, lerp = 0.09 }: SmoothScrollProps) {
  useEffect(() => {
    const reduce = prefersReducedMotion();
    const touch = isTouchDevice();

    registerScrollEffects();

    let instance: Window["__lenis"] | null = null;
    let ticker: ((time: number) => void) | null = null;
    let observer: MutationObserver | null = null;
    let refreshTimer: number | undefined;
    let cancelled = false;

    const refresh = () => ScrollTrigger.refresh();
    const onLoad = () => refresh();
    window.addEventListener("load", onLoad);

    /* Buttery smooth in-page anchor navigation through Lenis */
    const onAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      const anchor = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.getElementById(href.slice(1));
      if (!target) return;

      e.preventDefault();
      const lenis = window.__lenis;
      if (lenis) {
        lenis.scrollTo(target, {
          offset: NAV_OFFSET,
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 4),
        });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("click", onAnchorClick);

    const init = async () => {
      if (reduce) return;

      const Lenis = (await import("lenis")).default;
      if (cancelled) return;

      const lenis = new Lenis({
        lerp: lerp || 0.07,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
        autoResize: true,
      });
      instance = lenis;
      window.__lenis = lenis;

      /* Single clock: Lenis is driven by GSAP's ticker so ScrollTrigger
         animations stay frame-locked with the smooth scroll. */
      lenis.on("scroll", () => ScrollTrigger.update());

      const scrollFn = (time: number) => lenis.raf(time * 1000);
      ticker = scrollFn;
      gsap.ticker.add(scrollFn);
      gsap.ticker.lagSmoothing(0);

      refresh();
    };

    void init();

    /* Re-scan for effects on route changes / late-mounted content */
    observer = new MutationObserver(() => {
      registerScrollEffects();
      if (refreshTimer) return;
      refreshTimer = window.setTimeout(() => {
        refreshTimer = undefined;
        refresh();
      }, 150);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelled = true;
      window.removeEventListener("click", onAnchorClick);
      window.removeEventListener("load", onLoad);
      if (refreshTimer) window.clearTimeout(refreshTimer);
      observer?.disconnect();
      if (ticker) gsap.ticker.remove(ticker);
      gsap.ticker.lagSmoothing(500);
      instance?.destroy();
      delete window.__lenis;
    };
  }, [lerp]);

  return <>{children}</>;
}
