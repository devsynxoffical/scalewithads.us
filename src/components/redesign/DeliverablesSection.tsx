"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Sparkles,
  TrendingUp,
  Video,
  Layout,
  Filter,
  Database,
  Bot,
  Mail,
  Smartphone,
  Clock,
  ShieldCheck,
  Calendar,
  Activity,
  Server,
  ArrowRight,
} from "lucide-react";

export function DeliverablesSection() {
  const deliverables = [
    { title: "Offer Positioning", icon: Target, tag: "STRATEGY" },
    { title: "Messaging Strategy", icon: Sparkles, tag: "COPYWRITING" },
    { title: "Meta Ads", icon: TrendingUp, tag: "MEDIA BUYING" },
    { title: "Ad Creatives", icon: Video, tag: "UGC & VSL" },
    { title: "Landing Pages", icon: Layout, tag: "UI/UX DESIGN" },
    { title: "Complete Sales Funnel", icon: Filter, tag: "CONVERSION" },
    { title: "CRM Setup", icon: Database, tag: "PIPELINE" },
    { title: "AI Automations", icon: Bot, tag: "WORKFLOWS" },
    { title: "Email Sequences", icon: Mail, tag: "NURTURE" },
    { title: "SMS Follow-Up", icon: Smartphone, tag: "INSTANT REACH" },
    { title: "Appointment Reminders", icon: Clock, tag: "SHOW-UP RATE" },
    { title: "Lead Qualification System", icon: ShieldCheck, tag: "VETTING" },
    { title: "Calendar Booking System", icon: Calendar, tag: "BOOKINGS" },
    { title: "Ongoing Campaign Optimisation", icon: Activity, tag: "SCALING" },
    { title: "Server-Side CAPI Tracking", icon: Server, tag: "ATTRIBUTION" },
  ];

  const initialRotations = [-1.5, 1.2, -1.8, 1.5, -1.0, 1.8, -1.2, 1.4, -1.6, 1.2, -1.4, 1.6, -1.1, 1.3, -1.5];

  return (
    <section className="py-24 px-4 md:px-8 bg-[#FDFBF7] text-stone-900 border-b border-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Playful Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
            <span>✦ FULL SCOPE OF WORK</span>
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-stone-950 leading-tight uppercase font-hero">
            Here&apos;s Everything We <br />
            <span className="font-serif italic lowercase text-purple-700">build for you.</span>
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg font-medium max-w-xl mx-auto">
            100% done-for-you execution from strategic positioning to continuous ROAS optimization.
          </p>
        </div>

        {/* 15 Creative Interactive Deliverable Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            const rot = initialRotations[idx % initialRotations.length];
            const num = (idx + 1).toString().padStart(3, "0");

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ rotate: rot }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  y: -6,
                  borderColor: "#9333EA",
                  boxShadow: "0 20px 25px -5px rgba(147, 51, 234, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="p-5 rounded-3xl bg-white border-2 border-stone-950 shadow-md flex items-center justify-between gap-4 cursor-pointer group transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* Custom Colored Icon Badge */}
                  <div className="w-11 h-11 rounded-2xl bg-purple-100 border-2 border-stone-950 text-purple-900 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#9333EA] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-mono font-black text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                        #{num}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-stone-400 uppercase tracking-wider truncate">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-extrabold text-stone-950 font-hero tracking-tight leading-tight group-hover:text-purple-900 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-stone-100 border border-stone-300 text-stone-500 flex items-center justify-center shrink-0 group-hover:bg-purple-700 group-hover:text-white group-hover:border-stone-950 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
