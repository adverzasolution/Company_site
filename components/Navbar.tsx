// "use client";

// import { useState } from "react";
// import { services } from "@/data/servicesData";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   ChevronDown,
//   Mail,
//   Phone,
//   Search,
//   Menu,
//   X,
// } from "lucide-react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";

// export default function Navbar() {
//   const [openMenu, setOpenMenu] = useState<string | null>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const toggleMenu = (menu: string) => {
//     setOpenMenu(openMenu === menu ? null : menu);
//   };

//   return (
//     <header className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm">

//       {/* ================= TOP BAR ================= */}
//       <div className="bg-[#F5F7FC] border-b py-2 text-sm">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-4">

//           <div className="flex items-center gap-4 text-[#0A4CA3] text-xs md:text-sm font-medium">
//             <a href="mailto:AdverzaSolutions.com" className="flex items-center gap-1">
//               <Mail size={13} />
//               AdverzaSolutions.com
//             </a>

//             <a href="tel:+917668775454" className="flex items-center gap-1">
//               <Phone size={13} />
//               +91 7668775454
//             </a>
//           </div>

//           <div className="flex items-center gap-3">
//             <Link href="https://x.com/Adverza Solutionsit"><FaTwitter /></Link>
//             <Link href="#"><FaFacebookF /></Link>
//             <Link href="#"><FaLinkedinIn /></Link>
//             <Link href="https://www.instagram.com/Adverza Solutionsit/"><FaInstagram /></Link>
//           </div>

//         </div>
//       </div>

//       {/* ================= MAIN NAV ================= */}
//       <nav className="bg-gradient-to-r from-[#F2F5FA] to-white">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-[70px]">

//           {/* LOGO */}
//           <Link href="/">
//             <Image
//               src="/logo.png"
//               alt="logo"
//               width={140}
//               height={60}
//               className="object-contain"
//             />
//           </Link>

//           {/* DESKTOP MENU */}
//           <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">

//             <li><Link href="/">Home</Link></li>

//             {/* COMPANY */}
//             <li
//               className="relative"
//               onMouseEnter={() => setOpenMenu("company")}
//               onMouseLeave={() => setOpenMenu(null)}
//             >
//               <button className="flex items-center gap-1">
//                 Company <ChevronDown size={14} />
//               </button>

//               {openMenu === "company" && (
//                 <div className="absolute top-full  bg-white border shadow-xl rounded-xl w-56 py-3">

//                   <Link
//                     href="/about"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     About
//                   </Link>

//                   <Link
//                     href="/gallery"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Gallery
//                   </Link>

//                 </div>
//               )}
//             </li>




//             {/* PACKAGES */}
//             <li
//               className="relative"
//               onMouseEnter={() => setOpenMenu("packages")}
//               onMouseLeave={() => setOpenMenu(null)}
//             >
//               <button className="flex items-center gap-1">
//                 Packages
//                 <ChevronDown
//                   size={14}
//                   className={`transition-transform duration-200 ${openMenu === "packages" ? "rotate-180" : ""
//                     }`}
//                 />
//               </button>

//               {openMenu === "packages" && (
//                 <div className="absolute top-full mt-2 bg-white border shadow-xl rounded-xl w-56 py-3 z-50">

//                   <Link
//                     href="/pkg/basic"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Basic Plan
//                   </Link>

//                   <Link
//                     href="/pkg/standard"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Standard Plan
//                   </Link>

//                   <Link
//                     href="/pkg/premium"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Premium Plan
//                   </Link>

//                 </div>
//               )}
//             </li>

//             <li><Link href="/career">Career</Link></li>
//             <li><Link href="/blog">Blog</Link></li>
//             <li><Link href="/contact">Contact</Link></li>

//             <button className="hover:text-[#0B6BD6]">
//               <Search size={20} />
//             </button>

//           </ul>

//           {/* MOBILE BUTTON */}
//           <button
//             className="lg:hidden"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X /> : <Menu />}
//           </button>

//         </div>

//         {/* ================= MOBILE MENU ================= */}
//         {mobileOpen && (
//           <div className="lg:hidden bg-white border-t px-6 py-6 space-y-4">

