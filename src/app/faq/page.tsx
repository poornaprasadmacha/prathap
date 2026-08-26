import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Disclaimer from "@/components/Disclaimer";
import { MAIN_FAQS } from "@/data/faqs";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | M Prathap Financial Services",
  description: "Get detailed answers regarding Home Loans, Personal Loans, LAP, Plot Loans, Interest Rates & Health Insurance in Tirupati.",
  keywords: ["Loan FAQ Tirupati", "Home Loan Questions Tirupati", "Insurance FAQ Tirupati"]
};

export default function FAQPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "FAQ Library" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Everything you need to know about loan eligibility, starting interest rates, required documents, legal title verification, and insurance policies in Tirupati.
          </p>
        </div>
      </section>

      <FAQ items={MAIN_FAQS} title="Complete FAQ Knowledge Base" />

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm title="Have an Unanswered Question? Ask M Prathap Directly" />
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
