export interface FAQItem {
  id: string;
  category: "Home Loans" | "Personal Loans" | "Business Loans" | "LAP" | "Plot Loans" | "Health Insurance" | "Life Insurance" | "General Insurance" | "Calculators" | "Tirupati Local";
  question: string;
  answer: string;
}

export const MAIN_FAQS: FAQItem[] = [
  {
    id: "hl-1",
    category: "Home Loans",
    question: "How can I apply for a home loan in Tirupati through M Prathap Financial Services?",
    answer: "Applying for a home loan in Tirupati is straightforward. Contact M Prathap via call (+91 9550801743) or submit your details through our online enquiry form. We evaluate your profile, income documents, and property details to select the best banking offers from leading lenders like HDFC Bank, SBI, ICICI, Union Bank, and others."
  },
  {
    id: "hl-2",
    category: "Home Loans",
    question: "What documents are required for a home loan for salaried employees in Tirupati?",
    answer: "Salaried applicants typically need: PAN Card, Aadhaar Card, latest 3 months' salary slips, 6 months' bank account statements showing salary credits, Form 16 or ITR for 2 years, and property documents (sale agreement, approved plan, link deeds, EC)."
  },
  {
    id: "hl-3",
    category: "Home Loans",
    question: "What is the indicative starting home loan interest rate mentioned on this site?",
    answer: "The indicative starting interest rate for home loans is 7.15%* per annum for eligible borrowers. Final rates depend on individual CIBIL score, loan amount, employer categorization, tenure, and lender underwriting policies."
  },
  {
    id: "hl-4",
    category: "Home Loans",
    question: "Can self-employed individuals in Tirupati get home loans?",
    answer: "Yes. Self-employed business owners and professionals can secure home loans by providing PAN/Aadhaar, GST registration/business proof, 3 years' audited ITR with computation, 12 months' business bank statements, and property legal title deeds."
  },
  {
    id: "pl-1",
    category: "Personal Loans",
    question: "How is personal loan eligibility determined?",
    answer: "Personal loan eligibility is calculated based on your net monthly salary, monthly existing EMI obligations (FOIR - Fixed Obligation to Income Ratio), credit score (CIBIL 720+ preferred), employment stability, and age."
  },
  {
    id: "pl-2",
    category: "Personal Loans",
    question: "What is the starting indicative rate for personal loans?",
    answer: "The indicative starting rate for personal loans starts from 9.90%* per annum. Actual rates vary from bank to bank based on your credit profile and organization classification."
  },
  {
    id: "bl-1",
    category: "Business Loans",
    question: "Can small MSME businesses in Tirupati get unsecured business loans?",
    answer: "Yes, small businesses, traders, and manufacturing units in Tirupati with a minimum of 2 years operational vintage, GST filings, and healthy banking transaction history can qualify for collateral-free MSME business loans starting around 10.00%* per annum."
  },
  {
    id: "lap-1",
    category: "LAP",
    question: "What is a Loan Against Property (LAP) and how does it work?",
    answer: "A Loan Against Property (LAP) is a secured loan where you pledge your residential or commercial property in Tirupati as collateral to get funds for business expansion, education, or debt consolidation. Indicative starting interest rates begin at 8.50%* per annum."
  },
  {
    id: "plot-1",
    category: "Plot Loans",
    question: "Can I get a loan for purchasing a residential plot in Tirupati?",
    answer: "Yes. Plot purchase loans are available for buying plots in TUDA or DTCP approved layouts. You can also opt for a combined Plot + Construction loan to fund both land purchase and home building simultaneously."
  },
  {
    id: "hi-1",
    category: "Health Insurance",
    question: "Why is a Family Floater Health Insurance policy recommended?",
    answer: "A Family Floater Health policy covers your entire family (self, spouse, and children) under a single shared sum insured pool. It is significantly more cost-effective than taking individual health policies for each member while providing high cashless hospital coverage."
  },
  {
    id: "hi-2",
    category: "Health Insurance",
    question: "What is cashless hospitalisation in Tirupati?",
    answer: "Cashless hospitalisation allows you to receive medical treatment at network hospitals in Tirupati without paying hospital bill amounts directly (except non-admissible expenses). The insurance provider settles eligible expenses directly with the hospital."
  },
  {
    id: "li-1",
    category: "Life Insurance",
    question: "What is Term Insurance and why is it important?",
    answer: "Term Insurance is pure life protection that provides a large sum assured to your family at a very low annual premium in the event of unforeseen death. It ensures your family can clear existing home loans and maintain financial stability."
  },
  {
    id: "local-1",
    category: "Tirupati Local",
    question: "Why consult M Prathap, MBA for loans and insurance in Tirupati?",
    answer: "M Prathap brings over 15+ years of dedicated financial sector experience in Andhra Pradesh. Instead of visiting multiple banks individually, you receive unbiased comparative guidance, doorstep documentation support, and end-to-end processing across major banks and insurers in Tirupati."
  }
];