//             <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>

//             {/* COMPANY */}
//             <div>
//               <button
//                 onClick={() => toggleMenu("company")}
//                 className="flex justify-between items-center w-full py-2"
//                 aria-expanded={openMenu === "company"}
//               >
//                 <span>Company</span>

//                 <ChevronDown
//                   size={16}
//                   className={`transition-transform duration-300 ${openMenu === "company" ? "rotate-180" : ""
//                     }`}
//                 />
//               </button>

//               <div
//                 className={`overflow-hidden transition-all duration-300 ${openMenu === "company" ? "max-h-40 mt-2" : "max-h-0"
//                   }`}
//               >
//                 <div className="ml-3 space-y-2 text-sm text-gray-600">
//                   <Link href="/about" className="block hover:text-[#0B6BD6]">
//                     About
//                   </Link>
//                   <Link href="/gallery" className="block hover:text-[#0B6BD6]">
//                     Gallery
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* SERVICES */}
//             <div>
//               <button onClick={() => toggleMenu("services")} className="flex justify-between w-full">
//                 Services <ChevronDown size={16} />
//               </button>

//               {openMenu === "services" && (
//                 <div className="ml-3 mt-3 space-y-3">
//                   {services.map(cat => (
//                     <div key={cat.category}>
//                       <p className="text-[#0B6BD6] font-semibold text-sm">
//                         {cat.category}
//                       </p>

//                       {cat.items.map(s => (
//                         <Link key={s.slug} href={`/services/${s.slug}`} className="block text-sm">
//                           {s.title}
//                         </Link>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* PACKAGES */}
//             <div>
//               <button onClick={() => toggleMenu("packages")} className="flex justify-between w-full">
//                 Packages <ChevronDown size={16} />
//               </button>

//               {openMenu === "packages" && (
//                 <div className="ml-3 mt-2 space-y-2 text-sm">
//                   <Link href="/pkg/basic">Basic</Link>
//                   <Link href="/pkg/standard">Standard</Link>
//                   <Link href="/pkg/premium">Premium</Link>
//                 </div>
//               )}
//             </div>

//             <Link href="/career">Career</Link>
//             <Link href="/blog">Blog</Link>
//             <Link href="/contact">Contact</Link>

//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }




"use client";

