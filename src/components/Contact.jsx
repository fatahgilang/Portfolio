import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";
import { useTheme } from "./ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 text-center">
        <ScrollAnimation>
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hubungi Saya
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>Tertarik bekerja sama atau ingin berdiskusi lebih lanjut?</p>
        </ScrollAnimation>
        {/* <ScrollAnimation delay={0.3}>
          <motion.a
            href="mailto:fatahgilang23@gmail.com"
            className="inline-block px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg shadow-teal-500/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Mulai Diskusi
          </motion.a>
        </ScrollAnimation> */}
        <ScrollAnimation delay={0.5}>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.a href="mailto:fatahgilang23@gmail.com" className={`group p-6 rounded-2xl flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaEnvelope className="text-3xl text-teal-400 group-hover:text-cyan-400 transition-colors" />
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</span>
            </motion.a>
            <motion.a href="https://instagram.com/fatah.gilang" target="_blank" className={`group p-6 rounded-2xl flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaInstagram className="text-3xl text-teal-400 group-hover:text-cyan-400 transition-colors" />
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Instagram</span>
            </motion.a>
            <motion.a href="https://github.com/fatahgilang" target="_blank" className={`group p-6 rounded-2xl flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaGithub className="text-3xl text-teal-400 group-hover:text-cyan-400 transition-colors" />
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>GitHub</span>
            </motion.a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
