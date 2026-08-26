"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown, FileText, CheckCircle2, ExternalLink, Bell, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";

export default function LatestUpdatesSection() {
  return (
    <section className="py-10 bg-white relative">
      
      {/* Downward Double Chevron Scroll Indicator (Image 2 Style) */}
      <div className="flex justify-center -mt-14 mb-6 relative z-20 pointer-events-none">
        <div className="flex flex-col items-center bg-white p-2 rounded-full border border-slate-200 shadow-sm animate-bounce">
          <ChevronDown className="w-5 h-5 text-[#ea580c] -mb-2" />
          <ChevronDown className="w-5 h-5 text-[#ea580c]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Heading: Two-Tone Typography (Image 2 Style) */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            Latest <span className="text-[#ea580c]">Notifications & Rate Updates</span>
          </h2>
          <p className="text-sm font-medium text-slate-600 mt-1">
            Real-time interest rate benchmarks, policy initiatives, and loan documentation manuals in Tirupati.
          </p>
        </div>

        {/* 3-Column Card Layout (Image 2 Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Loan User Manual (Mint Tint Header + Cream Body) */}
          <div className="bg-[#fffdfa] border border-[#e5dfd3] rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:border-emerald-500 transition-colors">
            <div>
              <div className="bg-[#eefbe8] border-b border-[#d4edd0] px-5 py-3 flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  Loan Scheme User Manual
                </span>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                  Complete documentation checklist, eligibility criteria, and step-by-step application guide for Home Loans, Personal Credit, and Business Finance.
                </p>
                <div className="bg-[#f7f5ed] p-3 rounded-xl border border-[#ece6d9] text-xs text-slate-600 font-semibold">
                  • Income proofs • Title link deeds • Bank statements
                </div>
              </div>
            </div>
            <div className="px-5 pb-5 pt-2">
              <Link
                href="/resources"
                className="text-xs font-extrabold uppercase tracking-wider text-[#059669] hover:text-[#047857] underline flex items-center gap-1 transition-colors"
              >
                ONLINE USER MANUAL & GUIDES
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Bank Policy Directives (Mint Tint Header + Cream Body) */}
          <div className="bg-[#fffdfa] border border-[#e5dfd3] rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:border-emerald-500 transition-colors">
            <div>
              <div className="bg-[#eefbe8] border-b border-[#d4edd0] px-5 py-3 flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Bell className="w-4 h-4 text-emerald-700" />
                  Bank Rate Directives 2026
                </span>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                  Current interest rate offers across top banks: Home Loans at <strong className="text-emerald-700">7.15%*</strong>, LAP at <strong className="text-emerald-700">8.50%*</strong>, and zero processing fee festive schemes.
                </p>
                <div className="bg-[#f7f5ed] p-3 rounded-xl border border-[#ece6d9] text-xs text-slate-600 font-semibold">
                  • HDFC • SBI • ICICI • Union Bank • Axis Bank
                </div>
              </div>
            </div>
            <div className="px-5 pb-5 pt-2">
              <Link
                href="/calculators"
                className="text-xs font-extrabold uppercase tracking-wider text-[#059669] hover:text-[#047857] underline flex items-center gap-1 transition-colors"
              >
                CLICK HERE TO CHECK ELIGIBILITY
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Live Updates Ticker Box (Dark Charcoal Header) */}
          <div className="bg-white border border-slate-300 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm">
            <div>
              <div className="bg-[#424242] text-white px-5 py-3 flex items-center justify-between font-bold text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Latest Live Updates
                </span>
                <span className="text-[10px] uppercase font-semibold text-slate-300 bg-slate-700 px-2 py-0.5 rounded">
                  Active
                </span>
              </div>
              <div className="p-4 space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2 border-b border-slate-100 pb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Home Loans starting at <strong>7.15%*</strong> per annum with doorstep collection in Tirupati.</span>
                </div>
                <div className="flex items-start gap-2 border-b border-slate-100 pb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Property legal title pre-verification available for TUDA & DTCP layouts.</span>
                </div>
                <div className="flex items-start gap-2 border-b border-slate-100 pb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Instant personal loan approvals for salaried employees with minimal documentation.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Comprehensive health insurance family floater policies with 0-day waiting periods.</span>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4 pt-1">
              <a
                href={buildWhatsAppLink("Hello M Prathap, I want to inquire about the latest loan rate updates.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Inquire on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
