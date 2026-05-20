import { motion } from "framer-motion";

/* IMAGES */
import img1 from "../assets/16.jpg";
import img2 from "../assets/12.jpg";
import img3 from "../assets/5.jpg";
import img4 from "../assets/11.jpg";
import img5 from "../assets/10.jpg";
import img6 from "../assets/15.jpg";
import img7 from "../assets/9.jpg";
import img8 from "../assets/14.jpg";

const successData = [
  {
    image: img1,
    name: "Deepak",
    visa: "Portugal: Job Seeker Visa",
  },

  {
    image: img2,
    name: "Punit",
    visa: "Australia: Work Permit",
  },

  {
    image: img3,
    name: "Vivek",
    visa: "Canada: Work Permit",
  },

  {
    image: img4,
    name: "Siddarth",
    visa: "Canada: Work Permit",
  },

  {
    image: img5,
    name: "Abhinandan",
    visa: "Australia: Work Permit",
  },

  {
    image: img6,
    name: "Shubham",
    visa: "Canada: Work Permit",
  },

  {
    image: img7,
    name: "Rahul",
    visa: "Germany: Work Visa",
  },

  {
    image: img8,
    name: "Aman",
    visa: "UK: Student Visa",
  },
];

function SuccessStories() {

  return (

    <section className="relative py-28 bg-[#f5f7fc] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-[1700px] mx-auto relative z-10">

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

            Success Stories

          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">

            Visa Approved <br />

            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">

              Clients

            </span>

          </h2>

        </motion.div>

        {/* SLIDER */}
        <div className="overflow-hidden relative">

          <motion.div

            animate={{
              x: ["0%", "-50%"],
            }}

            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}

            className="flex gap-10 w-max"
          >

            {[...successData, ...successData].map((item, index) => (

              <motion.div

                key={index}

                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}

                className="group min-w-[320px] bg-white rounded-[35px] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition duration-500"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[380px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* APPROVED BADGE */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2">

                    <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white px-8 py-4 rounded-2xl shadow-2xl font-bold tracking-wide text-sm uppercase">

                      Visa Approved

                    </div>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-8 text-center">

                  {/* NAME */}
                  <h3 className="text-4xl font-black text-slate-900 mb-4">

                    {item.name}

                  </h3>

                  {/* VISA */}
                  <p className="text-lg text-gray-600 font-semibold leading-8">

                    {item.visa}

                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default SuccessStories;