import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGithub, SiPhp } from "react-icons/si";
import ScrollAnimation from "./ScrollAnimation";
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
      <ScrollAnimation>
        <h2 className="text-3xl font-bold text-center mb-10">
          Kemampuan
        </h2>
      </ScrollAnimation>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <ScrollAnimation key={index} delay={index * 0.1}>
            <div
              className="flex flex-col items-center text-teal-400 text-4xl"
            >
              {skill.icon}
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-2`}>{skill.label}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Skills;
