import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import ScrollAnimation from "./ScrollAnimation";

const ProjectDetail = ({ project, onBack }) => {
  const { darkMode } = useTheme();
  if (!project) {
    return (
      <section className="py-20 text-center">
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Proyek tidak ditemukan.</p>
      </section>
    );
  }

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {project.title}
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
          <p className={`text-center max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.desc}</p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.3}>
          <div className="mt-10 flex justify-center">
            <motion.button
              onClick={onBack}
              className="px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg shadow-teal-500/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Kembali
            </motion.button>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={0.5}>
          <div className="mt-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-4">Daftar Link Pengalaman</h3>
            {project.experiences && project.experiences.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {project.experiences.map((exp, idx) => (
                  <motion.a
                    key={idx}
                    href={exp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-5 rounded-2xl transition-transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800 border border-gray-200'}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-semibold text-teal-400 group-hover:text-cyan-400 transition-colors">{exp.label}</div>
                    {exp.note && <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mt-1`}>{exp.note}</div>}
                  </motion.a>
                ))}
              </div>
            ) : (
              <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Belum ada link pengalaman untuk proyek ini.</p>
            )}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ProjectDetail;
