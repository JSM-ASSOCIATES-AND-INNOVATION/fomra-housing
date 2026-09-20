import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const projects = {
    ongoing: [
      {
        id: 1,
        title: "Fomra Hues",
        location: "Porur",
        type: "Premium Apartments",
        status: "Under Construction",
        image: "/real-building.png",
        features: ["2 & 3 BHK", "Smart Homes", "Clubhouse"]
      },
      {
        id: 2,
        title: "Bay Pristine",
        location: "ECR",
        type: "Luxury Villas",
        status: "Nearing Completion",
        image: "/real-pool.png",
        features: ["Sea View", "Private Pool", "Home Automation"]
      }
    ],
    completed: [
      {
        id: 3,
        title: "Fomra Tribhuvan",
        location: "Nolambur",
        type: "Residential Apartments",
        status: "Sold Out",
        image: "/real-courtyard.png",
        features: ["Ready to Occupy", "Premium Amenities", "Prime Location"]
      },
      {
        id: 4,
        title: "Fomra Celebration",
        location: "Mogappair",
        type: "Gated Community",
        status: "Sold Out",
        image: "/real-terrace.png",
        features: ["2, 3 & 4 BHK", "Extensive Landscaping", "Sports Arena"]
      }
    ]
  };

  const currentProjects = projects[activeTab];

  return (
    <section id="projects-section" className="py-10 sm:py-12 lg:py-16 bg-slate-50 dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fomra-blue/5 dark:bg-fomra-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6 lg:mb-10">
          <h4 className="text-xs sm:text-sm font-bold text-fomra-blue tracking-widest uppercase mb-2">Our Portfolio</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2 sm:mb-4">
            Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0198D5]">Masterpieces</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 hidden sm:block">
            Explore our meticulously crafted residential projects across Chennai's most sought-after locations.
          </p>
        </div>

        {/* Animated Tabs */}
        <div className="flex justify-center mb-5 sm:mb-6 lg:mb-10">
          <div className="relative inline-flex bg-white dark:bg-slate-900 p-1.5 sm:p-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 backdrop-blur-xl">
            <div 
              className={`absolute top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 w-[110px] sm:w-[140px] lg:w-[160px] bg-slate-900 dark:bg-slate-700 rounded-full shadow-md transition-transform duration-500 ease-out z-0 ${
                activeTab === 'ongoing' ? 'translate-x-0' : 'translate-x-[110px] sm:translate-x-[140px] lg:translate-x-[160px]'
              }`}
            ></div>
            
            <button 
              onClick={() => setActiveTab('ongoing')}
              className={`relative z-10 w-[110px] sm:w-[140px] lg:w-[160px] py-2.5 sm:py-3 text-xs sm:text-sm lg:text-[15px] font-bold tracking-wide transition-colors duration-300 rounded-full ${
                activeTab === 'ongoing' ? 'text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              On-Going
            </button>
            <button 
              onClick={() => setActiveTab('completed')}
              className={`relative z-10 w-[110px] sm:w-[140px] lg:w-[160px] py-2.5 sm:py-3 text-xs sm:text-sm lg:text-[15px] font-bold tracking-wide transition-colors duration-300 rounded-full ${
                activeTab === 'completed' ? 'text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {currentProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-36 sm:h-44 lg:h-52 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 dark:bg-slate-900/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Badges */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-2 z-20">
                  <div className="px-2.5 sm:px-3 py-1 bg-slate-900/90 dark:bg-black/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1">
                    {project.status === 'Completed' ? <CheckCircle2 size={12} className="text-green-400" /> : <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>}
                    {project.status}
                  </div>
                  <div className="px-2.5 sm:px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-900 dark:text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hidden sm:block">
                    {project.type}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  <MapPin size={12} className="text-fomra-blue" />
                  {project.location}, Chennai
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-3 sm:mb-4 group-hover:text-fomra-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
                      <CheckCircle2 size={12} className="text-fomra-blue flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Explore details</span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center group-hover:border-fomra-blue group-hover:bg-fomra-blue group-hover:text-white text-slate-900 dark:text-white transition-all duration-300">
                    <ArrowRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;