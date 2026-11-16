import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { RichText } from "@/components/seo/RichText";
import { BLOG_AUTHOR, POSTS, getPost, readingMinutes, type Block } from "@/lib/blog";
import { OG_IMAGE, SITE_NAME, SITE_URL, breadcrumbJsonLd, pageMeta } from "@/lib/seo";

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

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 text-2xl sm:text-3xl font-black text-stone-950 tracking-tight font-hero">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-8 text-xl font-black text-stone-950 tracking-tight">{block.text}</h3>;
    case "p":
      return (
        <p className="mt-5 text-stone-700 text-base sm:text-lg leading-relaxed">
          <RichText text={block.text} />
        </p>
      );
    case "ul":
    case "ol": {
      const List = block.type === "ul" ? "ul" : "ol";
      return (
        <List className={`mt-5 space-y-2.5 pl-6 text-stone-700 text-base sm:text-lg leading-relaxed ${block.type === "ul" ? "list-disc" : "list-decimal"} marker:text-purple-600 marker:font-bold`}>
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </List>
      );
    }
    case "callout":
      return (
        <aside className="mt-8 rounded-2xl border-2 border-purple-200 bg-purple-50 p-5 sm:p-6">
          <p className="text-sm font-black uppercase tracking-wider text-purple-900">{block.title}</p>
          <p className="mt-2 text-stone-700 text-base leading-relaxed">
            <RichText text={block.text} />
          </p>
        </aside>
      );
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const date = new Date(post.datePublished + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  const others = POSTS.filter((p) => p.slug !== post.slug);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans">
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
      <JsonLd data={breadcrumbJsonLd([["Blog", "/blog"], [post.title, `/blog/${post.slug}`]])} />
      <FloatingNavbar />

      <article>
        <header className="pt-32 pb-12 px-4 md:px-8 bg-white border-b border-stone-200">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-xs font-bold text-stone-500 mb-6">
              <Link href="/" className="hover:text-purple-700">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-purple-700">Blog</Link>
            </nav>
            <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="mt-6 text-3xl sm:text-5xl font-black text-stone-950 tracking-tight leading-tight font-hero">{post.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-500 font-medium">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-purple-700" />{BLOG_AUTHOR}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /><time dateTime={post.datePublished}>{date}</time></span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{readingMinutes(post)} min read</span>
            </div>
          </div>
        </header>

        <div className="px-4 md:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            {post.body.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}

            {/* Conversion block */}
            <div className="mt-14 rounded-3xl border-2 border-stone-950 bg-white p-6 sm:p-8 shadow-xl">
              <p className="text-xs font-black uppercase tracking-widest text-purple-700">Want this done for you?</p>
              <p className="mt-2 text-xl sm:text-2xl font-black text-stone-950 tracking-tight">
                We build and run the whole system: Meta Ads, creatives, funnels and follow-up.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-sm uppercase tracking-wider transition-colors">
                  Book a free strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={post.related.href} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-stone-950 bg-white hover:bg-purple-50 text-stone-950 font-black text-sm uppercase tracking-wider transition-colors">
                  {post.related.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* More articles */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-stone-950 uppercase tracking-tight">More from the blog</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {others.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border-2 border-stone-200 hover:border-purple-600 bg-white p-5 transition-colors">
                <span className="text-[11px] font-black uppercase tracking-wider text-purple-700">{p.category}</span>
                <span className="mt-2 block font-black text-stone-950 leading-snug">{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EditorialFooter />
    </main>
  );
}
