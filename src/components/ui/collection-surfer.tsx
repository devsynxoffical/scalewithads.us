"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
} from "framer-motion";

export interface CollectionItem {
  id: number;
  video: string;
  title: string;
  poster?: string;
}

export type CollectionSurferVariant = "magnetic" | "uplift" | "simple";

// Default items for the component in case none are provided
const ITEMS: CollectionItem[] = [
  { id: 1, video: "/media/videos/metads.mp4", title: "META ADS VSL" },
  { id: 2, video: "/media/videos/mastermind.mp4", title: "MASTERMIND" },
  { id: 3, video: "/media/videos/ad-x1.mp4", title: "AD X1" },
  { id: 4, video: "/media/training/DQXUnRNkjR3.mp4", title: "TRAINING 01" },
  { id: 5, video: "/media/training/DVjcGrUEr1Y.mp4", title: "TRAINING 02" },
  { id: 6, video: "/media/training/DPHgI7fEuIA.mp4", title: "TRAINING 03" },
];

interface CollectionSurferProps {
  items?: CollectionItem[];
  variant?: CollectionSurferVariant;
  sectionHeight?: number;
  title?: string;
  titleAccent?: string;
  countLabel?: string;
}

export function CollectionSurfer({
  items = ITEMS,
  variant = "magnetic",
  sectionHeight = 420,
  title = "CLIENT VIDEO",
  titleAccent = "WALL",
  countLabel = "",
}: CollectionSurferProps) {
  // 1. Loop Setup: Duplicate items to create a buffer
  // We render the list twice: [Original Set, Duplicate Set]
  // When we scroll past the Original Set, we snap back to the start.
  const duplicatedItems = [...items, ...items];

  // Scroll sensitivity
  const scrollPerItem = 600;

  // The exact scroll distance to complete one full loop of the ORIGINAL items
  const loopDistance = items.length * scrollPerItem;

  // Bounded scroll progress driven by the sticky section's own range,
  // so this embeds cleanly inside a normal page flow.
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });

  // 2. Modulo Logic:
  // Map progress 0 -> 1 to one full loop (0 -> loopDistance).
  const loopedProgress = useTransform(
    smoothProgress,
    (value) => value * loopDistance,
  );

  // Step vector
  const stepX = 240;
  const stepY = -84;
  const stepZ = -288;

  // We only move the scene backwards by the length of ONE set of items
  const x = useTransform(
    loopedProgress,
    [0, loopDistance],
    [0, -items.length * stepX],
  );
  const y = useTransform(
    loopedProgress,
    [0, loopDistance],
    [0, -items.length * stepY],
  );
  const z = useTransform(
    loopedProgress,
    [0, loopDistance],
    [0, -items.length * stepZ],
  );

  // Mouse position for magnetic effect
  // Initialize off-screen so no card is scaled by default
  const mouseX = useMotionValue(-10000);
  const mouseY = useMotionValue(-10000);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (variant === "simple") return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleMouseLeave = () => {
    if (variant === "simple") return;
    mouseX.set(-10000);
    mouseY.set(-10000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${sectionHeight}vh` }}
    >
      {/* Sticky viewport */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden bg-transparent"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* UI Overlays */}
        <div className="absolute top-[3vw] left-[3vw] z-50 pointer-events-none mix-blend-difference">
          <h2 className="display text-[clamp(2rem,6vw,5rem)] font-bold leading-[0.9] tracking-tighter text-white ml-[4vw]">
            {title}
          </h2>
          <h2 className="display text-[clamp(2rem,6vw,5rem)] font-bold leading-[0.9] tracking-tighter text-white">
            {titleAccent}
            <span className="align-top relative top-[0.6em] ml-2 font-mono text-[0.4em] tabular-nums">
              ({countLabel || items.length})
            </span>
          </h2>
        </div>

        <div className="absolute bottom-[3vw] right-[3vw] z-50 font-mono text-xs tracking-wider uppercase opacity-70 text-white">
          scroll to surf
        </div>

        {/* 3D Scene */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: "2000px",
            perspectiveOrigin: "10% 10%",
          }}
        >
          {/* Animated Track */}
          <motion.div
            className="relative h-0 w-0"
            style={{
              x,
              y,
              z,
              transformStyle: "preserve-3d",
            }}
          >
            {duplicatedItems.map((item, i) => (
              <Card
                key={`${item.id}-${i}`}
                item={item}
                i={i}
                stepX={stepX}
                stepY={stepY}
                stepZ={stepZ}
                mouseX={mouseX}
                mouseY={mouseY}
                scrollSpring={smoothProgress}
                variant={variant}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({
  item,
  i,
  stepX,
  stepY,
  stepZ,
  mouseX,
  mouseY,
  scrollSpring,
  variant,
}: {
  item: CollectionItem;
  i: number;
  stepX: number;
  stepY: number;
  stepZ: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  scrollSpring: MotionValue<number>;
  variant: CollectionSurferVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate distance from mouse to center of card
  const distance = useTransform([mouseX, mouseY, scrollSpring], (latest) => {
    const [x, y] = latest as [number, number, number];
    if (!ref.current || variant === "simple") return 200; // Default large distance
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    return dist;
  });

  // --- Magnetic Variant ---
  // Map distance to scale: Closer = larger
  const targetScale = useTransform(distance, [0, 400], [1.5, 1]);
  const springScale = useSpring(targetScale, {
    mass: 0.5,
    stiffness: 300,
    damping: 20,
  });

  // --- Uplift Variant ---
  // Map distance to Y uplift: Closer = move up (negative Y)
  const targetUplift = useTransform(distance, [0, 400], [-100, 0]);
  const springUplift = useSpring(targetUplift, {
    mass: 0.5,
    stiffness: 300,
    damping: 20,
  });

  // Combine transforms based on variant
  const transform = useTransform([springScale, springUplift], (latest) => {
    const [s, u] = latest as [number, number];
    let scaleValue = 1;
    let upliftValue = 0;

    if (variant === "magnetic") {
      scaleValue = Number(s);
    } else if (variant === "uplift") {
      upliftValue = Number(u);
    }

    const baseX = i * stepX;
    const baseY = i * stepY;
    const baseZ = i * stepZ;

    return `translate3d(${baseX}px, ${baseY + upliftValue}px, ${baseZ}px) rotateY(-50deg) scale(${scaleValue})`;
  });

  return (
    <motion.div
      ref={ref}
      className="absolute h-[400px] w-[300px] overflow-hidden bg-neutral-900 shadow-2xl transition-colors duration-500 ease-out group"
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Index number: Using i % items.length + 1 so the duplicate cards show correct numbers */}
      <div className="absolute -top-6 -left-4 z-20 font-mono text-xs text-white opacity-50 transition-opacity group-hover:opacity-100">
        {String((i % 16) + 1).padStart(2, "0")}
      </div>

      {/* Video */}
      <div className="relative h-full w-full transition-all duration-300 brightness-75 group-hover:brightness-100">
        <video
          src={item.video}
          poster={item.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Bottom label */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pb-4 pt-12">
        <p className="display text-[15px] leading-snug text-white">
          {item.title}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
    </motion.div>
  );
}

export default CollectionSurfer;
