"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      text: "Their work gave our business a completely fresh identity. Highly recommend!",
      name: "Amit Sharma",
      role: "Retail Business, Delhi",
    },
    {
      text: "They transformed our outdated website into a modern, high-converting asset.",
      name: "Priya Verma",
      role: "Healthcare Clinic, Mumbai",
    },
    {
      text: "Professional, creative and extremely reliable — brilliant experience!",
      name: "Rohan Mehta",
      role: "Tech Startup, Bangalore",
    },
    {
      text: "Their strategy improved our customer engagement drastically within weeks.",
      name: "Neha Kapoor",
      role: "Fashion Brand, Jaipur",
    },
  ];

  return (
    <section className="py-28 px-6 bg-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-[#0D1B3E]">
        Hear what our amazing customers{" "}
        <span className="text-[#0C6DFD]">say about us</span>
      </h2>

      {/* MARQUEE ROW */}
      <div className="mt-14 overflow-hidden">
        <div className="flex gap-8 animate-slideRight">

          {[...reviews, ...reviews].map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[350px] bg-[#F7FBFF] p-8 rounded-3xl shadow hover:-translate-y-2 transition"
            >
              <p className="text-gray-700 leading-relaxed">{r.text}</p>
              <hr className="my-4" />
              <p className="font-semibold text-[#0C6DFD]">{r.name}</p>
              <p className="text-gray-500 text-sm">{r.role}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
