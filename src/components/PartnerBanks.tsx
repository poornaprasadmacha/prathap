"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LENDING_INSTITUTIONS, InstitutionPartner } from "@/data/partners";
import { Building2 } from "lucide-react";

export default function PartnerBanks() {
  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Banks & Financial Institutions We Assist Customers With
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            We evaluate loan criteria across major public sector banks, private banks, housing finance companies, and NBFCs in Tirupati.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {LENDING_INSTITUTIONS.map((inst, index) => (
            <BankCardItem key={index} partner={inst} />
          ))}
        </div>

        <p className="text-[11px] text-center text-slate-400 mt-6">
          * Note: Logos and trademarks belong to their respective institutions. M Prathap Financial Services provides independent advisory and customer loan facilitation assistance.
        </p>

      </div>
    </section>
  );
}

function BankCardItem({ partner }: { partner: InstitutionPartner }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white border border-slate-300 rounded-lg p-4 flex flex-col items-center justify-center text-center space-y-2 min-h-[110px] max-h-[140px] overflow-hidden">
      {!imageError ? (
        <div className="relative w-full h-12 flex items-center justify-center overflow-hidden">
          <Image
            src={partner.logoUrl}
            alt={`${partner.name} Tirupati`}
            width={140}
            height={40}
            style={{ maxHeight: "40px", maxWidth: "140px", width: "auto", height: "auto", objectFit: "contain" }}
            onError={() => setImageError(true)}
            unoptimized
          />
        </div>
      ) : (
        <div className="flex items-center gap-1.5 text-brand-900 font-bold text-xs">
          <Building2 className="w-4 h-4 text-brand-600" />
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
