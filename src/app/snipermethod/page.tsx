import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Crosshair,
  Layers,
  Play,
  Search,
  Sparkles,
  Target,
  TrendingDown,
  Users,
} from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { ResultsSection } from "@/components/redesign/ResultsSection";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import UFSquareMarquee from "@/components/redesign/UFSquareMarquee";
import { MacbookScroll } from "@/components/ui/MacbookScroll";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";

export const metadata = {
  title: "The Sniper Method Mastermind | Hidden Facebook Audiences for Personal Injury",
  description:
    "Discover hidden Facebook audiences that can help personal injury law firms and agencies generate more qualified cases at up to 50% lower advertising costs.",
};

/** 1h 33m mastermind video, played inside the laptop mockup in the hero (any iframe embed URL works). */
const MASTERMIND_VIDEO_URL = "https://player.vimeo.com/video/1245761641?title=0&byline=0&portrait=0&dnt=1";

const caseTypes = ["Car Accidents", "Motorcycle Accidents", "18-Wheeler Accidents", "Rideshare Accidents", "Other PI Cases"];

const discoverItems = [
  {
    number: "01",
    title: "The Sniper Method",
    icon: Crosshair,
    desc: "Uncover hidden Facebook interest-targeting opportunities that most advertisers overlook.",
  },
  {
    number: "02",
    title: "Untapped Audiences",
    icon: Users,
    desc: "Discover new audience segments beyond conventional Facebook interests.",
  },
  {
    number: "03",
    title: "Up to 50% Narrower Targeting",
    icon: Target,
    desc: "Learn how to eliminate irrelevant interests and build more focused audiences.",
  },
  {
    number: "04",
    title: "Accident-Victim Audience Research",
    icon: Search,
    desc: "Explore targeting opportunities across car, motorcycle, 18-wheeler, and rideshare accidents.",
  },
  {
    number: "05",
    title: "Cross-Niche Application",
    icon: Layers,
    desc: "Apply this research methodology across different personal injury campaigns.",
  },
  {
    number: "06",
    title: "Competitive Audience Research",
    icon: TrendingDown,
    desc: "Discover new opportunities instead of repeatedly targeting the same audiences as everyone else.",
  },
];

const benefits = [
  "Generate more relevant potential case inquiries.",
  "Discover new audience segments.",
  "Reduce wasted ad spend on irrelevant targeting.",
  "Build more focused advertising campaigns.",
  "Gain a competitive advantage in crowded personal injury markets.",
];

function Eyebrow({ children, icon: Icon = Sparkles }: { children: React.ReactNode; icon?: React.ElementType }) {
  return (
    <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm">
      <Icon className="w-3.5 h-3.5 text-purple-700" />
      <span>{children}</span>
    </span>
  );
}

