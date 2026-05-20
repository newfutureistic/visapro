import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";

import {
  FaCheckCircle,
  FaGlobeAmericas,
  FaPassport,
  FaUsers,
} from "react-icons/fa";

function About() {

  return (

    <section className="relative py-28 bg-[#f8fbff] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

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

          <span className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-bold tracking-[3px] uppercase mb-6">

            About Us

          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">

            Welcome To <br />

            <span className="text-blue-600">

              Visa Immigration Services

            </span>

          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-8">

            We provide trusted immigration and visa consultancy
            services for students, professionals and families
            who dream to move abroad successfully.

          </p>

        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div

            initial={{
              opacity: 0,
              x: -80,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            viewport={{
              once: true,
            }}

            className="relative"
          >

            {/* IMAGE BOX */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl group">

              {/* IMAGE */}
           <img
  src={aboutImg}
  alt="About Immigration"
  className="w-full h-[650px] object-cover group-hover:scale-105 transition duration-700"
/>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* EXPERIENCE CARD */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-lg p-6 rounded-3xl shadow-xl">

                <h3 className="text-4xl font-extrabold text-blue-600 mb-1">

                  10+

                </h3>

                <p className="text-slate-700 font-medium">

                  Years Of Experience

                </p>

              </div>

            </div>

            {/* FLOATING CARD */}
            <motion.div

              animate={{
                y: [0, -15, 0],
              }}

              transition={{
                repeat: Infinity,
                duration: 4,
              }}

              className="absolute -top-8 -right-8 bg-white shadow-2xl rounded-3xl px-8 py-6 border border-gray-100"
            >

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-3xl">

                  <FaPassport />

                </div>

                <div>

                  <h3 className="text-3xl font-bold text-slate-900">

                    15K+

                  </h3>

                  <p className="text-gray-600">

                    Visa Approved

                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div

            initial={{
              opacity: 0,
              x: 80,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            viewport={{
              once: true,
            }}

          >

            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight mb-8">

              Your Trusted Partner For <br />

              Global Immigration Success

            </h3>

            <p className="text-gray-600 leading-9 text-lg mb-10">

              We specialize in providing immigration solutions
              for Canada, Australia, UK, Germany and many
              other countries. Our expert consultants help
              with student visas, PR applications, work permits,
              visitor visas and family sponsorships with
              complete documentation support.

            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">

              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">

                <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-3xl mb-5">

                  <FaGlobeAmericas />

                </div>

                <h4 className="text-2xl font-bold text-slate-900 mb-3">

                  Global Reach

                </h4>

                <p className="text-gray-600 leading-7">

                  Immigration services for top destinations worldwide.

                </p>

              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-3xl mb-5">

                  <FaUsers />

                </div>

                <h4 className="text-2xl font-bold text-slate-900 mb-3">

                  Expert Team

                </h4>

                <p className="text-gray-600 leading-7">

                  Experienced consultants for visa success guidance.

                </p>

              </div>

            </div>

            {/* CHECK LIST */}
            <div className="space-y-5 mb-10">

              {[
                "Trusted Immigration Consultancy",
                "Fast Visa Processing Support",
                "100% Professional Guidance",
                "Affordable Service Packages",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">

                    <FaCheckCircle />

                  </div>

                  <p className="text-lg text-slate-700 font-medium">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition duration-300 px-8 py-4 rounded-2xl text-white font-bold shadow-xl">

                Explore Services

              </button>

              <button className="border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition duration-300 px-8 py-4 rounded-2xl text-slate-800 font-bold">

                Contact Us

              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;