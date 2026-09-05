"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  FileCode,
  Layout,
  Database,
  Layers,
  Bot,
  MessageSquare,
  Sparkles,
  Lock,
  Unlock,
  Building2,
  Search,
} from "lucide-react";

export function OwnershipSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const ownedAssets = [
    { title: "Landing Pages", desc: "Custom high-converting designs", icon: Layout },
    { title: "Sales Funnel", desc: "Complete appointment booking flow", icon: Layers },
    { title: "CRM", desc: "Configured pipeline & contact management", icon: Database },
    { title: "Automations", desc: "AI workflows & trigger sequences", icon: Bot },
    { title: "Ad Creatives", desc: "High-performing video & static ads", icon: Sparkles },
    { title: "Copy", desc: "Direct-response copy & VSL scripts", icon: FileCode },
    { title: "Follow-Up Sequences", desc: "Automated email & SMS nurture", icon: MessageSquare },
    { title: "Customer Data", desc: "100% first-party pixel & lead records", icon: ShieldCheck },
  ];

  const allIndustries = [
    "Digital Marketing Agencies",
    "Business Coaches",
    "Consultants",
    "High-Ticket Service Providers",
    "B2B Companies",
    "Home Service Businesses",
    "Roofing Companies",
    "HVAC Companies",
    "Solar Companies",
    "Personal Injury Law Firms",
    "Medical Malpractice Attorneys",
    "Healthcare Practices",
    "Med Spas & Aesthetic Clinics",
    "Chiropractors",
    "Real Estate Companies",
    "Mortgage Brokers",
    "Insurance Agencies",
    "Fitness Brands & Gyms",
    "E-Commerce Brands",
    "Construction Companies",
    "Garage Door Companies",
    "Kitchen & Bathroom Remodeling",
    "Painting Companies",
    "Window & Door Companies",
    "Landscaping Businesses",
    "Pressure Washing Companies",
    "Car Detailing Businesses",
    "Pest Control Companies",
    "Plumbing Companies",
    "Electrical Companies",
    "Carpet Cleaning Companies",
    "Air Duct Cleaning Companies",
  ];

  const industriesRow1 = allIndustries.slice(0, 16);
  const industriesRow2 = allIndustries.slice(16);

  const filteredIndustries = searchTerm
    ? allIndustries.filter((i) => i.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 bg-[#FDFBF7] text-stone-900 border-b border-stone-200 relative overflow-hidden">
      
      {/* Decorative Accent Ribbon */}
      <div className="absolute top-0 left-10 md:left-24 w-48 sm:w-64 h-48 sm:h-64 border-l-8 border-t-8 border-purple-500 rounded-tl-[120px] opacity-80 pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* Ownership Box Header & Cards */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#1D1435] text-white shadow-2xl relative overflow-hidden border border-purple-900">
          
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Section Eyebrow & Title */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300 bg-purple-900/80 border border-purple-700/60 px-4 py-1.5 rounded-full inline-block mb-5 shadow-sm">
              ✦ SECTION 7 — EVERYTHING BELONGS TO YOU
            </span>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.02] mb-4 font-hero uppercase">
              Unlike Most Agencies... <br />
              <span className="text-purple-300">You Own Everything.</span>
            </h2>
            
            <p className="text-purple-100 text-base sm:text-xl font-medium leading-relaxed">
              When we build your Client Acquisition System, it becomes your permanent business asset.
            </p>
          </div>

          {/* Grid of 8 Owned Asset Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {ownedAssets.map((asset, idx) => {
              const Icon = asset.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-purple-400/60 shadow-lg flex flex-col justify-between transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/25 text-purple-200 flex items-center justify-center border border-purple-400/40">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400 font-mono text-xs font-bold bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>YOURS</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-white mb-1 font-hero tracking-tight">
                      ✔ {asset.title}
                    </h3>
                    <p className="text-xs text-purple-200 font-medium leading-relaxed">
                      {asset.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Core Guarantees Row */}
          <div className="pt-8 border-t border-purple-800/60 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-stone-200 text-sm font-extrabold">No lock-ins.</span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-stone-200 text-sm font-extrabold">No hidden ownership.</span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-stone-200 text-sm font-extrabold">No dependence on another agency.</span>
            </div>
          </div>

        </div>

        {/* Dynamic Infinite Marquee of 32 Industries */}
        <div className="pt-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
              ✦ MULTI-VERTICAL EXPERTISE
            </span>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-950 font-hero uppercase">
              Industries We've Worked With
            </h3>
            <p className="mt-3 text-stone-600 text-base font-medium">
              Proven acquisition frameworks battle-tested across 32+ B2B, B2C, and high-ticket service verticals.
            </p>
          </div>

          {/* Row 1 Infinite Scroll Marquee */}
          <div className="w-full overflow-hidden mb-4 select-none">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 75, repeat: Infinity }}
              className="flex items-center gap-3.5 whitespace-nowrap w-max"
            >
              {[...industriesRow1, ...industriesRow1].map((ind, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 rounded-full bg-white border-2 border-stone-200 text-stone-900 font-extrabold text-xs sm:text-sm shadow-sm hover:border-purple-600 hover:bg-purple-50 transition-all cursor-default flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-600" />
                  {ind}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Row 2 Infinite Scroll Marquee (Reverse Direction) */}
          <div className="w-full overflow-hidden select-none">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 85, repeat: Infinity }}
              className="flex items-center gap-3.5 whitespace-nowrap w-max"
            >
              {[...industriesRow2, ...industriesRow2].map((ind, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 rounded-full bg-stone-950 text-white border-2 border-stone-900 font-extrabold text-xs sm:text-sm shadow-md hover:border-purple-400 transition-all cursor-default flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {ind}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
