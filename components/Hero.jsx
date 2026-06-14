"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Counter from "./Counter";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      className="relative w-full mt-13 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0D1B3E 0%, #0D1B3E 40%, #0C6DFD 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-extrabold leading-[1.2]
              text-[28px]
              sm:text-[34px]
              md:text-[40px]
              lg:text-[44px]
              tracking-[-1px]"
          >
            You don’t need another <br />
            opinion, you need the right <br />
            <span className="text-[#04C678]">X</span>
            <span className="text-[#00E6FF]">-ecution!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-[16px] md:text-[18px] leading-[1.6] opacity-90"
          >
            We Team Up With You To Refine Ideas, Add The X-Factor, And Turn
            Strategies Into Measurable Results.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
          >
        <motion.button
  onClick={() => router.push("/services")}
  whileHover={{ scale: 1.05 }}
  className="px-8 py-3 rounded-xl font-semibold shadow bg-white text-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white transition"
>
  Grow Your Business 🚀
</motion.button>

<motion.button
  onClick={() => router.push("/contact")}
  whileHover={{ scale: 1.05 }}
  className="px-8 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-[#0D1B3E] transition"
>
  📞 Book a Free Session
</motion.button>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-10 sm:gap-20 mt-16"
          >
            <div className="text-center">
              <p className="font-extrabold text-[40px] md:text-[52px]">
                <Counter to={8} duration={2} />+
              </p>
              <p className="opacity-80">Years Experience</p>
            </div>

            <div className="hidden sm:block w-[4px] h-[80px] bg-white"></div>

            <div className="text-center">
              <p className="font-extrabold text-[40px] md:text-[52px]">
                <Counter to={80} duration={2} />%
              </p>
              <p className="opacity-80">Client Success</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        
      {/* ================= RIGHT IMAGE ================= */}
<div className="hidden lg:flex relative h-[600px] justify-center items-center">

  {/* GLOW */}
  <motion.div
    animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
    transition={{ repeat: Infinity, duration: 6 }}
    className="absolute w-[420px] h-[420px] bg-gradient-to-br from-[#00C6FF] to-[#00FF9D] opacity-40 blur-3xl rounded-full"
  />

  {/* IMAGE CARD */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 }}
    className="
      relative z-10
      w-[420px]
      h-[580px]
      rounded-[30px]
      backdrop-blur-xl
      bg-white/10
      border border-white/20
      shadow-[0_10px_70px_rgba(0,0,0,0.35)]
      overflow-hidden
    "
  >
    <Image
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
      alt="Team collaboration"
      fill
      priority
      className="object-cover"
    />
  </motion.div>
</div>

      </div>
    </section>
  );
}