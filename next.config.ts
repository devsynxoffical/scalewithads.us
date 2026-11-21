import type { NextConfig } from "next";
import redirectList from "./redirects.json";

/**
 * Two build targets:
 * - default (Vercel / `next start`): server build with redirects and headers below.
 * - HOSTINGER_EXPORT=1 (`npm run build:hostinger`): static HTML export for Hostinger.
 *   Redirects, headers and the lead API are then handled by .htaccess and
 *   hostinger/api/lead.php instead (see scripts/build-hostinger.mjs).
 */
const isHostingerExport = process.env.HOSTINGER_EXPORT === "1";

// Permanent redirects live in redirects.json so the Hostinger .htaccess uses the same list.
const redirects = redirectList.map((r) => ({ ...r, permanent: true }));

const nextConfig: NextConfig = isHostingerExport
  ? {
      output: "export",
      images: { unoptimized: true },
    }
  : {
      async redirects() {
        return redirects;
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
