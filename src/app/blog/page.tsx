import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { CreativeCtaSection } from "@/components/redesign/CreativeCtaSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { RelatedResources } from "@/components/seo/RelatedResources";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock, Sparkles, User } from "lucide-react";
import { BLOG_AUTHOR, POSTS, readingMinutes, type Post } from "@/lib/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { PostCover } from "@/components/blog/PostCover";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Legal Marketing and Meta Ads Blog | Scale With Ads",
  description:
    "Guides for law firms on personal injury and MVA lead costs, workers comp leads and choosing a lead provider, plus Meta ads targeting and VSL scripts.",
  path: "/blog",
});

const fmt = (d: string) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

function Meta({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500 font-medium">
      <span className="flex items-center gap-1">
        <Calendar className="w-3.5 h-3.5" />
        <time dateTime={post.datePublished}>{fmt(post.datePublished)}</time>
      </span>
      <span className="flex items-center gap-1">
        <Clock className="w-3.5 h-3.5" />
        {readingMinutes(post)} min read
      </span>
    </div>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = POSTS;
  const categories = Array.from(new Set(POSTS.map((p) => p.category)));

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd data={breadcrumbJsonLd([["Blog", "/blog"]])} />
      <FloatingNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-gradient-to-tr from-purple-200/45 via-purple-100/20 to-amber-100/15 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Growth Playbook
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 tracking-tight mt-6 leading-[1.05] uppercase font-hero">
            Meta Ads & Funnel{" "}
            <span className="font-serif italic font-normal lowercase animate-purple-gradient">strategy blog.</span>
          </h1>
          <p className="mt-5 text-stone-600 font-medium text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Practical guides on Facebook targeting, low-ticket funnels and VSL scripts, written from the campaigns our team runs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-950 text-white px-4 py-1.5 font-mono text-[11px] font-black uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-purple-300" /> {POSTS.length} in-depth guides
            </span>
            {categories.map((c) => (
              <span key={c} className="rounded-full border-2 border-stone-950 bg-white px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-stone-900">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="px-4 md:px-8 pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto">
          <p className="mb-5 font-mono text-xs font-black uppercase tracking-widest text-stone-500">Featured guide</p>
          <article className="group grid lg:grid-cols-2 overflow-hidden rounded-[28px] border-2 border-stone-950 bg-white shadow-xl hover:shadow-[0_25px_60px_rgba(147,51,234,0.22)] hover:border-purple-600 transition-all duration-300">
            <Link href={`/blog/${featured.slug}`} tabIndex={-1} className="block">
              <PostCover category={featured.category} size="lg" />
            </Link>
            <div className="p-7 sm:p-10 flex flex-col justify-center">
              <Meta post={featured} />
              <h2 className="mt-4 text-2xl sm:text-4xl font-black text-stone-950 tracking-tight leading-tight font-hero group-hover:text-purple-700 transition-colors">
                <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="mt-4 text-stone-600 text-[16px] sm:text-lg font-medium leading-relaxed">{featured.description}</p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-bold text-stone-500 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-purple-700" /> By {BLOG_AUTHOR}
                </span>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-xs uppercase tracking-wider transition-colors"
                  aria-label={`Read: ${featured.title}`}
                >
                  Read article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* All articles */}
      <section className="px-4 md:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight uppercase font-hero">
              More <span className="animate-purple-gradient font-hero">guides</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border-2 border-stone-950 bg-white shadow-lg hover:-translate-y-1.5 hover:border-purple-600 hover:shadow-[0_20px_45px_rgba(147,51,234,0.18)] transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`} tabIndex={-1} className="block border-b-2 border-stone-950">
                  <PostCover category={post.category} />
                </Link>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <Meta post={post} />
                  <h3 className="mt-3 text-xl sm:text-2xl font-black text-stone-950 tracking-tight leading-snug group-hover:text-purple-700 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-3 text-stone-600 text-sm sm:text-[16px] font-medium leading-relaxed flex-1">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-black text-purple-800 hover:text-stone-950 uppercase tracking-wider"
                    aria-label={`Read: ${post.title}`}
                  >
                    Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelatedResources
        eyebrow="Prefer it done for you?"
        title="Our done-for-you"
        accent="services"
        items={[
          {
            kind: "Service",
            title: "Personal injury lead generation",
            text: "Exclusive MVA and personal injury case inquiries from Meta Ads run for your firm.",
            href: "/personal-injury-lead-generation",
          },
          {
            kind: "Service",
            title: "Facebook ads for lawyers",
            text: "Done-for-you Meta Ads for personal injury, workers' comp and mass tort firms.",
            href: "/facebook-ads-for-lawyers",
          },
          {
            kind: "Case study",
            title: "$847K low-ticket funnel",
            text: "How one Meta Ads funnel turned $255K in ad spend into $847K at a 3.32x ROAS.",
            href: "/low-ticket-funnel-case-study",
          },
        ]}
      />

      <CreativeCtaSection />
      <EditorialFooter />
    </main>
  );
}
