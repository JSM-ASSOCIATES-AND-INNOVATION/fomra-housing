import React, { useState, useEffect } from 'react';
import { Phone, Mail, ChevronDown, Menu, X, ArrowRight, Moon, Sun } from 'lucide-react';

const FomraNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('fomra-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('fomra-theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('fomra-theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Fomra', href: '#about-section' },
    { 
      label: 'Projects', 
      href: '#projects-section', 
      dropdown: [
        { label: 'On-going', href: '#' },
        { label: 'Completed', href: '#' }
      ] 
    },
    { label: 'Referrals', href: '#' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className={`hidden md:flex justify-end items-center gap-6 py-2.5 px-8 bg-slate-900 text-xs font-semibold text-slate-300 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-10 opacity-100 border-b border-white/10'}`}>
        <a href="tel:+919585397000" className="flex items-center gap-2 hover:text-white transition-colors">
          <Phone size={14} className="text-fomra-blue" />
          +91 95853 97000
        </a>
        <div className="w-px h-4 bg-slate-700"></div>
        <a href="mailto:info@fomrahousing.in" className="flex items-center gap-2 hover:text-white transition-colors">
          <Mail size={14} className="text-fomra-blue" />
          info@fomrahousing.in
        </a>
      </div>

      {/* Main Navbar - Dual Theme */}
      <header className={`w-full sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-sm dark:shadow-glass border-b border-slate-100 dark:border-slate-800 py-3' : 'bg-white dark:bg-slate-900 py-5 shadow-sm dark:shadow-none'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group">
               <img 
                 src="/logo-light.png" 
                 alt="Fomra Housing" 
                 className="h-10 w-auto transform group-hover:scale-105 transition-all duration-300 mix-blend-multiply block dark:hidden" 
               />
               <img 
                 src="/logo-dark.png" 
                 alt="Fomra Housing" 
                 className="h-10 w-auto transform group-hover:scale-105 transition-all duration-300 mix-blend-screen hidden dark:block" 
               />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <a 
                    href={item.href}
                    className="flex items-center gap-1 text-[14px] font-bold text-slate-700 dark:text-slate-300 hover:text-fomra-blue dark:hover:text-white transition-colors py-2"
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`transform transition-transform duration-300 ${activeDropdown === index ? 'rotate-180 text-fomra-blue' : 'text-slate-500'}`} 
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div 
                      className={`absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800/95 backdrop-blur-xl border border-slate-100 dark:border-slate-700 rounded-2xl shadow-xl py-3 transform transition-all duration-300 origin-top-left ${
                        activeDropdown === index ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                      }`}
                    >
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <a 
                          key={dropIndex} 
                          href={dropItem.href}
                          className="block px-6 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-fomra-blue dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                        >
                          {dropItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* TLH Style Contact Button */}
              <a href="#contact" className="hidden lg:flex items-center gap-2 px-6 py-2 border-[1.5px] border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 group">
                Contact Us
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </a>

              <button 
                className="lg:hidden p-2 text-slate-800 dark:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden absolute w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 transition-all duration-500 ease-in-out overflow-hidden shadow-xl ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 flex flex-col gap-2">
            {navItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <a 
                  href={item.href} 
                  className="px-4 py-3 text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-fomra-blue dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl flex justify-between items-center transition-colors"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={18} className="text-slate-500" />}
                </a>
              </div>
            ))}
            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex flex-col gap-4 border border-slate-100 dark:border-slate-700/50">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Contact Us</div>
              <a href="tel:+919585397000" className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-lg hover:text-fomra-blue transition-colors">
                <div className="w-10 h-10 rounded-full bg-fomra-blue/10 dark:bg-fomra-blue/20 flex items-center justify-center text-fomra-blue">
                  <Phone size={18} />
                </div>
                +91 95853 97000
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default FomraNavbar;