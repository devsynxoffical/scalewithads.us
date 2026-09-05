"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BOOKING_PATH } from "../lib/offer";
import { videos, type VideoItem } from "../lib/videos";

function VideoTile({ video }: { video: VideoItem }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          el.play().catch(() => setVisible(false));
        } else {
          setVisible(false);
          el.pause();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function toggleMute() {
    const el = ref.current;
    if (!el) return;
    const next = !muted;
    setMuted(next);
    el.muted = next;
  }

  return (
    <div
      className={`group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#ed1c24]/50 hover:shadow-[0_16px_40px_-16px_rgba(237,28,36,0.2)] ${
        video.aspect === "portrait" ? "aspect-[9/16]" : "aspect-square"
      }`}
    >
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        className={`h-full w-full object-cover transition duration-500 ${
          visible ? "opacity-100" : "opacity-90"
        }`}
      />

      {/* Top badge */}
      <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-2">
        <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-900 shadow-sm">
          {video.name}
        </span>
      </div>

      {/* Bottom caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pb-4 pt-12">
        <p className="display text-[15px] leading-snug text-white">
          {video.result}
        </p>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
          {video.role}
        </p>
      </div>

      {/* Hover play glyph */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/90 text-zinc-900 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.3)] backdrop-blur">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-current" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Turn sound on" : "Mute"}
        className="absolute bottom-3 right-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/40 backdrop-blur-md/55 text-white opacity-0 backdrop-blur transition hover:scale-105 hover:bg-black/40 backdrop-blur-md/80 group-hover:opacity-100"
      >
        {muted ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
            <path d="M16 9l5 5M21 9l-5 5" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
            <path d="M15.5 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12" />
          </svg>
        )}
      </button>
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-b border-zinc-200 bg-white text-zinc-950"
    >
      <div className="jobber-grid-light pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        {/* Video wall */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {videos.map((video) => (
            <VideoTile key={video.id} video={video} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center gap-4 pb-16 pt-2 sm:flex-row md:pb-24">
          <Link href={BOOKING_PATH} className="btn btn-accent px-7 py-4 text-base">
            Book Your Free Strategy Call
            <span className="ml-1 text-sm font-medium text-white/75">
              · $10K minimum · 90-day agreement
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
