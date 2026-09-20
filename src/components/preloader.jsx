import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-slate-900 flex flex-col items-center justify-center transition-colors duration-300">
      <div className="relative flex flex-col items-center">
        {/* Fomra Logo */}
        <div className="animate-fade-in-up">
          <img 
            src="/logo-light.png" 
            alt="Fomra Housing" 
            className="h-20 md:h-28 w-auto mb-10 object-contain drop-shadow-[0_0_30px_rgba(1,152,213,0.15)] mix-blend-multiply block dark:hidden" 
          />
          <img 
            src="/logo-dark.png" 
            alt="Fomra Housing" 
            className="h-20 md:h-28 w-auto mb-10 object-contain drop-shadow-[0_0_30px_rgba(1,152,213,0.3)] mix-blend-screen hidden dark:block" 
          />
        </div>
        
        {/* Premium Cinematic Loading Bar */}
        <div className="w-64 h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-to-r from-fomra-blue to-cyan-500 rounded-full animate-[loading_2.5s_ease-in-out_forwards]"></div>
        </div>
        
        {/* Loading Text */}
        <div className="mt-4 text-slate-500 text-xs font-bold tracking-[0.3em] uppercase animate-pulse">
          Crafting Perfection
        </div>
      </div>
      
      <style>{`
        @keyframes loading {
          0% { width: 0%; opacity: 0.5; }
          50% { width: 70%; opacity: 1; }
          100% { width: 100%; opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;