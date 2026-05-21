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
    gradient: "from-violet-500 to-purple-600",
    linkCls: "text-violet-400 hover:text-violet-300",
    arrowCls: "border-white/10 text-violet-400 group-hover:border-violet-400/50",
    hoverBorder: "hover:border-violet-500/30 hover:shadow-violet-500/10",
  },
  {
    icon: FaComments,
    title: "Expert Consultation",
    desc: "Complete guidance and solutions for all your immigration doubts and queries.",
    gradient: "from-cyan-400 to-teal-500",
    linkCls: "text-cyan-400 hover:text-cyan-300",
    arrowCls: "border-white/10 text-cyan-400 group-hover:border-cyan-400/50",
    hoverBorder: "hover:border-cyan-500/30 hover:shadow-cyan-500/10",
  },
  {
    icon: FaFileSignature,
    title: "Application Processing",
    desc: "Step-by-step processing with full transparency and dedicated support.",
    gradient: "from-pink-500 to-rose-600",
    linkCls: "text-pink-400 hover:text-pink-300",
    arrowCls: "border-white/10 text-pink-400 group-hover:border-pink-400/50",
    hoverBorder: "hover:border-pink-500/30 hover:shadow-pink-500/10",
  },
  {
    icon: FaPlaneDeparture,
    title: "Travel Assistance",
    desc: "Complete travel planning, documentation and pre-departure preparation.",
    gradient: "from-orange-400 to-amber-500",
    linkCls: "text-orange-400 hover:text-orange-300",
    arrowCls: "border-white/10 text-orange-400 group-hover:border-orange-400/50",
    hoverBorder: "hover:border-orange-500/30 hover:shadow-orange-500/10",
  },
  {
    icon: FaHandshake,
    title: "Settlement Support",
    desc: "We help you settle smoothly in your new destination country with confidence.",
    gradient: "from-emerald-400 to-teal-500",
    linkCls: "text-emerald-400 hover:text-emerald-300",
    arrowCls: "border-white/10 text-emerald-400 group-hover:border-emerald-400/50",
    hoverBorder: "hover:border-emerald-500/30 hover:shadow-emerald-500/10",
  },
  {
    icon: FaUsers,
    title: "1-on-1 Assistance",
    desc: "Dedicated and personalised immigration support for every single client.",
    gradient: "from-blue-500 to-violet-600",
    linkCls: "text-blue-400 hover:text-blue-300",
    arrowCls: "border-white/10 text-blue-400 group-hover:border-blue-400/50",
    hoverBorder: "hover:border-blue-500/30 hover:shadow-blue-500/10",
  },
];

const headingVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] } },
};

function Services() {
  return (
    <section
      id="services"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #08081e 0%, #0d0d28 45%, #06101e 100%)" }}
    >
      {/* ── Ambient glow blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] rounded-full
                        bg-violet-600/10 blur-[100px]" />
        <div className="absolute -top-10 right-0 w-[350px] h-[350px] rounded-full
                        bg-cyan-500/8 blur-[90px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[280px] h-[280px] rounded-full
                        bg-blue-600/6 blur-[80px]" />
        {/* Decorative wave lines */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.07]"
          viewBox="0 0 1440 320" preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,160 C240,240 480,80 720,160 C960,240 1200,80 1440,160 L1440,320 L0,320 Z"
            fill="url(#waveGrad)"
          />
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute top-0 right-0 w-[60%] opacity-[0.05]"
          viewBox="0 0 800 400" preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M800,0 C600,80 400,0 200,80 C0,160 -100,80 0,0 Z"
            fill="url(#waveGrad2)"
          />
          <defs>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADING ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full
                           border border-white/10 bg-white/5 text-white/60
                           text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-black leading-tight text-white">
            Immigration Services
            <br />
            <span style={{
              background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Designed For You
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-[0.9375rem] leading-relaxed">
            Professional immigration consultation, documentation support
            and visa processing for global destinations.
          </p>
        </motion.div>

        {/* ── CARDS GRID ── */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.article
                key={svc.title}
                variants={cardVariants}
                className={`group relative rounded-2xl border border-white/[0.07]
                            bg-white/[0.04] p-6 flex flex-col gap-4
                            transition-all duration-300 cursor-pointer
                            hover:shadow-lg ${svc.hoverBorder}`}
              >
                {/* Icon circle */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.gradient}
                                 flex items-center justify-center shrink-0 shadow-lg`}>
                  <Icon className="text-white text-xl" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-[1rem] font-bold text-white mb-2 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-slate-400 text-[0.8375rem] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between mt-1">
                  <span className={`inline-flex items-center gap-1.5 text-[0.8125rem]
                                    font-semibold transition-colors duration-150 ${svc.linkCls}`}>
                    Learn More
                    <FaArrowRight className="text-[9px]" />
                  </span>

                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center
                                   transition-all duration-200 ${svc.arrowCls}`}>
                    <FaArrowRight className="text-[9px]" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default memo(Services);
