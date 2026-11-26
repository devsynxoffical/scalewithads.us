import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart2, CheckCircle2, ChevronDown, Filter, GraduationCap, Layers, Play, Sparkles, Target, TrendingUp, Users } from "lucide-react";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { SelectedWorkShowcase } from "@/components/redesign/SelectedWorkShowcase";
import { FaqSection } from "@/components/redesign/FaqSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { MASTERMIND_FUNNEL } from "@/lib/funnels";
import { ProgramJourney } from "@/components/mastermind/ProgramJourney";

export const metadata: Metadata = pageMeta({
  title: MASTERMIND_FUNNEL.metaTitle,
  description: MASTERMIND_FUNNEL.metaDescription,
  path: "/private-mastermind",
});

const BENEFITS = [
  { icon: Target, title: "Attract ideal clients", text: "Find the audiences, hidden interests and creative angles that reach buyers who can afford your offer." },
  { icon: Filter, title: "Improve lead quality", text: "Use offer engineering, qualification pages and form filtering so fewer unqualified leads reach your calendar." },
  { icon: BarChart2, title: "Track what actually converts", text: "Set up Pixel, Conversions API and CRM tracking from lead to qualified lead to appointment to sale." },
  { icon: TrendingUp, title: "Scale profitably", text: "Scale with ABO/CBO structures, manual bidding and unit economics, knowing when to scale, pause or restructure." },
];

const DIFFERENT = [
  { title: "Hands-on implementation", text: "Work directly on your own campaigns, accounts, advertising strategies and acquisition systems." },
  { title: "Real-world campaign dissection", text: "Understand what's actually working, why campaigns fail, and how to identify opportunities for improvement." },
  { title: "Advanced strategies", text: "Go beyond basic campaign setup into advanced acquisition, optimization, tracking and scaling methodologies." },
  { title: "AI-powered advertising", text: "Integrate AI into research, creative development, copywriting, analysis and advertising workflows." },
  { title: "Complete client acquisition system", text: "Understand the entire journey from attracting prospects to generating qualified leads, tracking conversions and improving profitability." },
  { title: "Live support & implementation", text: "Get practical guidance, troubleshooting and strategic feedback throughout the mastermind." },
];

const RESOURCES = [
  "Meta Ads Library Research SOP",
  "AI Advertising Prompt Library",
  "Creative Research & Testing Frameworks",
  "Campaign Testing & Validation SOP",
  "Pixel + CAPI Implementation Checklist",
  "Conversion Tracking Framework",
  "Campaign Scaling Playbooks",
  "Manual Bidding Decision Framework",
  "Advanced Retargeting Templates",
  "Landing Page Optimization Checklist",
  "Lead Qualification Framework",
  "CAC, LTV & Break-Even Calculator",
  "Campaign Audit Checklist",
  "Weekly Implementation Assignments",
];

const AUDIENCE = [
  "Agency owners",
  "Marketing consultants",
  "Media buyers",
  "Coaches & consultants",
  "High-ticket service providers",
  "Lead generation businesses",
  "Business owners running paid advertising",
  "Marketers looking to improve lead quality",
  "Advertisers looking to scale profitably",
];

const FAQS = [
  {
    q: "What is the AI Client Acquisition Mastermind?",
    a: "It is a 6-week, hands-on implementation mastermind from Scale With Ads. Across 12 classes you learn to build, optimize and scale a predictable client acquisition system using Meta ads, AI-powered advertising, qualified lead generation, conversion tracking, funnels and advanced scaling strategies, applied to your own campaigns.",
  },
  {
    q: "Is this just another Facebook ads course?",
    a: "No. It is an implementation mastermind, not a video course. Every class is applied to your own campaigns, and the program includes live campaign reviews, troubleshooting and individual implementation guidance.",
  },
  {
    q: "What are hidden Facebook interests, and are they covered?",
    a: "Hidden interests are audience interests that do not show up in the usual suggestions, so fewer advertisers bid on them. Yes, they are covered in Class 1, Hyper-Targeting & Audience Intelligence, together with buyer intent segmentation and audience testing.",
  },
  {
    q: "Who is the mastermind for?",
    a: "Agency owners, marketing consultants, media buyers, coaches and consultants, high-ticket service providers, lead generation businesses and business owners running paid advertising who want better lead quality and profitable scaling.",
  },
  {
    q: "How is the 6-week program structured?",
    a: "There are 12 live classes, two a week. Week 1 covers audience and creative intelligence, week 2 AI advertising and client qualification, week 3 tracking and campaign launch, week 4 advanced scaling, week 5 retargeting and conversion intelligence, and week 6 profitability and live implementation.",
  },
  {
    q: "What resources are included?",
    a: "14 implementation resources: SOPs, checklists, playbooks and templates for every stage of the system, including a Meta Ads Library research SOP, a Pixel + CAPI checklist, scaling playbooks, a CAC, LTV and break-even calculator, plus weekly implementation assignments.",
  },
  {
    q: "How do I join?",
    a: "Seats are limited. Apply for the mastermind and book your application call. We go through your business and your campaigns on the call, along with the details of support after graduation.",
  },
];

