import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { MarqueeTicker } from "@/components/redesign/MarqueeTicker";
import { CreativeCtaSection } from "@/components/redesign/CreativeCtaSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, Zap, Layers, Sparkles, Database } from "lucide-react";

export const metadata = {
  title: "Features & OS | ScaleWithAds",
  description: "Discover the proprietary ScaleWithAds OS features, live dashboard tracking, and attribution tools.",
};

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
      <EditorialFooter />
    </main>
  );
}
