import React from 'react';
import { MapPin, PhoneCall, ArrowRight, ShieldCheck, Banknote, Clock } from 'lucide-react';

const FomraHero = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-visible bg-slate-900">
      
      {/* Cinematic Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark Overlays for Text Readability */}
        <div className="absolute inset-0 bg-slate-900/30 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
        
        {/* Luxury Real Estate Image from Unsplash */}
        <img 
          src="/real-building.png" 
          alt="Fomra Hues Premium Apartments" 
          className="w-full h-full object-cover animate-[slowZoom_30s_ease-in-out_infinite_alternate]"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center h-full pt-10">
        <div className="max-w-3xl space-y-8">
          
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase shadow-lg">
              <span className="w-2 h-2 rounded-full bg-fomra-blue animate-pulse"></span>
              Premium Chennai Real Estate
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Build Your Dream on a <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fomra-blue">Solid Foundation.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Exclusive CMDA & RERA approved ready-to-build villa plots. Secure your family's future in Chennai's fastest-growing corridors with Fomra.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 pt-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <a 
              href="tel:+919585397000" 
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-fomra-blue text-white text-[15px] font-bold tracking-wide uppercase hover:bg-cyan-500 transition-all duration-300 transform hover:-translate-y-1 shadow-glow"
            >
              <PhoneCall size={18} />
              Enquire Now
            </a>
            <a 
              href="#projects-section" 
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-fomra-dark text-[15px] font-bold tracking-wide uppercase transition-all duration-300"
            >
              Explore Projects
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Features Bar (Overlaps next section) */}
      <div className="absolute bottom-0 left-0 w-full z-30 transform translate-y-1/2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white dark:bg-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-glass flex divide-x divide-slate-100 dark:divide-slate-700 animate-fade-in-up transition-colors duration-300" style={{ animationDelay: '500ms' }}>
            
            <div className="flex-1 p-8 flex items-center gap-5 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-default">
              <div className="w-14 h-14 bg-fomra-blue/10 dark:bg-fomra-blue/20 flex items-center justify-center text-fomra-blue flex-shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-extrabold text-lg tracking-tight">100% Clear Titles</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">CMDA & RERA Approved</p>
              </div>
            </div>

            <div className="flex-1 p-8 flex items-center gap-5 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-default">
              <div className="w-14 h-14 bg-fomra-blue/10 dark:bg-fomra-blue/20 flex items-center justify-center text-fomra-blue flex-shrink-0">
                <Banknote size={28} />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-extrabold text-lg tracking-tight">Up to 80% Loan</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pre-approved by major banks</p>
              </div>
            </div>

            <div className="flex-1 p-8 flex items-center gap-5 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-default">
              <div className="w-14 h-14 bg-fomra-blue/10 dark:bg-fomra-blue/20 flex items-center justify-center text-fomra-blue flex-shrink-0">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-extrabold text-lg tracking-tight">Immediate Build</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Ready infrastructure & utilities</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default FomraHero;