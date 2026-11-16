import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { CreativeCtaSection } from "@/components/redesign/CreativeCtaSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { BLOG_AUTHOR, POSTS, readingMinutes } from "@/lib/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Meta Ads & Funnel Strategy Blog | Scale With Ads™",
  description:
    "Practical guides on Facebook interest targeting, low-ticket funnels, VSL scripts and Meta Ads scaling, written from campaigns our team actually runs.",
  path: "/blog",
});

export default function BlogPage() {
  const fmt = (d: string) =>
    new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans">
      <JsonLd data={breadcrumbJsonLd([["Blog", "/blog"]])} />
      <FloatingNavbar />

      {/* Blog Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full">
            Growth Playbook
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 tracking-tight mt-6 leading-tight uppercase font-hero">
            Meta Ads & Funnel Strategy Blog
          </h1>
          <p className="mt-4 text-stone-600 font-medium text-lg sm:text-xl max-w-2xl mx-auto">
            Practical guides on Facebook targeting, low-ticket funnels and VSL scripts, written from the campaigns our team runs.
          </p>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-20 px-4 md:px-8 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {POSTS.map((post) => (
            <article key={post.slug} className="bg-white p-8 rounded-3xl border-2 border-stone-900 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-purple-900 bg-purple-100 px-3 py-1 rounded-full border border-purple-300">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-stone-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={post.datePublished}>{fmt(post.datePublished)}</time>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {readingMinutes(post)} min read
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight hover:text-purple-700 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 text-stone-600 text-base font-medium leading-relaxed">{post.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-500 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-purple-700" />
                  By {BLOG_AUTHOR}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-black text-purple-900 hover:text-stone-900 uppercase tracking-wider"
                  aria-label={`Read: ${post.title}`}
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CreativeCtaSection />
      <EditorialFooter />
    </main>
  );
}
