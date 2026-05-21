import { memo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaArrowRight, FaCheckCircle, FaShieldAlt,
} from "react-icons/fa";

/* ── constants ─────────────────────────────────────────────── */

const INFO_CARDS = [
  {
    icon: FaMapMarkerAlt,
    iconBg: "bg-blue-100 text-blue-600",
    title: "Our Address",
    lines: [
      { label: "Canada Office:", text: "3805 F, Marlborough Drive, NE, Calgary, Alberta, T2A 5M4, CANADA" },
      { label: "Noida Branch:", text: "B-8, 3rd floor, Sector-2, near sector 15 metro station, Noida, UP-201301" },
      { label: "Nepal Office:", text: "Behind Civil Mall, Sundhara, Kathmandu  Landline no. +977-153631337" },
    ],
  },
  {
    icon: FaEnvelope,
    iconBg: "bg-blue-100 text-blue-600",
    title: "Email Us",
    lines: [
      { label: "", text: "info@visasimmigrationservices.com" },
    ],
  },
  {
    icon: FaPhoneAlt,
    iconBg: "bg-blue-100 text-blue-600",
    title: "Call Us",
    lines: [
      { label: "", text: "+91 98765 43210" },
      { label: "", text: "+977-153631337" },
    ],
  },
];

/* Noida Sector-15 Metro embed */
const MAP_SRC =
  "https://maps.google.com/maps?q=Sector+15+Metro+Station,+Noida,+Uttar+Pradesh+201301&t=&z=15&ie=UTF8&iwloc=&output=embed";

const VISA_TYPES = [
  "Student Visa", "Work Permit", "PR Application",
  "Visitor Visa", "Family Sponsorship", "Other",
];

const EMPTY = { name: "", email: "", phone: "", message: "", visaType: "", robot: false };

const inputCls =
  "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 " +
  "focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-800 " +
  "placeholder-gray-400 bg-white transition-[border-color,box-shadow] duration-150";

/* ── animation variants ─────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── reCAPTCHA-style widget ─────────────────────────────────── */
function RecaptchaWidget({ checked, onChange }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 border border-gray-200
                    rounded-lg px-4 py-3 select-none">
      <label className="flex items-center gap-3 cursor-pointer">
        <div
          onClick={onChange}
          className={`w-5 h-5 rounded border-2 flex items-center justify-center
                      transition-colors duration-150 cursor-pointer flex-shrink-0
                      ${checked
                        ? "bg-blue-600 border-blue-600"
                        : "bg-white border-gray-400 hover:border-blue-400"
                      }`}
        >
          {checked && (
            <svg className="w-3 h-3 text-white" viewBox="0 0 12 10" fill="none">
              <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <span className="text-sm text-gray-700 font-medium">I'm not a robot</span>
      </label>

      {/* reCAPTCHA brand block */}
      <div className="flex flex-col items-center gap-0.5 ml-4">
        <div className="w-10 h-10">
          {/* reCAPTCHA logo */}
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" fill="#4A90D9" />
            <path d="M32 12C21 12 12 21 12 32s9 20 20 20 20-9 20-20S43 12 32 12z"
                  fill="white" fillOpacity="0.15"/>
            <path d="M32 18l8 6v8l-8 6-8-6v-8l8-6z" fill="white"/>
            <path d="M22 32l4 4 8-8" stroke="#4A90D9" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-[9px] text-gray-500 font-semibold tracking-wide">reCAPTCHA</span>
        <span className="text-[7.5px] text-gray-400 leading-tight text-center">
          Privacy - Terms
        </span>
      </div>
    </div>
  );
}

/* ── main component ─────────────────────────────────────────── */
function Contact() {
  const [form, setForm]           = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const toggleRobot = useCallback(() => {
    setForm((prev) => ({ ...prev, robot: !prev.robot }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!form.robot) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(EMPTY);
      setTimeout(() => setSubmitted(false), 5000);
    }, 900);
  }, [form.robot]);

  return (
    <section id="contact" className="py-14 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADING ─────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600
                           border border-blue-100 px-3 py-1 rounded-full text-[0.7rem]
                           font-semibold tracking-widest uppercase mb-3">
            <FaShieldAlt className="text-[9px]" />
            Reach Out
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-black text-slate-900
                         leading-tight">
            Contact{" "}
            <span className="gradient-text">Us</span>
          </h2>
          <p className="text-gray-500 mt-2.5 max-w-lg mx-auto text-sm
                        md:text-[0.9375rem] leading-relaxed">
            Our immigration experts are ready to guide you. Fill out the form
            or reach us directly at any of our offices.
          </p>
        </motion.div>

        {/* ── TOP INFO CARDS ───────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
        >
          {INFO_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm
                           p-5 flex flex-col items-center text-center
                           hover:shadow-md transition-shadow duration-200"
              >
                {/* Circle icon */}
                <div className={`w-12 h-12 rounded-full ${card.iconBg} border-2
                                 border-blue-100 flex items-center justify-center mb-3`}>
                  <Icon className="text-lg" />
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-2">{card.title}</h3>

                <div className="space-y-1">
                  {card.lines.map((line, i) => (
                    <p key={i} className="text-xs text-gray-600 leading-relaxed">
                      {line.label && (
                        <span className="font-bold text-slate-800">{line.label}</span>
                      )}{" "}
                      {line.text}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── MAP + FORM ───────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* GOOGLE MAP */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl overflow-hidden shadow-sm border border-gray-100
                       min-h-[380px] lg:min-h-[500px]"
          >
            <iframe
              title="Visa Pro Office Location"
              src={MAP_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm
                       p-6 md:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full
                              py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center
                                justify-center mb-5 shadow-sm">
                  <FaCheckCircle className="text-green-500 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                  Thank you for reaching out. Our team will contact you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">

                {/* Row 1: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Visa Type */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone No"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <select
                      name="visaType"
                      value={form.visaType}
                      onChange={handleChange}
                      className={inputCls}
                    >
                      <option value="">Visa Type</option>
                      {VISA_TYPES.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  className={`${inputCls} resize-none`}
                />

                {/* reCAPTCHA widget */}
                <RecaptchaWidget checked={form.robot} onChange={toggleRobot} />

                {/* reCAPTCHA notice */}
                {!form.robot && form.name && (
                  <p className="text-[11px] text-red-500 -mt-1">
                    Please confirm you're not a robot.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || !form.robot}
                  className="w-full flex items-center justify-center gap-2
                             bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                             disabled:opacity-50 disabled:cursor-not-allowed
                             text-white px-6 py-3.5 rounded-lg text-sm font-bold
                             tracking-wide transition-colors duration-150 shadow-sm"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10"
                          stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaArrowRight className="text-[11px]" />
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default memo(Contact);
