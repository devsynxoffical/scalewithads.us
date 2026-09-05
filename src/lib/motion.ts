import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

gsap.defaults({ ease: "expo.out", duration: 1 });

export const EASE = {
  outExpo: "expo.out",
  outQuint: "power4.out",
  inOut: "power3.inOut",
  outBack: "back.out(1.7)",
  outSoft: "power2.out",
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none)").matches || "ontouchstart" in window;
}

export { gsap, ScrollTrigger };
