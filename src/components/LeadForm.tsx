"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Send, ShieldCheck, CheckCircle2 } from "lucide-react";

interface LeadFormProps {
  defaultLoanType?: string;
  title?: string;
  subtitle?: string;
}

export default function LeadForm({
  defaultLoanType = "Home Loan",
  title = "Check Your Loan & Insurance Eligibility",
  subtitle = "Fill in your details to connect directly with M Prathap (MBA) via WhatsApp."
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "Tirupati",
    loanType: defaultLoanType,
    amount: "₹25 Lakhs - ₹50 Lakhs",
    employmentType: "Salaried",
    monthlyIncome: "₹30,000 - ₹50,000",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct clean WhatsApp message
    const messageLines = [
      `*NEW LOAN & INSURANCE ENQUIRY*`,
      `---------------------------------`,
      `*Name:* ${formData.name}`,
      `*Mobile:* +91 ${formData.mobile}`,
      `*Email:* ${formData.email || "Not provided"}`,
      `*Location:* ${formData.city}`,
      `*Service Required:* ${formData.loanType}`,
      `*Approx. Amount:* ${formData.amount}`,
      `*Employment:* ${formData.employmentType}`,
      `*Monthly Income:* ${formData.monthlyIncome}`,
      formData.message ? `*Notes:* ${formData.message}` : ``,
      `---------------------------------`,
      `Sent via M Prathap Financial Services website.`
    ].filter(Boolean).join("\n");

    const encodedMessage = encodeURIComponent(messageLines);
    const waUrl = `https://wa.me/919550801743?text=${encodedMessage}`;
    setWhatsappUrl(waUrl);
    setSubmitted(true);

    // Automatically trigger WhatsApp in new window/tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
  };

  return (
    <div id="enquiry-form" className="bg-white border border-slate-300 rounded-md p-6 sm:p-8">
      <div className="border-b border-slate-200 pb-4 mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-brand-900">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-300 rounded-md p-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-lg font-bold text-emerald-900">
            Opening WhatsApp...
          </h4>
          <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
            Your enquiry details for <strong>{formData.loanType}</strong> have been prepared. If WhatsApp did not open automatically, click the button below:
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded text-sm flex items-center justify-center gap-2 transition-colors border border-emerald-600"
            >
              <MessageCircle className="w-5 h-5 text-emerald-200" />
              Send Enquiry Details on WhatsApp
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-slate-600 underline font-medium hover:text-slate-900 py-2"
            >
              Edit Form Details
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. K. Venkat"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-brand-600 focus:border-brand-600 outline-none text-slate-900 bg-white"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-slate-300 bg-slate-100 text-slate-600 text-xs rounded-l font-semibold">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="9550801743"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-r focus:ring-1 focus:ring-brand-600 focus:border-brand-600 outline-none text-slate-900 bg-white"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address */}
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-brand-600 focus:border-brand-600 outline-none text-slate-900 bg-white"
              />
            </div>

            {/* City / Area */}
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Location / City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Tirupati, Renigunta, Chandragiri"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-brand-600 focus:border-brand-600 outline-none text-slate-900 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Service Type */}
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Service Needed <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.loanType}
                onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-brand-600 focus:border-brand-600 outline-none text-slate-900 bg-white"
              >
                <option value="Home Loan">Home Loan</option>
                <option value="Plot Purchase Loan">Plot Purchase Loan</option>
                <option value="Plot + Construction">Plot + Construction Loan</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Loan Against Property">Loan Against Property (LAP)</option>
                <option value="Life Insurance">Life Insurance & Term Protection</option>
                <option value="Health Insurance">Health Insurance & Family Floater</option>
                <option value="General Insurance">General & Motor Insurance</option>
              </select>
            </div>

            {/* Approximate Loan Amount */}
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Loan / Cover Amount
              </label>
              <select
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-brand-600 focus:border-brand-600 outline-none text-slate-900 bg-white"
              >
                <option value="Below ₹10 Lakhs">Below ₹10 Lakhs</option>
                <option value="₹10 Lakhs - ₹25 Lakhs">₹10 Lakhs - ₹25 Lakhs</option>
                <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                <option value="Above ₹1 Crore">Above ₹1 Crore</option>
              </select>
            </div>

            {/* Employment Type */}
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Employment Type
              </label>
              <select
                value={formData.employmentType}
                onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-brand-600 focus:border-brand-600 outline-none text-slate-900 bg-white"
              >
                <option value="Salaried">Salaried (Private / Govt)</option>
                <option value="Self-Employed Professional">Self-Employed Professional</option>
                <option value="Business Owner">Business Owner / Trader</option>
                <option value="NRI">NRI Applicant</option>
              </select>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              Specific Requirements or Remarks (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Preferred bank, specific plot details, or health cover requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-brand-600 focus:border-brand-600 outline-none text-slate-900 bg-white"
            />
          </div>

          {/* Privacy Protection Note */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Direct & 100% confidential. Your details are sent directly to M Prathap via WhatsApp. No banking PINs requested.
            </span>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded text-base transition-colors border border-emerald-800 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-200" />
              <span>Send Details Directly to WhatsApp</span>
            </button>
          </div>

          {/* Direct Phone Call Alternative */}
          <div className="pt-3 border-t border-slate-200 text-center text-xs text-slate-600">
            Or call directly:{" "}
            <a href="tel:+919550801743" className="font-bold text-brand-700 hover:underline">
              +91 9550801743
            </a>
          </div>

        </form>
      )}
    </div>
  );
}
