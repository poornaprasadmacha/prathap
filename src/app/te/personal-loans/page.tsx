import React from "react";
import { Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import EMIForm from "@/components/EMIForm";
import PartnerBanks from "@/components/PartnerBanks";

export const metadata = {
  title: "తిరుపతిలో పర్సనల్ లోన్స్ 9.90%* నుండి | SP ఫైనాన్షియల్ సర్వీసెస్",
  description: "తక్షణ పర్సనల్ లోన్స్ తిరుపతిలో. 9.90%* నుండి ప్రారంభం. ఎం ప్రతాప్ (MBA) గారి ఉచిత సలహా. కాల్: +91 95508 01743."
};

export default function TeluguPersonalLoansPage() {
  const directPhoneHref = "tel:+919550801743";

  return (
    <div className="bg-white text-slate-900 min-h-screen space-y-0">
      
      <section className="bg-[#003366] text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="bg-[#004c8f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            తక్షణ పర్సనల్ లోన్స్ తిరుపతి
          </span>
          <h1 className="text-3xl sm:text-4xl font-black">
            పర్సనల్ లోన్స్ 9.90%* నుండి (తక్షణ మంజూరు)
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
            ఉద్యోగులు మరియు వ్యాపారస్తులకు ఎటువంటి తాకట్టు లేకుండా పర్సనల్ లోన్స్.
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

      <section className="py-10 max-w-4xl mx-auto px-4 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="border border-slate-200 p-4 rounded-xl text-center">
            <span className="text-xs font-bold text-slate-500 block">వడ్డీ రేటు</span>
            <span className="text-2xl font-black text-[#004c8f]">9.90%* నుండి</span>
          </div>
          <div className="border border-slate-200 p-4 rounded-xl text-center">
            <span className="text-xs font-bold text-slate-500 block">లోన్ కాలపరిమితి</span>
            <span className="text-2xl font-black text-[#004c8f]">5 ఏళ్ళ వరకు</span>
          </div>
          <div className="border border-slate-200 p-4 rounded-xl text-center">
            <span className="text-xs font-bold text-slate-500 block">డాక్యుమెంట్లు</span>
            <span className="text-2xl font-black text-[#004c8f]">చాలా తక్కువ</span>
          </div>
        </div>
      </section>

      <PartnerBanks />

      <section className="py-10 max-w-5xl mx-auto px-4">
        <EMIForm initialAmount={500000} initialRate={9.9} initialTenure={5} loanTitle="పర్సనల్ లోన్ EMI క్యాలిక్యులేటర్" />
      </section>

      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <LeadForm
            title="పర్సనల్ లోన్ వివరాల కోసం పంపండి"
            subtitle="ఎం ప్రతాప్ (MBA, 15+ ఏళ్ళ అనుభవం) గారు వెంటనే ఉచితంగా సహాయం చేస్తారు."
          />
        </div>
      </section>

    </div>
  );
}
