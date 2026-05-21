import { memo } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import heroBg from "../assets/hero-bg.jpg";

const FEATURES = [
  "10K+ Successful Applications",
  "95% Visa Approval Rate",
  "ICCRC Certified Experts",
  "Fast Processing Support",
];

const STATS = [
  { number: "15K+", label: "Visas Approved" },
  { number: "25+",  label: "Countries" },
  { number: "10+",  label: "Years Exp." },
];

/* Single set of variants defined outside — never re-created on render */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Layered overlays — no backdrop-blur, pure opacity */}
      <div className="absolute inset-0 bg-white/72 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/10 pointer-events-none" />

      {/* Ambient glow orbs — CSS only, composited off main thread */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-400/18
                      blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-0 w-72 h-72 rounded-full bg-cyan-400/14
                      blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
                   pt-12 pb-12 md:pt-18 md:pb-16"
      >
        <div className="max-w-[600px]">

          {/* BADGE */}
          <motion.div variants={itemVariants}
            className="inline-flex items-center gap-2 bg-blue-600 text-white
                       px-3.5 py-1.5 rounded-full text-xs font-semibold
                       tracking-wide uppercase shadow-md mb-5"
          >
            <FaShieldAlt className="text-[9px]" />
            Trusted Immigration Experts
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(1.9rem,4.8vw,3.1rem)] font-black leading-[1.1]
                       text-slate-900 mb-4"
          >
            Your Trusted{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Immigration</span>
              <span className="absolute left-0 bottom-1 w-full h-2.5
                               bg-blue-200/55 rounded pointer-events-none" />
            </span>{" "}
            Partner Worldwide
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={itemVariants}
            className="text-[0.9375rem] text-gray-600 leading-relaxed max-w-[520px] mb-6"
          >
            We help students, professionals and families secure visas for
            Canada, Australia, Germany, UK and more — with trusted consultation
            and fast, transparent processing.
          </motion.p>

          {/* FEATURE PILLS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mb-7"
          >
            {FEATURES.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 bg-white/95 border
                           border-gray-200/80 px-3 py-1.5 rounded-lg shadow-sm
                           text-xs sm:text-[0.8125rem] font-medium text-slate-700"
              >
                <FaCheckCircle className="text-blue-600 text-[10px] shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2
                         bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                         text-white px-6 py-2.5 rounded-xl text-sm font-semibold
                         transition-colors duration-150 shadow-sm group"
            >
              Apply Now
              <FaArrowRight className="text-[10px] transition-transform duration-150
                                       group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-white/90
                         border border-gray-200 hover:border-blue-300
                         hover:bg-blue-50/60 text-slate-800 px-6 py-2.5 rounded-xl
                         text-sm font-semibold transition-colors duration-150"
            >
              Explore Services
            </a>
          </motion.div>

          {/* STATS ROW */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 sm:gap-9"
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i > 0 ? "border-l border-gray-200/70 pl-6 sm:pl-9" : ""
                }`}
              >
                <span className="text-2xl sm:text-[1.75rem] font-black text-blue-600
                                 leading-none tabular-nums">
                  {s.number}
                </span>
                <span className="text-[0.7rem] text-gray-500 font-medium mt-0.5 uppercase
                                 tracking-wide">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default memo(Hero);
