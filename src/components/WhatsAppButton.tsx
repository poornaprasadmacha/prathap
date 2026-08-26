import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  className?: string;
}

export default function WhatsAppButton({
  message = "Hello M Prathap, I found your website and would like assistance with loans or insurance.",
  label = "WhatsApp Us",
  className = ""
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-4 py-2.5 rounded text-sm transition-colors border border-emerald-600 ${className}`}
    >
      <MessageCircle className="w-4 h-4 text-emerald-200" />
      <span>{label}</span>
    </a>
  );
}
