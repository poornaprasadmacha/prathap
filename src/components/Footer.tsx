import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Award, CheckCircle, ExternalLink } from "lucide-react";
import { buildWhatsAppLink, buildPhoneCallLink } from "@/lib/utils";
import { ALL_SURROUNDING_MANDALS } from "@/data/locations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-slate-300 border-t border-slate-800 pt-12 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1: Brand & Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-2xl font-bold text-white tracking-tight block">
                M PRATHAP
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mt-0.5">
                Financial Services • Tirupati
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Professional financial, loan & insurance advisory guided by M Prathap, MBA, with over 15+ years of sector experience in Tirupati and Chittoor region. Dedicated to transparent comparative guidance across top banks and insurance institutions.
            </p>
            <div className="space-y-2 pt-2 text-sm">
              <div className="flex items-center gap-2 text-slate-200">
                <Award className="w-4 h-4 text-blue-400 shrink-0" />
                <span>M Prathap, MBA (15+ Years Sector Experience)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Tirupati, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={buildPhoneCallLink()} className="hover:text-white font-medium">
                  +91 9550801743
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:prathapmba10@gmail.com" className="hover:text-white font-medium">
                  prathapmba10@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Loan Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Loan Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/home-loans" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                  Home Loans (Starts 7.15%*)
                </Link>
              </li>
              <li>
                <Link href="/personal-loans" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                  Personal Loans (Starts 9.90%*)
                </Link>
              </li>
              <li>
                <Link href="/business-loans" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                  Business Loans (Starts 10.00%*)
                </Link>
              </li>
              <li>
                <Link href="/loan-against-property" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                  Loan Against Property (8.50%*)
                </Link>
              </li>
              <li>
                <Link href="/plot-loans" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                  Plot Purchase Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Insurance Options */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Insurance Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/insurance" className="hover:text-blue-300 transition-colors">
                  Insurance Overview Hub
                </Link>
              </li>
              <li>
                <Link href="/life-insurance" className="hover:text-blue-300 transition-colors">
                  Life Insurance & Term Protection
                </Link>
              </li>
              <li>
                <Link href="/health-insurance" className="hover:text-blue-300 transition-colors">
                  Health Insurance & Family Floater
                </Link>
              </li>
              <li>
                <Link href="/general-insurance" className="hover:text-blue-300 transition-colors">
                  General & Motor Insurance
                </Link>
              </li>
              <li>
                <Link href="/family-insurance" className="hover:text-blue-300 transition-colors">
                  360° Family Financial Shield
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Calculators & Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Calculators & Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/calculators" className="hover:text-blue-300 transition-colors">
                  Calculators Hub
                </Link>
              </li>
              <li>
                <Link href="/calculators/home-loan" className="hover:text-blue-300 transition-colors">
                  Home Loan EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/personal-loan" className="hover:text-blue-300 transition-colors">
                  Personal Loan EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-blue-300 transition-colors">
                  Resource Guides & Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300 transition-colors">
                  About M Prathap
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition-colors">
                  Contact Office
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Local Areas Served Grid */}
        <div className="border-t border-slate-800 pt-6 pb-6 my-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
            Service Areas in Tirupati & Surrounding Mandals
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            M Prathap Financial Services provides doorstep consultancy across:{" "}
            {ALL_SURROUNDING_MANDALS.map((area, idx) => (
              <span key={area}>
                <Link href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-300 underline">
                  {area}
                </Link>
                {idx < ALL_SURROUNDING_MANDALS.length - 1 ? " • " : "."}
              </span>
            ))}
          </p>
        </div>

        {/* Regulatory Financial Disclaimer */}
        <div className="bg-slate-900 border border-slate-800 rounded-md p-4 mb-8 text-xs text-slate-400 leading-relaxed space-y-2">
          <p className="font-semibold text-slate-300 uppercase tracking-wide">
            Mandatory Financial & Regulatory Disclaimer:
          </p>
          <p>
            * Interest rates displayed on this website (Home Loans 7.15%*, LAP 8.50%*, Personal Loans 9.90%*, Business Loans 10.00%*) are indicative starting rates subject to change and depend strictly on applicant credit score (CIBIL), loan amount, tenure, employer category, legal title search, and lender underwriting criteria. M Prathap Financial Services acts as a professional loan and insurance consultant assisting clients in connecting with banks, NBFCs, housing finance companies, and IRDAI-registered insurance providers. Loan approvals, interest rates, processing fees, terms, and conditions are determined exclusively by the respective lending institution. Insurance policy coverage, premiums, exclusions, and claim settlements are governed strictly by the official policy wording of respective insurance companies.
          </p>
        </div>

        {/* Bottom copyright & legal sub-links */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} M Prathap Financial Services. All rights reserved. Tirupati, Andhra Pradesh.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
