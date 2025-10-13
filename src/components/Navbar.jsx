import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';

const Navbar = ({ isScrolled, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4 border-b border-gray-100' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AKOL TINO BRIDGET
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative transition-all duration-300 py-2 ${
                  activeSection === link.href.slice(1)
                    ? 'text-indigo-600 font-medium'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                )}
              </a>
            ))}
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 p-2 hover:bg-indigo-50 rounded-lg">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 p-2 hover:bg-indigo-50 rounded-lg">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 p-2 hover:bg-indigo-50 rounded-lg">
              <Mail size={20} />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2 hover:bg-indigo-50 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-300 py-3 px-4 rounded-xl ${
                    activeSection === link.href.slice(1)
                      ? 'text-indigo-600 font-medium bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition p-2 hover:bg-indigo-50 rounded-lg">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition p-2 hover:bg-indigo-50 rounded-lg">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600 transition p-2 hover:bg-indigo-50 rounded-lg">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;