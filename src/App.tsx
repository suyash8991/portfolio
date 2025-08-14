import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Theme Context
import { ThemeProvider } from './contexts/ThemeContext';

// Components
import LoadingScreen from './components/ui/LoadingScreen';
import Navigation from './components/ui/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth user experience
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    // Add glow effect to interactive elements
    const addGlowEffects = () => {
      const buttons = document.querySelectorAll('button, a');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          button.classList.add('hover:shadow-lg', 'hover:shadow-gold-accent/20');
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    addGlowEffects();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden">
        {/* Loading Screen */}
        <LoadingScreen isLoading={isLoading} />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Hero Section */}
          <section id="hero">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about">
            <About />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <Skills />
          </section>

          {/* Projects Section */}
          <section id="projects">
            <Projects />
          </section>

          {/* Experience Section */}
          <section id="experience">
            <Experience />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <Contact />
          </section>
        </motion.main>

        {/* Footer */}
        <Footer />

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 z-50 transform-gpu"
          style={{
            background: 'var(--accent-primary)',
            scaleX: typeof window !== 'undefined' ? 
              window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: typeof window !== 'undefined' ? 
            window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0 
          }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
