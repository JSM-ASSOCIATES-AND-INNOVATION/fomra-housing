import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div>
              <img 
                src="/logo-light.png" 
                alt="Fomra Housing" 
                className="h-8 w-auto opacity-90 mix-blend-multiply block dark:hidden" 
              />
              <img 
                src="/logo-dark.png" 
                alt="Fomra Housing" 
                className="h-8 w-auto opacity-90 mix-blend-screen hidden dark:block" 
              />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} Fomra Housing. All rights reserved.
            </p>
          </div>

          {/* Minimal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-fomra-blue dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-fomra-blue dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-fomra-blue dark:hover:text-white transition-colors">Contact Us</a>
          </div>

          {/* Socials & Made with love */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4 text-slate-400 dark:text-slate-500">
              <a href="#" className="hover:text-fomra-blue dark:hover:text-white hover:-translate-y-1 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-fomra-blue dark:hover:text-white hover:-translate-y-1 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="hover:text-fomra-blue dark:hover:text-white hover:-translate-y-1 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-fomra-blue dark:hover:text-white hover:-translate-y-1 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs font-medium">
              Made with <Heart size={12} className="text-red-500 fill-current" /> in Chennai
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
