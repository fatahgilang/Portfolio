import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "./ThemeContext";

const Hero = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="hero" className="flex flex-col justify-center items-center min-h-screen text-center">
      <motion.h1
        className="text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Halo, Saya <span className="text-teal-400">Gilang 👋</span>
      </motion.h1>
      <TypeAnimation
        sequence={[
          "Web Developer 💻",
          2000,
          "Frontend Engineer ⚡",
          2000,
          "React Enthusiast 🚀",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
      />
      <p className={`mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-xl`}>
        Saya membangun website interaktif, cepat, dan modern menggunakan teknologi terbaru seperti React dan Node.js.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="bg-teal-500 px-5 py-3 rounded-lg font-medium hover:bg-teal-600">
          Lihat Proyek
        </a>
        <a href="/cv.pdf" download className="border border-teal-500 px-5 py-3 rounded-lg font-medium hover:bg-teal-500 hover:text-white">
          Unduh CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
