import React from 'react';
import { Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about-section" className="py-10 sm:py-12 lg:py-16 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/20 dark:to-slate-900 -z-10 transform -skew-x-12 translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8 lg:mb-12">
          {/* Images — hidden on small mobile, show from sm up */}
          <div className="relative hidden sm:block">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img 
                src="/real-terrace.png" 
                alt="Fomra Architecture" 
                className="w-full h-36 sm:h-44 lg:h-56 object-cover rounded-2xl shadow-soft transform translate-y-6"
              />
              <img 
                src="/real-pool.png" 
                alt="Fomra Landscape" 
                className="w-full h-36 sm:h-44 lg:h-56 object-cover rounded-2xl shadow-soft"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl shadow-xl flex items-center gap-3 animate-fade-in-up border border-slate-100 dark:border-slate-700">
              <h2 className="text-3xl sm:text-4xl font-black text-fomra-blue">15+</h2>
              <p className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-snug">
                Years of<br/>Excellence
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
              <span className="text-fomra-blue"><Award size={12} /></span>
              A Legacy of Trust
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fomra-blue font-light italic">Luxury</span> in Chennai
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Since 2008, Fomra Housing has built a legacy as one of the most trusted builders in Chennai. We engineer lifestyles backed by the formidable financial strength of the $100M+ USD Fomra Group.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid sm:grid-cols-2 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 mb-6 sm:mb-8 lg:mb-12 shadow-soft">
          
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-10 relative group overflow-hidden">
            <div className="absolute -right-8 -top-8 text-[80px] sm:text-[100px] lg:text-[140px] text-slate-50 dark:text-slate-800/40 font-serif font-black leading-none select-none">V</div>
            <div className="relative z-10">
              <div className="w-10 h-0.5 bg-fomra-blue mb-4 sm:mb-6"></div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-slate-900 dark:text-white mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed font-sans">
                To be Chennai's most admired real estate brand, recognized for delivering uncompromising quality and lifestyle-enhancing communities.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 lg:p-10 relative group overflow-hidden">
            <div className="absolute -right-8 -top-8 text-[80px] sm:text-[100px] lg:text-[140px] text-slate-50 dark:text-slate-800/40 font-serif font-black leading-none select-none">M</div>
            <div className="relative z-10">
              <div className="w-10 h-0.5 bg-fomra-blue mb-4 sm:mb-6"></div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-slate-900 dark:text-white mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed font-sans">
                To continuously innovate in design and engineering, ensuring every family experiences unparalleled value and joy in their Fomra home.
              </p>
            </div>
          </div>
        </div>

        {/* The Pillars (Why Choose Us) */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-serif font-medium text-slate-900 dark:text-white tracking-tight mb-4 sm:mb-6">
            The Pillars of Fomra
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm">
            {[
              { num: '01', title: '100% Transparency', desc: 'Clear titles, CMDA & RERA approvals. No surprises.' },
              { num: '02', title: 'Customer First', desc: 'Dedicated relationship managers for a seamless experience.' },
              { num: '03', title: 'Premium Locations', desc: "Chennai's fastest-growing corridors, ensuring high ROI." },
              { num: '04', title: 'Uncompromising Quality', desc: 'Premium finishing backed by a $100M+ legacy.' },
            ].map((pillar, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-4 sm:p-5 lg:p-8 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300">
                <span className="block font-serif font-medium italic text-fomra-blue text-base sm:text-lg mb-3 sm:mb-4">{pillar.num}</span>
                <h4 className="text-sm sm:text-base lg:text-lg font-serif font-medium text-slate-900 dark:text-white mb-2 sm:mb-3">{pillar.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] sm:text-xs lg:text-sm leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;