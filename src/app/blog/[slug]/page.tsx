import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, CheckCircle2, ChevronDown, Clock, HelpCircle, ListOrdered, RefreshCw, Sparkles, User } from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { RichText } from "@/components/seo/RichText";
import { PostCover } from "@/components/blog/PostCover";
import { PreferredSourceButton } from "@/components/seo/PreferredSourceButton";
import { BLOG_AUTHOR, POSTS, getPost, readingMinutes, type Block } from "@/lib/blog";
import { OG_IMAGE, SITE_NAME, SITE_URL, breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const base = pageMeta({ title: post.metaTitle, description: post.description, path: `/blog/${post.slug}` });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [BLOG_AUTHOR],
    },
  };
}

/** Anchor id for a section heading. */
const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const isTakeaways = (b: Block) => b.type === "h2" && /takeaway/i.test(b.text);

function BlockView({ block, prev }: { block: Block; prev?: Block }) {
  switch (block.type) {
    case "h2":
      if (isTakeaways(block)) return null; // rendered as part of the takeaways box
      return (
        <h2 id={slugify(block.text)} className="scroll-mt-32 mt-14 first:mt-0 text-2xl sm:text-[32px] font-black text-stone-950 tracking-tight leading-tight font-hero">
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="mt-9 text-xl font-black text-stone-950 tracking-tight">{block.text}</h3>;
    case "p":
      return (
        <p className="mt-5 text-stone-700 text-[17px] sm:text-lg leading-[1.8]">
          <RichText text={block.text} />
        </p>
      );
    case "ul":
    case "ol": {
      // A list that follows a "Key takeaways" heading becomes a highlighted summary box.
      if (prev && isTakeaways(prev)) {
        return (
          <section aria-labelledby="key-takeaways" className="mt-14 rounded-3xl border-2 border-stone-950 bg-stone-950 text-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(147,51,234,0.25)]">
            <h2 id="key-takeaways" className="scroll-mt-32 flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest text-purple-300">
              <Sparkles className="w-4 h-4" /> Key takeaways
            </h2>
            <ul className="mt-5 space-y-3">
              {block.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-stone-100 text-[16px] sm:text-lg leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-purple-400" />
                  <span><RichText text={item} /></span>
                </li>
              ))}
            </ul>
          </section>
        );
      }
      if (block.type === "ol") {
        return (
          <ol className="mt-6 space-y-3">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-4 sm:p-5 text-stone-700 text-[16px] sm:text-[17px] leading-relaxed">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-purple-100 border border-purple-200 font-mono text-sm font-black text-purple-700">
                  {i + 1}
                </span>
                <span className="pt-0.5"><RichText text={item} /></span>
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-stone-700 text-[17px] sm:text-lg leading-relaxed">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-purple-600" />
              <span><RichText text={item} /></span>
            </li>
          ))}
        </ul>
      );
    }
    case "callout":
      return (
        <aside className="mt-8 rounded-2xl border-2 border-purple-200 border-l-[6px] border-l-purple-600 bg-purple-50 p-5 sm:p-6">
          <p className="text-sm font-black uppercase tracking-wider text-purple-900">{block.title}</p>
          <p className="mt-2 text-stone-700 text-[16px] leading-relaxed">
            <RichText text={block.text} />
          </p>
        </aside>
      );
  }
}

