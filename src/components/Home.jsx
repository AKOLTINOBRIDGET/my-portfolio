import React from 'react';
import portfolio1 from '../assets/portfolio1.jpg';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-yellow-300">AKOL TINO BRIDGET</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6">Frontend Developer & UI/UX Designer</h2>
          <p className="mb-8 max-w-lg">
            I create beautiful, responsive web applications with a focus on user experience and clean code.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition flex items-center gap-2"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition flex items-center gap-2"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
          
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-white hover:text-indigo-200 transition">
              <Github size={24} />
            </a>
            <a href="#" className="text-white hover:text-indigo-200 transition">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-indigo-200 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img src={portfolio1} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Available for work
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <ArrowRight size={24} className="transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Home;

