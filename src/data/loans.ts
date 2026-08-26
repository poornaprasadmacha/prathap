export interface LoanProduct {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  indicativeRate: string;
  rateNote: string;
  targetAudience: string[];
  useCases: string[];
  eligibility: string[];
  documents: {
    salaried: string[];
    selfEmployed: string[];
  };
  features: string[];
  subTypes?: { title: string; description: string }[];
  waMessage: string;
}

export const LOAN_PRODUCTS: LoanProduct[] = [
  {
    id: "home-loans",
    slug: "home-loans",
    title: "Home Loans",
    shortDescription: "Complete assistance for purchasing apartments, independent houses, plot construction, or transferring existing home loans in Tirupati.",
    fullDescription: "Secure your dream home in Tirupati with personalized home loan guidance. M Prathap (MBA, 15+ Yrs experience) assists salaried employees, business owners, and self-employed professionals through lender evaluation, document preparation, and seamless loan disbursal.",
    indicativeRate: "7.15%",
    rateNote: "Indicative starting rate for eligible borrowers. Final interest rates, LTV, and processing fees depend on lender policies, credit score (CIBIL), loan amount, tenure, and property evaluation.",
    targetAudience: [
      "Salaried Employees (Govt, PSU, Private sector)",
      "Self-employed Professionals (Doctors, CAs, Engineers)",
      "Business Owners & Entrepreneurs in Tirupati",
      "NRIs looking for home purchase in Tirupati & Chittoor region"
    ],
    useCases: [
      "Apartment / Flat Purchase in gated communities & standalone projects",
      "Independent House Purchase in Tirupati urban & rural areas",
      "Plot Purchase + Construction combination financing",
      "Home Loan Balance Transfer to reduce existing EMI burden",
      "Home Loan Top-Up for home extension or renovation"
    ],
    eligibility: [
      "Age: 21 years to 65 years at loan maturity",
      "Minimum Salary: ₹25,000/month for salaried applicants",
      "Business Vintage: Minimum 2 to 3 years for self-employed applicants",
      "CIBIL Score: Preferred 750+ for optimal interest rate offers",
      "Property Title: Clear and marketable property documentation"
    ],
    documents: {
      salaried: [
        "Identity Proof (Aadhaar Card, PAN Card)",
        "Address Proof (Aadhaar, Voter ID, Electricity Bill)",
        "Latest 3 Months Salary Slips",
        "Latest 6 Months Bank Statement",
        "Form 16 / Income Tax Returns (ITR) for last 2 years",
        "Property Legal Documents & Sale Agreement Copy"
      ],
      selfEmployed: [
        "PAN Card & Aadhaar Card of Applicant & Business entity",
        "Business Proof (GST Registration, Trade License, MSME Certificate)",
        "Last 3 Years Income Tax Returns with Computation & Audited Financials",
        "Latest 12 Months Business Bank Account Statements",
        "Property Title Deeds & Approved Link Documents"
      ]
    },
    features: [
      "Tenure up to 30 years for manageable monthly EMIs",
      "Funding up to 80%-90% of property valuation (LTV ratio)",
      "Assistance across multiple leading banks and housing finance companies",
      "Expert local assistance in document verification & legal clearance",
      "Doorstep assistance in Tirupati and surrounding mandals"
    ],
    subTypes: [
      {
        title: "Apartment / Flat Purchase Loans",
        description: "Tailored loans for buying ready-to-move or under-construction builder flats in Tirupati."
      },
      {
        title: "Independent House Purchase Loans",
        description: "Financing solutions for buying standalone residential houses and villas."
      },
      {
        title: "Plot + Construction Loans",
        description: "Single combined loan structure to acquire land and construct your home simultaneously."
      },
      {
        title: "Home Loan Balance Transfer",
        description: "Transfer your existing high-interest home loan to lower interest rates and save on total interest cost."
      }
    ],
    waMessage: "Hello M Prathap, I am interested in Home Loan options in Tirupati. Please guide me."
  },
  {
    id: "personal-loans",
    slug: "personal-loans",
    title: "Personal Loans",
    shortDescription: "Collateral-free personal loans for salaried professionals and self-employed individuals for medical, education, travel, or family needs.",
    fullDescription: "Quick, collateral-free personal financial support with transparent guidance. M Prathap Financial Services helps you compare personal loan offers from top banks to find competitive interest rates and hassle-free processing.",
    indicativeRate: "9.90%",
    rateNote: "Indicative starting rate. Actual lender interest rates depend on applicant income, CIBIL score, employer profile, and existing obligations.",
    targetAudience: [
      "Salaried Professionals in Tirupati & nearby towns",
      "Government employees & school/college staff",
      "Self-employed individuals with stable cash flow"
    ],
    useCases: [
      "Emergency medical expenses & hospital bill coverage",
      "Higher education & skill development courses",
      "Marriage & family function celebrations",
      "Home renovation & interior design work",
      "Debt consolidation & clearing multiple short-term liabilities"
    ],
    eligibility: [
      "Age: 21 to 60 years",
      "Minimum Net Salary: ₹20,000/month",
      "CIBIL Score: 720+ preferred for fast processing",
      "Work Experience: Minimum 1 year total experience (6 months in current firm)"
    ],
    documents: {
      salaried: [
        "Aadhaar Card & PAN Card",
        "Latest 3 Months Salary Slips",
        "Latest 6 Months Bank Statement showing salary credit",
        "Employee ID Card copy"
      ],
      selfEmployed: [
        "Aadhaar Card & PAN Card",
        "Business Registration / GST Certificate",
        "Latest 2 Years Income Tax Returns (ITR)",
        "Latest 6 Months Bank Statement"
      ]
    },
    features: [
      "Zero security or collateral requirement",
      "Flexible repayment tenure from 12 to 84 months",
      "Minimal paper documentation and fast verification",
      "Transparent fee structure with no hidden charges"
    ],
    waMessage: "Hello M Prathap, I need guidance regarding a Personal Loan in Tirupati."
  },
  {
    id: "business-loans",
    slug: "business-loans",
    title: "Business Loans",
    shortDescription: "Customized business finance, MSME loans, and working capital solutions to scale your business operations in Tirupati.",
    fullDescription: "Fuel your business growth in Tirupati with customized business financing. Whether you need capital for inventory, equipment purchase, or operational expansion, M Prathap provides expert advice to structure your application effectively.",
    indicativeRate: "10.00%",
    rateNote: "Indicative starting rate. Approval, loan amount, and final interest pricing depend on business vintage, annual turnover, audited financial statements, credit history, and lender risk assessment.",
    targetAudience: [
      "Traders, Wholesalers & Retail Business Owners in Tirupati",
      "Manufacturing Units & Small Scale MSMEs",
      "Service Providers, Contractors & Logistics Operators"
    ],
    useCases: [
      "Working capital management & daily operational cash flow",
      "Inventory & bulk stock purchase ahead of seasonal demand",
      "Machinery & commercial equipment procurement",
      "Business premises renovation, expansion, or new branch launch"
    ],
    eligibility: [
      "Business Vintage: Minimum 2 to 3 years of operational business continuity",
      "Annual Turnover: Minimum ₹15-20 Lakhs depending on lender requirements",
      "Profitability: Business showing positive cash flow and net profit",
      "CIBIL Score: 700+ for business promoter/partners"
    ],
    documents: {
      salaried: [],
      selfEmployed: [
        "Promoter PAN Card, Aadhaar Card, Partnership Deed/MOA",
        "GST Registration & GST Returns (12 Months)",
        "Last 2-3 Years Audited Balance Sheet & P&L Statement",
        "Last 12 Months Primary Business Bank Statements",
        "Existing Loan Sanction Letters & Repayment Track (if any)"
      ]
    },
    features: [
      "Both Collateral-Free (MSME) & Secured Business Loan structures",
      "Tenure options ranging from 12 to 60 months",
      "Guidance on government MSME credit schemes where applicable",
      "Expert assistance in project report & financial presentation"
    ],
    waMessage: "Hello M Prathap, I am looking for Business Loan financing options in Tirupati."
  },
  {
    id: "loan-against-property",
    slug: "loan-against-property",
    title: "Loan Against Property (LAP)",
    shortDescription: "Leverage your residential or commercial property in Tirupati to raise high-value loans at lower interest rates.",
    fullDescription: "Unlock the hidden value of your real estate asset with Loan Against Property (LAP). Get high loan quantum at significantly lower interest rates compared to unsecured loans, backed by M Prathap's professional guidance.",
    indicativeRate: "8.50%",
    rateNote: "Indicative starting interest rate. Subject to legal property title search, valuation by authorized bank evaluators, repayment capacity, and lender approvals.",
    targetAudience: [
      "Property Owners (Residential Houses, Commercial Buildings, Land)",
      "Business Owners needing substantial expansion capital",
      "Self-employed & Salaried individuals needing major long-term funds"
    ],
    useCases: [
      "Major business expansion or establishing new commercial ventures",
      "Children's higher education overseas or specialized professional degrees",
      "Debt consolidation of high-interest unsecured liabilities",
      "Medical emergencies requiring high financial capital"
    ],
    eligibility: [
      "Ownership: Clear marketable ownership title of property in Tirupati/AP",
      "Property Type: Residential house, flat, commercial shop, or office building",
      "Income: Stable verifiable income stream (Salaried or Self-Employed)",
      "Age: 21 to 65 years"
    ],
    documents: {
      salaried: [
        "Aadhaar Card, PAN Card, Photo",
        "Salary Slips (3 months) & Bank Statements (6 months)",
        "Property Sale Deed, Link Documents, Approved Plan & EC"
      ],
      selfEmployed: [
        "Promoter & Entity KYC Documents",
        "3 Years ITR with Financial Statements",
        "12 Months Bank Statements",
        "Original Sale Deed, Approved Plan, Title Search Report & Encumbrance Certificate (EC)"
      ]
    },
    features: [
      "High loan amounts (up to 60%-75% of property market value)",
      "Extended tenure up to 15-20 years for affordable EMIs",
      "Property remains in your name while generating required liquidity",
      "Comprehensive title search & legal vetting guidance"
    ],
    waMessage: "Hello M Prathap, I want to inquire about Loan Against Property (LAP) options in Tirupati."
  },
  {
    id: "plot-loans",
    slug: "plot-loans",
    title: "Plot Purchase Loans",
    shortDescription: "Specialized plot loans for buying residential plots in approved layouts across Tirupati and surrounding mandals.",
    fullDescription: "Invest in land for your future home in Tirupati. We provide expert advice on plot loans and plot-cum-construction loans for TUDA / DTCP / LP approved layouts.",
    indicativeRate: "7.50%",
    rateNote: "Indicative starting rate. Applicable for approved layouts (TUDA/DTCP/RERA). Subject to title legal search, seller verification, and bank loan-to-value limits.",
    targetAudience: [
      "Buyers acquiring residential plots in approved Tirupati layouts",
      "Families planning to buy land now and build a house later",
      "Salaried & Self-employed applicants looking for land investment"
    ],
    useCases: [
      "Buying residential plots in TUDA / DTCP approved layouts",
      "Buying private plot + securing construction loan approval simultaneously"
    ],
    eligibility: [
      "Layout Approval: Layout must be approved by competent authorities (TUDA, DTCP, Gram Panchayat as allowed by lender)",
      "Applicant Income: Verifiable income source (Salaried or Business)",
      "CIBIL Score: 750+ preferred"
    ],
    documents: {
      salaried: [
        "KYC Documents (Aadhaar & PAN)",
        "Income Proofs (Salary Slips, Bank Statements, Form 16)",
        "Plot Sale Agreement, Layout Sanction Copy, Parent Title Deeds"
      ],
      selfEmployed: [
        "KYC Documents & Business Proof",
        "3 Years Financials & Bank Statements",
        "Plot Title Deed, Encumbrance Certificate (EC), Approved Layout Plan"
      ]
    },
    features: [
      "Loan-to-value (LTV) up to 70%-80% of plot valuation",
      "Repayment tenure up to 15-20 years",
      "Assistance in title legal check to ensure clear plot ownership"
    ],
    waMessage: "Hello M Prathap, I need guidance regarding Plot Purchase Loans in Tirupati."
  }
];
