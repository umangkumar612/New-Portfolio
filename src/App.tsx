import { useLenis } from '@/hooks/useLenis';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certification from '@/components/Certification';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const reduced = usePrefersReducedMotion();
  useLenis(reduced);
  useGsapReveal();

  return (
    <>
      <Cursor />
      <div className="noise" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
