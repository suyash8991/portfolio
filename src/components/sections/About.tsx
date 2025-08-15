import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Users, MapPin, Target } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      opacity: 1
    }
  };

  return (
    <section id="about" className="section-alternate">
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
              <span className="section-icon">📜</span>
              The Maester's Journey
            </h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              From Ancient Lands to Modern Mastery
            </p>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto text-center leading-relaxed">
              From the vibrant halls of Mumbai to the innovative corridors of Oregon State, 
              a dedicated quest for knowledge in the realm of Artificial Intelligence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="card-background p-8">
                <h3 className="text-2xl font-medieval primary-text mb-6 flex items-center">
                  <span className="section-icon text-accent-text mr-3">🏛️</span>
                  The Origin Story
                </h3>
                <div className="section-divider w-12 ml-0 mb-6"></div>
                <p className="text-text-primary leading-relaxed mb-6">
                  My journey began in the vibrant city of Mumbai, where I first discovered 
                  the profound arts of engineering and computation. Like a young scholar 
                  studying the mysteries of knowledge, I delved deep into the foundations 
                  of technology and data.
                </p>
                <p className="text-text-primary leading-relaxed">
                  The call to adventure led me across the seas to Oregon State University, 
                  where I now pursue mastery in Computer Science with a concentration in 
                  Artificial Intelligence, maintaining a <span className="accent-text font-semibold">3.96 GPA</span> worthy of academic excellence.
                </p>
              </div>

              <div className="card-background p-8">
                <h3 className="text-2xl font-medieval primary-text mb-6 flex items-center">
                  <span className="section-icon text-accent-text mr-3">⚔️</span>
                  The Current Quest
                </h3>
                <div className="section-divider w-12 ml-0 mb-6"></div>
                <p className="text-text-primary leading-relaxed">
                  As I prepare to graduate in <span className="accent-text font-semibold">June 2025</span>, I stand ready to bring my knowledge 
                  to the realm of technology. My expertise spans from the foundational disciplines 
                  of data analysis to the cutting-edge realm of RAG-based AI systems.
                </p>
              </div>
            </motion.div>

            {/* Stats and Highlights */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-iron-grey/50 rounded-lg border border-gold-accent/20">
                  <GraduationCap className="w-8 h-8 text-gold-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gold-accent">3.96</div>
                  <div className="text-sm text-steel-blue">GPA</div>
                </div>
                <div className="text-center p-6 bg-iron-grey/50 rounded-lg border border-gold-accent/20">
                  <Users className="w-8 h-8 text-gold-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gold-accent">100+</div>
                  <div className="text-sm text-steel-blue">Students Mentored</div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="medieval-border p-1">
                <div className="medieval-border-content p-6">
                  <h4 className="text-xl font-medieval text-gold-accent mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Current Focus
                  </h4>
                  <ul className="space-y-2 text-stark-white">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-accent mt-2">•</span>
                      <span>RAG-based AI systems with enterprise-grade performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-accent mt-2">•</span>
                      <span>Teaching excellence in database systems and software development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-accent mt-2">•</span>
                      <span>Research in AI optimization and retrieval systems</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Location */}
              <div className="text-center p-6 bg-dragon-red/10 border border-dragon-red/30 rounded-lg">
                <MapPin className="w-6 h-6 text-dragon-red mx-auto mb-2" />
                <div className="text-lg font-medieval text-dragon-red">Based in San Francisco, CA</div>
                <div className="text-sm text-steel-blue">Open to opportunities across the realm</div>
              </div>
            </motion.div>
          </div>

          {/* Teaching Legacy */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="medieval-border p-1 max-w-4xl mx-auto">
              <div className="medieval-border-content p-8">
                <h3 className="text-2xl font-medieval text-gold-accent mb-4">
                  The Teaching Legacy
                </h3>
                <p className="text-stark-white leading-relaxed">
                  Like the maesters of old who passed knowledge to the next generation, 
                  I have mentored over 100 students in the arts of databases and software development. 
                  Through systematic code reviews and data-driven optimization, I've helped reduce 
                  coding errors by 20% and improved course efficiency by 15%, ensuring that the 
                  knowledge of the realm continues to grow and flourish.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
