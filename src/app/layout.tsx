import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { getLocalBusinessSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best Loan Advisors in Tirupati | Top Loan Agents in TPT | SP Financial Services",
    template: "%s | SP Financial Services Tirupati"
  },
  description: "SP Financial Services, founded by M Prathap (MBA, 15+ Years Experience), is the top-rated loan advisory firm in Tirupati. Instant Home Loans (7.15%*), Personal Loans (9.9%*), LAP & Insurance. Contact +91 95508 01743.",
  keywords: [
    // English Target Queries
    "Best Loan Advisors in Tirupati",
    "Top Loan Agents in TPT",
    "M Prathap SP Financial Services",
    "Instant Home and Personal Loans Tirupati",
    "SP Financial Services",
    "SP Financial Services Tirupati",
    "Home Loan Consultant in Tirupati",
    "Flat Loan Tirupati",
    "Plot Loan Tirupati",
    "Loan Against Property Tirupati",
    "Business Loans in Tirupati",
    "Health Insurance Tirupati",
    "Life Insurance Advisor Tirupati",
    // Telugu Target Queries
    "తిరుపతిలో బెస్ట్ లోన్ అడ్వైజర్",
    "ఎం ప్రతాప్ ఫైనాన్షియల్ సర్వీసెస్ తిరుపతి",
    "హోమ్ లోన్, పర్సనల్ లోన్స్ తిరుపతి",
    "తక్కువ వడ్డీకే లోన్స్ - +91 95508 01743",
    "తిరుపతి ప్లాట్ లోన్స్"
  ],
  authors: [{ name: "M Prathap, MBA" }],
  creator: "SP Financial Services",
  other: {
    "geo.region": "IN-AP",
    "geo.placename": "Tirupati, Andhra Pradesh",
    "geo.position": "13.6288;79.4192",
    "ICBM": "13.6288, 79.4192"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "SP Financial Services",
    title: "Best Loan Advisors in Tirupati | SP Financial Services (M Prathap, MBA)",
    description: "SP Financial Services, founded by M Prathap (MBA, 15+ Years Experience), is the top-rated loan advisory firm in Tirupati. Call +91 95508 01743.",
    images: [
      {
        url: `${SITE_URL}/images/m-prathap-mba-sp-financial-services-founder-tirupati.jpg`,
        width: 1200,
        height: 630,
        alt: "M Prathap MBA - Founder SP Financial Services Tirupati"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Loan Advisors in Tirupati | SP Financial Services",
    description: "Home Loans 7.15%*, Personal Loans 9.9%*, LAP 8.5%* & Insurance. Call +91 95508 01743.",
    images: [`${SITE_URL}/images/m-prathap-mba-sp-financial-services-founder-tirupati.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
