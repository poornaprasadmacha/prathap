import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Award, ShieldCheck } from "lucide-react";
import PartnerBanks from "@/components/PartnerBanks";
import PartnerInsuranceCompanies from "@/components/PartnerInsuranceCompanies";
import LeadForm from "@/components/LeadForm";
import EMIForm from "@/components/EMIForm";
import Disclaimer from "@/components/Disclaimer";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata = {
  title: "తిరుపతిలో బెస్ట్ లోన్ అడ్వైజర్ | SP ఫైనాన్షియల్ సర్వీసెస్ (ఎం ప్రతాప్, MBA)",
  description: "తిరుపతిలో బెస్ట్ లోన్ అడ్వైజర్ ఎం ప్రతాప్ (MBA, 15+ ఏళ్ళ అనుభవం) SP ఫైనాన్షియల్ సర్వీసెస్. హోమ్ లోన్ (7.15%*), పర్సనల్ లోన్స్ (9.9%*), LAP & ఇన్సూరెన్స్. కాల్: +91 95508 01743.",
  keywords: [
    "తిరుపతిలో బెస్ట్ లోన్ అడ్వైజర్",
    "ఎం ప్రతాప్ ఫైనాన్షియల్ సర్వీసెస్ తిరుపతి",
    "హోమ్ లోన్, పర్సనల్ లోన్స్ తిరుపతి",
    "తక్కువ వడ్డీకే లోన్స్ - +91 95508 01743",
    "తిరుపతి ప్లాట్ లోన్స్"
  ]
};

