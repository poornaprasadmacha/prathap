import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy | M Prathap Financial Services Tirupati",
  description: "Privacy policy for M Prathap Financial Services. We respect user privacy and never store sensitive banking credentials or share contact information."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-0">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-800 text-sm leading-relaxed">
          <h1 className="text-3xl font-extrabold text-brand-900 border-b border-slate-200 pb-3">
            Privacy Policy
          </h1>

          <p>
            M Prathap Financial Services (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy outlines how your personal information is collected, used, and safeguarded when you visit our website or submit an enquiry for loans or insurance guidance.
          </p>

          <h2 className="text-lg font-bold text-brand-900 pt-2">1. Information We Collect</h2>
          <p>
            We collect basic contact details provided voluntarily by users through our lead enquiry forms, WhatsApp links, or phone calls. This includes your name, mobile number, email address, city/area in Tirupati, loan type requirement, employment status, and approximate income range.
          </p>
          <p className="bg-slate-50 border-l-4 border-emerald-600 p-3 font-semibold text-xs text-slate-700">
            Important Safety Note: We NEVER ask users to submit online banking passwords, OTPs (One Time Passwords), credit/debit card numbers, CVVs, or confidential PIN numbers.
          </p>

          <h2 className="text-lg font-bold text-brand-900 pt-2">2. How We Use Your Information</h2>
          <p>
            The information you provide is used exclusively to evaluate your loan eligibility, provide comparative bank options, schedule advisory calls with M Prathap (MBA), and assist in loan documentation preparation.
          </p>

          <h2 className="text-lg font-bold text-brand-900 pt-2">3. Data Confidentiality & Protection</h2>
          <p>
            We do not sell, rent, or trade your personal information to third-party marketing companies. Personal data is disclosed only to financial institutions or insurance providers with your explicit consent for processing your requested loan or insurance application.
          </p>

          <h2 className="text-lg font-bold text-brand-900 pt-2">4. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact M Prathap Financial Services at +91 9550801743 or via email at prathapmba10@gmail.com.
          </p>
        </div>
      </section>
    </div>
  );
}
