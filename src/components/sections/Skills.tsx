import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Code2, 
  Brain, 
  Database, 
  Cloud,
  Layers
} from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
  description?: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages of Power",
      subtitle: "The languages that shape my thoughts",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Python", icon: `${import.meta.env.BASE_URL}logos/python.svg` },
        { name: "JavaScript", icon: `${import.meta.env.BASE_URL}logos/javascript.svg` },
        { name: "Java", icon: `${import.meta.env.BASE_URL}logos/java.svg` },
        { name: "C/C++", icon: `${import.meta.env.BASE_URL}logos/cplusplus.svg` },
        { name: "SQL", icon: `${import.meta.env.BASE_URL}logos/sql.svg` },
        { name: "Haskell", icon: `${import.meta.env.BASE_URL}logos/haskell.svg` }
      ]
    },
    {
      title: "AI & Machine Learning Mastery",
      subtitle: "Where artificial minds come to life",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", icon: `${import.meta.env.BASE_URL}logos/tensorflow.svg` },
        { name: "PyTorch", icon: `${import.meta.env.BASE_URL}logos/pytorch.svg` },
        { name: "LangChain", icon: `${import.meta.env.BASE_URL}logos/langchain.svg` },
        { name: "RAGAS", icon: `${import.meta.env.BASE_URL}logos/ragas.svg` },
        { name: "Scikit-learn", icon: `${import.meta.env.BASE_URL}logos/scikit-learn.svg` },
        { name: "Vector DBs", icon: `${import.meta.env.BASE_URL}logos/vector-databases.svg` }
      ]
    },
    {
      title: "Data Forging Tools",
      subtitle: "Instruments that transform chaos into insight",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Pandas", icon: `${import.meta.env.BASE_URL}logos/pandas.svg` },
        { name: "NumPy", icon: `${import.meta.env.BASE_URL}logos/numpy.svg` },
        { name: "Power BI", icon: `${import.meta.env.BASE_URL}logos/power-bi.svg` },
        { name: "Qlik Sense", icon: `${import.meta.env.BASE_URL}logos/qlik-sense.svg` }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      subtitle: "Masters of the digital sky",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", icon: `${import.meta.env.BASE_URL}logos/aws.svg` },
        { name: "Docker", icon: `${import.meta.env.BASE_URL}logos/docker.svg` },
        { name: "Kubernetes", icon: `${import.meta.env.BASE_URL}logos/kubernetes.svg` },
        { name: "Jenkins", icon: `${import.meta.env.BASE_URL}logos/jenkins.svg` },
        { name: "Git", icon: `${import.meta.env.BASE_URL}logos/git.svg` },
        { name: "PostgreSQL", icon: `${import.meta.env.BASE_URL}logos/postgresql.svg` },
        { name: "MongoDB", icon: `${import.meta.env.BASE_URL}logos/mongodb.svg` }
      ]
    },
    {
      title: "Development Frameworks",
      subtitle: "Building the future, one framework at a time",
      icon: <Layers className="w-6 h-6" />,
      skills: [
        { name: "Django", icon: `${import.meta.env.BASE_URL}logos/django-icon-svgrepo-com.svg` },
        { name: "Node.js", icon: `${import.meta.env.BASE_URL}logos/nodejs-icon-logo-svgrepo-com.svg` },
        { name: "React", icon: `${import.meta.env.BASE_URL}logos/react.svg` },
        { name: "Flask", icon: `${import.meta.env.BASE_URL}logos/flask-svgrepo-com.svg` },
        { name: "FastAPI", icon: `${import.meta.env.BASE_URL}logos/FastAPI.svg` },
        { name: "Next.js", icon: `${import.meta.env.BASE_URL}logos/nextjs-fill-svgrepo-com.svg` }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
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

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="gradient-title">
              Skills & Technologies
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A curated collection of tools and technologies that power modern innovation
            </p>
          </motion.div>

          {/* 4-Quadrant Skills Layout - Full Width with Increased Height */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Valyrian Tongues (Languages) */}
            <motion.div
              variants={itemVariants}
              className="quadrant-card w-full"
              style={{
                background: `linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)`,
                border: '2px solid var(--border-color)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '400px'
              }}
            >
              {/* Quadrant Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="quadrant-icon" style={{ color: 'var(--accent-primary)' }}>
                    <Code2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Valyrian Tongues
                  </h3>
                </div>
                <p className="text-base italic" style={{ color: 'var(--accent-primary)' }}>
                  The languages that shape my thoughts
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-6">
                {skillCategories[0].skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      boxShadow: theme === 'ice' 
                        ? '0 8px 24px rgba(59, 130, 246, 0.3)' 
                        : '0 8px 24px rgba(249, 115, 22, 0.4)'
                    }}
                    className="skill-item group cursor-pointer"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      padding: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="skill-icon mb-3 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={skill.icon} 
                          alt={`${skill.name} logo`}
                          className="w-14 h-14 object-contain"
                          style={{
                            filter: theme === 'ice' 
                              ? 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))' 
                              : 'drop-shadow(0 2px 4px rgba(249, 115, 22, 0.4))'
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `
                              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                ${skill.name.substring(0, 2).toUpperCase()}
                              </div>
                            `;
                          }}
                        />
                      </div>
                      <h4 className="font-semibold text-base transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        {skill.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Maesters' Wisdom (AI & Data Mastery) */}
            <motion.div
              variants={itemVariants}
              className="quadrant-card w-full"
              style={{
                background: `linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)`,
                border: '2px solid var(--border-color)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '400px'
              }}
            >
              {/* Quadrant Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="quadrant-icon" style={{ color: 'var(--accent-primary)' }}>
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Maesters' Wisdom
                  </h3>
                </div>
                <p className="text-base italic" style={{ color: 'var(--accent-primary)' }}>
                  Where artificial minds come alive
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-6">
                {skillCategories[1].skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      boxShadow: theme === 'ice' 
                        ? '0 8px 24px rgba(59, 130, 246, 0.3)' 
                        : '0 8px 24px rgba(249, 115, 22, 0.4)'
                    }}
                    className="skill-item group cursor-pointer"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      padding: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="skill-icon mb-3 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={skill.icon} 
                          alt={`${skill.name} logo`}
                          className="w-14 h-14 object-contain"
                          style={{
                            filter: theme === 'ice' 
                              ? 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))' 
                              : 'drop-shadow(0 2px 4px rgba(249, 115, 22, 0.4))'
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `
                              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                ${skill.name.substring(0, 2).toUpperCase()}
                              </div>
                            `;
                          }}
                        />
                      </div>
                      <h4 className="font-semibold text-base transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        {skill.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Builders of the Realm (Frameworks & Craft) */}
            <motion.div
              variants={itemVariants}
              className="quadrant-card w-full"
              style={{
                background: `linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)`,
                border: '2px solid var(--border-color)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '400px'
              }}
            >
              {/* Quadrant Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="quadrant-icon" style={{ color: 'var(--accent-primary)' }}>
                    <Layers className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Builders of the Realm
                  </h3>
                </div>
                <p className="text-base italic" style={{ color: 'var(--accent-primary)' }}>
                  Frameworks and tools that construct the kingdom's structures
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-6">
                {skillCategories[4].skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      boxShadow: theme === 'ice' 
                        ? '0 8px 24px rgba(59, 130, 246, 0.3)' 
                        : '0 8px 24px rgba(249, 115, 22, 0.4)'
                    }}
                    className="skill-item group cursor-pointer"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      padding: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="skill-icon mb-3 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={skill.icon} 
                          alt={`${skill.name} logo`}
                          className="w-14 h-14 object-contain"
                          style={{
                            filter: theme === 'ice' 
                              ? 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))' 
                              : 'drop-shadow(0 2px 4px rgba(249, 115, 22, 0.4))'
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `
                              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                ${skill.name.substring(0, 2).toUpperCase()}
                              </div>
                            `;
                          }}
                        />
                      </div>
                      <h4 className="font-semibold text-base transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        {skill.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Guardians of the Wall (Cloud & Infrastructure) */}
            <motion.div
              variants={itemVariants}
              className="quadrant-card w-full"
              style={{
                background: `linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)`,
                border: '2px solid var(--border-color)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '400px'
              }}
            >
              {/* Quadrant Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="quadrant-icon" style={{ color: 'var(--accent-primary)' }}>
                    <Cloud className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Guardians of the Wall
                  </h3>
                </div>
                <p className="text-base italic" style={{ color: 'var(--accent-primary)' }}>
                  The Night's Watch of deployment, scaling, and protection
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-6">
                {skillCategories[3].skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      boxShadow: theme === 'ice' 
                        ? '0 8px 24px rgba(59, 130, 246, 0.3)' 
                        : '0 8px 24px rgba(249, 115, 22, 0.4)'
                    }}
                    className="skill-item group cursor-pointer"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      padding: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="skill-icon mb-3 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={skill.icon} 
                          alt={`${skill.name} logo`}
                          className="w-14 h-14 object-contain"
                          style={{
                            filter: theme === 'ice' 
                              ? 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))' 
                              : 'drop-shadow(0 2px 4px rgba(249, 115, 22, 0.4))'
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `
                              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                ${skill.name.substring(0, 2).toUpperCase()}
                              </div>
                            `;
                          }}
                        />
                      </div>
                      <h4 className="font-semibold text-base transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        {skill.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div 
              className="inline-block px-8 py-4 rounded-xl border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: 'var(--accent-primary)',
                color: 'var(--accent-primary)',
                backgroundColor: 'transparent'
              }}
            >
              <p className="text-lg font-medium">
                Ready to build something amazing together?
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
