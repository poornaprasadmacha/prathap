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
    description: "Primary financial advisory center serving residents, government employees, hospital staff, and business owners across Tirupati municipal corporation and surrounding mandals.",
    keyServices: ["Home Loans", "Personal Loans", "Business Loans", "Loan Against Property", "Health & Life Insurance"],
    popularLoanTypes: ["Apartment Loans", "Plot + Construction Loans", "Unsecured Personal Loans", "MSME Capital"],
    geoCoordinates: { lat: "13.6288", lng: "79.4192" }
  },
  {
    slug: "tirupati-urban",
    name: "Tirupati Urban",
    type: "Primary Hub",
    distanceFromTirupati: "0 km (City Center)",
    description: "Dedicated financial consultancy for urban households, commercial enterprise owners, IT personnel, and healthcare professionals in Tirupati city.",
    keyServices: ["Home Loans", "Personal Loans", "Business Loans", "Loan Against Property", "Health Insurance"],
    popularLoanTypes: ["Flat Purchase Loans", "Doctor Personal Loans", "Retail Business Capital", "Term Protection"],
    geoCoordinates: { lat: "13.6288", lng: "79.4192" }
  },
  {
    slug: "tirupati-rural",
    name: "Tirupati Rural",
    type: "Primary Hub",
    distanceFromTirupati: "5 km",
    description: "Doorstep loan and insurance advisory for residential plot owners, small business owners, and families in Tirupati rural mandal.",
    keyServices: ["Home Loans", "Plot Loans", "Loan Against Property", "Life Insurance"],
    popularLoanTypes: ["House Construction Loans", "TUDA Plot Loans", "LAP for Working Capital", "Health Insurance"],
    geoCoordinates: { lat: "13.6300", lng: "79.4100" }
  },
  {
    slug: "renigunta",
    name: "Renigunta",
    type: "Suburban Mandal",
    distanceFromTirupati: "10 km",
    description: "Financial and loan consultancy services for industrial workers, logistics personnel, and home buyers in the rapidly expanding Renigunta hub.",
    keyServices: ["Home Loans", "Plot Loans", "Health Insurance", "Personal Loans"],
    popularLoanTypes: ["Independent House Loans", "Plot Loans", "Vehicle & General Insurance"],
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
  },
  {
    slug: "pakala",
    name: "Pakala",
    type: "Surrounding Area",
    distanceFromTirupati: "30 km",
    description: "Professional loan guidance for families, mango traders, railway staff, and home builders in Pakala mandal.",
    keyServices: ["Home Loans", "Personal Loans", "Business Loans", "General Insurance"],
    popularLoanTypes: ["House Construction Loans", "Agriculture Business Finance", "Health Policies"],
    geoCoordinates: { lat: "13.4682", lng: "79.1171" }
  },
  {
    slug: "ramachandrapuram",
    name: "Ramachandrapuram",
    type: "Suburban Mandal",
    distanceFromTirupati: "15 km",
    description: "Personalized doorstep loan assistance and insurance planning for residents in Ramachandrapuram and near SV Vedic University belt.",
    keyServices: ["Home Loans", "Plot Loans", "Personal Loans", "Life Insurance"],
    popularLoanTypes: ["Plot + Villa Construction Loans", "Salaried Personal Loans", "Family Floater"],
    geoCoordinates: { lat: "13.5600", lng: "79.3500" }
  },
  {
    slug: "vadamalapeta",
    name: "Vadamalapeta",
    type: "Suburban Mandal",
    distanceFromTirupati: "20 km",
    description: "Financial advisory and bank documentation support for industrial employees and house plot buyers in Vadamalapeta mandal.",
    keyServices: ["Home Loans", "Personal Loans", "Loan Against Property", "Health Insurance"],
    popularLoanTypes: ["Housing Finance", "Working Capital LAP", "Medical Insurance"],
    geoCoordinates: { lat: "13.5600", lng: "79.5200" }
  },
  {
    slug: "yerpedu",
    name: "Yerpedu",
    type: "Surrounding Area",
    distanceFromTirupati: "25 km",
    description: "Expert financial consultancy for IIT/IISER staff, educational institution employees, and property owners in Yerpedu educational corridor.",
    keyServices: ["Home Loans", "Personal Loans", "Plot Loans", "Term Insurance"],
    popularLoanTypes: ["Faculty Housing Loans", "DTCP Plot Finance", "Health & Term Insurance"],
    geoCoordinates: { lat: "13.6800", lng: "79.6000" }
  },
  {
    slug: "narayanavanam",
    name: "Narayanavanam",
    type: "Surrounding Area",
    distanceFromTirupati: "30 km",
    description: "Doorstep loan advisory and insurance coverage options for weavers, traders, and residential plot buyers in Narayanavanam.",
    keyServices: ["Home Loans", "Business Loans", "Personal Loans", "Life Insurance"],
    popularLoanTypes: ["Weaving Business Loans", "House Construction", "Family Protection"],
    geoCoordinates: { lat: "13.4200", lng: "79.5800" }
  },
  {
    slug: "nagalapuram",
    name: "Nagalapuram",
    type: "Surrounding Area",
    distanceFromTirupati: "45 km",
    description: "Comprehensive home loan, LAP, and general insurance solutions for agricultural merchants and residents in Nagalapuram mandal.",
    keyServices: ["Home Loans", "Loan Against Property", "Business Loans", "Health Insurance"],
    popularLoanTypes: ["Rural Housing Loans", "LAP for Business", "Health Policies"],
    geoCoordinates: { lat: "13.4000", lng: "79.7900" }
  },
  {
    slug: "pitchatur",
    name: "Pitchatur",
    type: "Surrounding Area",
    distanceFromTirupati: "50 km",
    description: "Doorstep financial services and multi-bank loan comparison for residents, traders, and property owners in Pitchatur mandal.",
    keyServices: ["Home Loans", "Personal Loans", "Business Credit", "Life Insurance"],
    popularLoanTypes: ["House Construction Loans", "Micro Business Capital", "Term Insurance"],
    geoCoordinates: { lat: "13.3600", lng: "79.8000" }
  },
  {
    slug: "venkatagiri",
    name: "Venkatagiri",
    type: "Surrounding Area",
    distanceFromTirupati: "55 km",
    description: "Dedicated financial guidance for textile mill owners, weavers, business owners, and home buyers in Venkatagiri town.",
    keyServices: ["Business Loans", "Home Loans", "Loan Against Property", "Health Insurance"],
    popularLoanTypes: ["Handloom Business Loans", "Residential House Finance", "Commercial LAP"],
    geoCoordinates: { lat: "13.9600", lng: "79.5800" }
  },
  {
    slug: "sullurpet",
    name: "Sullurpet",
    type: "Surrounding Area",
    distanceFromTirupati: "80 km",
    description: "Specialized loan and insurance consultation for ISRO/SHAR employees, industrial staff, and housing plot buyers in Sullurpet & Sri City region.",
    keyServices: ["Home Loans", "Personal Loans", "Health Insurance", "Term Life Protection"],
    popularLoanTypes: ["Government Staff Loans", "Apartment Purchase", "Family Health Floater"],
    geoCoordinates: { lat: "13.7000", lng: "80.0200" }
  },
  {
    slug: "naidupeta",
    name: "Naidupeta",
    type: "Surrounding Area",
    distanceFromTirupati: "65 km",
    description: "Financial consultancy, industrial business loan structuring, and retail housing finance for Naidupeta SEZ and town residents.",
    keyServices: ["Business Loans", "Home Loans", "Personal Loans", "General Insurance"],
    popularLoanTypes: ["Industrial Enterprise Finance", "Housing Loans", "Salaried Personal Loans"],
    geoCoordinates: { lat: "13.9100", lng: "79.9000" }
  },
  {
    slug: "tada",
    name: "Tada",
    type: "Surrounding Area",
    distanceFromTirupati: "75 km",
    description: "Doorstep loan assistance and insurance planning for Sri City industrial zone employees, logistics managers, and residents in Tada.",
    keyServices: ["Personal Loans", "Home Loans", "Health Insurance", "Vehicle Insurance"],
    popularLoanTypes: ["Corporate Salary Loans", "Sri City Residential Finance", "Health Insurance"],
    geoCoordinates: { lat: "13.5700", lng: "80.0300" }
  },
  {
    slug: "satyavedu",
    name: "Satyavedu",
    type: "Surrounding Area",
    distanceFromTirupati: "60 km",
    description: "Professional loan advice, document verification, and bank submission for industrial workers and property owners in Satyavedu mandal.",
    keyServices: ["Home Loans", "Personal Loans", "Business Loans", "Life Insurance"],
    popularLoanTypes: ["Industrial Worker Loans", "House Plot Loans", "Family Floater"],
    geoCoordinates: { lat: "13.4300", lng: "79.9600" }
  }
];

export const ALL_SURROUNDING_MANDALS = [
  "Tirupati Urban", "Tirupati Rural", "Renigunta", "Chandragiri", "Puttur",
  "Srikalahasti", "Pakala", "Ramachandrapuram", "Vadamalapeta", "Yerpedu",
  "Narayanavanam", "Nagalapuram", "Pitchatur", "Venkatagiri", "Sullurpet",
  "Naidupeta", "Tada", "Satyavedu"
];
