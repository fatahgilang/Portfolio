import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import { useTheme } from "./ThemeContext";

const About = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="about" className="py-20">
      <ScrollAnimation>
        <h2 className="text-3xl font-bold text-center mb-8">
          Tentang Saya
        </h2>
      </ScrollAnimation>
      <ScrollAnimation delay={0.4}>
        <p className={`text-center max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
          Saya seorang <span className="text-teal-400 font-semibold">Web Developer</span> yang fokus pada pengembangan frontend dengan React dan Tailwind CSS.
          Saya senang menciptakan website yang tidak hanya fungsional, tetapi juga memiliki tampilan modern dan pengalaman pengguna yang baik.
        </p>
      </ScrollAnimation>
    </section>
  );
};

export default About;
