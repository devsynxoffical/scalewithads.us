import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { ResultsSection } from "@/components/redesign/ResultsSection";
import { SelectedWorkShowcase } from "@/components/redesign/SelectedWorkShowcase";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { BookOpen, ArrowRight, ShieldCheck, Download, Sparkles, CheckCircle2, AlertTriangle, Play, TrendingUp, DollarSign, Layers, Clock, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "How We Scaled an LTO Funnel to $847K | ScaleWithAds Meta LTO",
  description: "Plug-and-play Meta Ads SOPs, VSL scripts, and $847K LTO funnel scaling case study.",
};

export default function MetaLTOPage() {
  const stats = [
    { value: "$847K", label: "Client Revenue" },
    { value: "3.32x", label: "Average ROAS" },
    { value: "$255K", label: "Tracked Spend" },
    { value: "13,630+", label: "LTO Offers Sold" },
  ];

  const caseTimeline = [
    {
      phase: "Phase 1: Creative & Offer Testing",
      time: "Days 1 – 15",
      desc: "Deployed 14 hook variations with a $27 low-ticket frontend offer, establishing a baseline 2.1x ROAS on cold traffic.",
    },
    {
      phase: "Phase 2: CAPI & Funnel Optimization",
      time: "Days 16 – 45",
      desc: "Integrated server-side Meta Conversions API (CAPI) and 1-click upsells, increasing average order value (AOV) by 64%.",
    },
    {
      phase: "Phase 3: Advantage+ Audience Scaling",
      time: "Days 46 – 75",
      desc: "Scaled daily ad spend from $1,500/day to $6,000/day across un-tapped interest clusters while maintaining a 3.32x ROAS.",
    },
    {
      phase: "Phase 4: High-Ticket Backend Conversion",
      time: "Days 76 – 90",
      desc: "Automated GoHighLevel CRM SMS follow-ups, booking 180+ qualified high-ticket consultations directly from frontend buyers.",
    },
  ];

  const playbooks = [
    {
      title: "Meta Ads VSL Scripting & Offer Formula",
      type: "Creative Copy",
      desc: "How to structure 8-part VSLs that sell high-ticket offers without burning ad budget across any industry.",
    },
    {
      title: "Hidden Facebook Interest Targeting SOP",
      type: "Media Buying",
      desc: "Uncovering high-intent audience segments that drop CPL and double call booking volume.",
    },
    {
      title: "TikTok & Meta UGC Creator Brief Matrix",
      type: "Creative SOP",
      desc: "Standard operating procedure for sourcing, scripting, and directing high-converting shortform video ads.",
    },
    {
      title: "Server-Side CAPI Technical Integration",
      type: "Technical SOP",
      desc: "Developer-level tracking scripts that feed 100% accurate conversion telemetry back to ad algorithms.",
    },
    {
      title: "1-Click Upsell & Order Bump Blueprint",
      type: "Funnel Architecture",
      desc: "Step-by-step layout for multiplying customer lifetime value on the immediate post-purchase page.",
    },
    {
      title: "Automated CRM Lead Qualification Bot",
      type: "Automation SOP",
      desc: "Custom GoHighLevel workflows that score leads and auto-book calendar slots with zero manual sales effort.",
    },
  ];

  const faqs = [
    {
      q: "What exactly is included in the 90-day private mastermind?",
      a: "You’ll get one private 1-on-1 strategy call every week, plus 24/7 access to us for questions and support throughout the program. There is no artificial time limit on your weekly calls — we stay on until your questions are answered and you have clarity on your next steps. You’ll also get recordings of every session so you can revisit the strategies and training whenever you need.",
    },
    {
      q: "What will I learn during the 90 days?",
      a: "We’ll work with you directly on the areas that drive growth, including ad copy creation, high-converting creatives, hyper-targeted audience segmentation, testing frameworks, scaling strategies, lead qualification systems, and email & SMS automations. The goal is to help you build a repeatable system you can use long after the mastermind ends.",
    },
    {
      q: "What if I don’t double my revenue in 90 days?",
      a: "We stand behind the program with our 90-Day Double Revenue Guarantee. If you follow the strategies, implement the work, and don’t double your revenue within the 90-day period, we’ll continue working with you for free until you do.",
    },
    {
      q: "Is there a refund policy?",
      a: "There are no refunds for the mastermind. This is a hands-on, personalized program where we commit our time, expertise, and resources directly to your business. The 90-Day Double Revenue Guarantee is designed to give you confidence in the outcome while keeping the focus on implementation and results.",
    },
    {
      q: "Will I get recordings of the 1-on-1 sessions?",
      a: "Yes. Every session is recorded. You’ll have access to the recordings so you can review the strategies, revisit specific recommendations, and make sure nothing gets missed between sessions.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <FloatingNavbar />

      {/* Hero Header Section */}
      <section className="pt-28 sm:pt-36 pb-16 px-4 md:px-8 bg-white text-stone-900 overflow-hidden border-b border-stone-200 relative">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-purple-200/40 via-purple-100/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-xs tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-700" />
            <span>PROPRIETARY $847K SCALING CASE STUDY & SOPS</span>
          </div>

          {/* Main Balanced Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-stone-950 tracking-tight uppercase font-hero leading-tight select-none">
            How We Scaled an LTO Funnel to <br />
            <span className="animate-purple-gradient font-hero tracking-tight">$847K in Revenue</span>
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-base sm:text-lg font-medium text-stone-700 max-w-2xl mx-auto leading-relaxed font-sans">
            $255K tracked Meta ad spend generating nearly $1M in sales and 13,630+ offers sold using direct-response Meta Ads & VSL architecture.
          </p>

          {/* Stats Bar */}
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3.5 sm:grid-cols-4 w-full">
            {stats.map((s, idx) => (
              <div key={idx} className="rounded-2xl border-2 border-stone-950 bg-stone-50 p-4 text-center shadow-sm hover:border-purple-600 transition-colors">
                <p className="text-3xl font-black text-purple-700 font-mono">{s.value}</p>
                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-stone-600 font-mono">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mastermind VSL Video Section */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto text-center">
        {/* VSL Video Player Direct (No Thumbnail Cover Image) */}
        <div className="relative rounded-3xl overflow-hidden border-4 border-stone-950 shadow-[0_25px_70px_rgba(147,51,234,0.3)] bg-black aspect-video">
          <video
            src="https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media/695da2543a532d67105ad96c.mp4"
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

      {/* Case Study Timeline */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-stone-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full">
            90-DAY SCALING ROADMAP
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight mt-4 uppercase leading-tight">
            How We Achieved <span className="animate-purple-gradient font-hero tracking-tight">$847K Step-by-Step</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseTimeline.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border-2 border-stone-950 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                    {item.time}
                  </span>
                  <Clock className="w-4 h-4 text-stone-400" />
                </div>
                <h3 className="text-xl font-black text-stone-950 font-hero mb-2">
                  {item.phase}
                </h3>
                <p className="text-stone-600 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Playbooks Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {playbooks.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border-2 border-stone-950 p-8 shadow-xl hover:border-purple-600 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(147,51,234,0.18)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-mono font-black text-purple-700 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
                  {p.type}
                </span>
                <h3 className="text-2xl font-black text-stone-950 font-hero tracking-tight mb-3 group-hover:text-purple-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-stone-600 text-sm font-medium leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between font-mono">
                <span className="text-xs font-bold text-stone-400">Blueprint #0{idx + 1}</span>
                <span className="text-xs font-black text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 uppercase tracking-wide">
                  PROPRIETARY SOP
                </span>
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
