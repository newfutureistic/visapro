import { memo } from "react";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight,
} from "react-icons/fa";

const USEFUL_LINKS = [
  "Home", "About", "What We Do", "Testimonials",
  "Programs", "Contact", "Privacy & Policy",
];

const CALCULATORS = [
  "CRS Calculator", "Canada 67 Points", "SINP Points",
  "BC Points", "Manitoba Points", "Nova Scotia Points", "Alberta Points",
];

const IMPORTANT_LINKS = [
  "Jobs for Nepali Citizens", "Jobs for Indian Citizens",
  "Success Stories", "Apply for Canada Visa",
  "Immigration Specialist Course", "TE Form",
];

const SOCIAL_ICONS = [FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter];

function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-cyan-500/5 rounded-full
                      blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-500/5 rounded-full
                      blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
                      py-12 md:py-14">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          {/* BRAND + CONTACT */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center
                              justify-center shrink-0">
                <span className="text-white font-black text-xs leading-none">V</span>
              </div>
              <span className="text-[1.1rem] font-black tracking-tight">
                Visa<span className="text-cyan-400">Pro</span>
              </span>
            </a>

            <p className="text-gray-400 text-xs leading-relaxed mb-5 max-w-[200px]">
              Trusted immigration consultancy helping thousands reach their
              global dreams since 2012.
            </p>

            <ul className="space-y-3">
              {[
                { icon: FaMapMarkerAlt, text: "Calgary, Alberta, Canada" },
                { icon: FaMapMarkerAlt, text: "Noida, UP, India" },
                { icon: FaEnvelope,     text: "info@visasimmigrationservices.com" },
                { icon: FaPhoneAlt,     text: "+91 98765 43210" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-white/5 flex items-center
                                  justify-center shrink-0 mt-0.5">
                    <Icon className="text-cyan-400 text-[9px]" />
                  </div>
                  <span className="text-gray-400 text-xs leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="text-[0.7rem] font-bold text-white uppercase tracking-widest mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2.5">
              {USEFUL_LINKS.map((item) => (
                <li key={item}>
                  <a href="#"
                    className="group flex items-center gap-1.5 text-gray-400
                               hover:text-cyan-400 transition-colors duration-150 text-xs">
                    <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100
                                             transition-opacity duration-150" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CALCULATORS */}
          <div>
            <h3 className="text-[0.7rem] font-bold text-white uppercase tracking-widest mb-4">
              Points Calculator
            </h3>
            <ul className="space-y-2.5">
              {CALCULATORS.map((item) => (
                <li key={item}>
                  <a href="#"
                    className="group flex items-center gap-1.5 text-gray-400
                               hover:text-cyan-400 transition-colors duration-150 text-xs">
                    <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100
                                             transition-opacity duration-150" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* IMPORTANT LINKS + SOCIAL */}
          <div>
            <h3 className="text-[0.7rem] font-bold text-white uppercase tracking-widest mb-4">
              Important Links
            </h3>
            <ul className="space-y-2.5 mb-6">
              {IMPORTANT_LINKS.map((item) => (
                <li key={item}>
                  <a href="#"
                    className="group flex items-center gap-1.5 text-gray-400
                               hover:text-cyan-400 transition-colors duration-150 text-xs">
                    <FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100
                                             transition-opacity duration-150" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              {SOCIAL_ICONS.map((Icon, i) => (
                <button
                  key={i}
                  aria-label="Social link"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8
                             flex items-center justify-center text-gray-400
                             hover:bg-cyan-500 hover:border-cyan-500 hover:text-white
                             transition-colors duration-150"
                >
                  <Icon className="text-[10px]" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/8 mt-10 pt-6 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2026 Visas Immigration Services. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors
                                   duration-150 text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors
                                   duration-150 text-xs">
              Terms &amp; Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default memo(Footer);
