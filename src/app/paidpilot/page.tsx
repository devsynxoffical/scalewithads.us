import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { ResultsSection } from "@/components/redesign/ResultsSection";
import { SelectedWorkShowcase } from "@/components/redesign/SelectedWorkShowcase";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { Crown, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, TrendingUp, BarChart2, Star, AlertTriangle, Play, Zap, RefreshCw, Lock, Award, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Paid Pilot Trial | 8-Figure Operator Circle | ScaleWithAds",
  description: "90-Day Guaranteed Paid Pilot Trial for agency owners, coaches, and high-ticket service founders.",
};

export default function PaidPilotPage() {
  const stats = [
    { value: "$50M+", label: "Meta Ads Spent" },
    { value: "12 YRS", label: "Experience" },
    { value: "30+", label: "Niches" },
  ];



  const comparisonRows = [
    {
      feature: "Long-Term Commitment",
      traditional: "Monthly retainer from Day 1",
      scalewithads: "Start with just 7 days",
    },
    {
      feature: "Proof Before Commitment",
      traditional: "Pay first, see results later",
      scalewithads: "Experience our process before committing further",
    },
    {
      feature: "Market Segmentation",
      traditional: "Generic targeting",
      scalewithads: "Dedicated market & audience segmentation",
    },
    {
      feature: "Ad Strategy",
      traditional: "One-size-fits-all approach",
      scalewithads: "Strategy built around your offer & market",
    },
    {
      feature: "Creative Testing",
      traditional: "Limited creative testing",
      scalewithads: "5–10 creatives included",
    },
    {
      feature: "Ad Copy",
      traditional: "Standard ad copy",
      scalewithads: "Multiple angles & messaging tested",
    },
    {
      feature: "Optimization",
      traditional: "Periodic optimization",
      scalewithads: "Active monitoring & optimization throughout the pilot",
    },
    {
      feature: "Scaling",
      traditional: "Scale based on assumptions",
      scalewithads: "Scale what actually proves to work",
    },
    {
      feature: "Decision After 7 Days",
      traditional: "Locked into a monthly contract",
      scalewithads: "You decide whether to continue for the remaining 3 weeks",
    },
    {
      feature: "Risk",
      traditional: "Commit before seeing momentum",
      scalewithads: "Reduce your risk by proving the process first",
    },
  ];

  const onboardingSteps = [
    {
      step: "01",
      title: "Get Everything Ready",
      desc: "We prioritize your offer, market, audience, and campaign strategy so everything is aligned before launch.",
    },
    {
      step: "02",
      title: "Build & Approve",
      desc: "We create your ad copy, marketing materials, and 5–10 creatives, then get everything approved and ready to go.",
    },
    {
      step: "03",
      title: "Launch Within 3-5 Business Days",
      desc: "Once everything is approved, we launch your campaigns and begin testing, tracking, and optimizing for momentum.",
    },
  ];

  const faqs = [
    {
      q: "How quickly will my ads go live?",
      a: "We aim to launch your campaigns within 5 business days, provided all required information, assets, and approvals are received on time.",
    },
    {
      q: "What’s included in the 7-Day Paid Pilot?",
      a: "The pilot includes market segmentation, ad strategy, copy creation, 5–10 creatives, campaign setup, testing, monitoring, and optimization for 7 days.",
    },
    {
      q: "What happens after the 7-day pilot?",
      a: "You review the results and momentum from the pilot. If you’re happy with the direction, you can continue with us for the remaining 3 weeks of the month.",
    },
    {
      q: "Is the 7-Day Paid Pilot refundable?",
      a: "No. All pilot payments are non-refundable once the program has been purchased and work has commenced.",
    },
    {
      q: "Do I need to commit to a monthly retainer?",
      a: "No. The 7-Day Paid Pilot is designed to let you experience our process and see campaign momentum before deciding whether you want to continue.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <FloatingNavbar />

      {/* Hero Header Section */}
      <section className="pt-28 sm:pt-36 pb-8 sm:pb-10 px-4 md:px-8 bg-white text-stone-900 overflow-hidden relative">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-purple-200/40 via-purple-100/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/90 border border-purple-300 text-purple-900 font-extrabold text-xs tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <Crown className="w-4 h-4 text-purple-700" />
            <span>PAID PILOT TRIAL</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-stone-950 uppercase font-hero leading-tight select-none">
            Start With a <span className="animate-purple-gradient font-hero tracking-tight">7-Day Paid Pilot</span> <br className="hidden sm:inline" />
            & See the Results Before You Commit
          </h1>

          {/* Subtext */}
          <p className="mt-5 text-base sm:text-lg font-medium text-stone-700 max-w-2xl mx-auto leading-relaxed font-sans">
            Experience our full ad management, creative testing, and optimization for 7 days. See the momentum for yourself, then decide whether you want to continue.
          </p>

          {/* Stats Grid (3 Premium Cards) */}
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {stats.map((s, idx) => (
              <div key={idx} className="rounded-2xl border-2 border-stone-950 bg-stone-50/80 p-5 text-center shadow-md hover:border-purple-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <p className="text-3xl sm:text-4xl font-black text-purple-700 font-mono tracking-tight">{s.value}</p>
                <p className="mt-1.5 text-[11px] font-extrabold uppercase tracking-wider text-stone-600 font-mono">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mastermind VSL Video Player Section (Moved Up) */}
      <section className="pt-4 sm:pt-6 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center">
        {/* Direct VSL Video Frame (No Poster Cover Image) */}
        <div className="relative rounded-3xl overflow-hidden border-4 border-stone-950 shadow-[0_25px_70px_rgba(147,51,234,0.3)] bg-black aspect-video">
          <video
            src="https://assets.cdn.filesafe.space/W8B8H8FvOolLCrvxXzYp/media/69ef9443717d5dd4e170f445.mp4"
            controls
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Big BOOK YOUR CALL Button Below VSL */}
        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-12 py-5 sm:px-16 sm:py-6 text-xl sm:text-2xl font-black rounded-full bg-stone-950 hover:bg-purple-700 text-white shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-purple-500/40 inline-flex items-center justify-center gap-3 tracking-wider uppercase"
          >
            <span>BOOK YOUR CALL</span>
            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </Link>
          <span className="mt-3.5 text-xs font-mono font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% Free Strategy Session • Limited Weekly Spots</span>
          </span>
        </div>
      </section>

      {/* Side-by-Side Comparison Matrix */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-stone-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>TRADITIONAL AGENCY VS SCALEWITHADS</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight mt-4 uppercase leading-tight">
            Why Our Paid Pilot Outperforms <br />
            <span className="animate-purple-gradient font-hero tracking-tight">TRADITIONAL AGENCIES</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl border-2 border-stone-950 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-stone-950 text-white p-6 font-hero text-xs sm:text-sm uppercase tracking-wider font-black border-b-2 border-stone-950">
            <div className="hidden md:block font-mono text-stone-400">DELIVERABLE / PROTOCOL</div>
            <div className="text-rose-400 font-mono flex items-center gap-2">✕ TRADITIONAL AGENCIES</div>
            <div className="text-emerald-400 font-mono flex items-center gap-2">✓ SCALEWITHADS PAID PILOT</div>
          </div>

          <div className="divide-y-2 divide-stone-100">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4 text-sm font-medium items-center">
                <div className="font-black text-stone-950 font-hero text-sm sm:text-base flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 border border-purple-200">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span>{row.feature}</span>
                </div>
                <div className="text-stone-900 bg-rose-50/80 p-4 rounded-2xl border border-rose-200 text-xs sm:text-sm font-sans font-bold flex items-start gap-2.5 leading-relaxed">
                  <span className="text-rose-600 font-black shrink-0">✕</span>
                  <span>{row.traditional}</span>
                </div>
                <div className="text-stone-950 bg-emerald-50 p-4 rounded-2xl border-2 border-emerald-300 text-xs sm:text-sm font-sans font-extrabold flex items-start gap-2.5 shadow-sm leading-relaxed">
                  <span className="text-emerald-600 font-black shrink-0">✓</span>
                  <span>{row.scalewithads}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Onboarding Process */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-stone-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full">
            HOW THE PAID PILOT WORKS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight mt-4">
            Your 3-Step Launch Plan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {onboardingSteps.map((s, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border-2 border-stone-950 shadow-xl flex flex-col justify-between">
              <div>
                <span className="w-12 h-12 rounded-2xl bg-purple-700 text-white font-mono font-black text-lg flex items-center justify-center mb-6">
                  {s.step}
                </span>
                <h3 className="text-xl font-black text-stone-950 font-hero mb-3">
                  {s.title}
                </h3>
                <p className="text-stone-600 text-sm font-medium leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-mono font-bold text-purple-700">
                <ShieldCheck className="w-4 h-4" />
                <span>Written Milestone Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Proven Track Record Section */}
      <ResultsSection />

      {/* System Training Library Section (Home Page Component) */}
      <SelectedWorkShowcase />

      {/* Verified Client Video Testimonials Section */}
      <ClientTestimonialsSection />

      {/* Frequently Asked Questions Accordion */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto border-t border-stone-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight mt-4 uppercase leading-tight">
            Everything You Need to <span className="animate-purple-gradient font-hero tracking-tight">KNOW</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border-2 border-stone-950 shadow-xl hover:border-purple-600 transition-colors">
              <h3 className="text-xl font-black text-stone-950 font-hero tracking-tight flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-purple-700 shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-stone-600 text-base font-medium leading-relaxed font-sans pl-8">
                {faq.a}
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
