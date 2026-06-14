import { services } from "@/data/servicesData";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;

  const allServices = services.flatMap((cat) => cat.items);

  const service = allServices.find(
    (s) => s.slug.toLowerCase() === slug?.toLowerCase()
  );

  if (!service) return notFound();

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-6">

      {/* HERO */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0B6BD6]">
          {service.title}
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          {service.desc}
        </p>

        <a
          href="/contact"
          className="inline-block mt-6 bg-[#0B6BD6] text-white px-6 py-3 rounded-lg"
        >
          Get Free Consultation 🚀
        </a>
      </div>

      {/* IMAGE */}
      <div className="mb-10">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-[350px] object-cover rounded-xl"
        />
      </div>

      {/* DETAILS */}
      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#0B6BD6]">
            What We Offer
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>✔ Custom Development</li>
            <li>✔ Responsive Design</li>
            <li>✔ SEO Friendly</li>
            <li>✔ Fast Performance</li>
            <li>✔ Support & Maintenance</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#0B6BD6]">
            Why Choose Us
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>✔ Experienced Team</li>
            <li>✔ Affordable Pricing</li>
            <li>✔ On-time Delivery</li>
            <li>✔ Client Satisfaction</li>
          </ul>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <a
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Start Your Project
        </a>
      </div>

    </div>
  );
}