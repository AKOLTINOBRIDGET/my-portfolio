import React from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Zap } from "lucide-react";

// Logo component for tech stack
const TechLogo = ({ name, level, color, delay = 0 }) => {
  // Map tech names to logo URLs (using CDN for real logos)
  const logoMap = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="group relative"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
        {/* Logo */}
        <div className="w-16 h-16 mx-auto mb-4 relative">
          <img 
            src={logoMap[name]} 
            alt={`${name} logo`}
            className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all"
          />
        </div>
        
        {/* Tech Name */}
        <h4 className="text-center font-semibold text-gray-800 dark:text-white mb-2">
          {name}
        </h4>
        
        {/* Progress Ring */}
        <div className="relative w-20 h-20 mx-auto">
          <svg className="transform -rotate-90 w-20 h-20">
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-gray-200 dark:text-gray-700"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="32"
              stroke={color}
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 32}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 32 }}
              whileInView={{ strokeDashoffset: 2 * Math.PI * 32 * (1 - level / 100) }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-800 dark:text-white">
              {level}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const techStack = [
    { name: "React", level: 70, color: "#61DAFB" },
    { name: "JavaScript", level: 50, color: "#F7DF1E" },
    { name: "HTML5", level: 98, color: "#E34F26" },
    { name: "CSS3", level: 98, color: "#1572B6" },
    { name: "Tailwind CSS", level: 85, color: "#06B6D4" },
    { name: "Node.js", level: 70, color: "#339933" },
    { name: "MongoDB", level: 65, color: "#47A248" },
    { name: "Git", level: 80, color: "#F05032" },
    { name: "Figma", level: 75, color: "#F24E1E" },
    { name: "Python", level: 40, color: "#3776AB" },
  ];

  return (
    <section
      id="skills"
      className=" bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-2 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center "
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center  bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-24 py-2 rounded-full mb-6 font-medium"
          >
            <Award size={20} />
            <span>Professional Skills</span>
          </motion.div>
          
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-3">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-white inline-flex items-center gap-3">
              <TrendingUp className="text-indigo-600 dark:text-indigo-400" size={36} />
              Technology Stack
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Tools and technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <TechLogo
                key={tech.name}
                {...tech}
                delay={index * 0.05}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900 mb-5">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
              Constantly learning and staying updated with the latest technologies
            </p>
            <div className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
              <Zap size={20} />
              <span>Always improving, always growing</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;