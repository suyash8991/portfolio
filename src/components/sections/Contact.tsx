import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Send, 
  MapPin, 
  Mail, 
  ExternalLink,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission (replace with actual submission logic)
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'San Francisco, CA',
      subtext: 'Open to opportunities across the Bay Area and remote work',
      color: 'text-dragon-red'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Send Raven',
      value: 'suyash.sreekumar@gmail.com',
      href: 'mailto:suyash.sreekumar@gmail.com',
      color: 'text-gold-accent'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: `${import.meta.env.BASE_URL}logos/linkedin-svgrepo-com.svg`,
      href: 'https://linkedin.com/in/suyash-sreekumar',
      color: 'hover:opacity-80'
    },
    {
      name: 'GitHub',
      icon: `${import.meta.env.BASE_URL}logos/github-svgrepo-com.svg`,
      href: 'https://github.com/suyash-sreekumar',
      color: 'hover:opacity-80'
    },
    {
      name: 'Medium',
      icon: `${import.meta.env.BASE_URL}logos/medium-svgrepo-com.svg`,
      href: 'https://medium.com/@suyash.sreekumar',
      color: 'hover:opacity-80'
    }
  ];

  return (
    <section id="contact" className="section-light parchment-texture">
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
              <span className="section-icon">🐦</span>
              Send a Raven
            </h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Let's Connect & Create Something Great
            </p>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto text-center leading-relaxed">
              Ready to discuss opportunities, collaborations, or the fascinating world of AI? 
              I'm here to connect and explore how we can create something remarkable together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="medieval-border p-1">
                <div className="medieval-border-content p-8">
                  <h3 className="text-2xl font-medieval text-gold-accent mb-6">
                    Reach Out Across the Realm
                  </h3>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`${info.color} mt-1`}>
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-stark-white font-medium">{info.label}</div>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className={`${info.color} hover:underline transition-colors`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className={info.color}>{info.value}</div>
                          )}
                          {info.subtext && (
                            <div className="text-steel-blue text-sm mt-1">{info.subtext}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-6 border-t border-iron-grey">
                    <h4 className="text-lg font-medieval text-gold-accent mb-4">
                      Digital Presence
                    </h4>
                    <div className="flex gap-4">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 bg-iron-grey text-stark-white rounded transition-colors ${link.color} hover:bg-opacity-80`}
                        >
                          <img 
                            src={link.icon} 
                            alt={`${link.name} logo`}
                            className="w-5 h-5 object-contain"
                          />
                          <span>{link.name}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="medieval-border p-1">
                <div className="medieval-border-content p-6">
                  <h4 className="text-xl font-medieval text-gold-accent mb-4">
                    Ready to Begin Our Quest?
                  </h4>
                  <p className="text-stark-white text-sm mb-4">
                    I'm actively seeking opportunities in:
                  </p>
                  <ul className="text-steel-blue text-sm space-y-1">
                    <li>• AI/ML Engineer roles (especially RAG systems)</li>
                    <li>• Data Science and Analytics positions</li>
                    <li>• Software Engineering with AI focus</li>
                    <li>• Research and Development opportunities</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="medieval-border p-1">
                <div className="medieval-border-content p-8">
                  <h3 className="text-2xl font-medieval text-gold-accent mb-6">
                    Compose Your Message
                  </h3>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span>Your raven has been sent! I'll respond within 24 hours.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400">
                      <AlertCircle className="w-5 h-5" />
                      <span>The raven got lost in the storm. Please try again or email directly.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-stark-white font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        className="w-full px-4 py-3 bg-iron-grey border border-gold-accent/30 rounded-lg text-stark-white focus:border-gold-accent focus:outline-none transition-colors"
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-stark-white font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        type="email"
                        className="w-full px-4 py-3 bg-iron-grey border border-gold-accent/30 rounded-lg text-stark-white focus:border-gold-accent focus:outline-none transition-colors"
                        placeholder="your.email@domain.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Company Field (Optional) */}
                    <div>
                      <label className="block text-stark-white font-medium mb-2">
                        Company/Organization
                      </label>
                      <input
                        {...register('company')}
                        type="text"
                        className="w-full px-4 py-3 bg-iron-grey border border-gold-accent/30 rounded-lg text-stark-white focus:border-gold-accent focus:outline-none transition-colors"
                        placeholder="Your organization (optional)"
                      />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label className="block text-stark-white font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        {...register('subject', { required: 'Subject is required' })}
                        type="text"
                        className="w-full px-4 py-3 bg-iron-grey border border-gold-accent/30 rounded-lg text-stark-white focus:border-gold-accent focus:outline-none transition-colors"
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-stark-white font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        rows={6}
                        className="w-full px-4 py-3 bg-iron-grey border border-gold-accent/30 rounded-lg text-stark-white focus:border-gold-accent focus:outline-none transition-colors resize-vertical"
                        placeholder="Tell me about your quest, the challenges you face, or opportunities you'd like to discuss..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gold-accent text-night-black font-medieval rounded-lg hover:bg-dragon-red hover:text-stark-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-night-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      <span>{isSubmitting ? 'Sending Raven...' : 'Send Message'}</span>
                    </button>
                  </form>

                  <div className="mt-6 text-center text-steel-blue text-sm">
                    Prefer email? Reach me directly at{' '}
                    <a href="mailto:suyash.sreekumar@gmail.com" className="text-gold-accent hover:underline">
                      suyash.sreekumar@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
