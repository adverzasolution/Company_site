"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const industries = [
  {
    title: "SUPPLY CHAIN",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "ENERGY",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "SPORTS",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "LOGISTICS & SUPPLY CHAIN",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "HEALTHCARE",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    service: "Website Design / Development",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Your enquiry has been sent! We will contact you soon.");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full bg-white mt-20">
      {/* Header CTA */}
      <div className="text-center py-16">
        <p className="text-teal-600 text-4xl font-semibold mb-2">Contact Us</p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#071c5e]">
          Our Work Speaks for Itself—Now Let’s
        </h2>

        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
          Make Your Brand a Success
        </h2>
      </div>

      {/* INDUSTRY MARQUEE — Two Rows */}
      <div className="py-10 overflow-hidden w-full relative">
        
        {/* Top Row → Left to Right */}
        <div
          className="flex gap-6 animate-slideRight flex-nowrap"
          style={{ animationDuration: "18s" }}
        >
          {[...industries, ...industries].map((item, i) => (
            <div
              key={i}
              className="relative w-80 h-48 md:w-96 md:h-56 rounded-xl overflow-hidden cursor-pointer group flex-shrink-0"
            >
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-xl font-bold px-3 drop-shadow-lg text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row → Right to Left */}
        <div
          className="flex gap-6 animate-slideLeft flex-nowrap mt-8"
          style={{ animationDuration: "18s" }}
        >
          {[...industries, ...industries].map((item, i) => (
            <div
              key={i}
              className="relative w-80 h-48 md:w-96 md:h-56 rounded-xl overflow-hidden cursor-pointer group flex-shrink-0"
            >
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-xl font-bold px-3 drop-shadow-lg text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        
        {/* Left Contact */}
        <div className="bg-[#071c5e] text-white p-10 space-y-12 flex flex-col justify-center">
          <div>
            <div className="flex items-center gap-3">
              <Mail />
              <h3 className="text-xl font-semibold">Email us</h3>
            </div>
            <p className="text-gray-300 mt-2">Our Team will be in touch</p>
            <p className="mt-2 text-xl font-medium">contact@Adverza Solutions.com</p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <Phone />
              <h3 className="text-xl font-semibold">Call us</h3>
            </div>
            <p className="text-gray-300 mt-2">Mon-Fri — 10am to 7pm</p>
            <p className="mt-2 text-xl font-medium">
              +91 7668775454 <br /> +91 9123456780
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <MapPin />
              <h3 className="text-xl font-semibold">Locate us</h3>
            </div>
            <p className="mt-2 font-medium">India</p>
            <p className="text-gray-300 text-sm mt-2 leading-6">
            Sector 44, Gurgaon, Haryana, India
             
            </p>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="p-10 flex items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <h2 className="text-4xl font-bold text-[#071c5e] mb-2">
              Let’s talk
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to help. Let’s make things work.
            </p>

            <input
              name="fullName"
              placeholder="Full Name"
              className="w-full p-3 mb-4 border-b text-black outline-none"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              placeholder="Email"
              type="email"
              className="w-full p-3 mb-4 text-black border-b outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Mobile Number"
              className="w-full p-3 mb-4 text-black border-b outline-none"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="service"
              className="w-full p-3 mb-4 text-black border rounded"
              value={formData.service}
              onChange={handleChange}
            >
              <option>Website Design / Development</option>
              <option>Mobile App Development</option>
              <option>Cloud & DevOps Services</option>
              <option>Digital Marketing</option>
            </select>

            <textarea
              name="message"
              rows={4}
              className="w-full p-3 mb-4 text-black border rounded"
              placeholder="Describe your project goals"
              value={formData.message}
              onChange={handleChange}
            />

            <label className="flex items-center text-black gap-2 text-sm mb-6">
              <input type="checkbox" />
              Receive updates from us (unsubscribe anytime).
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-800 text-white w-full py-3 rounded-md font-semibold"
            >
              {loading ? "Sending..." : "Send enquiry"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
