import React from "react";
import { FaDownload, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center py-6 px-4 sticky top-0 bg-gray-900 z-50 border-b border-gray-700">
      <h1 className="text-2xl font-bold text-teal-400">Gilang Dev</h1>
      <ul className="hidden md:flex gap-6 text-gray-300">
        <li><a href="#about" className="hover:text-teal-400">About</a></li>
        <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
      </ul>
      <div className="flex items-center gap-4">
        <a
          href="/cv.pdf"
          download
          className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm"
        >
          <FaDownload /> CV
        </a>
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
