"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { adShorts, type AdVideo } from "../lib/ads";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./ui/TiltCard";
import { GlareHover } from "./ui/GlareHover";
import { GradientText } from "./ui/GradientText";
import { SectionBackground } from "./ui/SectionBackground";
import { Play, Volume2, VolumeX, Eye, Flame, ArrowUpRight } from "lucide-react";
import { BOOKING_PATH } from "../lib/offer";

function AutoPlayShortCard({
  video,
  onOpen,
}: {
  video: AdVideo;
  onOpen: (v: AdVideo) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "150px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <TiltCard maxTilt={6} className="h-full">
      <GlareHover className="h-full rounded-2xl">
        <div
          onClick={() => onOpen(video)}
          data-cursor="play"
          className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#ed1c24] hover:shadow-[0_20px_40px_-15px_rgba(237,28,36,0.45)]"
        >
        <div className="relative aspect-[9/16] w-full overflow-hidden">
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Center Hover Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ed1c24] text-white shadow-[0_0_35px_rgba(237,28,36,0.8)] scale-90 group-hover:scale-100 transition-transform">
              <Play className="ml-1 h-6 w-6 fill-current" />
            </div>
          </div>
        </div>
        </div>
      </GlareHover>
    </TiltCard>
  );
}

export function ShortsReelSection() {
  const [activeShortModal, setActiveShortModal] = useState<AdVideo | null>(null);

  return (
    <section
      id="shorts"
      className="relative overflow-hidden border-b border-zinc-800 bg-transparent pt-0 pb-20 md:pt-0 md:pb-28 text-white -mt-6"
    >
      <SectionBackground variant="dark" grid />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">

        {/* Creative Bento Grid of Autoplaying Short-Form Ads */}
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 items-stretch">
          {adShorts.slice(0, 10).map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: (idx % 4) * 0.08,
              }}
            >
              <AutoPlayShortCard
                video={video}
                onOpen={(v) => setActiveShortModal(v)}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center">
          <Link
            href={BOOKING_PATH}
            className="btn btn-accent inline-flex items-center gap-2 px-8 py-4 text-sm font-extrabold uppercase tracking-wider shadow-[0_0_35px_rgba(237,28,36,0.6)]"
          >
            <span>GET DFY CREATIVE ADS FOR YOUR BRAND</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Short Video Lightbox Modal */}
      <AnimatePresence>
        {activeShortModal && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 backdrop-blur-md/90 p-4 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-black/40 backdrop-blur-md p-3 shadow-2xl"
            >
              <button
                onClick={() => setActiveShortModal(null)}
                className="absolute top-4 right-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-md/80 text-white backdrop-blur hover:bg-black/40 backdrop-blur-md"
              >
                ✕
              </button>

              <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl">
                <video
                  src={activeShortModal.src}
                  controls
                  autoPlay
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
