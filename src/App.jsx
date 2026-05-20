import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Countries from "./components/Countries";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SuccessStories from "./components/SuccessStories";
function App() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="bg-slate-950 min-h-screen text-white overflow-hidden relative"
    >
      {/* GLOBAL BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* TOP LEFT GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-3xl top-0 left-0" />

        {/* BOTTOM RIGHT GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-3xl bottom-0 right-0" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <Hero />

        <Services />
        <About />
        <Process />
        <Stats />

        <Countries />
    <SuccessStories />
        <Testimonials />
       

        <Contact />

        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
