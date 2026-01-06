import React from "react";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();
  
  return (
    <footer className="mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="h-px bg-gradient-to-r from-teal-500/40 via-cyan-500/40 to-blue-500/40 mb-4" />
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          © {new Date().getFullYear()} Dibuat dengan menggunakan React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
