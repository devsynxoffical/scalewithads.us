import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clapperboard,
  Filter,
  Hammer,
  Home,
  MessageSquare,
  Sparkles,
  Target,
  XCircle,
} from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { TrustBarSection } from "@/components/redesign/TrustBarSection";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { FaqSection } from "@/components/redesign/FaqSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, RelatedResources, type RelatedItem } from "@/components/seo/RelatedResources";
import type { Faq } from "@/lib/faqs";
import { SITE_URL, breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const PATH = "/facebook-ads-for-roofing-companies";

export const metadata: Metadata = pageMeta({
  title: "Facebook Ads for Roofing Companies | Roofing Leads",
  description:
    "Done-for-you Facebook ads for roofing companies: roofing offers, video ads, lead qualification and instant follow-up that turn ad spend into booked inspections.",
  path: PATH,
});

const proof = (file: string) => `/workproof/${encodeURIComponent(`Screenshot ${file}.webp`)}`;

/**
 * Roofing results, quoted from the captions of our own published client posts.
 * Each entry shows the original screenshot it comes from (already used on /work).
 */
const results = [
  {
    stat: "$127,500",
    label: "in roofing installs in 63 days",
    quote: "Right now, we're running ads for a roofing company in Dallas…",
    posted: "Posted 19 February",
    img: proof("2026-08-17 at 6.00.34 PM"),
  },
  {
    stat: "$111,000",
    label: "generated in 31 days",
    quote: "We recently helped a Florida based roofing client generate $111,000 in 31 days, built from the ground up…",
    posted: "Posted 12 February",
    img: proof("2026-08-17 at 6.02.58 PM"),
  },
  {
    stat: "$77,000",
    label: "closed in 30 days",
    quote: "Meta ads → Roofing funnel → Booked jobs. $77,000 closed in 30 days for a Texas roofing company…",
    posted: "Posted 10 February",
    img: proof("2026-08-17 at 6.03.13 PM"),
  },
  {
    stat: "1,480 leads",
    label: "at $4.77 per lead",
    quote: "From Oct to Feb, we generated 1,480 leads at $4.77 per lead with a $26.77 CPM…",
    posted: "Posted 15 February",
    img: proof("2026-08-17 at 6.02.06 PM"),
  },
  {
    stat: "295 leads",
    label: "from $6,662 in ad spend",
    quote: "Spent $6,662, generated 295 verified leads. Roofing campaigns in Florida…",
    posted: "Posted 13 February",
    img: proof("2026-08-17 at 6.02.37 PM"),
  },
  {
    stat: "227 leads",
    label: "at $14 cost per lead in 28 days",
    quote: "227 verified roofing leads generated at just $14 CPL in 28 days.",
    posted: "Posted 29 May",
    img: proof("2026-08-17 at 5.55.25 PM"),
  },
];

const steps = [
  {
    icon: Target,
    title: "Roofing offer & angle",
    desc: "We build the offer around what homeowners in your area actually respond to, such as storm damage, full replacements or repairs, and the message that makes them book.",
  },
  {
    icon: Clapperboard,
    title: "Video ads that stop the scroll",
    desc: "Short-form roofing video ads and creatives, refreshed as they fatigue. See examples in our media library's roofing category.",
  },
  {
    icon: Filter,
    title: "Qualification before the call",
    desc: "Questions about homeownership, the roof's condition and timeline, and the property's location filter out inquiries your team can't use.",
  },
  {
    icon: MessageSquare,
    title: "Instant follow-up",
    desc: "Every new lead gets an immediate SMS and email reply and lands in your CRM, so no one waits hours for a callback.",
  },
  {
    icon: CalendarCheck,
    title: "Optimize on booked jobs",
    desc: "We track inspections booked and jobs closed, not just leads, and move budget toward the ads and audiences that produce revenue.",
  },
];

const faqs: Faq[] = [
  {
    q: "Do Facebook ads work for roofing companies?",
    a: "They can, when the offer, creative, qualification and follow-up work together. Our published roofing results include $127,500 in installs in 63 days for a Dallas roofer and $77,000 closed in 30 days for a Texas roofing company. Results vary by market, offer and how quickly leads are followed up.",
  },
  {
    q: "How much do roofing leads cost on Facebook?",
    a: "It depends on your market, offer and creative. In the roofing campaigns we've published, cost per lead ranged from about $4.77 to about $23 (for example 1,480 leads at $4.77, 227 leads at $14 and 295 leads for $6,662). These are past results, not a guarantee.",
  },
  {
    q: "Are the roofing leads exclusive to my company?",
    a: "Yes. Campaigns run in your own ad account and send inquiries straight to your team, so every lead is generated for your company alone and is never resold.",
  },
  {
    q: "Do you work with roofing marketing agencies?",
    a: "Yes. We work with agencies that sell marketing to roofers as well as roofing companies directly. One roofing marketing agency we work with posted $546,000 and 152 deals in 67 days.",
  },
  {
    q: "How long does it take to launch?",
    a: "Onboarding and the system build typically take 14 to 21 days from the kickoff call to live campaigns.",
  },
  {
    q: "Do we own the ad account, creatives and data?",
    a: "Yes. Every asset we build, including ads, landing pages, CRM sequences and lead data, belongs 100% to your company with no lock-in.",
  },
];

const RELATED: RelatedItem[] = [
  {
    kind: "Service",
    title: "Exclusive roofing leads",
    text: "Roofing leads only your company gets, with a budget-to-inspections estimator.",
    href: "/roofing-leads",
  },
  {
    kind: "Service",
    title: "Personal injury lead generation",
    text: "The same exclusive-lead system, built for personal injury and MVA law firms.",
    href: "/personal-injury-lead-generation",
  },
  {
    kind: "Case study",
    title: "$546K in 67 days for a roofing agency",
    text: "How a roofing marketing agency closed 152 deals from its Meta Ads pipeline.",
    href: "/case-studies/roofing-marketing-agency-546k-revenue",
  },
];

export default function RoofingPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Facebook Ads for Roofing Companies",
          serviceType: "Facebook and Instagram advertising and lead generation for roofing contractors",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "United States" },
          audience: { "@type": "BusinessAudience", name: "Roofing companies and roofing marketing agencies" },
          url: `${SITE_URL}${PATH}`,
          description:
            "Done-for-you Meta Ads for roofing companies: offer and creative, lead qualification, instant SMS and email follow-up, and optimization on booked inspections and closed jobs.",
        }}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd([["Services", "/services"], ["Facebook Ads for Roofing Companies", PATH]])} />
      <FloatingNavbar />

      {/* 1. Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 md:px-8 bg-white">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-tr from-purple-200/45 via-purple-100/20 to-amber-100/20 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <Breadcrumbs items={[["Home", "/"], ["Services", "/services"], ["Facebook Ads for Roofing Companies"]]} className="mb-5 flex justify-center lg:justify-start" />
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-[11px] tracking-widest uppercase shadow-sm">
              <Home className="w-3.5 h-3.5 text-purple-700" /> For roofing companies & roofing agencies
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-[56px] font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">
              Facebook Ads for{" "}
              <span className="animate-purple-gradient font-hero tracking-tight">Roofing Companies</span>
            </h1>
            <p className="mt-6 text-[16px] sm:text-lg font-medium text-stone-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We build and run Meta Ads for roofing contractors: the offer, the video ads, lead qualification and instant follow-up, so your team gets <strong className="text-stone-950">booked inspections instead of junk leads</strong>.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-sm sm:text-[16px] uppercase tracking-wider transition-all duration-300 shadow-[0_15px_40px_rgba(147,51,234,0.35)] hover:scale-105 border-2 border-purple-500/40"
              >
                Book a free strategy call <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/medialibrary"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-stone-950 bg-white hover:bg-purple-50 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-colors"
              >
                <Clapperboard className="w-4 h-4" /> See roofing ad creatives
              </Link>
            </div>
            <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-left max-w-2xl mx-auto lg:mx-0">
              {["Exclusive leads", "You own every asset", "Live in 14–21 days"].map((t) => (
                <li key={t} className="flex items-center gap-2 rounded-xl border border-stone-200 bg-white/80 px-3 py-2.5 text-sm font-bold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Featured proof */}
          <figure className="relative">
            <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-purple-500/25 via-fuchsia-400/15 to-amber-300/15 rounded-[40px] blur-2xl" />
            <div className="relative rounded-[28px] border-2 border-stone-950 bg-white p-4 sm:p-5 shadow-2xl rotate-1">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="font-mono text-[10px] font-black uppercase tracking-widest text-stone-400">Live client post</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={results[0].img}
                alt="Client post: $127,500 in roofing installs in 63 days for a Dallas roofing company"
                width={1354}
                height={1216}
                className="w-full rounded-2xl border border-stone-200 object-cover object-top aspect-[4/3]"
              />
              <figcaption className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-stone-950 px-4 py-3 text-white">
                <span className="font-hero text-2xl font-black text-purple-300">$127,500</span>
                <span className="text-xs font-bold text-stone-300 text-right">in roofing installs in 63 days · Dallas</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <TrustBarSection />

      {/* 2. Results from published posts */}
      <section className="py-20 sm:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2">
              <BadgeCheck className="w-3.5 h-3.5" /> Roofing results
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight uppercase leading-tight">
              Roofing Campaigns, <span className="animate-purple-gradient font-hero">Real Numbers</span>
            </h2>
            <p className="mt-4 text-stone-600 text-[16px] sm:text-lg font-medium">
              Each result below is quoted from one of our own client posts, shown next to the dashboard screenshot it came from.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((r) => (
              <figure key={r.stat + r.label} className="group overflow-hidden rounded-3xl border-2 border-stone-950 bg-white shadow-lg hover:-translate-y-1.5 hover:border-purple-600 hover:shadow-[0_20px_45px_rgba(147,51,234,0.18)] transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden border-b-2 border-stone-950 bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.img} alt={`Client post: ${r.stat} ${r.label}`} loading="lazy" decoding="async" className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <figcaption className="p-6">
                  <p className="font-hero text-3xl font-black text-purple-800 tracking-tight">{r.stat}</p>
                  <p className="mt-1 text-sm font-black uppercase tracking-wide text-stone-950">{r.label}</p>
                  <blockquote className="mt-3 text-sm text-stone-600 font-medium leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                  <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-wider text-stone-500">{r.posted}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-center font-bold text-stone-700">
            See all 50+ verified dashboards on our <Link href="/work" className="text-purple-700 underline underline-offset-4">results page</Link>.
          </p>
        </div>
      </section>

      {/* 3. Problem */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight uppercase leading-tight">
              Most Roofers Don&apos;t Have a Lead Problem. <span className="animate-purple-gradient font-hero">They Have a Lead-Quality Problem.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="rounded-3xl border-2 border-stone-300 bg-stone-50 p-7 sm:p-8">
              <p className="text-sm font-black uppercase tracking-wider text-stone-500">What usually goes wrong</p>
              <ul className="mt-5 space-y-4 text-stone-600 font-medium">
                {[
                  "Shared or bought leads that several roofers are calling at once",
                  "Renters and out-of-area inquiries mixed in with real homeowners",
                  "Leads that wait hours for a callback and go cold",
                  "Campaigns judged on cost per lead instead of jobs closed",
                ].map((t) => (
                  <li key={t} className="flex gap-3"><XCircle className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border-2 border-stone-950 bg-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(147,51,234,0.18)]">
              <p className="text-sm font-black uppercase tracking-wider text-purple-700">How we run roofing campaigns</p>
              <ul className="mt-5 space-y-4 text-stone-800 font-semibold">
                {[
                  "Exclusive leads from ads in your own account",
                  "Qualifying questions before anyone reaches your team",
                  "Instant SMS and email follow-up on every inquiry",
                  "Budget moved toward what books inspections and closes jobs",
                ].map((t) => (
                  <li key={t} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How it works (dark band) */}
      <section className="relative overflow-hidden bg-stone-950 text-white py-24 sm:py-28 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-purple-700/25 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-200 bg-purple-500/15 border border-purple-400/30 px-4 py-2 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" /> How it works
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-black font-hero tracking-tight uppercase leading-tight">
              From Facebook Ad to{" "}
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">Booked Roofing Job</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`group relative overflow-hidden rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1.5 ${
                  i === 0
                    ? "bg-gradient-to-br from-purple-600 to-purple-900 border-purple-400/50 shadow-[0_20px_60px_rgba(147,51,234,0.35)]"
                    : "bg-white/[0.04] border-white/10 hover:border-purple-400/60 hover:bg-white/[0.07]"
                }`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 font-hero text-[110px] font-black leading-none text-transparent select-none"
                  style={{ WebkitTextStroke: i === 0 ? "1.5px rgba(255,255,255,0.22)" : "1.5px rgba(192,132,252,0.18)" }}
                >
                  0{i + 1}
                </span>
                <span className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${i === 0 ? "bg-white text-purple-700" : "bg-purple-500/15 border border-purple-400/30 text-purple-300"}`}>
                  <Icon className="w-5 h-5" />
                </span>
                <p className={`relative mt-5 font-mono text-[11px] font-black uppercase tracking-widest ${i === 0 ? "text-purple-100" : "text-purple-300"}`}>Step 0{i + 1}</p>
                <h3 className="relative mt-2 text-xl font-black tracking-tight">{title}</h3>
                <p className={`relative mt-2 text-sm font-medium leading-relaxed ${i === 0 ? "text-purple-50" : "text-stone-300"}`}>{desc}</p>
              </div>
            ))}
            <div className="rounded-3xl border-2 border-dashed border-purple-400/40 bg-purple-500/10 p-7 flex flex-col justify-center">
              <p className="font-mono text-[11px] font-black uppercase tracking-widest text-purple-300">See the creative</p>
              <p className="mt-2 text-lg font-black leading-snug">Roofing video ads we&apos;ve produced for clients</p>
              <Link href="/medialibrary" className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-white text-stone-950 hover:bg-purple-100 px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-colors">
                Open the media library <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Who it's for */}
      <section className="py-20 sm:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl sm:text-5xl font-black text-stone-950 font-hero tracking-tight uppercase leading-tight">
            Who It&apos;s <span className="animate-purple-gradient font-hero">For</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border-2 border-stone-950 bg-white p-8 shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-950 text-white"><Hammer className="w-6 h-6" /></span>
              <h3 className="mt-5 text-2xl font-black text-stone-950 tracking-tight">Roofing companies</h3>
              <p className="mt-3 text-stone-600 font-medium leading-relaxed">
                Contractors who want a steady flow of qualified homeowner inquiries for inspections, repairs and replacements, without relying on shared lead lists.
              </p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-purple-700 hover:text-stone-950">
                Book a strategy call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-3xl border-2 border-stone-950 bg-white p-8 shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-700 text-white"><Target className="w-6 h-6" /></span>
              <h3 className="mt-5 text-2xl font-black text-stone-950 tracking-tight">Roofing marketing agencies</h3>
              <p className="mt-3 text-stone-600 font-medium leading-relaxed">
                Agencies that sell marketing to roofers and need a system that delivers for their clients. One agency we work with posted $546,000 and 152 deals in 67 days.
              </p>
              <Link href="/privatemastermind" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-purple-700 hover:text-stone-950">
                See the private mastermind <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ClientTestimonialsSection />

      <FaqSection
        faqs={faqs}
        eyebrow="Roofing ads FAQ"
        title={
          <>
            Questions From <span className="font-serif italic lowercase animate-purple-gradient">roofers.</span>
          </>
        }
      />

      <RelatedResources items={RELATED} />

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
