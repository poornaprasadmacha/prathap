import React from "react";
import LeadForm from "@/components/LeadForm";
import { Phone, MapPin, Mail } from "lucide-react";

export const metadata = {
  title: "సంప్రదించండి | SP ఫైనాన్షియల్ సర్వీసెస్ తిరుపతి",
  description: "ఎం ప్రతాప్ (MBA) గారిని నేరుగా సంప్రదించండి. కాల్: +91 95508 01743."
};

export default function TeluguContactPage() {
  const directPhoneHref = "tel:+919550801743";

  return (
    <div className="bg-white text-slate-900 min-h-screen py-10 px-4 space-y-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <div className="text-center space-y-2 border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-black text-[#002855]">సంప్రదించండి — SP ఫైనాన్షియల్ సర్వీసెస్</h1>
          <p className="text-sm text-slate-600 font-medium">తిరుపతి కార్యాలయం మరియు ఉచిత డోర్‌స్టెప్ సలహాలు</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="border border-slate-200 p-4 rounded-xl space-y-1">
            <Phone className="w-6 h-6 text-[#004c8f] mx-auto" />
            <span className="text-xs font-bold text-slate-500 block">ఫోన్ నెంబర్</span>
            <a href={directPhoneHref} className="text-base font-black text-[#004c8f]">+91 95508 01743</a>
          </div>

          <div className="border border-slate-200 p-4 rounded-xl space-y-1">
            <MapPin className="w-6 h-6 text-[#004c8f] mx-auto" />
            <span className="text-xs font-bold text-slate-500 block">ప్రదేశం</span>
            <span className="text-sm font-bold text-slate-800">తిరుపతి, ఆంధ్రప్రదేశ్</span>
          </div>

          <div className="border border-slate-200 p-4 rounded-xl space-y-1">
            <Mail className="w-6 h-6 text-[#004c8f] mx-auto" />
            <span className="text-xs font-bold text-slate-500 block">ఈమెయిల్</span>
            <span className="text-sm font-bold text-slate-800">prathapmba10@gmail.com</span>
          </div>
        </div>

        <div className="pt-4">
          <LeadForm
            title="ఉచితంగా లోన్ సలహా పొందండి"
            subtitle="మీ వివరాలను నమోదు చేయండి. ఎం ప్రతాప్ (MBA) గారు మీకు కాల్ చేస్తారు."
          />
        </div>

      </div>
    </div>
  );
}
