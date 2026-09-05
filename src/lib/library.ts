import { adShorts, fullAdVideos } from "./ads";

export type MediaAsset = {
  id: string;
  name: string;
  src: string;
  poster?: string;
  aspect: "portrait" | "square" | "landscape";
};

export type LibraryClient = {
  slug: string;
  name: string;
  title: string;
  badge: string;
  photo: string;
  videos: MediaAsset[];
  shorts: MediaAsset[];
  logos: string[];
};

const CDN = "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media";

const excludedLogos = new Set(["09", "14"]);
const LOGOS = Array.from(
  { length: 22 },
  (_, i) => String(i + 1).padStart(2, "0")
)
  .filter((num) => !excludedLogos.has(num))
  .map((num) => `/media/library/logos/logo-${num}.png`);

export const brandLibrary: LibraryClient = {
  slug: "million-dollar-media",
  name: "Million Dollar Media",
  title: "Ads system · done-for-you media that sells",
  badge: "Brand reel",
  photo: "/media/covers/cover-leadpilot.jpg",
  videos: [
    {
      id: "mdm-untitled",
      name: "Untitled",
      src: "/media/library/million-dollar-media/videos/untitled.mp4",
      aspect: "landscape",
    },
    {
      id: "mdm-ad-x1",
      name: "Ad X1",
      src: "/media/library/million-dollar-media/videos/ad-x1.mp4",
      aspect: "landscape",
    },
    {
      id: "mdm-precision-pivot",
      name: "The Precision Pivot",
      src: "/media/library/million-dollar-media/videos/precision-pivot.mp4",
      aspect: "landscape",
    },
    ...fullAdVideos,
  ],
  shorts: adShorts,
  logos: [],
};

export const clients: LibraryClient[] = [
  {
    slug: "edgar",
    name: "Edgar",
    title: "High-ticket sales client",
    badge: "Client results walkthrough",
    photo: "/media/library/edgar/videos/poster-1.png",
    videos: [
      {
        id: "edgar-1",
        name: "Edgar",
        src: `${CDN}/69624f63f8a93b76e0751a55.mp4`,
        poster: "/media/library/edgar/videos/poster-1.png",
        aspect: "portrait",
      },
      {
        id: "edgar-2",
        name: "Edgar",
        src: `${CDN}/6978f116d560857126a4804c.mp4`,
        poster: "/media/library/edgar/videos/poster-2.png",
        aspect: "portrait",
      },
    ],
    shorts: [],
    logos: [],
  },
  {
    slug: "ibam",
    name: "Ibam",
    title: "Agency operator",
    badge: "System case study",
    photo: "/media/library/ibam/videos/poster-1.png",
    videos: [
      {
        id: "ibam-1",
        name: "Ibam",
        src: `${CDN}/69624f62f8a93b0480751a4e.mp4`,
        poster: "/media/library/ibam/videos/poster-1.png",
        aspect: "portrait",
      },
    ],
    shorts: [],
    logos: [],
  },
  {
    slug: "darrell",
    name: "Darrell Stern",
    title: "Webinar Scaling Coach",
    badge: "19K Followers",
    photo: "/media/library/darrell/photo.jpg",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "pierce",
    name: "Pierce Grimes",
    title: "7-Figure Agency Owner",
    badge: "Two Comma Club Winner",
    photo: "/media/library/pierce/photo.webp",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "officer-baker",
    name: "Officer Baker",
    title: "Hollywood Celebrity",
    badge: "1.5M Followers",
    photo: "/media/library/officer-baker/photo.jpg",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "jesse",
    name: "Jesse Rogers · Casper SMC",
    title: "Online Trading Coach",
    badge: "537K Subscribers",
    photo: "/media/library/jesse/photo.webp",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "tim-burd",
    name: "Tim Burd",
    title: "9-Figure Agency Owner",
    badge: "101K Followers",
    photo: "/media/library/tim-burd/photo.webp",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "dr-amy",
    name: "Dr. Amy",
    title: "Cancer Researcher",
    badge: "259K Subscribers",
    photo: "/media/library/dr-amy/photo.webp",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "travis",
    name: "Travis Stephenson",
    title: "9-Figure Agency Owner",
    badge: "114K Followers",
    photo: "/media/library/travis/photo.webp",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "dr-bea",
    name: "Dr. Bea Kinderaerztin",
    title: "Pediatrician",
    badge: "144K Followers",
    photo: "/media/library/dr-bea/photo.jpg",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "steven",
    name: "Steven Juergensen",
    title: "Founder @ Vedgenutrition",
    badge: "87K Followers",
    photo: "/media/library/steven/photo.jpg",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "rafael",
    name: "Rafael Cintron",
    title: "E-commerce Coach",
    badge: "55.7K Subscribers",
    photo: "/media/library/rafael/photo.jpg",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "sarah",
    name: "Sarah Grace Fitness",
    title: "NPC Figure Competitor",
    badge: "94K Followers",
    photo: "/media/library/sarah/photo.jpg",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "mark",
    name: "Mark Shay",
    title: "Agency Owner & Coach",
    badge: "29.8K Followers",
    photo: "/media/library/mark/photo.jpg",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "jared",
    name: "Jared Van Yperen",
    title: "Founder @ Vintage Muscle",
    badge: "21K Followers",
    photo: "/media/library/jared/photo.jpg",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "mahdi",
    name: "M Mahdi Syed",
    title: "Business Scaling Coach",
    badge: "Two Comma Club Winner",
    photo: "/media/library/mahdi/photo.jpg",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "aref",
    name: "Aref Jomah",
    title: "7-Figure Agency Scaling Coach",
    badge: "Two Comma Club Winner",
    photo: "/media/library/aref/photo.jpg",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "jimmy",
    name: "Jimmy Rutkowsky",
    title: "7-Figure Agency Owner",
    badge: "7.2K Followers",
    photo: "/media/library/jimmy/photo.webp",
    videos: [],
    shorts: [],
    logos: [],
  },
  {
    slug: "marie",
    name: "Marie Grace Berg",
    title: "Agency Owner",
    badge: "7K Followers",
    photo: "/media/library/marie/photo.jpg",
    videos: [],
    shorts: [],
    logos: [],
  },
];

export const logos = LOGOS;

export const allClients = [brandLibrary, ...clients];

export const videoCount = allClients.reduce(
  (sum, c) => sum + c.videos.length,
  0
);

export const shortsCount = allClients.reduce(
  (sum, c) => sum + c.shorts.length,
  0
);
