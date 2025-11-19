import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const About = () => {
  // Keeping the motion variants for smooth entrance, as requested in the original code,
  // but removing the card-specific variants (statVariants, highlights map).
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Building exceptional digital experiences with modern web technologies and data-driven insights.
          </p>
        </motion.div>
        
        {/* Core Content - Simplified and Focused */}
        <div className="max-w-4xl mx-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"> 
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-5">
              <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold leading-relaxed border-l-4 border-indigo-500 pl-4">
                I'm a **Full-Stack Developer** focused on building clean, high-performance web applications, backed by over <span className="text-indigo-600 dark:text-indigo-400">2 years of professional experience</span>.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My core specialization lies in **React** and modern **JavaScript** for the frontend, combined with robust backend development using **Python (Django/DRF)**. I excel at taking concepts from initial design to successful deployment, having delivered <span className="font-medium text-purple-600 dark:text-purple-400">4+ full-stack projects</span> for happy clients/partners.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond standard web development, I leverage data tools like **Power BI** and **Pandas** for actionable insights and have a keen interest in **embedded systems**, bridging software functionality with the physical world. My approach is always **user-centered**, ensuring responsive design and optimized performance across all solutions.
              </p>
            </motion.div>
            
            <motion.p 
              variants={itemVariants} 
              className="text-base text-gray-600 dark:text-gray-400 leading-relaxed flex items-center gap-2 pt-4"
            >
              <Coffee size={20} className="text-amber-600 dark:text-amber-400 flex-shrink-0" />
              When not coding, I'm exploring the latest tech trends over a good cup of coffee.
            </motion.p>
          </motion.div>
        </div>
        
        {/* --- */}

        {/* Bottom CTA section (Retained) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;