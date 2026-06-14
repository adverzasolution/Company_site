// "use client";

// import { useEffect, useState } from "react";

// export default function Loader() {
//   const [loading, setLoading] = useState(true);
//   const [fade, setFade] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setFade(true);

//       setTimeout(() => {
//         setLoading(false);
//       }, 400);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!loading) return null;

//   return (
//     <div
//       className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
//         fade ? "opacity-0" : "opacity-100"
//       }`}
//     >
//       {/* Loader Circle */}
//       <div className="relative flex items-center justify-center">
//         <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

//         {/* Inner Dot */}
//         <div className="absolute w-3 h-3 bg-blue-600 rounded-full"></div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">

        {/* LOGO */}
        <img
          src="/logo.svg"
          alt="logo"
          className="w-28 md:w-36 animate-pulse"
        />

        {/* LOADING TEXT */}
        <p className="text-gray-500 text-sm animate-pulse">
          Loading...
        </p>

      </div>
    </div>
  );
}