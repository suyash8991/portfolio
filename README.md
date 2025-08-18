# Suyash Sreekumar - Portfolio Website

A modern, responsive portfolio website showcasing my expertise in AI engineering, data science, and full-stack development. Built with a unique Game of Thrones-inspired dual theme system that reflects both my technical skills and creative approach to development.

## ✨ Features

### 🎨 **Dual Theme System**
- **Ice Mode**: Clean, professional light theme with crystalline blue accents
- **Fire Mode**: Bold, dynamic dark theme with fiery orange/red highlights
- Smooth theme transitions with custom animations
- Theme-aware components that adapt to user preference

### 🖱️ **Interactive Elements**
- Custom animated mouse cursor with theme-based gradients
- Smooth scroll animations powered by Framer Motion
- Interactive project cards with click-to-expand functionality
- Dynamic dragon animation in the education timeline
- Hover effects and micro-interactions throughout

### 📱 **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Optimized for all screen sizes and devices
- Touch-friendly interactions and gestures
- Professional layout that works on any device

### 🚀 **Performance & Accessibility**
- Built with Vite for fast development and optimized builds
- WCAG compliant contrast ratios and accessibility features
- Optimized images and assets
- Smooth 60fps animations

## 🛠️ **Technology Stack**

### **Frontend Framework**
- **React 18** with TypeScript for type safety
- **Vite** for lightning-fast builds and hot reloading
- **Tailwind CSS** for utility-first styling and responsive design

### **Animation & Interactions**
- **Framer Motion** for smooth, declarative animations
- Custom CSS keyframes for theme-specific effects
- Intersection Observer for scroll-triggered animations

### **Styling & Theming**
- **CSS Custom Properties** for dynamic theme switching
- **PostCSS** for advanced CSS processing
- Custom design system with consistent spacing and typography

### **Development Tools**
- **React Hook Form** for form validation and management
- **Lucide React** for beautiful, consistent icons
- **ESLint** and **Prettier** for code quality


## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn package manager

### **Installation**
```bash
# Clone the repository
git clone https://github.com/suyash8991/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### **Development Commands**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎨 **Customization**

### **Theme Colors**
The website uses CSS custom properties for easy theme customization:

```css
/* Ice Theme */
--accent-primary: #3b82f6;    /* Blue */
--accent-secondary: #4a90e2;   /* Light Blue */
--glow-color: rgba(59, 130, 246, 0.3);

/* Fire Theme */
--accent-primary: #f97316;     /* Orange */
--accent-secondary: #dc2626;    /* Red */
--glow-color: rgba(249, 115, 22, 0.5);
```

### **Adding New Projects**
Update the projects array in `src/components/sections/Projects.tsx`:

```typescript
{
  id: "new-project",
  title: "Project Name",
  description: "Project description...",
  detailedDescription: "Detailed project information...",
  technologies: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/username/repo",
  // ... other properties
}
```


## 📱 **Browser Support**

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Core functionality works on all devices

## 🤝 **Contributing**

While this is a personal portfolio, I'm open to suggestions and improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

*Built with ❤️ using modern web technologies and a touch of Westerosi magic.*