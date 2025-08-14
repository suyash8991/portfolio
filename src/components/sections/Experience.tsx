import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  TrendingUp, 
  Award,
  Calendar,
  MapPin,
  BookOpen
} from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'education' | 'teaching';
  description: string;
  achievements: string[];
  skills: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences: Experience[] = [
    {
      id: 'osu-ta',
      title: 'Graduate Teaching Assistant',
      company: 'Oregon State University',
      location: 'Corvallis, OR',
      period: 'Sep 2023 – Jun 2025',
      type: 'teaching',
      description: 'Serving as the Keeper of Knowledge, mentoring the next generation of developers in the ancient arts of databases and software engineering. Through systematic guidance and data-driven optimization, I help forge skilled warriors ready for the battles of the tech realm.',
      achievements: [
        'Mentored 100+ students in SQL optimization and database design mastery',
        'Reduced student coding errors by 20% through systematic code reviews',
        'Improved course efficiency by 15% through data-driven material optimization',
        'Specialized in PostgreSQL, Python, and Git version control training'
      ],
      skills: ['Teaching', 'PostgreSQL', 'Python', 'Git', 'Code Review', 'Curriculum Development'],
      metrics: [
        { label: 'Students Mentored', value: '100+' },
        { label: 'Error Reduction', value: '20%' },
        { label: 'Course Efficiency', value: '+15%' }
      ]
    },
    {
      id: 'tcs-analyst',
      title: 'Data Analyst',
      company: 'Tata Consultancy Services',
      location: 'Mumbai, India',
      period: 'Aug 2020 – Jul 2023',
      type: 'work',
      description: 'As a Master of Business Intelligence, I wielded the power of data to transform chaos into clarity. My quest involved building fortress-like dashboards and automated workflows that served the realm\'s decision-makers with unwavering precision.',
      achievements: [
        'Automated risk analysis workflows, reducing manual effort by 30%',
        'Built interactive dashboards improving decision-making by 40%',
        'Designed executive reporting systems reducing manual work by 50%',
        'Integrated SAP ERP systems with modern BI solutions for seamless data flow'
      ],
      skills: ['Power BI', 'Qlik Sense', 'SQL Server', 'SAP ERP', 'Data Analytics', 'Business Intelligence'],
      metrics: [
        { label: 'Manual Effort Reduced', value: '30%' },
        { label: 'Decision Speed', value: '+40%' },
        { label: 'Reporting Efficiency', value: '+50%' }
      ]
    },
    {
      id: 'osu-masters',
      title: 'Master of Science in Computer Science',
      company: 'Oregon State University',
      location: 'Corvallis, OR',
      period: 'Sep 2023 – Jun 2025',
      type: 'education',
      description: 'Pursuing advanced mastery in the mystical arts of Artificial Intelligence. Under the guidance of renowned maesters, I delve deep into the cutting-edge realms of machine learning, neural networks, and the ancient wisdom of computational theory.',
      achievements: [
        'Maintaining a stellar 3.96 GPA worthy of the finest maesters',
        'Specialization in Artificial Intelligence and Machine Learning',
        'Advanced coursework in Deep Learning, NLP, and Computer Vision',
        'Research focus on RAG systems and large language models'
      ],
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Research Methods', 'AI Ethics'],
      metrics: [
        { label: 'Current GPA', value: '3.96' },
        { label: 'Graduation', value: 'Jun 2025' }
      ]
    },
    {
      id: 'mumbai-bachelors',
      title: 'Bachelor of Engineering in Computer Science',
      company: 'University of Mumbai',
      location: 'Mumbai, India',
      period: '2016 – 2020',
      type: 'education',
      description: 'The foundational years where I first discovered the ancient texts of computer science. Here, I learned the fundamental spells of programming, algorithms, and system design that would serve as the bedrock for all future conquests.',
      achievements: [
        'Strong foundation in computer science fundamentals',
        'Specialization in software engineering and database systems',
        'Projects in web development and data structures',
        'Leadership roles in technical societies and coding competitions'
      ],
      skills: ['Programming Fundamentals', 'Data Structures', 'Algorithms', 'Software Engineering', 'Database Design', 'Web Development']
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return <Briefcase className="w-6 h-6" />;
      case 'teaching': return <Users className="w-6 h-6" />;
      case 'education': return <GraduationCap className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'work': return 'text-dragon-red border-dragon-red';
      case 'teaching': return 'text-gold-accent border-gold-accent';
      case 'education': return 'text-ice-blue border-ice-blue';
      default: return 'text-steel-blue border-steel-blue';
    }
  };

  return (
    <section id="experience" className="section-primary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="section-title">
              <span className="section-icon">🛤️</span>
              The Path of Service
            </h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              A Chronicle of Professional Growth
            </p>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto text-center leading-relaxed">
              A journey of dedication across industry, academia, and teaching—
              each chapter building upon the last in continuous growth and mastery
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold-accent via-dragon-red to-ice-blue"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-20"
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-0 w-16 h-16 rounded-full border-4 ${getColor(exp.type)} bg-night-black flex items-center justify-center`}>
                    {getIcon(exp.type)}
                  </div>

                  {/* Experience Card */}
                  <div className="medieval-border p-1">
                    <div className="medieval-border-content p-8">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-medieval text-gold-accent mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-steel-blue mb-4">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span className="font-semibold text-stark-white">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-stark-white leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Achievements */}
                        <div>
                          <h4 className="text-lg font-medieval text-gold-accent mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            Key Victories
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-2 text-stark-white">
                                <span className="text-gold-accent mt-1 text-sm">⚔️</span>
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills & Metrics */}
                        <div className="space-y-6">
                          {/* Metrics (if available) */}
                          {exp.metrics && exp.metrics.length > 0 && (
                            <div>
                              <h4 className="text-lg font-medieval text-gold-accent mb-4">
                                Battle Statistics
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {exp.metrics.map((metric, metricIndex) => (
                                  <div key={metricIndex} className="text-center p-3 bg-iron-grey/30 rounded border border-gold-accent/20">
                                    <div className="text-xl font-bold text-gold-accent">{metric.value}</div>
                                    <div className="text-xs text-steel-blue">{metric.label}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Skills */}
                          <div>
                            <h4 className="text-lg font-medieval text-gold-accent mb-4">
                              Skills Forged
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className={`px-3 py-1 text-xs rounded-full ${
                                    exp.type === 'work' ? 'bg-dragon-red/10 text-dragon-red border border-dragon-red/30' :
                                    exp.type === 'teaching' ? 'bg-gold-accent/10 text-gold-accent border border-gold-accent/30' :
                                    'bg-ice-blue/10 text-ice-blue border border-ice-blue/30'
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="medieval-border p-1">
              <div className="medieval-border-content p-8">
                <h3 className="text-2xl font-medieval text-gold-accent text-center mb-8">
                  Journey Summary
                </h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div className="p-4">
                    <div className="text-3xl font-bold text-dragon-red mb-2">3+</div>
                    <div className="text-steel-blue text-sm">Years Industry Experience</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-gold-accent mb-2">100+</div>
                    <div className="text-steel-blue text-sm">Students Mentored</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-ice-blue mb-2">3.96</div>
                    <div className="text-steel-blue text-sm">Graduate GPA</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-steel-blue mb-2">2025</div>
                    <div className="text-steel-blue text-sm">Ready for Battle</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