export default function TeluguHomePage() {
  const profilePhotoUrl = "/images/m-prathap-mba-sp-financial-services-founder-tirupati.jpg";
  const directPhoneHref = "tel:+919550801743";

  return (
    <div className="space-y-0 bg-white text-slate-900">
      
      {/* Telugu Hero Banner (HDFC Bank Style Layout - Photo Top On Mobile) */}
      <section className="bg-white py-6 sm:py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Top Announcement Bar in Telugu */}
          <div className="bg-[#f0f4f8] border border-[#cbd5e1] rounded-xl p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#003366]">
              <span className="bg-[#004c8f] text-white px-2.5 py-0.5 rounded text-[11px] font-extrabold uppercase">
                ముఖ్య ప్రకటన
              </span>
              <span>తిరుపతి లో హోమ్ లోన్స్ @ <strong>7.15%*</strong> మరియు LAP @ <strong>8.50%*</strong> నుండి ప్రారంభం.</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={directPhoneHref}
                className="bg-[#da251c] hover:bg-[#b81d16] text-white px-3.5 py-1.5 rounded-lg text-xs font-black transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-white animate-pulse" />
                <span>కాల్: +91 95508 01743</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* FOUNDER PORTRAIT MEDIA CARD — ORDER-1 ON MOBILE (TOP) */}
            <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white border border-slate-300 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#003366] uppercase">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>ప్రధాన సలహాదారు ప్రొఫైల్</span>
                  </div>
                  <span className="bg-[#004c8f] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    MBA విద్యార్హత
                  </span>
                </div>

                {/* PHOTO PROMINENT ON MOBILE TOP */}
                <div className="relative mx-auto w-48 sm:w-56 h-60 sm:h-72 rounded-xl overflow-hidden border-4 border-[#004c8f] bg-slate-100">
                  <Image
                    src={profilePhotoUrl}
                    alt="ఎం ప్రతాప్ MBA - SP ఫైనాన్షియల్ సర్వీసెస్ తిరుపతి"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-3 text-center text-white">
                    <span className="text-sm font-black block">ఎం ప్రతాప్, MBA</span>
                    <span className="text-[11px] text-slate-300">15+ సంవత్సరాల బ్యాంకింగ్ అనుభవం</span>
                  </div>
                </div>

                <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-3.5 text-center space-y-1.5">
                  <div className="text-xs font-black text-[#003366]">
                    SP ఫైనాన్షియల్ సర్వీసెస్ తిరుపతి
                  </div>
                  <p className="text-[11px] text-slate-600 font-semibold">
                    తిరుపతి, రేణిగుంట, చంద్రగిరి, శ్రీకాళహస్తి & చిత్తూరు జిల్లా వ్యాప్తంగా సర్వీస్
                  </p>
                  <div className="pt-1">
                    <a
                      href={directPhoneHref}
                      className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-black text-[#004c8f] hover:text-[#003366]"
                    >
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span>నేరుగా మాట్లాడండి: +91 95508 01743</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* TELUGU TEXT CONTENT — ORDER-2 ON MOBILE */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-extrabold">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span>ఎం ప్రతాప్ ద్వారా మార్గదర్శకత్వం | MBA | 15+ ఏళ్ళ అనుభవం</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002855] tracking-tight leading-tight">
                  తిరుపతిలో బెస్ట్ లోన్ అడ్వైజర్
                  <span className="block text-[#004c8f] text-xl sm:text-3xl font-extrabold mt-1">
                    SP ఫైనాన్షియల్ సర్వీసెస్ — హోమ్ లోన్, పర్సనల్ & ప్లాట్ లోన్స్
                  </span>
                </h1>
                <p className="text-slate-800 text-base font-bold leading-relaxed">
                  SP ఫైనాన్షియల్ సర్వీసెస్, వ్యవస్థాపకుడు ఎం ప్రతాప్ (MBA, 15+ సంవత్సరాల అనుభవం), తిరుపతి మరియు పరిసర ప్రాంతాలలో అత్యుత్తమ లోన్ అడ్వైజరీ సంస్థ. సంప్రదించండి: +91 95508 01743.
                </p>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={directPhoneHref}
                  className="bg-[#004c8f] hover:bg-[#002855] text-white font-black px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all flex items-center gap-2 shadow-md"
                >
                  <Phone className="w-5 h-5 text-blue-200" />
                  <span>కాల్ చేయండి: +91 95508 01743</span>
                </a>

                <a
                  href={buildWhatsAppLink("నమస్కారం ఎం ప్రతాప్ గారు, తిరుపతిలో లోన్ వివరాల కోసం సంప్రదిస్తున్నాను.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3.5 rounded-xl text-sm transition-colors flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-100" />
                  <span>వాట్సాప్ మెసేజ్</span>
                </a>
              </div>

              {/* Rates Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="bg-white border border-slate-300 p-3 rounded-xl text-center">
                  <span className="text-xs font-bold text-slate-700 block">హోమ్ లోన్స్</span>
                  <span className="text-lg font-black text-[#004c8f]">7.15%*</span>
                  <span className="text-[10px] text-slate-500 block">తక్కువ EMI</span>
                </div>
                <div className="bg-white border border-slate-300 p-3 rounded-xl text-center">
                  <span className="text-xs font-bold text-slate-700 block">LAP లోన్స్</span>
                  <span className="text-lg font-black text-[#004c8f]">8.50%*</span>
                  <span className="text-[10px] text-slate-500 block">ప్రాపర్టీ లోన్</span>
                </div>
                <div className="bg-white border border-slate-300 p-3 rounded-xl text-center">
                  <span className="text-xs font-bold text-slate-700 block">పర్సనల్ లోన్స్</span>
                  <span className="text-lg font-black text-[#004c8f]">9.90%*</span>
                  <span className="text-[10px] text-slate-500 block">తక్షణ మంజూరు</span>
                </div>
                <div className="bg-white border border-slate-300 p-3 rounded-xl text-center">
                  <span className="text-xs font-bold text-slate-700 block">బిజినెస్ లోన్స్</span>
                  <span className="text-lg font-black text-[#004c8f]">10.00%*</span>
                  <span className="text-[10px] text-slate-500 block">MSME లోన్స్</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Auto-Scrolling Marquee Partner Logos */}
      <PartnerBanks />
      <PartnerInsuranceCompanies />

      {/* Interactive EMI Calculator Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMIForm initialAmount={3500000} initialRate={7.15} initialTenure={20} loanTitle="హోమ్ లోన్ EMI క్యాలిక్యులేటర్" />
        </div>
      </section>

      {/* Lead Enquiry Form in Telugu */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            title="తిరుపతిలో లోన్ & ఇన్సూరెన్స్ వివరాల కోసం సంప్రదించండి"
            subtitle="మీ వివరాలను పంపండి. ఎం ప్రతాప్ (MBA) గారిచే వెంటనే ఉచిత సలహా పొందండి."
          />
        </div>
      </section>

      {/* Regulatory Disclaimer */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>

    </div>
  );
}
