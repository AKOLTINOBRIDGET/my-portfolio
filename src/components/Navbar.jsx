import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, Download } from 'lucide-react';

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

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/AKOLTINOBRIDGET', label: 'GitHub', color: 'hover:text-purple-600 dark:hover:text-purple-400' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/bridget-tino-akol-a6912a356', label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { icon: <Mail size={20} />, href: 'mailto:akoltinobridget03@gmail.com', label: 'Email', color: 'hover:text-indigo-600 dark:hover:text-indigo-400' },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleScrollToSection = (href) => {
    const id = href.slice(1);
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80; // adjust if your navbar height changes
      const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 mb-0 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-200 dark:border-gray-800'
          : 'bg-white/10 backdrop-blur-sm py-4 border-b border-white/10'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('#home'); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-rose-500 via-rose-200 to-amber-200 dark:from-rose-400 dark:via-rose-300 dark:to-amber-300 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src="/logo.png" 
                  alt="ATB Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-gray-900 dark:text-gray-800 font-bold text-lg">ATB</span>';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
            </div>
            
            <div className="hidden sm:block">
              <div className={`text-xl font-bold bg-gradient-to-r ${
                isScrolled 
                  ? 'from-rose-400 via-rose-300 to-amber-300 dark:from-rose-300 dark:via-rose-200 dark:to-amber-200' 
                  : 'from-white to-yellow-100'
              } bg-clip-text text-transparent transition-all`}>
                AKOL TINO BRIDGET
              </div>
              <div className={`text-xs font-medium tracking-wider transition-colors ${
                isScrolled 
                  ? 'text-gray-500 dark:text-gray-400' 
                  : 'text-white/80'
              }`}>
                GET IT DONE
              </div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleScrollToSection(link.href); }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className={`relative px-4 py-2 transition-all duration-300 rounded-lg ${
                  activeSection === link.href.slice(1)
                    ? isScrolled
                      ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-white font-semibold'
                    : isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium'
                      : 'text-white/80 hover:text-white font-medium'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className={`absolute inset-0 rounded-lg -z-10 ${
                      isScrolled
                        ? 'bg-indigo-50 dark:bg-indigo-950/50'
                        : 'bg-white/20'
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Dark Mode */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-colors ${
                isScrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  : 'hover:bg-white/20 text-white'
              }`}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDarkMode ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <div className={`w-px h-6 mx-2 ${isScrolled ? 'bg-gray-300 dark:bg-gray-700' : 'bg-white/20'}`}></div>

            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? `text-gray-600 dark:text-gray-400 ${social.color} hover:bg-gray-100 dark:hover:bg-gray-800`
                    : 'text-white/80 hover:text-white hover:bg-white/20'
                }`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}

            {/* Download CV */}
            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="AKOL_TINO_BRIDGET_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all backdrop-blur-sm flex items-center gap-2"
            >
              <Download size={20} /> Download CV
            </motion.a>

            {/* Hire Me */}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScrollToSection('#contact'); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/20'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-800">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        setTimeout(() => handleScrollToSection(link.href), 150);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`transition-all duration-300 py-3 px-4 rounded-xl font-medium ${
                        activeSection === link.href.slice(1)
                          ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50'
                          : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  ))}

                  {/* Hire Me button */}
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setTimeout(() => handleScrollToSection('#contact'), 150);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="mt-2 py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl text-center shadow-lg"
                  >
                    Hire Me
                  </motion.a>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={toggleDarkMode}
                      className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                      aria-label="Toggle dark mode"
                    >
                      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.button>

                    <div className="flex space-x-2">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target={social.href.startsWith('http') ? '_blank' : undefined}
                          rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          whileTap={{ scale: 0.9 }}
                          className={`p-2.5 rounded-xl transition-all duration-300 text-gray-600 dark:text-gray-400 ${social.color} hover:bg-gray-100 dark:hover:bg-gray-800`}
                          aria-label={social.label}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