const CURRICULUM = [
  { week: "Week 1", theme: "Audience & Creative Intelligence", classes: [
    { title: "Hyper-Targeting & Audience Intelligence", topics: ["Advanced audience segmentation", "Hidden interests and audience research", "Buyer intent and behavioral segmentation", "Broad targeting vs interest targeting", "Advantage+ audience strategies", "AI-powered audience research", "Audience testing and validation frameworks"] },
    { title: "Creative Intelligence & Meta Ads Library Masterclass", topics: ["Meta Ads Library competitor research", "Identifying winning advertising angles", "Creative concept development", "Hook development and buyer psychology", "Image, GIF and video ad strategies", "Creative self-qualification frameworks", "Competitor creative analysis", "Building a repeatable creative research SOP"] },
  ] },
  { week: "Week 2", theme: "AI Advertising & Client Qualification", classes: [
    { title: "AI Advertising Automation System", topics: ["AI-powered advertising workflows", "AI creative ideation and development", "AI image and video creation workflows", "AI ad copy generation", "AI-powered audience research", "AI campaign analysis", "Advanced prompt engineering", "Advertising automation systems"] },
    { title: "Ad Copywriting, Offer Engineering & Lead Qualification", topics: ["Copywriting for cold, warm and hot audiences", "Buyer psychology and conversion messaging", "Offer engineering and positioning", "Developing compelling acquisition offers", "Lead qualification frameworks", "Qualification landing pages", "Form optimization and lead filtering", "Building pre-qualified lead acquisition systems"] },
  ] },
  { week: "Week 3", theme: "Tracking & Campaign Launch", classes: [
    { title: "Tracking, Attribution & Conversion Intelligence", topics: ["Meta Pixel implementation", "Conversions API (CAPI)", "Browser-side and server-side tracking", "Event setup and prioritization", "Event deduplication", "Event Match Quality optimization", "CRM and offline conversion tracking", "Lead → Qualified Lead → Appointment → Sale tracking", "Attribution limitations and reporting", "Events Manager troubleshooting"] },
    { title: "Campaign Architecture, Launch & Validation", topics: ["Campaign structure and architecture", "Campaign objectives and optimization events", "Campaign launch strategies", "Budget allocation and testing", "Creative and audience testing", "Learning phase management", "Identifying winning and losing campaigns", "Campaign validation frameworks"] },
  ] },
  { week: "Week 4", theme: "Advanced Scaling", classes: [
    { title: "Advanced Campaign Scaling Strategies", topics: ["ABO vs CBO campaign architecture", "Campaign dissection and optimization", "Vertical and horizontal scaling", "Lookalike audience strategies", "Creative scaling frameworks", "Budget expansion strategies", "Scaling winning campaigns", "Variables affecting campaign performance"] },
    { title: "The Father of Scaling: Advanced Manual Bidding", topics: ["Manual bidding strategies", "Bid caps and cost controls", "Advanced campaign architecture", "High-budget campaign management", "Acquisition cost control", "Bid strategy troubleshooting", "Scaling campaigns with greater control", "Advanced optimization decision-making"] },
  ] },
  { week: "Week 5", theme: "Retargeting & Conversion Intelligence", classes: [
    { title: "Advanced Retargeting & Customer Segmentation", topics: ["Website visitor segmentation", "Video viewer segmentation", "Social media engagement audiences", "Lead vs customer retargeting", "Funnel-stage retargeting", "Audience exclusions", "Customer journey segmentation", "Personalized retargeting messaging", "Advanced retargeting campaign architecture"] },
    { title: "Customer Footprint & Funnel Intelligence", topics: ["Understanding website visitor behavior", "Customer journey mapping", "Heatmaps and session recordings", "Landing page conversion analysis", "Funnel drop-off analysis", "Identifying conversion bottlenecks", "Conversion rate optimization (CRO)", "Data-driven funnel optimization"] },
  ] },
  { week: "Week 6", theme: "Profitability & Live Implementation", classes: [
    { title: "Unit Economics, Profitability & Scaling Risk", topics: ["Customer Acquisition Cost (CAC)", "Customer Lifetime Value (LTV)", "Break-even ROAS", "Contribution margin", "Customer payback period", "Revenue vs profit vs ROAS", "Acquisition profitability analysis", "Scaling risk management", "When to scale, pause or restructure campaigns"] },
    { title: "Live Campaign Dissection & Scaling Implementation", topics: ["Real campaign breakdowns", "Live campaign reviews", "Account-level troubleshooting", "Creative and audience diagnosis", "Tracking and lead quality analysis", "Scaling strategy development", "Campaign optimization roadmaps", "Individual implementation guidance", "Final campaign review and graduation"] },
  ] },
];

