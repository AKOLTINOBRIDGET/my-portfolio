import React from 'react';
import { Github, ExternalLink, Calendar, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with advanced cart management, payment gateway integration, and real-time inventory tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'from-blue-500 to-cyan-500',
      github: '#',
      live: '#',
      featured: true,
      date: '2023'
    },
    {
      title: 'Task Management Dashboard',
      description: 'Collaborative productivity tool featuring drag-and-drop kanban boards, team collaboration, and progress analytics.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      image: 'from-purple-500 to-pink-500',
      github: '#',
      live: '#',
      featured: true,
      date: '2022'
    },
    {
      title: 'Weather Analytics App',
      description: 'Real-time weather dashboard with interactive maps, 7-day forecasts, and historical data visualization.',
      technologies: ['JavaScript', 'REST API', 'Chart.js', 'CSS'],
      image: 'from-orange-500 to-red-500',
      github: '#',
      live: '#',
      featured: false,
      date: '2022'
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for creative professionals with customizable templates and SEO optimization.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
      image: 'from-green-500 to-teal-500',
      github: '#',
      live: '#',
      featured: false,
      date: '2021'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">My Projects</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                project.featured ? 'md:col-span-2 md:flex' : ''
              }`}
            >
              <div className={`h-48 bg-gradient-to-r ${project.image} ${project.featured ? 'md:w-1/3' : ''}`}></div>
              <div className={`p-6 ${project.featured ? 'md:w-2/3' : ''}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 transition"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a 
                    href={project.live} 
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 transition"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
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
    </section>
  );
};

export default Projects;