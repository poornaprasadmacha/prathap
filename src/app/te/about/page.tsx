import React from "react";
import Image from "next/image";
import { Phone, Award, ShieldCheck, MapPin } from "lucide-react";

export const metadata = {
  title: "ఎం ప్రతాప్ (MBA) గురించి | SP ఫైనాన్షియల్ సర్వీసెస్ తిరుపతి",
  description: "15+ సంవత్సరాల అనుభవం ఉన్న ఫైనాన్షియల్ అడ్వైజర్ ఎం ప్రతాప్ (MBA) గారి ప్రొఫైల్. కాల్: +91 95508 01743."
};

export default function TeluguAboutPage() {
  const profilePhotoUrl = "/images/m-prathap-mba-sp-financial-services-founder-tirupati.jpg";
  const directPhoneHref = "tel:+919550801743";

  return (
    <div className="bg-white text-slate-900 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="text-center space-y-2 border-b border-slate-200 pb-6">
          <span className="bg-[#004c8f] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            వ్యవస్థాపకుని ప్రొఫైల్
          </span>
          <h1 className="text-3xl font-black text-[#002855]">ఎం ప్రతాప్ (MBA) — Founder SP ఫైనాన్షియల్ సర్వీసెస్</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="w-56 h-72 rounded-xl overflow-hidden border-4 border-[#004c8f] shadow-md bg-slate-100 relative">
              <Image
                src={profilePhotoUrl}
                alt="ఎం ప్రతాప్ MBA"
                width={400}
                height={500}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-4 font-medium leading-relaxed text-slate-700">
            <p>
              ఎం ప్రతాప్ గారు Master of Business Administration (MBA) పూర్తి చేసి, బ్యాంకింగ్ మరియు ఫైనాన్షియల్ రంగాలు లో 15 కంటే ఎక్కువ సంవత్సరాల అనుభవం కలిగి ఉన్నారు.
            </p>
            <p>
              SP ఫైనాన్షియల్ సర్వీసెస్ ద్వారా తిరుపతి, రేణిగుంట, చంద్రగిరి, శ్రీకాళహస్తి మరియు చిత్తూరు జిల్లా వ్యాప్తంగా వేలాది కుటుంబాలకు తక్కువ వడ్డీకే హోమ్ లోన్స్, పర్సనల్ లోన్స్ మరియు ఇన్సూరెన్స్ సౌకర్యం అందిస్తున్నారు.
            </p>
            <div className="pt-2">
              <a
                href={directPhoneHref}
                className="inline-flex items-center gap-2 bg-[#004c8f] hover:bg-[#002855] text-white font-black px-6 py-3 rounded-xl text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-blue-200" />
                <span>కాల్ చేయండి: +91 95508 01743</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
