import { motion, useInView } from 'framer-motion';
import { useRef, useState, type MouseEvent } from 'react';
import { 
  ExternalLink, 
  Zap, 
  Target, 
  Award,
  TrendingUp,
  Brain,
  Database,
  MessageSquare,
  Activity
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
  category: "ai" | "data" | "fullstack";
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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const projects: Project[] = [
    {
      id: "osu-chatbot",
      title: "OSU Research Chatbot",
      subtitle: "The All-Seeing Eye of Knowledge",
      description: "An enterprise-grade RAG system that serves as the ultimate research companion, indexing over 2000 PDFs with lightning-fast retrieval and unmatched accuracy.",
      detailedDescription: "Advanced RAG-based chatbot leveraging LangChain and vector embeddings to provide precise, contextual responses from a comprehensive research database. Implements semantic search with real-time document processing and enterprise-grade reliability.",
      status: "active",
      timeline: "Oct 2024 – Jun 2025",
      category: "ai",
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
      image: `${import.meta.env.BASE_URL}projects/osu chatbot.png`
    },
    {
      id: "parkinsons-prediction",
      title: "Parkinson's Disease Prediction",
      subtitle: "Voice of the Future",
      description: "A machine learning project that analyzes vocal biomarkers to predict Parkinson's Disease with high accuracy.",
      detailedDescription: "Comprehensive machine learning pipeline utilizing ensemble methods and feature engineering to analyze vocal biomarkers for early Parkinson's detection. Implements cross-validation and hyperparameter optimization for maximum predictive power.",
      status: "completed",
      timeline: "Mar 2025 – May 2025",
      category: "ai",
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
      image: `${import.meta.env.BASE_URL}projects/parkinson.png`
    },
    {
      id: "income-prediction",
      title: "Adult Income Prediction",
      subtitle: "Predicting the Realm's Prosperity",
      description: "A sophisticated machine learning conquest that peers into the economic fates of individuals, achieving remarkable accuracy through advanced feature engineering.",
      detailedDescription: "Advanced machine learning pipeline implementing Random Forest classifiers with sophisticated feature engineering and minority class optimization. Features comprehensive statistical analysis and production-ready model deployment.",
      status: "completed",
      timeline: "Jan 2024 – Mar 2024",
      category: "data",
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
      image: `${import.meta.env.BASE_URL}projects/adult_income.png`
    }
  ];

  const statusConfig = {
    active: { label: "Active Campaign", color: "bg-orange-500 text-white", glow: "shadow-orange-500/20" },
    completed: { label: "Victory Achieved", color: "bg-yellow-500 text-black", glow: "shadow-yellow-500/20" },
    "in-progress": { label: "In Progress", color: "bg-blue-500 text-white", glow: "shadow-blue-500/20" },
  };

  const categoryGradients = {
    ai: "from-orange-600/20 via-red-600/20 to-orange-800/20",
    data: "from-blue-600/20 via-cyan-600/20 to-blue-800/20",
    fullstack: "from-purple-600/20 via-indigo-600/20 to-purple-800/20",
  };

  const categoryPatterns = {
    ai: "radial-gradient(circle at 20% 80%, rgba(255,165,0,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,69,0,0.1) 0%, transparent 50%)",
    data: "linear-gradient(45deg, rgba(59,130,246,0.05) 25%, transparent 25%), linear-gradient(-45deg, rgba(59,130,246,0.05) 25%, transparent 25%)",
    fullstack: "conic-gradient(from 0deg at 50% 50%, rgba(147,51,234,0.1) 0deg, transparent 60deg, rgba(147,51,234,0.1) 120deg, transparent 180deg)",
  };

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

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, projectId: string) => {
    const card = cardRefs.current[projectId];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleMouseLeave = (projectId: string) => {
    const card = cardRefs.current[projectId];
    if (!card) return;

    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    setHoveredCard(null);
  };

  const toggleExpanded = (projectId: string) => {
    setExpandedCard(expandedCard === projectId ? null : projectId);
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

          {/* Interactive Project Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const isExpanded = expandedCard === project.id;
              const isHovered = hoveredCard === project.id;
              const status = statusConfig[project.status];

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  ref={(el) => {
                    cardRefs.current[project.id] = el;
                  }}
                  className={`
                    relative overflow-hidden cursor-pointer transition-all duration-500 ease-out rounded-xl
                    bg-gradient-to-br ${categoryGradients[project.category]}
                    border border-slate-700/50 backdrop-blur-sm
                    ${isHovered ? "shadow-2xl shadow-slate-900/50" : "shadow-lg shadow-slate-900/25"}
                    ${isExpanded ? "md:col-span-3 max-w-5xl mx-auto" : ""}
                    hover:border-slate-600/70
                  `}
                  style={{
                    backgroundImage: categoryPatterns[project.category],
                    animationDelay: `${index * 150}ms`,
                  }}
                  onMouseMove={(e) => handleMouseMove(e, project.id)}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => handleMouseLeave(project.id)}
                  onClick={() => toggleExpanded(project.id)}
                >
                  {/* Background overlay for readability */}
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]" />

                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className={`
                        w-full h-full object-cover transition-all duration-500
                        ${isHovered ? "scale-110" : "scale-100"}
                      `}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  </div>

                  {/* Status badge */}
                  <div
                    className={`
                    absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold
                    ${status.color} ${status.glow} shadow-lg
                    transition-all duration-300
                    ${isHovered ? "scale-110" : ""}
                  `}
                  >
                    {status.label}
                  </div>

                  <div className="relative z-10 p-6">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2 font-serif">{project.title}</h3>
                      <p className="text-slate-300 font-medium">{project.subtitle}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-slate-400">
                        <span>{project.timeline}</span>
                        <span>•</span>
                        <span className="capitalize">{project.category}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-200 mb-6 leading-relaxed">
                      {isExpanded ? project.detailedDescription : project.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className={`
                            bg-slate-800/50 rounded-lg p-3 border border-slate-700/50
                            transition-all duration-300
                            ${isHovered ? "bg-slate-800/70 border-slate-600/70" : ""}
                          `}
                        >
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
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-200 border border-slate-600/50 hover:bg-slate-600/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div className="space-y-6 animate-in slide-in-from-top-4 duration-500">
                        {/* Challenges */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Technical Challenges</h4>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, idx) => (
                              <li key={idx} className="text-slate-300 flex items-start gap-2">
                                <span className="text-orange-400 mt-1">•</span>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Impact & Results</h4>
                          <p className="text-slate-300">{project.impact}</p>
                        </div>
                      </div>
                    )}

                    {/* Expand indicator */}
                    <div className="flex justify-center mt-6">
                      <div
                        className={`
                        w-8 h-1 bg-slate-600 rounded-full transition-all duration-300
                        ${isExpanded ? "rotate-180 bg-orange-500" : ""}
                      `}
                      />
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className={`
                    absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none
                    bg-gradient-to-r from-transparent via-white/5 to-transparent
                    ${isHovered ? "opacity-100" : ""}
                  `}
                  />
                </motion.div>
              );
            })}
          </motion.div>

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
