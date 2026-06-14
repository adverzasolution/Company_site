"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PortfolioSlider() {
  const slides = [
    {
      title: "Digital Growth Campaign",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
      tag: "Brand Strategy",
    },
    {
      title: "Creative Product Branding",
      img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80",
      tag: "Brand Identity",
    },
    {
      title: "Event Experience Design",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
      tag: "Campaign Creative",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E]">
            Crafting <span className="text-[#0C6DFD]">Solutions</span> That{" "}
            <span className="text-[#04C678]">Inspire</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Explore our collection of modern branding and creative campaigns.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative mt-12 flex items-center justify-center">

          {/* LEFT */}
          {/* <button
            onClick={prev}
            className="absolute left-2 md:left-0 z-20 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft size={22} />
          </button> */}

          {/* SLIDE CONTAINER */}
          {/* <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="h-[200px] sm:h-[260px] md:h-[320px]">
                  <img
                    src={slides[current].img}
                    alt={slides[current].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center py-4">
                  <p className="text-lg font-semibold text-[#0D1B3E]">
                    {slides[current].title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {slides[current].tag}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

          </div> */}

          {/* RIGHT */}
          {/* <button
            onClick={next}
            className="absolute right-2 md:right-0 z-20 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight size={22} />
          </button> */}

<div className="relative mt-12 w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-2xl">

  <AnimatePresence mode="wait">
    <motion.div
      key={current}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0"
    >
      {/* IMAGE */}
      <img
        src={slides[current].img}
        alt={slides[current].title}
        className="w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">

        <p className="text-sm mb-2 text-green-400 font-medium">
          {slides[current].tag}
        </p>

        <h2 className="text-2xl md:text-4xl font-bold max-w-2xl">
          {slides[current].title}
        </h2>

      </div>
    </motion.div>
  </AnimatePresence>

  {/* LEFT BUTTON */}
  <button
    onClick={prev}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow"
  >
    <ChevronLeft />
  </button>

  {/* RIGHT BUTTON */}
  <button
    onClick={next}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow"
  >
    <ChevronRight />
  </button>

</div>


        </div>
      </div>
    </section>
  );
}