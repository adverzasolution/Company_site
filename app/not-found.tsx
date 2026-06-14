"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6">

      <div className="text-center max-w-lg">
        <h1 className="text-[90px] font-extrabold text-blue-600 leading-none">
          404
        </h1>

        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-3">
          The page you are looking for doesn’t exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>

    </section>
  );
}