"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Check } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");

  const plans = [
    {
      id: "meta-ads",
      badge: "★ ADS SCALING",
      title: "Meta Ads Management",
      price: billingCycle === "monthly" ? "849" : "749",
      period: "/month",
      desc: "For clients who want us to produce high-converting ad creatives, write direct-response copy, and scale their Meta Ads daily.",
      features: [
        "Full Meta Ads Campaign Management",
        "Scroll-Stopping Ad Creative Creation",
        "Direct-Response Ad Copywriting",
        "Hyper-Targeted Market & Audience Segmentation",
        "Daily Creative Testing & Scaling",
        "Pixel & Custom Conversion Tracking (CAPI)",
        "Heatmap & ROAS Performance Optimization",
      ],
      popular: false,
      bgColor: "bg-white border-stone-950 text-stone-900 shadow-xl",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      btnColor: "bg-stone-950 hover:bg-purple-700 text-white",
      iconColor: "bg-purple-100 text-purple-700",
      accentGlow: "group-hover:border-purple-600 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.25)]",
    },
    {
      id: "full-service",
      badge: "★ MOST POPULAR",
      title: "Full-Service Growth",
      price: billingCycle === "monthly" ? "2,499" : "2,199",
      period: "/month",
      desc: "For clients who want us to build, launch, and scale the complete done-for-you client acquisition ecosystem.",
      features: [
        "Everything in Meta Ads Management",
        "Custom 3–5 Page High-Converting Funnel",
        "24/7 AI Automations & Follow-Up Workflows",
        "Automated Email & SMS Nurture Sequences",
        "40–50 Ad Creation & Variations",
        "Multi-Validation Lead Qualification System",
        "CRM Pipeline Integration & Direct Calendar Booking",
        "Continuous Conversion & ROAS Optimization",
      ],
      popular: true,
      bgColor: "bg-[#1D1435] border-purple-600 text-white shadow-2xl",
      badgeColor: "bg-purple-600 text-white font-extrabold border-purple-500",
      btnColor: "bg-purple-600 hover:bg-purple-500 text-white font-extrabold",
      iconColor: "bg-purple-600 text-white",
      accentGlow: "border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.35)]",
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 md:px-8 bg-[#FDFBF7] text-stone-900 border-t border-b border-stone-200 relative overflow-hidden select-none">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>TRANSPARENT PERFORMANCE PRICING</span>
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight uppercase font-hero leading-tight">
            Simple, Transparent <span className="font-serif italic lowercase animate-purple-gradient">pricing.</span>
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Choose the acquisition engine tailored for your business. Backed by our written 90-day revenue growth guarantee.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-stone-200/80 border border-stone-300">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all ${
                billingCycle === "monthly"
                  ? "bg-stone-950 text-white shadow-md"
                  : "text-stone-700 hover:text-stone-950"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                billingCycle === "quarterly"
                  ? "bg-purple-700 text-white shadow-md"
                  : "text-stone-700 hover:text-stone-950"
              }`}
            >
              <span>Quarterly Growth</span>
              <span className="text-[10px] bg-purple-100 text-purple-900 font-extrabold px-2 py-0.5 rounded-full border border-purple-300">SAVE 15%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className={`rounded-3xl border-3 ${plan.bgColor} ${plan.accentGlow} p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative group`}
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-mono font-black uppercase tracking-wider px-3.5 py-1 rounded-full border ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                  {plan.popular && (
                    <span className="text-xs font-mono font-extrabold text-purple-300 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-purple-300" />
                      Written Guarantee
                    </span>
                  )}
                </div>

                {/* Card Title & Pricing */}
                <h3 className="text-2xl sm:text-3xl font-black font-hero uppercase tracking-tight mb-3">
                  {plan.title}
                </h3>
                
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight">
                    ${plan.price}
                  </span>
                  <span className="text-sm font-bold opacity-80 font-mono">
                    {plan.period}
                  </span>
                </div>

                <p className="text-sm font-medium leading-relaxed mb-8 opacity-90 font-sans">
                  {plan.desc}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-stone-300/30 my-6" />

                {/* Features List */}
                <ul className="space-y-3.5 mb-10">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm font-extrabold leading-snug">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.iconColor}`}>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA Button */}
              <Link
                href="/contact"
                className={`w-full py-4 rounded-full ${plan.btnColor} text-xs uppercase tracking-wider font-extrabold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95`}
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Guarantee Footnote */}
        <div className="mt-14 p-6 rounded-2xl bg-white border-2 border-stone-950 shadow-md text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">100% ASSET OWNERSHIP</p>
              <p className="text-sm font-extrabold text-stone-950 font-sans">All funnels, copy, CRM pipelines & ad accounts belong to you. No lock-ins.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-stone-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-purple-700 transition-colors shrink-0"
          >
            Claim Guaranteed Offer
          </Link>
        </div>

      </div>
    </section>
  );
}
