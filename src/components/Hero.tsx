"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Award, ChevronRight, Calculator, ShieldCheck, UserCheck } from "lucide-react";
import { buildWhatsAppLink, buildPhoneCallLink } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="bg-slate-50 py-6 sm:py-8 lg:py-10 px-3 sm:px-6 lg:px-8">
      {/* Outer Mint Canvas Box with Curved Borders */}
      <div className="max-w-7xl mx-auto bg-[#eef7ee] border border-[#d6ebd6] rounded-3xl p-5 sm:p-8 lg:p-10 relative overflow-hidden">
        
        {/* Decorative Wave Lines Graphic */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 100 Q 200 400 600 200 T 1200 300" stroke="#10b981" strokeWidth="1.5" fill="none" />
            <path d="M-100 150 Q 200 450 600 250 T 1200 350" stroke="#059669" strokeWidth="1" strokeDasharray="4 4" fill="none" />
            <path d="M-100 200 Q 200 500 600 300 T 1200 400" stroke="#f97316" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left Column: Hero Content & Profile Box */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Framed Consultant Badge (Image 1 Style) */}
            <div className="inline-flex items-center gap-3 bg-white border border-[#c3e2c3] p-1.5 pr-4 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-emerald-500 shrink-0 relative">
                <Image
                  src="/images/prathap.png"
                  alt="M Prathap, MBA - Financial Consultant Tirupati"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 flex items-center gap-1">
                  M Prathap, MBA
                  <ShieldCheck className="w-4 h-4 text-emerald-600 inline shrink-0" />
                </span>
                <span className="text-xs font-semibold text-emerald-700">
                  15+ Years Financial Sector Advisor • Tirupati
                </span>
              </div>
            </div>

            {/* Main Two-Tone Headline (Image 1 Style) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              <span className="text-[#10b981]">Financial Growth</span> is the most{" "}
              <span className="text-[#ea580c]">powerful key</span> you can use to secure your family&apos;s future.
            </h1>

            {/* Subtitle / Description */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium max-w-xl">
              Get expert, unbiased assistance in Tirupati for <span className="font-bold text-slate-900">Home Loans (Starts 7.15%*)</span>, <span className="font-bold text-slate-900">LAP (8.50%*)</span>, <span className="font-bold text-slate-900">Personal Loans (9.90%*)</span>, and comprehensive <span className="font-bold text-slate-900">Health & Life Insurance</span>.
            </p>

            {/* Interactive Calculator CTA Box (Image 1 Style) */}
            <Link
              href="/calculators"
              className="group flex items-center gap-4 bg-[#fae8de] hover:bg-[#f8ded1] border border-[#f3cbb7] p-3.5 rounded-2xl transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#ea580c] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Calculator className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9a3412]">
                  Interactive EMI Tools
                </span>
                <span className="text-sm font-bold text-slate-900 flex items-center gap-1">
                  Calculate Home Loan & Personal Loan EMI
                  <ChevronRight className="w-4 h-4 text-[#ea580c] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={buildWhatsAppLink("Hello M Prathap, I would like to inquire about loan options in Tirupati.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                WhatsApp Direct
              </a>
              <a
                href={buildPhoneCallLink()}
                className="bg-brand-900 hover:bg-brand-950 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-blue-300" />
                Call +91 95508 01743
              </a>
              <Link
                href="/contact#enquiry-form"
                className="bg-white hover:bg-slate-100 text-brand-900 font-bold px-5 py-3 rounded-xl text-sm transition-colors border border-slate-300 flex items-center gap-1 shadow-sm"
              >
                Check Loan Eligibility
              </Link>
            </div>

            {/* Indicative Rates Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="bg-white border border-[#cbe3cb] p-2.5 rounded-xl text-center">
                <span className="text-[11px] font-semibold text-slate-600 block">Home Loans</span>
                <span className="text-base font-extrabold text-[#10b981]">7.15%*</span>
              </div>
              <div className="bg-white border border-[#cbe3cb] p-2.5 rounded-xl text-center">
                <span className="text-[11px] font-semibold text-slate-600 block">LAP Loans</span>
                <span className="text-base font-extrabold text-[#ea580c]">8.50%*</span>
              </div>
              <div className="bg-white border border-[#cbe3cb] p-2.5 rounded-xl text-center">
                <span className="text-[11px] font-semibold text-slate-600 block">Personal Loans</span>
                <span className="text-base font-extrabold text-blue-600">9.90%*</span>
              </div>
              <div className="bg-white border border-[#cbe3cb] p-2.5 rounded-xl text-center">
                <span className="text-[11px] font-semibold text-slate-600 block">Business Loans</span>
                <span className="text-base font-extrabold text-purple-600">10.00%*</span>
              </div>
            </div>

          </div>

          {/* Right Column: 6-Card Interactive Mosaic Collage (Image 1 Style) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            
            {/* Card 1: Advisor Experience Card */}
            <div className="bg-white border border-[#d6ebd6] rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-emerald-500 shrink-0 relative">
                  <Image
                    src="/images/prathap.png"
                    alt="M Prathap, MBA"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                    Trusted Consultant
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                    M Prathap, MBA
                  </h4>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">
                  15+ Years Consultancy in Tirupati
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Guiding thousands of families through seamless loan approvals and legal title verification.
                </p>
              </div>
            </div>

            {/* Card 2: Quote Card (Soft Rose/Peach Tint #f9d8d6) */}
            <div className="bg-[#f9d8d6] border border-[#f3bebe] text-[#881337] rounded-2xl p-5 flex flex-col justify-between space-y-3">
              <div className="text-2xl font-black opacity-40">“</div>
              <p className="text-xs sm:text-sm font-bold leading-snug">
                Financial planning is the passport to the future, for tomorrow belongs to those who prepare for it today.
              </p>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#9f1239]">
                — Financial Wisdom
              </div>
            </div>

            {/* Card 3: Vector Portrait / Emblem Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col justify-between space-y-4 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  M Prathap Advisory
                </span>
                <UserCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-xl font-black tracking-wide text-white">
                  MBA FINANCIAL SERVICES
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Independent consultancy with direct access to HDFC, SBI, ICICI, Union Bank & leading NBFCs.
                </p>
              </div>
            </div>

            {/* Card 4: Lavender Milestone Award Card (#e0e7ff) */}
            <div className="bg-[#e0e7ff] border border-[#c7d2fe] text-[#3730a3] rounded-2xl p-5 flex flex-col justify-between space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#c7d2fe] text-[#312e81] flex items-center justify-center font-bold text-xs">
                2025
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#312e81]">
                  Financial Excellence & Client Trust
                </h4>
                <p className="text-xs text-[#4338ca] mt-1">
                  Recognized for 100% transparent door-step loan guidance in Tirupati & Chittoor.
                </p>
              </div>
            </div>

            {/* Card 5: Happy Family / Client Satisfaction Card */}
            <div className="bg-white border border-[#d6ebd6] rounded-2xl p-5 flex flex-col justify-between space-y-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                  100%
                </div>
                <span className="text-xs font-bold text-slate-800">10,000+ Happy Families</span>
              </div>
              <p className="text-xs text-slate-600">
                End-to-end support from documentation check, bank login, property valuation to disbursement.
              </p>
              <div className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Zero Processing Complications
              </div>
            </div>

            {/* Card 6: Soft Mint Wisdom Card (#d1f4e4) */}
            <div className="bg-[#d1f4e4] border border-[#a7f3d0] text-[#065f46] rounded-2xl p-5 flex flex-col justify-between space-y-3">
              <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                Proper financial advice makes a person fearless, teaches them the value of security, and inspires them to achieve their home ownership goals.
              </p>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#047857]">
                Tirupati Loan & Insurance Hub
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
