import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Theme Context
import { ThemeProvider } from './contexts/ThemeContext';

// Components
import LoadingScreen from './components/ui/LoadingScreen';
import Navigation from './components/ui/Navigation';
import Hero from './components/sections/Hero';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';
import CustomCursor from './components/ui/CustomCursor'; 

import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const loadTimer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    // Set smooth scroll behavior once
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden">
        <CustomCursor />
        
        <LoadingScreen isLoading={isLoading} />
        <Navigation />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section id="hero"><Hero /></section>
          <section id="skills"><Skills /></section>
          <section id="education"><Education /></section>
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="contact"><Contact /></section>
        </motion.main>

        <Footer />
        
        {/* Scroll Progress Indicator can stay as is */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 z-50 transform-gpu"
          style={{ 
            background: 'var(--accent-primary)', 
            /* scroll logic remains the same */
          }} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;