function TocList({ toc }: { toc: { text: string; id: string }[] }) {
  return (
    <ol className="space-y-1">
      {toc.map((t, i) => (
        <li key={t.id}>
          <a href={`#${t.id}`} className="flex gap-2.5 rounded-lg px-2 py-1.5 text-sm font-semibold text-stone-600 hover:bg-purple-50 hover:text-purple-800 transition-colors">
            <span className="font-mono text-[11px] font-black text-purple-600 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
            <span>{t.text}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const fmt = (d: string) =>
    new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  const date = fmt(post.datePublished);
  const updated = post.dateModified !== post.datePublished ? fmt(post.dateModified) : null;
  const toc = post.body
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ text: b.text, id: isTakeaways(b) ? "key-takeaways" : slugify(b.text) }));
  if (post.faqs.length) toc.push({ text: "Frequently asked questions", id: "faq" });
  const others = POSTS.filter((p) => p.slug !== post.slug);


  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          inLanguage: "en-US",
          mainEntityOfPage: url,
          url,
          image: `${SITE_URL}${OG_IMAGE}`,
          keywords: post.primaryKeyword,
          articleSection: post.category,
          author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          publisher: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      {post.faqs.length > 0 && <JsonLd data={faqJsonLd(post.faqs)} />}
      <JsonLd data={breadcrumbJsonLd([["Blog", "/blog"], [post.title, `/blog/${post.slug}`]])} />
      <FloatingNavbar />

      <article>
        {/* Header */}
        <header className="relative overflow-hidden pt-32 sm:pt-40 pb-14 px-4 md:px-8 bg-white border-b border-stone-200">
          <div className="pointer-events-none absolute -top-10 right-0 w-[700px] h-[480px] bg-gradient-to-bl from-purple-200/50 via-fuchsia-100/25 to-transparent rounded-full blur-3xl" />
          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr_340px] gap-10 items-center">
            <div>
              <nav aria-label="Breadcrumb" className="text-xs font-bold text-stone-500">
                <Link href="/" className="hover:text-purple-700">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/blog" className="hover:text-purple-700">Blog</Link>
                <span className="mx-2">/</span>
                <span className="text-stone-400">{post.category}</span>
              </nav>
              <span className="mt-6 inline-flex text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full">
                {post.category}
              </span>
              <h1 className="mt-5 text-3xl sm:text-5xl lg:text-[54px] font-black text-stone-950 tracking-tight leading-[1.08] font-hero">{post.title}</h1>
              <p className="mt-5 text-stone-600 text-lg sm:text-xl font-medium leading-relaxed max-w-3xl">{post.description}</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-500 font-semibold">
                <span className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-950 text-white"><User className="w-4 h-4" /></span>
                  {BLOG_AUTHOR}
                </span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /><time dateTime={post.datePublished}>{date}</time></span>
                {updated && (
                  <span className="flex items-center gap-1.5"><RefreshCw className="w-4 h-4" />Updated <time dateTime={post.dateModified}>{updated}</time></span>
                )}
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{readingMinutes(post)} min read</span>
              </div>
            </div>
            <div className="hidden lg:block overflow-hidden rounded-3xl border-2 border-stone-950 shadow-[0_25px_60px_rgba(147,51,234,0.25)] rotate-2">
              <PostCover category={post.category} size="lg" />
            </div>
          </div>
        </header>

        {/* Body + sidebar */}
        <div className="px-4 md:px-8 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_300px] gap-12 xl:gap-16">
            <div className="min-w-0">
              {/* Mobile table of contents */}
              <details className="lg:hidden mb-10 rounded-2xl border-2 border-stone-950 bg-white p-4 open:shadow-lg">
                <summary className="flex cursor-pointer items-center gap-2 font-black text-sm uppercase tracking-wider text-stone-950">
                  <ListOrdered className="w-4 h-4 text-purple-700" /> In this guide
                </summary>
                <div className="mt-3"><TocList toc={toc} /></div>
              </details>

              <div className="max-w-[720px]">
                {post.body.map((b, i) => (
                  <BlockView key={i} block={b} prev={post.body[i - 1]} />
                ))}

                {/* FAQ */}
                {post.faqs.length > 0 && (
                  <section aria-labelledby="faq" className="mt-16">
                    <h2 id="faq" className="scroll-mt-32 flex items-center gap-3 text-2xl sm:text-[32px] font-black text-stone-950 tracking-tight leading-tight font-hero">
                      <HelpCircle className="w-7 h-7 text-purple-600 shrink-0" /> Frequently asked questions
                    </h2>
                    <div className="mt-6 space-y-3">
                      {post.faqs.map((f, i) => (
                        <details key={f.q} open={i === 0} className="group rounded-2xl border-2 border-stone-200 bg-white open:border-purple-300 open:shadow-[0_12px_30px_rgba(147,51,234,0.10)] transition-colors">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-black text-stone-950 text-[16px] sm:text-[17px] [&::-webkit-details-marker]:hidden">
                            {f.q}
                            <ChevronDown className="w-5 h-5 shrink-0 text-purple-600 transition-transform group-open:rotate-180" />
                          </summary>
                          <p className="px-5 pb-5 -mt-1 text-stone-700 text-[16px] leading-relaxed">{f.a}</p>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

                {/* Follow on Google */}
                <div className="mt-14 rounded-3xl border-2 border-stone-200 bg-white p-6 text-center">
                  <p className="font-black text-stone-950">Found this useful?</p>
                  <p className="mt-1 text-sm text-stone-600">Add us as a preferred source on Google to see more of our guides in your search results.</p>
                  <PreferredSourceButton className="mt-4" />
                </div>

                {/* Author box */}
                <div className="mt-14 flex gap-4 rounded-3xl border-2 border-stone-200 bg-white p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-stone-950 text-white"><User className="w-5 h-5" /></span>
                  <div>
                    <p className="font-black text-stone-950">Written by the {BLOG_AUTHOR}</p>
                    <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                      Our team builds and runs done-for-you Meta Ads, creatives, funnels and follow-up systems for $10K+/month businesses.{" "}
                      <Link href="/about" className="font-bold text-purple-700 underline underline-offset-4">Meet the team</Link>.
                    </p>
                  </div>
                </div>

                {/* Conversion block */}
                <div className="relative mt-8 overflow-hidden rounded-3xl border-2 border-stone-950 bg-gradient-to-br from-purple-700 to-stone-950 p-7 sm:p-9 text-white shadow-[0_25px_60px_rgba(147,51,234,0.3)]">
                  <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-fuchsia-400/30 blur-3xl" />
                  <p className="relative font-mono text-xs font-black uppercase tracking-widest text-purple-200">Want this done for you?</p>
                  <p className="relative mt-3 text-2xl sm:text-3xl font-black tracking-tight leading-tight font-hero">
                    We build and run the whole system: Meta Ads, creatives, funnels and follow-up.
                  </p>
                  <div className="relative mt-7 flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-stone-950 hover:bg-purple-100 font-black text-sm uppercase tracking-wider transition-colors">
                      Book a free strategy call <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href={post.related.href} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-white/60 hover:bg-white/10 text-white font-black text-sm uppercase tracking-wider transition-colors">
                      {post.related.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-6">
                <div className="rounded-3xl border-2 border-stone-950 bg-white p-5 shadow-lg">
                  <p className="flex items-center gap-2 px-2 pb-3 font-mono text-[11px] font-black uppercase tracking-widest text-stone-500 border-b border-stone-100">
                    <ListOrdered className="w-4 h-4 text-purple-700" /> In this guide
                  </p>
                  <div className="mt-3"><TocList toc={toc} /></div>
                </div>
                <Link href={post.related.href} className="group block rounded-3xl border-2 border-purple-200 bg-purple-50 p-5 hover:border-purple-500 transition-colors">
                  <p className="font-mono text-[11px] font-black uppercase tracking-widest text-purple-700">Related</p>
                  <p className="mt-1.5 font-black text-stone-950 leading-snug group-hover:text-purple-700 transition-colors">{post.related.label}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-purple-700">
                    Open <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <div className="rounded-3xl border-2 border-stone-950 bg-stone-950 p-6 text-white">
                  <p className="font-mono text-[11px] font-black uppercase tracking-widest text-purple-300">Free strategy call</p>
                  <p className="mt-2 text-lg font-black leading-snug">Get a 90-day Meta Ads plan for your business.</p>
                  <Link href="/contact" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 hover:bg-purple-500 px-5 py-3 text-xs font-black uppercase tracking-wider transition-colors">
                    Book a call <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="px-4 md:px-8 pb-24 border-t border-stone-200 pt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight uppercase font-hero">
            Keep <span className="animate-purple-gradient font-hero">reading</span>
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex overflow-hidden rounded-3xl border-2 border-stone-950 bg-white shadow-lg hover:-translate-y-1 hover:border-purple-600 hover:shadow-[0_20px_45px_rgba(147,51,234,0.18)] transition-all duration-300"
              >
                <div className="w-32 sm:w-40 shrink-0 border-r-2 border-stone-950">
                  <PostCover category={p.category} size="sm" />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <span className="text-[11px] font-black uppercase tracking-wider text-purple-700">{p.category}</span>
                  <span className="mt-1.5 font-black text-stone-950 leading-snug group-hover:text-purple-700 transition-colors">{p.title}</span>
                  <span className="mt-2 text-xs font-bold text-stone-500">{readingMinutes(p)} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EditorialFooter />
    </main>
  );
}
