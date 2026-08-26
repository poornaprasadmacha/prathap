import React from "react";
import { AlertCircle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="bg-slate-100 border border-slate-300 rounded-md p-5 text-xs text-slate-600 space-y-2 leading-relaxed">
      <div className="flex items-center gap-2 font-bold text-slate-800 text-xs uppercase tracking-wider">
        <AlertCircle className="w-4 h-4 text-brand-700 shrink-0" />
        <span>Mandatory Financial & Legal Regulatory Disclaimer</span>
      </div>

      <p>
        <strong>Loan Advisory Disclaimer:</strong> M Prathap Financial Services provides financial guidance and assistance in connecting customers with lending institutions and insurance options. Loan approval, interest rates (e.g. Home Loans starting at 7.15%*, LAP 8.50%*, Personal 9.90%*, Business 10.00%*), processing fees, LTV ratios, and terms are determined exclusively by the respective lender or financial institution subject to borrower eligibility and credit checks (CIBIL). M Prathap Financial Services does not guarantee loan approvals or act as a direct lender.
      </p>

      <p>
        <strong>Insurance Disclaimer:</strong> Insurance coverage, policy premiums, benefits, exclusions, waiting periods, and claim settlements are determined solely by the respective IRDAI-registered insurance company policy documents. Customers should thoroughly read official policy wording before purchasing any insurance product.
      </p>
    </div>
  );
}
