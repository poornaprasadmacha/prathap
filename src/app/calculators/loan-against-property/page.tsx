import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EMIForm from "@/components/EMIForm";
import Disclaimer from "@/components/Disclaimer";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Loan Against Property (LAP) EMI Calculator Tirupati",
  description: "Calculate Loan Against Property (LAP) monthly repayments at 8.50%* starting rate for residential & commercial property in Tirupati.",
  keywords: ["LAP EMI Calculator Tirupati", "Mortgage Loan Calculator Tirupati"]
};

export default function LAPCalculatorPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Calculators", href: "/calculators" }, { label: "LAP Loan Calculator" }]} />

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={5000000} initialRate={8.50} initialTenure={15} loanTitle="Loan Against Property" />
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="Loan Against Property" title="Apply for LAP Loan Consultation" />
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
