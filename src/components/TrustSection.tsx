import React from "react";
import { ShieldCheck, Award, CheckCircle, Scale } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-12 bg-brand-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border border-blue-900 bg-brand-900 p-5 rounded flex items-start gap-4">
            <Award className="w-8 h-8 text-blue-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white text-base">15+ Years Experience</h4>
              <p className="text-xs text-slate-300 mt-1">
                Guided by M Prathap, MBA with extensive financial advisory expertise in Andhra Pradesh.
              </p>
            </div>
          </div>

          <div className="border border-blue-900 bg-brand-900 p-5 rounded flex items-start gap-4">
            <Scale className="w-8 h-8 text-blue-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white text-base">Unbiased Guidance</h4>
              <p className="text-xs text-slate-300 mt-1">
                Evaluating offers across multiple banks and insurers without pushing single products.
              </p>
            </div>
          </div>

          <div className="border border-blue-900 bg-brand-900 p-5 rounded flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-emerald-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white text-base">Legal Verification</h4>
              <p className="text-xs text-slate-300 mt-1">
                Pre-scrutiny of title deeds, link documents, and layout approvals to avoid sanction delays.
              </p>
            </div>
          </div>

          <div className="border border-blue-900 bg-brand-900 p-5 rounded flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-blue-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white text-base">100% Data Confidentiality</h4>
              <p className="text-xs text-slate-300 mt-1">
                Your personal and financial documents are handled with strict privacy. No banking PINs requested.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
