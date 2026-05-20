import { motion } from "framer-motion";

import {
  FaUserCheck,
  FaComments,
  FaFileSignature,
  FaPlaneDeparture,
  FaHandshake,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUserCheck />,
    title: "Profile Evaluation",
    desc: "Evaluate your profile before applying to increase your immigration success chances.",
    color: "from-blue-600 to-cyan-500",
  },

  {
    icon: <FaComments />,
    title: "Expert Consultation",
    desc: "Get complete guidance and solutions for all your immigration doubts and queries.",
    color: "from-cyan-500 to-blue-500",
  },

  {
    icon: <FaFileSignature />,
    title: "Application Processing",
    desc: "Step-by-step application processing with complete transparency and support.",
    color: "from-indigo-500 to-blue-600",
  },

  {
    icon: <FaPlaneDeparture />,
    title: "Travel Assistance",
    desc: "Complete support for travel planning, documentation and settlement preparation.",
    color: "from-sky-500 to-cyan-500",
  },

  {
    icon: <FaHandshake />,
    title: "Settlement Support",
    desc: "We help you settle smoothly in your new destination country with confidence.",
    color: "from-blue-700 to-indigo-600",
  },

  {
    icon: <FaUsers />,
    title: "One To One Assistance",
    desc: "Dedicated support and personalized immigration assistance for every client.",
    color: "from-cyan-400 to-blue-600",
  },
];

function Services() {

  return (

    <section className="relative py-32 bg-[#f8fbff] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADING */}
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

          className="text-center mb-24"
        >

          <div className="inline-block bg-blue-100 text-blue-700 px-7 py-3 rounded-full text-sm font-bold tracking-[3px] uppercase mb-6 shadow-md">

            What We Do

          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">

            Immigration Services <br />

            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">

              Designed For You

            </span>

          </h2>

          <p className="text-gray-600 mt-8 max-w-3xl mx-auto text-lg leading-9">

            We provide professional immigration consultation,
            documentation support and visa processing services
            for global destinations.

          </p>

        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-[40px] overflow-hidden bg-white shadow-2xl">

          {services.map((service, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 70,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -10,
              }}

              className="group relative border border-gray-100 min-h-[380px] flex flex-col justify-between overflow-hidden"
            >

              {/* HOVER BG */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-blue-50 to-cyan-50"></div>

              {/* TOP LINE */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>

              {/* CONTENT */}
              <div className="relative z-10 p-10 text-center flex flex-col items-center">

                {/* ICON */}
                <motion.div

                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}

                  className={`w-24 h-24 rounded-[30px] bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-5xl shadow-2xl mb-10`}
                >

                  {service.icon}

                </motion.div>

                {/* TITLE */}
                <h3 className="text-3xl font-black text-slate-900 mb-6">

                  {service.title}

                </h3>

                {/* DESC */}
                <p className="text-gray-600 leading-9 text-lg">

                  {service.desc}

                </p>

              </div>

              {/* BUTTON */}
              <div className="relative z-10 px-10 pb-10">

                <motion.button

                  whileHover={{
                    scale: 1.03,
                  }}

                  whileTap={{
                    scale: 0.95,
                  }}

                  className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl`}
                >

                  Learn More

                  <FaArrowRight />

                </motion.button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;