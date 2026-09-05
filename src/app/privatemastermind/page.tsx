import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { SelectedWorkShowcase } from "@/components/redesign/SelectedWorkShowcase";
import { ResultsSection } from "@/components/redesign/ResultsSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { MASTERMIND_FUNNEL } from "@/lib/funnels";
import { Crown, Sparkles, ArrowRight, ShieldCheck, Zap, Users, Trophy, Play, CheckCircle2, XCircle, TrendingUp, BarChart2, Star, AlertTriangle, HelpCircle, Layers, FileText, Lock, Target, Award, Crosshair } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: MASTERMIND_FUNNEL.metaTitle,
  description: MASTERMIND_FUNNEL.metaDescription,
};

export default function PrivateMastermindPage() {
  const stats = [
    { value: "$50M+", label: "Meta Ads Spent" },
    { value: "12 YRS", label: "Experience" },
    { value: "$10K+", label: "Monthly Minimum" },
    { value: "90 DAYS", label: "Revenue Target" },
  ];

  const learnItems = [
    "How to win clients by selling ads outcomes, not busywork",
    "Hidden Facebook interests that drop CPL and raise call volume",
    "How to position done-for-you ads across any industry",
    "Funnel + offer angles pulled from million-dollar testimonials",
    "The same standards behind Two Comma Club + ClickFunnels Awards work",
    "Full ownership of all landing pages, VSL scripts, CRM pipelines & CAPI setups",
  ];

  const curriculumPillars = [
    {
      number: "01",
      title: "High-Converting Ad Strategy",
      icon: Crosshair,
      desc: "Create compelling ad copies, hooks, angles, and creatives designed to attract your ideal buyers.",
      highlight: "Custom Copy & Angles",
    },
    {
      number: "02",
      title: "Hyper-Targeted Audience Segmentation",
      icon: Target,
      desc: "Identify and segment the right audiences so your budget goes toward prospects most likely to become clients.",
      highlight: "Buyer Targeting",
    },
    {
      number: "03",
      title: "Testing & Optimization System",
      icon: Zap,
      desc: "Know exactly what to test, how to test it, and when to kill, optimize, or scale a campaign.",
      highlight: "Optimization Protocol",
    },
    {
      number: "04",
      title: "Scaling Strategy",
      icon: TrendingUp,
      desc: "Move beyond random budget increases with a structured system for scaling campaigns while protecting profitability.",
      highlight: "Profit-Safe Scaling",
    },
    {
      number: "05",
      title: "Lead Qualification System",
      icon: ShieldCheck,
      desc: "Build a process that helps separate serious prospects from low-quality leads before they waste your sales team's time.",
      highlight: "High-Ticket Filter",
    },
    {
      number: "06",
      title: "Email & SMS Automation",
      icon: Layers,
      desc: "Set up follow-up systems that automatically nurture, qualify, and re-engage leads so opportunities don't fall through the cracks.",
      highlight: "24/7 Automated Nurture",
    },
    {
      number: "07",
      title: "Weekly Private 1-on-1 Strategy Calls",
      icon: Users,
      desc: "Work directly with us every week. No rushed 30-minute calls. We stay on until your questions are answered and you know exactly what to do next.",
      highlight: "1-on-1 Founders Access",
    },
    {
      number: "08",
      title: "24/7 Access & Session Recordings",
      icon: Award,
      desc: "Get ongoing access for questions between calls, plus recordings of every session so you can revisit the strategies and implementation whenever you need.",
      highlight: "Lifetime Session Vault",
    },
  ];

  const targetComparison = [
    {
      type: "WHO THIS IS FOR",
      items: [
        "Agency owners doing $10K+/month wanting to double revenue in 90 days",
        "High-ticket coaches & consultants needing a predictable call booking system",
        "B2B & local service founders tired of unreliable agency retainer fees",
        "Founders who demand 100% ownership of their funnels, copy & ad assets",
      ],
      bg: "bg-emerald-50 border-emerald-300 text-stone-900",
      accent: "text-emerald-700 bg-emerald-100",
    },
    {
      type: "WHO THIS IS NOT FOR",
      items: [
        "Brand new startups making less than $10,000 in monthly revenue",
        "People looking for a 'get rich quick' course with no implementation work",
        "Founders looking to delegate 100% of executive strategy without involvement",
        "Agencies unwilling to install server-side conversion tracking & CAPI",
      ],
      bg: "bg-rose-50 border-rose-300 text-stone-900",
      accent: "text-rose-700 bg-rose-100",
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

  const proofMetrics = [
    { value: "$847K", label: "Revenue Tracked" },
    { value: "3.32x", label: "Average ROAS" },
    { value: "13,630+", label: "LTO Offers Sold" },
    { value: "90 Days", label: "Revenue Target" },
  ];

  const testimonials = [
    {
      name: "Jason R.",
      role: "Agency Owner, 7-Figure",
      body: "Completely changed how I run ads. Booked 18 calls in the first 3 weeks after implementing the framework.",
      stars: 5,
    },
    {
      name: "Maria T.",
      role: "Health Coach, 6-Figure",
      body: "The CRM automations alone saved us 20 hours a week. Our close rate went from 18% to 41% in 60 days.",
      stars: 5,
    },
    {
      name: "Devon K.",
      role: "SaaS Founder",
      body: "I've worked with 4 agencies before Scale With Ads. Nobody comes close to the level of system they install.",
      stars: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <FloatingNavbar />

      {/* Hero Header Section */}
      <section className="pt-28 sm:pt-36 pb-20 px-4 md:px-8 bg-white text-stone-900 overflow-hidden border-b border-stone-200 relative">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-purple-200/40 via-purple-100/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">

          {/* Top Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-xs tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-700" />
            <span>SCALEWITHADS™ CLIENT ACQUISITION SYSTEM</span>
          </div>

          {/* 1. TOP SUB-TEXT (Above Giant Headline) */}
          <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight font-sans max-w-3xl leading-snug">
            We Will Install Our Proprietary <span className="text-purple-700 font-black">ScaleWithAds™</span> <br className="hidden sm:inline" />
            Client Acquisition System Into Your Business.
          </p>

          {/* 2. CENTER GIANT HEADLINE WITH MOVING ANIMATED GRADIENT */}
          <div className="overflow-hidden py-4 my-2 max-w-6xl">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tighter uppercase leading-[0.98] font-hero animate-purple-gradient select-none drop-shadow-sm">
              Double Your Revenue <br />
              Within The Next 90 Days
            </h1>
          </div>

          {/* 3. BOTTOM SUB-TEXT (Below Giant Headline) */}
          <div className="mt-2 max-w-3xl text-center space-y-3 font-sans">
            <p className="text-base sm:text-xl font-bold text-stone-800 max-w-2xl mx-auto leading-relaxed">
              <span className="font-extrabold text-stone-950 underline underline-offset-4 decoration-purple-500">Or We&apos;ll Keep Working With You For Free</span> Until You Do.
            </p>

            <p className="text-xs sm:text-sm font-extrabold text-purple-700 tracking-wide uppercase font-mono">
              Done-With-You. 1-on-1. Built Around Your Business.
            </p>
          </div>

          {/* 4 Core Hero Stats Bar */}
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3.5 sm:grid-cols-4 w-full">
            <div className="rounded-2xl border-2 border-stone-950 bg-stone-50 p-4 text-center shadow-sm hover:border-purple-600 transition-colors">
              <p className="text-3xl font-black text-purple-700 font-mono">
                $50M+
              </p>
              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-stone-600 font-mono">
                Meta Ads Spent
              </p>
            </div>
            <div className="rounded-2xl border-2 border-stone-950 bg-stone-50 p-4 text-center shadow-sm hover:border-purple-600 transition-colors">
              <p className="text-3xl font-black text-stone-950 font-mono">
                12 YRS
              </p>
              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-stone-600 font-mono">
                Experience
              </p>
            </div>
            <div className="rounded-2xl border-2 border-stone-950 bg-stone-50 p-4 text-center shadow-sm hover:border-purple-600 transition-colors">
              <p className="text-3xl font-black text-purple-700 font-mono">
                $10K+
              </p>
              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-stone-600 font-mono">
                Monthly Minimum
              </p>
            </div>
            <div className="rounded-2xl border-2 border-stone-950 bg-stone-50 p-4 text-center shadow-sm hover:border-purple-600 transition-colors">
              <p className="text-3xl font-black text-stone-950 font-mono">
                90 DAYS
              </p>
              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-stone-600 font-mono">
                Revenue Target
              </p>
            </div>
          </div>

          {/* Mastermind Video Player Section (Official VSL Video) */}
          <div className="mt-16 max-w-5xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-300 px-5 py-2 text-xs font-mono font-extrabold text-purple-800 uppercase tracking-widest shadow-sm">
                <Play className="w-4 h-4 fill-purple-700 text-purple-700" />
                Watch Private 1:1 Mastermind Video
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-stone-950 font-hero tracking-tight mt-4 uppercase leading-tight">
                GLIMPSE OF OUR <span className="animate-purple-gradient">EXACT MASTERMIND</span>
              </h2>
              <p className="mt-3 text-stone-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
                Understand exactly what we install, how it works, and why it doubles revenue in 90 days.
              </p>
            </div>

            {/* Glowing Video Frame Container */}
            <div className="relative rounded-[32px] overflow-hidden border-4 border-stone-950 shadow-[0_25px_70px_rgba(147,51,234,0.3)] bg-black aspect-video group">
              <iframe
                src="https://www.youtube.com/embed/oSMaA6LOnrQ?autoplay=1&mute=1&rel=0&modestbranding=1"
                title="Private 1:1 Mastermind"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* BIGGG CTA Button */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 sm:px-16 sm:py-6 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-lg sm:text-2xl uppercase tracking-wider transition-all duration-300 shadow-[0_15px_40px_rgba(147,51,234,0.35)] hover:scale-105 active:scale-95 border-2 border-purple-500/40"
              >
                <span>BOOK YOUR CALL</span>
                <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3]" />
              </Link>

              <p className="text-xs sm:text-sm font-mono font-bold text-stone-500 tracking-wide mt-2">
                ✦ Written 90-Day Double Revenue Guarantee · 100% Asset Ownership · 1:1 Direct Advisory
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown Grid (8 Core Pillars - 4 Cards per row, 2 lines total) */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-stone-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>MASTERMIND CURRICULUM ARCHITECTURE</span>
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-stone-950 font-hero tracking-tight mt-4 uppercase leading-tight">
            The 8 Core Pillars We Install in <span className="animate-purple-gradient">Your Business</span>
          </h2>
          <p className="text-stone-600 font-medium text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            Every module is paired with plug-and-play SOPs, custom scripts, and direct 1:1 advisory implementation.
          </p>
        </div>

        {/* 4 Cards in a Line (2 Rows Total) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {curriculumPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border-2 border-stone-950 p-6 sm:p-7 shadow-lg hover:border-purple-600 hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_20px_45px_rgba(147,51,234,0.18)] transition-all duration-300 flex flex-col justify-between group cursor-pointer min-h-[300px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-black text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200 inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                      PILLAR {p.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-stone-950 text-white flex items-center justify-center group-hover:bg-purple-700 transition-colors shadow-md shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-stone-950 font-hero tracking-tight mb-2.5 group-hover:text-purple-700 transition-colors leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm font-medium leading-relaxed mb-5 font-sans">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-stone-100 flex items-center justify-between font-mono text-[11px]">
                  <span className="font-bold text-stone-400">Blueprint #{p.number}</span>
                  <span className="font-black text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200 uppercase tracking-wide truncate max-w-[140px]">
                    {p.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Target Audience Qualification Matrix */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-stone-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>QUALIFICATION MATRIX</span>
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight uppercase font-hero mt-4 leading-tight">
            Is This Private Mastermind <br />
            <span className="animate-purple-gradient font-hero tracking-tight">RIGHT FOR YOU?</span>
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg font-medium max-w-xl mx-auto font-sans">
            We maintain strict qualification criteria to protect candidate quality and guarantee maximum 1-on-1 focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card: WHO THIS IS FOR */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-stone-950 hover:border-purple-600 shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(147,51,234,0.18)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
                <span className="px-4 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-wider text-white bg-stone-950 border border-stone-900 inline-flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WHO THIS IS FOR</span>
                </span>
                <span className="text-xs font-mono font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  ✓ Ideal Fit
                </span>
              </div>

              <ul className="space-y-5 font-sans">
                {[
                  "Agency owners doing $10K+/month wanting to double revenue in 90 days",
                  "High-ticket coaches & consultants needing a predictable call booking system",
                  "B2B & local service founders tired of unreliable agency retainer fees",
                  "Founders who demand 100% ownership of their funnels, copy & ad assets",
                ].map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3.5 text-base sm:text-lg font-extrabold text-stone-950 leading-snug">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 fill-emerald-600 text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono font-bold text-stone-500">
              <span className="text-emerald-700 font-extrabold">✦ Guaranteed System Fit</span>
              <span className="text-stone-900 font-black">100% Alignment</span>
            </div>
          </div>

          {/* Right Card: WHO THIS IS NOT FOR */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-stone-950 hover:border-purple-600 shadow-xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(147,51,234,0.18)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
                <span className="px-4 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-wider text-white bg-stone-950 border border-stone-900 inline-flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span>WHO THIS IS NOT FOR</span>
                </span>
                <span className="text-xs font-mono font-black text-rose-800 bg-rose-100 px-3 py-1 rounded-full border border-rose-300">
                  ✕ Strictly Filtered
                </span>
              </div>

              <ul className="space-y-5 font-sans">
                {[
                  "Brand new startups making less than $10,000 in monthly revenue",
                  "People looking for a 'get rich quick' course with no implementation work",
                  "Founders looking to delegate 100% of executive strategy without involvement",
                  "Agencies unwilling to install server-side conversion tracking & CAPI",
                ].map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3.5 text-base sm:text-lg font-extrabold text-stone-950 leading-snug">
                    <div className="w-6 h-6 rounded-full bg-rose-100 border border-rose-300 text-rose-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <XCircle className="w-4 h-4 fill-rose-600 text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono font-bold text-stone-500">
              <span className="text-rose-700 font-extrabold">✦ Rejection Safeguard</span>
              <span className="text-stone-900 font-black">Zero Low-Intent Leads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Results & Track Record Showcase */}
      <ResultsSection />

      {/* System Training Library Section (Home Page Component) */}
      <SelectedWorkShowcase />

      {/* Verified Client Video Testimonials */}
      <ClientTestimonialsSection />

      {/* Frequently Asked Questions Accordion */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight mt-4">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border-2 border-stone-950 shadow-lg">
              <h3 className="text-xl font-black text-stone-950 font-hero tracking-tight flex items-center gap-3 mb-3">
                <HelpCircle className="w-5 h-5 text-purple-700 shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-stone-600 text-base font-medium leading-relaxed pl-8">
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
