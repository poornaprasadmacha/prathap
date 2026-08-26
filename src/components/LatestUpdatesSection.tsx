"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calculator, CheckCircle2, ArrowRight, Bell, FileText, TrendingUp } from "lucide-react";
import { buildWhatsAppLink, buildPhoneCallLink } from "@/lib/utils";

export default function LatestUpdatesSection() {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span>Real-Time Market Directives</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Latest Rates & Loan Updates in Tirupati
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href={buildWhatsAppLink("Hello M Prathap, I want to check latest loan rate updates.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100" />
              <span>WhatsApp Inquiry</span>
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

        {/* 3 User-Friendly Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Bank Benchmark Rates */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-blue-500 transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Bell className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Current Benchmark Rates 2026
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Home loans starting at <strong>7.15%*</strong>, LAP at <strong>8.50%*</strong>, and personal loans starting at <strong>9.90%*</strong> with competitive processing fees across Tirupati branches.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200/60">
              <Link
                href="/calculators"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
              >
                <Calculator className="w-4 h-4 text-blue-600" />
                <span>Calculate Your EMI Online</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ml-auto" />
              </Link>
            </div>
          </div>

          {/* Card 2: Documentation Pre-Checks */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-emerald-500 transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Doorstep Document Pre-Verification
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pre-check title link deeds, TUDA/DTCP approved layout plan copies, Form 16, and ITR files before bank login to prevent rejection.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200/60">
              <a
                href={buildWhatsAppLink("Hello M Prathap, I want to verify my property documents for loan eligibility.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Request Document Verification</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ml-auto" />
              </a>
            </div>
          </div>

          {/* Card 3: Instant Fast-Track Approvals */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-brand-600 transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Salaried & Business Fast-Track
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Special fast-track loan sanction channels for government employees, IT professionals, doctors, and established business owners in Tirupati.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200/60">
              <a
                href={buildPhoneCallLink()}
                className="text-xs font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1 group"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call +91 95508 01743 Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ml-auto" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
