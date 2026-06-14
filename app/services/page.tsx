"use client";

import { services } from "@/data/servicesData";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="pt-36 pb-20 max-w-7xl mx-auto px-6">

      {/* HERO */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B6BD6]">
          Our Services
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide end-to-end digital solutions to help your business grow,
          scale, and succeed in the online world.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.flatMap((cat) => cat.items).map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group bg-white border rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden"
          >

            {/* IMAGE */}
            <div className="relative h-48">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h2 className="text-xl font-semibold group-hover:text-[#0B6BD6] transition">
                {service.title}
              </h2>

              <p className="text-gray-600 mt-2 text-sm">
                {service.desc}
              </p>

              {/* CTA */}
              <div className="mt-4 text-[#0B6BD6] font-medium text-sm">
                Learn More →
              </div>
            </div>

          </Link>
        ))}

      </div>

      {/* CTA SECTION */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Need a Custom Solution?
        </h2>

        <p className="text-gray-600 mb-6">
          Contact us today and get a tailored solution for your business.
        </p>

        <Link
          href="/contact"
          className="bg-[#0B6BD6] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Free Consultation 
        </Link>
      </div>

    </main>
  );
}