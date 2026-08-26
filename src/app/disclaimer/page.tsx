import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Disclaimer from "@/components/Disclaimer";

export const metadata = {
  title: "Financial & Regulatory Disclaimer | M Prathap Financial Services",
  description: "Mandatory financial & insurance disclaimers regarding indicative rates and regulatory terms."
};

export default function FullDisclaimerPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Financial Disclaimer" }]} />

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl font-extrabold text-brand-900 border-b border-slate-200 pb-3">
            Financial & Insurance Regulatory Disclaimer
          </h1>

          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
