"use client";

import React from "react";
import { X, Check } from "lucide-react";

export function ComparisonSection() {
  const comparisonData = [
    { feature: "Primary Focus", traditional: "Runs Ads Only", scaleWithAds: "Complete Client Acquisition System" },
    { feature: "Lead Quality", traditional: "Unqualified Leads", scaleWithAds: "Premium Multi-Validated Clients" },
    { feature: "Nurture & Follow-Up", traditional: "Limited / Manual", scaleWithAds: "AI Follow-Up & SMS Automations" },
    { feature: "Infrastructure", traditional: "No CRM Included", scaleWithAds: "Full CRM Setup Included" },
    { feature: "System Automation", traditional: "No Automation", scaleWithAds: "Full Automated Ecosystem" },
    { feature: "Asset Ownership", traditional: "Agency Owned / Locked", scaleWithAds: "100% You Own Everything" },
    { feature: "Accountability", traditional: "No Revenue Guarantee", scaleWithAds: "90-Day Written Revenue Guarantee" },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-[#FDFBF7] text-stone-900 border-b border-stone-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 bg-purple-100 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Side-By-Side Comparison
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight">
            Traditional Agencies Generate Leads. <br className="hidden sm:inline" />
            <span className="text-purple-700">Scale With Ads™ Builds Predictable Growth.</span>
          </h2>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-3xl border border-stone-200 bg-white shadow-xl overflow-hidden">
          <div className="grid grid-cols-12 bg-stone-50 border-b border-stone-200 p-4 sm:p-6 font-mono text-xs font-bold uppercase tracking-wider text-stone-500">
            <div className="col-span-4 sm:col-span-4">Deliverable</div>
            <div className="col-span-4 sm:col-span-4 text-center text-rose-700">Traditional Agency</div>
            <div className="col-span-4 sm:col-span-4 text-center text-purple-700">Scale With Ads™</div>
          </div>

          <div className="divide-y divide-stone-200">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm font-semibold">
                <div className="col-span-4 sm:col-span-4 text-stone-900 font-bold">
                  {row.feature}
                </div>

                <div className="col-span-4 sm:col-span-4 text-center text-rose-900/80 flex items-center justify-center gap-1.5 font-medium">
                  <X className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="hidden sm:inline">{row.traditional}</span>
                </div>

                <div className="col-span-4 sm:col-span-4 text-center text-purple-950 font-extrabold flex items-center justify-center gap-1.5 bg-purple-50/60 py-2 rounded-xl border border-purple-100">
                  <Check className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>{row.scaleWithAds}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
