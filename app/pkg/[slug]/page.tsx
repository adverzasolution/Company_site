// // import { packages } from "@/data/packagesData";
// // import { notFound } from "next/navigation";

// // type Props = {
// //   params: Promise<{ slug: string }>;
// // };

// // export default async function PackageDetail({ params }: Props) {
// //   const { slug } = await params;

// //   const pkg = packages.find(
// //     (p) => p.slug.toLowerCase() === slug.toLowerCase()
// //   );

// //   if (!pkg) return notFound();

// //   return (
// //     <div className="pt-28 mt-10 pb-20 max-w-5xl mx-auto px-6">
// //       <h1 className="text-4xl font-bold text-[#0B6BD6]">
// //         {pkg.title}
// //       </h1>

// //       <p className="text-2xl font-semibold mt-3 text-green-600">
// //         {pkg.price}
// //       </p>

// //       <p className="mt-4 text-gray-600 text-lg">
// //         {pkg.description}
// //       </p>

// //       <ul className="mt-6 space-y-2">
// //         {pkg.features.map((f, i) => (
// //           <li key={i}>✔ {f}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }



// import { packages } from "@/data/packagesData";
// import { notFound } from "next/navigation";

// type Props = {
//   params: Promise<{ slug: string }>;
// };

// export default async function PackageDetail({ params }: Props) {
//   const { slug } = await params;

//   const pkg = packages.find(
//     (p) => p.slug.toLowerCase() === slug.toLowerCase()
//   );

//   if (!pkg) return notFound();

//   return (
//     <section className="pt-28 pb-20 bg-white text-black">

//       {/* HERO */}
//       <div className="max-w-5xl mx-auto px-6 text-center mb-14">
//         <h1 className="text-4xl md:text-5xl font-bold text-[#0B6BD6]">
//           {pkg.title}
//         </h1>

//         <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
//           {pkg.description}
//         </p>

//         <p className="text-3xl font-bold mt-6 text-green-600">
//           {pkg.price}
//         </p>
//       </div>

//       {/* CARD */}
//       <div className="max-w-4xl mx-auto px-6">
//         <div className="bg-white border rounded-2xl shadow-xl p-8">

//           {/* FEATURES */}
//           <h2 className="text-2xl font-semibold text-[#0B6BD6] mb-6">
//             What’s Included
//           </h2>

//           <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
//             {pkg.features.map((f, i) => (
//               <li
//                 key={i}
//                 className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg"
//               >
//                 <span className="text-green-600 font-bold">✔</span>
//                 {f}
//               </li>
//             ))}
//           </ul>

//           {/* CTA */}
//           <div className="mt-10 text-center">
//             <a
//               href="/contact"
//               target="_blank"
//               className="inline-block bg-[#0B6BD6] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#094fa3] transition"
//             >
//               Get Started 
//             </a>

//             <p className="text-gray-500 mt-3 text-sm">
//               Or contact us for a custom solution
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* EXTRA SECTION */}
//       <div className="max-w-5xl mx-auto px-6 mt-20 text-center">
//         <h3 className="text-2xl font-semibold text-[#0D1B3E]">
//           Why Choose Adverza Solutions?
//         </h3>

//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//           We deliver high-quality IT solutions with modern design, scalable
//           architecture, and performance-focused strategies to grow your business.
//         </p>

//         <div className="grid sm:grid-cols-3 gap-6 mt-10">
//           <div className="p-5 border rounded-xl">
//             <p className="text-xl font-bold text-blue-600">✔ Quality Work</p>
//           </div>
//           <div className="p-5 border rounded-xl">
//             <p className="text-xl font-bold text-blue-600">⚡ Fast Delivery</p>
//           </div>
//           <div className="p-5 border rounded-xl">
//             <p className="text-xl font-bold text-blue-600">💬 24/7 Support</p>
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// }


import { packages } from "@/data/packagesData";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PackageDetail({ params }: Props) {
  const { slug } = await params;

  const pkg = packages.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!pkg) return notFound();

  return (
    <section className="pt-35 pb-20 bg-gradient-to-b from-blue-50 to-white">

      {/* HERO */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">

        <h1 className="text-4xl md:text-5xl font-bold text-[#0B6BD6]">
          {pkg.title}
        </h1>

        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          {pkg.description}
        </p>

        <p className="text-4xl font-bold mt-6 text-green-600">
          {pkg.price}
        </p>

      </div>

      {/* MAIN CARD */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white border border-blue-100 rounded-3xl shadow-2xl p-8">

          {/* TITLE */}
          <h2 className="text-2xl font-semibold text-[#0B6BD6] mb-6 text-center">
            What’s Included
          </h2>

          {/* FEATURES */}
          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
            {pkg.features.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 p-4 rounded-xl transition"
              >
                <span className="text-green-600 text-lg">✔</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-10 text-center">

            <a
              href="/contact"
              target="_blank"
              className="inline-block bg-[#0B6BD6] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#094fa3] transition"
            >
              Get Started 
            </a>

            <p className="text-gray-500 mt-3 text-sm">
              Or contact us for a custom solution
            </p>

          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="max-w-5xl mx-auto px-6 mt-20 text-center">

        <h3 className="text-2xl font-semibold text-[#0D1B3E]">
          Why Choose Us?
        </h3>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We deliver modern, scalable, and performance-driven solutions that help your business grow faster.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mt-10">

          <div className="p-6 bg-white border border-blue-100 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-2xl text-blue-600 mb-2">✔</p>
            <p className="font-semibold">Quality Work</p>
          </div>

          <div className="p-6 bg-white border border-green-100 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-2xl text-green-600 mb-2">⚡</p>
            <p className="font-semibold">Fast Delivery</p>
          </div>

          <div className="p-6 bg-white border border-purple-100 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-2xl text-purple-600 mb-2">💬</p>
            <p className="font-semibold">24/7 Support</p>
          </div>

        </div>

      </div>

    </section>
  );
}