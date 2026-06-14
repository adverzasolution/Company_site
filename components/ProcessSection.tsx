"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    "Onboarding & Discovery",
    "Strategy Development",
    "Content Creation & Curation",
    "Design & Branding",
    "Tracking & Continuous Improvement",
  ];

  const images = [
    "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=1000&q=80",
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT STEPS */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#0D1B3E] leading-tight">
            Our process connects your brand with the{" "}
            <span className="text-[#04C678]">innovation it deserves</span>
          </h2>

          <div className="mt-10 space-y-7">
            {steps.map((step, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`cursor-pointer text-xl font-semibold transition ${
                  active === i ? "text-[#0D1B3E]" : "text-gray-400"
                }`}
              >
                {step}
                {active === i && (
                  <motion.div
                    layoutId="underline"
                    className="h-[2px] bg-[#A16BFF] mt-2 rounded-full w-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src={images[active]}
            alt="process"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
