import React from 'react';
import { Code, Palette, Zap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">About Me</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate frontend developer with 5+ years of experience creating beautiful, 
                responsive web applications. I specialize in React, JavaScript, and modern CSS frameworks 
                like Tailwind CSS.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My journey in web development started during my computer science studies, and I've been 
                hooked ever since. I love turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source, 
                or enjoying a good cup of coffee.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-3xl font-bold text-indigo-600 mb-2">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Palette className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-3xl font-bold text-indigo-600 mb-2">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-3xl font-bold text-indigo-600 mb-2">30+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-3xl font-bold text-indigo-600 mb-2">10+</h3>
                <p className="text-gray-600">Open Source</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;