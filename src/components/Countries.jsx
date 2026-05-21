import { memo } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaGlobeAmericas } from "react-icons/fa";

const COUNTRIES = [
  { flag: "🇨🇦", name: "Canada",         desc: "PR, Student Visa, Work Permit and Express Entry solutions.", tag: "8+ PNP Programs",  topBar: "bg-red-500" },
  { flag: "🇦🇺", name: "Australia",       desc: "Skilled migration, PR pathways and study visa support.",    tag: "Top Skilled Visas", topBar: "bg-sky-500" },
  { flag: "🇩🇪", name: "Germany",         desc: "Job seeker visa and higher education immigration guidance.", tag: "Fast Processing",   topBar: "bg-amber-400" },
  { flag: "🇬🇧", name: "United Kingdom",  desc: "Work visas, dependent visas and student immigration.",      tag: "UK Opportunities",  topBar: "bg-indigo-500" },
  { flag: "🇳🇿", name: "New Zealand",     desc: "Immigration support for skilled workers and students.",     tag: "PR Assistance",     topBar: "bg-cyan-500" },
  { flag: "🇺🇸", name: "United States",   desc: "Tourist, student and employment-based visa consultation.",  tag: "Visa Experts",      topBar: "bg-blue-500" },
];

const headVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.25, 0.4, 0.25, 1] } },
};

function Countries() {
  return (
    <section id="countries" className="py-14 md:py-20 bg-slate-950 relative overflow-hidden section-lazy">
      {/* Ambient glows — composited off main thread, zero scroll cost */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full
                      bg-cyan-500/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full
                      bg-blue-600/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          variants={headVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-1.5 bg-white/6 border
                           border-white/10 text-cyan-400 px-3 py-1 rounded-full
                           text-[0.7rem] font-semibold tracking-widest uppercase mb-3">
            <FaGlobeAmericas className="text-[9px]" />
            Top Destinations
          </span>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold leading-tight text-white">
            Explore Your Dream{" "}
            <span className="gradient-text">Countries</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm md:text-[0.9375rem]
                        leading-relaxed">
            Expert immigration guidance, PR support, student visas and work
            permits for top global destinations.
          </p>
        </motion.div>

        {/* CARDS — no backdrop-blur, solid semi-transparent bg for perf */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {COUNTRIES.map((country) => (
            <motion.article
              key={country.name}
              variants={cardVariants}
              /* CSS hover lift — no JS listener */
              className="card-lift group relative rounded-2xl overflow-hidden
                         border border-white/8 bg-slate-800/60
                         hover:bg-slate-800/80 transition-colors duration-200"
            >
              {/* Colour top bar */}
              <div className={`h-0.5 ${country.topBar}`} />

              <div className="p-5">
                {/* Flag emoji in a pill — no external image, zero network cost */}
                <div className="w-12 h-12 rounded-xl bg-white/8 flex items-center
                                justify-center text-2xl mb-4 border border-white/6">
                  {country.flag}
                </div>

                <h3 className="text-[0.9375rem] font-bold text-white mb-1.5 leading-snug">
                  {country.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {country.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="bg-white/6 border border-white/8 text-cyan-300
                                   px-2.5 py-1 rounded-full text-[0.7rem] font-semibold">
                    {country.tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[0.7rem]
                                   font-semibold text-slate-400 group-hover:text-cyan-400
                                   transition-colors duration-150 cursor-pointer">
                    Explore
                    <FaArrowRight className="text-[8px] transition-transform duration-150
                                             group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default memo(Countries);
