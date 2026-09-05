import { CollectionSurfer, type CollectionItem } from "./ui/collection-surfer";

const CDN = "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media";

const items: CollectionItem[] = [
  {
    id: 1,
    title: "EDGAR · HIGH-TICKET SALES",
    video: `${CDN}/69624f63f8a93b76e0751a55.mp4`,
    poster: "/media/library/edgar/videos/poster-1.png",
  },
  {
    id: 2,
    title: "EDGAR · WHAT CHANGED",
    video: `${CDN}/6978f116d560857126a4804c.mp4`,
    poster: "/media/library/edgar/videos/poster-2.png",
  },
  {
    id: 3,
    title: "IBAM · AGENCY OPERATOR",
    video: `${CDN}/69624f62f8a93b0480751a4e.mp4`,
    poster: "/media/library/ibam/videos/poster-1.png",
  },
  {
    id: 4,
    title: "THE PRECISION PIVOT",
    video: "/media/library/million-dollar-media/videos/precision-pivot.mp4",
  },
  {
    id: 5,
    title: "AD X1",
    video: "/media/library/million-dollar-media/videos/ad-x1.mp4",
  },
  {
    id: 6,
    title: "META ADS VSL",
    video: "/media/videos/metads.mp4",
  },
  {
    id: 7,
    title: "MASTERMIND",
    video: "/media/videos/mastermind.mp4",
  },
  {
    id: 8,
    title: "TRAINING 01",
    video: "/media/training/DQXUnRNkjR3.mp4",
    poster: "/media/training/DQXUnRNkjR3-poster.jpg",
  },
  {
    id: 9,
    title: "TRAINING 02",
    video: "/media/training/DVjcGrUEr1Y.mp4",
    poster: "/media/training/DVjcGrUEr1Y-poster.jpg",
  },
  {
    id: 10,
    title: "TRAINING 03",
    video: "/media/training/DPHgI7fEuIA.mp4",
    poster: "/media/training/DPHgI7fEuIA-poster.jpg",
  },
];

export function VideoSurferSection() {
  return (
    <section id="videowall" className="relative border-t border-zinc-800">
      <CollectionSurfer
        items={items}
        variant="magnetic"
        sectionHeight={520}
        title="MILLION DOLLAR"
        titleAccent="MEDIA"
        countLabel={String(items.length)}
      />
    </section>
  );
}
