import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { CreativeCtaSection } from "@/components/redesign/CreativeCtaSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata = {
  title: "Blog & Insights | ScaleWithAds",
  description: "Read performance ad strategies, VSL frameworks, and Meta/TikTok scaling tactics from our media buyers.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "How We Scaled a DTC Apparel Brand to $380k/mo Using Advantage+ & UGC",
      excerpt: "A step-by-step breakdown of our hook testing framework, media buying structure, and CAPI setup.",
      date: "August 14, 2026",
      readTime: "6 min read",
      author: "Alex Vance",
      category: "Case Breakdown",
    },
    {
      title: "The Death of Static Image Ads: Why Short-Form VSLs Are Crushing in 2026",
      excerpt: "Why traditional ad formats are losing efficiency and how to produce high-retention video hooks that print money.",
      date: "August 08, 2026",
      readTime: "8 min read",
      author: "Sophia Chen",
      category: "Creative Strategy",
    },
    {
      title: "Fixing Server-Side Attribution: How First-Party Data Saves 30%+ Misattributed Spend",
      excerpt: "Stop relying on Meta's default reporting. Here is how to configure first-party CAPI for true ROAS clarity.",
      date: "July 29, 2026",
      readTime: "5 min read",
      author: "Marcus Thorne",
      category: "Data & Attribution",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans">
      <FloatingNavbar />
      
      {/* Blog Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full">
            Growth Playbook
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 tracking-tight mt-6 leading-tight uppercase font-hero">
            INSIGHTS & STRATEGIES
          </h1>
          <p className="mt-4 text-stone-600 font-medium text-lg sm:text-xl max-w-2xl mx-auto">
            Tactical media buying guides, ad creative breakdowns, and growth breakdowns directly from the frontlines.
          </p>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-20 px-4 md:px-8 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="bg-white p-8 rounded-3xl border-2 border-stone-900 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-purple-900 bg-purple-100 px-3 py-1 rounded-full border border-purple-300">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-stone-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight hover:text-purple-700 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="mt-3 text-stone-600 text-base font-medium leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-500 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-purple-700" />
                  By {post.author}
                </span>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-black text-purple-900 hover:text-stone-900 uppercase tracking-wider"
                >
                  <span>Read Breakdown</span>
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
