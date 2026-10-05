"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LENDING_INSTITUTIONS, InstitutionPartner } from "@/data/partners";
import { Building2 } from "lucide-react";

export default function PartnerBanks() {
  // Duplicate array for seamless infinite horizontal scroll marquee
  const doublePartners = [...LENDING_INSTITUTIONS, ...LENDING_INSTITUTIONS];

  return (
    <section className="py-10 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
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

        {/* HORIZONTAL AUTO-SCROLLING MARQUEE CONTAINER */}
        <div className="relative w-full overflow-hidden py-2 bg-slate-50/60 rounded-2xl border border-slate-200">
          
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-4 px-4">
            {doublePartners.map((inst, index) => (
              <BankCardItem key={index} partner={inst} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function BankCardItem({ partner }: { partner: InstitutionPartner }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white border border-slate-300 hover:border-[#004c8f] rounded-xl p-3 flex flex-col items-center justify-center text-center space-y-1.5 w-44 sm:w-48 shrink-0 min-h-[105px] max-h-[125px] overflow-hidden shadow-2xs hover:shadow-md transition-all">
      {!imageError ? (
        <div className="relative w-full h-9 flex items-center justify-center overflow-hidden">
          <Image
            src={partner.logoUrl}
            alt={`${partner.name} Tirupati`}
            width={130}
            height={36}
            style={{ maxHeight: "32px", maxWidth: "120px", width: "auto", height: "auto", objectFit: "contain" }}
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
