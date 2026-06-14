import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import Loader from "@/components/Loader";
import InstallPopup from "@/components/InstallPopup";


// FONT
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// --------- SITEWIDE METADATA ----------
export const metadata: Metadata = {
   robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  title: {
    default: "Adverza Solutions",
    template: "%s | Adverza Solutions",
  },
  description:
    "We Build Innovative Digital Solutions, Branding, Web Development, Cloud & IT Services — Adverza Solutions.",
  keywords: [
    "Adverza Solutions",
    "web development company",
    "IT services Ghaziabad",
    "branding and marketing agency",
    "cloud solutions India",
    "software development",
  ],

  // ----------- FAVICON -----------
  icons: {
    icon: "favicon.svg",
    shortcut: "favicon.svg",
    apple: "favicon.svg",
  },

  // ----------- OG IMAGE -----------
  openGraph: {
    title: "Adverza Solutions",
    description: "Web • Mobile • Cloud • Digital — Innovation That Drives Growth.",
    url: "https://Adverza Solutions.com",
    siteName: "Adverza Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adverza SolutionsSolutions OG Image",
      },
    ],
    type: "website",
  },

  // ------------ TWITTER -----------
  twitter: {
    card: "summary_large_image",
    title: "Adverza SolutionsSolutions",
    description: "Digital Innovation • Branding • IT Services",
    images: ["/og-image.png"],
  },

  // ------------ CANONICAL -----------
  alternates: {
    canonical: "https://Adverza Solutions.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      {/* -------- HEAD SECTION -------- */}
      <head>
        {/* Manifest for PWA */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}

        {/* Favicon override */}
      <link rel="icon" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Browser UI theme color */}
        <meta name="theme-color" content="#0B6BD6" />
      </head>

      <body className={manrope.className}>
        <Loader />
        {/* NAVBAR */}
        <Navbar />
        <InstallPopup />

        <main className="min-h-screen">{children}</main>

        {/* FOOTER */}
        <Footer />

        {/* ---------- JSON-LD ---------- */}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Adverza SolutionsSolutions",
            url: "https://Adverza Solutions.com",
            logo: "https://Adverza Solutions.com/og-image.png",
            sameAs: [
              "https://www.instagram.com/Adverza Solutionsit",
              "https://x.com/Adverza Solutionsit",
              "https://www.linkedin.com/company/Adverza Solutionsit",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Modinagar",
              addressLocality: "Ghaziabad",
              addressRegion: "Uttar Pradesh",
              postalCode: "201204",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-7668775454",
              contactType: "customer service",
              availableLanguage: "English",
            },
          })}
        </Script>

        {/* ---------- SERVICE WORKER REGISTRATION ---------- */}
        <Script id="register-sw">
          {`
            if ("serviceWorker" in navigator) {
              window.addEventListener("load", function () {
                navigator.serviceWorker
                  .register("/sw.js")
                  .then(() => console.log("Service Worker Registered"))
                  .catch((err) =>
                    console.error("SW registration failed:", err)
                  );
              });
            }
          `}
        </Script>

      </body>
    </html>
  );
}

