import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Disclaimer from "@/components/Disclaimer";
import { RESOURCE_ARTICLES } from "@/data/articles";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Financial Resources & Loan Guides | M Prathap Tirupati",
  description: "Educational articles and guides on Home Loans, Personal Loan Interest Rates, Plot vs Home Loan, Health Insurance Super Top-Up & LAP in Tirupati.",
  keywords: ["Financial Guides Tirupati", "Home Loan Guide Andhra Pradesh", "Loan Advice Articles Tirupati"]
};

export default function ResourcesPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Resources & Articles" }]} />

      <section className="bg-brand-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Financial & Loan Resource Guides
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            In-depth analysis and expert guidance to help borrowers and insurance buyers in Tirupati make well-informed financial decisions.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCE_ARTICLES.map((article) => (
              <div
                key={article.slug}
                className="bg-slate-50 border border-slate-300 rounded-md p-6 flex flex-col justify-between space-y-4 hover:border-brand-600 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-brand-700 uppercase bg-brand-100 px-2 py-0.5 rounded border border-brand-200">
                      {article.category}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-brand-900 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <Link
                    href={`/resources/${article.slug}`}
                    className="text-xs font-bold text-brand-700 hover:text-brand-900 flex items-center justify-between group"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 text-brand-600 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
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
