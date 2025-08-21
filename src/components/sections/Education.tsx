import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';


interface Course {
  name: string;
  description?: string;
}

interface Achievement {
  title: string;
  description: string;
}

interface EducationItem {
  id: string;
  year: string;
  institution: string;
  degree: string;
  concentration?: string;
  gpa: string;
  location: string;
  status?: string;
  courses: Course[];
  achievements: Achievement[];
  icon: string;
}

const Education = () => {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [dragonRotationState, setDragonRotationState] = useState(0);

  
  // Scroll progress for dragon animation
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"] // Better offset for smoother animation
  });
  
  // Transform scroll progress to dragon position and rotation
  const dragonY = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
  
  // Update dragon rotation state based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const rotation = latest * 180; // Convert 0-1 to 0-180 degrees
      setDragonRotationState(rotation);
    });
    
    return unsubscribe;
  }, [scrollYProgress]);
  
  // Dynamic line height - grows to reach the end of second education item
  // Need to account for the actual height of the second education card
  const dynamicLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]); // Extended to reach second card end

  const educationData: EducationItem[] = [
    {
      id: 'osu',
      year: '2023-2025',
      institution: 'Oregon State University',
      degree: 'Master of Science - Computer Science',
      concentration: 'Artificial Intelligence',
      gpa: '3.96',
      location: 'Oregon, USA',
      status: 'June 2025',
      icon: '🏛️',
      courses: [
        { name: 'Deep Learning', description: 'Neural networks and advanced AI architectures' },
        { name: 'Natural Language Processing', description: 'Language models and text analysis' },
        { name: 'System Design', description: 'Large-scale distributed systems' },
        { name: 'Database Management Systems', description: 'Advanced database concepts and optimization' },
        { name: 'Algorithms & Data Structures', description: 'Advanced algorithmic problem solving' }
      ],
      achievements: [
        {
          title: 'Graduate Teaching Assistant',
          description: 'Mentored 100+ students in programming fundamentals, reducing coding errors by 20%'
        },
        {
          title: 'AI Research Projects',
          description: 'Led development of RAG-based chatbot system for university departments'
        },
        {
          title: 'Academic Excellence',
          description: 'Maintained 3.96 GPA while balancing teaching responsibilities'
        }
      ]
    },
    {
      id: 'frcrce',
      year: '2016-2020',
      institution: 'Fr. Conceicao Rodrigues College of Engineering',
      degree: 'Bachelor of Engineering - Computer Engineering',
      gpa: '8.83',
      location: 'Mumbai, India',
      icon: '🏫',
      courses: [
        { name: 'Data Structures and Algorithms', description: 'Foundation of computational thinking' },
        { name: 'Computer Networks', description: 'Network protocols and distributed systems' },
        { name: 'Artificial Intelligence', description: 'Introduction to AI concepts and applications' },
        { name: 'Probability and Statistics', description: 'Mathematical foundations for data science' },
        { name: 'Software Engineering', description: 'Software development methodologies' }
      ],
      achievements: [
        {
          title: 'Distinguished Graduate',
          description: 'Graduated with 8.83 GPA, ranking in top 10% of class'
        },
        {
          title: 'Technical Projects',
          description: 'Developed multiple full-stack applications and AI projects'
        },
        {
          title: 'Academic Leadership',
          description: 'Led student technical committees and organized coding competitions'
        }
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
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5
      }
    }
  };

  const toggleExpansion = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <section id="education" className="py-20 section-alternate">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="gradient-title">
              <span className="text-4xl mr-3">🏛️</span>
              Houses of Learning
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            <p className="text-lg italic mb-4" style={{ color: 'var(--accent-primary)' }}>
              The academic journey that forged knowledge into wisdom
            </p>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From the foundations of engineering to the cutting edge of artificial intelligence, 
              each institution has contributed to building expertise in computer science and AI.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative" ref={timelineRef}>
            {/* Timeline Line */}
            <motion.div
              variants={timelineVariants}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 origin-top transform md:-translate-x-1/2 rounded-full timeline-line-with-dragon"
              style={{
                background: `linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))`
              }}
            />

            {/* Dynamic Dragon Trail Line - grows from first dot to second dot */}
            <motion.div
              className="absolute left-8 md:left-1/2 w-1 transform md:-translate-x-1/2 z-10 dragon-trail-line"
              style={{
                top: '0%',
                height: dynamicLineHeight,
                background: 'var(--accent-primary)',
                boxShadow: '0 0 8px var(--accent-primary)',
                borderRadius: '1px'
              }}
            />

            {/* Animated Dragon - Flying Down */}
            <motion.div
              className="absolute left-8 md:left-1/2 w-16 h-16 z-20 timeline-dragon dragon-movement"
              style={{
                top: dragonY,
                transform: `translateX(-50%) rotate(${dragonRotationState}deg)`
              }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              {/* Use the actual dragon.svg file */}
              <img
                src={`${import.meta.env.BASE_URL}logos/dragon.svg`}
                alt="Dragon"
                className="w-full h-full dragon-svg"
                style={{ 
                  filter: 'var(--dragon-filter)'
                }}
              />
            </motion.div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 transform md:-translate-x-1/2 rounded-full border-4 z-10"
                       style={{
                         backgroundColor: 'var(--bg-primary)',
                         borderColor: 'var(--accent-primary)',
                         boxShadow: '0 0 20px var(--glow-color)'
                       }}>
                    <motion.div
                      className="w-full h-full rounded-full"
                      style={{ backgroundColor: 'var(--accent-primary)' }}
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  {/* Education Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
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
                      onClick={() => toggleExpansion(item.id)}
                    >
                      {/* Institution Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{item.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                              {item.institution}
                            </h3>
                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                              <MapPin className="w-4 h-4 inline mr-1" />
                              {item.location}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                                style={{
                                  backgroundColor: 'var(--accent-primary)20',
                                  color: 'var(--accent-primary)'
                                }}>
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.year}
                          </span>
                        </div>
                      </div>

                      {/* Degree Information */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--accent-primary)' }}>
                          {item.degree}
                        </h4>
                        {item.concentration && (
                          <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                            Concentration: {item.concentration}
                          </p>
                        )}
                        <div className="flex items-center gap-4">
                          <span className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <Award className="w-4 h-4 mr-1" />
                            GPA: <strong className="ml-1" style={{ color: 'var(--accent-primary)' }}>{item.gpa}</strong>
                          </span>
                          {item.status && (
                            <span className="text-sm" style={{ color: 'var(--accent-primary)' }}>
                              {item.status}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Expandable Content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedItem === item.id ? 'auto' : 0,
                          opacity: expandedItem === item.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        {expandedItem === item.id && (
                          <div className="pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                            {/* Key Courses */}
                            <div className="mb-6">
                              <h5 className="text-md font-semibold mb-3 flex items-center" style={{ color: 'var(--text-primary)' }}>
                                <BookOpen className="w-4 h-4 mr-2" />
                                Key Courses
                              </h5>
                              <div className="grid md:grid-cols-2 gap-2">
                                {item.courses.map((course, idx) => (
                                  <div key={idx} className="p-2 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                                      {course.name}
                                    </span>
                                    {course.description && (
                                      <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                                        {course.description}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Achievements */}
                            <div>
                              <h5 className="text-md font-semibold mb-3 flex items-center" style={{ color: 'var(--text-primary)' }}>
                                <GraduationCap className="w-4 h-4 mr-2" />
                                Achievements
                              </h5>
                              <div className="space-y-3">
                                {item.achievements.map((achievement, idx) => (
                                  <div key={idx} className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: 'var(--accent-primary)' }} />
                                    <div>
                                      <h6 className="text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>
                                        {achievement.title}
                                      </h6>
                                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                        {achievement.description}
                                      </p>
                                    </div>
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
                          animate={{ rotate: expandedItem === item.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="inline-flex items-center text-sm cursor-pointer"
                          style={{ color: 'var(--accent-primary)' }}
                        >
                          <span className="mr-2">
                            {expandedItem === item.id ? 'Show Less' : 'Show Details'}
                          </span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
