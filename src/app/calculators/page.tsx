import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import EMIForm from "@/components/EMIForm";
import Disclaimer from "@/components/Disclaimer";
import { Calculator, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Loan EMI Calculators Hub | Home, Personal, LAP & Business Loans",
  description: "Calculate monthly EMI, total interest, and loan repayment schedules instantly for Home Loans, Personal Loans, Business Finance & LAP in Tirupati.",
  keywords: ["EMI Calculator Tirupati", "Home Loan EMI Calculator", "Personal Loan EMI Calculator", "LAP EMI Calculator"]
};

export default function CalculatorsHubPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Financial Calculators Hub" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Loan EMI Calculators Hub
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Estimate your monthly repayments, interest cost, and loan tenure breakdown. Select your loan category below for pre-configured interest rate parameters.
          </p>
        </div>
      </section>

      {/* Quick Jump Grid */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/calculators/home-loan"
              className="bg-slate-50 border border-slate-300 rounded p-5 hover:border-brand-600 transition-colors space-y-2 group"
            >
              <Calculator className="w-6 h-6 text-brand-600" />
              <h3 className="font-bold text-brand-900 text-base group-hover:text-brand-700">Home Loan EMI</h3>
              <p className="text-xs text-slate-600">Calculated at indicative starting rate of 7.15%*</p>
            </Link>

            <Link
              href="/calculators/personal-loan"
              className="bg-slate-50 border border-slate-300 rounded p-5 hover:border-brand-600 transition-colors space-y-2 group"
            >
              <Calculator className="w-6 h-6 text-brand-600" />
              <h3 className="font-bold text-brand-900 text-base group-hover:text-brand-700">Personal Loan EMI</h3>
              <p className="text-xs text-slate-600">Calculated at indicative starting rate of 9.90%*</p>
            </Link>

            <Link
              href="/calculators/business-loan"
              className="bg-slate-50 border border-slate-300 rounded p-5 hover:border-brand-600 transition-colors space-y-2 group"
            >
              <Calculator className="w-6 h-6 text-brand-600" />
              <h3 className="font-bold text-brand-900 text-base group-hover:text-brand-700">Business Loan EMI</h3>
              <p className="text-xs text-slate-600">Calculated at indicative starting rate of 10.00%*</p>
            </Link>

            <Link
              href="/calculators/loan-against-property"
              className="bg-slate-50 border border-slate-300 rounded p-5 hover:border-brand-600 transition-colors space-y-2 group"
            >
              <Calculator className="w-6 h-6 text-brand-600" />
              <h3 className="font-bold text-brand-900 text-base group-hover:text-brand-700">LAP Loan EMI</h3>
              <p className="text-xs text-slate-600">Calculated at indicative starting rate of 8.50%*</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Interactive Calculator */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={3500000} initialRate={7.15} initialTenure={20} loanTitle="General Loan" />
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
