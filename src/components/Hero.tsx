"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Award, ChevronRight, Calculator, ShieldCheck, MapPin, CheckCircle2, UserCheck, Star } from "lucide-react";
import { buildWhatsAppLink, buildPhoneCallLink } from "@/lib/utils";

export default function Hero() {
  const profilePhotoUrl = "https://blogger.googleusercontent.com/img/a/AVvXsEgcL1OglHt7v9y9HrCRFCWC-C_Bf8eqfGrWSYAYVHuH9bPElksLU-ujckUloSUo8wgwgBqlaldmCiSchUsVRDfxk6SuE4sBJcECrM7bnPB7ZTY4-vzxyKeBZiOab3RL5tA3HUv-NRmJ9apdCOJkigjjIZpuuvbGQuytiEzCpMrGX5ctmbb8-e-HMd6OsUM";

  return (
    <section className="bg-slate-900 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
      {/* Background Subtle Gradient & Glow Circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8 lg:space-y-12">
        
        {/* Top GEO & Brand Tagline Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>SP Financial Services</span>
            </span>
            <span className="text-slate-400 text-xs sm:text-sm font-medium flex items-center gap-1">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Serving <strong>Tirupati & Related Areas</strong> (Chandragiri, Renigunta, Srikalahasti & Chittoor)</span>
            </span>
          </div>

          {/* Prominent Phone Number Badge */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-300 hidden sm:inline">Direct Assistance:</span>
            <a
              href={buildPhoneCallLink()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/50 hover:scale-105"
            >
              <Phone className="w-4 h-4 text-emerald-100" />
              <span>+91 95508 01743</span>
            </a>
          </div>
        </div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Direct Phone Display & Service Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Experience & Title Pill */}
            <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-emerald-400 shadow-sm">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>15+ Years Trusted Financial Consultancy in Tirupati Region</span>
            </div>

            {/* Main Bold Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              SP Financial Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 text-2xl sm:text-4xl lg:text-5xl mt-2">
                Your Trusted Partner for Loans & Insurance in Tirupati
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-medium max-w-2xl">
              Get direct, transparent guidance from <span className="font-bold text-white">M Prathap, MBA</span>. Fast bank loan approvals, legal title clearance, and customized insurance solutions across Tirupati and surrounding areas.
            </p>

            {/* DIRECT DISPLAY PHONE NUMBER HERO CARD */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-emerald-500/50 p-4 sm:p-5 rounded-2xl shadow-xl space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
                    Instant Call Assistance
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2 mt-0.5">
                    <Phone className="w-6 h-6 text-emerald-400 animate-pulse" />
                    <a href={buildPhoneCallLink()} className="hover:text-emerald-400 transition-colors">
                      +91 95508 01743
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={buildPhoneCallLink()}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-md flex items-center gap-2 hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={buildWhatsAppLink("Hello M Prathap, I want to discuss loan options in Tirupati.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-md flex items-center gap-2 hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-4 pt-1 border-t border-slate-800">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Direct Consultation
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Doorstep Service Tirupati
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free Advice
                </span>
              </div>
            </div>

            {/* Benchmark Rates Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-xl text-center shadow-sm">
                <span className="text-xs font-medium text-slate-400 block">Home Loans</span>
                <span className="text-xl font-black text-emerald-400">7.15%*</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Lowest EMI</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-xl text-center shadow-sm">
                <span className="text-xs font-medium text-slate-400 block">LAP Loans</span>
                <span className="text-xl font-black text-amber-400">8.50%*</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">High Loan Amount</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-xl text-center shadow-sm">
                <span className="text-xs font-medium text-slate-400 block">Personal Loans</span>
                <span className="text-xl font-black text-blue-400">9.90%*</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Fast Disbursal</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-xl text-center shadow-sm">
                <span className="text-xs font-medium text-slate-400 block">Business Loans</span>
                <span className="text-xl font-black text-purple-400">10.00%*</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Custom Turnover</span>
              </div>
            </div>

            {/* EMI Calculator Link */}
            <div className="pt-2">
              <Link
                href="/calculators"
                className="group flex items-center justify-between bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 p-3.5 rounded-xl transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">Interactive Loan EMI Calculators</span>
                    <span className="text-xs text-slate-400">Calculate exact monthly EMIs for Home, Personal & Business Loans</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Right Column: LARGE PROMINENT PERSON PROFILE PHOTO CARD */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative group overflow-hidden">
              
              {/* Gold Top Badge */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                    Verified Lead Advisor
                  </span>
                </div>
                <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  15+ Yrs Exp
                </span>
              </div>

              {/* INCREASED SIZE PERSON PHOTO */}
              <div className="relative mx-auto w-48 sm:w-56 h-60 sm:h-72 rounded-2xl overflow-hidden border-4 border-emerald-500/60 shadow-2xl bg-slate-950 group-hover:border-emerald-400 transition-all duration-300">
                <Image
                  src={profilePhotoUrl}
                  alt="M Prathap, MBA - Founder & Senior Advisor SP Financial Services Tirupati"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-3 text-center">
                  <span className="text-xs font-bold text-emerald-400 block">MBA Financial Consultant</span>
                  <span className="text-[11px] text-slate-300">Tirupati & Surrounding Regions</span>
                </div>
              </div>

              {/* Personal Identity Details */}
              <div className="text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  M Prathap, <span className="text-emerald-400">MBA</span>
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-300">
                  Founder & Senior Advisor — SP Financial Services
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Serving Tirupati, Chandragiri, Renigunta, Srikalahasti</span>
                </div>
              </div>

              {/* Direct Phone Number Card inside Profile Frame */}
              <div className="bg-slate-950/90 border border-slate-700/80 rounded-2xl p-4 text-center space-y-2">
                <span className="text-xs text-slate-400 font-medium block">For Personal Appointment & Guidance</span>
                <a
                  href={buildPhoneCallLink()}
                  className="text-xl sm:text-2xl font-black text-emerald-400 hover:text-emerald-300 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>+91 95508 01743</span>
                </a>
                <span className="text-[11px] text-slate-400 block">Doorstep Assistance in Tirupati and Chittoor District</span>
              </div>

              {/* Bottom Quick Feature Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-1.5 font-medium">
                  <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>10,000+ Happy Families</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Direct Bank Access</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
