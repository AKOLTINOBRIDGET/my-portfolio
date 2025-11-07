import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Smartphone,
  Zap,
  Layers,
  Server,
  Terminal,
} from "lucide-react";

// Centralized configuration for better maintainability
const SKILL_ICONS = {
  frontend: Code2,
  design: Palette,
  backend: Database,
  mobile: Smartphone,
  performance: Zap,
  server: Server,
  terminal: Terminal,
};

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};

const skillsData = {
  categories: [
    {
      id: "frontend",
      category: "Frontend Development",
      skills: [
        { name: "React", level: 70, iconKey: "frontend" },
        { name: "JavaScript", level: 50, iconKey: "frontend" },
        { name: "HTML/CSS", level: 98, iconKey: "frontend" },
        { name: "Tailwind CSS", level: 85, iconKey: "design" },
        { name: "Responsive Design", level: 85, iconKey: "mobile" },
        { name: "Performance Optimization", level: 85, iconKey: "performance" },
      ],
    },
    {
      id: "backend",
      category: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 70, iconKey: "server" },
        { name: "UI/UX Design", level: 70, iconKey: "design" },
      ],
    },
    {
      id: "programming",
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 40, iconKey: "terminal" },
      ],
    },
  ],
  technologies: [
    { name: "React", color: "from-cyan-500 to-blue-500" },
    { name: "JavaScript", color: "from-yellow-400 to-orange-500" },
    { name: "HTML5", color: "from-orange-500 to-red-500" },
    { name: "CSS3", color: "from-blue-400 to-blue-500" },
    { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
    { name: "Node.js", color: "from-green-500 to-green-600" },
    { name: "Express", color: "from-gray-600 to-gray-700" },
    { name: "MongoDB", color: "from-green-600 to-green-700" },
    { name: "Git", color: "from-orange-600 to-red-600" },
    { name: "Figma", color: "from-purple-500 to-pink-500" },
    { name: "Adobe InDesign", color: "from-pink-500 to-purple-600" },
    { name: "Python", color: "from-blue-500 to-yellow-500" },
  ],
};

const SkillCard = ({ skill, index }) => {
  const IconComponent = SKILL_ICONS[skill.iconKey];

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.item}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="group relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-800"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
              <IconComponent size={20} aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {skill.name}
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Proficiency
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              {skill.level}%
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative">
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-full relative overflow-hidden"
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label={`${skill.name} proficiency: ${skill.level}%`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 shimmer-animation" />
            </motion.div>
          </div>
          {/* Skill level markers */}
          <div className="flex justify-between mt-2 text-xs text-gray-400 dark:text-gray-600">
            <span>Beginner</span>
            <span>Intermediate</span>
            <span>Advanced</span>
            <span>Expert</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TechnologyBadge = ({ tech }) => (
  <motion.div
    variants={ANIMATION_VARIANTS.item}
    whileHover={{
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.95 }}
    className="group cursor-pointer"
  >
    <div
      className={`relative px-6 py-3 bg-gradient-to-r ${tech.color} rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-2xl transition-all duration-300`}
    >
      <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10">{tech.name}</span>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized in building modern, responsive web applications with
            cutting-edge technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        {skillsData.categories.map((category) => (
          <motion.div
            key={category.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={ANIMATION_VARIANTS.container}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full" />
              {category.category}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {category.skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Technologies Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.container}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white flex items-center justify-center gap-3">
              <Layers
                className="text-indigo-600 dark:text-indigo-400"
                size={32}
                aria-hidden="true"
              />
              Tech Stack
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.technologies.map((tech) => (
              <TechnologyBadge key={tech.name} tech={tech} />
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
              Constantly learning and staying updated with the latest
              technologies
            </p>
            <div className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
              <Zap size={20} aria-hidden="true" />
              <span>Always improving, always growing</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .shimmer-animation {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;