"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  label: string;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 76; // Card width
const IMG_HEIGHT = 108; // Card height

function FlipCard({ src, label, target }: FlipCardProps) {
  return (
    <motion.div
      // Smoothly animate to the coordinates defined by the parent
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 20,
      }}

      // Initial style
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d", // Essential for the 3D hover effect
        perspective: "1000px",
      }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-200"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={label}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md/10 transition-colors group-hover:bg-transparent" />
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-900 flex items-center justify-center p-3 border border-gray-700"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-[9px] font-bold text-[#ed1c24] uppercase tracking-widest text-center leading-relaxed">
            {label}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Main Hero Component ---
const TOTAL_IMAGES = 20;

// System labels, one per card — pitched to $10K+/month business owners
const LABELS = [
  "More Booked Calls",
  "Done-For-You Ads",
  "Offer Positioning",
  "Landing Pages & Funnels",
  "CRM + AI Automation",
  "Lead Qualification",
  "Booked Appointments",
  "SMS Follow-Up",
  "Email Sequences",
  "Appointment Reminders",
  "High-Value Clients",
  "Lower Cost Per Lead",
  "Short-Form Ads That Sell",
  "Pipeline Automation",
  "Messaging That Converts",
  "Creative Development",
  "Qualified Appointments",
  "Closed Clients",
  "90-Day Written Guarantee",
  "Revenue You Own",
];

