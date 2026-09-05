"use client";

import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { ResultsSection } from "@/components/redesign/ResultsSection";
import { SelectedWorkShowcase } from "@/components/redesign/SelectedWorkShowcase";
import { CommunitySection } from "@/components/redesign/CommunitySection";
import { FaqSection } from "@/components/redesign/FaqSection";
import { CreativeCtaSection } from "@/components/redesign/CreativeCtaSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { Award } from "lucide-react";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      <FloatingNavbar />
      
      {/* Results Hero Header */}
      <section className="pt-36 sm:pt-44 pb-16 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-purple-700" />
            <span>VERIFIED RESULTS & LIVE PROOF</span>
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-stone-950 tracking-tight mt-6 leading-tight uppercase font-hero">
            $50M+ VERIFIED <span className="font-serif italic lowercase animate-purple-gradient">results.</span>
          </h1>
          <p className="mt-4 text-stone-600 font-medium text-lg sm:text-xl max-w-2xl mx-auto font-sans">
            Deep dives into how we scale revenue, reduce cost per acquisition, and multiply ROAS across 20+ industries.
          </p>
        </div>
      </section>

      {/* Verified Video Testimonials */}
      <ClientTestimonialsSection />

      {/* Dynamic Results & Metrics Showcase */}
      <ResultsSection />

      {/* Selected Work Portfolio Showcase */}
      <SelectedWorkShowcase />

      {/* Private Community Section */}
      <CommunitySection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* High-Impact CTA & End Sections */}
      <CreativeCtaSection />
      <LusionEndSection />
      <EditorialFooter />
    </main>
  );
}
