import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Logo Imports (Make sure these paths match your folder structure)
import logoDark from '../assets/logo_light.png';   // Ye Light mode mein dikhega (Dark text)
import logoLight from '../assets/logo_dark.png'; // Ye Dark mode mein dikhega (Light text)

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Dark Mode State
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Apply theme class to <html> tag
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Scroll detection for Glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 dark:bg-[#0B0F19]/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Real Logo Section - FIXED WITH JAVASCRIPT CONDITION */}
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src={theme === 'dark' ? logoLight : logoDark} 
                alt="Society Flow Logo" 
                className="h-8 w-auto group-hover:scale-105 transition-transform" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, idx) => (
                <Link key={idx} to={link.path} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 relative group transition-colors">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Right Side: Theme Toggle & Buttons */}
            <div className="hidden md:flex items-center gap-4">
              {/* Theme Toggle Button */}
              <button 
                onClick={toggleTheme} 
                className="p-2 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <Link to="/login" className="text-sm font-medium text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
                Log in
              </Link>
              <Link to="/demo" className="text-sm font-bold bg-indigo-600 text-white px-5 py-2.5 rounded-full hover:scale-105 transition-transform shadow-sm">
                Book Demo
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-3">
              <button onClick={toggleTheme} className="p-2 text-gray-500 dark:text-gray-400">
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-900 dark:text-white p-2">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 bg-white dark:bg-[#0B0F19] pt-24 px-6 md:hidden">
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <Link key={idx} to={link.path} className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4">
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/login" className="w-full text-center text-lg font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 py-3 rounded-xl">Log in</Link>
                <Link to="/demo" className="w-full text-center text-lg font-bold bg-indigo-600 text-white py-3 rounded-xl shadow-lg shadow-indigo-500/30">Book Demo</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;