import React from "react";
import { Phone } from "lucide-react";
import { buildPhoneCallLink } from "@/lib/utils";

interface CallButtonProps {
  label?: string;
  className?: string;
}

export default function CallButton({
  label = "Call Now: +91 9550801743",
  className = ""
}: CallButtonProps) {
  return (
    <a
      href={buildPhoneCallLink()}
      className={`inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-4 py-2.5 rounded text-sm transition-colors border border-brand-700 ${className}`}
    >
      <Phone className="w-4 h-4 text-blue-200" />
      <span>{label}</span>
    </a>
  );
}
