"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, Award } from "lucide-react";
import { FAQItem, MAIN_FAQS } from "@/data/faqs";
import { buildPhoneCallLink } from "@/lib/utils";

interface FAQProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({
  items = MAIN_FAQS,
  title = "Frequently Asked Questions (English & తెలుగు)",
  subtitle = "Clear, conversational answers for loan applicants in Tirupati, TPT, Renigunta, Chandragiri, and Chittoor District."
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#004c8f] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block">
            Customer Help & Loan Advisory FAQs
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{title}</h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto font-medium">{subtitle}</p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const isTelugu = faq.category === "Telugu FAQs";
            const isTopQuestion = faq.category === "Voice Search FAQs";

            return (
              <div
                key={faq.id || idx}
                className={`border rounded-xl overflow-hidden transition-colors ${
                  isTopQuestion ? "border-[#004c8f] bg-[#f8fafc]" : isTelugu ? "border-amber-300 bg-[#fffbeb]" : "border-slate-300 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-4 text-left font-bold text-slate-900 text-sm sm:text-base flex justify-between items-center gap-4 hover:bg-slate-50 focus:outline-none"
                >
                  <div className="flex items-center gap-2">
                    {isTopQuestion && (
                      <span className="bg-[#004c8f] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shrink-0">
                        Top FAQ
                      </span>
                    )}
                    {isTelugu && (
                      <span className="bg-[#854d0e] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shrink-0">
                        తెలుగు
                      </span>
                    )}
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#004c8f] shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 space-y-3">
                    <p className="font-medium">{faq.answer}</p>
                    
                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between gap-2 text-xs text-slate-600">
                      <span className="font-semibold text-slate-700 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-[#004c8f]" /> Advised by M Prathap | MBA | 15+ Years Local Expertise
                      </span>
                      <a
                        href={buildPhoneCallLink()}
                        className="text-[#004c8f] hover:underline font-bold shrink-0 flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" /> Call: +91 95508 01743
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-[#f0f4f8] border border-slate-300 p-5 rounded-2xl text-center space-y-3 shadow-2xs">
          <h3 className="text-base font-extrabold text-[#003366]">Have a Specific Query Regarding Home, Flat or Personal Loans in Tirupati?</h3>
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Contact M Prathap (MBA, 15+ Years Experience) directly at SP Financial Services for personalized doorstep consultation.
          </p>
          <div className="pt-1">
            <a
              href={buildPhoneCallLink()}
              className="inline-flex items-center gap-2 bg-[#004c8f] hover:bg-[#003366] text-white font-extrabold px-6 py-3 rounded-xl text-sm transition-all shadow-md"
            >
              <Phone className="w-4 h-4 text-blue-200" />
              <span>Call M Prathap: +91 95508 01743</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
