"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/** Shows a poster image and only loads the Vimeo player when clicked, so the page stays fast. */
export function VimeoFacade({ videoId, title, poster, durationLabel }: { videoId: string; title: string; poster: string; durationLabel?: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[28px] border-4 border-stone-950 bg-black shadow-[0_25px_70px_rgba(147,51,234,0.3)]">
      {play ? (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} aria-label={`Play video: ${title}`} className="group absolute inset-0 h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt={title} width={1280} height={720} className="h-full w-full object-cover" />
          <span className="absolute inset-0 bg-stone-950/25 group-hover:bg-stone-950/10 transition-colors" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-purple-600 text-white shadow-2xl group-hover:scale-110 transition-transform">
            <Play className="h-8 w-8 fill-current" />
          </span>
          {durationLabel && (
            <span className="absolute bottom-4 right-4 rounded-full bg-stone-950/85 px-3 py-1 font-mono text-xs font-black text-white">{durationLabel}</span>
          )}
        </button>
      )}
    </div>
  );
}
