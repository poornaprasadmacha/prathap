import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import Disclaimer from "@/components/Disclaimer";
import PartnerInsuranceCompanies from "@/components/PartnerInsuranceCompanies";
import { Users, CheckCircle2, Heart, ShieldCheck } from "lucide-react";
import { INSURANCE_PRODUCTS } from "@/data/insurance";

export const metadata = {
  title: "360° Family Insurance Protection in Tirupati | M Prathap",
  description: "Holistic 360-degree family financial protection combining health insurance, term life, child future security & loan payoff protection in Tirupati.",
  keywords: ["Family Insurance Tirupati", "Family Protection Plan", "Child Future Security Tirupati", "Health and Life Cover Tirupati"]
};

export default function FamilyInsurancePage() {
  const fiData = INSURANCE_PRODUCTS.find((i) => i.id === "family-insurance")!;

  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Insurance", href: "/insurance" }, { label: "Family Protection" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            360° Family Financial Protection
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            A unified financial protection strategy for Tirupati households. We evaluate your current home loan liabilities, medical expense needs, and child education goals under a streamlined insurance structure.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fiData.keyBenefits.map((kb, i) => (
              <div key={i} className="bg-slate-50 border border-slate-300 rounded p-6 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">{kb}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerInsuranceCompanies />

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="Family Insurance Shield" title="Request 360° Family Protection Consultation" />
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
