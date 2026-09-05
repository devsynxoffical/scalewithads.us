export type VideoItem = {
  id: string;
  name: string;
  role: string;
  result: string;
  src: string;
  poster?: string;
  aspect: "portrait" | "square";
};

const CDN = "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media";

export const videos: VideoItem[] = [
  {
    id: "edgar",
    name: "Edgar",
    role: "High-ticket sales client",
    result: "Client results walkthrough",
    src: `${CDN}/69624f63f8a93b76e0751a55.mp4`,
    poster: "/media/reviews/poster-edgar.png",
    aspect: "portrait",
  },
  {
    id: "ibam",
    name: "Ibam",
    role: "Agency operator",
    result: "System case study",
    src: `${CDN}/69624f62f8a93b0480751a4e.mp4`,
    poster: "/media/reviews/poster-ibam.png",
    aspect: "portrait",
  },
  {
    id: "edgar-2",
    name: "Edgar",
    role: "High-ticket sales client",
    result: "What changed once ads were live",
    src: `${CDN}/6978f116d560857126a4804c.mp4`,
    poster: "/media/reviews/poster-edgar-2.png",
    aspect: "portrait",
  },
];
