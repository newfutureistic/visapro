
import { motion } from "framer-motion";

import { FaStar } from "react-icons/fa";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
} from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Aarav Sharma",

    country: "Canada PR",

    review:
      "The entire visa process was smooth and professional. Their team guided me at every step and helped me secure my PR successfully.",
  },

  {
    name: "Sophia Williams",

    country: "Australia Work Permit",

    review:
      "Amazing experience! The consultants were highly knowledgeable and the documentation support was exceptional.",
  },

  {
    name: "Rahul Mehta",

    country: "Germany Student Visa",

    review:
      "I received my student visa much faster than expected. Their process and communication were excellent throughout.",
  },

  {
    name: "Emma Johnson",

    country: "UK Work Visa",

    review:
      "Their expert guidance made my visa process incredibly easy and stress-free. Highly recommended!",
  },

  {
    name: "Rohan Verma",

    country: "Australia PR",

    review:
      "Professional service with fast processing and clear communication. Truly impressed with their support.",
  },
];

function Testimonials() {

  return (

    <section className="relative py-28 bg-slate-950 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
          }}

          viewport={{
            once: true,
          }}

          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">

            Client Reviews

          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">

            What Our Clients <br />

            <span className="text-cyan-400">
              Say About Us
            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-8">

            Thousands of clients trust our immigration experts
            for visa approvals, consultation and smooth processing.

          </p>
        </motion.div>

        {/* SWIPER */}
        <Swiper

          modules={[Autoplay]}

          spaceBetween={30}

          slidesPerView={1}

          breakpoints={{
            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          loop={true}
        >

          {testimonials.map((item, index) => (

            <SwiperSlide key={index}>

              <motion.div

                initial={{
                  opacity: 0,
                  y: 60,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}

                viewport={{
                  once: true,
                }}

                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}

                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-cyan-400/40 transition duration-300 h-full"
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />

                {/* STARS */}
                <div className="relative z-10 flex gap-1 text-cyan-400 mb-6">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                {/* REVIEW */}
                <p className="relative z-10 text-gray-300 leading-8 mb-8">

                  “{item.review}”

                </p>

                {/* USER */}
                <div className="relative z-10 flex items-center gap-4">

                  {/* AVATAR */}
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-xl font-bold text-cyan-400">

                    {item.name.charAt(0)}

                  </div>

                  <div>

                    <h4 className="font-bold text-lg">
                      {item.name}
                    </h4>

                    <p className="text-gray-400 text-sm">
                      {item.country}
                    </p>

                  </div>

                </div>

              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
