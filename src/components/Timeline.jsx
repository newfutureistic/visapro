
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2012",
    title: "Company Founded",
    desc: "Started with a mission to simplify global immigration and visa services.",
  },

  {
    year: "2015",
    title: "Global Expansion",
    desc: "Expanded our immigration services across multiple countries worldwide.",
  },

  {
    year: "2018",
    title: "10K+ Clients",
    desc: "Successfully helped thousands of students and professionals settle abroad.",
  },

  {
    year: "2024",
    title: "Industry Leader",
    desc: "Recognized as one of the most trusted immigration consultancies globally.",
  },
];

function Timeline() {

  return (

    <section className="relative py-32 bg-slate-900 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.div

          initial={{
            opacity: 0,
            y: 60,
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

          className="text-center mb-24"
        >

          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">

            Our Journey

          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">

            Milestones That <br />

            <span className="text-cyan-400">
              Define Us
            </span>

          </h2>

        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">

          {/* CENTER LINE */}
          <motion.div

            initial={{
              height: 0,
            }}

            whileInView={{
              height: "100%",
            }}

            transition={{
              duration: 2,
            }}

            viewport={{
              once: true,
            }}

            className="absolute left-1/2 top-0 w-[4px] bg-cyan-400/40 -translate-x-1/2 rounded-full"
          />

          {/* TIMELINE ITEMS */}
          <div className="space-y-24">

            {timelineData.map((item, index) => (

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

                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}

                viewport={{
                  once: true,
                }}

                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >

                {/* CARD */}
                <motion.div

                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}

                  className="group relative w-full md:w-[45%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-cyan-400/40 transition duration-300"
                >

                  {/* CARD GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />

                  {/* YEAR */}
                  <h3 className="relative z-10 text-cyan-400 text-3xl font-extrabold mb-4">

                    {item.year}

                  </h3>

                  {/* TITLE */}
                  <h4 className="relative z-10 text-2xl font-bold mb-4">

                    {item.title}

                  </h4>

                  {/* DESC */}
                  <p className="relative z-10 text-gray-400 leading-8">

                    {item.desc}

                  </p>

                </motion.div>

                {/* GLOWING DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)] z-20" />

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;

