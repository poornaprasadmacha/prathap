import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import Disclaimer from "@/components/Disclaimer";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { buildPhoneCallLink, buildWhatsAppLink } from "@/lib/utils";

export const metadata = {
  title: "Contact M Prathap Financial Services | Tirupati",
  description: "Contact M Prathap (MBA, 15+ Yrs exp) for Home Loans, Personal Loans, LAP, Business Finance & Insurance in Tirupati. Call +91 9550801743.",
  keywords: ["Contact M Prathap Tirupati", "Loan Consultant Phone Number Tirupati", "Financial Advisor Contact Tirupati"]
};

export default function ContactPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact M Prathap Financial Services
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Reach out for a confidential financial consultation. We provide doorstep guidance for loans and insurance across Tirupati and surrounding mandals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-300 rounded-md p-6 sm:p-8 space-y-6">
              <h2 className="text-2xl font-bold text-brand-900 border-b border-slate-200 pb-3">
                Direct Contact Details
              </h2>

              <div className="space-y-4 text-sm text-slate-800">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Phone Call</strong>
                    <a href={buildPhoneCallLink()} className="text-brand-700 font-bold hover:underline">
                      +91 9550801743
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">WhatsApp Chat</strong>
                    <a
                      href={buildWhatsAppLink("Hello M Prathap, I am reaching out from your website contact page.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      +91 9550801743 (Click to Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Email Address</strong>
                    <a href="mailto:prathapmba10@gmail.com" className="text-brand-700 font-medium hover:underline">
                      prathapmba10@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Primary Service Location</strong>
                    <span className="text-slate-600">Tirupati, Andhra Pradesh, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-200 pt-3">
                  <Clock className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Consultation Hours</strong>
                    <span className="text-slate-600">Monday – Saturday: 9:30 AM – 7:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-brand-900 text-white p-4 rounded text-xs space-y-2">
                <span className="font-bold text-blue-300 block">Doorstep Assistance Available</span>
                <p className="text-slate-300 leading-relaxed">
                  We collect documentation directly from your doorstep in Tirupati Urban, Rural, Renigunta, Chandragiri, and Puttur.
                </p>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-7">
              <LeadForm title="Send Your Enquiry Directly" />
            </div>

          </div>
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
