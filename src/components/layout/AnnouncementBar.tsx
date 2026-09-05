"use client";

import { useState, useEffect } from "react";
import { X, AlertTriangle, Zap } from "lucide-react";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { site } from "@/lib/site";

const STORAGE_KEY = "swa-announcement-dismissed";

const TICKER_MESSAGES = [
  "⚠️  THIS IS ONLY FOR AGENCY OWNERS, COACHES, HIGH-TICKET SERVICE PROVIDERS & B2B FOUNDERS ALREADY GENERATING $10,000+/MONTH.",
  "🚫  IF YOU'RE BELOW $10,000/MONTH, THIS SYSTEM ISN'T THE RIGHT FIT.",
  "⚡  CLICK TO BOOK YOUR FREE STRATEGY CALL — LIMITED SPOTS AVAILABLE.",
  "🔥  DONE-FOR-YOU META ADS SYSTEM — $50M+ IN CLIENT RESULTS.",
  "⚠️  THIS IS ONLY FOR AGENCY OWNERS, COACHES, HIGH-TICKET SERVICE PROVIDERS & B2B FOUNDERS ALREADY GENERATING $10,000+/MONTH.",
  "🚫  IF YOU'RE BELOW $10,000/MONTH, THIS SYSTEM ISN'T THE RIGHT FIT.",
  "⚡  CLICK TO BOOK YOUR FREE STRATEGY CALL — LIMITED SPOTS AVAILABLE.",
  "🔥  DONE-FOR-YOU META ADS SYSTEM — $50M+ IN CLIENT RESULTS.",
];

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (localStorage.getItem(STORAGE_KEY)) setDismissed(true);
    } catch {
      /* noop */
    }
  }, []);

  const dismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    setDismissed(true);
  };

  useEffect(() => {
    if (!mounted) return;
    const el = document.getElementById("announcement-bar");
    if (!el) return;
    if (prefersReducedMotion()) return;
    gsap.fromTo(
      el,
      { yPercent: -110 },
      { yPercent: 0, duration: 0.9, ease: "expo.out", delay: 0.4 }
    );
  }, [mounted]);

  if (!mounted) return <div className="min-h-10" aria-hidden />;
  if (dismissed) return null;

  return (
    <div
      id="announcement-bar"
      className="sticky top-0 z-[70] min-h-10 bg-[#ed1c24] text-white overflow-hidden relative"
      role="region"
      aria-label="Announcement"
    >
      <a
        href={site.bookCallUrl}
        className="group flex h-full w-full items-center overflow-hidden py-2"
        data-cursor="book"
        aria-label="Book a strategy call"
      >
        {/* Scrolling ticker track */}
        <div className="flex items-center whitespace-nowrap animate-ticker-scroll gap-0">
          {TICKER_MESSAGES.map((msg, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-10 text-[11px] sm:text-[12px] font-extrabold uppercase tracking-widest text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/60 shrink-0" />
              {msg}
            </span>
          ))}
        </div>
      </a>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-black/20 hover:text-white"
      >
        <X className="h-3.5 w-3.5" />
      </button>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker-scroll {
          animation: ticker-scroll 30s linear infinite;
        }
        .animate-ticker-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
