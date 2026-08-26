import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { buildWhatsAppLink, buildPhoneCallLink } from "@/lib/utils";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-slate-300 p-2 text-xs font-semibold">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={buildPhoneCallLink()}
          className="bg-brand-900 text-white hover:bg-brand-950 py-2.5 px-2 rounded text-center flex flex-col items-center justify-center gap-1 border border-brand-950 transition-colors"
        >
          <Phone className="w-4 h-4 text-blue-300" />
          <span>CALL NOW</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={buildWhatsAppLink("Hello M Prathap, I am interested in loan/insurance options in Tirupati.")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-700 text-white hover:bg-emerald-800 py-2.5 px-2 rounded text-center flex flex-col items-center justify-center gap-1 border border-emerald-800 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-200" />
          <span>WHATSAPP</span>
        </a>

        {/* Enquire Button */}
        <Link
          href="/contact#enquiry-form"
          className="bg-brand-600 text-white hover:bg-brand-700 py-2.5 px-2 rounded text-center flex flex-col items-center justify-center gap-1 border border-brand-700 transition-colors"
        >
          <FileText className="w-4 h-4 text-blue-200" />
          <span>ENQUIRE</span>
        </Link>

      </div>
    </div>
  );
}
