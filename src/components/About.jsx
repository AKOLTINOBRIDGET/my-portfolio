import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Award, Coffee, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Code className="h-6 w-6" />, value: "50+", label: "Projects Completed", color: "from-blue-500 to-cyan-500" },
    { icon: <Palette className="h-6 w-6" />, value: "5+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
    { icon: <Zap className="h-6 w-6" />, value: "30+", label: "Happy Clients", color: "from-orange-500 to-red-500" },
    { icon: <Award className="h-6 w-6" />, value: "10+", label: "Open Source", color: "from-green-500 to-emerald-500" },
  ];

  const highlights = [
    { icon: <Code size={20} />, text: "Clean, maintainable code" },
    { icon: <Zap size={20} />, text: "Performance-focused" },
    { icon: <Heart size={20} />, text: "User-centered design" },
    { icon: <Sparkles size={20} />, text: "Attention to detail" },
  ];

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

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }
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
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Text content */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-4">
                  I'm a passionate frontend developer with 5+ years of experience creating beautiful, 
                  responsive web applications. I specialize in React, JavaScript, and modern CSS frameworks 
                  like Tailwind CSS.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My journey in web development started during my computer science studies, and I've been 
                  hooked ever since. I love turning complex problems into simple, beautiful designs that 
                  users enjoy interacting with.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or enjoying a good cup of coffee <Coffee size={18} className="inline text-amber-600 dark:text-amber-400" /> 
                  while reading about the latest web trends.
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div variants={itemVariants} className="pt-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">What I bring to the table:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                    >
                      <div className="text-indigo-600 dark:text-indigo-400">
                        {highlight.icon}
                      </div>
                      <span className="text-sm font-medium">{highlight.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Stats grid */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-950/50 transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`bg-gradient-to-br ${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    
                    <motion.h3 
                      className="text-4xl font-bold mb-2 bg-gradient-to-br bg-clip-text text-transparent"
                      style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <span className={`bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </span>
                    </motion.h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                      {stat.label}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100/50 dark:from-gray-800/50 to-transparent rounded-bl-full opacity-50"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-indigo-100 text-lg mb-6 max-w-2xl mx-auto">
                  I'm always excited to collaborate on innovative projects and bring creative ideas to life.
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;