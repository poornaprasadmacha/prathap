import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Award, CheckCircle2, ChevronRight } from "lucide-react";
import { buildWhatsAppLink, buildPhoneCallLink } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Main Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Qualification Sub-headline */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-200">
              <Award className="w-4 h-4 text-blue-400 shrink-0" />
              <span>M Prathap, MBA • 15+ Years Financial Sector Experience in Tirupati</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Home Loans, Personal Loans & Insurance in <span className="text-blue-300">Tirupati</span>
            </h1>

            {/* Clear Description */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
              Get unbiased financial guidance, rate comparisons across top banks, legal documentation pre-checks, and doorstep assistance for housing, personal credit, business finance, and health insurance.
            </p>

            {/* Indicative Rate Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-brand-950 border border-blue-800 p-3 rounded text-center">
                <span className="text-xs text-blue-300 block">Home Loans</span>
                <span className="text-xl font-bold text-white">7.15%<span className="text-xs text-blue-400">*</span></span>
              </div>
              <div className="bg-brand-950 border border-blue-800 p-3 rounded text-center">
                <span className="text-xs text-blue-300 block">LAP Loans</span>
                <span className="text-xl font-bold text-white">8.50%<span className="text-xs text-blue-400">*</span></span>
              </div>
              <div className="bg-brand-950 border border-blue-800 p-3 rounded text-center">
                <span className="text-xs text-blue-300 block">Personal Loans</span>
                <span className="text-xl font-bold text-white">9.90%<span className="text-xs text-blue-400">*</span></span>
              </div>
              <div className="bg-brand-950 border border-blue-800 p-3 rounded text-center">
                <span className="text-xs text-blue-300 block">Business Loans</span>
                <span className="text-xl font-bold text-white">10.00%<span className="text-xs text-blue-400">*</span></span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={buildWhatsAppLink("Hello M Prathap, I would like to inquire about loan options in Tirupati.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-5 py-3 rounded text-sm transition-colors border border-emerald-600 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                WhatsApp Direct
              </a>
              <a
                href={buildPhoneCallLink()}
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-5 py-3 rounded text-sm transition-colors border border-slate-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                Call +91 95508 01743
              </a>
              <Link
                href="/contact#enquiry-form"
                className="bg-brand-600 hover:bg-brand-500 text-white font-semibold px-5 py-3 rounded text-sm transition-colors border border-brand-500 flex items-center gap-1"
              >
                Check Eligibility
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Clean Advisory Box */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded border border-slate-300 p-6 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-lg font-bold text-brand-900">
                  Why Consult M Prathap (MBA)?
                </h2>
                <p className="text-xs text-slate-600">
                  Independent financial advisory serving Tirupati & Chittoor district.
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>15+ Years Experience:</strong> Structuring retail and business loans for maximum bank approval.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Multi-Bank Comparison:</strong> Comparing offers across HDFC, SBI, ICICI, Union Bank & more.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Legal Documentation Support:</strong> Reviewing title link deeds & TUDA/DTCP layout approvals.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>IRDAI Insurance Guidance:</strong> Term life & health floater plans for complete family protection.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
