import { memo } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaGlobeAmericas, FaPassport, FaUsers } from "react-icons/fa";
import aboutImg from "../assets/about.jpg";

const CHECKS = [
  "Trusted Immigration Consultancy",
  "Fast Visa Processing Support",
  "100% Professional Guidance",
  "Affordable Service Packages",
];

const FEATURES = [
  { icon: FaGlobeAmericas, color: "bg-cyan-50 text-cyan-600", title: "Global Reach",  desc: "Top destinations worldwide." },
  { icon: FaUsers,         color: "bg-blue-50 text-blue-600", title: "Expert Team",   desc: "Certified visa consultants." },
];

/* Variants — stable, outside component */
const sectionHeadVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

const slideLeft = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

const slideRight = {
  hidden:  { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

function About() {
  return (
    <section id="about" className="py-14 md:py-20 bg-white overflow-hidden section-lazy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          variants={sectionHeadVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center bg-blue-50 text-blue-600 px-3 py-1
                           rounded-full text-[0.7rem] font-semibold tracking-widest
                           uppercase mb-3 border border-blue-100">
            About Us
          </span>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold text-slate-900 leading-tight">
            Welcome To{" "}
            <span className="text-blue-600">Visa Immigration Services</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-[0.9375rem] leading-relaxed">
            Trusted immigration and visa consultancy for students, professionals
            and families who dream to move abroad successfully.
          </p>
        </motion.div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={aboutImg}
                alt="Immigration consultation team"
                loading="lazy"
                decoding="async"
                width={640}
                height={440}
                className="w-full h-[280px] sm:h-[360px] md:h-[430px] object-cover
                           transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45
                              via-transparent to-transparent pointer-events-none" />

              {/* Experience badge */}
              <div className="absolute bottom-4 left-4 bg-white/96 px-4 py-3
                              rounded-xl shadow-lg">
                <span className="block text-[1.6rem] font-black text-blue-600
                                 leading-none tabular-nums">
                  10+
                </span>
                <span className="text-[0.7rem] text-gray-600 font-semibold
                                 uppercase tracking-wide">
                  Years Experience
                </span>
              </div>
            </div>

            {/* Floating card — CSS animation, zero JS per frame */}
            <div className="animate-float absolute -top-4 -right-2 md:-top-5 md:-right-5
                            bg-white shadow-xl rounded-xl px-4 py-3 border border-gray-100/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center
                                justify-center text-blue-600 shrink-0">
                  <FaPassport className="text-sm" />
                </div>
                <div>
                  <span className="block text-lg font-black text-slate-900
                                   leading-none tabular-nums">
                    15K+
                  </span>
                  <span className="text-[0.7rem] text-gray-500 font-medium">
                    Visas Approved
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h3 className="text-[clamp(1.35rem,2.6vw,1.9rem)] font-bold text-slate-900
                           leading-snug mb-4">
              Your Trusted Partner For Global Immigration Success
            </h3>
            <p className="text-gray-500 text-sm md:text-[0.9375rem] leading-relaxed mb-6">
              We specialise in immigration solutions for Canada, Australia, UK,
              Germany and more. Our consultants help with student visas, PR
              applications, work permits, visitor visas and family sponsorships
              with complete documentation support.
            </p>

            {/* Mini feature cards */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {FEATURES.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}
                    className="bg-slate-50 rounded-xl p-4 border border-gray-100">
                    <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center
                                    justify-center text-sm mb-3`}>
                      <Icon />
                    </div>
                    <p className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Checklist */}
            <ul className="space-y-2.5 mb-7">
              {CHECKS.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-cyan-500 text-sm shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Buttons — pure CSS transitions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#services"
                className="inline-flex items-center justify-center bg-blue-600
                           hover:bg-blue-700 active:bg-blue-800 text-white px-5 py-2.5
                           rounded-xl text-sm font-semibold transition-colors
                           duration-150 shadow-sm">
                Explore Services
              </a>
              <a href="#contact"
                className="inline-flex items-center justify-center border
                           border-gray-200 hover:border-blue-300 hover:bg-blue-50/60
                           text-slate-800 px-5 py-2.5 rounded-xl text-sm font-semibold
                           transition-colors duration-150">
                Contact Us
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default memo(About);
