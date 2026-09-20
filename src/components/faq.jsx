import React, { useState } from 'react';
import { ChevronDown, ArrowRight, ExternalLink } from 'lucide-react';

const FomraInsightsFAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "Are Fomra projects CMDA and RERA approved?",
      answer: "Yes, 100% of our projects are CMDA and RERA approved. We prioritize absolute transparency and legal clarity, ensuring your investment is completely secure."
    },
    {
      question: "Can I get a bank loan for Fomra properties?",
      answer: "Absolutely. All our properties are pre-approved by major leading banks and financial institutions, making the home loan process seamless and quick."
    },
    {
      question: "What is the typical handover time?",
      answer: "Our villa plots are 'ready-to-build'. Once registration is complete, you are handed over the property immediately with all infrastructure already in place."
    },
    {
      question: "Does Fomra help with post-purchase maintenance?",
      answer: "Yes, we offer professional estate management services to ensure your plots remain well-maintained, secure, and pristine."
    }
  ];

  const insights = [
    {
      category: "Real Estate Guide",
      title: "Why Porur is the ultimate destination for luxury apartments",
      image: "/real-courtyard.png"
    },
    {
      category: "Investment",
      title: "Villa Plots vs Apartments: Which offers better ROI?",
      image: "/real-building.png"
    }
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white dark:bg-slate-900 transition-colors duration-300 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* FAQ Section */}
          <div>
            <div className="mb-5 sm:mb-8">
              <h4 className="text-xs sm:text-sm font-bold text-fomra-blue tracking-widest uppercase mb-2">Support & Guidance</h4>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2 sm:mb-3">
                Common <span className="text-fomra-blue">Questions</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg hidden sm:block">
                Everything you need to know about investing with Fomra Housing.
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-slate-50 dark:bg-slate-800/50 shadow-md' : 'bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className="w-full text-left px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-between gap-3 focus:outline-none"
                  >
                    <span className={`font-bold text-sm sm:text-base lg:text-lg transition-colors ${openFaq === index ? 'text-fomra-blue' : 'text-slate-900 dark:text-white'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === index ? 'bg-fomra-blue text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 sm:mt-6">
              <a href="#" className="inline-flex items-center gap-2 text-slate-900 dark:text-white text-sm font-bold hover:text-fomra-blue dark:hover:text-fomra-blue transition-colors group">
                View all FAQs <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* Insights Section */}
          <div className="lg:pl-8">
            <div className="mb-5 sm:mb-8">
              <h4 className="text-xs sm:text-sm font-bold text-fomra-blue tracking-widest uppercase mb-2">News & Updates</h4>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2 sm:mb-3">
                Fomra <span className="text-fomra-blue">Insights</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg hidden sm:block">
                Stay updated with the latest trends in Chennai real estate.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5">
              {insights.map((post, index) => (
                <div key={index} className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-soft border border-slate-100 dark:border-slate-700 cursor-pointer h-44 sm:h-56 lg:h-64">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10"></div>
                  
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute inset-0 z-20 p-4 sm:p-6 flex flex-col justify-between">
                    <span className="self-start px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full border border-white/20">
                      {post.category}
                    </span>
                    
                    <div>
                      <h3 className="text-base sm:text-xl lg:text-2xl font-black text-white mb-2 sm:mb-3 leading-snug group-hover:text-cyan-300 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-white/90 text-xs sm:text-sm font-bold uppercase tracking-wider group-hover:text-white">
                        Read Article <ExternalLink size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-6 text-right">
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full text-xs sm:text-sm font-bold tracking-wide hover:bg-fomra-blue hover:text-white dark:hover:bg-fomra-blue dark:hover:text-white transition-all shadow-sm">
                Explore Blog
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FomraInsightsFAQ;