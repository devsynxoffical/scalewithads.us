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
      // Roofing keywords belong to roofingsystems.co (keyword plan, 20 Nov 2026).
      // Each page redirects to its matching page there.
      { source: "/roofing-leads", destination: "https://www.roofingsystems.co/", permanent: true },
      { source: "/facebook-ads-for-roofing-companies", destination: "https://www.roofingsystems.co/facebook-ads-for-roofers", permanent: true },
      { source: "/case-studies/roofing-leads-3-75-cost-per-lead", destination: "https://www.roofingsystems.co/case-studies/roofing-25-leads-one-day-3-75", permanent: true },
      { source: "/case-studies/roofing-marketing-agency-664-leads", destination: "https://www.roofingsystems.co/case-studies/roofing-agency-664-leads-4-51", permanent: true },
      { source: "/case-studies/227-roofing-leads-14-cpl", destination: "https://www.roofingsystems.co/case-studies/roofing-227-leads-14-cpl-28-days", permanent: true },
      { source: "/case-studies/florida-roofing-solar-280-leads", destination: "https://www.roofingsystems.co/case-studies/florida-home-services-280-leads-15-days", permanent: true },
      { source: "/case-studies/roofing-marketing-agency-546k-revenue", destination: "https://www.roofingsystems.co/case-studies/roofing-agency-546k-67-days", permanent: true },
      { source: "/case-studies/roofing-leads-154-in-15-days", destination: "https://www.roofingsystems.co/case-studies/roofing-154-leads-14-58-cpl", permanent: true },
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