export default function PrivateMastermindPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd data={faqJsonLd(FAQS)} />
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

          {/* 2. CENTER GIANT HEADLINE WITH MOVING ANIMATED GRADIENT */}
          <div className="overflow-hidden py-4 my-2 max-w-6xl">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tighter uppercase leading-[0.98] font-hero animate-purple-gradient select-none drop-shadow-sm">
              The Private Meta Ads <br />
              Mastermind For Agencies
            </h1>
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

      {/* Program introduction */}
      <section className="relative overflow-hidden py-20 sm:py-28 px-4 md:px-8 border-t border-stone-200">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-purple-200/30 blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.05fr] items-center">
          <div className="text-center lg:text-left">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm"><Sparkles className="w-3.5 h-3.5" /> Program introduction</span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight leading-[1.02] uppercase">
              Not just another <span className="animate-purple-gradient">advertising course.</span>
            </h2>
            <p className="mt-6 text-stone-700 text-base sm:text-lg font-medium leading-relaxed">
              The <strong className="text-stone-950">AI Client Acquisition Mastermind</strong> is a hands-on implementation mastermind designed to help you understand the complete client acquisition ecosystem, improve lead quality, optimize conversion rates and build a repeatable acquisition process.
            </p>
            <p className="mt-4 text-stone-600 text-base sm:text-lg font-medium leading-relaxed">
              Over six weeks you move from audience and creative research, through AI-assisted ad production, tracking and launch, to advanced scaling, retargeting and profitability, applying each class to your own campaigns.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
              {[["6", "Weeks"], ["12", "Live classes"], ["14", "Resources"]].map(([v, l]) => (
                <div key={l} className="rounded-2xl border-2 border-stone-950 bg-white px-3 py-3 text-center shadow-sm hover:-translate-y-1 hover:border-purple-600 transition-all">
                  <p className="text-3xl font-black text-purple-700 font-hero">{v}</p>
                  <p className="text-[10px] font-black uppercase tracking-wider text-stone-500">{l}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-950 hover:bg-purple-700 px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white transition-colors shadow-lg">
              Apply for the Mastermind <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ProgramJourney weeks={CURRICULUM} />
        </div>
      </section>

      {/* Core benefits */}
      <section className="py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm">Core benefits</span>
            <h2 className="text-4xl sm:text-6xl font-black text-stone-950 font-hero tracking-tight mt-4 leading-tight uppercase">
              What you&apos;ll be able to do <span className="animate-purple-gradient">after six weeks.</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-3xl border-2 border-stone-950 bg-white p-6 shadow-lg hover:-translate-y-1 hover:border-purple-600 transition-all duration-300">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-700 text-white"><b.icon className="w-5 h-5" /></span>
                <h3 className="mt-4 text-lg font-black text-stone-950">{b.title}</h3>
                <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-week curriculum */}
      <section id="curriculum" className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm"><Layers className="w-3.5 h-3.5" /> The complete 6-week curriculum</span>
            <h2 className="text-4xl sm:text-6xl font-black text-stone-950 font-hero tracking-tight mt-4 leading-tight uppercase">
              What you will master, <span className="animate-purple-gradient">week by week.</span>
            </h2>
            <p className="mt-4 text-stone-600 text-base sm:text-lg font-medium">Twelve live classes, two a week, each applied to your own campaigns.</p>
          </div>
          <div className="space-y-6">
            {CURRICULUM.map((w, wi) => (
              <div key={w.week} className="rounded-[28px] border-2 border-stone-950 bg-white p-5 sm:p-8 shadow-lg">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-purple-700">{w.week}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-stone-950 font-hero tracking-tight">{w.theme}</h3>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {w.classes.map((c, ci) => {
                    const n = wi * 2 + ci + 1;
                    return (
                      <details key={c.title} className="group rounded-2xl border border-stone-200 bg-[#FAF8F4] p-5 open:bg-white open:border-purple-300" open={wi === 0}>
                        <summary className="flex cursor-pointer list-none items-start gap-3">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-700 font-mono text-xs font-black text-white">{String(n).padStart(2, "0")}</span>
                          <span className="flex-1">
                            <span className="block font-mono text-[11px] font-black uppercase tracking-widest text-stone-500">Class {n}</span>
                            <span className="block font-black text-stone-950 leading-snug">{c.title}</span>
                          </span>
                          <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-stone-500 transition-transform group-open:rotate-180" />
                        </summary>
                        <ul className="mt-4 space-y-2 pl-1">
                          {c.topics.map((t) => (
                            <li key={t} className="flex gap-2.5 text-sm text-stone-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-700" />{t}</li>
                          ))}
                        </ul>
                      </details>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seats are limited CTA */}
      <section className="px-4 md:px-8 pb-24">
        <div className="relative overflow-hidden max-w-6xl mx-auto rounded-[32px] bg-gradient-to-br from-purple-800 via-purple-900 to-stone-950 p-8 sm:p-14 text-center text-white">
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-fuchsia-400/25 blur-3xl" />
          <p className="relative font-mono text-xs font-black uppercase tracking-widest text-purple-200">Seats are limited</p>
          <h2 className="relative mt-3 text-3xl sm:text-5xl font-black font-hero tracking-tight uppercase">Twelve classes. Your own campaigns.</h2>
          <p className="relative mt-4 max-w-2xl mx-auto text-purple-100 text-base sm:text-lg">Apply for the AI Client Acquisition Mastermind and build your acquisition system with live support.</p>
          <Link href="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wider text-stone-950 hover:bg-purple-100 transition-colors">
            Apply for the Mastermind <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="relative mt-5 font-mono text-xs font-bold text-purple-200">6 weeks, 12 live classes · 14 implementation resources</p>
        </div>
      </section>

      {/* What makes this mastermind different */}
      <section className="py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm">What makes this mastermind different</span>
            <h2 className="text-4xl sm:text-6xl font-black text-stone-950 font-hero tracking-tight mt-4 leading-tight uppercase">
              Built around your campaigns, <span className="animate-purple-gradient">not slides.</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENT.map((d, i) => (
              <div key={d.title} className="relative rounded-3xl border-2 border-stone-200 bg-[#FAF8F4] p-6 hover:border-purple-400 transition-colors">
                <span className="font-hero text-4xl font-black text-purple-200">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-lg font-black text-stone-950">{d.title}</h3>
                <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources + audience */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border-2 border-stone-950 bg-white p-6 sm:p-8 shadow-lg">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm">Implementation resources</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-stone-950 font-hero tracking-tight uppercase">Premium resources you keep using.</h2>
            <p className="mt-3 text-stone-600 font-medium leading-relaxed">SOPs, checklists, playbooks and templates for every stage of the system, plus weekly assignments that turn each class into action on your own account.</p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {RESOURCES.map((r) => (
                <li key={r} className="flex gap-2.5 text-sm font-bold text-stone-800"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-700" />{r}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] border-2 border-stone-950 bg-stone-950 p-6 sm:p-8 text-white shadow-lg">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-200 bg-white/10 border border-white/15 px-4 py-2 rounded-full inline-flex">Who is this mastermind for?</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black font-hero tracking-tight uppercase">For people who run, or rely on, paid acquisition.</h2>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {AUDIENCE.map((a) => (
                <li key={a} className="flex gap-2.5 text-sm font-bold text-stone-100"><Users className="mt-0.5 h-4 w-4 shrink-0 text-purple-300" />{a}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-stone-300 leading-relaxed">
              Prefer to have the system built and run for you instead? See our{" "}
              <Link href="/services" className="font-bold text-purple-300 underline underline-offset-4">Meta ads agency</Link> and{" "}
              <Link href="/lead-pilot" className="font-bold text-purple-300 underline underline-offset-4">done-for-you lead generation</Link> services.
            </p>
          </div>
        </div>
      </section>

      {/* Graduate support */}
      <section className="pb-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center rounded-[28px] border-2 border-purple-200 bg-purple-50 p-8 sm:p-12">
          <GraduationCap className="mx-auto w-10 h-10 text-purple-700" />
          <p className="mt-4 font-mono text-xs font-black uppercase tracking-widest text-purple-700">Graduate support program</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-stone-950 font-hero tracking-tight uppercase">You don&apos;t graduate alone.</h2>
          <p className="mt-4 text-stone-700 text-base sm:text-lg font-medium leading-relaxed">
            The final class ends with a live review of your campaigns, an optimization roadmap and individual implementation guidance, so you leave with a clear plan for your own account. Details of support after graduation are covered on your application call.
          </p>
        </div>
      </section>

      {/* System Training Library Section (Home Page Component) */}
      <SelectedWorkShowcase />

      {/* Verified Client Video Testimonials */}
      <ClientTestimonialsSection />

      {/* Frequently Asked Questions */}
      <FaqSection
        faqs={FAQS}
        eyebrow="Questions, answered"
        title={<>AI Client Acquisition <span className="font-serif italic animate-purple-gradient">Mastermind FAQ.</span></>}
      />

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