import { useState } from "react";
import { services } from "@/data/servicesData";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Mail,
  Phone,
  Search,
  Menu,
  X,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Navbar() {
const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

const toggleMenu = (menu: string) => {
  setOpenMenu(openMenu === menu ? null : menu);
};

  return (
    <header className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm">

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#F5F7FC] border-b py-2 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">

          <div className="flex items-center gap-4 text-[#0A4CA3] text-xs md:text-sm font-medium">
            <a href="mailto:AdverzaSolutions.com" className="flex items-center gap-1">
              <Mail size={13} />
             
              connect@adverzasolution.com
            </a>

            <a href="tel:+917668775454" className="flex items-center ">
              <Phone size={13} />
               7668775454
            </a>
          </div>

          <div className="flex items-center gap-1">
            <Link href="https://x.com/Adverza Solutionsit"><FaTwitter /></Link>
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
            <Link href="https://www.instagram.com/Adverza Solutionsit/"><FaInstagram /></Link>
          </div>

        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-[80px]">

          {/* LOGO */}
          <Link href="/">
            <Image
              // src="/logo.png"
              src="/logo.jpeg"
              alt="logo"
              width={85}
              height={160}
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">

            <li><Link href="/">Home</Link></li>

            {/* COMPANY */}
            <li
              className="relative"
              onMouseEnter={() => setOpenMenu("company")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1">
                Company <ChevronDown size={14} />
              </button>

              {openMenu === "company" && (
                <div className="absolute top-full bg-white border shadow-xl rounded-xl w-56 py-3">
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
                  <Link href="/gallery" className="block px-4 py-2 hover:bg-gray-100">Gallery</Link>
                </div>
              )}
            </li>

            {/* SERVICES ✅ */}
            <li
              className="relative"
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* CLICK → SERVICES PAGE */}
              <Link href="/services" className="flex items-center ">
                Services
                {/* <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    openMenu === "services" ? "rotate-180" : ""
                  }`}
                /> */}
              </Link>

              {/* DROPDOWN */}
              {/* {openMenu === "services" && (
                <div className="absolute top-full  bg-white border shadow-xl rounded-xl w-64 py-3 z-50 max-h-80 overflow-y-auto">

                  {services.flatMap(cat => cat.items).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#0B6BD6]"
                    >
                      {s.title}
                    </Link>
                  ))}

                </div>
              )} */}
            </li>

            {/* PACKAGES */}
            <li
              className="relative"
              onMouseEnter={() => setOpenMenu("packages")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1">
                Packages
                <ChevronDown size={14} />
              </button>

              {openMenu === "packages" && (
                <div className="absolute top-full  bg-white border shadow-xl rounded-xl w-56 py-3 z-50">
                  <Link href="/pkg/basic" className="block px-4 py-2 hover:bg-gray-100">Basic</Link>
                  <Link href="/pkg/standard" className="block px-4 py-2 hover:bg-gray-100">Standard</Link>
                  <Link href="/pkg/premium" className="block px-4 py-2 hover:bg-gray-100">Premium</Link>
                </div>
              )}
            </li>

            <li><Link href="/career">Career</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>

            {/* <Search size={20} /> */}

          </ul>

          {/* MOBILE BUTTON */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden">
            {mobileOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
{mobileOpen && (
  <div className="lg:hidden bg-white border-t px-6 py-6 space-y-5">

    {/* HOME */}
    <Link
      href="/"
      onClick={() => setMobileOpen(false)}
      className="block text-lg font-medium"
    >
      Home
    </Link>

    {/* COMPANY */}
    <div>
      <button
        onClick={() => toggleMenu("company")}
        className="flex justify-between items-center w-full text-lg font-medium"
      >
        Company
        <ChevronDown
          size={18}
          className={`transition-transform ${
            openMenu === "company" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openMenu === "company" && (
        <div className="ml-4 mt-3 space-y-3 text-gray-600">
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block">
            About
          </Link>
          <Link href="/gallery" onClick={() => setMobileOpen(false)} className="block">
            Gallery
          </Link>
        </div>
      )}
    </div>

    {/* SERVICES */}
    <div>
      <button
        onClick={() => toggleMenu("services")}
        className="flex justify-between items-center w-full text-lg font-medium"
      >
        Services
        <ChevronDown
          size={18}
          className={`transition-transform ${
            openMenu === "services" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openMenu === "services" && (
        <div className="ml-4 mt-3 space-y-3 text-gray-600 max-h-60 overflow-y-auto">
          {services.flatMap(cat => cat.items).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              onClick={() => setMobileOpen(false)}
              className="block"
            >
              {s.title}
            </Link>
          ))}
        </div>
      )}
    </div>

    {/* PACKAGES */}
    <div>
      <button
        onClick={() => toggleMenu("packages")}
        className="flex justify-between items-center w-full text-lg font-medium"
      >
        Packages
        <ChevronDown
          size={18}
          className={`transition-transform ${
            openMenu === "packages" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openMenu === "packages" && (
        <div className="ml-4 mt-3 space-y-3 text-gray-600">
          <Link href="/pkg/basic" onClick={() => setMobileOpen(false)} className="block">
            Basic
          </Link>
          <Link href="/pkg/standard" onClick={() => setMobileOpen(false)} className="block">
            Standard
          </Link>
          <Link href="/pkg/premium" onClick={() => setMobileOpen(false)} className="block">
            Premium
          </Link>
        </div>
      )}
    </div>

  


    {/* NORMAL LINKS */}
    <Link href="/career" onClick={() => setMobileOpen(false)} className="block text-lg font-medium">
      Career
    </Link>

    <Link href="/blog" onClick={() => setMobileOpen(false)} className="block text-lg font-medium">
      Blog
    </Link>

    <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-lg font-medium">
      Contact
    </Link>

  </div>
)}
      </nav>
    </header>
  );
}