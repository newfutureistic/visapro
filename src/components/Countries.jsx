import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGlobeAmericas,
} from "react-icons/fa";

const countries = [
  {
    flag: "🇨🇦",
    name: "Canada",
    desc: "PR, Student Visa, Work Permit and Express Entry solutions.",
    programs: "8+ PNP Programs",
    gradient: "from-red-500 to-red-700",
  },

  {
    flag: "🇦🇺",
    name: "Australia",
    desc: "Skilled migration, PR pathways and study visa support.",
    programs: "Top Skilled Visas",
    gradient: "from-sky-500 to-blue-700",
  },

  {
    flag: "🇩🇪",
    name: "Germany",
    desc: "Job seeker visa and higher education immigration guidance.",
    programs: "Fast Processing",
    gradient: "from-yellow-400 to-orange-500",
  },

  {
    flag: "🇬🇧",
    name: "United Kingdom",
    desc: "Work visas, dependent visas and student immigration services.",
    programs: "UK Opportunities",
    gradient: "from-indigo-500 to-blue-700",
  },

  {
    flag: "🇳🇿",
    name: "New Zealand",
    desc: "Immigration support for skilled workers and students.",
    programs: "PR Assistance",
    gradient: "from-cyan-500 to-sky-700",
  },

  {
    flag: "🇺🇸",
    name: "United States",
    desc: "Tourist, student and employment-based visa consultation.",
    programs: "Visa Experts",
    gradient: "from-blue-500 to-indigo-700",
  },
];

function Countries() {
  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 px-6 py-3 rounded-full mb-6">

            <FaGlobeAmericas />

            <span className="uppercase tracking-[4px] text-sm font-semibold">
              Top Immigration Destinations
            </span>

          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">

            Explore Your Dream <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Countries
            </span>

          </h2>

          <p className="text-slate-400 mt-8 max-w-3xl mx-auto text-lg leading-8">

            Get expert immigration guidance, PR support,
            student visas, work permits and global opportunities
            for your future abroad.

          </p>

        </motion.div>

        {/* COUNTRY CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {countries.map((country, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 80,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -12,
              }}

              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
            >

              {/* TOP GRADIENT */}
              <div className={`h-2 bg-gradient-to-r ${country.gradient}`} />

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-cyan-500/5 to-blue-500/10" />

              {/* CARD CONTENT */}
              <div className="relative p-10 z-10">

                {/* FLAG */}
                <motion.div

                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}

                  className={`w-28 h-28 rounded-[30px] bg-gradient-to-br ${country.gradient} flex items-center justify-center text-6xl mx-auto shadow-2xl mb-8`}
                >

                  {country.flag}

                </motion.div>

                {/* COUNTRY NAME */}
                <h3 className="text-3xl font-extrabold text-center text-white mb-5">

                  {country.name}

                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-300 text-center leading-8 mb-8">

                  {country.desc}

                </p>

                {/* TAG */}
                <div className="flex justify-center mb-8">

                  <span className="bg-white/10 border border-white/10 text-cyan-300 px-5 py-3 rounded-full text-sm font-semibold backdrop-blur-md">

                    {country.programs}

                  </span>

                </div>

                {/* BUTTON */}
                <motion.button

                  whileHover={{
                    scale: 1.03,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}

                  className={`w-full bg-gradient-to-r ${country.gradient} text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg`}
                >

                  Explore Programs

                  <FaArrowRight />

                </motion.button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Countries;