// Client photos + campaign covers (real Scale With Ads media library)
const IMAGES = [
  "/media/library/edgar/videos/poster-1.png",
  "/media/library/ibam/videos/poster-1.png",
  "/media/library/darrell/photo.jpg",
  "/media/library/pierce/photo.webp",
  "/media/library/officer-baker/photo.jpg",
  "/media/library/jesse/photo.webp",
  "/media/library/tim-burd/photo.webp",
  "/media/library/dr-amy/photo.webp",
  "/media/library/travis/photo.webp",
  "/media/library/dr-bea/photo.jpg",
  "/media/library/steven/photo.jpg",
  "/media/library/rafael/photo.jpg",
  "/media/library/sarah/photo.jpg",
  "/media/library/mark/photo.jpg",
  "/media/library/jared/photo.jpg",
  "/media/library/mahdi/photo.jpg",
  "/media/library/aref/photo.jpg",
  "/media/library/jimmy/photo.webp",
  "/media/library/marie/photo.jpg",
  "/media/covers/masterclass-poster-2.png",
];

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function IntroAnimation() {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Container Size ---
  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);

    // Initial set
    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });

    return () => observer.disconnect();
  }, []);

  // --- Scroll-linked animation (pinned) ---
  const progressValue = useMotionValue(0);
  const smoothProgress = useSpring(progressValue, { stiffness: 220, damping: 30, mass: 0.4 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const span = rect.height - window.innerHeight;
      if (span <= 0) return;
      const p = -rect.top / span;
      progressValue.set(Math.min(1, Math.max(0, p)));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [progressValue]);

  // Phase 1: morph from circle to bottom arc (first ~28% of the scroll)
  const morphProgress = useTransform(smoothProgress, [0, 0.28], [0, 1]);
  // Phase 2: rotate the arc as the user keeps scrolling
  const scrollRotate = useTransform(smoothProgress, [0.28, 1], [0, 360]);

  // --- Mouse Parallax ---
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;

      // Normalize -1 to 1
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      // Move +/- 100px
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  // --- Intro Sequence ---
  useEffect(() => {
    const timer1 = setTimeout(() => setIntroPhase("line"), 200);
    const timer2 = setTimeout(() => setIntroPhase("circle"), 1000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // --- Random Scatter Positions ---
  const scatterPositions = useMemo(() => {
    const fract = (v: number) => v - Math.floor(v);
    return IMAGES.map((_, i) => {
      const r1 = fract(Math.sin(i * 12.9898 + 0.1) * 43758.5453);
      const r2 = fract(Math.sin(i * 78.233 + 1.3) * 28001.8384);
      const r3 = fract(Math.sin(i * 33.11 + 2.7) * 16532.1237);
      return {
        x: (r1 - 0.5) * 1500,
        y: (r2 - 0.5) * 1000,
        rotation: (r3 - 0.5) * 180,
        scale: 0.6,
        opacity: 0,
      };
    });
  }, []);

  // --- Render Loop (Manual Calculation for Morph) ---
  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);

  useEffect(() => {
    const unsubscribeMorph = morphProgress.on("change", setMorphValue);
    const unsubscribeRotate = scrollRotate.on("change", setRotateValue);
    return () => {
      unsubscribeMorph();
      unsubscribeRotate();
    };
  }, [morphProgress, scrollRotate]);

  // --- Content Opacity ---
  const contentOpacity = useTransform(morphProgress, [0.8, 1], [0, 1]);
  const contentY = useTransform(morphProgress, [0.8, 1], [20, 0]);

  return (
    <div ref={sectionRef} className="relative h-[250vh] w-full">
      <div
        ref={containerRef}
        className="sticky top-[100px] md:top-[108px] flex h-[calc(100vh-100px)] md:h-[calc(100vh-108px)] w-full flex-col items-center justify-center overflow-hidden bg-white perspective-1000"
      >
        {/* Intro Text (Fades out) */}
        <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={
              introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }
            }
            transition={{ duration: 1 }}
            className="text-2xl font-medium tracking-tight text-gray-800 md:text-4xl"
          >
            A Client Acquisition System Built to Outlast Every Algorithm Change.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={
              introPhase === "circle" && morphValue < 0.5
                ? { opacity: 0.5 - morphValue }
                : { opacity: 0 }
            }
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-xs font-bold tracking-[0.2em] text-gray-500"
          >
            SCROLL TO EXPLORE
          </motion.p>
        </div>

        {/* Arc Active Content (Fades in) */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute top-[10%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4 max-w-3xl">
            Stop relying on referrals, inconsistent lead flow, and multiple
            marketing vendors.
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed">
            We build your entire client acquisition ecosystem — offer
            positioning, Meta Ads, short-form creatives, landing pages, CRM, AI
            automations, lead qualification, and follow-up — so your only job is
            to show up, run the calls, and close high-ticket clients.
          </p>
        </motion.div>

        {/* Main Container */}
        <motion.div
          style={{ x: smoothMouseX }}
          className="relative flex items-center justify-center w-full h-full"
        >
          {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
              let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

              // 1. Intro Phases (Scatter -> Line)
              if (introPhase === "scatter") {
                target = scatterPositions[i];
              } else if (introPhase === "line") {
                const lineSpacing = 70; // Adjusted for smaller images (60px width + 10px gap)
                const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                const lineX = i * lineSpacing - lineTotalWidth / 2;
                target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
              } else {
                // 2. Circle Phase & Morph Logic

                // Responsive Calculations
                const isMobile = containerSize.width < 768;
                const minDimension = Math.min(containerSize.width, containerSize.height);

                // A. Calculate Circle Position
                const circleRadius = Math.min(minDimension * 0.35, 350);

                const circleAngle = (i / TOTAL_IMAGES) * 360;
                const circleRad = (circleAngle * Math.PI) / 180;
                const circlePos = {
                  x: Math.cos(circleRad) * circleRadius,
                  y: Math.sin(circleRad) * circleRadius,
                  rotation: circleAngle + 90,
                };

                // B. Calculate Bottom Arc Position
                // "Rainbow" Arch: Convex up. Center is highest point.

                // Radius:
                const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);

                // Position:
                const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                const arcCenterY = arcApexY + arcRadius;

                // Spread angle:
                const spreadAngle = isMobile ? 100 : 130;
                const startAngle = -90 - spreadAngle / 2;
                const step = spreadAngle / (TOTAL_IMAGES - 1);

                // Apply Scroll Rotation (Shuffle) with Bounds
                const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);

                // Map scroll to: 0 -> -spreadAngle (shifts items left)
                const maxRotation = spreadAngle * 0.8; // Don't go all the way, keep last item visible
                const boundedRotation = -scrollProgress * maxRotation;

                const currentArcAngle = startAngle + i * step + boundedRotation;
                const arcRad = (currentArcAngle * Math.PI) / 180;

                const arcPos = {
                  x: Math.cos(arcRad) * arcRadius,
                  y: Math.sin(arcRad) * arcRadius + arcCenterY,
                  rotation: currentArcAngle + 90,
                  scale: isMobile ? 1.4 : 1.8, // Increased scale for active state
                };

                // C. Interpolate (Morph)
                target = {
                  x: lerp(circlePos.x, arcPos.x, morphValue),
                  y: lerp(circlePos.y, arcPos.y, morphValue),
                  rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                  scale: lerp(1, arcPos.scale, morphValue),
                  opacity: 1,
                };
              }

              return (
                <FlipCard
                  key={i}
                  src={src}
                  label={LABELS[i]}
                  target={target}
                />
              );
            })}
        </motion.div>
      </div>
    </div>
  );
}
