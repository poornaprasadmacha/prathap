import React from "react";
import Link from "next/link";
import { Home, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl border border-slate-300 shadow-none">
        <div className="w-16 h-16 bg-brand-50 border border-brand-200 text-brand-900 rounded-full flex items-center justify-center mx-auto text-2xl font-extrabold">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-brand-900">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-600">
            The financial service page or resource you requested could not be located.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <Link
            href="/"
            className="w-full bg-brand-900 hover:bg-brand-950 text-white font-bold py-3 px-4 rounded-lg text-xs flex items-center justify-center gap-2 transition-colors border border-brand-950"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/contact"
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-lg text-xs flex items-center justify-center gap-2 transition-colors border border-slate-300"
          >
            <Phone className="w-4 h-4 text-brand-600" />
            <span>Contact Office (+91 9550801743)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
