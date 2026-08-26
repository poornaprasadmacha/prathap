"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, MessageCircle, ShieldCheck, HeartPulse, Shield, Users, CheckCircle2 } from "lucide-react";
import { INSURANCE_PRODUCTS } from "@/data/insurance";
import { buildWhatsAppLink } from "@/lib/utils";

export default function InsuranceServices() {
  const [activeTab, setActiveTab] = useState<string>("health-insurance");

  const activeIns = INSURANCE_PRODUCTS.find((i) => i.id === activeTab) || INSURANCE_PRODUCTS[1];

  return (
    <section id="insurance-services" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* HDFC Bank Inspired Hero Header for Insurance */}
        <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Insurance Protection Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Shield your health, family savings, life future, and motor assets with unbiased IRDAI-compliant policy guidance from M Prathap, MBA.
            </p>
          </div>

          {/* Horizontal Insurance Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 scrollbar-none">
            {INSURANCE_PRODUCTS.map((ins) => {
              const isActive = activeTab === ins.id;
              return (
                <button
                  key={ins.id}
                  onClick={() => setActiveTab(ins.id)}
                  className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
                    isActive
                      ? "bg-emerald-800 text-white border border-emerald-900"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {ins.category === "Life" && <ShieldCheck className="w-4 h-4" />}
                  {ins.category === "Health" && <HeartPulse className="w-4 h-4" />}
                  {ins.category === "General" && <Shield className="w-4 h-4" />}
                  {ins.category === "Family" && <Users className="w-4 h-4" />}
                  <span>{ins.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* HDFC Style Container Block for Selected Insurance */}
        <div className="bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl font-extrabold text-brand-900">{activeIns.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{activeIns.shortDescription}</p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-right shrink-0">
              <span className="text-[10px] text-emerald-800 font-bold uppercase block">Insurers Evaluated</span>
              <span className="text-xs font-bold text-slate-800">{activeIns.verifiedBrandsMentioned.join(" • ")}</span>
            </div>
          </div>

          {/* 3-Column HDFC Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            
            {/* Column 1: Policy Options */}
            <div className="space-y-3">
              <h4 className="font-bold text-brand-900 text-base border-b border-slate-200 pb-2">
                Policy Options
              </h4>
              <ul className="space-y-2">
                {activeIns.productTypes.map((pt, idx) => (
                  <li key={idx} className="space-y-0.5">
                    <Link
                      href={`/${activeIns.slug}`}
                      className="font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 group text-xs sm:text-sm"
                    >
                      <span>{pt.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{pt.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Key Policy Benefits */}
            <div className="space-y-3">
              <h4 className="font-bold text-brand-900 text-base border-b border-slate-200 pb-2">
                Key Benefits & Coverage
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {activeIns.keyBenefits.slice(0, 4).map((kb, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{kb}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Action Box */}
            <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h4 className="font-bold text-brand-900 text-base border-b border-slate-200 pb-2">
                Quick Advisory
              </h4>

              <div className="space-y-2">
                <a
                  href={buildWhatsAppLink(`Hello M Prathap, I am interested in ${activeIns.title} in Tirupati.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2.5 px-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 border border-emerald-800"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-200" />
                  <span>WhatsApp Policy Guidance</span>
                </a>

                <Link
                  href={`/${activeIns.slug}`}
                  className="w-full bg-brand-900 hover:bg-brand-950 text-white font-semibold py-2.5 px-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 border border-brand-950"
                >
                  <span>Explore Policy Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
