import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Winterfell-inspired palette
        'primary': '#2E3A46',      // Deep slate blue-gray
        'secondary': '#5C748A',    // Muted steel blue
        'highlight': '#D1BFA3',    // Soft parchment/beige
        'background': '#F5F5F4',   // Off-white/stone
        'text-primary': '#1E1E1E', // Almost black
        'text-secondary': '#4A5568', // Muted gray
        'subtle-accent': '#E5E7EB', // Very light gray for borders
      },
      fontFamily: {
        'medieval': ['Cinzel', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #d97706' },
          '100%': { boxShadow: '0 0 20px #d97706, 0 0 30px #d97706' },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}
