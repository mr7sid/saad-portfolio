import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";


export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
     <Navbar />
     <Hero />
     <About />
     <TechStack />
     <Services />
     <Projects />
     <Contact />
      
    </main>
  );
}