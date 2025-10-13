import React from 'react';
import { Code2, Palette, Rocket, Database, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, category: 'Frontend', icon: <Code2 size={20} /> },
    { name: 'JavaScript/TypeScript', level: 95, category: 'Frontend', icon: <Code2 size={20} /> },
    { name: 'HTML/CSS', level: 98, category: 'Frontend', icon: <Code2 size={20} /> },
    { name: 'Tailwind CSS', level: 85, category: 'Frontend', icon: <Palette size={20} /> },
    { name: 'Node.js', level: 75, category: 'Backend', icon: <Database size={20} /> },
    { name: 'UI/UX Design', level: 80, category: 'Design', icon: <Palette size={20} /> },
    { name: 'Responsive Design', level: 95, category: 'Frontend', icon: <Smartphone size={20} /> },
    { name: 'Performance Optimization', level: 85, category: 'Frontend', icon: <Zap size={20} /> },
  ];


  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">My Skills</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="text-indigo-600">{skill.icon}</div>
                    <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-indigo-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="mt-1 text-xs text-gray-500">{skill.category}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-800">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Git', 'Figma', 'Adobe XD'].map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium hover:bg-indigo-200 transition">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;