import { motion } from "framer-motion";

import {
  FaUserTie,
  FaSearch,
  FaFileAlt,
  FaPaperPlane,
  FaPlaneDeparture,
  FaCheckCircle,
} from "react-icons/fa";

const processData = [
  {
    id: "01",
    icon: <FaUserTie />,
    title: "Free Consultation",
    desc: "Our experts analyze your profile and suggest the best immigration pathway for success.",
    color: "from-blue-600 to-cyan-500",
  },

  {
    id: "02",
    icon: <FaSearch />,
    title: "Profile Evaluation",
    desc: "Detailed eligibility assessment with documentation and visa success planning.",
    color: "from-cyan-500 to-blue-500",
  },

  {
    id: "03",
    icon: <FaFileAlt />,
    title: "Documentation",
    desc: "Complete support for preparing accurate documents and legal paperwork.",
    color: "from-indigo-500 to-blue-600",
  },

  {
    id: "04",
    icon: <FaPaperPlane />,
    title: "Visa Filing",
    desc: "Professional application filing with fast and transparent processing.",
    color: "from-sky-500 to-cyan-500",
  },

  {
    id: "05",
    icon: <FaPlaneDeparture />,
    title: "Approval & Fly",
    desc: "Receive your visa approval and start your international journey confidently.",
    color: "from-blue-700 to-indigo-600",
  },
];

function Process() {

  return (

    <section className="relative py-32 bg-[#f7fbff] overflow-hidden">

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

          {/* TOP BADGE */}
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-7 py-3 rounded-full shadow-md mb-7">

            <FaCheckCircle />

            <span className="uppercase tracking-[3px] text-sm font-bold">

              Process Timeline

            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">

            Your Journey To <br />

            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">

              Global Success

            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 max-w-3xl mx-auto mt-8 text-lg leading-9">

            Our streamlined immigration process ensures a smooth,
            transparent and stress-free experience from profile
            evaluation to visa approval.

          </p>

        </motion.div>

        {/* PROCESS GRID */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 relative">

          {processData.map((item, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 80,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -15,
              }}

              className="group relative"
            >

              {/* CONNECTOR LINE */}
              {index !== processData.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[80%] w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 z-0"></div>
              )}

              {/* CARD */}
              <div className="relative z-10 bg-white rounded-[35px] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">

                {/* TOP BAR */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

                {/* HOVER BG */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-blue-50 to-cyan-50 transition duration-500"></div>

                {/* CONTENT */}
                <div className="relative z-10 p-8 text-center">

                  {/* STEP NUMBER */}
                  <div className="absolute top-5 right-5 text-6xl font-black text-gray-100">

                    {item.id}

                  </div>

                  {/* ICON */}
                  <motion.div

                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}

                    transition={{
                      type: "spring",
                      stiffness: 200,
                    }}

                    className={`w-24 h-24 mx-auto rounded-[30px] bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-5xl shadow-2xl mb-8`}
                  >

                    {item.icon}

                  </motion.div>

                  {/* TITLE */}
                  <h3 className="text-3xl font-black text-slate-900 mb-5 leading-tight">

                    {item.title}

                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 leading-8 text-lg">

                    {item.desc}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* BOTTOM STATS */}
        <div className="grid md:grid-cols-4 gap-8 mt-28">

          {[
            {
              number: "10K+",
              text: "Visa Applications",
            },

            {
              number: "98%",
              text: "Success Rate",
            },

            {
              number: "15+",
              text: "Years Experience",
            },

            {
              number: "50+",
              text: "Countries Covered",
            },
          ].map((item, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -10,
              }}

              className="bg-white rounded-[30px] border border-gray-100 shadow-xl p-10 text-center hover:shadow-2xl transition duration-500"
            >

              <h3 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">

                {item.number}

              </h3>

              <p className="text-gray-600 text-lg font-medium">

                {item.text}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;