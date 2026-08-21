import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Experience from './components/Experience/Experience.jsx';
import Projects from './components/Projects/Projects.jsx';
import ProjectApproach from './components/ProjectApproach/ProjectApproach.jsx';
import Education from './components/Education/Education.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';
import './App.css';

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ProjectApproach />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
