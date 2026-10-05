import React from "react";
import Hero from "@/components/Hero";
import PartnerBanks from "@/components/PartnerBanks";
import PartnerInsuranceCompanies from "@/components/PartnerInsuranceCompanies";
import LatestUpdatesSection from "@/components/LatestUpdatesSection";
import TrustSection from "@/components/TrustSection";
import LoanServices from "@/components/LoanServices";
import InsuranceServices from "@/components/InsuranceServices";
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
      {/* 1. Profile Hero Section with SP Financial Services branding, enlarged photo, displayed phone number */}
      <Hero />

      {/* 2. Partner Logos Showcase immediately after Profile Hero */}
      <div id="partner-logos" className="bg-white border-b border-slate-200">
        <PartnerBanks />
        <PartnerInsuranceCompanies />
      </div>

      {/* 3. Latest Notifications & Live Benchmark Rates */}
      <LatestUpdatesSection />

      {/* 4. Trust Highlights Bar */}
      <TrustSection />

      {/* 5. Interactive Loan Services Hub */}
      <LoanServices />

      {/* 6. Interactive EMI Calculator Preview */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={3500000} initialRate={7.15} initialTenure={20} loanTitle="Home Loan" />
        </div>
      </section>

      {/* 7. Insurance Solutions Hub */}
      <InsuranceServices />

      {/* 8. Why Choose SP Financial Services */}
      <WhyChooseUs />

      {/* 9. Founder & Senior Advisor Biography */}
      <AboutPrathap />

      {/* 10. Direct Lead Enquiry Form */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            title="Get Personalized Loan & Insurance Guidance in Tirupati"
            subtitle="Submit your contact details for immediate confidential consultation with M Prathap, MBA at SP Financial Services."
          />
        </div>
      </section>

      {/* 11. Client Testimonials */}
      <Testimonials />

      {/* 12. Local Mandals & GEO Areas for Tirupati & Surrounding Regions */}
      <LocalAreas />

      {/* 13. Frequently Asked Questions */}
      <FAQ />

      {/* 14. Regulatory & Legal Disclaimer */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
