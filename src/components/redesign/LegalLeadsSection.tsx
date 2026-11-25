import Link from "next/link";
import { ArrowRight, Car, Gavel, HardHat, Pill, Scale, Users } from "lucide-react";

const ITEMS = [
  { icon: Gavel, title: "Exclusive MVA leads", text: "Motor vehicle accident leads only your firm gets.", href: "/exclusive-mva-leads" },
  { icon: Car, title: "Car accident leads", text: "Auto accident inquiries screened for fault and injury.", href: "/car-accident-leads" },
  { icon: HardHat, title: "Workers comp leads", text: "Injured workers screened for work injury and claim status.", href: "/workers-comp-leads" },
  { icon: Pill, title: "Mass tort leads", text: "Claimants screened against your tort criteria.", href: "/mass-tort-leads" },
  { icon: Scale, title: "Personal injury lead generation", text: "The full done-for-you system for PI firms.", href: "/personal-injury-lead-generation" },
  { icon: Users, title: "Facebook ads for lawyers", text: "Meta Ads for every practice area.", href: "/facebook-ads-for-lawyers" },
];

/** Home-page band linking to the legal lead generation pages. */
export function LegalLeadsSection() {
  return (
    <section aria-labelledby="legal-leads" className="py-20 sm:py-24 px-4 md:px-8 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase">
            <Scale className="w-3.5 h-3.5" /> For law firms
          </span>
          <h2 id="legal-leads" className="mt-5 text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">
            Lead generation for <span className="animate-purple-gradient font-hero">law firms</span>
          </h2>
          <p className="mt-5 text-[16px] sm:text-lg text-stone-600 leading-relaxed">
            Exclusive case inquiries from Meta Ads run in your firm&apos;s own ad account, including 530 leads in 7 days for a Texas personal injury firm.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="group flex gap-4 rounded-3xl border-2 border-stone-950 bg-white p-5 shadow-lg hover:-translate-y-1 hover:border-purple-600 transition-all duration-300"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                <i.icon className="w-5 h-5" />
              </span>
              <span>
                <span className="block font-black text-stone-950 group-hover:text-purple-700 transition-colors">{i.title}</span>
                <span className="mt-1 block text-sm text-stone-600 leading-relaxed">{i.text}</span>
                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-purple-700">
                  Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-stone-200 bg-[#FAF8F4] px-5 py-5 text-center">
          <p className="font-mono text-[11px] font-black uppercase tracking-widest text-stone-500">Markets we serve</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {[
              ["Law firm marketing", "/law-firm-marketing"],
              ["Florida", "/law-firm-marketing/florida"],
              ["Miami", "/law-firm-marketing/miami-fl"],
              ["Chicago", "/law-firm-marketing/chicago-il"],
              ["Los Angeles", "/law-firm-marketing/los-angeles-ca"],
              ["Philadelphia", "/law-firm-marketing/philadelphia-pa"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="rounded-full border-2 border-stone-200 bg-white px-4 py-2 text-xs font-black text-stone-700 hover:border-purple-600 hover:text-purple-700 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
