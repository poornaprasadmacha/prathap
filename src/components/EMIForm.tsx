"use client";

import React, { useState, useEffect } from "react";
import { calculateEMI, formatCurrency, EMIResultData } from "@/lib/utils";
import Link from "next/link";
import { Calculator, CheckCircle2, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";

interface EMIFormProps {
  initialAmount?: number;
  initialRate?: number;
  initialTenure?: number;
  loanTitle?: string;
}

export default function EMIForm({
  initialAmount = 3500000,
  initialRate = 7.15,
  initialTenure = 20,
  loanTitle = "Home Loan"
}: EMIFormProps) {
  const [principal, setPrincipal] = useState<number>(initialAmount);
  const [rate, setRate] = useState<number>(initialRate);
  const [tenure, setTenure] = useState<number>(initialTenure);
  const [result, setResult] = useState<EMIResultData | null>(null);

  useEffect(() => {
    const calculated = calculateEMI(principal, rate, tenure);
    setResult(calculated);
  }, [principal, rate, tenure]);

  const interestPercentage = result && result.totalPayment > 0 
    ? Math.round((result.totalInterest / result.totalPayment) * 100) 
    : 0;

  const principalPercentage = 100 - interestPercentage;

  return (
    <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-brand-600 font-semibold text-xs uppercase tracking-wider mb-1">
          <Calculator className="w-4 h-4" />
          <span>Interactive Calculator</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-brand-900">
          {loanTitle} EMI Calculator
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Adjust loan amount, interest rate, and tenure to estimate your monthly EMI repayment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Slider 1: Principal Amount */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label className="text-slate-800">Loan Amount (₹)</label>
              <div className="flex items-center gap-1 bg-slate-50 border border-slate-300 rounded px-3 py-1 text-brand-900 font-bold">
                <span>₹</span>
                <input
                  type="number"
                  value={principal}
                  min={100000}
                  max={50000000}
                  step={50000}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-32 bg-transparent text-right outline-none font-bold text-brand-900"
                />
              </div>
            </div>
            <input
              type="range"
              min={100000}
              max={20000000}
              step={50000}
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full accent-brand-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500 font-medium">
              <span>₹1 Lakh</span>
              <span>₹1 Crore</span>
              <span>₹2 Crore</span>
            </div>
          </div>

          {/* Slider 2: Interest Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label className="text-slate-800">Interest Rate (% p.a.)</label>
              <div className="flex items-center gap-1 bg-slate-50 border border-slate-300 rounded px-3 py-1 text-brand-900 font-bold">
                <input
                  type="number"
                  step="0.05"
                  value={rate}
                  min={5}
                  max={25}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-20 bg-transparent text-right outline-none font-bold text-brand-900"
                />
                <span>%</span>
              </div>
            </div>
            <input
              type="range"
              min={6}
              max={20}
              step={0.05}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-brand-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500 font-medium">
              <span>6%</span>
              <span>12%</span>
              <span>20%</span>
            </div>
          </div>

          {/* Slider 3: Loan Tenure */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label className="text-slate-800">Loan Tenure (Years)</label>
              <div className="flex items-center gap-1 bg-slate-50 border border-slate-300 rounded px-3 py-1 text-brand-900 font-bold">
                <input
                  type="number"
                  value={tenure}
                  min={1}
                  max={30}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-16 bg-transparent text-right outline-none font-bold text-brand-900"
                />
                <span>Yrs</span>
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-brand-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-500 font-medium">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>

        </div>

        {/* Output Column */}
        <div className="lg:col-span-5 bg-brand-900 text-white rounded-md border border-brand-950 p-6 space-y-6">
          
          <div className="text-center border-b border-blue-800/80 pb-4">
            <span className="text-xs uppercase tracking-wider text-blue-300 font-medium block">
              Estimated Monthly EMI
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              {result ? formatCurrency(result.monthlyEMI) : "₹0"}
              <span className="text-xs font-normal text-slate-300 block">/ month</span>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center border-b border-blue-800/60 pb-2">
              <span className="text-slate-300">Principal Loan Amount:</span>
              <span className="font-bold text-white">{formatCurrency(principal)}</span>
            </div>

            <div className="flex justify-between items-center border-b border-blue-800/60 pb-2">
              <span className="text-slate-300">Total Interest Payable:</span>
              <span className="font-bold text-blue-300">
                {result ? formatCurrency(result.totalInterest) : "₹0"}
              </span>
            </div>

            <div className="flex justify-between items-center pb-2">
              <span className="text-slate-300">Total Payment (Principal + Interest):</span>
              <span className="font-extrabold text-white text-base">
                {result ? formatCurrency(result.totalPayment) : "₹0"}
              </span>
            </div>
          </div>

          {/* Visual Percentage Progress Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-slate-300 font-medium">
              <span>Principal: {principalPercentage}%</span>
              <span>Interest: {interestPercentage}%</span>
            </div>
            <div className="w-full h-3 bg-blue-950 rounded-full overflow-hidden flex border border-blue-800">
              <div
                style={{ width: `${principalPercentage}%` }}
                className="bg-brand-500 h-full"
              />
              <div
                style={{ width: `${interestPercentage}%` }}
                className="bg-amber-500 h-full"
              />
            </div>
          </div>

          {/* Action Callouts */}
          <div className="pt-2 space-y-2">
            <a
              href={buildWhatsAppLink(`Hello M Prathap, I calculated an EMI of ${formatCurrency(result?.monthlyEMI || 0)} for a loan of ${formatCurrency(principal)} at ${rate}%. Please assist me.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-2.5 px-4 rounded text-xs transition-colors flex items-center justify-center gap-2 border border-emerald-600"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              WhatsApp M Prathap for Best Bank Rates
            </a>
          </div>

        </div>

      </div>

      {/* Mandatory Disclaimer */}
      <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs text-slate-500 leading-relaxed">
        <strong className="text-slate-700">Calculator Disclaimer:</strong> Calculations are illustrative estimates based on standard EMI formulas. Actual repayment schedules, interest rates, loan-to-value limits, processing fees, insurance charges, and terms may differ based on specific lender policies and individual underwriting approval.
      </div>
    </div>
  );
}
