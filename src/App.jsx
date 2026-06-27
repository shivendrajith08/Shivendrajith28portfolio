import { useLenis } from './hooks/useLenis';
import Cursor from './components/ui/Cursor';
import AuroraBackground from './components/ui/AuroraBackground';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import GitHubStats from './components/sections/GitHubStats';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

export default function App() {
  useLenis();

  return (
    <>
      <Cursor />
      <AuroraBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubStats />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
