import React from "react";
import EMIForm from "@/components/EMIForm";

export const metadata = {
  title: "లోన్ EMI క్యాలిక్యులేటర్ తెలుగు | SP ఫైనాన్షియల్ సర్వీసెస్ తిరుపతి",
  description: "హోమ్ లోన్, పర్సనల్ లోన్ మరియు బిజినెస్ లోన్ EMI లెక్కించండి. కాల్: +91 95508 01743."
};

export default function TeluguCalculatorsPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black text-[#002855]">నెలవారీ EMI లెక్కించండి</h1>
          <p className="text-sm text-slate-600 font-medium">మీ లోన్ అమౌంట్ మరియు కాలపరిమితి ఎంచుకుని ఖచ్చితమైన EMI తెలుసుకోండి.</p>
        </div>
        <EMIForm initialAmount={3500000} initialRate={7.15} initialTenure={20} loanTitle="EMI క్యాలిక్యులేటర్" />
      </div>
    </div>
  );
}
