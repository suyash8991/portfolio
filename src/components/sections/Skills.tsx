import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Code2, 
  Brain, 
  Database, 
  Cloud
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
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "⚡" },
        { name: "Java", icon: "☕" },
        { name: "C/C++", icon: "⚙️" },
        { name: "SQL", icon: "🗃️" },
        { name: "Haskell", icon: "λ" }
      ]
    },
    {
      title: "AI & Machine Learning Mastery",
      subtitle: "Where artificial minds come to life",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", icon: "🔥" },
        { name: "PyTorch", icon: "🔦" },
        { name: "Langchain", icon: "🔗" },
        { name: "RAGAS", icon: "📊" },
        { name: "Scikit-learn", icon: "🔬" },
        { name: "Vector DBs", icon: "🎯" }
      ]
    },
    {
      title: "Data Forging Tools",
      subtitle: "Instruments that transform chaos into insight",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "Power BI", icon: "📈" },
        { name: "Qlik Sense", icon: "📊" },
        { name: "ETL Pipelines", icon: "🔄" },
        { name: "Data Visualization", icon: "📉" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      subtitle: "Masters of the digital sky",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚓" },
        { name: "Jenkins", icon: "🔧" },
        { name: "Git", icon: "📝" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" }
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
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Skills & Technologies
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A curated collection of tools and technologies that power modern innovation
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid gap-12">
            {skillCategories.map((category, _) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-8"
              >
                {/* Category Header */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div style={{ color: 'var(--accent-primary)' }}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-lg italic" style={{ color: 'var(--accent-primary)' }}>
                    {category.subtitle}
                  </p>
                </div>

                {/* Skills Grid */}
                <motion.div 
                  variants={containerVariants}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {category.skills.map((skill, _) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: theme === 'ice' 
                          ? '0 8px 32px rgba(59, 130, 246, 0.3)' 
                          : '0 8px 32px rgba(249, 115, 22, 0.4)'
                      }}
                      className="group cursor-pointer"
                    >
                      <div 
                        className="skill-card bg-white rounded-2xl p-6 text-center shadow-lg border border-opacity-20"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: 'var(--border-color)',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {/* Icon */}
                        <div className="skill-icon text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        
                        {/* Skill Name */}
                        <h4 
                          className="font-semibold text-sm md:text-base transition-colors duration-300"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
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
