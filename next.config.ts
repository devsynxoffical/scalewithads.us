import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old slug of the MVA Lead Generation page; keeps shared links working.
      { source: "/snipermethod", destination: "/mvaleadgeneration", permanent: true },
      // /medialibrary renders the same page; keep one indexable URL.
      { source: "/portfolio", destination: "/medialibrary", permanent: true },
      // /metads page removed; it was indexed, so send visitors and search engines to services.
      { source: "/metads", destination: "/services", permanent: true },
      // Old WordPress-era URLs; /book still receives search clicks.
      { source: "/book", destination: "/contact", permanent: true },
      { source: "/book-a-call", destination: "/contact", permanent: true },
      { source: "/booking", destination: "/contact", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/case-studies", destination: "/work", permanent: true },
      { source: "/testimonials", destination: "/work", permanent: true },
      { source: "/results", destination: "/work", permanent: true },
      { source: "/home", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Never cache HTML at the CDN: after a redeploy the cached page
        // references chunks that no longer exist and renders a blank screen.
        source: "/:path*",
        headers: [{ key: "Cache-Control", value: "no-cache, must-revalidate" }],
      },
      {
        source: "/media/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },
};

export default nextConfig;
