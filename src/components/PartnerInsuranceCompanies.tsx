"use client";

import React, { useState } from "react";
import Image from "next/image";
import { INSURANCE_INSTITUTIONS, InstitutionPartner } from "@/data/partners";
import { ShieldCheck } from "lucide-react";

export default function PartnerInsuranceCompanies() {
  return (
    <section className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004c8f] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block">
            IRDAI Registered Insurer Partners
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#002855]">
            Leading Insurance Institutions Evaluated by SP Financial Services
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Compare term life, family health floater, motor, and general policies across top IRDAI registered insurers in Tirupati, TPT, and surrounding regions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {INSURANCE_INSTITUTIONS.map((inst, index) => (
            <InsurerCardItem key={index} partner={inst} />
          ))}
        </div>

      </div>
    </section>
  );
}

function InsurerCardItem({ partner }: { partner: InstitutionPartner }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white border border-slate-300 hover:border-[#004c8f] rounded-xl p-3.5 flex flex-col items-center justify-center text-center space-y-2 min-h-[110px] max-h-[140px] overflow-hidden shadow-2xs hover:shadow-md transition-all">
      {!imageError ? (
        <div className="relative w-full h-10 flex items-center justify-center overflow-hidden">
          <Image
            src={partner.logoUrl}
            alt={`${partner.name} Insurance Tirupati`}
            width={140}
            height={40}
            style={{ maxHeight: "36px", maxWidth: "130px", width: "auto", height: "auto", objectFit: "contain" }}
            onError={() => setImageError(true)}
            unoptimized
          />
        </div>
      ) : (
        <div className="flex items-center gap-1.5 text-[#002855] font-bold text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>{partner.name}</span>
        </div>
      )}

      <span className="text-[11px] font-extrabold text-slate-900 line-clamp-1">
        {partner.name}
      </span>
      <span className="text-[10px] text-slate-500 line-clamp-1 font-semibold">
        {partner.tagline}
      </span>
    </div>
  );
}
