"use client";

import { useEffect, useRef, useState } from "react";
import type { MediaAsset } from "../lib/library";

export function LibraryVideoTile({ asset }: { asset: MediaAsset }) {
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

  const aspectClass =
    asset.aspect === "portrait"
      ? "aspect-[9/16]"
      : asset.aspect === "square"
        ? "aspect-square"
        : "aspect-video";

  return (
    <div
      className={`group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-zinc-800 bg-[var(--band-2)] shadow-[0_10px_30px_-16px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/60 hover:shadow-[0_24px_50px_-20px_rgba(237,28,36,0.45)] ${aspectClass}`}
    >
      <video
        ref={ref}
        src={asset.src}
        poster={asset.poster}
        muted
        loop
        playsInline
        preload="metadata"
        className={`h-full w-full object-cover transition duration-500 ${
          visible ? "opacity-100" : "opacity-90"
        }`}
      />

      <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-2">
        <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-900 shadow-sm">
          {asset.name}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/90 text-[var(--ink)] shadow-[0_12px_36px_-8px_rgba(0,0,0,0.5)] backdrop-blur">
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
