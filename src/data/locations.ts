export interface ServiceLocation {
  slug: string;
  name: string;
  type: "Primary Hub" | "Suburban Mandal" | "Surrounding Area";
  distanceFromTirupati: string;
  description: string;
  keyServices: string[];
  popularLoanTypes: string[];
  geoCoordinates: {
    lat: string;
    lng: string;
  };
}

export const SERVICED_LOCATIONS: ServiceLocation[] = [
  {
    slug: "tirupati",
    name: "Tirupati (Urban & Rural)",
    type: "Primary Hub",
    distanceFromTirupati: "0 km (Main Hub)",
    description: "Primary financial advisory center serving residents, government employees, hospital staff, and business owners across Tirupati municipal corporation and rural mandals.",
    keyServices: ["Home Loans", "Personal Loans", "Business Loans", "Loan Against Property", "Health & Life Insurance"],
    popularLoanTypes: ["Apartment Loans", "Plot + Construction Loans", "Unsecured Personal Loans", "MSME Capital"],
    geoCoordinates: { lat: "13.6288", lng: "79.4192" }
  },
  {
    slug: "renigunta",
    name: "Renigunta",
    type: "Suburban Mandal",
    distanceFromTirupati: "10 km",
    description: "Financial and loan consultancy services for industrial workers, logistics personnel, and home buyers in the rapidly expanding Renigunta hub.",
    keyServices: ["Home Loans", "Plot Loans", "Health Insurance", "Personal Loans"],
    popularLoanTypes: ["Independent House Loans", "Plot Loans", "Vehicle Insurance"],
    geoCoordinates: { lat: "13.6393", lng: "79.5161" }
  },
  {
    slug: "chandragiri",
    name: "Chandragiri",
    type: "Suburban Mandal",
    distanceFromTirupati: "12 km",
    description: "Dedicated loan and insurance guidance for households, educators, and agriculture-linked business owners in Chandragiri town and surrounding villages.",
    keyServices: ["Home Loans", "Loan Against Property", "Life Insurance", "Business Loans"],
    popularLoanTypes: ["House Construction Loans", "LAP Loans for Business", "Family Floater Policies"],
    geoCoordinates: { lat: "13.6062", lng: "79.3175" }
  },
  {
    slug: "srikalahasti",
    name: "Srikalahasti",
    type: "Surrounding Area",
    distanceFromTirupati: "38 km",
    description: "Doorstep financial advisory for industrial enterprise owners, temple tourism operators, and residential plot buyers in Srikalahasti.",
    keyServices: ["Business Loans", "Home Loans", "General Insurance", "Health Insurance"],
    popularLoanTypes: ["MSME Business Loans", "Plot Purchase Loans", "Commercial Property LAP"],
    geoCoordinates: { lat: "13.7498", lng: "79.6984" }
  },
  {
    slug: "puttur",
    name: "Puttur",
    type: "Surrounding Area",
    distanceFromTirupati: "35 km",
    description: "Comprehensive retail loan and insurance assistance for salaried staff, college faculty, and merchants in Puttur region.",
    keyServices: ["Personal Loans", "Home Loans", "Health Insurance", "Family Protection"],
    popularLoanTypes: ["Salary Loans", "Apartment Purchase", "Term Insurance"],
    geoCoordinates: { lat: "13.4428", lng: "79.5529" }
  }
];

export const ALL_SURROUNDING_MANDALS = [
  "Tirupati Urban", "Tirupati Rural", "Renigunta", "Chandragiri", "Puttur",
  "Srikalahasti", "Pakala", "Ramachandrapuram", "Vadamalapeta", "Yerpedu",
  "Narayanavanam", "Nagalapuram", "Pitchatur", "Venkatagiri", "Sullurpet",
  "Naidupeta", "Tada", "Satyavedu"
];
