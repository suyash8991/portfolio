import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', primary: 'Home', secondary: 'The Throne', href: '#hero' },
    { id: 'skills', primary: 'Skills', secondary: 'The Arsenal', href: '#skills' },
    { id: 'education', primary: 'Education', secondary: 'Houses of Learning', href: '#education' },
    { id: 'projects', primary: 'Portfolio', secondary: 'Epic Conquests', href: '#projects' },
    { id: 'experience', primary: 'Experience', secondary: 'Path of Honor', href: '#experience' },
    { id: 'contact', primary: 'Contact', secondary: 'Send Raven', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-md shadow-lg border-b' 
            : 'bg-transparent'
        }`}
        style={{
          backgroundColor: isScrolled ? 'var(--bg-primary)' : 'transparent',
          borderBottomColor: isScrolled ? 'var(--border-color)' : 'transparent',
        }}
      >
        <div className="w-full px-8">
          <div className="flex items-center justify-between h-16 max-w-full">
            {/* Stylized Logo */}
            <motion.button
              className="nav-item"
              onClick={() => setActiveSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span 
                className="text-2xl font-bold"
                style={{
                  background: `linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                SSK
              </span>
            </motion.button>

            {/* Desktop Menu & Theme Toggle */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
              <div className="flex items-center justify-center flex-1 max-w-4xl gap-8">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Dual Label Structure - Separate Lines */}
                    <div className="flex flex-col items-center text-center">
                      {/* Primary Label */}
                      <span className="font-semibold text-base leading-tight">
                        {item.primary}
                      </span>
                      
                      {/* Secondary Label */}
                      <span className="text-xs italic opacity-75 leading-tight mt-1">
                        {item.secondary}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Theme Toggle (Right Side) */}
            <div className="hidden lg:flex">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
              style={{ color: 'var(--text-primary)' }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          x: isOpen ? '0%' : '100%' 
        }}
        transition={{ duration: 0.3 }}
                  className="fixed top-16 right-0 bottom-0 w-80 backdrop-blur-md border-l shadow-lg z-40 lg:hidden"
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderLeftColor: 'var(--border-color)',
          }}
      >
        <div className="p-6">
          <div className="space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                                className={`w-full text-left px-4 py-3 font-medium rounded-lg transition-colors ${
                  activeSection === item.id 
                    ? 'border'
                    : ''
                }`}
                style={{
                  color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  backgroundColor: activeSection === item.id ? 'var(--accent-primary)10' : 'transparent',
                  borderColor: activeSection === item.id ? 'var(--accent-primary)30' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-base mb-1" style={{
                    color: activeSection === item.id ? 'var(--accent-primary)' : 'var(--text-primary)'
                  }}>
                    {item.primary}
                  </span>
                  <span className="text-sm italic opacity-75" style={{
                    color: 'var(--accent-primary)'
                  }}>
                    {item.secondary}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Mobile Contact Info */}
          {/* Mobile Theme Toggle */}
          <div className="mt-6 pt-6 border-t" style={{ borderTopColor: 'var(--border-color)' }}>
            <div className="flex items-center justify-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Contact Info */}
          <div className="mt-6 pt-6 border-t" style={{ borderTopColor: 'var(--border-color)' }}>
            <div className="text-center">
              <p style={{ color: 'var(--text-secondary)' }} className="text-sm mb-2">Based in San Francisco, CA</p>
              <p style={{ color: 'var(--accent-highlight)' }} className="text-sm font-medium">Available June 2025</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 backdrop-blur-sm z-30 lg:hidden"
          style={{ backgroundColor: 'var(--shadow-color)' }}
        />
      )}
    </>
  );
};

export default Navigation;
