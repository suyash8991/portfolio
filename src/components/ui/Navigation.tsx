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
    { id: 'about', primary: 'About', secondary: 'The Journey', href: '#about' },
    { id: 'education', primary: 'Education', secondary: 'Houses of Learning', href: '#education' },
    { id: 'skills', primary: 'Skills', secondary: 'The Arsenal', href: '#skills' },
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
    const element = document.querySelector(href);
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
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
                        {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              className="flex items-center"
            >
              <span 
                className="text-xl font-medieval font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Suyash Sreekumar
              </span>
            </motion.div>

            {/* Desktop Menu & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={`nav-item flex flex-col items-center px-4 py-2 transition-all duration-300 ${
                      activeSection === item.id ? 'active' : ''
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className={`primary-label font-semibold text-base ${
                      activeSection === item.id ? 'border-b-2' : ''
                    }`} style={{
                      color: 'var(--text-primary)',
                      borderColor: activeSection === item.id ? 'var(--accent-primary)' : 'transparent',
                      paddingBottom: activeSection === item.id ? '2px' : '0'
                    }}>
                      {item.primary}
                    </span>
                    <span className="secondary-label text-sm italic opacity-90" style={{
                      color: 'var(--accent-primary)',
                      marginTop: '4px'
                    }}>
                      {item.secondary}
                    </span>
                  </motion.button>
                ))}
              </div>
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
