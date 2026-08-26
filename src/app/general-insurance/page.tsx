import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import PartnerInsuranceCompanies from "@/components/PartnerInsuranceCompanies";
import { Shield, Car, Home, Store } from "lucide-react";
import { INSURANCE_PRODUCTS } from "@/data/insurance";
import { MAIN_FAQS } from "@/data/faqs";

export const metadata = {
  title: "General & Motor Insurance in Tirupati | M Prathap",
  description: "Car insurance, two-wheeler protection, home structure insurance, and commercial business cover in Tirupati with M Prathap, MBA.",
  keywords: ["General Insurance Tirupati", "Car Insurance Tirupati", "Motor Insurance Tirupati", "Home Insurance Tirupati"]
};

export default function GeneralInsurancePage() {
  const giData = INSURANCE_PRODUCTS.find((i) => i.id === "general-insurance")!;

  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Insurance", href: "/insurance" }, { label: "General Insurance" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            General & Motor Insurance in Tirupati
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Shield your motor vehicles, standalone house structures, shops, and business assets against fire, accident, or liability losses with options from HDFC ERGO and leading general insurers.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {giData.productTypes.map((pt, i) => (
              <div key={i} className="bg-slate-50 border border-slate-300 rounded p-6 space-y-3">
                <Shield className="w-6 h-6 text-brand-600" />
                <h3 className="font-bold text-brand-900 text-lg">{pt.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerInsuranceCompanies />

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="General Insurance" title="Request General / Motor Insurance Quote" />
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
