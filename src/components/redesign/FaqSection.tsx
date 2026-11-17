"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HOME_FAQS, type Faq } from "@/lib/faqs";

type FaqSectionProps = {
  /** Questions to show (defaults to the home page FAQ). */
  faqs?: Faq[];
  eyebrow?: string;
  /** Optional replacement for the heading content. */
  title?: React.ReactNode;
};

export function FaqSection({ faqs = HOME_FAQS, eyebrow = "Answers & Clarification", title }: FaqSectionProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 md:px-8 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 bg-purple-100 px-3.5 py-1.5 rounded-full inline-block mb-4">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight font-hero uppercase">
            {title ?? (
              <>
                Frequently Asked <span className="font-serif italic lowercase animate-purple-gradient">questions.</span>
              </>
            )}
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
