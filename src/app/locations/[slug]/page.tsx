import React from "react";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import PartnerBanks from "@/components/PartnerBanks";
import PartnerInsuranceCompanies from "@/components/PartnerInsuranceCompanies";
import { SERVICED_LOCATIONS } from "@/data/locations";
import { MapPin, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, buildPhoneCallLink } from "@/lib/utils";

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICED_LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export function generateMetadata({ params }: LocationPageProps) {
  const loc = SERVICED_LOCATIONS.find((l) => l.slug === params.slug);
  if (!loc) return {};

  return {
    title: `Financial Consultant & Home Loans in ${loc.name} | M Prathap`,
    description: `Doorstep financial advisory, Home Loans, Personal Loans, LAP & Health Insurance for residents in ${loc.name}. Guided by M Prathap, MBA.`,
    keywords: [
      `Financial Consultant in ${loc.name}`,
      `Home Loans in ${loc.name}`,
      `Loan Agent in ${loc.name}`,
      `Personal Loans ${loc.name}`,
      `Business Finance ${loc.name}`
    ]
  };
}

export default function LocationDetailPage({ params }: LocationPageProps) {
  const loc = SERVICED_LOCATIONS.find((l) => l.slug === params.slug);

  if (!loc) {
    notFound();
  }

  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Locations", href: "/#locations" }, { label: loc.name }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Home Loans & Financial Advisory in {loc.name}
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            {loc.description} M Prathap (MBA, 15+ Yrs experience) provides doorstep consultation, document pickup, and bank rate comparison for clients in {loc.name}.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#enquiry-form"
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-5 py-2.5 rounded text-sm transition-colors border border-brand-500"
            >
              Check Loan Eligibility in {loc.name}
            </a>
            <a
              href={buildWhatsAppLink(`Hello M Prathap, I am based in ${loc.name} and need financial assistance.`)}
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

      {/* Services Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
              Services Offered for {loc.name} Residents
            </h2>
            <p className="text-sm text-slate-600">
              Unbiased guidance across housing, business credit, personal loans, and health policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loc.keyServices.map((service, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-300 rounded p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-brand-900 text-base">{service}</h3>
                  <span className="text-xs text-slate-500">Available with doorstep assistance in {loc.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerBanks />
      <PartnerInsuranceCompanies />

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm title={`Request Loan Consultation in ${loc.name}`} />
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
