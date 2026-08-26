import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Disclaimer from "@/components/Disclaimer";
import { LOAN_PRODUCTS } from "@/data/loans";
import { INSURANCE_PRODUCTS } from "@/data/insurance";
import { SERVICED_LOCATIONS } from "@/data/locations";
import { RESOURCE_ARTICLES } from "@/data/articles";
import { MapPin, FileText, Calculator, ShieldCheck, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Sitemap | M Prathap Financial Services Tirupati",
  description: "Complete visual sitemap of M Prathap Financial Services website. Explore all loan services, insurance categories, calculators, resources, and local location pages in Tirupati.",
  keywords: ["Sitemap Tirupati Financial Services", "Website Index M Prathap"]
};

export default function HTMLSitemapPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Sitemap" }]} />

      <section className="bg-brand-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Website Sitemap & Directory
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-3xl">
            Explore the complete directory of pages, loan services, insurance categories, calculators, educational guides, and local Tirupati service areas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Main Pages */}
            <div className="space-y-3 bg-slate-50 border border-slate-300 rounded-xl p-6">
              <h2 className="font-bold text-brand-900 text-lg border-b border-slate-200 pb-2">
                Main Pages
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="font-semibold text-brand-700 hover:underline">Home Page</Link>
                </li>
                <li>
                  <Link href="/about" className="font-semibold text-brand-700 hover:underline">About M Prathap (MBA)</Link>
                </li>
                <li>
                  <Link href="/contact" className="font-semibold text-brand-700 hover:underline">Contact Office</Link>
                </li>
                <li>
                  <Link href="/faq" className="font-semibold text-brand-700 hover:underline">Searchable FAQ Library</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-slate-600 hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-slate-600 hover:underline">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-slate-600 hover:underline">Financial Disclaimer</Link>
                </li>
              </ul>
            </div>

            {/* Loan Services */}
            <div className="space-y-3 bg-slate-50 border border-slate-300 rounded-xl p-6">
              <h2 className="font-bold text-brand-900 text-lg border-b border-slate-200 pb-2">
                Loan Services
              </h2>
              <ul className="space-y-2 text-sm">
                {LOAN_PRODUCTS.map((loan) => (
                  <li key={loan.id}>
                    <Link href={`/${loan.slug}`} className="font-semibold text-brand-700 hover:underline">
                      {loan.title} ({loan.indicativeRate}*)
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insurance Solutions */}
            <div className="space-y-3 bg-slate-50 border border-slate-300 rounded-xl p-6">
              <h2 className="font-bold text-brand-900 text-lg border-b border-slate-200 pb-2">
                Insurance Solutions
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/insurance" className="font-semibold text-emerald-800 hover:underline">Insurance Hub Overview</Link>
                </li>
                <li>
                  <Link href="/life-insurance" className="font-semibold text-emerald-800 hover:underline">Life Insurance & Term Protection</Link>
                </li>
                <li>
                  <Link href="/health-insurance" className="font-semibold text-emerald-800 hover:underline">Health Insurance & Family Floater</Link>
                </li>
                <li>
                  <Link href="/general-insurance" className="font-semibold text-emerald-800 hover:underline">General & Motor Insurance</Link>
                </li>
                <li>
                  <Link href="/family-insurance" className="font-semibold text-emerald-800 hover:underline">360° Family Shield</Link>
                </li>
              </ul>
            </div>

            {/* Calculators */}
            <div className="space-y-3 bg-slate-50 border border-slate-300 rounded-xl p-6">
              <h2 className="font-bold text-brand-900 text-lg border-b border-slate-200 pb-2">
                Financial Calculators
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/calculators" className="font-semibold text-brand-700 hover:underline">Calculators Hub</Link>
                </li>
                <li>
                  <Link href="/calculators/home-loan" className="text-slate-700 hover:underline">Home Loan Calculator</Link>
                </li>
                <li>
                  <Link href="/calculators/personal-loan" className="text-slate-700 hover:underline">Personal Loan Calculator</Link>
                </li>
                <li>
                  <Link href="/calculators/business-loan" className="text-slate-700 hover:underline">Business Loan Calculator</Link>
                </li>
                <li>
                  <Link href="/calculators/loan-against-property" className="text-slate-700 hover:underline">LAP Loan Calculator</Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Local Geo Locations Grid */}
          <div className="bg-slate-50 border border-slate-300 rounded-xl p-6 space-y-4">
            <h2 className="font-bold text-brand-900 text-lg border-b border-slate-200 pb-2">
              Tirupati District Service Areas
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-xs font-semibold text-brand-700">
              {SERVICED_LOCATIONS.map((loc) => (
                <Link key={loc.slug} href={`/locations/${loc.slug}`} className="hover:underline bg-white p-2.5 rounded border border-slate-200 flex items-center justify-between">
                  <span>{loc.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-600" />
                </Link>
              ))}
            </div>
          </div>

          {/* Resource Articles */}
          <div className="bg-slate-50 border border-slate-300 rounded-xl p-6 space-y-4">
            <h2 className="font-bold text-brand-900 text-lg border-b border-slate-200 pb-2">
              Financial Guides & Resource Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-medium text-slate-800">
              {RESOURCE_ARTICLES.map((art) => (
                <Link key={art.slug} href={`/resources/${art.slug}`} className="hover:text-brand-900 hover:underline bg-white p-3 rounded border border-slate-200 block space-y-1">
                  <span className="font-bold text-brand-900 block">{art.title}</span>
                  <span className="text-[10px] text-brand-600 uppercase font-semibold">{art.category}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Direct XML Sitemap Link */}
          <div className="bg-brand-900 text-white p-4 rounded-xl flex items-center justify-between text-xs font-medium">
            <span>Machine-Readable Search Engine XML Sitemap:</span>
            <a href="/sitemap.xml" target="_blank" className="bg-white text-brand-900 font-bold px-3 py-1.5 rounded hover:bg-slate-100 transition-colors">
              Open sitemap.xml
            </a>
          </div>

        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
