"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone, Calculator, CheckCircle2, Home, User, Briefcase, Building, Shield, FileText, ArrowRight } from "lucide-react";
import { LOAN_PRODUCTS } from "@/data/loans";
import { buildWhatsAppLink, buildPhoneCallLink } from "@/lib/utils";

type SubTab = "about" | "eligibility" | "apply" | "documents";

export default function LoanServices() {
  const [activeProductId, setActiveProductId] = useState<string>("home-loans");
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("about");

  const activeLoan = LOAN_PRODUCTS.find((p) => p.id === activeProductId) || LOAN_PRODUCTS[0];

  const categoryIcons: Record<string, React.ReactNode> = {
    "home-loans": <Home className="w-6 h-6" />,
    "personal-loans": <User className="w-6 h-6" />,
    "business-loans": <Briefcase className="w-6 h-6" />,
    "loan-against-property": <Building className="w-6 h-6" />,
    "plot-loans": <Shield className="w-6 h-6" />,
  };

  return (
    <section className="bg-slate-50 py-12 border-b border-slate-200" id="loan-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner with Background & Floating Top Tabs (Image 3 Style) */}
        <div className="relative bg-slate-900 text-white rounded-3xl overflow-hidden shadow-sm">
          
          {/* Background Image / Motif Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-brand-950 opacity-90"></div>
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 p-8 sm:p-12 pb-24 space-y-3 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/50 inline-block">
              Interactive Financial Solutions Hub
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Retail & Commercial <span className="text-sky-400">Loan Consultancy</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Select a loan category below to explore scheme details, eligibility guidelines, interest rates, and required documentation in Tirupati.
            </p>
          </div>
        </div>

        {/* Floating Product Selector Cards (Image 3 Style) */}
        <div className="-mt-20 relative z-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-6xl mx-auto px-2">
          {LOAN_PRODUCTS.map((loan) => {
            const isActive = loan.id === activeProductId;
            return (
              <button
                key={loan.id}
                onClick={() => {
                  setActiveProductId(loan.id);
                  setActiveSubTab("about");
                }}
                className={`relative group rounded-2xl p-4 transition-all text-left flex flex-col justify-between space-y-3 cursor-pointer ${
                  isActive
                    ? "bg-[#0088ff] text-white shadow-md scale-[1.02]"
                    : "bg-white text-slate-800 border border-slate-200 hover:border-sky-400 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl ${isActive ? "bg-white/20 text-white" : "bg-sky-50 text-sky-600"}`}>
                    {categoryIcons[loan.id] || <FileText className="w-5 h-5" />}
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    isActive ? "bg-white text-[#0088ff]" : "bg-slate-100 text-slate-600"
                  }`}>
                    {loan.indicativeRate}*
                  </span>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold leading-snug line-clamp-2">
                    {loan.title}
                  </h3>
                </div>

                {/* Downward Arrow Indicator on Active Tab (Image 3 Beak Effect) */}
                {isActive && (
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#0088ff]"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Scheme Detail Pane (Image 3 Style) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Main Title of Selected Scheme */}
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              {activeLoan.title} <span className="text-[#ea580c] font-black">({activeLoan.indicativeRate}*)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Indicative starting rate from <strong>{activeLoan.indicativeRate}*</strong> per annum across leading banks in Tirupati & Chittoor district.
            </p>
          </div>

          {/* Image 3 Interactive Split Pane: Left Vertical Pills + Right Content Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Left Column: Vertical Pill Buttons (Image 3 Style) */}
            <div className="md:col-span-4 lg:col-span-3 space-y-2.5">
              
              <button
                onClick={() => setActiveSubTab("about")}
                className={`w-full text-left px-4 py-3 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-between border ${
                  activeSubTab === "about"
                    ? "bg-white text-sky-600 border-sky-500 shadow-sm"
                    : "bg-[#faf7f2] text-slate-700 border-[#eae4d9] hover:bg-slate-100"
                }`}
              >
                <span>About Scheme</span>
                <ChevronRight className={`w-4 h-4 ${activeSubTab === "about" ? "text-sky-600" : "text-slate-400"}`} />
              </button>

              <button
                onClick={() => setActiveSubTab("eligibility")}
                className={`w-full text-left px-4 py-3 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-between border ${
                  activeSubTab === "eligibility"
                    ? "bg-white text-sky-600 border-sky-500 shadow-sm"
                    : "bg-[#faf7f2] text-slate-700 border-[#eae4d9] hover:bg-slate-100"
                }`}
              >
                <span>About Eligibility</span>
                <ChevronRight className={`w-4 h-4 ${activeSubTab === "eligibility" ? "text-sky-600" : "text-slate-400"}`} />
              </button>

              <button
                onClick={() => setActiveSubTab("apply")}
                className={`w-full text-left px-4 py-3 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-between border ${
                  activeSubTab === "apply"
                    ? "bg-white text-sky-600 border-sky-500 shadow-sm"
                    : "bg-[#faf7f2] text-slate-700 border-[#eae4d9] hover:bg-slate-100"
                }`}
              >
                <span>How to Apply</span>
                <ChevronRight className={`w-4 h-4 ${activeSubTab === "apply" ? "text-sky-600" : "text-slate-400"}`} />
              </button>

              <button
                onClick={() => setActiveSubTab("documents")}
                className={`w-full text-left px-4 py-3 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-between border ${
                  activeSubTab === "documents"
                    ? "bg-white text-sky-600 border-sky-500 shadow-sm"
                    : "bg-[#faf7f2] text-slate-700 border-[#eae4d9] hover:bg-slate-100"
                }`}
              >
                <span>Required Documents</span>
                <ChevronRight className={`w-4 h-4 ${activeSubTab === "documents" ? "text-sky-600" : "text-slate-400"}`} />
              </button>

              {/* Calculator Shortcut */}
              <div className="pt-4">
                <Link
                  href="/calculators"
                  className="w-full bg-[#fae8de] hover:bg-[#f8ded1] text-[#9a3412] font-bold p-3.5 rounded-2xl border border-[#f3cbb7] text-xs flex items-center gap-2 transition-colors"
                >
                  <Calculator className="w-4 h-4 text-[#ea580c]" />
                  <span>Open EMI Calculator</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Detailed Pane Display (Image 3 Right Pane Style) */}
            <div className="md:col-span-8 lg:col-span-9 bg-[#fffdfa] border border-[#eae4d9] rounded-2xl p-6 sm:p-8 space-y-6 relative border-r-4 border-r-sky-500">
              
              {/* Tab Content 1: About Scheme */}
              {activeSubTab === "about" && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900">
                    Scheme Description & Key Features
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {activeLoan.fullDescription}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {activeLoan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab Content 2: About Eligibility */}
              {activeSubTab === "eligibility" && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900">
                    Borrower Qualification & Eligibility Criteria
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Eligibility is evaluated based on monthly income, credit score (750+ CIBIL preferred), existing FOIR ratio, and property verification (for secured loans).
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <div className="font-bold text-slate-900">Key Qualifications for {activeLoan.title}:</div>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      {activeLoan.eligibility.map((el, idx) => (
                        <li key={idx}>{el}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab Content 3: How to Apply */}
              {activeSubTab === "apply" && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900">
                    Step-by-Step Application Process
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1">
                      <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center mx-auto">1</div>
                      <div className="font-bold text-xs text-slate-900">Consultation</div>
                      <p className="text-[11px] text-slate-600">Share your requirement & document check with M Prathap.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1">
                      <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center mx-auto">2</div>
                      <div className="font-bold text-xs text-slate-900">Bank Comparison</div>
                      <p className="text-[11px] text-slate-600">We compare rates across HDFC, SBI, ICICI & select best fit.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1">
                      <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center mx-auto">3</div>
                      <div className="font-bold text-xs text-slate-900">Sanction & Payout</div>
                      <p className="text-[11px] text-slate-600">Doorstep document pick-up, sanction letter & fast disbursement.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content 4: Required Documents */}
              {activeSubTab === "documents" && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900">
                    Mandatory Documentation Checklist
                  </h4>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 text-xs sm:text-sm">
                    {activeLoan.documents.salaried.length > 0 && (
                      <div className="space-y-1">
                        <div className="font-bold text-slate-900">For Salaried Individuals:</div>
                        <ul className="list-disc pl-5 space-y-1 text-slate-700">
                          {activeLoan.documents.salaried.map((doc, idx) => (
                            <li key={idx}>{doc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {activeLoan.documents.selfEmployed.length > 0 && (
                      <div className="space-y-1 pt-2">
                        <div className="font-bold text-slate-900">For Self-Employed / Business Owners:</div>
                        <ul className="list-disc pl-5 space-y-1 text-slate-700">
                          {activeLoan.documents.selfEmployed.map((doc, idx) => (
                            <li key={idx}>{doc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons Row */}
              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-slate-200">
                <a
                  href={buildWhatsAppLink(`Hello M Prathap, I am interested in ${activeLoan.title} (${activeLoan.indicativeRate}*).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-100" />
                  <span>Inquire on WhatsApp</span>
                </a>
                <a
                  href={buildPhoneCallLink()}
                  className="bg-slate-900 hover:bg-slate-950 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-300" />
                  <span>Call +91 95508 01743</span>
                </a>
                <Link
                  href="/contact#enquiry-form"
                  className="bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold px-4 py-2.5 rounded-xl text-xs border border-sky-300 flex items-center gap-1 transition-colors ml-auto"
                >
                  <span>Check Loan Eligibility</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
