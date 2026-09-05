"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type VideoPlayerProps = {
  src: string;
  cover: string;
  title: string;
  className?: string;
  autoPlay?: boolean;
};

export function VideoPlayer({
  src,
  cover,
  title,
  className = "",
  autoPlay = false,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [prevSrc, setPrevSrc] = useState(src);

  if (src !== prevSrc) {
    setPrevSrc(src);
    setStarted(false);
    setError(null);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    try {
      video.currentTime = 0;
    } catch {
      /* ignore seek before metadata */
    }
  }, [src]);

  useEffect(() => {
    if (!autoPlay) return;
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;

    const tryPlay = () => {
      video.muted = true;
      setMuted(true);
      video.play().then(
        () => {
          if (!cancelled) setStarted(true);
        },
        () => {
          if (!cancelled) {
            setError("Video unavailable.");
            setStarted(false);
          }
        }
      );
    };

    tryPlay();
    return () => {
      cancelled = true;
    };
  }, [autoPlay, src]);

  async function handlePlay() {
    const video = videoRef.current;
    if (!video) return;

    setError(null);
    setStarted(true);
    video.muted = muted;

    try {
      await video.play();
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      console.error("Video play error:", err);
      setError("Video unavailable.");
      setStarted(false);
    }
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    setMuted(next);
    video.muted = next;
  }

  return (
    <div className={`relative aspect-video overflow-hidden bg-[var(--band)] ${className}`}>
      <video
        key={src}
        ref={videoRef}
        src={src}
        className={`absolute inset-0 h-full w-full bg-[var(--band)] object-contain ${
          started && !error ? "opacity-100" : "opacity-0"
        }`}
        controls={started && !error}
        playsInline
        loop={autoPlay}
        muted={muted}
        preload="metadata"
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
        onError={() => {
          setError("Video unavailable.");
          setStarted(false);
        }}
      >
        <track kind="captions" />
      </video>

      {started && !error && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Turn sound on" : "Mute"}
          className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/40 backdrop-blur-md/55 text-white backdrop-blur transition hover:scale-105 hover:bg-black/40 backdrop-blur-md/80"
        >
          {muted ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
              <path d="M16 9l5 5M21 9l-5 5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
              <path d="M15.5 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12" />
            </svg>
          )}
        </button>
      )}

      {(!started || error) && (
        <button
          type="button"
          onClick={handlePlay}
          className="group absolute inset-0 z-10"
          aria-label={`Play ${title}`}
        >
          <Image
            src={cover}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
          <span className="absolute inset-0 bg-black/40 backdrop-blur-md/30 transition group-hover:bg-black/40 backdrop-blur-md/20" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/90 text-[var(--ink)] shadow-[0_16px_48px_-8px_rgba(12,14,19,0.55)] transition group-hover:scale-105 sm:h-20 sm:w-20">
              {error ? (
                <span className="px-2 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-[#e5484d]">
                  Retry
                </span>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-7 w-7 fill-current"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </span>
          </span>
          {error && (
            <span className="absolute inset-x-0 bottom-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#ff6b6b]">
              {error}
            </span>
          )}
        </button>
      )}
    </div>
  );
}
