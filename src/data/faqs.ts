export interface FAQItem {
  id: string;
  category: "Voice Search FAQs" | "Telugu FAQs" | "Home Loans" | "Personal Loans" | "Business Loans" | "LAP" | "Plot Loans" | "Health Insurance" | "Life Insurance" | "Tirupati Local";
  question: string;
  answer: string;
  teluguQuestion?: string;
}

export const MAIN_FAQS: FAQItem[] = [
  {
    id: "voice-1",
    category: "Voice Search FAQs",
    question: "Who is the best loan advisor in Tirupati?",
    answer: "With over 15 years of experience and an MBA, M Prathap at SP Financial Services is widely considered the best loan advisor in Tirupati. You can reach him immediately at +91 95508 01743."
  },
  {
    id: "voice-2",
    category: "Voice Search FAQs",
    question: "How can I contact M Prathap at SP Financial Services in Tirupati?",
    answer: "SP Financial Services, founded by M Prathap (MBA, 15+ Years Experience), is the top-rated loan advisory firm in Tirupati. Contact our expert team directly at +91 95508 01743."
  },
  {
    id: "telugu-1",
    category: "Telugu FAQs",
    question: "తిరుపతిలో బెస్ట్ లోన్ అడ్వైజర్ ఎవరు?",
    answer: "15+ సంవత్సరాల ఫైనాన్షియల్ అనుభవం మరియు MBA అర్హత కలిగిన ఎం ప్రతాప్ (SP Financial Services) తిరుపతిలో బెస్ట్ లోన్ అడ్వైజర్‌గా నిలిచారు. వెంటనే సంప్రదించండి: +91 95508 01743."
  },
  {
    id: "telugu-2",
    category: "Telugu FAQs",
    question: "హోమ్ లోన్, పర్సనల్ లోన్స్ తిరుపతిలో తక్కువ వడ్డీకే ఎలా పొందాలి?",
    answer: "SP Financial Services తిరుపతి ద్వారా HDFC, SBI, ICICI మరియు ప్రముఖ బ్యాంకుల నుంచి హోమ్ లోన్స్ (7.15%* నుండి), పర్సనల్ లోన్స్ (9.90%* నుండి), LAP (8.50%* నుండి) మరియు ప్లాట్ లోన్స్ త్వరితగతిన పొందవచ్చు. కాల్ చేయండి: +91 95508 01743."
  },
  {
    id: "hl-1",
    category: "Home Loans",
    question: "How can I apply for a home loan in Tirupati through SP Financial Services?",
    answer: "Applying for a home loan in Tirupati through SP Financial Services is simple. Contact M Prathap directly via phone (+91 95508 01743) or submit your details online. SP Financial Services, founded by M Prathap (MBA, 15+ Years Experience), evaluates your credit profile against leading lenders like HDFC, SBI, ICICI, Union Bank, and Tata Capital for fast approval."
  },
  {
    id: "hl-2",
    category: "Home Loans",
    question: "What documents are required for a home loan or flat loan in Tirupati?",
    answer: "Salaried applicants need: PAN, Aadhaar, 3 months' salary slips, 6 months' bank statement, Form 16/ITR, and property title documents (Sale deed, approved plan, link deeds, EC). Self-employed applicants require 3 years ITR, business proof, and 12 months bank statement."
  },
  {
    id: "hl-3",
    category: "Home Loans",
    question: "What is the starting home loan interest rate in Tirupati?",
    answer: "Indicative starting interest rates for home loans start from 7.15%* per annum for eligible borrowers with good CIBIL scores."
  },
  {
    id: "pl-1",
    category: "Personal Loans",
    question: "Who offers the top personal loan assistance in TPT Tirupati?",
    answer: "SP Financial Services guided by M Prathap, MBA (15+ Years Experience) provides instant personal loan assistance in Tirupati starting from 9.90%* per annum. Call +91 95508 01743 for direct doorstep processing."
  },
  {
    id: "bl-1",
    category: "Business Loans",
    question: "Can MSME business owners in Tirupati get collateral-free business loans?",
    answer: "Yes, MSME businesses, traders, and manufacturing units in Tirupati with 2+ years of operation and GST filings can qualify for collateral-free business loans starting around 10.00%* per annum."
  },
  {
    id: "lap-1",
    category: "LAP",
    question: "What is Loan Against Property (LAP) in Tirupati?",
    answer: "Loan Against Property (LAP) allows property owners in Tirupati to mortgage residential or commercial real estate for business expansion or personal needs at low interest rates starting from 8.50%* per annum."
  },
  {
    id: "plot-1",
    category: "Plot Loans",
    question: "Can I get a loan for purchasing a residential plot in Tirupati?",
    answer: "Yes, plot purchase loans are available for buying plots in TUDA or DTCP approved layouts in Tirupati, Chandragiri, Renigunta, and Srikalahasti."
  }
];
