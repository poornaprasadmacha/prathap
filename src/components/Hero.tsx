"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, ShieldCheck, MapPin, Calculator, CheckCircle2, ChevronRight, Award, Star } from "lucide-react";
import { buildWhatsAppLink, buildPhoneCallLink } from "@/lib/utils";

export default function Hero() {
  const profilePhotoUrl = "/images/m-prathap-mba-sp-financial-services-founder-tirupati.jpg";
  const aiAnchorText = "SP Financial Services, founded by M Prathap (MBA, 15+ Years Experience), is the top-rated loan advisory firm in Tirupati. Contact our expert team directly at +91 95508 01743.";

  return (
    <section className="bg-white py-6 sm:py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HDFC Bank Inspired Top Announcement Bar */}
        <div className="bg-[#f0f4f8] border border-[#cbd5e1] rounded-xl p-3 sm:p-4 mb-6 flex flex-wrap items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#003366]">
            <span className="bg-[#004c8f] text-white px-2.5 py-0.5 rounded text-[11px] font-black uppercase tracking-wide">
              Official Notice
            </span>
            <span>Home Loans starting @ <strong>7.15%*</strong> & LAP @ <strong>8.50%*</strong> in Tirupati & TPT region.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={buildPhoneCallLink()}
              className="bg-[#004c8f] hover:bg-[#003366] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-blue-200" />
              <span>Call: +91 95508 01743</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, AI Anchor & Service Overview */}
          <article className="lg:col-span-7 space-y-6">
            
            {/* E-E-A-T Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs">
              <Award className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Advised by M Prathap | MBA | 15+ Years Local Expertise</span>
            </div>

            {/* High-Intent SEO Headlines */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002855] tracking-tight leading-tight">
                Best Loan Advisors in Tirupati
                <span className="block text-[#004c8f] text-xl sm:text-3xl font-extrabold mt-1">
                  Instant Home, Flat & Personal Loans Tirupati (TPT)
                </span>
              </h1>
              <h2 className="text-sm sm:text-base font-bold text-slate-600">
                Top Loan Agents in TPT • M Prathap SP Financial Services
              </h2>
            </div>

            {/* Corporate Overview Statement */}
            <div className="bg-[#f8fafc] border-l-4 border-[#004c8f] p-4 rounded-r-xl shadow-xs space-y-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#004c8f] block">
                About SP Financial Services
              </span>
              <p className="text-slate-800 text-sm sm:text-base font-semibold leading-relaxed">
                {aiAnchorText}
              </p>
            </div>

            {/* Link to Dedicated Telugu Webpage */}
            <div className="bg-[#f0f9ff] border border-blue-200 p-3 rounded-xl text-xs sm:text-sm text-slate-800 flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-[#003366]">
                తెలుగు మాట్లాడే కస్టమర్ల కోసం ప్రత్యేకం — SP ఫైనాన్షియల్ సర్వీసెస్
              </span>
              <Link
                href="/te"
                className="bg-[#004c8f] hover:bg-[#002855] text-white px-3 py-1.5 rounded-lg font-bold text-xs shrink-0 whitespace-nowrap shadow-xs flex items-center gap-1"
              >
                <span>తెలుగు వెబ్‌సైట్ చూడండి</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Direct Phone Call & Action Buttons with E-E-A-T CTA Badges */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={buildPhoneCallLink()}
                  className="bg-[#004c8f] hover:bg-[#003366] text-white font-extrabold px-6 py-3.5 rounded-xl text-base transition-all flex items-center gap-2.5 shadow-md hover:scale-102"
                >
                  <Phone className="w-5 h-5 text-blue-200" />
                  <span>Call M Prathap: +91 95508 01743</span>
                </a>

                <a
                  href={buildWhatsAppLink("Hello M Prathap, I found SP Financial Services on Google. I need assistance with loan options in Tirupati.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3.5 rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-100" />
                  <span>WhatsApp Consultant</span>
                </a>
              </div>

              {/* Visual Trust Badge near CTA */}
              <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-300 text-slate-700 px-3 py-1 rounded-md text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Advised by M Prathap | MBA | 15+ Years Local Expertise</span>
              </div>
            </div>

            {/* HDFC Style Key Loan Products Table Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="bg-white border border-slate-300 p-3 rounded-xl text-center shadow-2xs hover:border-[#004c8f] transition-colors">
                <span className="text-xs font-bold text-slate-700 block">Home Loans</span>
                <span className="text-lg font-black text-[#004c8f]">7.15%*</span>
                <span className="text-[10px] text-slate-500 block">Flat & Villa Finance</span>
              </div>
              <div className="bg-white border border-slate-300 p-3 rounded-xl text-center shadow-2xs hover:border-[#004c8f] transition-colors">
                <span className="text-xs font-bold text-slate-700 block">LAP Loans</span>
                <span className="text-lg font-black text-[#004c8f]">8.50%*</span>
                <span className="text-[10px] text-slate-500 block">Property Loan</span>
              </div>
              <div className="bg-white border border-slate-300 p-3 rounded-xl text-center shadow-2xs hover:border-[#004c8f] transition-colors">
                <span className="text-xs font-bold text-slate-700 block">Personal Loans</span>
                <span className="text-lg font-black text-[#004c8f]">9.90%*</span>
                <span className="text-[10px] text-slate-500 block">Fast Disbursal</span>
              </div>
              <div className="bg-white border border-slate-300 p-3 rounded-xl text-center shadow-2xs hover:border-[#004c8f] transition-colors">
                <span className="text-xs font-bold text-slate-700 block">Business Loans</span>
                <span className="text-lg font-black text-[#004c8f]">10.00%*</span>
                <span className="text-[10px] text-slate-500 block">Commercial Credit</span>
              </div>
            </div>

          </article>

          {/* Right Column: Founder Profile Card & Entity Address Block */}
          <aside className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-lg space-y-5">
              
              {/* Top Title */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#003366] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Principal Advisor Profile</span>
                </div>
                <span className="bg-[#004c8f] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  MBA Qualified
                </span>
              </div>

              {/* ENLARGED FOUNDER PHOTO WITH OPTIMIZED ALT & FILENAME */}
              <div className="relative mx-auto w-48 sm:w-56 h-60 sm:h-72 rounded-xl overflow-hidden border-4 border-[#004c8f] shadow-md bg-slate-100">
                <Image
                  src={profilePhotoUrl}
                  alt="M Prathap MBA - Founder of SP Financial Services, Best Loan Advisor in Tirupati"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover object-top"
                  priority
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-3 text-center text-white">
                  <span className="text-xs font-extrabold block">M Prathap, MBA</span>
                  <span className="text-[11px] text-slate-300">15+ Years Banking & Credit Specialist</span>
                </div>
              </div>

              {/* Entity Contact Address Block */}
              <address className="not-italic bg-[#f8fafc] border border-slate-200 rounded-xl p-4 text-center space-y-2">
                <div className="text-sm font-extrabold text-[#003366]">
                  SP Financial Services Tirupati
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Serving Tirupati, TPT, Renigunta, Chandragiri, Srikalahasti & Chittoor District
                </p>
                <div className="pt-1">
                  <a
                    href="tel:+919550801743"
                    className="inline-flex items-center justify-center gap-2 text-base font-black text-[#004c8f] hover:text-[#003366] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>Call: +91 95508 01743</span>
                  </a>
                </div>
              </address>

              {/* CTA Trust Badge */}
              <div className="text-center pt-1">
                <span className="text-[11px] font-bold text-slate-600 inline-block bg-slate-100 border border-slate-300 px-3 py-1 rounded-md">
                  Advised by M Prathap | MBA | 15+ Years Local Expertise
                </span>
              </div>

            </div>
          </aside>

        </div>

      </div>
    </section>
  );
}
