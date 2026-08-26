import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EMIForm from "@/components/EMIForm";
import Disclaimer from "@/components/Disclaimer";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Business Loan EMI Calculator Tirupati | MSME Loan Calculator",
  description: "Calculate MSME & commercial business loan monthly EMIs at 10.00%* starting rate in Tirupati.",
  keywords: ["Business Loan EMI Calculator Tirupati", "MSME Loan Calculator Tirupati"]
};

export default function BusinessLoanCalculatorPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Calculators", href: "/calculators" }, { label: "Business Loan Calculator" }]} />

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={1500000} initialRate={10.00} initialTenure={3} loanTitle="Business Loan" />
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="Business Loan" title="Apply for Business Finance Assistance" />
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
