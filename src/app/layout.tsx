import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { getLocalBusinessSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SP Financial Services | Home Loans, Personal Loans & Insurance in Tirupati & Surrounding Areas",
    template: "%s | SP Financial Services Tirupati"
  },
  description: "SP Financial Services guided by M Prathap, MBA (15+ Years Experience). Specializing in Home Loans (7.15%*), LAP (8.5%*), Personal Loans (9.9%*), Business Loans, Life & Health Insurance in Tirupati, Chandragiri, Renigunta, Srikalahasti & surrounding regions.",
  keywords: [
    "SP Financial Services",
    "SP Financial Services Tirupati",
    "Financial Consultant in Tirupati",
    "Financial Advisor in Tirupati",
    "Loan Consultant in Tirupati",
    "Home Loan Consultant in Tirupati",
    "Home Loans in Tirupati",
    "Housing Loans in Tirupati",
    "Personal Loans in Tirupati",
    "Personal Loan Consultant in Tirupati",
    "Business Loans in Tirupati",
    "Loan Against Property Tirupati",
    "LAP Loan Tirupati",
    "Plot Loan Tirupati",
    "Insurance Consultant in Tirupati",
    "Health Insurance Tirupati",
    "Life Insurance Tirupati"
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
    title: "SP Financial Services | Top Loans & Insurance Advisor in Tirupati",
    description: "Expert loan & insurance guidance from M Prathap, MBA with 15+ years experience at SP Financial Services, serving Tirupati and related areas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SP Financial Services | Loans & Insurance in Tirupati",
    description: "Home Loans starting 7.15%*, LAP 8.5%*, Personal Loans 9.9%*, Business Loans 10%* & Insurance Solutions in Tirupati and related areas.",
  },
  robots: {
    index: true,
    follow: true
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
      <body className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-brand-100 selection:text-brand-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
