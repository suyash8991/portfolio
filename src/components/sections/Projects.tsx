import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Zap, 
  Target, 
  Award,
  Calendar,
  TrendingUp
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  timeline: string;
  status: 'completed' | 'ongoing' | 'planned';
  image: string;
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'osu-chatbot',
      title: 'OSU Research Chatbot',
      subtitle: 'The All-Seeing Eye of Knowledge',
      description: 'An enterprise-grade RAG system that serves as the ultimate research companion, indexing over 2000 PDFs with lightning-fast retrieval and unmatched accuracy. This system demonstrates mastery over the cutting-edge realm of retrieval-augmented generation.',
      features: [
        'Lightning-fast sub-2 second response times',
        '100% context precision with enterprise reliability',
        'Advanced embeddings and vector database optimization',
        '24/7 research assistance capability',
        'Scalable architecture handling massive document collections'
      ],
      technologies: ['Python', 'FAISS', 'ChromaDB', 'FlashRank', 'GCP', 'Langchain', 'Vector Embeddings'],
      metrics: [
        { label: 'Response Time', value: '<2s', icon: <Zap className="w-4 h-4" /> },
        { label: 'Context Precision', value: '100%', icon: <Target className="w-4 h-4" /> },
        { label: 'F1 Score', value: '0.92', icon: <Award className="w-4 h-4" /> },
        { label: 'Documents Indexed', value: '2000+', icon: <Eye className="w-4 h-4" /> }
      ],
      timeline: 'Oct 2024 – Jun 2025',
      status: 'ongoing',
      image: '/api/placeholder/600/400'
    },
    {
      id: 'income-prediction',
      title: 'Adult Income Prediction',
      subtitle: 'Predicting the Realm\'s Prosperity',
      description: 'A sophisticated machine learning conquest that peers into the economic fates of individuals, achieving remarkable accuracy through advanced feature engineering and model optimization. This project showcases expertise in traditional ML and data science mastery.',
      features: [
        'Advanced Random Forest classifier implementation',
        'Sophisticated feature engineering pipeline',
        'Minority class recall optimization',
        'Comprehensive statistical analysis',
        'Production-ready model deployment'
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'UCI Census Data'],
      metrics: [
        { label: 'Accuracy', value: '86%', icon: <Target className="w-4 h-4" /> },
        { label: 'Recall Improvement', value: '+9%', icon: <TrendingUp className="w-4 h-4" /> },
        { label: 'Features Engineered', value: '15+', icon: <Zap className="w-4 h-4" /> }
      ],
      timeline: 'Jan 2024 – Mar 2024',
      status: 'completed',
      image: '/api/placeholder/600/400'
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'text-gold-accent border-gold-accent';
      case 'completed': return 'text-ice-blue border-ice-blue';
      case 'planned': return 'text-steel-blue border-steel-blue';
      default: return 'text-gold-accent border-gold-accent';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ongoing': return 'Active Campaign';
      case 'completed': return 'Victory Achieved';
      case 'planned': return 'Future Conquest';
      default: return 'Unknown';
    }
  };

  return (
    <section id="projects" className="section-alternate parchment-texture">
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
              <span className="text-4xl mr-3">🏆</span>
              Epic Conquests
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            <p className="text-lg italic mb-4" style={{ color: 'var(--accent-primary)' }}>
              Legendary achievements in AI & data science
            </p>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Innovative projects that demonstrate mastery of artificial intelligence, 
              machine learning, and enterprise-grade system development in real-world scenarios.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`medieval-border p-1 ${
                  selectedProject === project.id ? 'ring-2 ring-gold-accent' : ''
                }`}
                onHoverStart={() => setSelectedProject(project.id)}
                onHoverEnd={() => setSelectedProject(null)}
              >
                <div className="medieval-border-content p-8">
                  <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-8 items-center`}>
                    {/* Project Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="medieval-border p-1">
                        <div className="medieval-border-content overflow-hidden rounded-lg">
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                            whileHover={{ scale: 1.02 }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                      {/* Header */}
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-medieval text-gold-accent">
                            {project.title}
                          </h3>
                          <div className={`px-3 py-1 text-xs border rounded-full ${getStatusColor(project.status)}`}>
                            {getStatusText(project.status)}
                          </div>
                        </div>
                        <h4 className="text-xl text-dragon-red font-medieval mb-2">
                          {project.subtitle}
                        </h4>
                        <div className="flex items-center gap-2 text-steel-blue mb-4">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.timeline}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-stark-white leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div>
                        <h5 className="text-lg font-medieval text-gold-accent mb-3">
                          Key Conquests
                        </h5>
                        <ul className="space-y-2">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-stark-white">
                              <span className="text-gold-accent mt-1">⚡</span>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center p-3 bg-iron-grey/30 rounded-lg border border-gold-accent/20">
                            <div className="flex items-center justify-center gap-2 text-gold-accent mb-1">
                              {metric.icon}
                              <span className="text-xl font-bold">{metric.value}</span>
                            </div>
                            <div className="text-xs text-steel-blue">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-lg font-medieval text-gold-accent mb-3">
                          Weapons Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-xs bg-gold-accent/10 text-gold-accent border border-gold-accent/30 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      {project.links && (
                        <div className="flex gap-4">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-iron-grey text-stark-white rounded hover:bg-gold-accent hover:text-night-black transition-colors"
                            >
                              <Github className="w-4 h-4" />
                              <span>View Code</span>
                            </a>
                          )}
                          {project.links.demo && (
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-gold-accent text-night-black rounded hover:bg-dragon-red hover:text-stark-white transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="medieval-border p-1 max-w-2xl mx-auto">
              <div className="medieval-border-content p-8">
                <h3 className="text-2xl font-medieval text-gold-accent mb-4">
                  Ready for the Next Conquest?
                </h3>
                <p className="text-stark-white mb-6">
                  These victories are just the beginning. Let's discuss how I can bring 
                  this level of excellence to your organization's greatest challenges.
                </p>
                <button className="medieval-button">
                  Join Forces
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
