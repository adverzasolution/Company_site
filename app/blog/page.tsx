"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPage() {
  const blogs = [
    {
      title: "How Branding Helps Your Business Grow",
      date: "22 January 2025",
      category: "Branding",
      img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
      slug: "branding-business-growth",
      desc: "Branding builds trust, improves recognition, and helps your company stand apart from competitors.",
    },
    {
      title: "Top 5 UI/UX Trends You Must Know",
      date: "15 January 2025",
      category: "Design",
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
      slug: "top-uiux-trends",
      desc: "Modern UI/UX is all about simplicity, usability, and personalized experiences.",
    },
    {
      title: "Why Digital Marketing Is Important in 2025",
      date: "10 January 2025",
      category: "Marketing",
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
      slug: "digital-marketing-2025",
      desc: "Digital marketing is essential for every business to grow reach and visibility.",
    },
    {
      title: "How AI Is Changing Web Development",
      date: "5 January 2025",
      category: "Technology",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
      slug: "ai-changing-web-dev",
      desc: "AI tools are transforming how websites are built, tested, optimized and deployed.",
    },
  ];

  return (
    <section className="pt-32 pb-28 bg-white mt-15 text-black px-6  mx-auto">

      {/* HERO */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-blue-700"
        >
          Our Latest Blogs
        </motion.h1>

        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Stay updated with the latest trends in tech, design, branding and marketing.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl overflow-hidden border border-blue-200 shadow-sm hover:shadow-xl transition bg-white"
          >
            <img
              src={blog.img}
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
            />

            <div className="p-6">
              <p className="text-blue-600 font-semibold text-sm">
                {blog.category} • {blog.date}
              </p>

              <h2 className="text-2xl font-bold mt-2 text-blue-700">
                {blog.title}
              </h2>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {blog.desc}
              </p>

              <Link href={`/blog/${blog.slug}`}>
                <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition">
                  Read More →
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
