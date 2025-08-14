import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  const toggleVariants = {
    ice: {
      x: 0,
      transition: { type: "spring", stiffness: 700, damping: 30 }
    },
    fire: {
      x: 32,
      transition: { type: "spring", stiffness: 700, damping: 30 }
    }
  };

  const backgroundVariants = {
    ice: {
      background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)",
    },
    fire: {
      background: "linear-gradient(135deg, #f97316 0%, #dc2626 100%)",
      boxShadow: "0 4px 15px rgba(249, 115, 22, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.1)",
    }
  };

  const handleToggle = () => {
    if (!isTransitioning) {
      toggleTheme();
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Theme Label */}
      <span className="hidden sm:block text-sm font-medieval text-secondary uppercase tracking-wide">
        {theme === 'ice' ? 'Winter is Coming' : 'Fire and Blood'}
      </span>

      {/* Toggle Switch */}
      <motion.button
        onClick={handleToggle}
        disabled={isTransitioning}
        className="relative w-16 h-8 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed"
        style={{ 
          background: theme === 'ice' 
            ? "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)"
            : "linear-gradient(135deg, #f97316 0%, #dc2626 100%)",
          boxShadow: theme === 'ice'
            ? "0 4px 15px rgba(59, 130, 246, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)"
            : "0 4px 15px rgba(249, 115, 22, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.1)"
        }}
        animate={theme}
        variants={backgroundVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Ice Side Icon */}
        <div className="absolute left-1 top-1 w-6 h-6 flex items-center justify-center">
          <span 
            className={`text-sm transition-opacity duration-300 ${
              theme === 'ice' ? 'opacity-0' : 'opacity-70'
            }`}
            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
          >
            ❄️
          </span>
        </div>

        {/* Fire Side Icon */}
        <div className="absolute right-1 top-1 w-6 h-6 flex items-center justify-center">
          <span 
            className={`text-sm transition-opacity duration-300 ${
              theme === 'fire' ? 'opacity-0' : 'opacity-70'
            }`}
            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
          >
            🔥
          </span>
        </div>

        {/* Moving Toggle Ball */}
        <motion.div
          className="absolute top-1 w-6 h-6 rounded-full shadow-lg flex items-center justify-center"
          style={{
            background: "linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.8)"
          }}
          variants={toggleVariants}
          animate={theme}
          whileHover={{ scale: 1.1 }}
        >
          {/* Active Icon */}
          <motion.span 
            className="text-lg"
            animate={{ 
              rotate: isTransitioning ? 360 : 0,
              scale: isTransitioning ? [1, 0.5, 1] : 1 
            }}
            transition={{ 
              rotate: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 0.75, ease: "easeInOut" }
            }}
          >
            {theme === 'ice' ? '❄️' : '🔥'}
          </motion.span>
        </motion.div>

        {/* Transition Overlay Effect */}
        {isTransitioning && (
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 1.5 }}
            style={{
              background: theme === 'ice' 
                ? "radial-gradient(circle, rgba(249,115,22,0.5) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)"
            }}
          />
        )}
      </motion.button>

      {/* Tooltip */}
      <div className="hidden lg:block relative group">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black bg-opacity-80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Switch to {theme === 'ice' ? 'Fire' : 'Ice'} Theme
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black border-opacity-80"></div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
