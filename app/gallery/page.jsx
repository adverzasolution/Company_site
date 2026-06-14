// "use client";

// import { motion } from "framer-motion";

// export default function GalleryPage() {

//   // 🔥 10 Images Per Section
//   const events = [
//     "/gallery/event1.jpg",
//     "/gallery/event2.jpg",
//     "/gallery/event3.jpg",
//     "/gallery/event4.jpg",
//     "/gallery/event5.jpg",
//     "/gallery/event6.jpg",
//     "/gallery/event7.jpg",
//     "/gallery/event8.jpg",
//     "/gallery/event9.jpg",
//     "/gallery/event10.jpg",
//   ];

//   const festivals = [
//     "/gallery/festival1.jpg",
//     "/gallery/festival2.jpg",
//     "/gallery/festival3.jpg",
//     "/gallery/festival4.jpg",
//     "/gallery/festival5.jpg",
//     "/gallery/festival6.jpg",
//     "/gallery/festival7.jpg",
//     "/gallery/festival8.jpg",
//     "/gallery/festival9.jpg",
//     "/gallery/festival10.jpg",
//   ];

//   const yearly = [
//     "/gallery/year1.jpg",
//     "/gallery/year2.jpg",
//     "/gallery/year3.jpg",
//     "/gallery/year4.jpg",
//     "/gallery/year5.jpg",
//     "/gallery/year6.jpg",
//     "/gallery/year7.jpg",
//     "/gallery/year8.jpg",
//     "/gallery/year9.jpg",
//     "/gallery/year10.jpg",
//   ];

//   const clientMeet = [
//     "/gallery/client1.jpg",
//     "/gallery/client2.jpg",
//     "/gallery/client3.jpg",
//     "/gallery/client4.jpg",
//     "/gallery/client5.jpg",
//     "/gallery/client6.jpg",
//     "/gallery/client7.jpg",
//     "/gallery/client8.jpg",
//     "/gallery/client9.jpg",
//     "/gallery/client10.jpg",
//   ];

//   // 🔥 Auto-moving slider row component
//   const MovingRow = ({ images }) => (
//     <div className="overflow-hidden py-4">
//       <motion.div
//         initial={{ x: 0 }}
//         animate={{ x: "-50%" }}
//         transition={{
//           duration: 25,
//           ease: "linear",
//           repeat: Infinity,
//         }}
//         className="flex gap-6 w-max"
//       >
//         {[...images, ...images].map((img, i) => (
//           <div
//             key={i}
//             className="w-[280px] h-[200px] rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white"
//           >
//             <img src={img} className="w-full h-full object-cover" />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );

//   return (
//     <section className="pt-32 pb-32 bg-white text-black px-6  mx-auto">

//       {/* PAGE TITLE */}
//       <div className="text-center mb-16">
//         <h1 className="text-5xl font-bold">Company Gallery</h1>
//         <p className="text-gray-600 text-lg mt-3">
//           Our events, celebrations, achievements & client meetings captured beautifully.
//         </p>
//       </div>

//       {/* GALLERY SECTIONS */}
//       {[
//         { title: "Events Gallery", images: events },
//         { title: "Festival Celebrations", images: festivals },
//         { title: "Yearly Memories", images: yearly },
//         { title: "Client Meet Moments", images: clientMeet },
//       ].map((section, index) => (
//         <div key={index} className="mb-20">

//           {/* Section Title */}
//           <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>

//           {/* 🔥 Auto Moving Slider Row */}
//           <MovingRow images={section.images} />
//         </div>
//       ))}

//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <section className="min-h-screen flex mt-13 items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6">

      <div className="text-center max-w-2xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full"
        >
          🚧 Coming Soon
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-[#071c5e]"
        >
          Our Gallery Is
          <span className="text-blue-600"> Coming Soon</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-600 text-lg"
        >
          We are currently preparing our gallery to showcase events,
          celebrations, achievements and client moments.
          Stay tuned for updates!
        </motion.p>

        {/* Animated Loader Dots */}
        <motion.div
          className="flex justify-center gap-2 mt-8"
          initial="hidden"
          animate="visible"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-3 h-3 bg-blue-600 rounded-full"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}