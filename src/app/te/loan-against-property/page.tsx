import React from "react";
import { Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import EMIForm from "@/components/EMIForm";
import PartnerBanks from "@/components/PartnerBanks";

export const metadata = {
  title: "తిరుపతిలో లోన్ ఎగైనెస్ట్ ప్రాపర్టీ (LAP) 8.50%* నుండి | SP ఫైనాన్షియల్ సర్వీసెస్",
  description: "ఇల్లు లేదా కమర్షియల్ ప్రాపర్టీ పై లోన్ తిరుపతిలో. 8.50%* నుండి. ఎం ప్రతాప్ (MBA) గారి ఉచిత సలహా. కాల్: +91 95508 01743."
};

export default function TeluguLAPPage() {
  const directPhoneHref = "tel:+919550801743";

  return (
    <div className="bg-white text-slate-900 min-h-screen space-y-0">
      
      <section className="bg-[#003366] text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="bg-[#004c8f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            ప్రాపర్టీ పై లోన్ (LAP) తిరుపతి
          </span>
          <h1 className="text-3xl sm:text-4xl font-black">
            ప్రాపర్టీ పై లోన్ (LAP) — 8.50%* నుండి
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
            మీ ఇల్లు లేదా సైట్ తాకట్టు పెట్టి పెద్ద మొత్తంలో లోన్ పొందండి.
          </p>
          <div>
            <a
              href={directPhoneHref}
              className="inline-flex items-center gap-2 bg-[#da251c] hover:bg-[#b81d16] text-white font-black px-6 py-3 rounded-xl text-base shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span>కాల్ చేయండి: +91 95508 01743</span>
            </a>
          </div>
        </div>
      </section>

      <PartnerBanks />

      <section className="py-10 max-w-5xl mx-auto px-4">
        <EMIForm initialAmount={5000000} initialRate={8.5} initialTenure={15} loanTitle="LAP లోన్ EMI క్యాలిక్యులేటర్" />
      </section>

      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <LeadForm
            title="ప్రాపర్టీ లోన్ ఉచిత సలహా పొందండి"
            subtitle="ఎం ప్రతాప్ (MBA, 15+ ఏళ్ళ అనుభవం) గారు వెంటనే ఉచితంగా సహాయం చేస్తారు."
          />
        </div>
      </section>

    </div>
  );
}
