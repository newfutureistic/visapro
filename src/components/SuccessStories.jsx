import { memo } from "react";
import { motion } from "framer-motion";
import img1  from "../assets/16.jpg";
import img2  from "../assets/12.jpg";
import img3  from "../assets/5.jpg";
import img4  from "../assets/11.jpg";
import img5  from "../assets/10.jpg";
import img6  from "../assets/15.jpg";
import img7  from "../assets/9.jpg";
import img8  from "../assets/14.jpg";

const STORIES = [
  { image: img1, name: "Deepak",     visa: "Portugal · Job Seeker" },
  { image: img2, name: "Punit",      visa: "Australia · Work Permit" },
  { image: img3, name: "Vivek",      visa: "Canada · Work Permit" },
  { image: img4, name: "Siddarth",   visa: "Canada · Work Permit" },
  { image: img5, name: "Abhinandan", visa: "Australia · Work Permit" },
  { image: img6, name: "Shubham",    visa: "Canada · Work Permit" },
  { image: img7, name: "Rahul",      visa: "Germany · Work Visa" },
  { image: img8, name: "Aman",       visa: "UK · Student Visa" },
];

/* Doubled array for seamless loop */
const DOUBLED = [...STORIES, ...STORIES];

const headVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

function SuccessStories() {
  return (
    <section className="py-14 md:py-20 bg-slate-50 overflow-hidden section-lazy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center bg-blue-50 text-blue-600 px-3 py-1
                           rounded-full text-[0.7rem] font-semibold tracking-widest
                           uppercase mb-3 border border-blue-100">
            Success Stories
          </span>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold text-slate-900 leading-tight">
            Visa Approved{" "}
            <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm md:text-[0.9375rem] leading-relaxed">
            Thousands of successful visa approvals — real people, real journeys.
          </p>
        </motion.div>
      </div>

      {/* ── PURE CSS TICKER — runs on GPU compositor, zero JS per frame ── */}
      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-14 sm:w-20
                        bg-gradient-to-r from-slate-50 to-transparent z-10
                        pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-14 sm:w-20
                        bg-gradient-to-l from-slate-50 to-transparent z-10
                        pointer-events-none" />

        {/* The ticker track — CSS animation only */}
        <div className="animate-ticker flex gap-4 w-max px-2">
          {DOUBLED.map((item, idx) => (
            <div
              key={idx}
              className="card-shadow-hover min-w-[175px] sm:min-w-[205px]
                         bg-white rounded-2xl overflow-hidden border border-gray-100
                         flex-shrink-0"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[190px] sm:h-[215px]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  width={205}
                  height={215}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t
                                from-black/50 via-transparent to-transparent
                                pointer-events-none" />
                <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2
                                 bg-gradient-to-r from-blue-700 to-cyan-600
                                 text-white px-3 py-1 rounded-lg text-[0.65rem]
                                 font-bold tracking-wide uppercase whitespace-nowrap
                                 shadow-md">
                  Visa Approved ✓
                </span>
              </div>

              {/* Info */}
              <div className="px-3.5 py-3 text-center">
                <p className="text-sm font-bold text-slate-900 leading-none mb-0.5">
                  {item.name}
                </p>
                <p className="text-[0.7rem] text-gray-500 font-medium">{item.visa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SuccessStories);
