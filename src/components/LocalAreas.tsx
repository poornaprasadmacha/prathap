import React from "react";
import Link from "next/link";
import { MapPin, Navigation, ArrowRight } from "lucide-react";
import { SERVICED_LOCATIONS } from "@/data/locations";

export default function LocalAreas() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
            Loan & Insurance Guidance Across Tirupati District
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            We provide doorstep financial advisory for residents, government staff, and business owners in Tirupati and surrounding mandals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICED_LOCATIONS.map((loc) => (
            <div
              key={loc.slug}
              className="bg-white border border-slate-300 rounded-md p-6 flex flex-col justify-between space-y-4 hover:border-brand-600 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-brand-900">{loc.name}</h3>
                    <span className="text-xs text-brand-600 font-semibold block mt-0.5">
                      {loc.type} ({loc.distanceFromTirupati})
                    </span>
                  </div>
                  <MapPin className="w-5 h-5 text-brand-600 shrink-0" />
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {loc.description}
                </p>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase text-slate-400 block">
                    Popular Loan Services:
                  </span>
                  <p className="text-xs font-medium text-slate-700">
                    {loc.popularLoanTypes.join(" • ")}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-xs font-bold text-brand-700 hover:text-brand-900 flex items-center justify-between group"
                >
                  <span>Explore {loc.name} Financial Services</span>
                  <ArrowRight className="w-4 h-4 text-brand-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
