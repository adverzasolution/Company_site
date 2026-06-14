"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  // const founders = [
  //   {
  //     name: "Mr. Amnesh Pal",
  //     role: "Founder & CEO",
  //     qualification: "MCA - India",
  //     exprience: "PolicyBazaar, Vega6 Technologies",
  //     img: "/Amnesh.jpg",
  //     desc: "Amnesh is the visionary behind the company, bringing 8+ years of experience in branding, digital strategy, and startup scaling.",
  //   },
  //   {
  //     name: "Mr. Aayush Kaushik",
  //     role: "Co-Founder & Creative Director",
  //     qualification: "MCA – India",
  //     exprience: "YNG Media Pvt Ltd",
  //     img: "/Ayush.jpeg",
  //     desc: "Aayush Kaushik leads the creative wing, blending design thinking with modern storytelling to create powerful brand experiences.",
  //   },
  // ];

  // const team = [
  //   // {
  //   //   name: "Mr. Sunil Kumar",
  //   //   role: "Hr Manager",
  //   //   qualification: "B.A – NID Ahmedabad",
  //   //   exprience: "PolicyBazaar, Vega6 Technologies",
  //   //   img: "/sunil.jpeg",
  //   // },
  //   // {
  //   //   name: "Mr. Ajay",
  //   //   role: "Hr Admin",
  //   //   qualification: "B.com – Delhi University",
  //   //   exprience: "PolicyBazaar, Vega6 Technologies, ",
  //   //   img: "Ajay.jpeg",
  //   // },
  //   // {
  //   //   name: "Mr. Abhishek ",
  //   //   role: "Manager",
  //   //   qualification: "BCA – India",
  //   //   exprience: "PolicyBazaar, Vega6 Technologies,",
  //   //   img: "Abhishek.jpeg",
  //   // },

  //     {
  //     name: "Mr. Abhinandan",
  //     role: "Full Stack Developer",
  //     qualification: "B.Tech – India",
  //     exprience: "Jewar International Pvt.Ltd",
  //     img: "Abhinandan.jpeg",
  //   },
  //   {
  //     name: "Mr. Vikash",
  //     role: "Python Developer",
  //     qualification: "BCA – India",
  //     exprience: "PolicyBazaar, Vega6 Technologies, ",
  //     img: "vikash.webp",
  //   },
  //   // {
  //   //   name: "Ms. Shweta",
  //   //   role: "Senior Developer",
  //   //   qualification: "BCA – India",
  //   //   exprience: "PolicyBazaar, Vega6 Technologies, ",
  //   //   img: "Shweta.jpeg",
  //   // },
  //   // {
  //   //   name: "Ms. Rashika Bardhwaaj",
  //   //   role: "Senior Developer",
  //   //   qualification: "MCA – India",
  //   //   exprience: "PolicyBazaar, Vega6 Technologies, ",
  //   //   img: "Rashika.jpeg",
  //   // },
  //   {
  //     name: "Mr. Shaksham",
  //     role: "Team Lead & Seo Expert",
  //     qualification: "B.com – India",
  //     exprience: "PolicyBazaar, Vega6 Technologies, ",
  //     img: "sh.jpg",
  //   },
  // ];

  return (
    <section className="pb-32  bg-white text-black">

      {/* HERO */}
      {/* <div className="pt-38 px-6 max-w-7xl mx-auto text-center"> */}
<div className="pt-32 px-6 max-w-7xl mx-auto text-center">        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight text-black"
        >
          Building Brands With{" "}
          <span className="text-blue-700">Purpose</span> &{" "}
          <span className="text-blue-700">Passion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg"
        >
          We help businesses transform through impactful branding, strategy,
          and technology — creating memorable digital experiences.
        </motion.p>
      </div>

      {/* FOUNDERS */}
      {/* <div className="mt-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-black">
          Meet Our <span className="text-blue-600">Founders</span>
        </h2> */}

        {/* <div className="grid md:grid-cols-2 gap-12">
          {founders.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-4xl border border-gray-300 p-8 shadow-xl text-center"
            >
              
              <div className="w-52 h-52 mx-auto rounded-full overflow-hidden mb-6 border-[4px] border-gray-300 shadow-lg">
                <img
                  src={f.img}
                  className="w-full h-full object-cover object-center"
                />
              </div>

           
              <h3 className="text-2xl font-bold tracking-wide text-black">
                {f.name}
              </h3>

            
              <p className="mt-1 text-blue-600 font-semibold text-sm tracking-wide">
                {f.role}
              </p>

          
              <p className="text-gray-600 text-sm mt-2 font-medium">
                {f.qualification}
              </p>
              <p className="text-gray-600 text-sm">{f.exprience}</p>

              <p className="mt-4 text-gray-500 leading-relaxed text-[15px]">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div> */}
      {/* </div> */}

      {/* TEAM */}
      {/* <div className="mt-28 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-black">
          Our <span className="text-blue-600">Creative Team</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-gray-300 p-6 rounded-3xl shadow-md hover:-translate-y-2 transition"
            >
              <img
                src={t.img}
                className="rounded-xl h-[340px] w-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-black">{t.name}</h3>
              <p className="text-blue-600 text-sm">{t.role}</p>
              <p className="text-gray-600 text-sm mt-1">{t.qualification}</p>
            </motion.div>
          ))}
        </div>
      </div> */}


    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* 🔹 TITLE */}
      <h1 className="text-3xl font-bold mb-6">
        About Adverza Solutions
      </h1>

      {/* 🔹 COMPANY */}
      <p className="text-gray-600 mb-6">
        Adverza Solutionsis a forward-thinking technology company dedicated to
        delivering innovative digital solutions. We specialize in web
        development, software solutions, and scalable IT services.
      </p>


      {/* 🔹 MISSION */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">Our Mission</h2>
      <p className="text-gray-600">
        Our mission is to provide high-quality, scalable, and cost-effective IT
        solutions while maintaining strong client relationships.
      </p>

      {/* 🔹 FUTURE */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Future of Technology
      </h2>
      <p className="text-gray-600">
        The future is driven by AI, automation, and digital transformation.
        We aim to integrate future-ready technologies to keep our clients ahead.
      </p>

      {/* 🔹 5 YEAR TARGET */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Our 5-Year Goals
      </h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Serve 5000+ global clients</li>
        <li>Expand into international markets</li>
        <li>Develop AI-powered solutions</li>
        <li>Build a strong tech team</li>
        <li>Become a trusted IT brand</li>
      </ul>

    </div>


      {/* VISION */}
      <div className=" px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-black"
        >
          Our <span className="text-blue-600">Vision</span> For The Future
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto"
        >
          To become a global creative Company that empowers businesses through
          design-driven digital transformations.
        </motion.p>
      </div>
    </section>
  );
}
