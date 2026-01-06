import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import { useTheme } from "./ThemeContext";

const projects = [
  {
    title: "Website Portfolio",
    desc: "Landing page portofolio interaktif menggunakan React dan Tailwind CSS.",
    slug: "website-portfolio"
  },
  {
    title: "Dashboard Admin",
    desc: "Aplikasi admin dashboard dengan autentikasi dan integrasi API.",
    slug: "dashboard-admin"
  },
  {
    title: "E-commerce Store",
    desc: "Website toko online modern dengan sistem keranjang belanja.",
    slug: "ecommerce-store"
  },
];

const Projects = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <ScrollAnimation>
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Proyek Saya
        </h2>
      </ScrollAnimation>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ScrollAnimation key={i} delay={i * 0.2}>
            <motion.div
              className={`group relative p-6 rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
              <h3 className="text-xl font-semibold text-teal-400">{p.title}</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>{p.desc}</p>
              <div className="mt-4 flex gap-2">
                <span className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>React</span>
                <span className={`px-2 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>Tailwind</span>
              </div>
              {p.link && (
                <div className="mt-6">
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg shadow-teal-500/20 text-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Lihat Proyek
                  </motion.a>
                </div>
              )}
              <div className="mt-3">
                <motion.button
                  onClick={() => { window.location.hash = `#/projects/${p.slug}`; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg shadow-teal-500/20 text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Lihat Link Pengalaman
                </motion.button>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Projects;
