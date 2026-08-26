import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EMIForm from "@/components/EMIForm";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import PartnerBanks from "@/components/PartnerBanks";
import { CheckCircle2, MessageCircle, Building2, Home } from "lucide-react";
import { LOAN_PRODUCTS } from "@/data/loans";
import { MAIN_FAQS } from "@/data/faqs";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata = {
  title: "Loan Against Property in Tirupati | LAP Consultant – M Prathap",
  description: "Leverage your residential or commercial property in Tirupati for high-value LAP loans starting from 8.50%* with M Prathap, MBA (15+ Yrs exp).",
  keywords: [
    "Loan Against Property Tirupati",
    "LAP Loan Tirupati",
    "Property Loan Tirupati",
    "Loan Against Property Consultant Tirupati",
    "Mortgage Loan Tirupati"
  ]
};

export default function LAPPage() {
  const lapData = LOAN_PRODUCTS.find((l) => l.id === "loan-against-property")!;
  const lapFaqs = MAIN_FAQS.filter((f) => f.category === "LAP");

  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Loan Against Property (LAP)" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Loan Against Property (LAP) in Tirupati
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Unlock the market value of your residential house or commercial property in Tirupati. Secure high loan amounts at lower interest rates with guidance from M Prathap (MBA).
          </p>

          <div className="bg-brand-950 border border-blue-800 rounded p-4 max-w-2xl text-xs text-slate-300">
            <strong className="text-white block mb-1">Indicative Interest Rate Disclosure:</strong>
            Loan Against Property interest rates start from <strong>8.50%*</strong> per annum for eligible properties and applicants. Final loan sanction depends on title legal clearance, bank property valuation, LTV ratios (typically 60%-75%), and income assessment.
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#enquiry-form"
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-5 py-2.5 rounded text-sm transition-colors border border-brand-500"
            >
              Check Property LAP Eligibility
            </a>
            <a
              href={buildWhatsAppLink("Hello M Prathap, I am interested in Loan Against Property (LAP) in Tirupati.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-4 py-2.5 rounded text-sm transition-colors border border-emerald-600 flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
              Accepted Property Types & Benefits
            </h2>
            <p className="text-sm text-slate-600">
              Financing solutions against clear legal title properties in Tirupati Urban, Rural, and surrounding mandals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-300 rounded p-6 space-y-3">
              <Home className="w-6 h-6 text-brand-600" />
              <h3 className="font-bold text-brand-900 text-lg">Residential Property LAP</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mortgage self-occupied or rented residential houses, apartments, and villas to raise high-value capital for long-term needs.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-300 rounded p-6 space-y-3">
              <Building2 className="w-6 h-6 text-brand-600" />
              <h3 className="font-bold text-brand-900 text-lg">Commercial Property LAP</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Raise funds against commercial shops, office spaces, or warehouses for business expansion and operational scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={5000000} initialRate={8.50} initialTenure={15} loanTitle="Loan Against Property" />
        </div>
      </section>

      <PartnerBanks />

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="Loan Against Property" title="Apply for LAP Loan Consultation in Tirupati" />
        </div>
      </section>

      <FAQ items={lapFaqs} title="LAP Loan FAQs" />

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