export default function SniperMethodPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <FloatingNavbar />

      {/* SECTION 1 — HERO + SECTION 2 — MASTERMIND VIDEO (laptop) */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 md:px-8 bg-white text-stone-900 overflow-hidden border-b border-stone-200 relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-purple-200/40 via-purple-100/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-[11px] tracking-widest uppercase mb-5 shadow-sm">
            <Crosshair className="w-3.5 h-3.5 text-purple-700" />
            <span>Exclusive Personal Injury Mastermind</span>
          </div>

          <h1 className="max-w-4xl text-2xl sm:text-4xl md:text-[44px] font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.12]">
            Discover Hidden Facebook Audiences That Can Help You Generate More{" "}
            <span className="animate-purple-gradient font-hero tracking-tight">Qualified Personal Injury Cases</span>{" "}
            at Up to 50% Lower Advertising Costs.
          </h1>

          {/* Mastermind video inside the laptop mockup (same as home page) */}
          <div id="video" className="w-full mt-8 sm:mt-10 scroll-mt-28">
            <p className="mb-2 inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs font-black uppercase tracking-widest text-stone-600">
              <Play className="w-3.5 h-3.5 fill-purple-700 text-purple-700" />
              Watch the Exclusive Sniper Method Mastermind
              <span className="text-stone-400">·</span>
              <span className="text-purple-700">1 hr 33 min</span>
            </p>
            <MacbookScroll
              embedUrl={MASTERMIND_VIDEO_URL}
              title="The Sniper Method Mastermind"
              className="max-w-3xl my-4"
            />
          </div>

          <p className="mt-6 text-base sm:text-lg font-medium text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re targeting car accidents, motorcycle accidents, 18-wheeler accidents, rideshare accidents, or
            other personal injury cases, discover our exclusive <strong className="text-purple-700">Sniper Method</strong> to
            uncover untapped Facebook audiences.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {caseTypes.map((c) => (
              <span
                key={c}
                className="rounded-full border-2 border-stone-950 bg-white px-3 py-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-stone-900 shadow-sm"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="mt-6 inline-flex items-center gap-2 rounded-2xl border-2 border-stone-950 bg-stone-50 px-4 py-2.5 text-xs sm:text-sm font-bold text-stone-800 shadow-sm text-left">
            <Clock className="w-4 h-4 text-purple-700 shrink-0" />
            <span>
              An exclusive <span className="text-purple-700">1-hour 33-minute</span> mastermind for personal injury law firms,
              agency owners, and agencies running ads for attorneys.
            </span>
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 sm:px-12 sm:py-5 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-base sm:text-xl uppercase tracking-wider transition-all duration-300 shadow-[0_15px_40px_rgba(147,51,234,0.35)] hover:scale-105 active:scale-95 border-2 border-purple-500/40"
            >
              <span>Book Your Call</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </Link>
            <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% Free Strategy Session • Limited Weekly Spots</span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT YOU'LL DISCOVER */}
      <section className="relative overflow-hidden bg-stone-950 text-white py-24 sm:py-28 px-4 md:px-8">
        {/* Ambient glows + grid texture */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-purple-700/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-200 bg-purple-500/15 border border-purple-400/30 px-4 py-2 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>What You&apos;ll Discover</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-hero tracking-tight mt-5 uppercase leading-tight">
              Inside This{" "}
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">
                Exclusive Mastermind
              </span>
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-stone-300">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">6 Core Lessons</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">1 hr 33 min Recording</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Built for PI Advertisers</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {discoverItems.map((item, idx) => {
              const Icon = item.icon;
              const featured = idx === 0;
              return (
                <div
                  key={item.number}
                  className={`group relative overflow-hidden rounded-3xl p-7 sm:p-8 border transition-all duration-300 hover:-translate-y-1.5 ${
                    featured
                      ? "bg-gradient-to-br from-purple-600 to-purple-900 border-purple-400/50 shadow-[0_20px_60px_rgba(147,51,234,0.35)]"
                      : "bg-white/[0.04] border-white/10 hover:border-purple-400/60 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_rgba(147,51,234,0.25)]"
                  }`}
                >
                  {/* Oversized outline number */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-6 font-hero text-[120px] font-black leading-none text-transparent select-none"
                    style={{ WebkitTextStroke: featured ? "1.5px rgba(255,255,255,0.22)" : "1.5px rgba(192,132,252,0.18)" }}
                  >
                    {item.number}
                  </span>

                  <div className="relative flex items-center gap-3 mb-6">
                    <span
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        featured
                          ? "bg-white text-purple-700"
                          : "bg-purple-500/15 border border-purple-400/30 text-purple-300 group-hover:bg-purple-600 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className={`font-mono text-[11px] font-black uppercase tracking-widest ${featured ? "text-purple-100" : "text-purple-300"}`}>
                      Lesson {item.number}
                    </span>
                  </div>

                  <h3 className="relative text-xl sm:text-2xl font-black font-hero tracking-tight mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className={`relative text-sm font-medium leading-relaxed ${featured ? "text-purple-50" : "text-stone-300"}`}>
                    {item.desc}
                  </p>

                  <div
                    className={`relative mt-6 h-px w-full ${featured ? "bg-white/25" : "bg-gradient-to-r from-purple-500/60 via-white/10 to-transparent"}`}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#video"
              className="inline-flex items-center gap-2 rounded-full border-2 border-purple-400/40 bg-white text-stone-950 hover:bg-purple-600 hover:text-white px-7 py-3.5 font-black text-sm uppercase tracking-wider transition-colors"
            >
              <Play className="w-4 h-4" />
              <span>Watch the Mastermind</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY THIS MATTERS */}
      <section className="py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow icon={Target}>Why This Matters</Eyebrow>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight mt-4 uppercase leading-tight">
              Stop Targeting the Same Audiences as{" "}
              <span className="animate-purple-gradient font-hero tracking-tight">Every Other PI Agency.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg font-medium text-stone-700 leading-relaxed">
              Whether you operate a personal injury law firm or manage Facebook Ads for attorneys, finding untapped audience
              opportunities can help you:
            </p>
          </div>

          <ul className="space-y-4">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-4 rounded-2xl border-2 border-stone-950 bg-[#FDFBF7] p-5 shadow-md hover:border-purple-600 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-purple-700 shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg font-bold text-stone-900">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 5 — OUR RESULTS */}
      <div id="results">
        <ResultsSection
          eyebrow="OUR RESULTS"
          title={
            <>
              We Don&apos;t Just Talk About Advertising. <br />
              <span className="font-serif italic lowercase animate-purple-gradient">we deliver results.</span>
            </>
          }
          subtitle="Explore the real advertising performance and client results generated through our campaign strategies."
          hideFeaturedProof
        />
      </div>
      <ClientTestimonialsSection />

      {/* Photo ribbon (same as home page) */}
      <UFSquareMarquee
        heading={
          <>
            MVA Lead{" "}
            <span className="font-serif italic font-normal text-purple-600 lowercase">generation.</span>
          </>
        }
      />

      {/* SECTION 6 — WANT US TO RUN YOUR ADS? (CTA → /contact booking page) */}
      <section id="run-your-ads" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow icon={CalendarCheck}>Want Us to Run Your Ads?</Eyebrow>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight mt-4 uppercase leading-tight">
            Want Our Team to Generate{" "}
            <span className="animate-purple-gradient font-hero tracking-tight">Qualified Personal Injury Leads</span> for You?
          </h2>
          <p className="mt-6 text-base sm:text-lg font-medium text-stone-700 leading-relaxed">
            If you&apos;d rather have experts handle your Facebook Ads, audience research, and campaign optimization, our team
            can help.
          </p>
          <p className="mt-3 text-base sm:text-lg font-bold text-stone-900 leading-relaxed">
            Let us take care of your advertising while you focus on growing your law firm or agency.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-base sm:text-xl uppercase tracking-wider transition-all duration-300 shadow-[0_15px_40px_rgba(147,51,234,0.35)] hover:scale-105 active:scale-95 border-2 border-purple-500/40"
          >
            <span>Let&apos;s Discuss Your Campaigns</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </Link>
        </div>
      </section>

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
