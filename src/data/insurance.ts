export interface InsuranceProduct {
  id: string;
  slug: string;
  category: "Life" | "Health" | "General" | "Family";
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyBenefits: string[];
  productTypes: {
    name: string;
    description: string;
  }[];
  verifiedBrandsMentioned: string[];
  disclaimer: string;
  waMessage: string;
}

export const INSURANCE_PRODUCTS: InsuranceProduct[] = [
  {
    id: "life-insurance",
    slug: "life-insurance",
    title: "Life Insurance",
    category: "Life",
    shortDescription: "Secure your family's long-term financial future with Term Life, Savings Plans, Pension & Retirement, and ULIP options.",
    fullDescription: "Ensure ultimate financial safety for your loved ones with customized life insurance guidance. M Prathap Financial Services helps families in Tirupati evaluate Term Insurance, Savings & Guaranteed Income Plans, and Pension products from leading Indian insurers.",
    keyBenefits: [
      "Financial security for your family in your absence",
      "High sum assured at affordable premiums through Term Insurance",
      "Guaranteed returns and goal planning for child education & marriage",
      "Tax benefits under Section 80C & Section 10(10D) of Income Tax Act",
      "Riders available for Critical Illness and Accidental Death Benefit"
    ],
    productTypes: [
      {
        name: "Term Insurance Plans",
        description: "Pure protection plans providing high sum assured at low annual premium rates."
      },
      {
        name: "Savings & Traditional Life Plans",
        description: "Endowment and money-back plans offering guaranteed payouts and life cover."
      },
      {
        name: "Retirement & Pension Products",
        description: "Annuity and pension plans ensuring steady post-retirement monthly income."
      },
      {
        name: "Unit Linked Insurance Plans (ULIP)",
        description: "Dual benefit of market-linked investment growth combined with life protection cover."
      }
    ],
    verifiedBrandsMentioned: ["Axis Max Life Insurance", "ICICI Prudential Life Insurance"],
    disclaimer: "Life insurance policy terms, premiums, sum assured, rider eligibility, and claims settlement procedures are governed strictly by respective IRDAI-registered insurance company policy contracts.",
    waMessage: "Hello M Prathap, I would like information regarding Life Insurance options in Tirupati."
  },
  {
    id: "health-insurance",
    slug: "health-insurance",
    title: "Health Insurance",
    category: "Health",
    shortDescription: "Comprehensive health cover including Individual, Family Floater, Senior Citizen, Super Top-Up, and Cashless hospitalisation.",
    fullDescription: "Protect your hard-earned savings from unexpected medical bills and hospital stays. M Prathap Financial Services assists individuals and families in Tirupati to select health policies with extensive hospital coverage, cashless networks, and low waiting periods.",
    keyBenefits: [
      "Cashless hospitalisation across network hospitals in Tirupati, Chennai & across India",
      "Coverage for pre-and post-hospitalisation expenses",
      "Daycare treatment coverage for procedures not requiring 24hr stay",
      "No-Claim Bonus (NCB) increasing sum insured upon claim-free years",
      "Tax savings under Section 80D up to ₹25,000 for self & family, plus additional ₹50,000 for senior parents"
    ],
    productTypes: [
      {
        name: "Family Floater Health Insurance",
        description: "Single health policy covering spouse, children, and self under a shared sum insured pool."
      },
      {
        name: "Individual Health Insurance",
        description: "Dedicated sum insured for single individuals tailored to personal health needs."
      },
      {
        name: "Senior Citizen Health Cover",
        description: "Health insurance designed for parents and seniors with pre-existing disease coverage options."
      },
      {
        name: "Super Top-Up Health Cover",
        description: "Cost-effective booster plan that enhances overall health cover over a base deductible amount."
      },
      {
        name: "Critical Illness & Personal Accident",
        description: "Lump-sum payout upon diagnosis of listed critical conditions or accidental disability."
      }
    ],
    verifiedBrandsMentioned: ["Care Health Insurance", "ICICI Lombard Health Insurance"],
    disclaimer: "Pre-existing disease waiting periods (typically 24 to 48 months), room rent limits, co-pay requirements, and exclusions apply as specified in official insurance policy documents.",
    waMessage: "Hello M Prathap, I want to explore Health Insurance and Family Floater policies in Tirupati."
  },
  {
    id: "general-insurance",
    slug: "general-insurance",
    title: "General Insurance",
    category: "General",
    shortDescription: "Motor insurance, property/home insurance, commercial business insurance, and personal travel protection.",
    fullDescription: "Shield your valuable physical assets and business operations against unexpected damages, accidents, fires, or liability claims with comprehensive general insurance guidance.",
    keyBenefits: [
      "Motor Insurance (Car & Two-Wheeler) with Third-Party & Comprehensive Cover",
      "Zero-Depreciation & Engine Protect add-on options for vehicles",
      "Home & Property Insurance against fire, theft, and natural disasters",
      "Commercial & Shopkeeper Insurance for business stock and premises protection"
    ],
    productTypes: [
      {
        name: "Motor Insurance (Car & Bike)",
        description: "Mandatory third-party liability and comprehensive own-damage vehicle protection."
      },
      {
        name: "Home & Structure Insurance",
        description: "Coverage for building structure and household contents against fire, storm, and burglary."
      },
      {
        name: "Commercial & Fire Insurance",
        description: "Business asset protection for shops, warehouses, machinery, and commercial property."
      }
    ],
    verifiedBrandsMentioned: ["HDFC ERGO General Insurance"],
    disclaimer: "General insurance coverage terms, claim deductibles, depreciation rules, and policy conditions are subject to official insurer guidelines.",
    waMessage: "Hello M Prathap, I would like to inquire about General Insurance options in Tirupati."
  },
  {
    id: "family-insurance",
    slug: "family-insurance",
    title: "360° Family Financial Protection",
    category: "Family",
    shortDescription: "Holistic 360-degree protection combining health insurance, term life, child future planning, and emergency funds.",
    fullDescription: "A comprehensive family financial security evaluation tailored for households in Tirupati. Ensure your family's health care expenses, children's future education goals, and loan liabilities are 100% protected under a unified financial strategy.",
    keyBenefits: [
      "Unified assessment of life cover requirements based on current loans & income",
      "Family floater health cover optimization to eliminate out-of-pocket medical bills",
      "Child education & future milestone goal planning through disciplined savings",
      "Protection against loan liabilities (Credit Life) so family is never burdened"
    ],
    productTypes: [
      {
        name: "Complete Family Shield",
        description: "Combines Term Life Insurance + Family Floater Health Policy + Super Top-Up."
      },
      {
        name: "Child Future Security",
        description: "Guaranteed child savings plan ensuring funds for higher education regardless of life uncertainties."
      }
    ],
    verifiedBrandsMentioned: ["Axis Max Life Insurance", "Care Health Insurance", "ICICI Prudential"],
    disclaimer: "Family financial guidance is informative. Specific policy approvals and issuing conditions rest solely with the respective registered insurance companies.",
    waMessage: "Hello M Prathap, I want a complete 360° Family Financial Protection consultation."
  }
];
