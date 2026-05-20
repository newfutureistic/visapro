import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="relative bg-[#111827] overflow-hidden text-white">

      {/* TOP GRADIENT LINE */}
      <div className="h-[4px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 w-full" />

      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        {/* FOOTER GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* CONTACT */}
          <div>

            <h2 className="text-3xl font-bold mb-8">

              Contact Us

            </h2>

            <div className="space-y-7">

              {/* CANADA */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h3 className="font-bold text-lg mb-1">

                    CANADA OFFICE

                  </h3>

                  <p className="text-gray-400 leading-7">

                    3805 F, Marlborough Drive, NE,
                    Calgary, Alberta, T2A 5M4, CANADA

                  </p>

                </div>

              </div>

              {/* INDIA */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h3 className="font-bold text-lg mb-1">

                    NOIDA OFFICE

                  </h3>

                  <p className="text-gray-400 leading-7">

                    B-8, 3rd Floor, Sector-2,
                    Near Sector 15 Metro Station,
                    Noida, UP-201301

                  </p>

                </div>

              </div>

              {/* NEPAL */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h3 className="font-bold text-lg mb-1">

                    Nepal OFFICE

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Behind Civil Mall, Sundhara,
                    Kathmandu <br />

                    Landline no. +977-153631337

                  </p>

                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">

                  <FaEnvelope />

                </div>

                <p className="text-gray-300">

                  info@visasimmigrationservices.com

                </p>

              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">

                  <FaPhoneAlt />

                </div>

                <p className="text-gray-300">

                  +91 98765 43210

                </p>

              </div>

            </div>

          </div>

          {/* USEFUL LINKS */}
          <div>

            <h2 className="text-3xl font-bold mb-8">

              Useful Links

            </h2>

            <ul className="space-y-5">

              {[
                "Home",
                "About",
                "What We Do",
                "Testimonials",
                "Programs",
                "Contact",
                "Privacy & Policy",
              ].map((item, index) => (

                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition duration-300 cursor-pointer group"
                >

                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition duration-300" />

                  {item}

                </li>

              ))}

            </ul>

          </div>

          {/* POINTS CALCULATOR */}
          <div>

            <h2 className="text-3xl font-bold mb-8">

              Points Calculator

            </h2>

            <ul className="space-y-5">

              {[
                "CRS Calculator",
                "Canada 67 Points Calculator",
                "SINP Points Calculator",
                "BC Points Calculator",
                "Manitoba Points Calculator",
                "Nova Scotia Points Calculator",
                "Alberta Points Calculator",
                "Ontario Points Calculator",
                "Quebec Points Calculator",
              ].map((item, index) => (

                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition duration-300 cursor-pointer group"
                >

                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition duration-300" />

                  {item}

                </li>

              ))}

            </ul>

          </div>

          {/* IMPORTANT LINKS */}
          <div>

            <h2 className="text-3xl font-bold mb-8">

              Important Links

            </h2>

            <ul className="space-y-5">

              {[
                "Jobs for Nepali Citizen",
                "Jobs for Indian Citizen",
                "Success Stories",
                "Apply Now For Canada Visa",
                "Immigration Specialist Course",
                "TE Form",
              ].map((item, index) => (

                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition duration-300 cursor-pointer group"
                >

                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition duration-300" />

                  {item}

                </li>

              ))}

            </ul>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-10">

              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition duration-300 cursor-pointer">

                <FaFacebookF />

              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition duration-300 cursor-pointer">

                <FaInstagram />

              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition duration-300 cursor-pointer">

                <FaLinkedinIn />

              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition duration-300 cursor-pointer">

                <FaTwitter />

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-center">

            All Rights Reserved. Copyright © 2026
            Visas Immigration Services

          </p>

          <div className="flex gap-8">

            <p className="text-gray-500 hover:text-cyan-400 transition cursor-pointer">

              Privacy Policy

            </p>

            <p className="text-gray-500 hover:text-cyan-400 transition cursor-pointer">

              Terms & Conditions

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;