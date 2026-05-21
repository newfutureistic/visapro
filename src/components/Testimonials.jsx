import { memo } from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TESTIMONIALS = [
  { name: "Aarav Sharma",   initials: "AS", country: "Canada PR",              review: "The entire visa process was smooth and professional. Their team guided me at every step and helped me secure my PR successfully." },
  { name: "Sophia Williams",initials: "SW", country: "Australia Work Permit",  review: "Amazing experience! The consultants were highly knowledgeable and the documentation support was exceptional." },
  { name: "Rahul Mehta",    initials: "RM", country: "Germany Student Visa",   review: "I received my student visa much faster than expected. Their process and communication were excellent throughout." },
  { name: "Emma Johnson",   initials: "EJ", country: "UK Work Visa",           review: "Their expert guidance made my visa process incredibly easy and stress-free. Highly recommended!" },
  { name: "Rohan Verma",    initials: "RV", country: "Australia PR",           review: "Professional service with fast processing and clear communication. Truly impressed with their support." },
];

const headVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

/* Swiper breakpoints — defined outside to avoid object re-creation */
const BREAKPOINTS = {
  640:  { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
};

const AUTOPLAY_CONFIG = {
  delay: 2800,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};

function Testimonials() {
  return (
    <section id="testimonials" className="py-14 md:py-20 bg-slate-950 relative overflow-hidden section-lazy">
      <div className="absolute -top-20 right-0 w-72 h-72 rounded-full
                      bg-cyan-500/7 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          variants={headVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center bg-white/6 border border-white/10
                           text-cyan-400 px-3 py-1 rounded-full text-[0.7rem]
                           font-semibold tracking-widest uppercase mb-3">
            Client Reviews
          </span>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold leading-tight text-white">
            What Our Clients{" "}
            <span className="text-cyan-400">Say About Us</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto text-sm
                        md:text-[0.9375rem] leading-relaxed">
            Thousands of clients trust our immigration experts for visa
            approvals, consultation and smooth processing.
          </p>
        </motion.div>

        {/* SWIPER — passive autoplay, no framer-motion per slide */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={BREAKPOINTS}
          autoplay={AUTOPLAY_CONFIG}
          loop
          className="!pb-1"
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.name}>
              <div
                className="group relative bg-white/5 border border-white/8
                           hover:border-cyan-400/25 hover:bg-white/8
                           rounded-2xl p-5 h-full transition-colors duration-200"
              >
                <FaQuoteLeft className="text-cyan-500/20 text-xl mb-3" />

                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-xs" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  "{item.review}"
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br
                                  from-cyan-500 to-blue-600 flex items-center
                                  justify-center text-[0.7rem] font-bold text-white shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-[0.875rem] font-semibold text-white
                                  leading-none mb-0.5">
                      {item.name}
                    </p>
                    <p className="text-[0.7rem] text-slate-400">{item.country}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default memo(Testimonials);
