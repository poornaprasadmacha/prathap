"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";

export default function StickyMobileCTA() {
  const directPhoneHref = "tel:+919550801743";

  return (
    <>
      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t-2 border-[#004c8f] p-2 shadow-2xl">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* Direct Phone Call Button */}
          <a
            href={directPhoneHref}
            className="flex-1 bg-[#004c8f] text-white hover:bg-[#003366] py-3 px-3 rounded-xl text-center flex items-center justify-center gap-2 font-extrabold text-xs shadow-md border border-[#003366]"
          >
            <Phone className="w-4 h-4 text-blue-200 animate-pulse" />
            <span>Call M Prathap: +91 95508 01743</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={buildWhatsAppLink("Hello M Prathap, I am interested in loan/insurance options in Tirupati.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white hover:bg-emerald-700 py-3 px-3 rounded-xl text-center flex items-center justify-center gap-1 font-bold text-xs shadow-md shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-100" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Desktop Persistent Floating Action Button (FAB) */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-50 items-center gap-3">
        <div className="bg-white/95 backdrop-blur-md border border-slate-300 shadow-2xl p-2.5 rounded-2xl flex items-center gap-3 border-l-4 border-l-[#004c8f]">
          <div className="flex flex-col text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Instant Advisory
            </span>
            <span className="text-xs font-black text-[#003366]">
              Advised by M Prathap | MBA | 15+ Years
            </span>
          </div>

          <a
            href={directPhoneHref}
            className="bg-[#004c8f] hover:bg-[#003366] text-white font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all shadow-md hover:scale-105"
          >
            <Phone className="w-4 h-4 text-blue-200 animate-pulse" />
            <span>Call: +91 95508 01743</span>
          </a>
        </div>
      </div>
    </>
  );
}
