import type { Metadata } from "next";

// /portfolio 301s to /media-library (redirects.json). This keeps the old page out of search if it is ever served.
export const metadata: Metadata = {
  title: "Video Ad Portfolio | Scale With Ads",
  description: "Our video ad portfolio has moved to the media library, with short-form ads, UGC creatives and VSLs produced for client campaigns.",
  alternates: { canonical: "/media-library" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
