"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LENDING_INSTITUTIONS, InstitutionPartner } from "@/data/partners";
import { Building2 } from "lucide-react";

export default function PartnerBanks() {
  return (
    <section className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#004c8f] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block">
            Our Lending Network & Bank Partners
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#002855]">
            Banks & Financial Institutions We Assist Customers With
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            SP Financial Services evaluates loan criteria across major public & private sector banks, HFCs, and NBFCs in Tirupati, TPT, Renigunta, Chandragiri, and Chittoor.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {LENDING_INSTITUTIONS.map((inst, index) => (
            <BankCardItem key={index} partner={inst} />
          ))}
        </div>

        <p className="text-[11px] text-center text-slate-400 mt-6 font-medium">
          * Note: Logos and trademarks belong to their respective institutions. SP Financial Services provides independent advisory and customer loan facilitation assistance in Tirupati and related areas.
        </p>

      </div>
    </section>
  );
}

function BankCardItem({ partner }: { partner: InstitutionPartner }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white border border-slate-300 hover:border-[#004c8f] rounded-xl p-3.5 flex flex-col items-center justify-center text-center space-y-2 min-h-[110px] max-h-[140px] overflow-hidden shadow-2xs hover:shadow-md transition-all">
      {!imageError ? (
        <div className="relative w-full h-10 flex items-center justify-center overflow-hidden">
          <Image
            src={partner.logoUrl}
            alt={`${partner.name} Tirupati`}
            width={140}
            height={40}
            style={{ maxHeight: "36px", maxWidth: "130px", width: "auto", height: "auto", objectFit: "contain" }}
            onError={() => setImageError(true)}
            unoptimized
          />
        </div>
      ) : (
        <div className="flex items-center gap-1.5 text-[#002855] font-bold text-xs">
          <Building2 className="w-4 h-4 text-[#004c8f]" />
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
