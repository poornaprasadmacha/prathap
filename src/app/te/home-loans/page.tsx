import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, Calculator } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import EMIForm from "@/components/EMIForm";
import PartnerBanks from "@/components/PartnerBanks";

export const metadata = {
  title: "తిరుపతిలో హోమ్ లోన్స్ 7.15%* నుండి | SP ఫైనాన్షియల్ సర్వీసెస్",
  description: "తిరుపతిలో తక్కువ వడ్డీకి హోమ్ లోన్స్. HDFC, SBI, ICICI మరియు ప్రముఖ బ్యాంకుల ద్వారా 7.15%* నుండి గృహ రుణాలు. కాల్: +91 95508 01743."
};

export default function TeluguHomeLoansPage() {
  const directPhoneHref = "tel:+919550801743";

  return (
    <div className="bg-white text-slate-900 min-h-screen space-y-0">
      
      {/* Telugu Banner Header */}
      <section className="bg-[#003366] text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="bg-[#004c8f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            హోమ్ లోన్ సర్వీసెస్ తిరుపతి
          </span>
          <h1 className="text-3xl sm:text-4xl font-black">
            తిరుపతిలో తక్కువ వడ్డీకే హోమ్ లోన్స్ (7.15%* నుండి)
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
            SP ఫైనాన్షియల్ సర్వీసెస్ ద్వారా ఫ్లాట్స్, విల్లాలు, ఇండిపెండెంట్ ఇళ్ళు మరియు నిర్మాణం కోసం ఉచిత హోమ్ లోన్ మార్గదర్శకత్వం.
          </p>
          <div>
            <a
              href={directPhoneHref}
              className="inline-flex items-center gap-2 bg-[#da251c] hover:bg-[#b81d16] text-white font-black px-6 py-3 rounded-xl text-base shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span>నేరుగా మాట్లాడండి: +91 95508 01743</span>
            </a>
          </div>
        </div>
      </section>

      {/* Feature Highlights in Telugu */}
      <section className="py-10 max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-2xl font-black text-[#002855] text-center">SP ఫైనాన్షియల్ సర్వీసెస్ హోమ్ లోన్ ప్రత్యేకతలు</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="border border-slate-200 p-4 rounded-xl text-center space-y-2">
            <span className="text-xs font-bold text-slate-500 block">ప్రారంభ వడ్డీ రేటు</span>
            <span className="text-2xl font-black text-[#004c8f]">7.15%*</span>
            <span className="text-xs text-slate-600 block">వార్షిక వడ్డీ రేటు</span>
          </div>

          <div className="border border-slate-200 p-4 rounded-xl text-center space-y-2">
            <span className="text-xs font-bold text-slate-500 block">లోన్ కాలపరిమితి</span>
            <span className="text-2xl font-black text-[#004c8f]">30 ఏళ్ళ వరకు</span>
            <span className="text-xs text-slate-600 block">సులభమైన నెలవారీ EMI</span>
          </div>

          <div className="border border-slate-200 p-4 rounded-xl text-center space-y-2">
            <span className="text-xs font-bold text-slate-500 block">లోన్ మంజూరు</span>
            <span className="text-2xl font-black text-[#004c8f]">90% వరకు</span>
            <span className="text-xs text-slate-600 block">ప్రాపర్టీ విలువ పై</span>
          </div>
        </div>
      </section>

      <PartnerBanks />

      {/* EMI Calculator */}
      <section className="py-10 max-w-5xl mx-auto px-4">
        <EMIForm initialAmount={3500000} initialRate={7.15} initialTenure={20} loanTitle="హోమ్ లోన్ EMI లెక్కించండి" />
      </section>

      {/* Lead Form */}
      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <LeadForm
            title="హోమ్ లోన్ అర్హత తెలుసుకోండి"
            subtitle="మీ వివరాలను పంపండి. ఎం ప్రతాప్ (MBA) గారు వెంటనే ఉచితంగా సహాయం చేస్తారు."
          />
        </div>
      </section>

    </div>
  );
}
