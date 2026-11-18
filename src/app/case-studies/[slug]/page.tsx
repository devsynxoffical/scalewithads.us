import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  Lightbulb,
  Megaphone,
  Quote,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { TrustBarSection } from "@/components/redesign/TrustBarSection";
import { FaqSection } from "@/components/redesign/FaqSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, RelatedResources } from "@/components/seo/RelatedResources";
import { CASE_STUDIES, PLATFORM, getCaseStudy, proofImageSrc } from "@/lib/caseStudies";
import { SITE_NAME, SITE_URL, breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  const base = pageMeta({ title: cs.metaTitle, description: cs.description, path: `/case-studies/${cs.slug}` });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: cs.posted,
      images: [{ url: proofImageSrc(cs.file), alt: `${cs.cardTitle}: client dashboard` }],
    },
  };
}

const fmtDate = (d: string) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

/** Our standard roofing campaign process (same steps as the roofing service page). */
const PROCESS = [
  { icon: Target, title: "Offer & angle", text: "An offer built around what homeowners in the area respond to, such as storm damage, replacements or repairs." },
  { icon: Megaphone, title: "Ads that stop the scroll", text: "Several short video and image ads tested side by side on small budgets." },
  { icon: Settings2, title: "Qualification & follow-up", text: "Qualifying questions on the form and instant SMS and email follow-up into the CRM." },
  { icon: BarChart3, title: "Optimize on results", text: "Budget moved to the ads and audiences producing the cheapest qualified leads and booked jobs." },
];

