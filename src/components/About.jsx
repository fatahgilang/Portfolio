import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import { useTheme } from "./ThemeContext";

const About = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <ScrollAnimation>
        <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Tentang Saya
        </h2>
      </ScrollAnimation>
      <ScrollAnimation delay={0.3}>
        <p className={`text-center max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
          Saya seorang <span className="text-teal-400 font-semibold">Web Developer</span> yang fokus pada pengalaman pengguna, performa, dan kualitas kode. Berpengalaman membangun proyek modern dengan React/Vite, Tailwind CSS, serta ekosistem Laravel dan Livewire.
        </p>
      </ScrollAnimation>
      <ScrollAnimation delay={0.5}>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'}`}>Frontend & Backend</span>
          <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'}`}>React, Tailwind, Vite</span>
          <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'}`}>Laravel, Livewire, MySQL</span>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default About;
