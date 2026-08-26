import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { getLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://mprathapfinancial.com"),
  title: {
    default: "M Prathap Financial Services | Loans & Insurance in Tirupati",
    template: "%s | M Prathap Financial Services Tirupati"
  },
  description: "Premier financial & loan consultancy in Tirupati guided by M Prathap, MBA (15+ Years experience). Home Loans (7.15%*), LAP (8.5%*), Personal Loans (9.9%*), Business Finance, Life & Health Insurance.",
  keywords: [
    "Financial Consultant in Tirupati",
    "Financial Advisor in Tirupati",
    "Loan Consultant in Tirupati",
    "Home Loan Consultant in Tirupati",
    "Home Loans in Tirupati",
    "Housing Loans in Tirupati",
    "Personal Loans in Tirupati",
    "Personal Loan Consultant in Tirupati",
    "Personal Loan Near Me",
    "Business Loans in Tirupati",
    "Loan Against Property Tirupati",
    "LAP Loan Tirupati",
    "Plot Loan Tirupati",
    "Insurance Consultant in Tirupati",
    "Health Insurance Tirupati",
    "Life Insurance Tirupati"
  ],
  authors: [{ name: "M Prathap, MBA" }],
  creator: "M Prathap Financial Services",
  other: {
    "geo.region": "IN-AP",
    "geo.placename": "Tirupati",
    "geo.position": "13.6288;79.4192",
    "ICBM": "13.6288, 79.4192"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mprathapfinancial.com",
    siteName: "M Prathap Financial Services",
    title: "M Prathap Financial Services | Loans & Insurance in Tirupati",
    description: "Expert loan & insurance guidance from M Prathap, MBA with 15+ years experience in Tirupati. Home Loans, LAP, Personal Loans, Business Finance & Health Insurance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Prathap Financial Services | Loans & Insurance in Tirupati",
    description: "Home Loans starting 7.15%*, LAP 8.5%*, Personal Loans 9.9%*, Business Loans 10%* & Insurance Solutions in Tirupati.",
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
