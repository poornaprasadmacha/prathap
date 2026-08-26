import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import PartnerInsuranceCompanies from "@/components/PartnerInsuranceCompanies";
import { HeartPulse, CheckCircle2, Shield } from "lucide-react";
import { INSURANCE_PRODUCTS } from "@/data/insurance";
import { MAIN_FAQS } from "@/data/faqs";

export const metadata = {
  title: "Health Insurance & Family Floater in Tirupati | M Prathap",
  description: "Protect your family from hospital expenses with Cashless Health Insurance, Family Floater, Senior Citizen & Super Top-Up cover in Tirupati.",
  keywords: ["Health Insurance Tirupati", "Family Floater Health Policy Tirupati", "Senior Citizen Health Insurance", "Cashless Hospital Tirupati", "Super Top-Up Health Insurance"]
};

export default function HealthInsurancePage() {
  const hiData = INSURANCE_PRODUCTS.find((i) => i.id === "health-insurance")!;
  const hiFaqs = MAIN_FAQS.filter((f) => f.category === "Health Insurance");

  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Insurance", href: "/insurance" }, { label: "Health Insurance" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Health Insurance & Family Floater in Tirupati
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Shield your savings from rising hospital costs. M Prathap (MBA) evaluates Family Floater, Individual Health policies, Senior Citizen plans, and Super Top-Ups from Care Health Insurance, ICICI Lombard, and leading providers.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">Health Policy Structures Available</h2>
            <p className="text-sm text-slate-600">Comprehensive medical coverage tailored to Tirupati network hospitals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiData.productTypes.map((pt, i) => (
              <div key={i} className="bg-slate-50 border border-slate-300 rounded p-5 space-y-2">
                <HeartPulse className="w-6 h-6 text-emerald-600" />
                <h3 className="font-bold text-brand-900 text-base">{pt.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerInsuranceCompanies />

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="Health Insurance" title="Request Health Insurance & Family Floater Advice" />
        </div>
      </section>

      <FAQ items={hiFaqs} title="Health Insurance FAQs" />

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
