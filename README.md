# 🏰 Suyash Sreekumar - AI Engineer Portfolio

> *"Winter is Coming"* - A Game of Thrones-inspired portfolio showcasing the intersection of artificial intelligence and data science.

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## 🎯 Overview

A modern, responsive portfolio website for Suyash Sreekumar, showcasing expertise in AI engineering, machine learning, and data science. Built with cutting-edge web technologies and featuring a unique dual-theme system inspired by the elemental forces of Ice and Fire from Game of Thrones.

**🔗 Live Demo:** [Coming Soon - Will be updated after deployment]

## ✨ Features

### 🎨 **Dual Theme System**
- **❄️ Ice Mode:** Clean, professional light theme with cool blue accents
- **🔥 Fire Mode:** Sophisticated dark theme with warm orange/gold highlights
- **🎭 Animated Transitions:** Smooth theme switching with custom animations
- **💾 Persistent Preferences:** Theme choice saved in localStorage

### 🏗️ **Modern Architecture**
- **⚡ Lightning Fast:** Built with Vite for optimal performance
- **📱 Fully Responsive:** Seamless experience across all devices
- **🎪 Smooth Animations:** Powered by Framer Motion
- **♿ Accessible Design:** WCAG compliant with keyboard navigation
- **🎯 TypeScript:** Full type safety and developer experience

### 🏆 **Professional Sections**
- **🏠 Hero:** Minimalist introduction with animated name effects
- **👨‍💻 About:** Professional background and expertise
- **⚔️ Skills:** Modern icon-driven technology showcase
- **🚀 Projects:** Interactive project portfolio
- **📈 Experience:** Professional journey timeline
- **📬 Contact:** Multiple communication channels

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19.1.1** - Modern UI library with latest features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.1.2** - Next-generation frontend tooling

### **Styling & Animation**
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Production-ready motion library
- **PostCSS** - CSS preprocessing and optimization

### **UI Components & Icons**
- **Headless UI** - Unstyled, accessible UI components
- **Lucide React** - Beautiful & consistent icon library
- **React Hook Form** - Performant forms with easy validation

### **Development Tools**
- **ESLint** - Code linting and quality assurance
- **Autoprefixer** - CSS vendor prefixing
- **TypeScript ESLint** - TypeScript-specific linting rules

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/[USERNAME]/suyash-sreekumar-portfolio.git
   cd suyash-sreekumar-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint checks
```

## 🏗️ Project Structure

```
suyash-portfolio/
├── public/                 # Static assets
│   ├── profile.jpg        # Profile picture
│   └── favicon.ico        # Site favicon
├── src/
│   ├── components/        # React components
│   │   ├── sections/      # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/           # Reusable UI components
│   │       ├── Navigation.tsx
│   │       ├── ThemeToggle.tsx
│   │       ├── LoadingScreen.tsx
│   │       └── Footer.tsx
│   ├── contexts/         # React contexts
│   │   └── ThemeContext.tsx
│   ├── index.css         # Global styles & themes
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Application entry point
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies & scripts
```

## 🎨 Design Philosophy

### **Minimalist Elegance**
- Clean, uncluttered layouts that focus on content
- Strategic use of whitespace for visual breathing room
- Professional typography hierarchy with Cinzel serif accents

### **Thematic Consistency**
- Game of Thrones-inspired dual themes (Ice & Fire)
- Consistent color palettes and design language
- Meaningful animations that enhance user experience

### **Performance First**
- Optimized bundle sizes and lazy loading
- Efficient animations using transform and opacity
- Responsive images and proper asset optimization

## 🔧 Customization

### **Theme Customization**
The dual-theme system uses CSS custom properties defined in `src/index.css`:

```css
/* Ice Theme (Light Mode) */
:root[data-theme="ice"] {
  --bg-primary: #ffffff;
  --accent-primary: #3b82f6;
  /* ... more variables */
}

/* Fire Theme (Dark Mode) */
:root[data-theme="fire"] {
  --bg-primary: #0a0a0a;
  --accent-primary: #f97316;
  /* ... more variables */
}
```

### **Content Updates**
- Update personal information in `src/components/sections/Hero.tsx`
- Modify skills in `src/components/sections/Skills.tsx`
- Add projects in `src/components/sections/Projects.tsx`
- Update experience in `src/components/sections/Experience.tsx`

## 📝 Development Workflow

### **Commit Conventions**
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Code style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Testing updates

### **Branch Strategy**
- `main` - Production-ready code
- `develop` - Development integration
- `feature/*` - New features
- `fix/*` - Bug fixes

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with automatic CI/CD

### **Netlify**
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### **GitHub Pages**
1. Build the project: `npm run build`
2. Deploy the `dist` folder to `gh-pages` branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Suyash Sreekumar**
- 📧 Email: suyash.sreekumar@gmail.com
- 💼 LinkedIn: [linkedin.com/in/suyash-sreekumar](https://linkedin.com/in/suyash-sreekumar)
- 💻 GitHub: [github.com/suyash-sreekumar](https://github.com/suyash-sreekumar)
- 📝 Medium: [medium.com/@suyash-sreekumar](https://medium.com/@suyash-sreekumar)

---

<div align="center">

**🏰 Built with passion and code • Winter is Coming ❄️**

*Crafting intelligent solutions at the intersection of AI and data science*

</div>