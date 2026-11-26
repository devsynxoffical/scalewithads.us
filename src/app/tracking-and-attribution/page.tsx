import type { Metadata } from "next";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { MarqueeTicker } from "@/components/redesign/MarqueeTicker";
import { CreativeCtaSection } from "@/components/redesign/CreativeCtaSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/redesign/FaqSection";
import { AnswerBlock } from "@/components/leads/LegalBlocks";

import { ArrowRight, BarChart3, ShieldCheck, Zap, Layers, Sparkles, Database } from "lucide-react";

export const metadata: Metadata = pageMeta({
  title: "Meta Ads Tracking and Attribution | Scale With Ads",
  description:
    "Meta ads tracking and attribution: Pixel and Conversions API setup, live dashboards, CRM automation and lead tracking that show what your ads really earn.",
  path: "/tracking-and-attribution",
});

const TRACKING_FAQS = [
  { q: "What is the Meta Conversions API?", a: "The Conversions API (CAPI) sends conversion events from your server or CRM directly to Meta, alongside the browser Pixel. It helps Meta see conversions that the Pixel alone can miss, such as leads that become clients later." },
  { q: "Do I need both the Meta Pixel and the Conversions API?", a: "Most advertisers run both. The Pixel records actions in the browser, and the Conversions API sends events from your server or CRM. Events are deduplicated so each conversion is only counted once." },
  { q: "Why track leads all the way to a sale or signed case?", a: "Cost per lead hides lead quality. When you send qualified lead, appointment and sale events back to Meta, you can see what each customer really costs, and the algorithm can optimize toward people who actually convert." },
  { q: "What should a Meta ads dashboard show?", a: "Spend, leads, cost per lead, qualified leads, appointments and sales or signed cases, by campaign and ad, so budget decisions are based on revenue instead of clicks." },
  { q: "Who owns the tracking setup and data?", a: "You do. Tracking runs in your own ad account, Pixel and CRM, and stays with your business if we stop working together." },
];

export default function FeaturesPage() {
  const features = [
    {
      title: "Real-Time ROAS Dashboard",
      desc: "Live multi-channel dashboard tracking spend, revenue, customer acquisition cost, and return on ad spend in real-time.",
      icon: BarChart3,
    },
    {
      title: "Pixel-Perfect CAPI Attribution",
      desc: "Bypass iOS tracking limitations with first-party server-side conversion tracking that feeds clean data back to ad algorithms.",
      icon: Database,
    },
    {
      title: "30+ Hooks Creative Engine",
      desc: "Continuous creative testing pipeline delivering VSL scripts, UGC creator videos, and high-converting image carousels.",
      icon: Layers,
    },
    {
      title: "Automated Spend Safeguards",
      desc: "Rule-based triggers that automatically scale winning ad sets and pause underperforming creatives before burning budget.",
      icon: ShieldCheck,
    },
    {
      title: "Omnichannel Bid Strategy",
      desc: "Synchronized bidding across Meta, TikTok, Google Search, and YouTube PMax for maximum brand reach and high intent sales.",
      icon: Zap,
    },
    {
      title: "24/7 Slack & Client Portal",
      desc: "Direct communication line with your dedicated media buying team and weekly recorded video breakdown walkthroughs.",
      icon: Sparkles,
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans">
      <JsonLd data={faqJsonLd(TRACKING_FAQS)} />
      <FloatingNavbar />
      
      {/* Features Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full">
            Proprietary OS Features
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 tracking-tight mt-6 leading-tight uppercase font-hero">
            SCALEWITHADS OS FEATURES
          </h1>
          <p className="mt-4 text-stone-600 font-medium text-lg sm:text-xl max-w-2xl mx-auto">
            Everything your brand needs to turn paid advertising into a predictable, high-margin growth engine.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 md:px-8 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border-2 border-stone-900 shadow-xl flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-300 text-purple-900 flex items-center justify-center font-black flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-stone-950 mb-2">{feat.title}</h3>
                  <p className="text-stone-600 text-sm font-medium leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <MarqueeTicker />
      <CreativeCtaSection />
      <AnswerBlock
        question="What is Meta ads tracking and attribution?"
        answer="Meta ads tracking and attribution is how you connect every ad to the leads, appointments and sales it produces. It combines the Meta Pixel, the Conversions API and your CRM, so you can see real cost per customer by campaign and ad, and Meta can optimize toward the people who actually buy."
      />
      <FaqSection faqs={TRACKING_FAQS} eyebrow="Tracking and attribution FAQ" title={<>Questions about <span className="font-serif italic animate-purple-gradient">tracking.</span></>} />
      <EditorialFooter />
    </main>
  );
}
