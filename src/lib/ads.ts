export type AdVideo = {
  id: string;
  name: string;
  label: string;
  src: string;
  poster?: string;
  aspect: "portrait" | "square" | "landscape";
};

const SHORT_BASE = "/media/library/million-dollar-media/shorts";
const AD_BASE = "/media/library/million-dollar-media/ad-videos";

const SHORT_META: Array<{ id: string; name: string; label: string }> = [
  { id: "rsjB72V2a5Y", name: "Solar UGC", label: "Solar" },
  { id: "ZhgiZAqdObo", name: "Solar UGC", label: "Solar" },
  { id: "UtLbkt5TGzc", name: "MVA UGC", label: "MVA" },
  { id: "TJ1TMtHPKfg", name: "MVA UGC", label: "MVA" },
  { id: "SoKhpXcN7T0", name: "HVAC UGC", label: "HVAC" },
  { id: "PD3_hIqVECA", name: "HVAC UGC", label: "HVAC" },
  { id: "kfuStxI_Jk4", name: "HVAC UGC", label: "HVAC" },
  { id: "RX6OZBh1QDg", name: "HVAC UGC", label: "HVAC" },
  { id: "9I2mFbTPoAU", name: "Client Testimonial", label: "Testimonial" },
  { id: "jYIAsu2OtQI", name: "Original Ad", label: "Original" },
  { id: "1UFdeUy2GtY", name: "Coaching Ads", label: "Coaching" },
  { id: "Bd4TENqCVWU", name: "Pediatrician Coach", label: "Coaching" },
  { id: "foyuBZ6QcgQ", name: "Two Comma Coach", label: "Coaching" },
  { id: "3gGNRYoJ3tU", name: "Webinar Ads", label: "Coaching" },
  { id: "6J0eZ_2f1hc", name: "Ad Messaging", label: "Coaching" },
  { id: "4GkyPDvr2Fo", name: "High-Ticket Ads", label: "Coaching" },
];

export const adShorts: AdVideo[] = SHORT_META.map((s) => ({
  id: `short-${s.id}`,
  name: s.name,
  label: s.label,
  src: `${SHORT_BASE}/${s.id}.mp4`,
  poster: `${SHORT_BASE}/${s.id}.jpg`,
  aspect: "portrait" as const,
}));

const FULL_META: Array<{ id: string; name: string; label: string }> = [
  { id: "mxKXQZ2SkCE", name: "Sarah Grace VSL", label: "Client VSL" },
  { id: "Hy2k31Mfxks", name: "Seven Figure Studio", label: "Brand" },
];

export const fullAdVideos: AdVideo[] = FULL_META.map((s) => ({
  id: `ad-${s.id}`,
  name: s.name,
  label: s.label,
  src: `${AD_BASE}/${s.id}.mp4`,
  poster: `${AD_BASE}/${s.id}.jpg`,
  aspect: "landscape" as const,
}));

export const allAdVideos: AdVideo[] = [...adShorts, ...fullAdVideos];
