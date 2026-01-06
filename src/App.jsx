import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeContext";
import ProjectDetail from "./components/ProjectDetail";

const App = () => {
  const { darkMode } = useTheme();
  const [route, setRoute] = React.useState(window.location.hash || "");
  const [projectData, setProjectData] = React.useState(null);

  React.useEffect(() => {
    const handler = () => setRoute(window.location.hash || "");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  React.useEffect(() => {
    if (route.startsWith("#/projects/")) {
      const slug = route.replace("#/projects/", "");
      const all = [
        {
          slug: "website-portfolio",
          title: "Website Portfolio",
          desc: "Landing page portofolio interaktif menggunakan React dan Tailwind CSS.",
          experiences: [
            { href: "https://arizqanovi.github.io/Portfolio/", label: "Portfolio Arizqa Novi", note: "Contoh pengalaman penulisan konten dan bahasa." },
            { href: "https://ahmad-imron.github.io/portfolio/", label: "Portfolio Ahmad Imron", note: "Contoh pengalaman website portofolio." }
          ]
        },
        {
          slug: "dashboard-admin",
          title: "Dashboard Admin",
          desc: "Aplikasi admin dashboard dengan autentikasi dan integrasi API.",
          experiences: []
        },
        {
          slug: "ecommerce-store",
          title: "E-commerce Store",
          desc: "Website toko online modern dengan sistem keranjang belanja.",
          experiences: []
        }
      ];
      setProjectData(all.find(p => p.slug === slug) || null);
    } else {
      setProjectData(null);
    }
  }, [route]);
  
  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} font-sans scroll-smooth`}>
      <Navbar />
      {projectData ? (
        <main className="container mx-auto px-4">
          <ProjectDetail project={projectData} onBack={() => { window.location.hash = ""; }} />
        </main>
      ) : (
        <>
          <main className="container mx-auto px-4">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
