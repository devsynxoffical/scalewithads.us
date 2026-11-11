import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old slug of the MVA Lead Generation page; keeps shared links working.
      { source: "/snipermethod", destination: "/mvaleadgeneration", permanent: true },
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
