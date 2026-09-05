"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is this for?",
      a: "Our system is built specifically for agency owners, coaches, consultants, high-ticket service providers, and B2B founders already generating $10,000+/month looking to scale predictably.",
    },
    {
      q: "Is this completely Done-For-You?",
      a: "Yes, 100%. We handle offer positioning, copy, creative design, sales funnel build, Meta ads management, CRM setup, AI automations, and lead qualification.",
    },
    {
      q: "Do I own everything?",
      a: "Yes. Every single asset we build—funnels, copy, ad creatives, CRM sequences, and customer data—belongs 100% to your business with no lock-ins.",
    },
    {
      q: "How long does implementation take?",
      a: "Complete onboarding and system build takes roughly 14 to 21 days from our kickoff call to launching your live campaigns.",
    },
    {
      q: "What industries do you work with?",
      a: "We work across 30+ verticals including digital marketing agencies, B2B services, home services (roofing, HVAC, solar), legal, healthcare, real estate, and e-commerce.",
    },
    {
      q: "What happens on the strategy call?",
      a: "We perform a audit of your current client acquisition bottlenecks, review your offer, and outline a customized 90-day growth roadmap for your business.",
    },
    {
      q: "How is this different from a marketing agency?",
      a: "Traditional agencies only run ads and hand off raw leads. We build a complete client acquisition ecosystem including qualification, CRM, AI follow-ups, and a 90-day written guarantee.",
    },
    {
      q: "What's included?",
      a: "Offer positioning, messaging strategy, Meta ads management, ad creatives, sales funnels, CRM setup, AI follow-up automations, SMS/email sequences, lead qualification, and calendar booking.",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 bg-purple-100 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Answers & Clarification
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight font-hero uppercase">
            Frequently Asked <span className="font-serif italic lowercase animate-purple-gradient">questions.</span>
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-[#FDFBF7] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-extrabold text-stone-900 text-base sm:text-lg flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-stone-600 text-sm font-medium leading-relaxed border-t border-stone-200/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
