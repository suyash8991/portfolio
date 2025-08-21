import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

import { 
  ExternalLink, 
  Zap, 
  Target, 
  Award,
  TrendingUp,
  Brain,
  Database,
  MessageSquare,
  Activity,
  Github,
  Calendar,
  Code,
  Lightbulb,
  Expand // Icon for the hover hint
} from 'lucide-react';

interface ProjectMetric {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  status: "active" | "completed" | "in-progress";
  timeline: string;
  technologies: string[];
  metrics: ProjectMetric[];
  challenges: string[];
  impact: string;
  demoUrl?: string;
  githubUrl?: string;
  image: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  const projects: Project[] = [
    {
      id: "osu-chatbot",
      title: "OSU Research Chatbot",
      subtitle: "The All-Seeing Eye of Knowledge",
      description: "An enterprise-grade RAG system that serves as the ultimate research companion, indexing over 2000 PDFs with lightning-fast retrieval and unmatched accuracy.",
      detailedDescription: "Advanced RAG-based chatbot leveraging LangChain and vector embeddings to provide precise, contextual responses from a comprehensive research database. Implements semantic search with real-time document processing and enterprise-grade reliability.",
      status: "active",
      timeline: "Oct 2024 – Jun 2025",
      technologies: ["Python", "FAISS", "ChromaDB", "FlashRank", "GCP", "Langchain", "Vector Embeddings"],
      metrics: [
        { label: "Response Time", value: "<2s", icon: <Zap className="w-4 h-4" /> },
        { label: "Context Precision", value: "100%", icon: <Brain className="w-4 h-4" /> },
        { label: "F1 Score", value: "0.92", icon: <Database className="w-4 h-4" /> },
        { label: "Documents Indexed", value: "2000+", icon: <MessageSquare className="w-4 h-4" /> },
      ],
      challenges: [
        "Handling massive document collections efficiently",
        "Optimizing vector search for sub-2 second response times",
        "Ensuring 100% context precision across diverse content types"
      ],
      impact: "Reduced research time by 60% for graduate students and improved research accuracy through precise context retrieval",
      image: `projects/osu chatbot.png`,
      githubUrl: "https://github.com/suyash8991/osu-research-chatbot"
    },
    {
      id: "parkinsons-prediction",
      title: "Parkinson's Disease Prediction",
      subtitle: "Voice of the Future",
      description: "A machine learning project that analyzes vocal biomarkers to predict Parkinson's Disease with high accuracy.",
      detailedDescription: "Comprehensive machine learning pipeline utilizing ensemble methods and feature engineering to analyze vocal biomarkers for early Parkinson's detection. Implements cross-validation and hyperparameter optimization for maximum predictive power.",
      status: "completed",
      timeline: "Mar 2025 – May 2025",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib", "Kaggle Dataset"],
      metrics: [
        { label: "Best Accuracy", value: "92.31%", icon: <Brain className="w-4 h-4" /> },
        { label: "ROC AUC", value: "0.9345", icon: <Activity className="w-4 h-4" /> },
        { label: "Features Analyzed", value: "24", icon: <Database className="w-4 h-4" /> },
        { label: "Cross-Validation", value: "10-Fold", icon: <MessageSquare className="w-4 h-4" /> },
      ],
      challenges: [
        "Handling class imbalance in medical datasets",
        "Feature engineering for voice biomarkers",
        "Model selection and hyperparameter optimization"
      ],
      impact: "Demonstrated potential for early disease detection and achieved state-of-the-art accuracy in voice-based diagnosis",
      image: `projects/parkinson.png`,
      githubUrl: "https://github.com/suyash8991/parkinsons-prediction"
    },
    {
      id: "income-prediction",
      title: "Adult Income Prediction",
      subtitle: "Predicting the Realm's Prosperity",
      description: "A sophisticated machine learning conquest that peers into the economic fates of individuals, achieving remarkable accuracy through advanced feature engineering.",
      detailedDescription: "Advanced machine learning pipeline implementing Random Forest classifiers with sophisticated feature engineering and minority class optimization. Features comprehensive statistical analysis and production-ready model deployment.",
      status: "completed",
      timeline: "Jan 2024 – Mar 2024",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "UCI Census Data"],
      metrics: [
        { label: "Accuracy", value: "86%", icon: <Target className="w-4 h-4" /> },
        { label: "Recall Improvement", value: "+9%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Features Engineered", value: "15+", icon: <Zap className="w-4 h-4" /> },
        { label: "Model Performance", value: "Optimized", icon: <Award className="w-4 h-4" /> },
      ],
      challenges: [
        "Addressing class imbalance in income prediction",
        "Feature engineering for demographic data",
        "Optimizing model performance for minority classes"
      ],
      impact: "Improved prediction accuracy by 9% and enhanced understanding of income determinants through advanced ML techniques",
      image: `projects/adult_income.png`,
      githubUrl: "https://github.com/suyash8991/income-prediction"
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
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="projects" className="py-20 section-alternate">
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
            <h2 className="gradient-title">
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

          {/* Interactive Project Cards */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="relative overflow-hidden cursor-pointer rounded-xl bg-gradient-to-br from-slate-700/20 via-slate-600/20 to-slate-800/20 border border-slate-700/50 backdrop-blur-sm"
                style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(148,163,184,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(148,163,184,0.1) 0%, transparent 50%)" }}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Background overlay for readability */}
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]" />

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-contain"
                    style={{ objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                </div>

                <div className="relative z-10 p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="font-bold text-white mb-2 font-serif text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 font-medium">{project.subtitle}</p>
                    <div className="flex items-center gap-4 mt-3 text-sm text-slate-400">
                      <span>{project.timeline}</span>
                      <span>•</span>
                      <span className="capitalize">Project</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-200 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-slate-400">{metric.icon}</span>
                          <span className="text-xs text-slate-400 uppercase tracking-wide">{metric.label}</span>
                        </div>
                        <div className="text-xl font-bold text-white">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technology badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-200 border border-slate-600/50 hover:bg-slate-600/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Overlay for click hint */}
                <motion.div
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-slate-900/70"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Expand className="w-8 h-8 text-white" />
                  <p className="font-semibold text-white">Click for Details</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="fixed inset-0 bg-slate-900/80 z-40 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  layoutId={`project-card-${selectedProject.id}`}
                  className="w-full max-w-7xl bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                  style={{ maxHeight: '95vh' }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                    {/* Left Side - Enhanced Image */}
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <img
                        src={selectedProject.image}
                        alt={`${selectedProject.title} preview`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    </div>

                    {/* Right Side - Detailed Content */}
                    <div className="p-6 lg:p-8 overflow-y-auto" style={{ maxHeight: 'calc(95vh - 2rem)' }}>
                      <motion.div 
                        className="space-y-4 lg:space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } }}
                        exit={{ opacity: 0, y: 20 }}
                      >
                        {/* Header */}
                        <div className="border-b border-slate-700/50 pb-4">
                          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-serif">
                            {selectedProject.title}
                          </h2>
                          <p className="text-base lg:text-lg text-slate-300 font-medium mb-3">
                            {selectedProject.subtitle}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-slate-400 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{selectedProject.timeline}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Code className="w-4 h-4" />
                              <span>{selectedProject.technologies.length} Technologies</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-3">
                          <h3 className="text-lg lg:text-xl font-semibold text-white">Project Overview</h3>
                          <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
                            {selectedProject.detailedDescription}
                          </p>
                        </div>

                        {/* Metrics Grid */}
                        <div className="space-y-3">
                          <h3 className="text-lg lg:text-xl font-semibold text-white">Performance Metrics</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {selectedProject.metrics.map((metric, idx) => (
                              <div key={idx} className="bg-slate-700/60 rounded-lg p-3 border border-slate-600/50">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-slate-400">{metric.icon}</span>
                                  <span className="text-xs text-slate-400 uppercase tracking-wide font-medium">{metric.label}</span>
                                </div>
                                <div className="text-base lg:text-lg font-bold text-white">{metric.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technical Challenges */}
                        <div className="space-y-3">
                          <h3 className="text-lg lg:text-xl font-semibold text-white flex items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-yellow-400" />
                            Technical Challenges
                          </h3>
                          <ul className="space-y-2">
                            {selectedProject.challenges.map((challenge, idx) => (
                              <li key={idx} className="text-sm lg:text-base text-slate-300 flex items-start gap-2">
                                <span className="text-orange-400 mt-1">•</span>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact & Results */}
                        <div className="space-y-3">
                          <h3 className="text-lg lg:text-xl font-semibold text-white flex items-center gap-2">
                            <Target className="w-5 h-5 text-green-400" />
                            Impact & Results
                          </h3>
                          <p className="text-sm lg:text-base text-slate-300">
                            {selectedProject.impact}
                          </p>
                        </div>

                        {/* Technology Stack */}
                        <div className="space-y-3">
                          <h3 className="text-lg lg:text-xl font-semibold text-white flex items-center gap-2">
                            <Code className="w-5 h-5 text-blue-400" />
                            Technology Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech) => (
                              <span key={tech} className="px-2 py-1 text-xs lg:text-sm rounded-full bg-slate-700/60 text-slate-200 border border-slate-600/50">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-700/50">
                          {selectedProject.demoUrl && (
                            <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--bg-primary)', boxShadow: '0 4px 20px var(--shadow-color)' }}>
                              <span>View Demo</span>
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          )}
                          {selectedProject.githubUrl && (
                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105 border border-slate-600 bg-slate-700/60 text-slate-200">
                              <span>View Code</span>
                              <Github className="w-4 h-4 mr-2" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="p-8 rounded-2xl" style={{ 
              background: 'linear-gradient(135deg, var(--accent-primary)10, var(--accent-secondary)10)',
              border: '2px solid var(--accent-primary)'
            }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Ready to Forge New Alliances?
              </h3>
              <p className="text-base mb-6" style={{ color: 'var(--text-secondary)' }}>
                Let's discuss how we can create something extraordinary together.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--bg-primary)',
                  boxShadow: '0 4px 20px var(--shadow-color)'
                }}
              >
                <span>Send Raven</span>
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;