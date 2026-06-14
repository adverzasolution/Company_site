import type { Metadata } from "next";

import Hero from "../components/Hero";
import AboutCompany from "../components/AboutCompany";
import ServicesSection from "../components/ServicesSection";
import Industries from "../components/Industries";
import Testimonials from "../components/Testimonials";
import PortfolioSlider from "../components/PortfolioSlider";
import ProcessSection from "../components/ProcessSection";
import CommunitySection from "../components/CommunitySection";

/* =========================
   ✅ PAGE SEO (APP ROUTER WAY)
========================= */

export const metadata: Metadata = {
  title:
    "Adverza Solutions– Infrastructure, IT, Construction & Business Solutions",
  description:
    "Adverza Solutionsdelivers high-quality Infrastructure, IT solutions, construction excellence, and business digital transformation services across India.",

  keywords: [
    "infrastructure services",
    "IT solutions India",
    "construction company India",
    "Adverza Solutions",
    "business technology services",
    "software development India",
  ],

  /* ✅ ABHI DEVELOPMENT MODE */
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },

  alternates: {
    canonical: "https://Adverza Solutions.com/",
  },

  openGraph: {
    title: "Adverza Solutions– Infrastructure & IT Solutions",
    description:
      "Reliable Infrastructure, IT, and Construction solutions trusted by businesses across India.",
    url: "https://Adverza Solutions.com/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adverza SolutionsSolutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Adverza Solutions– Infrastructure & IT Solutions",
    description:
      "Top-rated Infrastructure, IT, and construction services for modern businesses.",
    images: ["/og-image.jpg"],
  },
};

/* =========================
   PAGE COMPONENT
========================= */

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutCompany />
      <ServicesSection />
      <Industries />
      <PortfolioSlider />
      <ProcessSection />
      <CommunitySection />
      <Testimonials />
    </div>
  );
}