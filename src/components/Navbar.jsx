import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

/* LOGOS */
import visaLogo from "../assets/visa.jpg";
import maraLogo from "../assets/mara.jpg";
import icLogo from "../assets/ic.jpg";

function Navbar() {
  return (
    <>
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-6 h-[42px] flex items-center justify-between">

          {/* EMAIL */}
          <div className="flex items-center gap-2 text-sm font-medium">

            <FaEnvelope className="text-[13px]" />

            <p className="hover:text-cyan-200 transition cursor-pointer">
              info@visasimmigrationservices.com
            </p>

          </div>

          {/* SOCIAL */}
          <div className="hidden md:flex items-center gap-5 text-sm">

            <FaLinkedinIn className="cursor-pointer hover:text-cyan-200 transition" />

            <FaTwitter className="cursor-pointer hover:text-cyan-200 transition" />

            <FaFacebookF className="cursor-pointer hover:text-cyan-200 transition" />

            <FaInstagram className="cursor-pointer hover:text-cyan-200 transition" />

            <FaYoutube className="cursor-pointer hover:text-cyan-200 transition" />

          </div>

        </div>

      </div>

      {/* MAIN NAVBAR */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">

<div className="max-w-[1500px] mx-auto px-10">
<div className="h-[110px] flex items-center justify-between">
            {/* LEFT */}
<div className="flex items-center gap-16">
              {/* TEXT LOGO */}
              <motion.div

                whileHover={{
                  scale: 1.02,
                }}

                className="cursor-pointer"
              >

                <h1 className="text-[60px] leading-none font-black tracking-[-2px] text-[#0b132b]">

                  Visa

                  <span className="text-cyan-500">
                    Pro
                  </span>

                </h1>

              </motion.div>

              {/* CERTIFIED LOGOS */}
<div className="hidden xl:flex items-center gap-8 ml-4">
                {/* VISA */}
                <div className="flex flex-col items-center">

                  <div className="w-[70px] h-[70px] rounded-full border border-gray-200 shadow-md overflow-hidden bg-white">

                    <img
                      src={visaLogo}
                      alt="Visa"
                      className="w-full h-full object-cover"
                    />

                  </div>

                  <span className="text-[11px] text-gray-500 mt-2">
                    VISAS
                  </span>

                </div>

                {/* MARA */}
                <div className="flex flex-col items-center">

                  <div className="w-[70px] h-[70px] rounded-full border border-gray-200 shadow-md overflow-hidden bg-white">

                    <img
                      src={maraLogo}
                      alt="Mara"
                      className="w-full h-full object-contain p-1"
                    />

                  </div>

                  <span className="text-[11px] text-gray-500 mt-2">
                    Registered
                  </span>

                </div>

                {/* ICCRC */}
                <div className="flex flex-col items-center">

                  <div className="w-[70px] h-[70px] rounded-full border border-gray-200 shadow-md overflow-hidden bg-white">

                    <img
                      src={icLogo}
                      alt="ICCRC"
                      className="w-full h-full object-contain p-1"
                    />

                  </div>

                  <span className="text-[11px] text-gray-500 mt-2">
                    Certified
                  </span>

                </div>

              </div>

            </div>

            {/* CENTER NAV */}
<nav className="hidden lg:flex items-center gap-16 ml-16">
              {[
                "Home",
                "About",
                "Services",
                "Testimonials",
                "Demand",
                "Contact",
              ].map((item, index) => (

                <motion.a

                  key={index}

                  href="/"

                  whileHover={{
                    y: -2,
                  }}

                  className={`relative text-[17px] tracking-wide font-semibold transition duration-300 whitespace-nowrap ${
                    item === "About"
                      ? "text-cyan-500"
                      : "text-slate-800 hover:text-cyan-500"
                  }`}
                >

                  {item}

                  {item === "About" && (

                    <span className="absolute left-0 -bottom-3 w-full h-[3px] rounded-full bg-cyan-500"></span>

                  )}

                </motion.a>

              ))}

            </nav>

            {/* RIGHT BUTTON */}
<div className="flex items-center gap-8 ml-10">
              <motion.button

                whileHover={{
                  scale: 1.03,
                }}

                whileTap={{
                  scale: 0.96,
                }}

                className="hidden md:flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white px-7 py-4 rounded-2xl shadow-xl transition duration-300"
              >

                {/* ICON */}
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl">

                  ↗

                </div>

                {/* TEXT */}
                <div className="leading-tight text-left">

                  <h4 className="font-bold text-[17px]">
                    Pay Now
                  </h4>

                  <p className="text-[10px] uppercase tracking-[1px] text-white/70">

                    Secured By Razorpay

                  </p>

                </div>

              </motion.button>

              {/* MOBILE MENU */}
              <button className="lg:hidden text-3xl text-slate-800">

                <FaBars />

              </button>

            </div>

          </div>

        </div>

      </header>
    </>
  );
}

export default Navbar;