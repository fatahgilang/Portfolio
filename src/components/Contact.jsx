import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Hubungi Saya</h2>
      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>Tertarik bekerja sama atau ingin berbicara lebih lanjut?</p>
      <div className="flex justify-center gap-6 text-2xl text-teal-400">
        <a href="mailto:gilang@example.com" className={`hover:text-white ${darkMode ? '' : 'hover:text-gray-900'}`}><FaEnvelope /></a>
        <a href="https://linkedin.com" target="_blank" className={`hover:text-white ${darkMode ? '' : 'hover:text-gray-900'}`}><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" className={`hover:text-white ${darkMode ? '' : 'hover:text-gray-900'}`}><FaGithub /></a>
      </div>
    </section>
  );
};

export default Contact;
