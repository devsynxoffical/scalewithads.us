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
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";

export const metadata = {
  title: "The Sniper Method Mastermind | Hidden Facebook Audiences for Personal Injury",
  description:
    "Discover hidden Facebook audiences that can help personal injury law firms and agencies generate more qualified cases at up to 50% lower advertising costs.",
};

/**
 * Paste the 1h 33m mastermind video URL here.
 * - YouTube/Vimeo embed URL (e.g. https://www.youtube.com/embed/VIDEO_ID) → rendered in an iframe
 * - Direct .mp4 URL → rendered in a <video> player
 * Leave empty to show the "video coming soon" placeholder.
 */
const MASTERMIND_VIDEO_URL = "";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3MmTk94_MhSyjkpFQ6YvKT6tixEbjNfAdSslrScOGWjLTyee2aQlQxetfdPYxk-ZrOXFl_1Ln7?gv=true";

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

function MastermindVideo() {
  if (!MASTERMIND_VIDEO_URL) {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 bg-[#060816] text-center px-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-purple-500/10" />
        <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-purple-600 shadow-[0_0_40px_rgba(168,85,247,0.6)]">
          <Play className="h-9 w-9 fill-white text-white translate-x-0.5" />
        </span>
        <p className="relative font-hero text-lg sm:text-2xl font-black uppercase tracking-tight text-white">
          The Sniper Method Mastermind
        </p>
        <p className="relative font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-200">
          1 hr 33 min · Full Recording
        </p>
      </div>
    );
  }

  if (/\.(mp4|webm|mov)(\?|$)/i.test(MASTERMIND_VIDEO_URL)) {
    return (
      <video
        src={MASTERMIND_VIDEO_URL}
        controls
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <iframe
      src={MASTERMIND_VIDEO_URL}
      title="The Sniper Method Mastermind"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="h-full w-full border-0"
    />
  );
}

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

      {/* SECTION 1 — HERO */}
      <section className="pt-28 sm:pt-36 pb-16 px-4 md:px-8 bg-white text-stone-900 overflow-hidden border-b border-stone-200 relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-purple-200/40 via-purple-100/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-xs tracking-widest uppercase mb-6 shadow-sm">
            <Crosshair className="w-4 h-4 text-purple-700" />
            <span>Exclusive Personal Injury Mastermind</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-stone-950 tracking-tight uppercase font-hero leading-tight">
            Discover Hidden Facebook Audiences That Can Help You Generate More{" "}
            <span className="animate-purple-gradient font-hero tracking-tight">Qualified Personal Injury Cases</span>{" "}
            at Up to 50% Lower Advertising Costs.
          </h1>

          <p className="mt-6 text-base sm:text-lg font-medium text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re targeting car accidents, motorcycle accidents, 18-wheeler accidents, rideshare accidents, or
            other personal injury cases, discover our exclusive <strong className="text-purple-700">Sniper Method</strong> to
            uncover untapped Facebook audiences.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {caseTypes.map((c) => (
              <span
                key={c}
                className="rounded-full border-2 border-stone-950 bg-white px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-stone-900 shadow-sm"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="mt-8 inline-flex items-center gap-2 rounded-2xl border-2 border-stone-950 bg-stone-50 px-5 py-3 text-sm sm:text-base font-bold text-stone-800 shadow-sm">
            <Clock className="w-5 h-5 text-purple-700 shrink-0" />
            <span>
              An exclusive <span className="text-purple-700">1-hour 33-minute</span> mastermind for personal injury law firms,
              agency owners, and agencies running ads for attorneys.
            </span>
          </p>
        </div>
      </section>

      {/* SECTION 2 — EXCLUSIVE MASTERMIND VIDEO */}
      <section id="video" className="py-16 sm:py-20 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <Eyebrow icon={Play}>Exclusive Mastermind Video</Eyebrow>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight mt-4 uppercase leading-tight">
            Watch the Exclusive <span className="animate-purple-gradient font-hero tracking-tight">Sniper Method</span> Mastermind
          </h2>
        </div>

        <div className="relative rounded-[32px] overflow-hidden border-4 border-stone-950 shadow-[0_25px_70px_rgba(147,51,234,0.3)] bg-black aspect-video">
          <MastermindVideo />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 sm:px-14 sm:py-6 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-lg sm:text-2xl uppercase tracking-wider transition-all duration-300 shadow-[0_15px_40px_rgba(147,51,234,0.35)] hover:scale-105 active:scale-95 border-2 border-purple-500/40"
          >
            <span>Book Your Call</span>
            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </a>
          <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% Free Strategy Session • Limited Weekly Spots</span>
          </span>
        </div>
      </section>

      {/* SECTION 3 — WHAT YOU'LL DISCOVER */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-stone-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow>What You&apos;ll Discover</Eyebrow>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight mt-4 uppercase leading-tight">
            Inside This <span className="animate-purple-gradient font-hero tracking-tight">Exclusive Mastermind</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {discoverItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-white rounded-3xl border-2 border-stone-950 p-8 shadow-xl hover:border-purple-600 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(147,51,234,0.18)] transition-all duration-300 flex flex-col group"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-4xl font-black text-purple-700 font-mono">{item.number}</span>
                  <span className="w-11 h-11 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="text-2xl font-black text-stone-950 font-hero tracking-tight mb-3 group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
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
        />
      </div>
      <ClientTestimonialsSection />

      {/* Photo ribbon (same as home page) */}
      <UFSquareMarquee />

      {/* SECTION 6 — WANT US TO RUN YOUR ADS? + BOOKING */}
      <section id="book" className="py-24 px-4 md:px-8 max-w-5xl mx-auto scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto mb-12">
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
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-base sm:text-xl uppercase tracking-wider transition-all duration-300 shadow-[0_15px_40px_rgba(147,51,234,0.35)] hover:scale-105 active:scale-95 border-2 border-purple-500/40"
          >
            <span>Let&apos;s Discuss Your Campaigns</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </a>
        </div>

        {/* Google Calendar Appointment Scheduling */}
        <div className="rounded-[32px] border-4 border-stone-950 bg-white p-2 sm:p-4 shadow-[0_25px_70px_rgba(147,51,234,0.2)]">
          <div className="flex items-center justify-between px-2 pb-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] border border-black/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] border border-black/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] border border-black/15" />
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-100 px-2.5 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider text-purple-950">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-600" />
              Book a Strategy Call
            </span>
          </div>
          <iframe
            src={BOOKING_URL}
            title="Book an appointment"
            className="w-full h-[720px] sm:h-[640px] rounded-2xl border border-stone-200 bg-white"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-center text-xs font-mono font-bold text-stone-500 uppercase tracking-widest">
          Calendar not loading?{" "}
          <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-purple-700 underline">
            Open it in a new tab
          </Link>
        </p>
      </section>

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
