import React from "react";
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
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-2xl mt-10`}>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Keahlian Utama</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainSkills.map((skillCategory, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
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
    </section>
  );
};

export default Skills;
