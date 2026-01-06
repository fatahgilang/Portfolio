import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "./ScrollAnimation";
import { useTheme } from "./ThemeContext";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="hero" className="relative flex flex-col justify-center min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Halo, Saya Gilang 👋
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
            className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          />
          <ScrollAnimation delay={0.4}>
            <p className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-xl mx-auto md:mx-0`}>
              Membangun pengalaman web yang modern, cepat, dan berfokus pada kualitas menggunakan ekosistem React dan teknologi pendukung.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.5}>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'}`}>2+ tahun pengalaman</span>
              <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'}`}>10+ proyek selesai</span>
              <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'}`}>Terbuka untuk freelance</span>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.6}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg shadow-teal-500/20 text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Lihat Proyek
              </motion.a>
              <motion.a
                href="#contact"
                className={`px-6 py-3 rounded-xl font-semibold text-center ${darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50'}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Hubungi Saya
              </motion.a>
              <motion.a
                href="/cv.pdf"
                download
                className="px-6 py-3 rounded-xl font-semibold border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Unduh CV
              </motion.a>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.8}>
            <div className="mt-8 flex justify-center md:justify-start items-center gap-6 text-2xl text-teal-400">
              <a href="https://github.com/fatahgilang" target="_blank" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}><FaGithub /></a>
              <a href="https://instagram.com/fatah.gilang" target="_blank" className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}><FaInstagram /></a>
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
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-2xl bg-gradient-to-tr from-teal-500 via-cyan-500 to-blue-500 p-1"
            >
              <div className={`w-full h-full rounded-full overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <img 
                src="image/profile.jpeg" 
                alt="Gilang Profile" 
                className="w-full h-full object-cover"
              />
              </div>
            </motion.div>
            <div className="absolute -inset-6 rounded-full bg-teal-500/20 blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
