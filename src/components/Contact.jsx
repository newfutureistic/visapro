import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {

  return (

    <section className="relative py-28 bg-slate-950 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

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

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4 font-semibold">

            Contact Us

          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">

            Let’s Start Your <br />

            <span className="text-cyan-400">

              Immigration Journey

            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-8">

            Connect with our immigration experts for personalized
            consultation, visa assistance and application support.

          </p>

        </motion.div>

        {/* TOP CONTACT BOXES */}
        <div className="grid md:grid-cols-4 gap-6 mb-14">

          {/* EMAIL */}
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
              duration: 0.5,
            }}

            viewport={{
              once: true,
            }}

            whileHover={{
              y: -8,
            }}

            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 text-center hover:border-cyan-400/40 transition"
          >

            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mx-auto mb-5">

              <FaEnvelope />

            </div>

            <h3 className="text-2xl font-bold mb-3">

              Email Us

            </h3>

            <p className="text-gray-400 text-sm leading-7">

              info@visapro.com

            </p>

          </motion.div>

          {/* PHONE */}
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

            whileHover={{
              y: -8,
            }}

            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 text-center hover:border-cyan-400/40 transition"
          >

            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mx-auto mb-5">

              <FaPhoneAlt />

            </div>

            <h3 className="text-2xl font-bold mb-3">

              Call Us

            </h3>

            <p className="text-gray-400 text-sm leading-7">

              +91 98765 43210

            </p>

          </motion.div>

          {/* ADDRESS */}
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
              duration: 0.7,
            }}

            viewport={{
              once: true,
            }}

            whileHover={{
              y: -8,
            }}

            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 text-center hover:border-cyan-400/40 transition"
          >

            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mx-auto mb-5">

              <FaMapMarkerAlt />

            </div>

            <h3 className="text-2xl font-bold mb-3">

              Office

            </h3>

            <p className="text-gray-400 text-sm leading-7">

              Sector 15, Noida <br />
              Uttar Pradesh, India

            </p>

          </motion.div>

          {/* TIMING */}
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
              duration: 0.8,
            }}

            viewport={{
              once: true,
            }}

            whileHover={{
              y: -8,
            }}

            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 text-center hover:border-cyan-400/40 transition"
          >

            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mx-auto mb-5">

              <FaClock />

            </div>

            <h3 className="text-2xl font-bold mb-3">

              Working Hours

            </h3>

            <p className="text-gray-400 text-sm leading-7">

              Mon - Sat <br />
              10:00 AM - 7:00 PM

            </p>

          </motion.div>

        </div>

        {/* GOOGLE MAP */}
        <motion.div

          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="mb-14 overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48177679675!2d77.06889992366996!3d28.527280343559386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c35f4b4c8f%3A0x4b77f1d7e196ee83!2sNoida!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <motion.div

            initial={{
              opacity: 0,
              x: -60,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.6,
            }}

            viewport={{
              once: true,
            }}

            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-10"
          >

            <h3 className="text-4xl font-bold mb-8">

              Why Choose Us?

            </h3>

            <div className="space-y-8">

              <div className="border-b border-white/10 pb-6">

                <h4 className="text-2xl font-bold mb-3 text-cyan-400">

                  10K+ Successful Applications

                </h4>

                <p className="text-gray-400 leading-8">

                  We have helped thousands of clients achieve
                  their dream of studying, working and settling abroad.

                </p>

              </div>

              <div className="border-b border-white/10 pb-6">

                <h4 className="text-2xl font-bold mb-3 text-cyan-400">

                  Expert Visa Consultants

                </h4>

                <p className="text-gray-400 leading-8">

                  Our experienced team provides complete support
                  for documentation, filing and approvals.

                </p>

              </div>

              <div>

                <h4 className="text-2xl font-bold mb-3 text-cyan-400">

                  Fast & Transparent Process

                </h4>

                <p className="text-gray-400 leading-8">

                  We ensure clear communication and smooth processing
                  throughout your immigration journey.

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div

            initial={{
              opacity: 0,
              x: 60,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.6,
            }}

            viewport={{
              once: true,
            }}

            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-10"
          >

            <h3 className="text-4xl font-bold mb-8">

              Send Message

            </h3>

            <form className="space-y-6">

              <div>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                />

              </div>

              <div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                />

              </div>

              <div>

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                />

              </div>

              <div>

                <input
                  type="text"
                  placeholder="Visa Type"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                />

              </div>

              <div>

                <textarea
                  rows="5"
                  placeholder="Write Your Message..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 resize-none transition"
                ></textarea>

              </div>

              {/* BUTTON */}
              <motion.button

                whileHover={{
                  scale: 1.03,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                className="w-full bg-cyan-500 hover:bg-cyan-400 transition py-4 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-500/20"
              >

                Send Message

              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Contact;