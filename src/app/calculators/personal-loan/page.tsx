import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import EMIForm from "@/components/EMIForm";
import Disclaimer from "@/components/Disclaimer";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Personal Loan EMI Calculator Tirupati | Estimate Unsecured Loan EMI",
  description: "Calculate personal loan monthly EMIs and total interest payable at starting 9.90%* rate with M Prathap Financial Services.",
  keywords: ["Personal Loan EMI Calculator Tirupati", "Unsecured Loan Calculator Tirupati"]
};

export default function PersonalLoanCalculatorPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Calculators", href: "/calculators" }, { label: "Personal Loan Calculator" }]} />

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={500000} initialRate={9.90} initialTenure={5} loanTitle="Personal Loan" />
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm defaultLoanType="Personal Loan" title="Apply for Personal Loan Assistance" />
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
