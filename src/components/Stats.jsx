import { memo } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaSmile, FaUserTie, FaUsers } from "react-icons/fa";
import canadaFlag    from "../assets/canada.jpg";
import germanyFlag   from "../assets/german.jpg";
import australiaFlag from "../assets/australia.jpg";
import hongkongFlag  from "../assets/hong.jpg";
import ontarioFlag   from "../assets/m.jpg";
import nbFlag        from "../assets/n.jpg";

const STATS = [
  { icon: FaBriefcase, number: "10,000+", title: "Applications Handled", color: "bg-blue-50 text-blue-600" },
  { icon: FaSmile,     number: "9+",      title: "Years Experience",      color: "bg-cyan-50 text-cyan-600" },
  { icon: FaUserTie,   number: "150+",    title: "Immigration Staff",     color: "bg-indigo-50 text-indigo-600" },
  { icon: FaUsers,     number: "4.9★",    title: "Client Rating",         color: "bg-sky-50 text-sky-600" },
];

const FLAGS = [
  { img: australiaFlag, name: "Australia" },
  { img: germanyFlag,   name: "Germany" },
  { img: hongkongFlag,  name: "Hong Kong" },
  { img: canadaFlag,    name: "Canada" },
  { img: ontarioFlag,   name: "Ontario" },
  { img: nbFlag,        name: "New Brunswick" },
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] } },
};

function Stats() {
  return (
    <section className="py-14 md:py-20 bg-white section-lazy">
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
            Our Progress
          </span>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold text-slate-900 leading-tight">
            Trusted By Thousands{" "}
            <span className="gradient-text">Worldwide</span>
          </h2>
        </motion.div>

        {/* STAT CARDS */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {STATS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="card-lift bg-white rounded-2xl border border-gray-100
                           hover:border-gray-200 shadow-sm p-5 text-center relative
                           overflow-hidden group"
              >
                {/* Bottom accent */}
                <span className="absolute bottom-0 left-4 right-4 h-0.5
                                 bg-gradient-to-r from-blue-500 to-cyan-400
                                 rounded-full opacity-0 group-hover:opacity-100
                                 transition-opacity duration-200" />

                <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center
                                 justify-center text-base mx-auto mb-3`}>
                  <Icon />
                </div>
                <p className="text-[1.6rem] font-black text-slate-900 mb-0.5
                              leading-none tabular-nums">
                  {item.number}
                </p>
                <p className="text-xs text-gray-500 font-medium leading-snug">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* FLAGS PANEL */}
        <motion.div
          variants={headVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-slate-50 rounded-2xl border border-gray-100 p-6 md:p-8"
        >
          <div className="text-center mb-7">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1.5">
              Global Immigration Destinations
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              We provide immigration and visa consultation for the world's top countries.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-6">
            {FLAGS.map((flag) => (
              <div
                key={flag.name}
                /* CSS hover — no framer-motion listener */
                className="card-lift flex flex-col items-center gap-2 cursor-default"
              >
                <div className="w-full max-w-[68px] h-16 bg-white rounded-xl
                                border border-gray-100 shadow-sm flex items-center
                                justify-center overflow-hidden">
                  <img
                    src={flag.img}
                    alt={flag.name}
                    loading="lazy"
                    decoding="async"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-[0.7rem] font-semibold text-slate-600
                                 text-center leading-tight">
                  {flag.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default memo(Stats);
