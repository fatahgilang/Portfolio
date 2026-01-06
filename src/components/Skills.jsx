import React from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiReact, SiTailwindcss, SiGithub, SiPhp, SiLaravel, SiMysql, SiNodedotjs, SiGit } from "react-icons/si";
import ScrollAnimation from "./ScrollAnimation";
import { useTheme } from "./ThemeContext";

const skills = [
  { icon: <SiHtml5 />, label: "HTML" },
  { icon: <SiCss3 />, label: "CSS" },
  { icon: <SiPhp />, label: "PHP" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiLaravel />, label: "Laravel" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiNodedotjs />, label: "Node.js" },
];

const mainSkills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React", "Tailwind CSS", "Vite"]
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel","Filament", "Livewire", "MySQL"]
  },
  {
    category: "Tools",
    items: ["Git/GitHub", "VS Code", "Composer", "Node.js"]
  }
];

const Skills = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-4 justify-items-center">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                className={`group flex flex-col items-center justify-center w-20 h-20 rounded-xl transition-transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800 border border-gray-200'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="text-2xl text-teal-400 group-hover:text-cyan-400 transition-colors">{s.icon}</div>
                <span className="text-xs mt-2">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Keahlian Utama</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainSkills.map((skillCategory, index) => (
              <ScrollAnimation key={index} delay={index * 0.2}>
                <div className={`group relative p-6 rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                  <h4 className="text-xl font-bold text-teal-400 mb-4 text-center">{skillCategory.category}</h4>
                  <ul className="space-y-2">
                    {skillCategory.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
