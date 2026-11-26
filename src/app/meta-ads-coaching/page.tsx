import type { Metadata } from "next";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { Users, ArrowRight, Play, AlertTriangle, Target, Clapperboard, Crosshair, LineChart, Gauge, MessagesSquare } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/redesign/FaqSection";
import { AnswerBlock } from "@/components/leads/LegalBlocks";


export const metadata: Metadata = pageMeta({
  title: "1-on-1 Meta Ads Coaching | Scale With Ads",
  description:
    "Work directly with our team on your Meta Ads: offer, creatives, targeting and scaling, for businesses spending to grow. Watch the overview, then book a call.",
  path: "/meta-ads-coaching",
});

const COACHING_FAQS = [
  { q: "What is 1-on-1 Meta ads coaching?", a: "It is direct coaching on your own Facebook and Instagram ad account. You run the ads, and we review your offer, creatives, targeting, tracking and scaling with you and tell you what to change." },
  { q: "Is coaching different from the mastermind?", a: "Yes. Coaching is one-to-one and built around your account. The AI Client Acquisition Mastermind is a 6-week program with 12 live classes applied to your own campaigns." },
  { q: "Do you run the ads for me in coaching?", a: "No. In coaching you keep control and run the ads yourself. If you want the ads built and run for you, see our done-for-you services instead." },
  { q: "Which industries does coaching cover?", a: "Any industry that runs Meta ads. The principles of offer, creative, targeting, tracking and scaling are the same; we apply them to your market on the call." },
  { q: "How do I start?", a: "Book a coaching call. We look at your account and goals on the call and agree what the coaching should cover." },
];

export default function GrowthCoachingPage() {
  const stats = [
    { value: "$50M+", label: "Meta Ads Spent" },
    { value: "12 YRS", label: "Experience" },
    { value: "1-ON-1", label: "Direct access" },
    { value: "ALL", label: "Industries" },
  ];

  const learnItems = [
    { icon: Target, title: "Offer and angle", text: "Shape the offer and the message so the right buyers stop scrolling." },
    { icon: Clapperboard, title: "Creatives and hooks", text: "Script and review ads with us, and learn how to test new hooks every week." },
    { icon: Crosshair, title: "Targeting", text: "Find audiences your competitors are not bidding on, step by step." },
    { icon: LineChart, title: "Scaling", text: "When to raise budgets, when to cut ads, and how to scale without losing results." },
    { icon: Gauge, title: "Tracking", text: "Set up the pixel, Conversions API and reporting so you know what each sale costs." },
    { icon: MessagesSquare, title: "Live reviews", text: "Bring your ad account to the call and get direct feedback on what to change." },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd data={faqJsonLd(COACHING_FAQS)} />
      <FloatingNavbar />

      {/* Top Warning Banner */}
      <div className="pt-28 sm:pt-24 bg-stone-950 text-purple-200 text-xs font-mono py-2.5 px-4 overflow-hidden border-b border-stone-800 select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          <span className="flex items-center gap-2 text-amber-300 font-bold">
            <AlertTriangle className="w-3.5 h-3.5" />
            ⚠️ THIS IS ONLY FOR AGENCY OWNERS, COACHES, HIGH-TICKET SERVICE PROVIDERS & B2B FOUNDERS ALREADY GENERATING $10,000+/MONTH.
          </span>
          <span className="text-emerald-400 font-bold">
            ⚡ CLICK TO BOOK YOUR FREE STRATEGY CALL. LIMITED SPOTS AVAILABLE.
          </span>
        </div>
      </div>

      {/* Hero Header (Homepage Light Theme) */}
      <section className="pt-16 pb-20 px-4 md:px-8 bg-white text-stone-900 border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6">
            <Users className="w-4 h-4 text-purple-700" />
            <span>1-on-1 Meta Ads Coaching</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-950 uppercase font-hero leading-[1.05] max-w-4xl mx-auto">
            1-on-1 Meta Ads coaching{" "}
            <span className="font-serif italic lowercase text-purple-700">to run ads that sell</span>{" "}
            in any industry.
          </h1>
          <p className="mt-6 text-stone-600 text-base sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed font-sans">
            Work directly with our team on your own Meta Ads: offer, creatives, targeting and scaling. You run the ads, and we show you what to change so they sell, in any industry.
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
              <span>BOOK A COACHING CALL</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-xs text-stone-500 font-mono">
              1-on-1 calls · Your own ad account · Any industry
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
            See how we run Meta Ads, then book a call to talk about your account.
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
            <span>BOOK A COACHING CALL</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* What the coaching covers */}
      <section className="py-20 px-4 md:px-8 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full">
              Inside the coaching
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight mt-5">
              What we cover in your <span className="whitespace-nowrap">1-on-1</span> calls
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learnItems.map((item, idx) => (
              <div key={item.title} className="relative p-6 rounded-3xl bg-white border-2 border-stone-950 shadow-lg text-stone-900">
                <span className="absolute right-5 top-4 font-mono text-xs font-black text-stone-300">0{idx + 1}</span>
                <span className="w-11 h-11 rounded-2xl bg-purple-700 text-white flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </span>
                <h3 className="mt-4 text-lg font-black text-stone-950">{item.title}</h3>
                <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-stone-500">
            Want us to run the ads for you instead? See{" "}
            <Link href="/lead-pilot" className="font-bold text-purple-700 underline underline-offset-4">Lead Pilot done-for-you ads</Link> or join the{" "}
            <Link href="/private-mastermind" className="font-bold text-purple-700 underline underline-offset-4">private mastermind</Link>.
          </p>
        </div>
      </section>

      <AnswerBlock
        question="What is 1-on-1 Meta ads coaching?"
        answer="One-to-one Meta ads coaching is direct, personal help on your own Facebook and Instagram ad account. You keep running the ads; we review your offer, creatives, targeting, tracking and scaling with you on live calls and tell you exactly what to change, in any industry."
      />
      <FaqSection faqs={COACHING_FAQS} eyebrow="Meta ads coaching FAQ" title={<>Questions about <span className="font-serif italic animate-purple-gradient">coaching.</span></>} />
      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
