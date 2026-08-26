import React from "react";
import { MessageSquareQuote, ShieldCheck, CheckCircle } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Trusted Local Financial Advisory in Tirupati
          </h2>
          <p className="text-sm text-slate-600">
            Dedicated to helping households and entrepreneurs navigate loan approvals with honesty, clarity, and legal diligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-300 rounded p-6 space-y-3">
            <div className="flex items-center gap-2 text-brand-700 font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>Transparent Rate Advice</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed italic">
              &quot;Clear comparative evaluation of housing loan interest rates across multiple public &amp; private banks without misleading claims.&quot;
            </p>
            <span className="text-[11px] font-semibold text-slate-500 block border-t border-slate-200 pt-2">
              — Home Loan Client, Tirupati Urban
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-300 rounded p-6 space-y-3">
            <div className="flex items-center gap-2 text-brand-700 font-bold text-sm">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Hassle-Free Documentation</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed italic">
              &quot;Doorstep guidance in preparing property link documents, approved layout plans, and income statements for smooth sanction.&quot;
            </p>
            <span className="text-[11px] font-semibold text-slate-500 block border-t border-slate-200 pt-2">
              — LAP &amp; Business Client, Renigunta
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-300 rounded p-6 space-y-3">
            <div className="flex items-center gap-2 text-brand-700 font-bold text-sm">
              <MessageSquareQuote className="w-5 h-5 text-brand-600" />
              <span>Family Insurance Planning</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed italic">
              &quot;Comprehensive health floater and term life cover advisory tailored to our exact family protection requirements.&quot;
            </p>
            <span className="text-[11px] font-semibold text-slate-500 block border-t border-slate-200 pt-2">
              — Family Health Insurance Client, Chandragiri
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
