"use client";

import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function EditorialFooter() {
  return (
    <footer className="pt-20 pb-12 px-4 md:px-8 bg-[#FDFBF7] text-stone-900 border-t border-stone-200 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Main Minimalist White Container */}
        <div className="bg-white rounded-3xl border-2 border-stone-950 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Brand Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <Link href="/" className="flex items-center gap-3 mb-5">
                  <Image
                    src="/icon-logo/mainlogo.jpeg"
                    alt="ScaleWithAds"
                    width={180}
                    height={40}
                    className="h-10 w-auto object-contain rounded-lg"
                  />
                </Link>

                <p className="text-stone-600 text-sm font-medium leading-relaxed max-w-sm">
                  We install our proprietary <strong className="text-stone-950 font-bold">Scale With Ads™ Client Acquisition System</strong> into your business and double your revenue in 90 days—or we work for $0 management fee until we do.
                </p>
              </div>

              {/* CAPI Status Indicator Badge */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-stone-700 uppercase tracking-wider">
                  CAPI Attribution Engine Live
                </span>
              </div>
            </div>

            {/* Right Links Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm font-semibold">
              
              {/* Col 1 */}
              <div className="flex flex-col gap-3">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700">
                  NAVIGATION
                </p>
                <Link href="/" className="text-stone-600 hover:text-purple-700 transition-colors">
                  Home
                </Link>
                <Link href="/medialibrary" className="text-stone-600 hover:text-purple-700 transition-colors">
                  Shorts & Videos
                </Link>
                <Link href="/work" className="text-stone-600 hover:text-purple-700 transition-colors">
                  Proven Results
                </Link>
                <Link href="/contact" className="text-stone-600 hover:text-purple-700 transition-colors">
                  Contact Us
                </Link>
              </div>

              {/* Col 2 */}
              <div className="flex flex-col gap-3">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700">
                  SERVICES
                </p>
                <Link href="/services" className="text-stone-600 hover:text-purple-700 transition-colors">
                  Meta Ads Scale
                </Link>
                <Link href="/services" className="text-stone-600 hover:text-purple-700 transition-colors">
                  Creative Studio
                </Link>
                <Link href="/services" className="text-stone-600 hover:text-purple-700 transition-colors">
                  Sales Funnels
                </Link>
                <Link href="/services" className="text-stone-600 hover:text-purple-700 transition-colors">
                  CRM & AI Nurture
                </Link>
              </div>

              {/* Col 3 */}
              <div className="flex flex-col gap-3">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700">
                  MASTERMIND
                </p>
                <Link href="/privatemastermind" className="text-stone-600 hover:text-purple-700 transition-colors">
                  Private 1:1 Advisory
                </Link>
                <Link href="/metalto" className="text-stone-600 hover:text-purple-700 transition-colors">
                  $847K Meta Funnel
                </Link>
                <Link href="/paidpilot" className="text-stone-600 hover:text-purple-700 transition-colors">
                  7-Day Paid Pilot
                </Link>
                <Link href="/medialibrary" className="text-stone-600 hover:text-purple-700 transition-colors">
                  Media Library
                </Link>
              </div>

              {/* Col 4 */}
              <div className="flex flex-col gap-3">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700">
                  COMMUNITY
                </p>
                <a
                  href="https://www.facebook.com/groups/milliondollarmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-stone-600 hover:text-purple-700 transition-colors"
                >
                  <span>FB Group</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-purple-600" />
                </a>
                <a
                  href="https://wa.me/918287782334?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20ScaleWithAds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-700 font-extrabold hover:text-emerald-600 transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
                </a>
                <Link href="/contact" className="flex items-center gap-1 text-stone-600 hover:text-purple-700 transition-colors">
                  <span>Strategy Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Clean Statement Brand Typography */}
        <div className="w-full text-center overflow-hidden py-4 select-none">
          <h1 className="text-[7.5vw] sm:text-[8.2vw] lg:text-[8.8vw] font-black text-stone-950 leading-none tracking-tight uppercase font-hero block w-full whitespace-nowrap">
            SCALEWITHADS™
          </h1>
        </div>

        {/* Minimal Copyright Legal Bar */}
        <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between text-xs font-mono text-stone-500 gap-4">
          <p>© 2026 ScaleWithAds Inc. All rights reserved. Backed by Written Agreement.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-stone-900 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-stone-900 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-stone-900 transition-colors">Security Audit</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
