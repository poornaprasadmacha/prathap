import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Terms of Service | M Prathap Financial Services",
  description: "Terms of Service for M Prathap Financial Services advisory website."
};

export default function TermsPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-800 text-sm leading-relaxed">
          <h1 className="text-3xl font-extrabold text-brand-900 border-b border-slate-200 pb-3">
            Terms of Service
          </h1>

          <p>
            Welcome to the official website of M Prathap Financial Services. By accessing or using this website, you agree to comply with and be bound by the following Terms of Service.
          </p>

          <h2 className="text-lg font-bold text-brand-900 pt-2">1. Advisory Role</h2>
          <p>
            M Prathap Financial Services operates as an independent financial consultancy assisting customers in evaluating loan offers and insurance policies from various banks, housing finance companies, NBFCs, and IRDAI-registered insurance providers.
          </p>

          <h2 className="text-lg font-bold text-brand-900 pt-2">2. No Guaranteed Approval</h2>
          <p>
            Loan approval, interest rates, processing fees, loan-to-value limits, and insurance policy coverage are determined solely by respective lending institutions and insurers subject to borrower eligibility and underwriting evaluation. M Prathap Financial Services does not approve loans or guarantee 100% approval.
          </p>

          <h2 className="text-lg font-bold text-brand-900 pt-2">3. Accuracy of Information</h2>
          <p>
            While we strive to maintain current information regarding starting interest rates and policy details, financial parameters change periodically. Users are encouraged to verify final sanction terms from official bank documentation before execution.
          </p>
        </div>
      </section>
    </div>
  );
}
