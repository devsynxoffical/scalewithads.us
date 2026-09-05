import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { EditorialSubhero } from "@/components/redesign/EditorialSubhero";
import { TeamSection } from "@/components/redesign/TeamSection";
import { CreativeCtaSection } from "@/components/redesign/CreativeCtaSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import Link from "next/link";
import { ArrowRight, Sparkles, Target, Zap, Award } from "lucide-react";

export const metadata = {
  title: "About Us | ScaleWithAds",
  description: "Learn about the team, philosophy, and performance marketing strategy behind ScaleWithAds.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans">
      <FloatingNavbar />
      
      {/* Page Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full">
            Our Story & Philosophy
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-stone-950 tracking-tight mt-6 leading-tight uppercase font-hero">
            WE ARE SCALEWITHADS
          </h1>
          <p className="mt-4 text-stone-600 font-medium text-lg sm:text-xl max-w-2xl mx-auto">
            A performance marketing powerhouse built for ambitious brands who demand predictable ROAS, direct-response creative, and zero fluff.
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
      <CreativeCtaSection />
      <EditorialFooter />
    </main>
  );
}
