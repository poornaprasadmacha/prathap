"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, ChevronDown, Award, ShieldCheck } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const [insuranceDropdownOpen, setInsuranceDropdownOpen] = useState(false);
  const [calcDropdownOpen, setCalcDropdownOpen] = useState(false);
  const directPhoneHref = "tel:+919550801743";

  return (
    <header className="relative w-full z-40 bg-white border-b border-slate-200">
      {/* Top HDFC Bank Inspired Corporate Bar */}
      <div className="bg-[#003366] text-white text-xs py-2 px-3 sm:px-4 border-b border-[#002244]">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2.5 overflow-hidden text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-bold text-amber-300 whitespace-nowrap">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden sm:inline">Advised by M Prathap | MBA | 15+ Years Local Expertise</span>
              <span className="sm:hidden">M Prathap (MBA, 15+ Yrs Exp)</span>
            </span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline text-slate-200 font-medium">
              SP Financial Services Tirupati • Home, Flat, LAP & Personal Loans
            </span>
          </div>

          {/* Action Call & WhatsApp Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={directPhoneHref}
              className="flex items-center gap-1.5 bg-[#004c8f] hover:bg-[#002855] text-white px-3 py-1 rounded-md text-xs font-black transition-all shadow-xs border border-blue-400/40"
            >
              <Phone className="w-3.5 h-3.5 text-blue-200 animate-pulse" />
              <span>+91 95508 01743</span>
            </a>
            <a
              href={buildWhatsAppLink("Hello M Prathap, I found SP Financial Services online. I need loan assistance in Tirupati.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded-md text-[11px] font-bold transition-colors shadow-xs"
            >
              <MessageCircle className="w-3 h-3 text-emerald-100" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Brand Logo & Tagline */}
          <Link href="/" className="flex flex-col group leading-tight">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#002855] group-hover:text-[#004c8f] transition-colors flex items-center gap-2">
              <span className="bg-[#004c8f] text-white px-2 py-0.5 rounded text-lg font-black tracking-wider">SP</span>
              <span>FINANCIAL SERVICES</span>
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#da251c] mt-0.5">
              Best Loan Advisors in Tirupati (TPT) • Founded by M Prathap (MBA)
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-800">
            <Link href="/" className="hover:text-[#004c8f] transition-colors">
              Home
            </Link>

            {/* Loans Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-[#004c8f] py-2 transition-colors focus:outline-none"
                onClick={() => setLoansDropdownOpen(!loansDropdownOpen)}
              >
                Loans Hub
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#004c8f]" />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white border border-slate-200 rounded-xl py-2 hidden group-hover:block z-50 shadow-xl">
                <Link
                  href="/home-loans"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-[#004c8f] font-semibold text-slate-800"
                >
                  Home Loans (Starts 7.15%*)
                </Link>
                <Link
                  href="/personal-loans"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-[#004c8f] font-semibold text-slate-800"
                >
                  Personal Loans (Starts 9.90%*)
                </Link>
                <Link
                  href="/business-loans"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-[#004c8f] font-semibold text-slate-800"
                >
                  Business Loans (Starts 10.00%*)
                </Link>
                <Link
                  href="/loan-against-property"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-[#004c8f] font-semibold text-slate-800"
                >
                  Loan Against Property (8.50%*)
                </Link>
                <Link
                  href="/plot-loans"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-[#004c8f] font-semibold text-slate-800"
                >
                  Plot Purchase & Flat Loans
                </Link>
              </div>
            </div>

            {/* Insurance Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-[#004c8f] py-2 transition-colors focus:outline-none"
                onClick={() => setInsuranceDropdownOpen(!insuranceDropdownOpen)}
              >
                Insurance
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#004c8f]" />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white border border-slate-200 rounded-xl py-2 hidden group-hover:block z-50 shadow-xl">
                <Link
                  href="/insurance"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-[#004c8f] font-bold text-[#002855] border-b border-slate-100"
                >
                  Insurance Hub Overview
                </Link>
                <Link
                  href="/life-insurance"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-[#004c8f] font-semibold text-slate-800"
                >
                  Life Insurance & Term Plans
                </Link>
                <Link
                  href="/health-insurance"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-[#004c8f] font-semibold text-slate-800"
                >
                  Health Insurance & Family Floater
                </Link>
                <Link
                  href="/general-insurance"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-[#004c8f] font-semibold text-slate-800"
                >
                  General & Motor Insurance
                </Link>
              </div>
            </div>

            {/* Calculators Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-[#004c8f] py-2 transition-colors focus:outline-none"
                onClick={() => setCalcDropdownOpen(!calcDropdownOpen)}
              >
                Calculators
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#004c8f]" />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white border border-slate-200 rounded-xl py-2 hidden group-hover:block z-50 shadow-xl">
                <Link
                  href="/calculators"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-[#004c8f] font-bold text-[#002855] border-b border-slate-100"
                >
                  All Calculators Hub
                </Link>
                <Link
                  href="/calculators/home-loan"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-[#004c8f] text-slate-800"
                >
                  Home Loan EMI Calculator
                </Link>
                <Link
                  href="/calculators/personal-loan"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-[#004c8f] text-slate-800"
                >
                  Personal Loan Calculator
                </Link>
              </div>
            </div>

            <Link href="/about" className="hover:text-[#004c8f] transition-colors">
              About M Prathap (MBA)
            </Link>
            <Link href="/contact" className="hover:text-[#004c8f] transition-colors">
              Contact Office
            </Link>
          </nav>

          {/* Desktop Direct Call CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={directPhoneHref}
              className="bg-[#004c8f] hover:bg-[#002855] text-white font-extrabold px-5 py-2.5 rounded-xl text-sm transition-all border border-[#002855] shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-200 animate-pulse" />
              <span>Call: +91 95508 01743</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-800 hover:text-[#004c8f] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-bold text-slate-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-[#004c8f]"
            >
              Home
            </Link>

            <div className="space-y-2 pt-1">
              <span className="text-xs font-black uppercase tracking-wider text-[#004c8f]">
                Loans Services
              </span>
              <div className="pl-3 space-y-2 text-sm font-semibold">
                <Link
                  href="/home-loans"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#004c8f]"
                >
                  Home Loans (Starts 7.15%*)
                </Link>
                <Link
                  href="/personal-loans"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#004c8f]"
                >
                  Personal Loans (Starts 9.90%*)
                </Link>
                <Link
                  href="/business-loans"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#004c8f]"
                >
                  Business Loans (Starts 10.00%*)
                </Link>
                <Link
                  href="/loan-against-property"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-[#004c8f]"
                >
                  Loan Against Property (8.50%*)
                </Link>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <a
                href={directPhoneHref}
                className="flex items-center justify-center gap-2 w-full bg-[#004c8f] text-white font-extrabold py-3 rounded-xl text-sm border border-[#002855] shadow-md"
              >
                <Phone className="w-4 h-4 text-blue-200" />
                Call M Prathap: +91 95508 01743
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
