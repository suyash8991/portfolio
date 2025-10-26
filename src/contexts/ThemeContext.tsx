import React, { createContext, useEffect, useState } from 'react';

type Theme = 'ice' | 'fire';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Export only what's needed by hooks
export { ThemeContext };
export type { Theme, ThemeContextType };

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('fire'); // Default to Fire theme
  const [isTransitioning, setIsTransitioning] = useState(false);


  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('got-portfolio-theme') as Theme;
    
    if (savedTheme && (savedTheme === 'ice' || savedTheme === 'fire')) {
      setTheme(savedTheme);
    } else {
      // Check system preference as fallback
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDark ? 'fire' : 'ice';
      setTheme(systemTheme);
      localStorage.setItem('got-portfolio-theme', systemTheme);
    }
  }, []);

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    const newTheme = theme === 'ice' ? 'fire' : 'ice';
    

    
    // Immediate theme change to trigger animations
    setTheme(newTheme);
    localStorage.setItem('got-portfolio-theme', newTheme);
    
    // Add eruption effect class for fire transitions
    if (newTheme === 'fire') {
      const heroName = document.querySelector('.hero-name');
      if (heroName) {
        heroName.classList.add('hero-name-transition');
        setTimeout(() => {
          heroName.classList.remove('hero-name-transition');
        }, 2000);
      }
    }
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 2000); // Extended duration for more dramatic effect
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};
