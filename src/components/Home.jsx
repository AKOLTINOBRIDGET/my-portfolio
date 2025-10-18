import React from 'react';
import { motion } from 'framer-motion';
import portfolio1 from '../assets/portfolio1.jpg';
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles, Code2 } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden pt-0"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles size={16} className="text-yellow-300" />
              <span className="text-sm font-medium">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent animate-gradient">
                AKOL TINO BRIDGET
              </span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <Code2 size={24} className="text-yellow-300" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                Frontend Developer & UI/UX Designer
              </h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 text-indigo-100"
            >
              I create beautiful, responsive web applications with a focus on user experience and clean code. Let's build something amazing together.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 hover:text-indigo-700 transition-all shadow-lg hover:shadow-2xl flex items-center gap-2"
              >
                <Mail size={20} /> Contact Me
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all backdrop-blur-sm flex items-center gap-2"
              >
                <Download size={20} /> Download CV
              </motion.a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex space-x-4 mt-8 justify-center lg:justify-start"
            >
              <motion.a 
                href="https://github.com/AKOLTINOBRIDGET"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:text-indigo-600 transition-all border border-white/20"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:text-indigo-600 transition-all border border-white/20"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="mailto:akoltinobridget03@gmail.com"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white hover:text-indigo-600 transition-all border border-white/20"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right content - Profile image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="show"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Main image container */}
              <motion.div 
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={portfolio1} 
                  alt="AKOL TINO BRIDGET - Frontend Developer" 
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/30 to-transparent"></div>
              </motion.div>

              {/* Decorative circles */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              ></motion.div>
              
              {/* Status badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-xl border-4 border-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.span 
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.span>
                Available for work
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-white hover:text-yellow-300 transition-colors"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown size={24} />
        </a>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;