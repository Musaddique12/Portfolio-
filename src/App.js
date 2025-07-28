// import Hero3D from "./Portfolio/Hero3D";
import Navbar from "./Portfolio/Navbar";
import Skills from "./Portfolio/Skills";
// import Projects from "./Portfolio/Projects";
import Services from "./Portfolio/Services";
import About from "./Portfolio/About";
import Contact from "./Portfolio/Contact";
import Footer from "./Portfolio/Footer";
import Hero from "./Portfolio/Hero";
import SkillTree from "./Portfolio/ProjectTree/ProjectsTree";

function App() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen">
      <Navbar />
      <Hero/>
      {/* <Hero3D /> */}
      <About />
      <SkillTree/>
      <Skills />
      {/* <Projects /> */}
      <Services />
      <Contact />
      <Footer />

    </div>

    
  );
}

export default App;





