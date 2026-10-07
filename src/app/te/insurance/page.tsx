import React from "react";
import { Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import PartnerInsuranceCompanies from "@/components/PartnerInsuranceCompanies";

export const metadata = {
  title: "తిరుపతిలో ఇన్సూరెన్స్ సలహా | హెల్త్ & లైఫ్ ఇన్సూరెన్స్ | SP ఫైనాన్షియల్ సర్వీసెస్",
  description: "తిరుపతిలో లైఫ్ ఇన్సూరెన్స్ మరియు ఫ్యామిలీ హెల్త్ ఇన్సూరెన్స్ సలహాలు. ఎం ప్రతాప్ (MBA). కాల్: +91 95508 01743."
};

export default function TeluguInsurancePage() {
  const directPhoneHref = "tel:+919550801743";

  return (
    <div className="bg-white text-slate-900 min-h-screen space-y-0">
      
      <section className="bg-[#003366] text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="bg-[#004c8f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            ఇన్సూరెన్స్ మార్గదర్శకత్వం
          </span>
          <h1 className="text-3xl sm:text-4xl font-black">
            మీ కుటుంబానికి పూర్తి ఇన్సూరెన్స్ రక్షణ
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
            టర్మ్ లైఫ్ ఇన్సూరెన్స్, క్యాష్‌లెస్ హెల్త్ ఇన్సూరెన్స్ మరియు మోటార్ ఇన్సూరెన్స్ పాలసీల పోలిక.
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

      <PartnerInsuranceCompanies />

      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <LeadForm
            title="ఇన్సూరెన్స్ ప్లాన్ వివరాల కోసం పంపండి"
            subtitle="ఎం ప్రతాప్ (MBA, 15+ ఏళ్ళ అనుభవం) గారు వెంటనే ఉచితంగా సహాయం చేస్తారు."
          />
        </div>
      </section>

    </div>
  );
}
