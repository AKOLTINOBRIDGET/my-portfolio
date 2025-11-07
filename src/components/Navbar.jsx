import React, { useState, useEffect } from 'react';
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
    {
      icon: <Github size={20} />,
      href: 'https://github.com/AKOLTINOBRIDGET',
      label: 'GitHub',
      color: 'hover:text-purple-600 dark:hover:text-purple-400',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/bridget-tino-akol-a6912a356',
      label: 'LinkedIn',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:akoltinobridget03@gmail.com',
      label: 'Email',
      color: 'hover:text-indigo-600 dark:hover:text-indigo-400',
    },
  ];

  // Persistent dark mode
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (storedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleScrollToSection = (href) => {
    const id = href.slice(1);
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80;
      const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Updated background - more opaque to prevent white space appearance
  const navbarBg = isScrolled
    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800'
    : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50';

  const textColor = isScrolled
    ? 'text-gray-900 dark:text-white'
    : 'text-gray-900 dark:text-white';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${navbarBg}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('#home');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-rose-500 via-rose-200 to-amber-200 dark:from-rose-400 dark:via-rose-300 dark:to-amber-300 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-gray-900 dark:text-gray-800 font-bold text-lg">ATB</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
            </div>

            <div className="hidden sm:block">
              <div className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-rose-300 to-amber-300 dark:from-rose-300 dark:via-rose-200 dark:to-amber-200 transition-all`}>
                AKOL TINO BRIDGET
              </div>
              <div className="text-xs font-medium tracking-wider text-gray-600 dark:text-gray-400">
                GET IT DONE
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(link.href);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className={`relative px-4 py-2 transition-all duration-300 rounded-lg ${
                  activeSection === link.href.slice(1)
                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-lg -z-10 bg-indigo-50 dark:bg-indigo-950/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
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
              className="p-2.5 rounded-xl transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
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

            {/* Divider */}
            <div className="w-px h-6 mx-2 bg-gray-300 dark:bg-gray-700"></div>

            {/* Social Links */}
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 rounded-xl transition-all duration-300 text-gray-600 dark:text-gray-400 ${social.color} hover:bg-gray-100 dark:hover:bg-gray-800`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}

            {/* Download CV */}
            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="AKOL_TINO_BRIDGET_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white px-5 py-2 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-purple-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Download size={18} /> CV
            </motion.a>

            {/* Hire Me */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('#contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 px-6 py-2.5 bg-gradient-to-r from-rose-500 to-amber-500 dark:from-rose-400 dark:to-amber-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-xl transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
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