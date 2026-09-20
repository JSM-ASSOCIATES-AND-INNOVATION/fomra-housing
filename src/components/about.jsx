import React from 'react';
import { Target, Eye, Shield, Users, Award, Handshake } from 'lucide-react';

const About = () => {
  return (
    <section id="about-section" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/20 dark:to-slate-900 -z-10 transform -skew-x-12 translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            {/* Image Collage */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/real-terrace.png" 
                alt="Fomra Architecture" 
                className="w-full h-80 object-cover rounded-2xl shadow-soft transform translate-y-8"
              />
              <img 
                src="/real-pool.png" 
                alt="Fomra Landscape" 
                className="w-full h-80 object-cover rounded-2xl shadow-soft"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-fade-in-up border border-slate-100 dark:border-slate-700">
              <h2 className="text-5xl font-black text-fomra-blue">15+</h2>
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-snug">
                Years of<br/>Excellence
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 text-xs font-bold tracking-[0.2em] uppercase">
              <span className="text-fomra-blue"><Award size={14} /></span>
              A Legacy of Trust
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fomra-blue font-light italic">Luxury</span> in Chennai
            </h2>
            
            <div className="space-y-5 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                Since 2008, Fomra Housing has built a legacy as one of the most trusted builders in Chennai. We don't just build homes; we engineer lifestyles backed by the formidable financial strength of the $100M+ USD Fomra Group.
              </p>
              <p>
                Whether it's our premium apartments or highly coveted ready-to-build villa plots, every Fomra property is a testament to architectural brilliance, unwavering quality, and true affordability. We create assets that appreciate for generations.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission - Architectural Layout */}
        <div className="grid md:grid-cols-2 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 mb-32 shadow-soft">
          
          <div className="bg-white dark:bg-slate-900 p-12 md:p-16 relative group overflow-hidden">
            <div className="absolute -right-12 -top-12 text-[240px] text-slate-50 dark:text-slate-800/40 font-serif font-black leading-none select-none group-hover:scale-105 transition-transform duration-1000 ease-out">V</div>
            <div className="relative z-10">
              <div className="w-12 h-1 bg-fomra-blue mb-8"></div>
              <h3 className="text-4xl font-serif text-slate-900 dark:text-white mb-6">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-sans">
                To be Chennai's most admired real estate brand, recognized for delivering uncompromising quality, transparent transactions, and lifestyle-enhancing communities that stand the test of time.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-12 md:p-16 relative group overflow-hidden">
            <div className="absolute -right-12 -top-12 text-[240px] text-slate-50 dark:text-slate-800/40 font-serif font-black leading-none select-none group-hover:scale-105 transition-transform duration-1000 ease-out">M</div>
            <div className="relative z-10">
              <div className="w-12 h-1 bg-fomra-blue mb-8"></div>
              <h3 className="text-4xl font-serif text-slate-900 dark:text-white mb-6">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-sans">
                To continuously innovate in design and engineering, ensuring every family we serve experiences unparalleled value, safety, and joy in their Fomra home, while setting new benchmarks in the industry.
              </p>
            </div>
          </div>
        </div>

        {/* The Pillars (Why Choose Us) - Editorial Grid */}
        <div className="mb-24">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 dark:text-white tracking-tight">
              The Pillars of Fomra
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm">
            
            <div className="bg-white dark:bg-slate-900 p-10 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300">
              <span className="block font-serif font-medium italic text-fomra-blue text-xl mb-6">01</span>
              <h4 className="text-xl font-serif font-medium text-slate-900 dark:text-white mb-4">100% Transparency</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-sans">
                Clear titles, CMDA & RERA approvals, and transparent paperwork. Absolutely no surprises at registration.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-10 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300">
              <span className="block font-serif font-medium italic text-fomra-blue text-xl mb-6">02</span>
              <h4 className="text-xl font-serif font-medium text-slate-900 dark:text-white mb-4">Customer First</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-sans">
                From site visits to handovers, our dedicated relationship managers ensure a seamless, anxiety-free experience.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-10 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300">
              <span className="block font-serif font-medium italic text-fomra-blue text-xl mb-6">03</span>
              <h4 className="text-xl font-serif font-medium text-slate-900 dark:text-white mb-4">Premium Locations</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-sans">
                Strategically chosen plots and apartments across Chennai's fastest-growing corridors, ensuring high ROI.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-10 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300">
              <span className="block font-serif font-medium italic text-fomra-blue text-xl mb-6">04</span>
              <h4 className="text-xl font-serif font-medium text-slate-900 dark:text-white mb-4">Uncompromising Quality</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-sans">
                Premium finishing without the premium markup. We engineer lifestyles backed by a $100M+ legacy.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;