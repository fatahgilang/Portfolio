import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "./ScrollAnimation";
import { useTheme } from "./ThemeContext";

const Hero = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="hero" className="flex flex-col justify-center min-h-screen py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
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
          <ScrollAnimation delay={0.4}>
            <p className={`mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-xl`}>
              Saya membangun website interaktif, cepat, dan modern menggunakan teknologi terbaru seperti React dan Node.js.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.6}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="bg-teal-500 px-5 py-3 rounded-lg font-medium hover:bg-teal-600 text-center">
                Lihat Proyek
              </a>
              <a href="/cv.pdf" download className="border border-teal-500 px-5 py-3 rounded-lg font-medium hover:bg-teal-500 hover:text-white text-center">
                Unduh CV
              </a>
            </div>
          </ScrollAnimation>
        </div>
        
        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-teal-400 shadow-2xl">
              <img 
                src="image/profile.jpeg" 
                alt="Gilang Profile" 
                className="w-full h-full object-cover bg-gray-200 border-2 border-dashed rounded-xl"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-teal-400 flex items-center justify-center shadow-lg">
              <span className="text-2xl">💻</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
