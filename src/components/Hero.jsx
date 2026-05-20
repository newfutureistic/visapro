import { motion } from "framer-motion";

import {
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
} from "react-icons/fa";

import heroBg from "../assets/hero-bg.jpg";

function Hero() {

  return (

    <section
      className="pt-[110px]  relative min-h-screen overflow-hidden bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >

      {/* DARK + LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/60 z-0"></div>

      {/* LEFT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-0"></div>

      {/* BLUE GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full z-0"></div>

      {/* CYAN GLOW */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-cyan-400/20 blur-3xl rounded-full z-0"></div>

<div className="relative z-10 max-w-7xl mx-auto px-6 pt-56 pb-28 w-full">
          <div className="max-w-3xl">

          {/* TOP BADGE */}
          <motion.div

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            className="inline-flex items-center gap-3 bg-blue-600 text-white px-7 py-3 rounded-full shadow-2xl mb-8"
          >

            <FaCheckCircle />

            <span className="uppercase tracking-[3px] text-sm font-bold">

              Trusted Immigration Experts

            </span>

          </motion.div>

          {/* HEADING */}
          <motion.h1

            initial={{
              opacity: 0,
              y: 60,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.2,
              duration: 0.8,
            }}

            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-slate-900"
          >

            Your Trusted <br />

            <span className="relative inline-block">

              <span className="relative z-10 text-blue-600">

                Immigration

              </span>

              {/* BLUE HIGHLIGHT */}
              <span className="absolute left-0 bottom-3 w-full h-5 bg-blue-200/70 -z-0 rounded-lg"></span>

            </span>

            <br />

            Partner Worldwide

          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.4,
              duration: 0.8,
            }}

            className="text-gray-700 mt-8 text-xl leading-10 max-w-2xl font-medium"
          >

            We help students, professionals and families
            secure visas for Canada, Australia, Germany,
            UK and many more countries with trusted
            consultation and fast processing.

          </motion.p>

          {/* FEATURES */}
          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.6,
              duration: 0.8,
            }}

            className="grid sm:grid-cols-2 gap-5 mt-10"
          >

            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-lg px-5 py-4 rounded-2xl shadow-lg border border-white">

              <FaCheckCircle className="text-blue-600 text-xl" />

              <span className="text-slate-800 font-semibold">

                10K+ Successful Applications

              </span>

            </div>

            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-lg px-5 py-4 rounded-2xl shadow-lg border border-white">

              <FaCheckCircle className="text-blue-600 text-xl" />

              <span className="text-slate-800 font-semibold">

                95% Visa Approval Rate

              </span>

            </div>

            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-lg px-5 py-4 rounded-2xl shadow-lg border border-white">

              <FaCheckCircle className="text-blue-600 text-xl" />

              <span className="text-slate-800 font-semibold">

                ICCRC Certified Experts

              </span>

            </div>

            <div className="flex items-center gap-4 bg-white/80 backdrop-blur-lg px-5 py-4 rounded-2xl shadow-lg border border-white">

              <FaCheckCircle className="text-blue-600 text-xl" />

              <span className="text-slate-800 font-semibold">

                Fast Processing Support

              </span>

            </div>

          </motion.div>

          {/* BUTTONS */}
          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.8,
              duration: 0.8,
            }}

            className="flex flex-wrap gap-5 mt-12"
          >

            {/* PRIMARY BUTTON */}
            <motion.button

              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.95,
              }}

              className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl flex items-center gap-3 transition duration-300"
            >

              Apply Now

              <FaArrowRight className="group-hover:translate-x-1 transition" />

            </motion.button>

            {/* SECONDARY BUTTON */}
            <motion.button

              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.95,
              }}

              className="group bg-white/80 backdrop-blur-lg border border-gray-200 hover:border-blue-500 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl flex items-center gap-3 transition duration-300"
            >

              <FaPlay className="text-blue-600" />

              Watch Video

            </motion.button>

          </motion.div>

          {/* STATS */}
          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 1,
              duration: 0.8,
            }}

            className="grid grid-cols-3 gap-6 mt-16"
          >

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white text-center">

              <h3 className="text-4xl font-black text-blue-600">

                15K+

              </h3>

              <p className="text-gray-600 mt-2 font-medium">

                Visa Approved

              </p>

            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white text-center">

              <h3 className="text-4xl font-black text-cyan-600">

                25+

              </h3>

              <p className="text-gray-600 mt-2 font-medium">

                Countries

              </p>

            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white text-center">

              <h3 className="text-4xl font-black text-blue-600">

                10+

              </h3>

              <p className="text-gray-600 mt-2 font-medium">

                Years Experience

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;