function SectionHeading({ icon: Icon, children, id }: { icon: typeof Target; children: React.ReactNode; id: string }) {
  return (
    <h2 id={id} className="scroll-mt-32 flex items-center gap-3 text-2xl sm:text-[32px] font-black text-stone-950 tracking-tight leading-tight font-hero">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 border border-purple-200 text-purple-700">
        <Icon className="w-5 h-5" />
      </span>
      {children}
    </h2>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const url = `${SITE_URL}/case-studies/${cs.slug}`;
  const img = proofImageSrc(cs.file);
  const others = CASE_STUDIES.filter((c) => c.slug !== cs.slug);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: cs.title,
          description: cs.description,
          datePublished: cs.posted,
          dateModified: "2026-11-18",
          inLanguage: "en-US",
          mainEntityOfPage: url,
          url,
          image: `${SITE_URL}${img}`,
          keywords: cs.primaryKeyword,
          articleSection: "Case studies",
          about: [cs.industry, PLATFORM],
          author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          publisher: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <JsonLd data={faqJsonLd(cs.faqs)} />
      <JsonLd data={breadcrumbJsonLd([["Case Studies", "/work"], [cs.cardTitle, `/case-studies/${cs.slug}`]])} />
      <FloatingNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-tr from-purple-200/45 via-purple-100/20 to-amber-100/20 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          <div>
            <Breadcrumbs items={[["Home", "/"], ["Case Studies", "/work"], [cs.cardTitle]]} className="mb-5" />
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-extrabold text-[11px] tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-700" /> Case study · {cs.industry}
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-[52px] font-black text-stone-950 tracking-tight font-hero leading-[1.06]">{cs.title}</h1>
            <p className="mt-6 text-[16px] sm:text-lg font-medium text-stone-700 leading-relaxed">{cs.summary}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-stone-950 hover:bg-purple-700 text-white font-black text-sm uppercase tracking-wider shadow-[0_15px_35px_rgba(147,51,234,0.3)] transition-colors">
                Get results like these <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#results" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-stone-950 bg-white hover:bg-stone-50 text-stone-950 font-black text-sm uppercase tracking-wider transition-colors">
                See the numbers
              </a>
            </div>
          </div>

          <figure className="relative">
            <div className="overflow-hidden rounded-3xl border-2 border-stone-950 bg-white shadow-[0_25px_60px_rgba(147,51,234,0.25)] rotate-1">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-stone-200">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-auto font-mono text-[10px] font-bold uppercase tracking-widest text-stone-400">Source dashboard</span>
              </div>
              <img src={img} alt={`${cs.cardTitle}: Meta Ads dashboard screenshot`} width={1360} height={1000} className="w-full h-auto" fetchPriority="high" />
            </div>
            <div className="absolute -bottom-6 left-4 sm:-left-6 rounded-2xl border-2 border-stone-950 bg-stone-950 px-5 py-4 text-white shadow-xl">
              <p className="text-3xl font-black text-purple-300 font-hero">{cs.headline.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-300">{cs.headline.label}</p>
            </div>
          </figure>
        </div>
      </section>

      <TrustBarSection />

      {/* Key results */}
      <section id="results" className="scroll-mt-24 px-4 md:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-center font-mono text-xs font-black uppercase tracking-widest text-purple-700">Key results</p>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {cs.stats.map((s) => (
              <div key={s.label} className="rounded-3xl border-2 border-stone-950 bg-white p-5 sm:p-7 text-center shadow-lg">
                <p className="text-3xl sm:text-4xl font-black text-stone-950 font-hero tracking-tight">{s.value}</p>
                <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body + sidebar */}
      <section className="px-4 md:px-8 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 xl:gap-16">
          <article className="min-w-0 max-w-[740px]">
            <SectionHeading icon={Target} id="challenge">The challenge</SectionHeading>
            {cs.challenge.map((p) => (
              <p key={p} className="mt-5 text-stone-700 text-[17px] sm:text-lg leading-[1.8]">{p}</p>
            ))}

            <div className="mt-14"><SectionHeading icon={Settings2} id="campaign">The campaign</SectionHeading></div>
            <p className="mt-5 text-stone-700 text-[17px] sm:text-lg leading-[1.8]">What the source dashboard shows about how the campaign was set up:</p>
            <ul className="mt-5 space-y-3">
              {cs.setup.map((item) => (
                <li key={item} className="flex gap-3 text-stone-700 text-[17px] leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-purple-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-14"><SectionHeading icon={BarChart3} id="numbers">The results in full</SectionHeading></div>
            <div className="mt-6 overflow-hidden rounded-2xl border-2 border-stone-950 bg-white">
              <table className="w-full text-left text-[15px] sm:text-[16px]">
                <caption className="sr-only">Campaign results for {cs.cardTitle}</caption>
                <tbody>
                  {cs.table.map(([k, v], i) => (
                    <tr key={k} className={i % 2 ? "bg-stone-50" : "bg-white"}>
                      <th scope="row" className="w-1/2 px-4 sm:px-5 py-3.5 font-semibold text-stone-600 align-top">{k}</th>
                      <td className="px-4 sm:px-5 py-3.5 font-black text-stone-950">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-stone-500">Figures read from the client dashboard screenshot below. Past results; they are not a guarantee of future performance.</p>

            <div className="mt-14"><SectionHeading icon={Lightbulb} id="analysis">What the numbers tell us</SectionHeading></div>
            <ul className="mt-6 space-y-4">
              {cs.insights.map((t, i) => (
                <li key={t} className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-5 text-stone-700 text-[16px] sm:text-[17px] leading-relaxed">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-purple-100 border border-purple-200 font-mono text-sm font-black text-purple-700">{i + 1}</span>
                  <span className="pt-0.5">{t}</span>
                </li>
              ))}
            </ul>

            <section aria-labelledby="takeaways" className="mt-14 rounded-3xl border-2 border-stone-950 bg-stone-950 text-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(147,51,234,0.25)]">
              <h2 id="takeaways" className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest text-purple-300">
                <Sparkles className="w-4 h-4" /> Key takeaways
              </h2>
              <ul className="mt-5 space-y-3">
                {cs.takeaways.map((t) => (
                  <li key={t} className="flex gap-3 text-stone-100 text-[16px] sm:text-lg leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-purple-400" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            <figure className="mt-14">
              <SectionHeading icon={ShieldCheck} id="proof">The original post</SectionHeading>
              <blockquote className="mt-6 flex gap-3 rounded-2xl border-l-[6px] border-purple-600 bg-purple-50 p-5 text-stone-800 text-[17px] italic leading-relaxed">
                <Quote className="w-5 h-5 shrink-0 text-purple-600 mt-1" />
                <span>{cs.quote}</span>
              </blockquote>
              <div className="mt-5 overflow-hidden rounded-2xl border-2 border-stone-200 bg-white">
                <img src={img} alt={`Original post and dashboard: ${cs.cardTitle}`} width={1360} height={1000} loading="lazy" className="w-full h-auto" />
              </div>
              <figcaption className="mt-3 text-sm text-stone-500">
                Posted by Vaishali Kapoor, Founder of {SITE_NAME}, on {fmtDate(cs.posted)}.
              </figcaption>
            </figure>
          </article>

          {/* Sidebar */}
          <aside className="lg:block">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="rounded-3xl border-2 border-stone-950 bg-white p-6 shadow-lg">
                <p className="font-mono text-[11px] font-black uppercase tracking-widest text-stone-500">At a glance</p>
                <dl className="mt-4 space-y-4 text-sm">
                  {[
                    [Building2, "Client", cs.client],
                    [Target, "Industry", cs.industry],
                    [CalendarDays, "Period", cs.period],
                    [Megaphone, "Platform", PLATFORM],
                  ].map(([Icon, k, v]) => {
                    const I = Icon as typeof Target;
                    return (
                      <div key={k as string} className="flex gap-3">
                        <I className="w-4 h-4 mt-0.5 shrink-0 text-purple-700" />
                        <div>
                          <dt className="font-bold text-stone-500">{k as string}</dt>
                          <dd className="font-black text-stone-950">{v as string}</dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>
              <div className="rounded-3xl border-2 border-stone-950 bg-stone-950 p-6 text-white">
                <p className="font-mono text-[11px] font-black uppercase tracking-widest text-purple-300">Free strategy call</p>
                <p className="mt-2 text-lg font-black leading-snug">Want numbers like these for your roofing business?</p>
                <Link href="/contact" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 hover:bg-purple-500 px-5 py-3 text-xs font-black uppercase tracking-wider transition-colors">
                  Book a call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <Link href="/facebook-ads-for-roofing-companies" className="group block rounded-3xl border-2 border-purple-200 bg-purple-50 p-5 hover:border-purple-500 transition-colors">
                <p className="font-mono text-[11px] font-black uppercase tracking-widest text-purple-700">Service</p>
                <p className="mt-1.5 font-black text-stone-950 leading-snug group-hover:text-purple-700 transition-colors">Facebook ads for roofing companies</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-purple-700">
                  How we run it <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-stone-950 text-white py-20 sm:py-24 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-700/25 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-5xl font-black tracking-tight uppercase font-hero leading-[1.05]">
            How we run <span className="text-purple-300">campaigns like this</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <div key={p.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/30 border border-purple-400/30 text-purple-200"><p.icon className="w-5 h-5" /></span>
                <p className="mt-5 font-mono text-[11px] font-black uppercase tracking-widest text-purple-300">Step {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1.5 text-lg font-black">{p.title}</h3>
                <p className="mt-2 text-sm text-stone-300 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More case studies */}
      <section className="px-4 md:px-8 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero">
            More <span className="animate-purple-gradient font-hero">case studies</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/case-studies/${o.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border-2 border-stone-950 bg-white shadow-lg hover:-translate-y-1 hover:border-purple-600 hover:shadow-[0_20px_45px_rgba(147,51,234,0.18)] transition-all duration-300"
              >
                <div className="h-40 overflow-hidden border-b-2 border-stone-950 bg-stone-100">
                  <img src={proofImageSrc(o.file)} alt="" loading="lazy" width={1360} height={1000} className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-purple-700">{o.industry}</span>
                  <span className="mt-1.5 font-black text-stone-950 leading-snug group-hover:text-purple-700 transition-colors">{o.cardTitle}</span>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-purple-700">
                    Read case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-[16px] text-stone-600">
            See all 50+ verified dashboards on our <Link href="/work" className="font-bold text-purple-700 underline underline-offset-4">results page</Link>.
          </p>
        </div>
      </section>

      <FaqSection faqs={cs.faqs} eyebrow="Case study FAQ" title={<>Questions about <span className="font-serif italic lowercase animate-purple-gradient">this result.</span></>} />

      <RelatedResources
        items={[
          {
            kind: "Service",
            title: "Facebook ads for roofing companies",
            text: "Roofing offers, video ads, qualification and instant follow-up that book inspections.",
            href: "/facebook-ads-for-roofing-companies",
          },
          {
            kind: "Guide",
            title: "How to find hidden Facebook interests",
            text: "The targeting workflow we use to reach buyers competitors aren't bidding on.",
            href: "/blog/find-hidden-facebook-interests",
          },
          {
            kind: "Case study",
            title: "$847K low-ticket funnel",
            text: "How one Meta Ads funnel turned $255K in ad spend into $847K at a 3.32x ROAS.",
            href: "/metalto",
          },
        ]}
      />

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
