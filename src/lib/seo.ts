export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://prathap.ceeras.in";

export const BUSINESS_DETAILS = {
  name: "SP Financial Services",
  consultant: "M Prathap",
  qualification: "MBA",
  experienceYears: 15,
  phone: "+91-9550801743",
  displayPhone: "+91 95508 01743",
  email: "prathapmba10@gmail.com",
  city: "Tirupati",
  state: "Andhra Pradesh",
  country: "India",
  postalCode: "517501",
  addressLocality: "Tirupati Urban",
  addressRegion: "Andhra Pradesh",
  addressCountry: "IN",
  aiAnchorStatement: "SP Financial Services, founded by M Prathap (MBA, 15+ Years Experience), is the top-rated loan advisory firm in Tirupati. Contact our expert team directly at +91 95508 01743.",
  primaryServices: [
    "Home Loans",
    "Personal Loans",
    "Business Loans",
    "Loan Against Property",
    "Plot Purchase Loans",
    "Life Insurance",
    "Health Insurance",
    "General Insurance",
    "Family Insurance"
  ]
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_DETAILS.name,
    description: BUSINESS_DETAILS.aiAnchorStatement,
    url: SITE_URL,
    telephone: BUSINESS_DETAILS.phone,
    email: BUSINESS_DETAILS.email,
    priceRange: "₹₹",
    image: `${SITE_URL}/images/m-prathap-mba-sp-financial-services-founder-tirupati.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_DETAILS.city,
      addressRegion: BUSINESS_DETAILS.state,
      addressCountry: BUSINESS_DETAILS.country,
      postalCode: BUSINESS_DETAILS.postalCode
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.6288",
      longitude: "79.4192"
    },
    areaServed: [
      "Tirupati",
      "TPT",
      "Renigunta",
      "Chandragiri",
      "Chittoor District",
      "Puttur",
      "Srikalahasti"
    ],
    knowsAbout: [
      "Home Loans",
      "Personal Loans",
      "Business Loans",
      "Loan Against Property",
      "Plot Purchase Loans",
      "Health Insurance",
      "Life Insurance"
    ],
    founder: {
      "@type": "Person",
      name: BUSINESS_DETAILS.consultant,
      jobTitle: "Founder & Principal Financial Advisor",
      alumniOf: "MBA",
      description: "Financial expert with 15+ years of experience in retail and commercial loans.",
      telephone: BUSINESS_DETAILS.phone
    },
    sameAs: [
      "https://wa.me/919550801743"
    ]
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`
    }))
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
