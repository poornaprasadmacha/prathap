import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, GraduationCap, MapPin, Phone, Mail, CheckCircle2, ChevronRight } from "lucide-react";
import { buildPhoneCallLink, buildWhatsAppLink } from "@/lib/utils";

export default function AboutPrathap() {
  return (
    <section className="py-16 bg-brand-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Consultant Profile Badge & Stats */}
          <div className="lg:col-span-5 bg-brand-950 border border-blue-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-4 border-b border-blue-800/80 pb-4">
              <div className="w-20 h-24 rounded-xl overflow-hidden bg-slate-900 border-2 border-blue-400 shrink-0 shadow-sm relative">
                <Image
                  src="/images/prathap.png"
                  alt="M Prathap, MBA - Senior Financial Advisor"
                  width={160}
                  height={192}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block">
                  Senior Financial Advisor
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">M Prathap</h2>
                <div className="inline-flex items-center gap-1.5 bg-brand-800 text-blue-200 border border-blue-700/60 px-2.5 py-0.5 rounded text-xs font-semibold">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  <span>Qualification: MBA</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 bg-brand-900 border border-blue-800/60 p-3 rounded">
                <Award className="w-8 h-8 text-blue-400 shrink-0" />
                <div>
                  <span className="text-lg font-bold text-white block">15+ Years</span>
                  <span className="text-xs text-slate-300">Financial Sector Advisory Experience</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-brand-900 border border-blue-800/60 p-3 rounded">
                <MapPin className="w-8 h-8 text-blue-400 shrink-0" />
                <div>
                  <span className="text-sm font-bold text-white block">Location</span>
                  <span className="text-xs text-slate-300">Tirupati, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={buildPhoneCallLink()}
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-semibold py-2.5 px-4 rounded text-xs transition-colors flex items-center justify-center gap-2 border border-brand-500"
              >
                <Phone className="w-4 h-4" />
                Call Direct: +91 95508 01743
              </a>
              <a
                href="mailto:prathapmba10@gmail.com"
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 px-4 rounded text-xs transition-colors flex items-center justify-center gap-2 border border-slate-700"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                Email: prathapmba10@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Personalized Financial Guidance Built on Transparency & Local Trust
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              M Prathap holds a Master of Business Administration (MBA) degree and brings over 15+ years of hands-on experience in the financial sector. Based in Tirupati, he assists individuals, families, salaried employees, and business owners in making informed credit and insurance choices.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Comprehensive Loan Matching:</strong> Assessing client financial profiles against specific bank underwriting criteria to identify high-approval options.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Document Verification:</strong> Reviewing title deeds, link documents, TUDA/DTCP layout approvals, and income computation prior to bank submission.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Unbiased Insurance Planning:</strong> Helping clients evaluate term life cover and family health policies from top IRDAI-registered insurers.
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="bg-brand-600 hover:bg-brand-500 text-white font-semibold px-5 py-2.5 rounded text-sm transition-colors border border-brand-500 flex items-center gap-1.5"
              >
                <span>Read Full Biography</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="text-blue-300 hover:text-white font-semibold text-sm underline transition-colors"
              >
                Visit Contact Page
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
