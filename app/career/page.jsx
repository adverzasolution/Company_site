"use client";

import { motion } from "framer-motion";

export default function CareerPage() {
  const jobs = [
    {
      title: "Frontend Developer (React.js)",
      type: "Full-Time",
      experience: "1-2 Years",
      location: "Gurgaon, Haryana",
      desc: "Build modern, responsive web applications using React.js and latest frontend tools.",
    },
    {
      title: "Backend Developer (Node.js)",
      type: "Full-Time",
      experience: "1-3 Years",
      location: "Gurgaon, Haryana",
      desc: "Develop scalable APIs, manage databases, and optimize backend performance.",
    },
    {
      title: "UI/UX Designer",
      type: "Hybrid",
      experience: "0.6-2 Years",
      location: "Delhi NCR",
      desc: "Design user-friendly and visually appealing digital experiences.",
    },
    {
      title: "Digital Marketing Executive",
      type: "Full-Time",
      experience: "1+ Years",
      location: "Gurgaon, Haryana",
      desc: "Handle SEO, ads, and marketing campaigns to drive business growth.",
    },
  ];

  const benefits = [
    { title: "Friendly Culture", icon: "" },
    { title: "Career Growth", icon: "" },
    { title: "Flexible Work", icon: "" },
    { title: "Real Projects", icon: "" },
  ];

  return (
    <section className="pt-32 pb-28 bg-white text-black px-6">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-black-700 leading-tight"
        >
          Join Our Team 
        </motion.h1>

        <p className="text-gray-600 mt-5 text-lg">
          Work with a fast-growing IT company and build your career with real projects, learning, and growth.
        </p>
      </div>

      {/* BENEFITS */}
      {/* <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Why Work With Us?
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border bg-gray-50 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{b.icon}</div>
              <h3 className="font-semibold text-lg">{b.title}</h3>
            </div>
          ))}
        </div>
      </div> */}

      {/* JOB LIST */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 text-black-700">
          Open Positions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-xl transition bg-white"
            >
              {/* TITLE */}
              <h3 className="text-xl font-semibold text-blue-700">
                {job.title}
              </h3>

              {/* BADGES */}
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs rounded-full">
                  {job.type}
                </span>

                <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
                  {job.experience}
                </span>

                <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
                  {job.location}
                </span>
              </div>

              {/* DESC */}
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {job.desc}
              </p>

              {/* CTA */}
              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="mt-24 text-center bg-blue-50 p-10 rounded-2xl max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-blue-700">
          Didn’t find a suitable role?
        </h3>

        <p className="text-gray-600 mt-3">
          Send your resume and we’ll get back to you.
        </p>

        <a
          href="mailto:hr@Adverza Solutionsit.com"
          className="inline-block mt-5 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          hr@Adverza Solutionsit.com
        </a>
      </div>

    </section>
  );
}