import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, LineChart, type LucideIcon } from "lucide-react";

export type RelatedItem = {
  kind: "Guide" | "Service" | "Case study";
  title: string;
  text: string;
  href: string;
};

const KIND: Record<RelatedItem["kind"], { icon: LucideIcon; chip: string }> = {
  Guide: { icon: BookOpen, chip: "bg-purple-100 text-purple-800 border-purple-200" },
  Service: { icon: Briefcase, chip: "bg-stone-950 text-white border-stone-950" },
  "Case study": { icon: LineChart, chip: "bg-amber-100 text-amber-900 border-amber-200" },
};

/**
 * "Related guides & services" card grid: contextual internal links between
 * service pages, case studies and blog guides.
 */
export function RelatedResources({
  eyebrow = "Keep exploring",
  title = "Related guides &",
  accent = "services",
  items,
}: {
  eyebrow?: string;
  title?: string;
  accent?: string;
  items: RelatedItem[];
}) {
  return (
    <section aria-labelledby="related-resources" className="py-20 sm:py-24 px-4 md:px-8 border-t border-stone-200 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 font-mono font-black text-[11px] tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5 text-purple-700" /> {eyebrow}
          </span>
          <h2 id="related-resources" className="mt-5 text-3xl sm:text-5xl font-black text-stone-950 tracking-tight uppercase font-hero leading-[1.05]">
            {title} <span className="animate-purple-gradient font-hero">{accent}</span>
          </h2>
        </div>
        <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${items.length >= 3 ? "lg:grid-cols-3" : ""}`}>
          {items.map((item) => {
            const k = KIND[item.kind];
            const Icon = k.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-3xl border-2 border-stone-950 bg-white p-6 shadow-lg hover:-translate-y-1 hover:border-purple-600 hover:shadow-[0_20px_45px_rgba(147,51,234,0.18)] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 border border-purple-200 text-purple-700">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className={`rounded-full border px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest ${k.chip}`}>
                    {item.kind}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-black text-stone-950 leading-snug group-hover:text-purple-700 transition-colors">{item.title}</h3>
                <p className="mt-2 flex-1 text-[15px] text-stone-600 leading-relaxed">{item.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-purple-700">
                  {item.kind === "Guide" ? "Read the guide" : item.kind === "Case study" ? "See the case study" : "View the service"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Small visible breadcrumb that mirrors the BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items, className = "" }: { items: [string, string?][]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs font-bold text-stone-500 ${className}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map(([label, href], i) => (
          <li key={label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {href ? (
              <Link href={href} className="hover:text-purple-700">{label}</Link>
            ) : (
              <span aria-current="page" className="text-stone-400">{label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
