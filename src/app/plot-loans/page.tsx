import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EMIForm from "@/components/EMIForm";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import PartnerBanks from "@/components/PartnerBanks";
import { CheckCircle2, MessageCircle, MapPin } from "lucide-react";
import { LOAN_PRODUCTS } from "@/data/loans";
import { MAIN_FAQS } from "@/data/faqs";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata = {
  title: "Plot Loans in Tirupati | Land & Construction Loan Consultant – M Prathap",
  description: "Plot purchase loans & plot + construction loans in approved layouts across Tirupati. Starting from 7.50%* with M Prathap, MBA (15+ Yrs exp).",
  keywords: [
    "Plot Loan Tirupati",
    "Land Loan Tirupati",
    "Plot Purchase Loan Tirupati",
    "Plot and Construction Loan Tirupati"
  ]
};

export default function PlotLoansPage() {
  const plotData = LOAN_PRODUCTS.find((l) => l.id === "plot-loans")!;
  const plotFaqs = MAIN_FAQS.filter((f) => f.category === "Plot Loans");

  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Plot Purchase Loans" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Plot Loans in Tirupati — Land & Construction Finance
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Acquiring a residential plot in TUDA or DTCP approved layouts across Tirupati, Renigunta, or Chandragiri? M Prathap (MBA) provides legal pre-check and loan facilitation for plot purchase and combined plot-construction.
          </p>

          <div className="bg-brand-950 border border-blue-800 rounded p-4 max-w-2xl text-xs text-slate-300">
            <strong className="text-white block mb-1">Indicative Interest Rate Disclosure:</strong>
            Plot purchase loan rates start from <strong>7.50%*</strong> per annum for approved layouts. Approval depends on layout sanctions, clear parent title deeds, and applicant income eligibility.
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#enquiry-form"
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-5 py-2.5 rounded text-sm transition-colors border border-brand-500"
            >
              Check Plot Loan Options
            </a>
            <a
              href={buildWhatsAppLink("Hello M Prathap, I want information regarding Plot Loans in Tirupati.")}
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

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={2500000} initialRate={7.50} initialTenure={15} loanTitle="Plot Purchase Loan" />
        </div>
      </section>

      <PartnerBanks />

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="Plot Purchase Loan" title="Apply for Plot Loan Guidance in Tirupati" />
        </div>
      </section>

      <FAQ items={plotFaqs} title="Plot Loan FAQs" />

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
