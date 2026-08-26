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
    "home-loans": <Home className="w-5 h-5" />,
    "personal-loans": <User className="w-5 h-5" />,
    "business-loans": <Briefcase className="w-5 h-5" />,
    "loan-against-property": <Building className="w-5 h-5" />,
    "plot-loans": <Shield className="w-5 h-5" />,
  };

  return (
    <section className="bg-slate-50 py-12 border-b border-slate-200" id="loan-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Hub Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
            Comprehensive Financial Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-900 tracking-tight">
            Explore Retail & Commercial Loan Schemes
          </h2>
          <p className="text-sm text-slate-600">
            Select a loan product below to view scheme details, eligibility guidelines, rate benchmarks, and required documents.
          </p>
        </div>

        {/* Top Product Selector Tabs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {LOAN_PRODUCTS.map((loan) => {
            const isActive = loan.id === activeProductId;
            return (
              <button
                key={loan.id}
                onClick={() => {
                  setActiveProductId(loan.id);
                  setActiveSubTab("about");
                }}
                className={`rounded-xl p-4 transition-all text-left flex flex-col justify-between space-y-2.5 cursor-pointer border ${
                  isActive
                    ? "bg-brand-900 text-white border-brand-900 shadow-md ring-2 ring-blue-500/50"
                    : "bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${isActive ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"}`}>
                    {categoryIcons[loan.id] || <FileText className="w-5 h-5" />}
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    isActive ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-700"
                  }`}>
                    {loan.indicativeRate}*
                  </span>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2">
                    {loan.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Scheme Detail Pane */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Main Title of Selected Scheme */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                {activeLoan.title} <span className="text-emerald-600 font-extrabold">({activeLoan.indicativeRate}*)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Starting interest rate benchmark across top banking partners in Tirupati.
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <a
                href={buildWhatsAppLink(`Hello M Prathap, I have an inquiry about ${activeLoan.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>WhatsApp</span>
              </a>
              <a
                href={buildPhoneCallLink()}
                className="bg-brand-900 hover:bg-brand-950 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-blue-300" />
                <span>Call Advisor</span>
              </a>
            </div>
          </div>

          {/* Sub-Tab Navigation & Detail Pane */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Column: Sub-Tab Pills */}
            <div className="md:col-span-4 lg:col-span-3 space-y-2">
              
              <button
                onClick={() => setActiveSubTab("about")}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between border ${
                  activeSubTab === "about"
                    ? "bg-blue-50 text-blue-700 border-blue-500 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span>About Scheme</span>
                <ChevronRight className={`w-4 h-4 ${activeSubTab === "about" ? "text-blue-600" : "text-slate-400"}`} />
              </button>

              <button
                onClick={() => setActiveSubTab("eligibility")}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between border ${
                  activeSubTab === "eligibility"
                    ? "bg-blue-50 text-blue-700 border-blue-500 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span>Eligibility Criteria</span>
                <ChevronRight className={`w-4 h-4 ${activeSubTab === "eligibility" ? "text-blue-600" : "text-slate-400"}`} />
              </button>

              <button
                onClick={() => setActiveSubTab("apply")}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between border ${
                  activeSubTab === "apply"
                    ? "bg-blue-50 text-blue-700 border-blue-500 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span>How to Apply</span>
                <ChevronRight className={`w-4 h-4 ${activeSubTab === "apply" ? "text-blue-600" : "text-slate-400"}`} />
              </button>

              <button
                onClick={() => setActiveSubTab("documents")}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between border ${
                  activeSubTab === "documents"
                    ? "bg-blue-50 text-blue-700 border-blue-500 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span>Required Documents</span>
                <ChevronRight className={`w-4 h-4 ${activeSubTab === "documents" ? "text-blue-600" : "text-slate-400"}`} />
              </button>

              {/* Calculator Link */}
              <div className="pt-2">
                <Link
                  href="/calculators"
                  className="w-full bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold p-3 rounded-xl border border-amber-300 text-xs flex items-center gap-2 transition-colors justify-center"
                >
                  <Calculator className="w-4 h-4 text-amber-700" />
                  <span>Open EMI Calculator</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Detail Content */}
            <div className="md:col-span-8 lg:col-span-9 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-5">
              
              {/* Tab 1: About Scheme */}
              {activeSubTab === "about" && (
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-slate-900">
                    Scheme Overview & Key Features
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {activeLoan.fullDescription}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {activeLoan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Eligibility Criteria */}
              {activeSubTab === "eligibility" && (
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-slate-900">
                    Qualifications & Eligibility Requirements
                  </h4>
                  <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <div className="font-bold text-slate-900">Eligibility Guidelines for {activeLoan.title}:</div>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                      {activeLoan.eligibility.map((el, idx) => (
                        <li key={idx}>{el}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 3: How to Apply */}
              {activeSubTab === "apply" && (
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-slate-900">
                    3-Step Doorstep Application Process
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="bg-white p-4 rounded-lg border border-slate-200 text-center space-y-1">
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto">1</div>
                      <div className="font-bold text-slate-900">Consultation</div>
                      <p className="text-slate-600">Share loan requirement & profile details with M Prathap.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200 text-center space-y-1">
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto">2</div>
                      <div className="font-bold text-slate-900">Bank Rate Matching</div>
                      <p className="text-slate-600">We evaluate multi-bank offers across HDFC, SBI, ICICI & NBFCs.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200 text-center space-y-1">
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto">3</div>
                      <div className="font-bold text-slate-900">Sanction & Payout</div>
                      <p className="text-slate-600">Doorstep document collection, legal clearance & fast disbursal.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Required Documents */}
              {activeSubTab === "documents" && (
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-slate-900">
                    Mandatory Documentation Checklist
                  </h4>
                  <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-3 text-xs sm:text-sm">
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
                      <div className="space-y-1 pt-2 border-t border-slate-100">
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

              {/* Action Link Footer */}
              <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200">
                <a
                  href={buildWhatsAppLink(`Hello M Prathap, I want to inquire about ${activeLoan.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-100" />
                  <span>WhatsApp Direct Inquiry</span>
                </a>
                <Link
                  href="/contact#enquiry-form"
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 ml-auto"
                >
                  <span>Check Loan Eligibility Online</span>
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
