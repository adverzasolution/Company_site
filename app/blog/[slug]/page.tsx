import { notFound } from "next/navigation";
import { blogData, Blog } from "@/data/blogData";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function SingleBlog({ params }: Props) {
  const { slug } = await params;

  const blog: Blog | undefined = blogData[slug];

  if (!blog) return notFound();

  return (
    <section className="pt-28 pb-20 bg-white text-black">

      {/* HERO */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          {blog.title}
        </h1>

        <p className="text-gray-500 mt-3">
          {blog.category} • {blog.date}
        </p>

        <p className="mt-4 text-gray-600 text-lg">
          {blog.desc}
        </p>
      </div>

      {/* IMAGE */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-[350px] object-cover rounded-2xl shadow-md"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 space-y-6">

        <p className="text-gray-700 text-lg leading-relaxed">
          {blog.content.intro}
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Key Points
          </h2>

          <ul className="space-y-2 text-gray-600">
            {blog.content.points.map((point, i) => (
              <li key={i}>✔ {point}</li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 p-5 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Conclusion
          </h3>

          <p className="text-gray-700">
            {blog.content.conclusion}
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-20 px-6">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>

    </section>
  );
}