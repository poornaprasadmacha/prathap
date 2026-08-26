import React from "react";
import Metadata from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import EMIForm from "@/components/EMIForm";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import PartnerBanks from "@/components/PartnerBanks";
import { CheckCircle2, FileText, Phone, MessageCircle, Building2, Home as HomeIcon } from "lucide-react";
import { LOAN_PRODUCTS } from "@/data/loans";
import { MAIN_FAQS } from "@/data/faqs";
import { buildPhoneCallLink, buildWhatsAppLink } from "@/lib/utils";

export const metadata = {
  title: "Home Loans in Tirupati | Housing Loan Consultant – M Prathap",
  description: "Secure home loans in Tirupati for apartments, independent houses, plot construction & balance transfer. Starting from 7.15%* with M Prathap, MBA (15+ Yrs exp).",
  keywords: [
    "Home Loans in Tirupati",
    "Home Loan Consultant in Tirupati",
    "Housing Loans in Tirupati",
    "House Loan in Tirupati",
    "Home Loan Eligibility",
    "Home Loan EMI Tirupati",
    "Apartment Purchase Loan Tirupati",
    "Independent House Loan Tirupati"
  ]
};

export default function HomeLoansPage() {
  const homeLoanData = LOAN_PRODUCTS.find((l) => l.id === "home-loans")!;
  const homeFaqs = MAIN_FAQS.filter((f) => f.category === "Home Loans");

  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Home Loans in Tirupati" }]} />

      {/* Hero Sub-header */}
      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Home Loans in Tirupati — Expert Guidance by M Prathap
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Buying a builder flat, constructing on your plot, or transferring an existing home loan? M Prathap (MBA, 15+ Yrs experience) evaluates top bank offers in Tirupati for maximum loan approval and hassle-free documentation.
          </p>

          <div className="bg-brand-950 border border-blue-800 rounded p-4 max-w-2xl text-xs text-slate-300">
            <strong className="text-white block mb-1">Important Interest Rate Disclosure:</strong>
            Home loan rates may start from <strong>7.15%*</strong> per annum for eligible borrowers, subject to lender underwriting terms, credit profile (CIBIL 750+), loan amount, tenure, and property evaluation.
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#enquiry-form"
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-5 py-2.5 rounded text-sm transition-colors border border-brand-500"
            >
              Apply for Home Loan Guidance
            </a>
            <a
              href={buildWhatsAppLink("Hello M Prathap, I want assistance with a Home Loan in Tirupati.")}
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

      {/* Sub-types Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
              Home Loan Categories Handled in Tirupati
            </h2>
            <p className="text-sm text-slate-600">
              Assistance across ready-to-move flats, plot construction, independent houses, and balance transfers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeLoanData.subTypes?.map((st, i) => (
              <div key={i} className="bg-slate-50 border border-slate-300 rounded p-5 space-y-2">
                <div className="w-9 h-9 rounded bg-brand-100 border border-brand-200 flex items-center justify-center text-brand-700 font-bold text-sm">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-brand-900 text-base">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive EMI Calculator */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={3500000} initialRate={7.15} initialTenure={20} loanTitle="Home Loan" />
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eligibility Box */}
            <div className="bg-slate-50 border border-slate-300 rounded-md p-6 space-y-4">
              <h3 className="text-xl font-bold text-brand-900 border-b border-slate-200 pb-3">
                Home Loan Eligibility Criteria
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {homeLoanData.eligibility.map((el, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features Box */}
            <div className="bg-slate-50 border border-slate-300 rounded-md p-6 space-y-4">
              <h3 className="text-xl font-bold text-brand-900 border-b border-slate-200 pb-3">
                Key Benefits of Consulting M Prathap
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {homeLoanData.features.map((ft, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>{ft}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Document Checklist */}
          <div className="bg-brand-900 text-white rounded-md border border-brand-950 p-6 sm:p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white border-b border-blue-800 pb-3">
              Document Checklist for Home Loans in Tirupati
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-3">
                <h4 className="font-bold text-blue-300 uppercase tracking-wider text-xs">
                  Salaried Applicants (Govt / Private / PSU)
                </h4>
                <ul className="space-y-2 text-slate-200">
                  {homeLoanData.documents.salaried.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-blue-300 uppercase tracking-wider text-xs">
                  Self-Employed / Business Owners
                </h4>
                <ul className="space-y-2 text-slate-200">
                  {homeLoanData.documents.selfEmployed.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <PartnerBanks />

      {/* Lead Form */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="Home Loan" title="Apply for Home Loan Consultation in Tirupati" />
        </div>
      </section>

      <FAQ items={homeFaqs} title="Home Loan FAQs" />

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
