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
            <div className="hero-photo mx-auto">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Suyash Sreekumar Professional Photo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a professional placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                      SS
                    </div>
                  `;
                }}
              />
            </div>
          </motion.div>

          {/* Name with Enhanced Theme Animation */}
          <motion.h1
            key={nameAnimationKey}
            variants={itemVariants}
            className={`text-3xl md:text-4xl lg:text-5xl font-medieval font-bold mb-3 hero-name ${theme}-mode`}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            onMouseEnter={() => {
              // Trigger sparkle animation on hover
              const nameElement = document.querySelector('.hero-name');
              if (nameElement) {
                nameElement.classList.add('sparkle-effect');
                setTimeout(() => {
                  nameElement.classList.remove('sparkle-effect');
                }, 1000);
              }
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
            Software Engineer & AI Specialist
          </motion.h2>

          {/* Professional Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base font-light mb-6 max-w-2xl mx-auto leading-relaxed"
            style={{ 
              color: 'var(--text-secondary)'
            }}
          >
            Crafting next-generation intelligent solutions. Expert in building RAG systems, machine learning pipelines, and enterprise analytics platforms that transform data into actionable insights. Specialized in full-stack development, advanced ML algorithms, and scalable data architectures that drive measurable business impact.
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
              <img 
                src={`${import.meta.env.BASE_URL}logos/linkedin-svgrepo-com.svg`} 
                alt="LinkedIn" 
                className="w-4 h-4"
              />
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
              <img 
                src={`${import.meta.env.BASE_URL}logos/github-svgrepo-com.svg`} 
                alt="GitHub" 
                className="w-4 h-4"
              />
              <span className="font-medium">GitHub</span>
            </a>
            
            <a 
              href="https://medium.com/@suyash.sreekumar" 
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
              <img 
                src={`${import.meta.env.BASE_URL}logos/medium-svgrepo-com.svg`} 
                alt="Medium" 
                className="w-4 h-4"
              />
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