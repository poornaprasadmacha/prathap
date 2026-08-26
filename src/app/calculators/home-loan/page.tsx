import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EMIForm from "@/components/EMIForm";
import Disclaimer from "@/components/Disclaimer";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Home Loan EMI Calculator Tirupati | Estimate Repayment & Rates",
  description: "Interactive Home Loan EMI calculator. Estimate monthly payments at 7.15%* starting rate for apartments and house construction in Tirupati.",
  keywords: ["Home Loan EMI Calculator Tirupati", "Housing Loan Calculator Tirupati", "Home Loan Repayment Schedule"]
};

export default function HomeLoanCalculatorPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Calculators", href: "/calculators" }, { label: "Home Loan Calculator" }]} />

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={3500000} initialRate={7.15} initialTenure={20} loanTitle="Home Loan" />
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="Home Loan" title="Apply for Home Loan Approval in Tirupati" />
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
