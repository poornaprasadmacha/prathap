import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export interface EMIResultData {
  monthlyEMI: number;
  totalInterest: number;
  totalPayment: number;
  principal: number;
}

export function calculateEMI(
  principal: number,
  annualInterestRate: number,
  tenureYears: number
): EMIResultData {
  if (principal <= 0 || annualInterestRate <= 0 || tenureYears <= 0) {
    return { monthlyEMI: 0, totalInterest: 0, totalPayment: 0, principal: 0 };
  }

  const monthlyRate = annualInterestRate / 12 / 100;
  const numberOfMonths = tenureYears * 12;

  const emi =
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, numberOfMonths)) /
    (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

  const totalPayment = emi * numberOfMonths;
  const totalInterest = totalPayment - principal;

  return {
    monthlyEMI: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment),
    principal,
  };
}

export function buildWhatsAppLink(customMessage?: string): string {
  const phoneNumber = "919550801743";
  const defaultText = "Hello M Prathap, I found your website and would like assistance with financial services.";
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${phoneNumber}?text=${text}`;
}

export function buildPhoneCallLink(): string {
  return "tel:+919550801743";
}
