import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";
import { useTheme } from "./ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="contact" className="py-20 text-center">
      <ScrollAnimation>
        <h2 className="text-3xl font-bold mb-8">Hubungi Saya</h2>
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>Tertarik bekerja sama atau ingin berbicara lebih lanjut?</p>
      </ScrollAnimation>
      <ScrollAnimation delay={0.4}>
        <div className="flex justify-center gap-6 text-2xl text-teal-400">
          <a href="mailto:fatahgilang23@gmail.com.com" className={`hover:text-white ${darkMode ? '' : 'hover:text-gray-900'}`}><FaEnvelope /></a>
          <a href="https://instagram.com/fatah.gilang" target="_blank" className={`hover:text-white ${darkMode ? '' : 'hover:text-gray-900'}`}><FaInstagram /></a>
          <a href="https://github.com/fatahgilang" target="_blank" className={`hover:text-white ${darkMode ? '' : 'hover:text-gray-900'}`}><FaGithub /></a>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Contact;
