import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { Zap, ArrowRight, ShieldCheck, Play, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Lead Pilot DFY Ads | 1-on-1 Growth Coaching | ScaleWithAds",
  description: "Done-for-you Meta ads across all industries. $10K minimum. We double your revenue in 90 days, written in the agreement.",
};

export default function GrowthCoachingPage() {
  const stats = [
    { value: "$50M+", label: "Meta Ads Spent" },
    { value: "12 YRS", label: "Experience" },
    { value: "$10K+", label: "Minimum" },
    { value: "90 DAYS", label: "Revenue Target" },
  ];

  const learnItems = [
    "Ads built to sell, not vanity traffic across countless verticals",
    "We write, target, and manage Meta campaigns that book revenue",
    "Proven with $50M+ Meta ads spend and 12 years in the game",
    "Same playbook used for brands, agencies, and operators worldwide",
    "$10K minimum · We double your revenue in 90 days · Everything is written in the agreement",
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <FloatingNavbar />

      {/* Top Warning Banner */}
      <div className="pt-24 bg-stone-950 text-purple-200 text-xs font-mono py-2.5 px-4 overflow-hidden border-b border-stone-800 select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          <span className="flex items-center gap-2 text-amber-300 font-bold">
            <AlertTriangle className="w-3.5 h-3.5" />
            ⚠️ THIS IS ONLY FOR AGENCY OWNERS, COACHES, HIGH-TICKET SERVICE PROVIDERS & B2B FOUNDERS ALREADY GENERATING $10,000+/MONTH.
          </span>
          <span className="text-emerald-400 font-bold">
            ⚡ CLICK TO BOOK YOUR FREE STRATEGY CALL — LIMITED SPOTS AVAILABLE.
          </span>
        </div>
      </div>

      {/* Hero Header (Homepage Light Theme) */}
      <section className="pt-16 pb-20 px-4 md:px-8 bg-white text-stone-900 border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6">
            <Zap className="w-4 h-4 text-purple-700" />
            <span>Lead Pilot · Done-For-You Ads That Sell</span>
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-stone-950 uppercase font-hero leading-tight">
            Sick of agencies that promise leads and deliver excuses?{" "}
            <span className="font-serif italic lowercase text-purple-700">We run ads that sell</span>{" "}
            across every industry.
          </h1>
          <p className="mt-6 text-stone-600 text-base sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed font-sans">
            Scale with Ads is specifically for ads, done-for-you media that sells. All industries. $10K minimum. We double your revenue in 90 days, and everything is written in the agreement.
          </p>

          {/* Stats Bar */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, idx) => (
              <div key={idx} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-purple-700 font-mono">{s.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-stone-500 font-mono">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4.5 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-sm uppercase tracking-wider transition-all shadow-xl active:scale-95"
            >
              <span>GET MY ADS SELLING THIS WEEK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-xs text-stone-500 font-mono">
              $10K minimum · double revenue in 90 days · 100% Asset Ownership · Written Agreement · No Lock-ins
            </span>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-200 px-4 py-1.5 text-xs font-mono font-bold text-purple-700 uppercase tracking-widest">
            <Play className="w-3.5 h-3.5 fill-current" />
            Watch This Video Closely
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 font-hero tracking-tight mt-3">
            Watch This Before You Book a Call
          </h2>
          <p className="mt-2 text-stone-600 text-sm font-medium">
            Understand exactly what we install, how it works, and why it doubles revenue.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border-4 border-stone-950 shadow-2xl bg-black aspect-video">
          <video
            src="https://assets.cdn.filesafe.space/W8B8H8FvOolLCrvxXzYp/media/69ef9443717d5dd4e170f445.mp4"
            poster="/media/covers/cover-leadpilot.jpg"
            controls
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-xs uppercase tracking-wider transition-colors shadow-xl"
          >
            <span>BOOK APPLICATION CALL</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* What DFY Ads Looks Like */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto border-t border-stone-200">
        <div className="text-center mb-14">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full">
            INSIDE THIS SYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight mt-3">
            What Done-For-You Ads Looks Like Here
          </h2>
        </div>

        <div className="space-y-4">
          {learnItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border-2 border-stone-950 shadow-lg flex items-start gap-4 text-stone-900"
            >
              <span className="w-10 h-10 rounded-xl bg-purple-700 text-white font-mono font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                0{idx + 1}
              </span>
              <p className="pt-1.5 text-base sm:text-lg font-extrabold font-sans text-stone-950 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
