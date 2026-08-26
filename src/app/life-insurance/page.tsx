import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import PartnerInsuranceCompanies from "@/components/PartnerInsuranceCompanies";
import { CheckCircle2, ShieldCheck, Heart, Award } from "lucide-react";
import { INSURANCE_PRODUCTS } from "@/data/insurance";
import { MAIN_FAQS } from "@/data/faqs";

export const metadata = {
  title: "Life Insurance & Term Protection in Tirupati | M Prathap",
  description: "Secure term life insurance, savings plans, pension annuities, and child future security policies in Tirupati with M Prathap, MBA.",
  keywords: ["Life Insurance Tirupati", "Term Insurance Tirupati", "Pension Plan Tirupati", "Life Insurance Consultant Tirupati"]
};

export default function LifeInsurancePage() {
  const liData = INSURANCE_PRODUCTS.find((i) => i.id === "life-insurance")!;
  const liFaqs = MAIN_FAQS.filter((f) => f.category === "Life Insurance");

  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Insurance", href: "/insurance" }, { label: "Life Insurance" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Life Insurance & Term Plans in Tirupati
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Ensure your family&apos;s ongoing financial security, home loan payoff protection, and future goals with customized Term Insurance and Savings Plans options from top life insurers (Axis Max Life, ICICI Prudential, and leading providers).
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">Life Insurance Categories Evaluated</h2>
            <p className="text-sm text-slate-600">Tailored to your life stage, dependent requirements, and income protection goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {liData.productTypes.map((pt, i) => (
              <div key={i} className="bg-slate-50 border border-slate-300 rounded p-5 space-y-2">
                <ShieldCheck className="w-6 h-6 text-brand-600" />
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
          <LeadForm defaultLoanType="Life Insurance" title="Request Life Insurance & Term Plan Advice" />
        </div>
      </section>

      <FAQ items={liFaqs} title="Life Insurance FAQs" />

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
