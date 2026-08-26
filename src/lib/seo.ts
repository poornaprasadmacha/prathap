export const SITE_URL = "https://mprathapfinancial.com"; // Placeholder production domain

export const BUSINESS_DETAILS = {
  name: "M Prathap Financial Services",
  consultant: "M Prathap",
  qualification: "MBA",
  experienceYears: 15,
  phone: "+91 9550801743",
  email: "prathapmba10@gmail.com",
  city: "Tirupati",
  state: "Andhra Pradesh",
  country: "India",
  postalCode: "517501",
  addressLocality: "Tirupati Urban",
  addressRegion: "Andhra Pradesh",
  addressCountry: "IN",
  primaryServices: [
    "Home Loans",
    "Personal Loans",
    "Business Loans",
    "Loan Against Property (LAP)",
    "Plot Loans",
    "Life Insurance",
    "Health Insurance",
    "General Insurance",
    "Family Insurance"
  ]
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_DETAILS.name,
    description: "Premier financial & loan consultancy in Tirupati providing Home Loans, Personal Loans, Business Loans, LAP, Plot Loans and Insurance solutions backed by 15+ years experience.",
    url: SITE_URL,
    telephone: BUSINESS_DETAILS.phone,
    email: BUSINESS_DETAILS.email,
    priceRange: "₹₹",
    image: `${SITE_URL}/og-image.jpg`,
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
      "Renigunta",
      "Chandragiri",
      "Puttur",
      "Srikalahasti",
      "Pakala",
      "Ramachandrapuram",
      "Vadamalapeta",
      "Yerpedu",
      "Nagalapuram",
      "Naidupeta",
      "Sullurpet"
    ],
    founder: {
      "@type": "Person",
      name: BUSINESS_DETAILS.consultant,
      jobTitle: "Senior Financial Consultant",
      honorificSuffix: "MBA",
      description: "Financial advisory specialist with 15+ years of sector experience in loans and insurance in Andhra Pradesh."
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
