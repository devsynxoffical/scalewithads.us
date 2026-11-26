import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Scale With Ads",
  description: "This page does not exist. Go back to the Scale With Ads homepage or see our law firm marketing and legal lead generation pages.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans flex items-center justify-center px-4 py-24">
      <div className="max-w-xl text-center">
        <p className="font-mono text-xs font-black uppercase tracking-widest text-purple-700">404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-black text-stone-950 uppercase font-hero tracking-tight">Page not found</h1>
        <p className="mt-4 text-[16px] text-stone-600 leading-relaxed">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[["Home", "/"], ["Law firm marketing", "/law-firm-marketing"], ["Personal injury leads", "/personal-injury-lead-generation"], ["Contact", "/contact"]].map(([l, h]) => (
            <Link key={h} href={h} className="rounded-full border-2 border-stone-950 bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wider text-stone-950 hover:bg-purple-50">{l}</Link>
          ))}
        </div>
      </div>
    </main>
  );
}
