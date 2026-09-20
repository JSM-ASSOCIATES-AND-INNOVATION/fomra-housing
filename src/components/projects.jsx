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
    <section id="projects-section" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fomra-blue/5 dark:bg-fomra-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-sm font-bold text-fomra-blue tracking-widest uppercase mb-3">Our Portfolio</h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0198D5]">Masterpieces</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Explore our meticulously crafted residential projects across Chennai's most sought-after locations.
          </p>
        </div>

        {/* Animated Tabs */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-flex bg-white dark:bg-slate-900 p-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 backdrop-blur-xl">
            {/* Sliding Pill Indicator */}
            <div 
              className={`absolute top-2 bottom-2 w-[160px] bg-slate-900 dark:bg-slate-700 rounded-full shadow-md transition-transform duration-500 ease-out z-0 ${
                activeTab === 'ongoing' ? 'translate-x-0' : 'translate-x-[160px]'
              }`}
            ></div>
            
            <button 
              onClick={() => setActiveTab('ongoing')}
              className={`relative z-10 w-[160px] py-3.5 text-[15px] font-bold tracking-wide transition-colors duration-300 rounded-full ${
                activeTab === 'ongoing' ? 'text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              On-Going
            </button>
            <button 
              onClick={() => setActiveTab('completed')}
              className={`relative z-10 w-[160px] py-3.5 text-[15px] font-bold tracking-wide transition-colors duration-300 rounded-full ${
                activeTab === 'completed' ? 'text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {currentProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Premium Image Placeholder with Gradient */}
              <div className="relative w-full h-80 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 dark:bg-slate-900/40 group-hover:bg-transparent transition-colors duration-700 z-10 cursor-pointer"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Badges */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-3 z-20">
                  <div className="px-4 py-1.5 bg-slate-900/90 dark:bg-black/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1.5">
                    {project.status === 'Completed' ? <CheckCircle2 size={14} className="text-green-400" /> : <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>}
                    {project.status}
                  </div>
                  <div className="px-4 py-1.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    {project.type}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4 text-sm font-bold uppercase tracking-widest">
                  <MapPin size={16} className="text-fomra-blue" />
                  {project.location}, Chennai
                </div>
                
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 group-hover:text-fomra-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10 pb-10 border-b border-slate-100 dark:border-slate-800">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} className="text-fomra-blue" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Explore details</span>
                  <div className="w-12 h-12 rounded-full border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center group-hover:border-fomra-blue group-hover:bg-fomra-blue group-hover:text-white text-slate-900 dark:text-white transition-all duration-300">
                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
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