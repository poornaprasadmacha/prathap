import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EMIForm from "@/components/EMIForm";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import PartnerBanks from "@/components/PartnerBanks";
import { CheckCircle2, MessageCircle, Briefcase, Building } from "lucide-react";
import { LOAN_PRODUCTS } from "@/data/loans";
import { MAIN_FAQS } from "@/data/faqs";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata = {
  title: "Business Loans in Tirupati | MSME Finance Consultant – M Prathap",
  description: "Business loans & working capital financing for traders, MSMEs & businesses in Tirupati. Starting from 10.00%* with M Prathap, MBA (15+ Yrs exp).",
  keywords: [
    "Business Loans in Tirupati",
    "Business Loan Consultant in Tirupati",
    "Business Finance Tirupati",
    "MSME Loans Tirupati",
    "Business Loan Eligibility",
    "Business Loan EMI Calculator"
  ]
};

export default function BusinessLoansPage() {
  const blData = LOAN_PRODUCTS.find((l) => l.id === "business-loans")!;
  const blFaqs = MAIN_FAQS.filter((f) => f.category === "Business Loans");

  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Business Loans in Tirupati" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Business Loans in Tirupati — Scale Your Operations
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Working capital, inventory financing, machinery expansion, or business premises renovation? M Prathap (MBA, 15+ Yrs experience) structures your MSME loan applications for optimal bank approval.
          </p>

          <div className="bg-brand-950 border border-blue-800 rounded p-4 max-w-2xl text-xs text-slate-300">
            <strong className="text-white block mb-1">Indicative Starting Rate Disclosure:</strong>
            Business loan interest rates may start from <strong>10.00%*</strong> per annum for eligible business entities. Approval, loan amount, and final interest pricing depend on business vintage, annual turnover, audited financial statements, credit history (CIBIL 700+), and lender risk assessment.
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#enquiry-form"
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-5 py-2.5 rounded text-sm transition-colors border border-brand-500"
            >
              Check Business Finance Eligibility
            </a>
            <a
              href={buildWhatsAppLink("Hello M Prathap, I am looking for a Business Loan in Tirupati.")}
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
              Commercial Capital & Business Use Cases
            </h2>
            <p className="text-sm text-slate-600">
              Tailored financing for retailers, traders, manufacturers, logistics operators, and service providers in Tirupati.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blData.useCases.map((uc, i) => (
              <div key={i} className="bg-slate-50 border border-slate-300 rounded p-5 space-y-2">
                <Briefcase className="w-6 h-6 text-brand-600" />
                <span className="text-sm font-bold text-brand-900 block">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={1500000} initialRate={10.00} initialTenure={3} loanTitle="Business Loan" />
        </div>
      </section>

      <PartnerBanks />

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="Business Loan" title="Apply for Business Loan Guidance in Tirupati" />
        </div>
      </section>

      <FAQ items={blFaqs} title="Business Loan FAQs" />

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
