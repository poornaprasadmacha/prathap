import React from "react";
import { Award, Layers, ShieldCheck, FileCheck, PhoneCall, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Award,
      title: "15+ Years Sector Experience",
      description: "Proven expertise guided by M Prathap, MBA, specializing in retail loans and financial advisory across Andhra Pradesh."
    },
    {
      icon: Layers,
      title: "Multi-Lender Rate Comparison",
      description: "We compare interest rates, LTV ratios, and processing fees across 10+ public & private banks to find optimal offers."
    },
    {
      icon: FileCheck,
      title: "Doorstep Documentation Support",
      description: "Complete assistance in preparing legal title deeds, salary paperwork, ITR financials, and property layout approvals."
    },
    {
      icon: MapPin,
      title: "Local Tirupati Expertise",
      description: "Deep geographic understanding of Tirupati Urban/Rural, Renigunta, Chandragiri, Puttur, and Srikalahasti property markets."
    },
    {
      icon: ShieldCheck,
      title: "IRDAI Compliant Insurance Guidance",
      description: "Transparent evaluation of term life, health floater, motor, and business insurance without high-pressure tactics."
    },
    {
      icon: PhoneCall,
      title: "End-to-End Client Support",
      description: "Continuous guidance from initial eligibility check through title search, bank sanction, and final loan disbursal."
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-900 tracking-tight">
            Why Customers Choose M Prathap Financial Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Factual benefits of working with an experienced local financial consultant in Tirupati.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, index) => {
            const IconComponent = pt.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-300 rounded-md p-6 space-y-4 hover:border-brand-600 transition-colors"
              >
                <div className="w-12 h-12 rounded bg-white border border-slate-200 flex items-center justify-center text-brand-700">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-900">{pt.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
