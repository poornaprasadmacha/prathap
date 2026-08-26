import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import InsuranceServices from "@/components/InsuranceServices";
import PartnerInsuranceCompanies from "@/components/PartnerInsuranceCompanies";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import { MAIN_FAQS } from "@/data/faqs";

export const metadata = {
  title: "Life, Health & General Insurance in Tirupati | M Prathap",
  description: "Comprehensive IRDAI-compliant insurance advisory in Tirupati. Compare Term Life, Family Floater Health, Super Top-Up & Motor Insurance from top insurers.",
  keywords: [
    "Insurance Consultant in Tirupati",
    "Health Insurance Tirupati",
    "Life Insurance Tirupati",
    "General Insurance Tirupati",
    "Family Health Insurance Tirupati"
  ]
};

export default function InsuranceHubPage() {
  const insuranceFaqs = MAIN_FAQS.filter((f) => f.category === "Health Insurance" || f.category === "Life Insurance");

  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Insurance Overview Hub" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Insurance Solutions in Tirupati
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Protect your health, life, family savings, and physical assets against unexpected medical emergencies or life risks with unbiased advisory from M Prathap, MBA.
          </p>
        </div>
      </section>

      <InsuranceServices />
      <PartnerInsuranceCompanies />

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="Health Insurance" title="Request an Insurance Consultation" />
        </div>
      </section>

      <FAQ items={insuranceFaqs} title="Insurance FAQs" />

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
