import { memo } from "react";
import { motion } from "framer-motion";
import {
  FaUserTie, FaSearch, FaFileAlt, FaPaperPlane, FaPlaneDeparture,
} from "react-icons/fa";

const STEPS = [
  {
    id: "01", icon: FaUserTie,
    title: "Free Consultation",
    desc: "Experts analyse your profile and suggest the best immigration pathway.",
    from: "#3b82f6", to: "#6366f1",
    iconBg: "from-blue-500 to-indigo-600",
    numColor: "text-blue-100",
  },
  {
    id: "02", icon: FaSearch,
    title: "Profile Evaluation",
    desc: "Detailed eligibility assessment with documentation planning.",
    from: "#06b6d4", to: "#3b82f6",
    iconBg: "from-cyan-400 to-blue-500",
    numColor: "text-cyan-100",
  },
  {
    id: "03", icon: FaFileAlt,
    title: "Documentation",
    desc: "Complete support for preparing accurate documents and legal paperwork.",
    from: "#8b5cf6", to: "#6366f1",
    iconBg: "from-violet-500 to-indigo-600",
    numColor: "text-violet-100",
  },
  {
    id: "04", icon: FaPaperPlane,
    title: "Visa Filing",
    desc: "Professional application filing with fast, transparent processing.",
    from: "#0ea5e9", to: "#38bdf8",
    iconBg: "from-sky-500 to-cyan-400",
    numColor: "text-sky-100",
  },
  {
    id: "05", icon: FaPlaneDeparture,
    title: "Approval & Fly",
    desc: "Receive your visa approval and start your journey confidently.",
    from: "#6366f1", to: "#8b5cf6",
    iconBg: "from-indigo-500 to-purple-600",
    numColor: "text-indigo-100",
  },
];

const BOTTOM_STATS = [
  { number: "10K+", label: "Visa Applications", from: "#3b82f6", to: "#6366f1" },
  { number: "98%",  label: "Success Rate",      from: "#06b6d4", to: "#3b82f6" },
  { number: "15+",  label: "Years Experience",  from: "#8b5cf6", to: "#6366f1" },
  { number: "50+",  label: "Countries Covered", from: "#0ea5e9", to: "#38bdf8" },
];

const headVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.44, ease: [0.25, 0.4, 0.25, 1] } },
};

function Process() {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f8f7ff 0%, #f0f4ff 60%, #f5f3ff 100%)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full
                        bg-blue-300/15 blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full
                        bg-violet-300/12 blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          variants={headVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full
                           border border-blue-200 bg-blue-50 text-blue-600
                           text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-4">
            Process Timeline
          </span>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-black text-slate-900 leading-tight">
            Your Journey To{" "}
            <span style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Global Success
            </span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm md:text-[0.9375rem] leading-relaxed">
            Our streamlined process ensures a smooth, transparent and
            stress-free experience from evaluation to visa approval.
          </p>
        </motion.div>

        {/* STEPS */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-3 relative"
        >
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-px
                          bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200
                          pointer-events-none z-0" />

          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.id}
                variants={cardVariants}
                className="card-lift group relative bg-white rounded-2xl shadow-sm
                           border border-gray-100 hover:border-transparent
                           hover:shadow-xl overflow-hidden z-10
                           transition-shadow duration-300"
              >
                {/* Gradient top accent */}
                <div
                  className="h-[3px] w-full"
                  style={{ background: `linear-gradient(90deg, ${step.from}, ${step.to})` }}
                />

                <div className="p-5">
                  {/* Watermark step number */}
                  <span
                    className={`absolute top-2 right-3 text-[3.25rem] font-black
                                 select-none leading-none pointer-events-none ${step.numColor}`}
                    aria-hidden="true"
                  >
                    {step.id}
                  </span>

                  {/* Icon circle */}
                  <div
                    className={`relative z-10 w-11 h-11 rounded-2xl bg-gradient-to-br
                                 ${step.iconBg} flex items-center justify-center
                                 shadow-md mb-4`}
                  >
                    <Icon className="text-white text-base" />
                  </div>

                  <h3 className="relative z-10 text-[0.875rem] font-bold text-slate-900
                                 mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p
                    className="relative z-10 text-[0.78rem] leading-relaxed"
                    style={{ color: step.from }}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${step.from}08 0%, ${step.to}06 100%)`,
                    boxShadow: `inset 0 0 0 1.5px ${step.from}30`,
                  }}
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* BOTTOM STATS */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 md:mt-8"
        >
          {BOTTOM_STATS.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              className="card-lift group relative bg-white rounded-2xl border border-gray-100
                         hover:border-transparent hover:shadow-lg shadow-sm
                         p-5 text-center overflow-hidden transition-shadow duration-300"
            >
              {/* Gradient number */}
              <span
                className="block text-[clamp(1.6rem,3vw,2rem)] font-black mb-1 tabular-nums"
                style={{
                  background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.number}
              </span>
              <span className="text-xs text-slate-500 font-medium">{item.label}</span>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                            transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${item.from}08 0%, ${item.to}06 100%)`,
                  boxShadow: `inset 0 0 0 1.5px ${item.from}28`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default memo(Process);
