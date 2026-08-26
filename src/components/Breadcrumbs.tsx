import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100 border-b border-slate-200 py-2.5 px-4 text-xs font-medium text-slate-600">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5">
        <Link href="/" className="hover:text-brand-900 flex items-center gap-1 text-slate-700">
          <Home className="w-3.5 h-3.5 text-brand-600" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-900 text-slate-700">
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-900 font-bold">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
