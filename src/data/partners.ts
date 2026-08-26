export interface InstitutionPartner {
  name: string;
  category: "Bank" | "Housing Finance" | "NBFC" | "Life Insurance" | "Health Insurance" | "General Insurance";
  logoUrl: string;
  tagline: string;
}

export const LENDING_INSTITUTIONS: InstitutionPartner[] = [
  {
    name: "HDFC Bank",
    category: "Bank",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/3840px-HDFC_Bank_Logo.svg.png",
    tagline: "Home Loans & Personal Loans"
  },
  {
    name: "ICICI Bank",
    category: "Bank",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/3840px-ICICI_Bank_Logo.svg.png",
    tagline: "Housing Loans & Business Finance"
  },
  {
    name: "State Bank of India (SBI)",
    category: "Bank",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/SBI_logo_%28with_motto%29.svg/1280px-SBI_logo_%28with_motto%29.svg.png",
    tagline: "Home & Plot Purchase Loans"
  },
  {
    name: "Kotak Mahindra Bank",
    category: "Bank",
    logoUrl: "https://upload.wikimedia.org/wikipedia/hi/thumb/3/39/Kotak_Mahindra_Group_logo.svg/960px-Kotak_Mahindra_Group_logo.svg.png",
    tagline: "Personal & Commercial Finance"
  },
  {
    name: "Indian Bank",
    category: "Bank",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZQIO38UhV-xXPGhVsyQ_PYsWsaRZ-h1zpipAHaSd&s",
    tagline: "Public Sector Housing Loans"
  },
  {
    name: "Union Bank of India",
    category: "Bank",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/55/Union_Bank_of_India_Logo.jpg",
    tagline: "Retail Loans & Business Capital"
  },
  {
    name: "Tata Capital",
    category: "NBFC",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Tata_Capital_Logo-01.jpg",
    tagline: "Personal & LAP Financing"
  },
  {
    name: "Equitas Small Finance Bank",
    category: "Bank",
    logoUrl: "https://images.indianexpress.com/2020/10/equitas-small-finance-bank-1200.jpeg",
    tagline: "Micro & Small Business Loans"
  },
  {
    name: "Cholamandalam Housing Finance",
    category: "Housing Finance",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_2cKy7D1etUJcqp7VZSWNAqIwHueReHDwd89hVDQQw&s=10",
    tagline: "Affordable Housing & LAP Loans"
  },
  {
    name: "IIFL Housing Finance",
    category: "Housing Finance",
    logoUrl: "https://exchange4media.gumlet.io/news-photo/96581-IIFLMain.jpg",
    tagline: "Home & Property Construction"
  },
  {
    name: "Bajaj Finserv",
    category: "NBFC",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/8/8b/Bajaj_Finance_Logo_2025.svg",
    tagline: "Instant Personal & Business Loans"
  }
];

export const INSURANCE_INSTITUTIONS: InstitutionPartner[] = [
  {
    name: "Axis Max Life Insurance",
    category: "Life Insurance",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Axis_Max_Life_Insurance_logo.svg/960px-Axis_Max_Life_Insurance_logo.svg.png",
    tagline: "Term Insurance & Savings Plans"
  },
  {
    name: "ICICI Prudential Life",
    category: "Life Insurance",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/3840px-ICICI_Bank_Logo.svg.png",
    tagline: "Life Protection & Child Plans"
  },
  {
    name: "Care Health Insurance",
    category: "Health Insurance",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Care_health_insurance_logo.png",
    tagline: "Family Floater & Cashless Health Cover"
  },
  {
    name: "ICICI Lombard",
    category: "Health Insurance",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZ1hFnurGcv1sRTPEMcTaJwpP1qBcjrS_ZjyBciDEGg&s=10",
    tagline: "Health & Motor Policy Options"
  },
  {
    name: "HDFC ERGO General Insurance",
    category: "General Insurance",
    logoUrl: "https://images.indianexpress.com/2023/08/hdfclife.jpg",
    tagline: "General, Property & Motor Cover"
  }
];
