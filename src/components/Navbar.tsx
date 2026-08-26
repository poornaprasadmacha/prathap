"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, ChevronDown, Award } from "lucide-react";
import { buildWhatsAppLink, buildPhoneCallLink } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const [insuranceDropdownOpen, setInsuranceDropdownOpen] = useState(false);
  const [calcDropdownOpen, setCalcDropdownOpen] = useState(false);

  return (
    <header className="relative w-full z-40 bg-white border-b border-slate-200">
      {/* Top Bar for Phone, Email & Location */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-3 sm:px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 font-semibold text-amber-300 whitespace-nowrap">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden sm:inline">M Prathap, MBA — 15+ Years Experience</span>
              <span className="sm:hidden">M Prathap, MBA (15+ Yrs Exp)</span>
            </span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline text-slate-300">
              Tirupati & Surrounding Areas, AP
            </span>
          </div>

          {/* Mobile & Desktop Action Colors */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <a
              href={buildPhoneCallLink()}
              className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[11px] font-semibold transition-colors shadow-sm"
            >
              <Phone className="w-3 h-3 text-blue-100" />
              <span className="hidden sm:inline">+91 95508 01743</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href={buildWhatsAppLink("Hello M Prathap, I have a financial inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[11px] font-semibold transition-colors shadow-sm"
            >
              <MessageCircle className="w-3 h-3 text-emerald-100" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex flex-col group leading-tight">
            <span className="text-lg sm:text-2xl font-bold tracking-tight text-brand-900 group-hover:text-brand-700 transition-colors">
              M PRATHAP
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-600">
              Financial Services • Tirupati
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link href="/" className="hover:text-brand-600 transition-colors">
              Home
            </Link>

            {/* Loans Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-brand-600 py-2 transition-colors focus:outline-none"
                onClick={() => setLoansDropdownOpen(!loansDropdownOpen)}
              >
                Loans
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-600" />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white border border-slate-200 rounded-md py-2 hidden group-hover:block z-50">
                <Link
                  href="/home-loans"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  Home Loans (Starts 7.15%*)
                </Link>
                <Link
                  href="/personal-loans"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  Personal Loans (Starts 9.90%*)
                </Link>
                <Link
                  href="/business-loans"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  Business Loans (Starts 10.00%*)
                </Link>
                <Link
                  href="/loan-against-property"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  Loan Against Property (8.50%*)
                </Link>
                <Link
                  href="/plot-loans"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  Plot Purchase Loans
                </Link>
              </div>
            </div>

            {/* Insurance Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-brand-600 py-2 transition-colors focus:outline-none"
                onClick={() => setInsuranceDropdownOpen(!insuranceDropdownOpen)}
              >
                Insurance
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-600" />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white border border-slate-200 rounded-md py-2 hidden group-hover:block z-50">
                <Link
                  href="/insurance"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 font-semibold text-brand-900 border-b border-slate-100"
                >
                  Insurance Hub Overview
                </Link>
                <Link
                  href="/life-insurance"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  Life Insurance & Term Plans
                </Link>
                <Link
                  href="/health-insurance"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  Health Insurance & Family Floater
                </Link>
                <Link
                  href="/general-insurance"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  General & Motor Insurance
                </Link>
                <Link
                  href="/family-insurance"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  360° Family Financial Protection
                </Link>
              </div>
            </div>

            {/* Calculators Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-brand-600 py-2 transition-colors focus:outline-none"
                onClick={() => setCalcDropdownOpen(!calcDropdownOpen)}
              >
                Calculators
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-600" />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white border border-slate-200 rounded-md py-2 hidden group-hover:block z-50">
                <Link
                  href="/calculators"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 font-semibold text-brand-900 border-b border-slate-100"
                >
                  All Calculators Hub
                </Link>
                <Link
                  href="/calculators/home-loan"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  Home Loan EMI Calculator
                </Link>
                <Link
                  href="/calculators/personal-loan"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  Personal Loan Calculator
                </Link>
                <Link
                  href="/calculators/business-loan"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  Business Loan Calculator
                </Link>
                <Link
                  href="/calculators/loan-against-property"
                  className="block px-4 py-2 hover:bg-brand-50 hover:text-brand-700 text-slate-700"
                >
                  LAP Loan Calculator
                </Link>
              </div>
            </div>

            <Link href="/resources" className="hover:text-brand-600 transition-colors">
              Resources & Guides
            </Link>
            <Link href="/about" className="hover:text-brand-600 transition-colors">
              About M Prathap
            </Link>
            <Link href="/contact" className="hover:text-brand-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact#enquiry-form"
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-md text-sm transition-colors border border-brand-700"
            >
              Check Loan Eligibility
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-700 hover:text-brand-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-medium text-slate-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-brand-600"
            >
              Home
            </Link>

            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Loan Services
              </span>
              <div className="pl-3 space-y-2 text-sm">
                <Link
                  href="/home-loans"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  Home Loans (Starts 7.15%*)
                </Link>
                <Link
                  href="/personal-loans"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  Personal Loans (Starts 9.90%*)
                </Link>
                <Link
                  href="/business-loans"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  Business Loans (Starts 10.00%*)
                </Link>
                <Link
                  href="/loan-against-property"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  Loan Against Property (8.50%*)
                </Link>
                <Link
                  href="/plot-loans"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  Plot Purchase Loans
                </Link>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Insurance Solutions
              </span>
              <div className="pl-3 space-y-2 text-sm">
                <Link
                  href="/insurance"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  Insurance Hub Overview
                </Link>
                <Link
                  href="/life-insurance"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  Life Insurance & Term Protection
                </Link>
                <Link
                  href="/health-insurance"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  Health Insurance & Family Floater
                </Link>
                <Link
                  href="/general-insurance"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  General & Motor Insurance
                </Link>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Calculators & Knowledge
              </span>
              <div className="pl-3 space-y-2 text-sm">
                <Link
                  href="/calculators"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  EMI Calculators Hub
                </Link>
                <Link
                  href="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  Resource Guides & Articles
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  About M Prathap (MBA)
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-700 hover:text-brand-600"
                >
                  Contact Office
                </Link>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <Link
                href="/contact#enquiry-form"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-md text-sm border border-brand-700"
              >
                Check Loan Eligibility
              </Link>
              <a
                href={buildPhoneCallLink()}
                className="flex items-center justify-center gap-2 w-full bg-slate-100 text-slate-800 font-semibold py-2.5 rounded-md text-sm border border-slate-300"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                Call +91 95508 01743
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
