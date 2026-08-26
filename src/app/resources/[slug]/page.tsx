import React from "react";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import Disclaimer from "@/components/Disclaimer";
import { RESOURCE_ARTICLES } from "@/data/articles";
import { Clock, Calendar, BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return RESOURCE_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: ArticlePageProps) {
  const article = RESOURCE_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | M Prathap Financial Services`,
    description: article.summary,
    keywords: [article.category, "Tirupati Financial Guide", "M Prathap Advisory"]
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = RESOURCE_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-0">
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: article.title }
        ]}
      />

      <article className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Article Header */}
          <div className="space-y-4 border-b border-slate-200 pb-6">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>

            <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-100 px-3 py-1 rounded border border-brand-200">
              {article.category}
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-900 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-600" />
                {article.publishedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-600" />
                {article.readTime}
              </span>
              <span>•</span>
              <span>Author: M Prathap, MBA</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-slate max-w-none space-y-4 text-sm sm:text-base leading-relaxed text-slate-800">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>

        </div>
      </article>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm title="Have Questions About This Article?" subtitle="Consult M Prathap directly for advice tailored to your financial profile." />
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
