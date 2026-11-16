import type { MetadataRoute } from "next";
import { SITE_URL, SITEMAP_ROUTES } from "@/lib/seo";
import { POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: MetadataRoute.Sitemap = SITEMAP_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...pages, ...posts];
}
