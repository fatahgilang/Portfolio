import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const projects = [
  {
    title: "Website Portfolio",
    desc: "Landing page portofolio interaktif menggunakan React dan Tailwind CSS.",
  },
  {
    title: "Dashboard Admin",
    desc: "Aplikasi admin dashboard dengan autentikasi dan integrasi API.",
  },
  {
    title: "E-commerce Store",
    desc: "Website toko online modern dengan sistem keranjang belanja.",
  },
];

const Projects = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="projects" className="py-20">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Proyek Saya
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={`p-6 rounded-xl hover:scale-105 transition-transform ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-semibold text-teal-400">{p.title}</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
