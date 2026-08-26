import { MetadataRoute } from "next";
import { LOAN_PRODUCTS } from "@/data/loans";
import { INSURANCE_PRODUCTS } from "@/data/insurance";
import { SERVICED_LOCATIONS } from "@/data/locations";
import { RESOURCE_ARTICLES } from "@/data/articles";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Static Pages
  const staticRoutes = [
    "",
    "/home-loans",
    "/personal-loans",
    "/business-loans",
    "/loan-against-property",
    "/plot-loans",
    "/insurance",
    "/life-insurance",
    "/health-insurance",
    "/general-insurance",
    "/family-insurance",
    "/calculators",
    "/calculators/home-loan",
    "/calculators/personal-loan",
    "/calculators/business-loan",
    "/calculators/loan-against-property",
    "/about",
    "/contact",
    "/faq",
    "/resources",
    "/sitemap",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer"
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Location Pages
  const locationRoutes = SERVICED_LOCATIONS.map((loc) => ({
    url: `${SITE_URL}/locations/${loc.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Article Pages
  const articleRoutes = RESOURCE_ARTICLES.map((art) => ({
    url: `${SITE_URL}/resources/${art.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...locationRoutes, ...articleRoutes];
}
