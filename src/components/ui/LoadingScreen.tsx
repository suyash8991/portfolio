import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Sword, Shield } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const { theme } = useTheme();
  
  if (!isLoading) return null;

  const swordVariants = {
    initial: { rotate: -45, opacity: 0 },
    animate: { 
      rotate: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const shieldVariants = {
    initial: { rotate: 45, opacity: 0 },
    animate: { 
      rotate: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
    }
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: { 
      width: "100%",
      transition: { duration: 2, ease: "easeInOut", delay: 0.6 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="text-center z-10">
        {/* Simple Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
                  <div 
          className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        >
          <span 
            className="text-2xl font-medieval font-bold"
            style={{ color: 'var(--bg-primary)' }}
          >
            {theme === 'ice' ? '❄️' : '🔥'}
          </span>
        </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <h1 
            className="text-2xl font-medieval mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            Suyash Sreekumar
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            {theme === 'ice' ? 'Winter is Coming...' : 'Fire and Blood...'}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="w-64 mx-auto"
        >
          <div 
            className="rounded-full p-1"
            style={{ backgroundColor: 'var(--border-color)' }}
          >
            <div 
              className="h-2 rounded-full overflow-hidden"
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <motion.div
                variants={progressVariants}
                initial="initial"
                animate="animate"
                className="h-full rounded-full"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              />
            </div>
          </div>
          
          <div 
            className="mt-4 text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            {theme === 'ice' ? 'Forging in the cold...' : 'Melting in the flames...'}
          </div>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex justify-center space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--accent-secondary)' }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
