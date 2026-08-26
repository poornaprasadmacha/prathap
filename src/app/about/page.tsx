import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AboutPrathap from "@/components/AboutPrathap";
import WhyChooseUs from "@/components/WhyChooseUs";
import LeadForm from "@/components/LeadForm";
import Disclaimer from "@/components/Disclaimer";
import PartnerBanks from "@/components/PartnerBanks";
import PartnerInsuranceCompanies from "@/components/PartnerInsuranceCompanies";
import { Award, GraduationCap, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { buildPhoneCallLink } from "@/lib/utils";

export const metadata = {
  title: "About M Prathap, MBA | Financial & Loan Consultant Tirupati",
  description: "Learn about M Prathap, MBA (15+ Years financial sector experience) providing transparent loan & insurance advisory in Tirupati.",
  keywords: ["M Prathap MBA Tirupati", "About M Prathap Financial Services", "Financial Consultant Tirupati"]
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "About M Prathap" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About M Prathap Financial Services
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Delivering transparent, client-focused loan and insurance advisory across Tirupati, Renigunta, Chandragiri, and Chittoor region for over 15+ years.
          </p>
        </div>
      </section>

      <AboutPrathap />
      <WhyChooseUs />
      <PartnerBanks />
      <PartnerInsuranceCompanies />

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm title="Schedule an Advisory Consultation with M Prathap" />
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
