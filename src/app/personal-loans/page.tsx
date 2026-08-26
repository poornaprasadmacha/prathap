import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EMIForm from "@/components/EMIForm";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import PartnerBanks from "@/components/PartnerBanks";
import { CheckCircle2, MessageCircle, ShieldCheck, UserCheck } from "lucide-react";
import { LOAN_PRODUCTS } from "@/data/loans";
import { MAIN_FAQS } from "@/data/faqs";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata = {
  title: "Personal Loans in Tirupati | Low-Interest Loan Assistance – M Prathap",
  description: "Collateral-free personal loans in Tirupati for salaried & self-employed individuals. Starting from 9.90%* with M Prathap, MBA (15+ Yrs exp).",
  keywords: [
    "Personal Loans in Tirupati",
    "Personal Loan Consultant in Tirupati",
    "Low Interest Personal Loans in Tirupati",
    "Personal Loan Eligibility",
    "Personal Loan EMI Calculator",
    "Personal Loan Near Me"
  ]
};

export default function PersonalLoansPage() {
  const plData = LOAN_PRODUCTS.find((l) => l.id === "personal-loans")!;
  const plFaqs = MAIN_FAQS.filter((f) => f.category === "Personal Loans");

  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Personal Loans in Tirupati" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Personal Loans in Tirupati — Fast & Collateral-Free
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Need funds for medical emergencies, higher education, marriage, or family obligations? M Prathap (MBA) connects you with leading banks to secure personal loan offers with minimal documentation.
          </p>

          <div className="bg-brand-950 border border-blue-800 rounded p-4 max-w-2xl text-xs text-slate-300">
            <strong className="text-white block mb-1">Indicative Interest Rate Disclosure:</strong>
            Personal loan rates may start from <strong>9.90%*</strong> per annum for eligible applicants. Actual lender pricing depends on applicant salary/income, credit score (CIBIL), employer category, and existing liabilities.
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#enquiry-form"
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-5 py-2.5 rounded text-sm transition-colors border border-brand-500"
            >
              Check Personal Loan Eligibility
            </a>
            <a
              href={buildWhatsAppLink("Hello M Prathap, I am looking for a Personal Loan in Tirupati.")}
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

      {/* Eligible Use Cases */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
              Responsible Personal Finance Use Cases
            </h2>
            <p className="text-sm text-slate-600">
              Personal loans can bridge planned life events and urgent financial obligations. We advocate disciplined borrowing matching your exact repayment capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plData.useCases.map((uc, i) => (
              <div key={i} className="bg-slate-50 border border-slate-300 rounded p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={500000} initialRate={9.90} initialTenure={5} loanTitle="Personal Loan" />
        </div>
      </section>

      {/* Document & Eligibility */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-brand-900 text-white rounded-md border border-brand-950 p-6 sm:p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white border-b border-blue-800 pb-3">
              Personal Loan Documentation Checklist
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-3">
                <h4 className="font-bold text-blue-300 uppercase tracking-wider text-xs">
                  Salaried Employees
                </h4>
                <ul className="space-y-2 text-slate-200">
                  {plData.documents.salaried.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-blue-300 uppercase tracking-wider text-xs">
                  Self-Employed Applicants
                </h4>
                <ul className="space-y-2 text-slate-200">
                  {plData.documents.selfEmployed.map((doc, idx) => (
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

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="Personal Loan" title="Apply for Personal Loan Assistance in Tirupati" />
        </div>
      </section>

      <FAQ items={plFaqs} title="Personal Loan FAQs" />

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
