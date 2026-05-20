import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaSmile,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";

/* FLAGS */
import canadaFlag from "../assets/canada.jpg";
import germanyFlag from "../assets/german.jpg";
import australiaFlag from "../assets/australia.jpg";
import hongkongFlag from "../assets/hong.jpg";
import ontarioFlag from "../assets/m.jpg";
import newbrunswickFlag from "../assets/n.jpg";

const stats = [
  {
    icon: <FaBriefcase />,
    number: "10,000+",
    title: "Application Experience",
  },

  {
    icon: <FaSmile />,
    number: "9+",
    title: "Years Of Experience",
  },

  {
    icon: <FaUserTie />,
    number: "150+",
    title: "Immigration Staffs",
  },

  {
    icon: <FaUsers />,
    number: "4.9+",
    title: "Clients Rating",
  },
];

const flags = [
  {
    img: australiaFlag,
    name: "Australia",
  },

  {
    img: germanyFlag,
    name: "Germany",
  },

  {
    img: hongkongFlag,
    name: "Hong Kong",
  },

  {
    img: canadaFlag,
    name: "Canada",
  },

  {
    img: ontarioFlag,
    name: "Ontario",
  },

  {
    img: newbrunswickFlag,
    name: "New Brunswick",
  },
];

function Stats() {

  return (

    <section className="relative py-28 bg-[#f5f7fc] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

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

          <div className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-bold tracking-[3px] uppercase mb-6">

            Our Progress

          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">

            Trusted By Thousands <br />

            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">

              Worldwide

            </span>

          </h2>

        </motion.div>

        {/* STATS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div

              key={index}

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

              className="group relative bg-white rounded-[35px] p-10 shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition duration-500"
            >

              {/* HOVER EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 to-cyan-50" />

              {/* ICON */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-4xl mx-auto shadow-[0_15px_40px_rgba(37,99,235,0.35)] mb-8 border-[8px] border-white">

                {item.icon}

              </div>

              {/* NUMBER */}
              <h3 className="relative z-10 text-center text-5xl font-black text-slate-900 mb-4">

                {item.number}

              </h3>

              {/* TITLE */}
              <p className="relative z-10 text-center text-gray-600 text-lg font-medium">

                {item.title}

              </p>

              {/* BOTTOM BAR */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-cyan-500" />

            </motion.div>

          ))}

        </div>

        {/* FLAGS SECTION */}
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

          className="mt-28"
        >

          <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-10 md:p-14">

            {/* TITLE */}
            <div className="text-center mb-14">

              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">

                Global Immigration Destinations

              </h3>

              <p className="text-gray-600 text-lg max-w-2xl mx-auto">

                We proudly provide immigration and visa consultation
                services for the world’s top countries.

              </p>

            </div>

            {/* FLAGS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

              {flags.map((flag, index) => (

                <motion.div

                  key={index}

                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}

                  className="group flex flex-col items-center"
                >

                  {/* FLAG BOX */}
                  <div className="w-[140px] h-[110px] bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[28px] flex items-center justify-center shadow-lg border border-gray-100 group-hover:shadow-2xl transition duration-500 overflow-hidden">

                    <img
                      src={flag.img}
                      alt={flag.name}
                      className="w-[80px] h-[80px] object-contain group-hover:scale-110 transition duration-500"
                    />

                  </div>

                  {/* COUNTRY NAME */}
                  <h4 className="mt-5 text-lg font-bold text-slate-800">

                    {flag.name}

                  </h4>

                  {/* GLOW DOT */}
                  <div className="w-3 h-3 rounded-full bg-blue-500 mt-3 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Stats;