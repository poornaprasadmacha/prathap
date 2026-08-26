import React from "react";
import Hero from "@/components/Hero";
import LatestUpdatesSection from "@/components/LatestUpdatesSection";
import TrustSection from "@/components/TrustSection";
import LoanServices from "@/components/LoanServices";
import InsuranceServices from "@/components/InsuranceServices";
import PartnerBanks from "@/components/PartnerBanks";
import PartnerInsuranceCompanies from "@/components/PartnerInsuranceCompanies";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutPrathap from "@/components/AboutPrathap";
import LeadForm from "@/components/LeadForm";
import EMIForm from "@/components/EMIForm";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import LocalAreas from "@/components/LocalAreas";
import Disclaimer from "@/components/Disclaimer";

export default function HomePage() {
  return (
    <div className="space-y-0 bg-slate-50">
      {/* Hero Banner (Soft Mint Canvas & Mosaic Grid - Image 1 Theme) */}
      <Hero />

      {/* Latest Notifications & Rates Ticker (Image 2 Theme) */}
      <LatestUpdatesSection />

      {/* Trust Highlights Bar */}
      <TrustSection />

      {/* Interactive Loan Services Hub (Image 3 Theme) */}
      <LoanServices />

      {/* Interactive EMI Calculator Preview */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={3500000} initialRate={7.15} initialTenure={20} loanTitle="Home Loan" />
        </div>
      </section>

      {/* Insurance Section */}
      <InsuranceServices />

      {/* Institution Showcase */}
      <PartnerBanks />
      <PartnerInsuranceCompanies />

      {/* Why Choose M Prathap */}
      <WhyChooseUs />

      {/* About Consultant Highlight */}
      <AboutPrathap />

      {/* Lead Enquiry Form */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            title="Get Personalized Loan & Insurance Guidance"
            subtitle="Submit your details for an immediate confidential consultation with M Prathap, MBA."
          />
        </div>
      </section>

      {/* Client Experience */}
      <Testimonials />

      {/* Local Geography Mandals */}
      <LocalAreas />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Regulatory Legal Disclaimer */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
