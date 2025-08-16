import { motion } from 'framer-motion';
import { 
  Heart, 
  Code2, 
  MapPin, 
  Linkedin,
  Github,
  Mail,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'The Arsenal', href: '#skills' },
    { label: 'Houses of Learning', href: '#education' },
    { label: 'Epic Conquests', href: '#projects' },
    { label: 'Path of Honor', href: '#experience' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/suyashsreekumar',
      icon: <Linkedin className="w-5 h-5" />
    },
        {
      name: 'GitHub',
      href: 'https://github.com/suyash8991',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'Email',
      href: 'mailto:suyash.sreekumar@gmail.com',
      icon: <Mail className="w-5 h-5" />
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-iron-grey to-night-black border-t border-gold-accent/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-medieval text-gold-accent mb-4">
                Suyash Sreekumar
              </h3>
              <p className="text-steel-blue leading-relaxed mb-6 max-w-md">
                Master of Artificial Intelligence & Data Analytics, forging the future 
                of technology with expertise in RAG systems, machine learning, and data science.
              </p>
              
              {/* Key Stats */}
              <div className="flex items-center gap-2 text-sm mb-6">
                <MapPin className="w-4 h-4 text-gold-accent" />
                <span className="text-stark-white">San Francisco, CA</span>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-iron-grey border border-gold-accent/30 rounded-lg text-gold-accent hover:bg-gold-accent hover:text-night-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-medieval text-gold-accent mb-4">
              Quick Passages
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-steel-blue hover:text-gold-accent transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="mailto:suyash.sreekumar@gmail.com"
                  className="text-steel-blue hover:text-gold-accent transition-colors"
                >
                  Send a Raven
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-medieval text-gold-accent mb-4">
              Realms of Mastery
            </h4>
            <ul className="space-y-2 text-steel-blue text-sm">
              <li>• RAG Systems & LLMs</li>
              <li>• Machine Learning</li>
              <li>• Data Analytics</li>
              <li>• Teaching & Mentoring</li>
              <li>• Enterprise AI Solutions</li>
              <li>• Cloud Infrastructure</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-iron-grey"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-steel-blue text-sm">
              <span>© {currentYear} Suyash Sreekumar. Crafted with</span>
              <Heart className="w-4 h-4 text-dragon-red" />
              <span>and</span>
              <Code2 className="w-4 h-4 text-gold-accent" />
              <span>in the digital realm.</span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-iron-grey text-gold-accent rounded hover:bg-gold-accent hover:text-night-black transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Return to the Throne</span>
              <ExternalLink className="w-4 h-4 rotate-90" />
            </motion.button>
          </div>

          {/* Inspirational Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-steel-blue text-sm italic">
              "In the realm of artificial intelligence, we are all maesters seeking to unlock 
              the mysteries of the digital citadel."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
