import React from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";
import { LoanProduct } from "@/data/loans";

interface LoanCardProps {
  loan: LoanProduct;
}

export default function LoanCard({ loan }: LoanCardProps) {
  // Direct WhatsApp link formatted with exact loan name
  const waMsg = encodeURIComponent(`Hello M Prathap, I would like to inquire about ${loan.title} in Tirupati.`);
  const waUrl = `https://wa.me/919550801743?text=${waMsg}`;

  return (
    <div className="bg-white border border-slate-300 rounded-md p-6 flex flex-col justify-between space-y-5 hover:border-brand-600 transition-colors">
      
      <div className="space-y-4">
        {/* Header & Indicative Rate */}
        <div className="flex justify-between items-start gap-3 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-xl font-bold text-brand-900">{loan.title}</h3>
            <span className="text-xs text-slate-500 font-medium block mt-0.5">
              Tirupati & Surrounding Mandals
            </span>
          </div>

          <div className="bg-brand-50 border border-brand-200 px-3 py-1 rounded text-right shrink-0">
            <span className="text-[10px] text-brand-700 uppercase font-bold tracking-wider block">
              Starting From
            </span>
            <span className="text-lg font-extrabold text-brand-900">
              {loan.indicativeRate}<span className="text-xs text-brand-600">*</span>
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {loan.shortDescription}
        </p>

        {/* Suitable For */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Suitable For:
          </span>
          <ul className="space-y-1 text-xs text-slate-700 font-medium">
            {loan.targetAudience.slice(0, 3).map((target, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{target}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs">
        <Link
          href={`/${loan.slug}`}
          className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-2.5 px-3 rounded text-center transition-colors border border-brand-700 flex items-center justify-center gap-1"
        >
          <span>View Details</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-2.5 px-3 rounded text-center transition-colors border border-emerald-600 flex items-center justify-center gap-1 shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
          <span>WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
