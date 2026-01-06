import React from "react";
import { motion } from "framer-motion";
 import { FaDownload, FaMoon, FaSun } from "react-icons/fa";
 import { useTheme } from "./ThemeContext";
 
 const Navbar = () => {
   const { darkMode, toggleTheme } = useTheme();
   const [active, setActive] = React.useState("hero");
  const [scrollProgress, setScrollProgress] = React.useState(0);
 
  React.useEffect(() => {
    const ids = ["hero", "about", "skills", "projects", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
 
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "0px", threshold: [0.25, 0.5, 0.75] }
    );
 
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);
  
  React.useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      const p = total > 0 ? (scrollTop / total) * 100 : 0;
      setScrollProgress(p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
 
  return (
    <nav className={`sticky top-0 z-50 backdrop-blur relative flex justify-between items-center py-4 px-4 ${darkMode ? 'bg-gray-900/70 border-b border-gray-700' : 'bg-white/70 border-b border-gray-200'}`}>
      <motion.h1 className="text-2xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent" whileHover={{ scale: 1.03 }}>
        GWD
      </motion.h1>
      <ul className={`hidden md:flex gap-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        <li>
          <a
            href="#about"
            className={`relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-teal-400 after:transition-all ${active === 'about' ? 'text-teal-400 after:w-full' : 'hover:text-teal-400 after:w-0 hover:after:w-full'}`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={`relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-teal-400 after:transition-all ${active === 'skills' ? 'text-teal-400 after:w-full' : 'hover:text-teal-400 after:w-0 hover:after:w-full'}`}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-teal-400 after:transition-all ${active === 'projects' ? 'text-teal-400 after:w-full' : 'hover:text-teal-400 after:w-0 hover:after:w-full'}`}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-teal-400 after:transition-all ${active === 'contact' ? 'text-teal-400 after:w-full' : 'hover:text-teal-400 after:w-0 hover:after:w-full'}`}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <motion.a
          href="./cv.pdf"
          download
          className="px-3 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg shadow-teal-500/20 flex items-center gap-2 text-sm"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaDownload /> CV
        </motion.a>
        <button onClick={toggleTheme} className={`p-2 rounded-full ring-1 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 ring-gray-700/50' : 'bg-gray-100 hover:bg-gray-200 ring-gray-300/60'}`}>
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
      <div className="absolute left-0 bottom-0 h-[2px] w-full">
        <div
          className="h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
