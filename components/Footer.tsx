"use client";

import Link from "next/link";
import { services } from "@/data/servicesData";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const allServices = services.flatMap((c) => c.items);

  return (
    <footer className="bg-gradient-to-b from-[#0A4CA3] to-[#062f6c] text-white pt-16 pb-10">
      
      {/* ---- Main Footer Wrapper ---- */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* -------- LOGO + ABOUT -------- */}
        <div>
          <Link href="/" className="flex items-center ">
            <img
              // src="/logo.png"
                src="/logo.svg"
              alt="Adverza Solutions"
              className="h-30 mb-4 w-auto object-contain"
            />
          </Link>

          <p className="text-sm leading-relaxed text-gray-300 pr-4">
            Adverza Solutionsis a leading technology & digital marketing company
            helping businesses grow with modern IT solutions, websites, and
            performance marketing.
          </p>

          {/* Social Icons */}
         <div className="flex items-center gap-3 mt-5">

  <a
    href="https://x.com/Adverza Solutionsit"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-[#1DA1F2] flex items-center justify-center hover:scale-110 transition"
  >
    <FaTwitter size={16} />
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition"
  >
    <FaFacebookF size={16} />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-[#0A66C2] flex items-center justify-center hover:scale-110 transition"
  >
    <FaLinkedinIn size={16} />
  </a>

  <a
    href="https://instagram.com/Adverza Solutionsit"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:scale-110 transition"
  >
    <FaInstagram size={16} />
  </a>

</div>
        </div>

        {/* -------- QUICK LINKS -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/" className="hover:text-[#4DA3FF]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#4DA3FF]">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#4DA3FF]">Services</Link></li>
            <li><Link href="/blog" className="hover:text-[#4DA3FF]">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-[#4DA3FF]">Contact</Link></li>
          </ul>
        </div>

        {/* -------- SERVICES -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Our Services
          </h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            {allServices.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-[#4DA3FF]"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* -------- CONTACT INFO -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Contact Info
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} />
              <span>Sector 44, Gurgaon, Haryana, India</span>
            </li>

            <li className="flex items-center gap-2">
              <Phone size={16} />
              +91 7668775454
            </li>

            <li className="flex items-center gap-2">
              <Mail size={16} />
              AdverzaSolutions.com
            </li>
          </ul>
        </div>
      </div>

      {/* ---- Bottom Legal ---- */}
      <div className="border-t border-white/20 mt-10 pt-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-300">

          <p>
            © {new Date().getFullYear()} Adverza SolutionsSolutions — All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#4DA3FF]">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-[#4DA3FF]">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-[#4DA3FF]">
              Disclaimer
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}