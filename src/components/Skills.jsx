import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGithub, SiPhp } from "react-icons/si";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const skills = [
  { icon: <SiHtml5 />, label: "HTML" },
  { icon: <SiCss3 />, label: "CSS" },
  { icon: <SiPhp />, label: "PHP" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiGithub />, label: "GitHub" },
];

const Skills = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-2xl mt-10`}>
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Kemampuan
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-teal-400 text-4xl"
            whileHover={{ scale: 1.2 }}
          >
            {skill.icon}
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-2`}>{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
