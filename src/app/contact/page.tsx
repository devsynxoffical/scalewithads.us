"use client";

import React, { useState } from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { ResultsSection } from "@/components/redesign/ResultsSection";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    monthlySpend: "$5k - $15k",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans">
      <FloatingNavbar />
      
      {/* Contact Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value prop */}
          <div className="lg:col-span-6">
            <span className="text-xs font-black uppercase tracking-widest text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-stone-950 tracking-tight mt-6 leading-tight uppercase font-hero">
              BOOK YOUR STRATEGY CALL
            </h1>
            <p className="mt-4 text-stone-600 font-medium text-lg leading-relaxed">
              Ready to double your revenue with direct-response video creative and data-anchored media buying? Fill out the audit request below.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-700 flex-shrink-0" />
                <span className="text-stone-800 text-sm font-bold">100% Free 30-Minute Ad Account Audit</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-700 flex-shrink-0" />
                <span className="text-stone-800 text-sm font-bold">Custom Creative Hook Breakdown</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-700 flex-shrink-0" />
                <span className="text-stone-800 text-sm font-bold">Written Performance & ROAS Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#FDFBF7] p-8 rounded-3xl border-2 border-stone-900 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-400 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-stone-950">Audit Request Received!</h3>
                  <p className="text-stone-600 text-sm font-medium mt-2">
                    Our senior media buyers are reviewing your site and will reach out within 2 hours with available time slots.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="text-xl font-black text-stone-950 mb-1">
                    Scale Your Brand Today
                  </h3>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wider">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Matt Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-stone-300 focus:border-purple-600 focus:outline-none text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wider">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="matt@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-stone-300 focus:border-purple-600 focus:outline-none text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wider">
                      Website / Store URL
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://yourbrand.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FDFBF7] border-2 border-stone-300 focus:border-purple-600 focus:outline-none text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wider">
                      Monthly Ad Spend Budget
                    </label>
                    <select
                      value={formData.monthlySpend}
                      onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-stone-300 focus:border-purple-600 focus:outline-none text-sm font-bold"
                    >
                      <option>$5,000 - $15,000 / month</option>
                      <option>$15,000 - $50,000 / month</option>
                      <option>$50,000 - $150,000 / month</option>
                      <option>$150,000+ / month</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wider">
                      Message / Goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your target revenue goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-stone-300 focus:border-purple-600 focus:outline-none text-sm font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-black text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-95 mt-2"
                  >
                    <span>Request Free Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
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
