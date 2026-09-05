"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Award, Briefcase, Zap } from "lucide-react";

export function TrustBarSection() {
  const trustItems = [
    { label: "12+ Years Experience", icon: Award },
    { label: "$50M+ Managed in Meta Ads", icon: Zap },
    { label: "Multi-Industry Experience", icon: Briefcase },
    { label: "Proven Client Acquisition Framework", icon: ShieldCheck },
    { label: "100% Done-For-You", icon: CheckCircle2 },
  ];

  return (
    <section className="w-full bg-[#1D1435] text-white py-6 px-4 md:px-8 border-y border-purple-900/30">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 md:gap-4">
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-sm font-semibold text-stone-200"
            >
              <div className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0">
                <Icon className="w-4 h-4 text-purple-400" />
              </div>
              <span className="tracking-tight">{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
