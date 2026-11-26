import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car, CheckCircle2, Crosshair, Filter, Search, Shuffle, Users } from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { TrustBarSection } from "@/components/redesign/TrustBarSection";
import { SelectedWorkShowcase } from "@/components/redesign/SelectedWorkShowcase";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { FaqSection } from "@/components/redesign/FaqSection";
import UFSquareMarquee from "@/components/redesign/UFSquareMarquee";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/RelatedResources";
import { LeadForm } from "@/components/leads/LeadForm";
import { LegalProofSection } from "@/components/leads/LegalProofSection";
import { AnswerBlock } from "@/components/leads/LegalBlocks";
import { LEGAL_FORM_NOTE } from "@/components/leads/LegalLeadPage";
import { VimeoFacade } from "@/components/leads/VimeoFacade";
import { SITE_URL, breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

const PATH = "/private-mastermind/personal-injury-facebook-ads";
const VIMEO_ID = "1245761641";
const POSTER = "/images/mastermind/personal-injury-sniper-method.jpg";
const VIDEO_TITLE = "Personal Injury Facebook Ads: Sniper Method Mastermind";
const DESCRIPTION =
  "Sniper Method mastermind for PI law firms and agencies: find hidden Facebook audiences for car, motorcycle, 18-wheeler and rideshare accident cases.";

export const metadata: Metadata = {
  ...pageMeta({ title: "Personal Injury Facebook Ads: Sniper Method Mastermind", description: DESCRIPTION, path: PATH }),
  openGraph: {
    title: "Personal Injury Facebook Ads: Sniper Method Mastermind",
    description: DESCRIPTION,
    url: PATH,
    type: "website",
    images: [{ url: POSTER, width: 1280, height: 720, alt: VIDEO_TITLE }],
  },
};

const LESSONS = [
  { icon: Crosshair, title: "The Sniper Method", text: "How to uncover hidden Facebook interest-targeting opportunities most advertisers never look for." },
  { icon: Users, title: "Untapped audiences", text: "Finding audience segments that sit beyond the usual legal and insurance interests." },
  { icon: Filter, title: "Up to 50% narrower targeting", text: "Removing irrelevant interests so every audience stays tight and focused on likely claimants." },
  { icon: Car, title: "Accident-victim audience research", text: "Targeting opportunities for car, motorcycle, 18-wheeler and rideshare accident cases." },
  { icon: Shuffle, title: "Cross-niche application", text: "Using the same research method across other personal injury campaigns and case types." },
  { icon: Search, title: "Competitive audience research", text: "Spotting new opportunities instead of bidding on the same audiences as every other firm." },
];

const BENEFITS = [
  "Generate more relevant potential case inquiries.",
  "Find new audience segments your competitors miss.",
  "Cut wasted ad spend on irrelevant targeting.",
  "Build more focused campaigns for each case type.",
  "Gain an edge in crowded personal injury markets.",
];

const FAQS = [
  { q: "What is the Sniper Method?", a: "The Sniper Method is our audience research process for Facebook and Instagram ads. Instead of targeting the same broad legal and insurance interests every other firm uses, it finds hidden interests connected to the people most likely to need a personal injury attorney, then removes irrelevant ones so the audience stays focused." },
  { q: "Who is this mastermind for?", a: "Personal injury law firms, agency owners and agencies running Facebook ads for attorneys, whether you run your own firm's campaigns or manage campaigns for several firms." },
  { q: "Which personal injury case types does it cover?", a: "Car accidents, motorcycle accidents, 18-wheeler and truck accidents and rideshare accidents, plus how to apply the same research method to other personal injury campaigns." },
  { q: "How long is the mastermind?", a: "The recording is 1 hour 33 minutes, and you can watch it on this page." },
  { q: "Can Facebook ads for personal injury use interest targeting?", a: "Yes. Legal services are not one of Meta's Special Ad Categories, so detailed interest targeting is available. Ads still have to follow Meta's advertising standards and your state bar's attorney advertising rules." },
  { q: "Will this guarantee lower advertising costs?", a: "No. Narrower, more relevant targeting can lower cost per lead, in some campaigns by up to 50%, but results depend on your market, offer, creative, intake speed and budget." },
  { q: "Can your team run our Facebook ads instead?", a: "Yes. If you would rather have our team handle audience research, campaigns and optimization, book a call and we will discuss your campaigns. See our Facebook ads for lawyers service for how we work." },
];

const H2 = "text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]";
const CHIP = "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase";
const A = "font-bold text-purple-700 underline underline-offset-4";

export default function PersonalInjuryFacebookAdsMastermindPage() {
  const url = `${SITE_URL}${PATH}`;
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          "@id": `${url}#course`,
          name: "Sniper Method Mastermind: Facebook Ads for Personal Injury",
          description: DESCRIPTION,
          url,
          provider: { "@id": `${SITE_URL}/#organization` },
          inLanguage: "en",
          image: `${SITE_URL}${POSTER}`,
          teaches: LESSONS.map((l) => l.title),
          video: {
            "@type": "VideoObject",
            name: VIDEO_TITLE,
            description: "A 1-hour 33-minute mastermind on finding hidden Facebook audiences for personal injury cases (car, motorcycle, 18-wheeler and rideshare accidents) with the Sniper Method.",
            thumbnailUrl: `${SITE_URL}${POSTER}`,
            uploadDate: "2026-11-11",
            duration: "PT1H33M56S",
            embedUrl: `https://player.vimeo.com/video/${VIMEO_ID}`,
            url,
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
        }}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd data={breadcrumbJsonLd([["Private Mastermind", "/private-mastermind"], ["Personal Injury Facebook Ads", PATH]])} />
      <FloatingNavbar />

      {/* Hero + video */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-14 px-4 md:px-8 bg-white">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-tr from-purple-200/45 via-purple-100/20 to-amber-100/15 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto text-center">
          <Breadcrumbs items={[["Home", "/"], ["Private Mastermind", "/private-mastermind"], ["Personal Injury Facebook Ads"]]} className="mb-5 flex justify-center" />
          <span className={CHIP}><Crosshair className="w-3.5 h-3.5" /> Sniper Method mastermind</span>
          <h1 className="mt-5 text-2xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.08]">
            Discover hidden Facebook audiences that can help you generate more{" "}
            <span className="animate-purple-gradient font-hero">qualified personal injury cases</span> at up to 50% lower advertising costs
          </h1>
          <div id="video" className="mx-auto mt-8 max-w-4xl scroll-mt-28">
            <VimeoFacade videoId={VIMEO_ID} title={VIDEO_TITLE} poster={POSTER} durationLabel="1:33:56" />
            <p className="mt-3 font-mono text-[11px] font-black uppercase tracking-widest text-purple-700">Watch the Sniper Method mastermind</p>
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-[16px] sm:text-lg text-stone-600 leading-relaxed">
            Whether you target car accidents, motorcycle accidents, 18-wheeler accidents, rideshare accidents or other personal injury cases, the Sniper Method shows you how to find Facebook audiences other firms are not bidding on.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm font-bold text-stone-800">
            A 1-hour 33-minute mastermind for personal injury law firms, agency owners and agencies running ads for attorneys.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-stone-950 hover:bg-purple-700 px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition-colors">
              Let&apos;s discuss your campaigns <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#discover" className="inline-flex items-center gap-2 rounded-full border-2 border-stone-950 bg-white hover:bg-purple-50 px-7 py-3.5 text-xs font-black uppercase tracking-wider text-stone-950">
              What you&apos;ll discover
            </a>
          </div>
          <ul className="mx-auto mt-9 grid max-w-2xl grid-cols-3 gap-3">
            {[["1h 33m", "Mastermind"], ["4", "Accident case types"], ["6", "Core lessons"]].map(([v, l]) => (
              <li key={l} className="rounded-2xl border-2 border-stone-950 bg-white px-3 py-4 shadow-sm">
                <span className="block text-2xl sm:text-3xl font-black text-purple-700 font-hero">{v}</span>
                <span className="mt-1 block text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-stone-500">{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AnswerBlock
        question="What is the Sniper Method mastermind?"
        answer="The Sniper Method mastermind is a 1-hour 33-minute session for personal injury law firms and agencies running ads for attorneys. It shows how to find hidden Facebook audiences for car, motorcycle, 18-wheeler and rideshare accident cases, so your campaigns stop competing for the same audiences as every other firm."
      />

      <TrustBarSection />

      {/* What you'll discover */}
      <section id="discover" className="scroll-mt-24 py-20 sm:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className={CHIP}>What you&apos;ll discover</span>
            <h2 className={`mt-5 ${H2}`}>Inside this <span className="animate-purple-gradient font-hero">exclusive mastermind</span></h2>
          </div>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LESSONS.map((l, i) => (
              <li key={l.title} className="group relative rounded-3xl border-2 border-stone-950 bg-white p-6 shadow-lg hover:-translate-y-1 hover:border-purple-600 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors"><l.icon className="w-5 h-5" /></span>
                  <span className="font-mono text-sm font-black text-purple-300">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 text-lg font-black text-stone-950">{l.title}</h3>
                <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{l.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className={CHIP}>Why this matters</span>
            <h2 className={`mt-5 ${H2}`}>Stop targeting the same audiences as <span className="animate-purple-gradient font-hero">every other PI agency</span></h2>
            <p className="mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed">
              Whether you run a personal injury law firm or manage Facebook ads for attorneys, finding untapped audiences can help you:
            </p>
            <p className="mt-5 text-sm text-stone-600 leading-relaxed">
              See how we apply it in our <Link href="/exclusive-mva-leads" className={A}>exclusive MVA leads</Link> and <Link href="/personal-injury-lead-generation" className={A}>personal injury lead generation</Link> campaigns, or read the written guide to <Link href="/blog/find-hidden-facebook-interests" className={A}>finding hidden Facebook interests</Link>.
            </p>
          </div>
          <ul className="space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-[#FAF8F4] px-5 py-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" />
                <span className="text-[15px] font-semibold text-stone-800 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LegalProofSection title="Our results: real legal campaigns" subtitle="Real Meta ads dashboards from our personal injury and MVA campaigns: 76 MVA leads in 5 days, 203 MVA leads in 21 days and 530 leads in 7 days for a Texas personal injury firm. Click a result to see the dashboard." />

      <SelectedWorkShowcase />

      <ClientTestimonialsSection />

      <FaqSection faqs={FAQS} eyebrow="Questions, answered" title={<>Sniper Method mastermind <span className="font-serif italic animate-purple-gradient">FAQ.</span></>} />

      {/* Want us to run your ads? */}
      <section id="get-leads" className="scroll-mt-24 relative overflow-hidden py-20 sm:py-28 px-4 md:px-8 bg-gradient-to-br from-purple-800 via-purple-900 to-stone-950 text-white">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-fuchsia-400/25 blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-widest text-purple-200">Want us to run your ads?</p>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight uppercase font-hero leading-[1.05]">Want our team to generate qualified personal injury leads for you?</h2>
            <p className="mt-5 text-[16px] sm:text-lg text-purple-100 leading-relaxed">
              If you would rather have experts handle your Facebook ads, audience research and campaign optimization, our team can help, so you can focus on growing your law firm or agency. See <Link href="/facebook-ads-for-lawyers" className="font-bold text-white underline underline-offset-4">Facebook ads for lawyers</Link>.
            </p>
            <ul className="mt-6 space-y-2">
              {["Personal injury and MVA campaigns", "For law firms and agencies"].map((t) => (
                <li key={t} className="flex gap-3 text-[16px] text-purple-50"><CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-purple-300" />{t}</li>
              ))}
            </ul>
          </div>
          <LeadForm industry="Personal injury (Sniper Method mastermind)" title="Let's discuss your campaigns" companyLabel="Law firm or agency" submitLabel="Send my request"
            subtitle={`Tell us about your firm or agency. We reply within one business day. ${LEGAL_FORM_NOTE}`} />
        </div>
      </section>

      <UFSquareMarquee />
      <EditorialFooter />
    </main>
  );
}
