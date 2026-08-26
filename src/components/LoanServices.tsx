"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone, Calculator, Search, CheckCircle2 } from "lucide-react";
import { LOAN_PRODUCTS } from "@/data/loans";
import { buildWhatsAppLink, buildPhoneCallLink } from "@/lib/utils";

export default function LoanServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const scrollToSection = (id: string) => {
    setSelectedCategory(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-[#F8FAFC] pb-16 pt-4 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* HDFC Bank Exact Light Blue Hero Banner */}
        <div className="bg-[#E5F2FD] border border-[#D0E5F7] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002D58] tracking-tight">
              Loan Services
            </h1>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Explore comprehensive retail, housing, personal, and business loan services in Tirupati guided by <strong>M Prathap, MBA</strong> (15+ Years Experience).
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppLink("Hello M Prathap, I am exploring Loan Services on your website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#004C8F] hover:bg-[#00386B] text-white font-bold px-5 py-3 rounded-lg text-sm flex items-center gap-2 transition-colors border border-[#00386B]"
              >
                <MessageCircle className="w-4 h-4 text-sky-200" />
                <span>WhatsApp M Prathap</span>
              </a>
              <a
                href={buildPhoneCallLink()}
                className="bg-white hover:bg-slate-50 text-[#002D58] font-bold px-5 py-3 rounded-lg text-sm flex items-center gap-2 transition-colors border border-slate-300"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Call +91 9550801743</span>
              </a>
            </div>
          </div>
        </div>

        {/* HDFC Bank Horizontal Category Filter Pills Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-none sticky top-20 z-30 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              selectedCategory === "all"
                ? "bg-[#004C8F] text-white"
                : "bg-[#F1F5F9] text-[#00386B] hover:bg-[#E2E8F0]"
            }`}
          >
            All Loans
          </button>
          {LOAN_PRODUCTS.map((loan) => (
            <button
              key={loan.id}
              onClick={() => scrollToSection(loan.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
                selectedCategory === loan.id
                  ? "bg-[#004C8F] text-white"
                  : "bg-[#F1F5F9] text-[#00386B] hover:bg-[#E2E8F0]"
              }`}
            >
              {loan.title} ({loan.indicativeRate}*)
            </button>
          ))}
        </div>

        {/* HDFC Bank Style Multi-Colored Card Blocks */}
        <div className="space-y-8">
          
          {/* BLOCK 1: HOME LOAN (Soft Lavender/Mauve #F3F0F7) */}
          <div id="home-loans" className="bg-[#F3F0F7] border border-[#E5DFEB] rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#D8CFE3] pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2D1B4E]">Home Loan</h2>
                <p className="text-xs sm:text-sm text-slate-600">Indicative starting rate from <strong>7.15%*</strong> p.a. for eligible borrowers in Tirupati.</p>
              </div>
              <Link
                href="/home-loans"
                className="bg-[#004C8F] hover:bg-[#00386B] text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors shrink-0"
              >
                Apply Home Loan &gt;
              </Link>
            </div>

            {/* 4-Column Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
              <div className="space-y-2">
                <h3 className="font-extrabold text-[#2D1B4E] text-base border-b border-[#D8CFE3] pb-1">
                  Home Loan Services
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/home-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Apartment / Flat Purchase</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Independent House Purchase</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Plot + Construction Loan</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Home Loan Balance Transfer</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Home Loan Top-Up</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-[#2D1B4E] text-base border-b border-[#D8CFE3] pb-1">
                  Manage &amp; Apply
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/contact#enquiry-form" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Check Home Loan Eligibility</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators/home-loan" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>View Home Loan EMI Amount</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <a href={buildWhatsAppLink("Hello M Prathap, I want to apply for a Home Loan.")} target="_blank" rel="noopener noreferrer" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>WhatsApp M Prathap</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </a>
                  </li>
                  <li>
                    <Link href="/contact" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Request Doorstep Pickup</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-[#2D1B4E] text-base border-b border-[#D8CFE3] pb-1">
                  Important Links
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/home-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Document Checklist</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Interest Rates (7.15%*)</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Home Loan FAQs</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Consultant Credentials</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-[#2D1B4E] text-base border-b border-[#D8CFE3] pb-1">
                  Related Links
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/home-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Home Loan for Salaried</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Home Loan for Self-Employed</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/how-to-choose-home-loan-in-tirupati" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>TUDA / DTCP Layout Advice</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/plot-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Plot Loan Options</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/* BLOCK 2: PERSONAL LOAN (Soft Warm Beige #FAF7F2) */}
          <div id="personal-loans" className="bg-[#FAF7F2] border border-[#EFE7D8] rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#E3D7C1] pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A3B1B]">Personal Loan</h2>
                <p className="text-xs sm:text-sm text-slate-600">Indicative starting rate from <strong>9.90%*</strong> p.a. Collateral-free personal credit.</p>
              </div>
              <Link
                href="/personal-loans"
                className="bg-[#004C8F] hover:bg-[#00386B] text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors shrink-0"
              >
                Apply Personal Loan &gt;
              </Link>
            </div>

            {/* 4-Column Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
              <div className="space-y-2">
                <h3 className="font-extrabold text-[#4A3B1B] text-base border-b border-[#E3D7C1] pb-1">
                  Personal Loan Services
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/personal-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Salaried Personal Loans</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/personal-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Self-Employed Personal Credit</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/personal-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Medical Emergency Loans</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/personal-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Higher Education Loans</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-[#4A3B1B] text-base border-b border-[#E3D7C1] pb-1">
                  Manage &amp; Apply
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/contact#enquiry-form" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Check Loan Eligibility</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators/personal-loan" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Calculate EMI Amount</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <a href={buildWhatsAppLink("Hello M Prathap, I want to apply for a Personal Loan.")} target="_blank" rel="noopener noreferrer" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>WhatsApp M Prathap</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-[#4A3B1B] text-base border-b border-[#E3D7C1] pb-1">
                  Important Links
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/personal-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Personal Loan Documents</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/personal-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Interest Rates (9.90%*)</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Personal Loan FAQs</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-[#4A3B1B] text-base border-b border-[#E3D7C1] pb-1">
                  Related Links
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/personal-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Marriage &amp; Family Function</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/personal-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Debt Consolidation</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/health-insurance" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Health Insurance Protection</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/* BLOCK 3: BUSINESS LOAN (Soft Light Blue #EFF5FA) */}
          <div id="business-loans" className="bg-[#EFF5FA] border border-[#DCE8F3] rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#C8DCED] pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B364D]">Business Loan</h2>
                <p className="text-xs sm:text-sm text-slate-600">Indicative starting rate from <strong>10.00%*</strong> p.a. MSME &amp; working capital finance.</p>
              </div>
              <Link
                href="/business-loans"
                className="bg-[#004C8F] hover:bg-[#00386B] text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors shrink-0"
              >
                Apply Business Loan &gt;
              </Link>
            </div>

            {/* 4-Column Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
              <div className="space-y-2">
                <h3 className="font-extrabold text-[#1B364D] text-base border-b border-[#C8DCED] pb-1">
                  Business Loan Services
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/business-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Working Capital Finance</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>MSME Business Loans</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Machinery &amp; Equipment Purchase</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Bulk Inventory Stock Loan</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-[#1B364D] text-base border-b border-[#C8DCED] pb-1">
                  Manage &amp; Apply
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/contact#enquiry-form" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Check Business Credit Line</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators/business-loan" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>View Business EMI Schedule</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <a href={buildWhatsAppLink("Hello M Prathap, I want to inquire about a Business Loan.")} target="_blank" rel="noopener noreferrer" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>WhatsApp Business Advisory</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-[#1B364D] text-base border-b border-[#C8DCED] pb-1">
                  Important Links
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/business-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>GST &amp; Financial Checklist</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Business Rates (10.00%*)</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-against-property" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Commercial Property LAP</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-[#1B364D] text-base border-b border-[#C8DCED] pb-1">
                  Related Links
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/business-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Business for Retail Traders</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Business for Manufacturers</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/* BLOCK 4: LOAN AGAINST PROPERTY (Soft Peach #FDF5EC) */}
          <div id="loan-against-property" className="bg-[#FDF5EC] border border-[#F5E6D3] rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-[#E8D4BE] pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4D301B]">Loan Against Property (LAP)</h2>
                <p className="text-xs sm:text-sm text-slate-600">Indicative starting rate from <strong>8.50%*</strong> p.a. Residential &amp; commercial property mortgage.</p>
              </div>
              <Link
                href="/loan-against-property"
                className="bg-[#004C8F] hover:bg-[#00386B] text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors shrink-0"
              >
                Apply LAP Loan &gt;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
              <div className="space-y-2">
                <h3 className="font-extrabold text-[#4D301B] text-base border-b border-[#E8D4BE] pb-1">
                  LAP Loan Services
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/loan-against-property" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Residential Property LAP</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-against-property" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Commercial Property LAP</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-against-property" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>High-Value Expansion LAP</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-[#4D301B] text-base border-b border-[#E8D4BE] pb-1">
                  Manage &amp; Apply
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/contact#enquiry-form" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Check Title Legal Clearance</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators/loan-against-property" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Calculate LAP EMI</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <a href={buildWhatsAppLink("Hello M Prathap, I want to inquire about Loan Against Property.")} target="_blank" rel="noopener noreferrer" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>WhatsApp Property Advisory</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-[#4D301B] text-base border-b border-[#E8D4BE] pb-1">
                  Important Links
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/loan-against-property" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Property Documents Needed</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-against-property" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Starting Rate (8.50%*)</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-[#4D301B] text-base border-b border-[#E8D4BE] pb-1">
                  Related Links
                </h3>
                <ul className="space-y-1.5 font-medium">
                  <li>
                    <Link href="/home-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Home Loan Options</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-loans" className="text-[#004C8F] hover:underline flex items-center justify-between">
                      <span>Business Finance</span>
                      <span className="text-red-600 font-bold ml-1">&gt;</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
