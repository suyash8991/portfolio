import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import type { ThemeContextType } from '../contexts/ThemeContext';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Hook for getting theme-aware classes
export const useThemeClasses = () => {
  const { theme } = useTheme();

  return {
    sectionPrimary: `section-primary ${theme === 'ice' ? 'ice-particles' : 'fire-particles'}`,
    sectionAlternate: `section-alternate ${theme === 'ice' ? 'themed-texture' : 'themed-texture'}`,
    sectionLight: `section-light ${theme === 'ice' ? 'ice-particles' : 'fire-particles'}`,
    cardBackground: 'card-background glow-on-hover',
    heroName: `hero-name ${theme === 'ice' ? 'ice-mode' : 'fire-mode'}`,
    glowButton: `professional-button glow-on-hover`,
  };
};
