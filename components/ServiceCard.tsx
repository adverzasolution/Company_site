import Link from "next/link";

export default function ServiceCard({ service }: any) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border"
    >
      <h3 className="text-lg font-semibold text-[#0B6BD6]">
        {service.name}
      </h3>

      <p className="text-gray-600 text-sm mt-2">
        {service.description}
      </p>

      <span className="inline-block mt-4 text-sm font-medium text-[#0B6BD6]">
        Learn More →
      </span>
    </Link>
  );
}