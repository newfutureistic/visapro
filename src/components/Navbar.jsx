import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn,
  FaTwitter, FaEnvelope, FaBars, FaTimes, FaChevronRight,
} from "react-icons/fa";
import visaLogo from "../assets/visa.jpg";
import maraLogo from "../assets/mara.jpg";
import icLogo from "../assets/ic.jpg";

const NAV_LINKS = ["Home", "About", "Services", "Testimonials", "Countries", "Contact"];

const CERT_LOGOS = [
  { src: visaLogo, label: "VISAS" },
  { src: maraLogo, label: "MARA" },
  { src: icLogo, label: "ICCRC" },
];

const SOCIALS = [FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram];

/* Framer variants — only for the slide-down mobile menu */
const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.2, ease: "easeOut" } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.18, ease: "easeIn" } },
};

const menuItemVariants = {
  hidden:  { opacity: 0, x: -10 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.04, duration: 0.18 } }),
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 8);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggle = useCallback(() => setMenuOpen((v) => !v), []);
  const close  = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="hidden sm:block bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <a
            href="mailto:info@visasimmigrationservices.com"
            className="flex items-center gap-1.5 text-xs font-medium opacity-90 hover:opacity-100 transition-opacity"
          >
            <FaEnvelope className="text-[10px]" />
            info@visasimmigrationservices.com
          </a>
          <div className="flex items-center gap-3">
            {SOCIALS.map((Icon, i) => (
              <button key={i} aria-label="Social link"
                className="opacity-70 hover:opacity-100 transition-opacity">
                <Icon className="text-xs" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <header
        className={`sticky top-0 z-50 bg-white border-b transition-shadow duration-300 ${
          scrolled ? "shadow-md border-transparent" : "border-gray-100 shadow-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-4">

            {/* LOGO */}
            <a href="/" className="flex items-center gap-2 shrink-0 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-sm leading-none">V</span>
              </div>
              <span className="text-[1.25rem] font-black tracking-tight text-slate-900 leading-none">
                Visa<span className="text-blue-600">Pro</span>
              </span>
            </a>

            {/* CERT LOGOS */}
            <div className="hidden xl:flex items-center gap-4">
              {CERT_LOGOS.map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <div className="w-7 h-7 rounded-full border border-gray-200 overflow-hidden bg-white shadow-sm">
                    <img
                      src={item.src}
                      alt={item.label}
                      width={28} height={28}
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] text-gray-400 font-semibold">{item.label}</span>
                </div>
              ))}
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm font-medium text-gray-600 hover:text-blue-600
                             transition-colors duration-150 group"
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 rounded-full
                                   transition-[width] duration-200 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA + HAMBURGER */}
            <div className="flex items-center gap-2 ml-2">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700
                           active:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold
                           transition-colors duration-150 shadow-sm"
              >
                Get Started
                <FaChevronRight className="text-[9px]" />
              </a>

              <button
                onClick={toggle}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg
                           text-gray-700 hover:bg-gray-100 active:bg-gray-200
                           transition-colors duration-150"
              >
                {menuOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
              </button>
            </div>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-0.5">
                {NAV_LINKS.map((item, i) => (
                  <motion.a
                    key={item}
                    custom={i}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    href={`#${item.toLowerCase()}`}
                    onClick={close}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg
                               text-sm font-medium text-gray-700 hover:bg-blue-50
                               hover:text-blue-600 transition-colors duration-150"
                  >
                    {item}
                    <FaChevronRight className="text-[9px] text-gray-300" />
                  </motion.a>
                ))}
                <div className="pt-3 mt-1 border-t border-gray-100">
                  <a
                    href="#contact"
                    onClick={close}
                    className="flex items-center justify-center gap-1.5 w-full bg-blue-600
                               hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm
                               font-semibold transition-colors duration-150"
                  >
                    Get Started <FaChevronRight className="text-[9px]" />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
