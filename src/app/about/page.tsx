import type { Metadata } from "next";
import { SITE_URL, faqJsonLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/redesign/FaqSection";
import { AnswerBlock } from "@/components/leads/LegalBlocks";
import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { EditorialSubhero } from "@/components/redesign/EditorialSubhero";
import { TeamSection } from "@/components/redesign/TeamSection";
import { CreativeCtaSection } from "@/components/redesign/CreativeCtaSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import Link from "next/link";
import { Target, Zap, Award } from "lucide-react";

export const metadata: Metadata = pageMeta({
  title: "About Scale With Ads: Meta Ads Agency for Law Firms",
  description:
    "Meet the Scale With Ads team, led by Vaishali Kapoor and Gaurav Kapoor: a Meta ads agency for law firms, with published legal campaign results.",
  path: "/about",
});

const FACTS: [string, string][] = [
  ["What we are", "A Meta ads agency that runs Facebook and Instagram campaigns, with screening and intake follow-up built in."],
  ["Who we serve", "Personal injury and other law firms in the United States, plus agencies that advertise for attorneys."],
  ["Case types", "Personal injury, motor vehicle accidents (car, truck, motorcycle, rideshare), workers compensation and mass tort."],
  ["Pricing model", "Firms pay Meta directly for ad spend in their own ad account, plus a management fee scoped on the strategy call."],
  ["Setup time", "Campaigns typically go live 14 to 21 days after the kickoff call."],
  ["Published results", "76 MVA leads in 5 days at $17.13 (Jul 2026), 203 MVA leads in 21 days at $18.69 (Jul 2026), 530 leads in 7 days at $26.93 for a Texas PI firm (Jun 2026)."],
  ["Leadership", "Founded and led by Vaishali Kapoor (Founder) and Gaurav Kapoor (Co-Founder)."],
  ["Compliance", "Every ad and landing page is approved by the client firm against its state bar's advertising rules. Ads never promise case outcomes."],
];

const ABOUT_FAQS = [
  { q: "What is Scale With Ads?", a: "Scale With Ads is a Meta ads agency that runs Facebook and Instagram campaigns for law firms and service businesses, including exclusive personal injury, MVA, mass tort and workers comp leads." },
  { q: "Who founded Scale With Ads?", a: "Scale With Ads was founded by Vaishali Kapoor (Founder) and is co-led by Gaurav Kapoor (Co-Founder)." },
  { q: "Who does Scale With Ads work with?", a: "Mainly personal injury and other law firms in the United States, and agencies that advertise for attorneys. The team also runs Meta ads for coaches, consultants and other high-ticket service businesses." },
  { q: "How does Scale With Ads charge?", a: "Clients pay Meta directly for ad spend in their own ad account, plus a management fee scoped on the strategy call. Leads are not sold per lead and are never shared with other firms." },
  { q: "What results has Scale With Ads published?", a: "Published legal results include 76 MVA leads in 5 days at $17.13 per lead, 203 MVA leads in 21 days at $18.69 and 530 leads in 7 days at $26.93 for a Texas personal injury firm, each shown with a dated dashboard on the results page." },
  { q: "How fast can a campaign launch?", a: "Campaigns typically go live 14 to 21 days after the kickoff call." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", name: "About Scale With Ads", url: `${SITE_URL}/about`, mainEntity: { "@id": `${SITE_URL}/#organization` } }} />
      <JsonLd data={faqJsonLd(ABOUT_FAQS)} />
      <FloatingNavbar />
      
      {/* Page Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full">
            Our Story & Philosophy
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 tracking-tight mt-6 leading-tight uppercase font-hero">
            WE ARE SCALE WITH ADS
          </h1>
          <p className="mt-4 text-stone-600 font-medium text-lg sm:text-xl max-w-2xl mx-auto">
            A Meta ads agency for law firms and service businesses: Facebook and Instagram campaigns, screened leads and fast follow-up, measured on signed cases and booked calls, not clicks.
          </p>
        </div>
      </section>

      <AnswerBlock
        question="What is Scale With Ads?"
        answer="Scale With Ads is a Meta ads agency that runs Facebook and Instagram campaigns for law firms and service businesses, including exclusive personal injury, MVA, mass tort and workers comp leads. Campaigns run in the client's own ad account, every lead is screened, and published results include 530 leads in 7 days for a Texas personal injury firm."
      />

      {/* Key facts */}
      <section aria-labelledby="key-facts" className="pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 id="key-facts" className="text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">Key <span className="animate-purple-gradient font-hero">facts</span></h2>
          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            {FACTS.map(([k, v]) => (
              <div key={k} className="rounded-2xl border-2 border-stone-200 bg-white p-5">
                <dt className="font-mono text-[11px] font-black uppercase tracking-widest text-purple-700">{k}</dt>
                <dd className="mt-1.5 text-[15px] text-stone-700 leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-stone-500">
            See the dashboards behind every result on our <Link href="/work" className="font-bold text-purple-700 underline underline-offset-4">results page</Link>, or start with <Link href="/law-firm-marketing" className="font-bold text-purple-700 underline underline-offset-4">law firm marketing</Link>.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 md:px-8 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border-2 border-stone-900 shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-300 text-purple-900 flex items-center justify-center font-black mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-stone-950 mb-2">Data-Anchored ROAS</h3>
            <p className="text-stone-600 text-sm font-medium leading-relaxed">
              Every dollar spent is tracked through pixel-perfect CAPI setup and first-party attribution. No guessing, just profit.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border-2 border-stone-900 shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center font-black mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-stone-950 mb-2">Viral UGC Creative</h3>
            <p className="text-stone-600 text-sm font-medium leading-relaxed">
              We shoot, edit, and test 30+ ad variations per month to find winning hooks before ad fatigue ever sets in.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border-2 border-stone-900 shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 border border-teal-300 text-teal-900 flex items-center justify-center font-black mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-stone-950 mb-2">Dedicated Media Squad</h3>
            <p className="text-stone-600 text-sm font-medium leading-relaxed">
              You work directly with senior media buyers and creative directors who treat your ad account like their own business.
            </p>
          </div>
        </div>
      </section>

      <EditorialSubhero />
      <TeamSection />
      <FaqSection faqs={ABOUT_FAQS} eyebrow="About Scale With Ads" title={<>Questions about <span className="font-serif italic animate-purple-gradient">who we are.</span></>} />
      <CreativeCtaSection />
      <EditorialFooter />
    </main>
  );
}
