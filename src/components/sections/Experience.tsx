import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Award,
  Calendar,
  MapPin,
  ChevronDown
} from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  period: string;
  startYear: number;
  endYear?: number;
  type: 'work' | 'teaching';
  description: string;
  achievements: string[];
  skills: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  responsibilities: string[];
  technologies: string[];
}

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const experiences: Experience[] = [
    {
      id: 'osu-ta',
      title: 'Graduate Teaching Assistant',
      company: 'Oregon State University',
      companyLogo: '🏛️',
      location: 'Corvallis, OR',
      period: 'Sep 2023 – Jun 2025',
      startYear: 2023,
      endYear: 2025,
      type: 'teaching',
      description: 'Leading the next generation of developers through the complexities of database systems and software engineering. Combining academic rigor with practical industry insights to forge skilled tech warriors.',
      achievements: [
        'Mentored 100+ students in SQL optimization and database design mastery',
        'Reduced student coding errors by 20% through systematic code reviews',
        'Improved course efficiency by 15% through data-driven material optimization',
        'Developed interactive coding exercises and assessment frameworks'
      ],
      responsibilities: [
        'Lead weekly lab sessions for Database Management Systems course',
        'Provide one-on-one mentoring for struggling students',
        'Grade assignments and provide detailed technical feedback',
        'Assist in curriculum development and improvement initiatives'
      ],
      skills: ['Teaching', 'PostgreSQL', 'Python', 'Git', 'Code Review', 'Curriculum Development'],
      technologies: ['PostgreSQL', 'Python', 'Git', 'SQL', 'Database Design', 'Code Review Tools'],
      metrics: [
        { label: 'Students Mentored', value: '100+', description: 'Total students guided through database fundamentals' },
        { label: 'Error Reduction', value: '20%', description: 'Decrease in common coding mistakes through systematic review' },
        { label: 'Course Efficiency', value: '+15%', description: 'Improvement in learning outcomes through optimized materials' }
      ]
    },
    {
      id: 'tcs-analyst',
      title: 'Data Analyst',
      company: 'Tata Consultancy Services',
      companyLogo: '🏢',
      location: 'Mumbai, India',
      period: 'Aug 2020 – Jul 2023',
      startYear: 2020,
      endYear: 2023,
      type: 'work',
      description: 'Transformed raw business data into actionable insights through advanced analytics and visualization. Built enterprise-grade dashboards and automated reporting systems that empowered strategic decision-making across multiple business units.',
      achievements: [
        'Automated risk analysis workflows, reducing manual effort by 30%',
        'Built interactive dashboards improving decision-making speed by 40%',
        'Designed executive reporting systems reducing manual work by 50%',
        'Integrated SAP ERP systems with modern BI solutions for seamless data flow'
      ],
      responsibilities: [
        'Develop and maintain business intelligence dashboards',
        'Perform complex data analysis for risk assessment and strategic planning',
        'Integrate multiple data sources including SAP ERP systems',
        'Create automated reporting solutions for executive leadership'
      ],
      skills: ['Data Analysis', 'Business Intelligence', 'SAP ERP', 'Dashboard Development', 'Process Automation', 'Stakeholder Management'],
      technologies: ['Power BI', 'Qlik Sense', 'SQL Server', 'SAP ERP', 'Excel', 'Python', 'ETL Tools'],
      metrics: [
        { label: 'Manual Effort Reduced', value: '30%', description: 'Automation of repetitive risk analysis processes' },
        { label: 'Decision Speed', value: '+40%', description: 'Faster insights through interactive dashboards' },
        { label: 'Reporting Efficiency', value: '+50%', description: 'Streamlined executive reporting workflows' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 2
      }
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return <Briefcase className="w-5 h-5" />;
      case 'teaching': return <Users className="w-5 h-5" />;
      default: return <Briefcase className="w-5 h-5" />;
    }
  };

  const toggleExpansion = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <section id="experience" className="py-20 section-primary">
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
              <span className="text-4xl mr-3">🗡️</span>
              The Path of Honor
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            <p className="text-lg italic mb-4" style={{ color: 'var(--accent-primary)' }}>
              Professional journey through realms of data and teaching
            </p>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From data analysis battlefields to mentoring the next generation, each role has contributed 
              to mastering the art of transforming information into impact.
            </p>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Track */}
            <motion.div
              variants={timelineVariants}
              className="hidden md:block absolute top-1/2 left-0 right-0 h-1 origin-left rounded-full"
              style={{
                background: `linear-gradient(to right, var(--accent-primary), var(--accent-secondary))`,
                transform: 'translateY(-50%)'
              }}
            />

            {/* Experience Cards */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {experiences.map((exp, _) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Node (Desktop) */}
                  <div className="hidden md:block absolute top-0 left-1/2 w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 z-10"
                       style={{
                         backgroundColor: 'var(--bg-primary)',
                         borderColor: 'var(--accent-primary)',
                         boxShadow: '0 0 20px var(--glow-color)'
                       }}>
                    <motion.div
                      className="w-full h-full rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--accent-primary)' }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {getIcon(exp.type)}
                    </motion.div>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    className="mt-8 md:mt-12"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="p-6 rounded-xl border shadow-lg cursor-pointer transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-color)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                      }}
                      onClick={() => toggleExpansion(exp.id)}
                    >
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{exp.companyLogo}</span>
                          <div>
                            <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                              {exp.title}
                            </h3>
                            <p className="text-lg font-semibold" style={{ color: 'var(--accent-primary)' }}>
                              {exp.company}
                            </p>
                            <p className="text-sm flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                              style={{
                                backgroundColor: 'var(--accent-primary)20',
                                color: 'var(--accent-primary)'
                              }}>
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {exp.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {exp.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center p-3 rounded-lg"
                               style={{ backgroundColor: 'var(--bg-secondary)' }}>
                            <div className="text-xl font-bold" style={{ color: 'var(--accent-primary)' }}>
                              {metric.value}
                            </div>
                            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Top Skills Preview */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.skills.slice(0, 3).map((skill, idx) => (
                          <span key={idx} 
                                className="px-2 py-1 rounded-md text-xs font-medium"
                                style={{
                                  backgroundColor: 'var(--accent-primary)15',
                                  color: 'var(--accent-primary)'
                                }}>
                            {skill}
                          </span>
                        ))}
                        {exp.skills.length > 3 && (
                          <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                            +{exp.skills.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Expandable Content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedItem === exp.id ? 'auto' : 0,
                          opacity: expandedItem === exp.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        {expandedItem === exp.id && (
                          <div className="pt-4 border-t space-y-4" style={{ borderColor: 'var(--border-color)' }}>
                            {/* Key Achievements */}
                            <div>
                              <h5 className="text-md font-semibold mb-2 flex items-center" style={{ color: 'var(--text-primary)' }}>
                                <Award className="w-4 h-4 mr-2" />
                                Key Achievements
                              </h5>
                              <div className="space-y-2">
                                {exp.achievements.map((achievement, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <TrendingUp className="w-3 h-3 mt-1 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                      {achievement}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Responsibilities */}
                            <div>
                              <h5 className="text-md font-semibold mb-2 flex items-center" style={{ color: 'var(--text-primary)' }}>
                                <Briefcase className="w-4 h-4 mr-2" />
                                Core Responsibilities
                              </h5>
                              <div className="grid md:grid-cols-2 gap-2">
                                {exp.responsibilities.map((resp, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--accent-primary)' }} />
                                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                      {resp}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h5 className="text-md font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                Technologies & Tools
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, idx) => (
                                  <span key={idx} 
                                        className="px-3 py-1 rounded-full text-xs font-medium"
                                        style={{
                                          backgroundColor: 'var(--bg-secondary)',
                                          color: 'var(--text-primary)',
                                          border: '1px solid var(--border-color)'
                                        }}>
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Detailed Metrics */}
                            <div>
                              <h5 className="text-md font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                Impact Metrics
                              </h5>
                              <div className="space-y-2">
                                {exp.metrics.map((metric, idx) => (
                                  <div key={idx} className="flex justify-between items-center p-2 rounded-md"
                                       style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                    <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                                      {metric.description}
                                    </span>
                                    <span className="font-bold" style={{ color: 'var(--accent-primary)' }}>
                                      {metric.value}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>

                      {/* Expand/Collapse Indicator */}
                      <div className="mt-4 text-center">
                        <motion.div
                          animate={{ rotate: expandedItem === exp.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="inline-flex items-center text-sm cursor-pointer"
                          style={{ color: 'var(--accent-primary)' }}
                        >
                          <span className="mr-2">
                            {expandedItem === exp.id ? 'Show Less' : 'Show Details'}
                          </span>
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>3+</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Years Experience</div>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>100+</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Students Mentored</div>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>50%</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Efficiency Improvement</div>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}>
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>2</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Organizations</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;