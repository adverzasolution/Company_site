import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Adverza Solutions",

  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-black min-h-screen">

      <div className="pt-28 pb-20 max-w-5xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Terms & Conditions
        </h1>

        {children}
      </div>

    </div>
  );
}