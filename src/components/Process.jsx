import { memo } from "react";
import { motion } from "framer-motion";
import {
  FaUserTie, FaSearch, FaFileAlt, FaPaperPlane, FaPlaneDeparture,
} from "react-icons/fa";

const STEPS = [
  { id: "01", icon: FaUserTie,       title: "Free Consultation",  desc: "Experts analyse your profile and suggest the best immigration pathway.", color: "bg-blue-50 text-blue-600",   bar: "bg-blue-600" },
  { id: "02", icon: FaSearch,        title: "Profile Evaluation", desc: "Detailed eligibility assessment with documentation planning.",            color: "bg-cyan-50 text-cyan-600",   bar: "bg-cyan-500" },
  { id: "03", icon: FaFileAlt,       title: "Documentation",      desc: "Complete support for preparing accurate documents and legal paperwork.",   color: "bg-indigo-50 text-indigo-600", bar: "bg-indigo-500" },
  { id: "04", icon: FaPaperPlane,    title: "Visa Filing",        desc: "Professional application filing with fast, transparent processing.",       color: "bg-sky-50 text-sky-600",     bar: "bg-sky-500" },
  { id: "05", icon: FaPlaneDeparture,title: "Approval & Fly",     desc: "Receive your visa approval and start your journey confidently.",          color: "bg-blue-50 text-blue-700",   bar: "bg-blue-700" },
];

const BOTTOM_STATS = [
  { number: "10K+", text: "Visa Applications" },
  { number: "98%",  text: "Success Rate" },
  { number: "15+",  text: "Years Experience" },
  { number: "50+",  text: "Countries Covered" },
];

const headVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.25, 0.4, 0.25, 1] } },
};

function Process() {
  return (
    <section className="py-14 md:py-20 bg-slate-50 overflow-hidden section-lazy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          variants={headVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center bg-blue-50 text-blue-600 px-3 py-1
                           rounded-full text-[0.7rem] font-semibold tracking-widest
                           uppercase mb-3 border border-blue-100">
            Process Timeline
          </span>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold text-slate-900 leading-tight">
            Your Journey To{" "}
            <span className="gradient-text">Global Success</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-[0.9375rem] leading-relaxed">
            Our streamlined process ensures a smooth, transparent and
            stress-free experience from evaluation to visa approval.
          </p>
        </motion.div>

        {/* STEPS — one IntersectionObserver via stagger container */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.id}
                variants={cardVariants}
                className="card-lift group relative bg-white rounded-2xl
                           border border-gray-100 hover:border-gray-200 shadow-sm
                           overflow-hidden"
              >
                {/* Top accent bar */}
                <div className={`h-0.5 ${step.bar}`} />

                <div className="p-5">
                  {/* Watermark step number */}
                  <span className="absolute top-3 right-3.5 text-5xl font-black
                                   text-gray-100 select-none leading-none pointer-events-none">
                    {step.id}
                  </span>

                  <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center
                                   justify-center text-sm mb-4`}>
                    <Icon />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {BOTTOM_STATS.map((item) => (
            <motion.div
              key={item.text}
              variants={cardVariants}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm
                         p-5 text-center"
            >
              <span className="block text-2xl md:text-[1.75rem] font-black
                               gradient-text mb-1 tabular-nums">
                {item.number}
              </span>
              <span className="text-xs text-gray-500 font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default memo(Process);
