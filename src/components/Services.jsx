import { memo } from "react";
import { motion } from "framer-motion";
import {
  FaUserCheck, FaComments, FaFileSignature,
  FaPlaneDeparture, FaHandshake, FaUsers, FaArrowRight,
} from "react-icons/fa";

const SERVICES = [
  {
    icon: FaUserCheck,
    title: "Profile Evaluation",
    desc: "Evaluate your profile before applying to maximise your immigration success chances.",
    accent: "bg-blue-50 text-blue-600",
    bar: "bg-blue-600",
  },
  {
    icon: FaComments,
    title: "Expert Consultation",
    desc: "Complete guidance and solutions for all your immigration doubts and queries.",
    accent: "bg-cyan-50 text-cyan-600",
    bar: "bg-cyan-500",
  },
  {
    icon: FaFileSignature,
    title: "Application Processing",
    desc: "Step-by-step processing with full transparency and dedicated support.",
    accent: "bg-indigo-50 text-indigo-600",
    bar: "bg-indigo-500",
  },
  {
    icon: FaPlaneDeparture,
    title: "Travel Assistance",
    desc: "Complete travel planning, documentation and pre-departure preparation.",
    accent: "bg-sky-50 text-sky-600",
    bar: "bg-sky-500",
  },
  {
    icon: FaHandshake,
    title: "Settlement Support",
    desc: "We help you settle smoothly in your new destination country with confidence.",
    accent: "bg-blue-50 text-blue-700",
    bar: "bg-blue-700",
  },
  {
    icon: FaUsers,
    title: "1-on-1 Assistance",
    desc: "Dedicated and personalised immigration support for every single client.",
    accent: "bg-teal-50 text-teal-600",
    bar: "bg-teal-500",
  },
];

/* Variants defined outside component — stable references, zero re-creation */
const headingVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.25, 0.4, 0.25, 1] } },
};

function Services() {
  return (
    <section id="services" className="py-14 md:py-20 bg-slate-50 section-lazy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center bg-blue-50 text-blue-600 px-3 py-1
                           rounded-full text-[0.7rem] font-semibold tracking-widest
                           uppercase mb-3 border border-blue-100">
            What We Do
          </span>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold text-slate-900
                         leading-tight">
            Immigration Services{" "}
            <span className="gradient-text">Designed For You</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-[0.9375rem]
                        leading-relaxed">
            Professional immigration consultation, documentation support and
            visa processing for global destinations.
          </p>
        </motion.div>

        {/* CARDS GRID — single IntersectionObserver via stagger container */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.article
                key={svc.title}
                variants={cardVariants}
                /* CSS hover — no JS whileHover listener */
                className="card-lift group bg-white rounded-2xl border border-gray-100
                           hover:border-gray-200 p-5 shadow-sm relative overflow-hidden"
              >
                {/* Left accent bar — pure CSS, GPU composited */}
                <span className={`absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full
                                  ${svc.bar} opacity-0 group-hover:opacity-100
                                  transition-opacity duration-200`} />

                <div className={`w-10 h-10 rounded-xl ${svc.accent} flex items-center
                                 justify-center text-base mb-4`}>
                  <Icon />
                </div>

                <h3 className="text-[0.9375rem] font-bold text-slate-900 mb-1.5 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {svc.desc}
                </p>

                <span className="inline-flex items-center gap-1.5 text-blue-600
                                 hover:text-blue-700 text-sm font-semibold
                                 transition-colors duration-150 group/btn cursor-pointer">
                  Learn More
                  <FaArrowRight className="text-[9px] transition-transform duration-150
                                           group-hover:translate-x-0.5" />
                </span>
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default memo(Services);
