import React, { useState, useEffect } from "react";
import { Github, ExternalLink, Calendar, Play, Eye } from "lucide-react";
import onimsVideo from "../assets/onims-demo.mp4";
import onimsDashboard from "../assets/onims-dashboard.png";
import onimsHR from "../assets/onims-hr.png";
import onimsProjects from "../assets/onims-projects.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "ONIMS – NGO Data Management System",
      description:
        "A comprehensive data management platform for NGOs to manage projects, HR, and M&E workflows efficiently.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      image: "from-orange-600 to-blue-900",
      
      
      // github: "https://github.com/AKOLTINORIDGET/onims",
      video: onimsVideo, 
      screenshots: [onimsDashboard, onimsHR, onimsProjects],
      featured: true,
      date: "2025",
    },
    {
      title: "Portfolio CMS",
      description:
        "A content management system for creative professionals with customizable templates and SEO optimization.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      image: "from-purple-500 to-pink-500",
      github: "https://github.com/AKOLTINORIDGET/my-portfolio",
      // live: "#",
      featured: false,
      date: "2023",
    },
     {
      title: "School Management Report System",
      description:
        "A comprehensive Schhol management platform for Educative institutions to manage student data as per student,class for easy and efficient data Management (in progress).",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      image: "from-green-600 to-gray-400",
      
      
      // github: "https://github.com/AKOLTINORIDGET/onims",
      // video: onimsVideo, 
      // screenshots: [onimsDashboard, onimsHR, onimsProjects],
      // featured: true,
      date: "2025",
     },
  ];

  // Automatically cycle through screenshots every 3 seconds
  useEffect(() => {
    if (!activeProject || !activeProject.screenshots) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === activeProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [activeProject]);

  return (
    <section id="projects" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                project.featured ? "md:col-span-2 md:flex" : ""
              }`}
            >
              <div
                className={`h-48 bg-gradient-to-r ${project.image} ${
                  project.featured ? "md:w-1/3" : ""
                }`}
              ></div>
              <div className={`p-6 ${project.featured ? "md:w-2/3" : ""}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    <Github size={16} /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                  </a>

                  {project.video && (
                    <button
                      onClick={() => {
                        setActiveProject(project);
                        setCurrentImageIndex(0);
                      }}
                      className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                    >
                      <Play size={16} /> Watch Demo
                    </button>
                  )}

                  {project.featured && (
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Eye size={12} /> Featured
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for video + carousel */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full relative shadow-lg animate-fade-in">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-2 right-3 text-gray-600 text-2xl hover:text-black"
            >
              &times;
            </button>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {activeProject.title}
            </h3>

            {/* Video Section */}
            {activeProject.video && (
              <video
                src={activeProject.video}
                controls
                className="rounded-lg w-full mb-4 shadow-md"
              />
            )}

            {/* Image Carousel */}
            {activeProject.screenshots && (
              <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md">
                <img
                  src={activeProject.screenshots[currentImageIndex]}
                  alt="Project screenshot"
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-2 right-2 bg-white bg-opacity-80 px-3 py-1 rounded-full text-xs text-gray-600">
                  {currentImageIndex + 1}/{activeProject.screenshots.length}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
