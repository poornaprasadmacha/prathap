"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Award, ChevronRight, Calculator, ShieldCheck, CheckCircle2, Building2, TrendingUp } from "lucide-react";
import { buildWhatsAppLink, buildPhoneCallLink } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-brand-950 to-brand-900 text-white py-10 lg:py-16 relative overflow-hidden border-b border-slate-800">
      {/* Decorative Glow & Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Main Advisory Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Qualification Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-700/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-200 shadow-sm">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>M Prathap, MBA • 15+ Years Financial Advisory in Tirupati</span>
            </div>

            {/* High Impact Professional Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Expert Home Loans, Personal Credit & Insurance in <span className="text-sky-400">Tirupati</span>
            </h1>

            {/* Clear Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Compare rates across top banks (HDFC, SBI, ICICI, Union Bank), get doorstep legal document verification, and secure high-approval loans tailored for your family.
            </p>

            {/* Prominent Recognized Action Buttons (WhatsApp & Phone Icons) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              
              {/* WhatsApp Direct Action Button */}
              <a
                href={buildWhatsAppLink("Hello M Prathap, I would like to inquire about loan options in Tirupati.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all flex items-center gap-2.5 shadow-md hover:shadow-emerald-900/30"
              >
                <MessageCircle className="w-5 h-5 text-emerald-100 fill-emerald-100/20 shrink-0" />
                <span>WhatsApp M Prathap</span>
              </a>

              {/* Direct Phone Call Button */}
              <a
                href={buildPhoneCallLink()}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all flex items-center gap-2.5 shadow-md hover:shadow-blue-900/30"
              >
                <Phone className="w-5 h-5 text-blue-100 shrink-0" />
                <span>Call +91 95508 01743</span>
              </a>

              {/* Calculator Shortcut */}
              <Link
                href="/calculators"
                className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all flex items-center gap-2 shadow-md"
              >
                <Calculator className="w-5 h-5 text-amber-100 shrink-0" />
                <span>Calculate EMI</span>
              </Link>
            </div>

            {/* Live Indicative Rate Cards Strip */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Live Indicative Benchmark Interest Rates:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="bg-slate-900/90 border border-slate-700/80 p-3 rounded-xl text-center hover:border-emerald-500/50 transition-colors">
                  <span className="text-xs text-slate-400 block font-semibold">Home Loans</span>
                  <span className="text-lg font-black text-emerald-400">7.15%<span className="text-xs text-emerald-300">*</span></span>
                </div>
                <div className="bg-slate-900/90 border border-slate-700/80 p-3 rounded-xl text-center hover:border-amber-500/50 transition-colors">
                  <span className="text-xs text-slate-400 block font-semibold">LAP Loans</span>
                  <span className="text-lg font-black text-amber-400">8.50%<span className="text-xs text-amber-300">*</span></span>
                </div>
                <div className="bg-slate-900/90 border border-slate-700/80 p-3 rounded-xl text-center hover:border-sky-500/50 transition-colors">
                  <span className="text-xs text-slate-400 block font-semibold">Personal Loans</span>
                  <span className="text-lg font-black text-sky-400">9.90%<span className="text-xs text-sky-300">*</span></span>
                </div>
                <div className="bg-slate-900/90 border border-slate-700/80 p-3 rounded-xl text-center hover:border-purple-500/50 transition-colors">
                  <span className="text-xs text-slate-400 block font-semibold">Business Loans</span>
                  <span className="text-lg font-black text-purple-400">10.00%<span className="text-xs text-purple-300">*</span></span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Consultant Profile Box & Key Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Consultant Profile Frame */}
            <div className="bg-slate-900/90 border border-slate-700 rounded-3xl p-6 space-y-5 shadow-xl">
              
              <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                <div className="w-16 h-20 rounded-2xl overflow-hidden bg-slate-950 border-2 border-sky-400 shrink-0 relative shadow-md">
                  <Image
                    src="/images/prathap.png"
                    alt="M Prathap, MBA - Financial Consultant Tirupati"
                    width={160}
                    height={192}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block">
                    Financial Consultant
                  </span>
                  <h2 className="text-xl font-extrabold text-white flex items-center gap-1.5">
                    M Prathap, MBA
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  </h2>
                  <p className="text-xs text-slate-300 font-medium">
                    15+ Years Financial Sector Advisor in Tirupati & Chittoor
                  </p>
                </div>
              </div>

              {/* 4 Pillars of Trust */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Multi-Bank Rate Comparison:</strong> Comparing offers across HDFC, SBI, ICICI & top NBFCs.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Doorstep Document Processing:</strong> Complete pre-verification for TUDA & DTCP plots.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Transparent Guidance:</strong> 100% clear terms, zero hidden processing fees.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>360° Family Shield:</strong> Term life & health floater insurance consultation.</span>
                </div>
              </div>

              {/* Bottom Quick Contact Strip */}
              <div className="pt-2 flex items-center justify-between gap-2 text-xs border-t border-slate-800">
                <span className="text-slate-400 font-medium">Direct Advisory:</span>
                <a
                  href={buildPhoneCallLink()}
                  className="text-sky-300 hover:text-white font-bold flex items-center gap-1 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +91 95508 01743
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
