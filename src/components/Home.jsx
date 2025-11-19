import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles } from 'lucide-react';
import Portforlio2 from '../assets/portforlio2.jpg'; // adjust this path to match the actual image file in your project (e.g. src/assets or public)

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden pt-20 transition-colors duration-500"
    >
      {/* Subtle background gradient - only two elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-full blur-3xl opacity-60 dark:opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-100 to-orange-100 dark:from-pink-950/20 dark:to-orange-950/20 rounded-full blur-3xl opacity-50 dark:opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 px-4 py-2 rounded-full mb-6 border border-indigo-200 dark:border-indigo-800"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Open to opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-900 dark:text-white">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Bridget Tino Akol
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Frontend Developer
              </h2>
              <p className="text-xl text-indigo-600 dark:text-indigo-400 font-medium">
                UI/UX Designer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              I craft beautiful, responsive web experiences with clean code and user-centered design. Let's build something amazing together.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-purple-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Mail size={20} /> Get In Touch
              </motion.a>
              <motion.a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="AKOL_TINO_BRIDGET_CV.pdf"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all flex items-center gap-2"
              >
                <Download size={20} /> Download CV
              </motion.a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex space-x-4 justify-center lg:justify-start"
            >
              <motion.a 
                href="https://github.com/AKOLTINOBRIDGET"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all border border-gray-200 dark:border-gray-800"
              >
                <Github size={22} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/bridget-tino-akol-a6912a356"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all border border-gray-200 dark:border-gray-800"
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a 
                href="mailto:akoltinobridget03@gmail.com"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all border border-gray-200 dark:border-gray-800"
              >
                <Mail size={22} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right content - Profile image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="show"
          >
            <div className="relative">
              {/* Main image container - cleaner design */}
              <motion.div 
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 dark:from-indigo-400/10 dark:via-purple-400/10 dark:to-pink-400/10 z-10"></div>
                
                <img 
                  src={Portforlio2}
                  alt="Bridget Tino Akol - Frontend Developer" 
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle border */}
                <div className="absolute inset-0 border-4 border-white/20 dark:border-white/10 rounded-3xl"></div>
              </motion.div>

              {/* Single decorative element - bottom right */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl border-4 border-white dark:border-gray-950"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="flex items-center gap-2">
                  <motion.span 
                    className="w-2.5 h-2.5 bg-green-400 rounded-full"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.span>
                  <span className="text-sm">Available for work</span>
                </div>
              </motion.div>

              {/* Subtle accent - top left */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-400 dark:from-pink-500 dark:to-orange-500 rounded-2xl opacity-20 blur-2xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator - simpler design */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
        >
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-current rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Home;