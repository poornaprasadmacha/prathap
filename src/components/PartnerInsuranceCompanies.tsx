"use client";

import React, { useState } from "react";
import Image from "next/image";
import { INSURANCE_INSTITUTIONS, InstitutionPartner } from "@/data/partners";
import { ShieldCheck } from "lucide-react";

export default function PartnerInsuranceCompanies() {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-900">
            Leading Insurance Institutions We Help You Evaluate
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Compare term life, health floater, motor, and general policy terms across top insurance providers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
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
    <div className="bg-white border border-slate-300 rounded-lg p-4 flex flex-col items-center justify-center text-center space-y-2 min-h-[110px] max-h-[140px] overflow-hidden">
      {!imageError ? (
        <div className="relative w-full h-12 flex items-center justify-center overflow-hidden">
          <Image
            src={partner.logoUrl}
            alt={`${partner.name} Insurance Tirupati`}
            width={140}
            height={40}
            style={{ maxHeight: "40px", maxWidth: "140px", width: "auto", height: "auto", objectFit: "contain" }}
            onError={() => setImageError(true)}
            unoptimized
          />
        </div>
      ) : (
        <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>{partner.name}</span>
        </div>
      )}

      <span className="text-[11px] font-semibold text-slate-800 line-clamp-1">
        {partner.name}
      </span>
      <span className="text-[10px] text-slate-500 line-clamp-1 font-medium">
        {partner.tagline}
      </span>
    </div>
  );
}
