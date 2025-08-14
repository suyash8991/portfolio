import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { theme } = useTheme();
  const [nameAnimationKey, setNameAnimationKey] = useState(0);
  const [previousTheme, setPreviousTheme] = useState(theme);

  // Track theme changes to trigger name animations
  useEffect(() => {
    if (previousTheme !== theme) {
      setNameAnimationKey(prev => prev + 1);
      setPreviousTheme(theme);
    }
  }, [theme, previousTheme]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative section-primary themed-texture">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Optimized Spacing from Navbar */}
          <div className="h-8 md:h-16"></div>

          {/* Profile Photo */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl transition-all duration-300 hover:scale-105"
                 style={{
                   boxShadow: theme === 'ice' 
                     ? '0 0 0 3px var(--accent-primary), 0 15px 40px rgba(59, 130, 246, 0.2)'
                     : '0 0 0 3px var(--accent-primary), 0 15px 40px rgba(249, 115, 22, 0.3)'
                 }}>
              <img
                src="/profile.jpg"
                alt="Suyash Sreekumar Professional Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name with Enhanced Theme Animation */}
          <motion.h1
            key={nameAnimationKey}
            variants={itemVariants}
            className={`text-3xl md:text-4xl lg:text-5xl font-medieval font-bold mb-3 hero-name ${theme}-mode`}
            style={{ 
              position: 'relative',
              zIndex: 2
            }}
          >
            Suyash Sreekumar
          </motion.h1>
          
          {/* Professional Title */}
          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-xl font-body font-medium mb-4"
            style={{ 
              color: 'var(--accent-primary)'
            }}
          >
            AI Engineer & Data Scientist
          </motion.h2>

          {/* Professional Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base font-light mb-6 max-w-2xl mx-auto leading-relaxed"
            style={{ 
              color: 'var(--text-secondary)'
            }}
          >
            Crafting intelligent solutions at the intersection of AI and data science. 
            Specialized in building RAG systems, machine learning pipelines, and 
            enterprise analytics platforms that drive real business impact.
          </motion.p>

          {/* Meta Information */}
          <motion.div
            variants={itemVariants}
            className="mb-6 space-y-1"
          >
            <div className="flex items-center justify-center gap-2 text-sm md:text-base">
              <span className="text-lg">🎓</span>
              <span style={{ color: 'var(--text-muted)' }}>
                Oregon State University • MS Computer Science
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm md:text-base">
              <span className="text-lg">📍</span>
              <span style={{ color: 'var(--text-muted)' }}>
                San Francisco Bay Area
              </span>
            </div>
          </motion.div>

          {/* Professional Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <a 
              href="https://linkedin.com/in/suyash-sreekumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
              style={{ 
                color: 'var(--accent-primary)', 
                border: '1px solid var(--border-color)' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                e.currentTarget.style.color = 'var(--bg-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--accent-primary)';
              }}
            >
              <span>💼</span>
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/suyash-sreekumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
              style={{ 
                color: 'var(--accent-primary)', 
                border: '1px solid var(--border-color)' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                e.currentTarget.style.color = 'var(--bg-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--accent-primary)';
              }}
            >
              <span>💻</span>
              <span className="font-medium">GitHub</span>
            </a>
            
            <a 
              href="https://medium.com/@suyash-sreekumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
              style={{ 
                color: 'var(--accent-primary)', 
                border: '1px solid var(--border-color)' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                e.currentTarget.style.color = 'var(--bg-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--accent-primary)';
              }}
            >
              <span>📝</span>
              <span className="font-medium">Medium</span>
            </a>
          </motion.div>


        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <ChevronDown 
            className="w-6 h-6 transition-all duration-300 hover:scale-110" 
            style={{ 
              color: 'var(--text-secondary)',
              filter: 'drop-shadow(0 0 8px var(--glow-color))'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
