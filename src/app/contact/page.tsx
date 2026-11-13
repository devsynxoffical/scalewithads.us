import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { ResultsSection } from "@/components/redesign/ResultsSection";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { GoogleBookingCalendar } from "@/components/redesign/GoogleBookingCalendar";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = pageMeta({
  title: "Book Your Strategy Call | Scale With Ads™",
  description:
    "Book a free strategy call with the Scale With Ads™ team. We audit your client acquisition, review your offer and map a 90-day growth plan.",
  path: "/contact",
});

const highlights = [
  "100% Free Strategy Session",
  "Custom Creative Hook Breakdown",
  "Written Performance & ROAS Guarantee",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans">
      <FloatingNavbar />

      {/* Book a Call: Hero + Google Calendar booking */}
      <section id="book" className="pt-32 pb-20 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight mt-6 leading-tight uppercase font-hero">
              BOOK YOUR STRATEGY CALL
            </h1>
            <p className="mt-4 text-stone-600 font-medium text-lg leading-relaxed">
              Ready to double your revenue with direct-response video creative and data-anchored media buying? Pick a time
              that works for you below.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-700 flex-shrink-0" />
                  <span className="text-stone-800 text-sm font-bold">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <GoogleBookingCalendar />
        </div>
      </section>

      {/* Proven Track Record Section */}
      <ResultsSection />

      {/* Verified Client Video Testimonials Section */}
      <ClientTestimonialsSection />

      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
