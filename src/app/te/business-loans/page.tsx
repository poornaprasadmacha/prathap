import React from "react";
import { Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import EMIForm from "@/components/EMIForm";
import PartnerBanks from "@/components/PartnerBanks";

export const metadata = {
  title: "తిరుపతిలో బిజినెస్ లోన్స్ 10.00%* నుండి | SP ఫైనాన్షియల్ సర్వీసెస్",
  description: "MSME బిజినెస్ లోన్స్ తిరుపతిలో. 10.00%* నుండి ప్రారంభం. ఎం ప్రతాప్ (MBA) గారి ఉచిత సలహా. కాల్: +91 95508 01743."
};

export default function TeluguBusinessLoansPage() {
  const directPhoneHref = "tel:+919550801743";

  return (
    <div className="bg-white text-slate-900 min-h-screen space-y-0">
      
      <section className="bg-[#003366] text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="bg-[#004c8f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            MSME బిజినెస్ లోన్స్ తిరుపతి
          </span>
          <h1 className="text-3xl sm:text-4xl font-black">
            వ్యాపార అభివృద్ధికి బిజినెస్ లోన్స్ (10.00%* నుండి)
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
            చిన్న మరియు మధ్యతరహా వ్యాపారాలకు వర్కింగ్ క్యాపిటల్ మరియు వర్కింగ్ లోన్స్.
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
        <EMIForm initialAmount={1500000} initialRate={10.0} initialTenure={5} loanTitle="బిజినెస్ లోన్ EMI క్యాలిక్యులేటర్" />
      </section>

      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <LeadForm
            title="బిజినెస్ లోన్ అర్హత తెలుసుకోండి"
            subtitle="ఎం ప్రతాప్ (MBA, 15+ ఏళ్ళ అనుభవం) గారు వెంటనే ఉచితంగా సహాయం చేస్తారు."
          />
        </div>
      </section>

    </div>
  );
}
