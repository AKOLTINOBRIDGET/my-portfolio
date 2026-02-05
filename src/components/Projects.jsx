import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Calendar, Play, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import onimsVideo from "../assets/onims-demo.mp4";
import onimsDashboard from "../assets/onims-dashboard.png";
import onimsHR from "../assets/onims-hr.png";
import onimsProjects from "../assets/onims-projects.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "ONIMS – NGO Management Platform",
      description:
        "Comprehensive data management platform streamlining project tracking, HR workflows, and M&E processes for NGOs.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      gradient: "from-orange-500 via-red-500 to-pink-500",
      video: onimsVideo,
      screenshots: [onimsDashboard, onimsHR, onimsProjects],
      featured: true,
      date: "2025",
      category: "Frontend",
      status: "Completed",
    },
    {
      title: "Portfolio CMS",
      description:
        "Headless CMS built for creatives, featuring customizable templates, drag-and-drop editing, and built-in SEO optimization.",
      technologies: ["React",   "TailwindCSS"],
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      github: "https://github.com/AKOLTINORIDGET/my-portfolio",
      featured: false,
      date: "2025",
      category: "Frontend",
      status: "Completed",
    },
    {
      title: "School Management System",
      description:
        "Comprehensive platform for educational institutions to manage student records, class data, and academic reporting efficiently.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      featured: false,
      date: "2025",
      category: "Frontend",
      status: "In Progress",
    },
  ];

  const categories = ["all", "Full-Stack", "Frontend", "Backend"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  // Auto-cycle screenshots
  useEffect(() => {
    if (!activeProject?.screenshots) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === activeProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [activeProject]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === activeProject.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? activeProject.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development and problem-solving
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800"
              >
                {/* Status Badge */}
                {project.status === "In Progress" && (
                  <div className="absolute top-4 right-4 z-20 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    In Progress
                  </div>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Eye size={12} /> Featured
                  </div>
                )}

                <div>
                  {/* Image/Gradient Section */}
                  <div className="relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/80 text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                        <Calendar size={14} />
                        <span>{project.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-900"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors group/link"
                        >
                          <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                          <span>View Code</span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors group/link"
                        >
                          <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                          <span>Live Demo</span>
                        </a>
                      )}

                      {project.video && (
                        <button
                          onClick={() => {
                            setActiveProject(project);
                            setCurrentImageIndex(0);
                          }}
                          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
                        >
                          <Play size={18} />
                          <span>Watch Demo</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-5xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 pr-12">
                {activeProject.title}
              </h3>

              {/* Video Section */}
              {activeProject.video && (
                <div className="mb-6">
                  <video
                    src={activeProject.video}
                    controls
                    className="rounded-xl w-full shadow-lg"
                  />
                </div>
              )}

              {/* Image Carousel */}
              {activeProject.screenshots && (
                <div className="relative">
                  <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={activeProject.screenshots[currentImageIndex]}
                        alt={`Screenshot ${currentImageIndex + 1}`}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-contain"
                      />
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    {activeProject.screenshots.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}

                    {/* Counter */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {activeProject.screenshots.length}
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                    {activeProject.screenshots.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? "border-indigo-600 scale-110"
                            : "border-transparent opacity-50 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;