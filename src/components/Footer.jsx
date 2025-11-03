import React from "react";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();
  
  return (
    <footer className={`py-6 text-center ${darkMode ? 'text-gray-500 border-t border-gray-700' : 'text-gray-600 border-t border-gray-300'} mt-10`}>
      © {new Date().getFullYear()} Gilang Dev. Dibuat dengan menggunakan React & Tailwind CSS.
    </footer>
  );
};

export default Footer;
