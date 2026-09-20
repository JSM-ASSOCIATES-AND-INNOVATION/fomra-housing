import React, { useState } from 'react';
import { Award, Star, ShieldCheck, Play, X } from 'lucide-react';

const awards = [
    {
        id: 1,
        title: "Best Developer in Affordable Housing",
        issuer: "NDTV Profit",
        description: "Awarded for outstanding achievements in affordable housing.",
        image: "https://www.fomrahousing.in/assets/images/vission-mission/award-1.jpg"
    },
    {
        id: 2,
        title: "Rajasthan Yuva Ratna Award",
        issuer: "Rajasthani Association TN",
        description: "Awarded to Mr. Sharad Fomra for outstanding contributions.",
        image: "https://www.fomrahousing.in/assets/images/vission-mission/award-2.jpg"
    },
    {
        id: 3,
        title: "Luxury Project of the Year",
        issuer: "Silicon India",
        description: "Awarded for the Fomra Jardin residential project.",
        image: "https://www.fomrahousing.in/assets/images/vission-mission/awards.jpg"
    }
];

const customerReviews = [
    {
        id: 1,
        text: "It was my dream to buy a CMDA approved plot in Chennai. When I saw Ragas I didn't have a second thought about it.",
        author: "Senthl Anand",
        role: "Plot Owner at Fomra Ragas",
        image: null
    },
    {
        id: 2,
        text: "The entire process was transparent and went seamlessly as per the promise. Registration was done instantly.",
        author: "Dr. P.C. Lakshmi Narayanan",
        role: "Project Ragas Buyer",
        image: "https://www.fomrahousing.in/assets/images/testimonials/lakshmi-narayanan.jpg"
    },
    {
        id: 3,
        text: "Our 16 month search for a perfect home culminated in us buying an apartment at Fomra Westend. We were more than satisfied.",
        author: "Ratheesh Chandran",
        role: "Fomra Westend Resident",
        image: "https://www.fomrahousing.in/assets/images/testimonials/ratheesh.jpg"
    }
];

const videoTestimonials = [
    {
        id: 1,
        title: "Experience at Fomra Celebration",
        author: "Resident Testimonial",
        thumbnail: "https://img.youtube.com/vi/PyE7IxNDHxM/maxresdefault.jpg",
        youtubeId: "PyE7IxNDHxM"
    },
    {
        id: 2,
        title: "Why We Chose Fomra Tribhuvan",
        author: "Resident Testimonial",
        thumbnail: "https://img.youtube.com/vi/uA4QzLVHKV4/maxresdefault.jpg",
        youtubeId: "uA4QzLVHKV4"
    },
    {
        id: 3,
        title: "Our Dream Home Journey",
        author: "Resident Testimonial",
        thumbnail: "https://img.youtube.com/vi/SWLSoac-rWY/maxresdefault.jpg",
        youtubeId: "SWLSoac-rWY"
    }
];

/* ─── Compact Card Components ─── */

const AwardCard = ({ award, compact }) => (
    <div className={`${compact ? 'w-full' : 'w-[280px] sm:w-[320px]'} flex-shrink-0 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-soft border border-slate-100 dark:border-slate-700 group`}>
        {award.image && (
            <div className={`w-full ${compact ? 'h-28' : 'h-24 sm:h-28'} bg-white dark:bg-slate-900 flex items-center justify-center p-3 border-b border-slate-100 dark:border-slate-700`}>
                <img src={award.image} alt={award.title} className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal" />
            </div>
        )}
        <div className={`${compact ? 'px-5 py-4' : 'px-4 py-3 sm:px-5 sm:py-4'}`}>
            <div className="flex items-center gap-2 mb-2">
                <Award size={14} className="text-[#0198D5]" />
                <span className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">{award.issuer}</span>
            </div>
            <h4 className={`font-black text-slate-900 dark:text-white ${compact ? 'text-[15px]' : 'text-sm sm:text-[15px]'} mb-1 group-hover:text-[#0198D5] transition-colors duration-300 leading-snug`}>"{award.title}"</h4>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{award.description}</p>
        </div>
    </div>
);

const ReviewCard = ({ review, compact }) => (
    <div className={`${compact ? 'w-full' : 'w-[300px] sm:w-[340px]'} flex-shrink-0 bg-white dark:bg-slate-800 ${compact ? 'p-5' : 'p-4 sm:p-5'} rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 group`}>
        <div className="flex items-center justify-between mb-3">
            <div className="px-2 py-0.5 bg-[#0198D5]/10 dark:bg-[#0198D5]/20 rounded-full">
                <span className="font-bold text-[#0198D5] text-[9px] sm:text-[10px] uppercase tracking-wider">Verified Buyer</span>
            </div>
            <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#FBBC05" color="#FBBC05" />
                ))}
            </div>
        </div>
        <p className={`text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic mb-3 ${compact ? 'text-[13px]' : 'text-xs sm:text-[13px]'}`}>"{review.text}"</p>
        <div className="flex items-center gap-3 border-t border-slate-100 dark:border-slate-700 pt-3">
            {review.image ? (
                <img src={review.image} alt={review.author} className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm" />
            ) : (
                <div className="w-8 h-8 rounded-full bg-[#0198D5] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    {review.author.charAt(0)}
                </div>
            )}
            <div>
                <div className="font-bold text-slate-900 dark:text-white group-hover:text-[#0198D5] transition-colors duration-300 text-xs">{review.author}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium flex items-center">
                    <ShieldCheck size={10} className="mr-1 text-green-500" />
                    {review.role}
                </div>
            </div>
        </div>
    </div>
);

const VideoCard = ({ video, onClick, compact }) => (
    <div 
      className={`relative ${compact ? 'w-full h-[200px]' : 'w-[280px] sm:w-[320px] h-[170px]'} flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group shadow-soft`}
      onClick={() => onClick(video)}
    >
        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10"></div>
        
        <img 
            src={video.thumbnail} 
            alt={video.title} 
            onError={(e) => { e.target.onerror = null; e.target.src = video.thumbnail.replace('maxresdefault', 'hqdefault'); }}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-[#0198D5] transition-colors duration-300 shadow-xl">
                <Play size={20} className="text-white ml-0.5" />
            </div>
        </div>

        <div className="absolute bottom-3 left-3 right-3 z-20">
            <h4 className="text-white font-bold text-sm mb-0.5 leading-snug">{video.title}</h4>
            <p className="text-slate-300 text-[11px] font-medium">{video.author}</p>
        </div>
    </div>
);

/* ─── Main Component ─── */

const Testimonials = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section id="testimonials" className="h-screen flex flex-col justify-center py-8 lg:py-10 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
            
            {/* ═══════════════════════════════════════ */}
            {/* DESKTOP: 3-Column Vertical Scroll Grid */}
            {/* ═══════════════════════════════════════ */}
            <div className="hidden lg:flex flex-col items-center flex-1 min-h-0">
                {/* Header */}
                <div className="text-center mb-8 flex-shrink-0">
                    <h4 className="text-sm font-bold text-[#0198D5] tracking-widest uppercase mb-2">Trust & Excellence</h4>
                    <h2 className="text-4xl xl:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Our Legacy in Motion</h2>
                    <div className="h-1 w-20 bg-[#0198D5] rounded-full mx-auto mt-4"></div>
                </div>

                {/* 3-Column Grid */}
                <div className="max-w-7xl mx-auto w-full px-8 grid grid-cols-3 gap-6 flex-1 min-h-0 overflow-hidden relative">
                    {/* Fade edges */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

                    {/* Col 1: Awards — scrolls top→bottom (reverse) */}
                    <div className="overflow-hidden relative">
                        <div className="scroll-col-reverse flex flex-col gap-5">
                            {[...awards, ...awards, ...awards, ...awards].map((award, i) => (
                                <AwardCard key={`a-${i}`} award={award} compact />
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Videos — scrolls bottom→top (normal) */}
                    <div className="overflow-hidden relative">
                        <div className="scroll-col flex flex-col gap-5" style={{ animationDuration: '50s' }}>
                            {[...videoTestimonials, ...videoTestimonials, ...videoTestimonials, ...videoTestimonials].map((video, i) => (
                                <VideoCard key={`v-${i}`} video={video} onClick={setActiveVideo} compact />
                            ))}
                        </div>
                    </div>

                    {/* Col 3: Reviews — scrolls top→bottom (reverse) */}
                    <div className="overflow-hidden relative">
                        <div className="scroll-col-reverse flex flex-col gap-5" style={{ animationDuration: '55s' }}>
                            {[...customerReviews, ...customerReviews, ...customerReviews, ...customerReviews].map((review, i) => (
                                <ReviewCard key={`r-${i}`} review={review} compact />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════ */}
            {/* MOBILE: Horizontal Marquee Rows    */}
            {/* ═══════════════════════════════════ */}
            <div className="block lg:hidden w-full px-4 sm:px-6 overflow-hidden">
                {/* Awards */}
                <div className="text-center mb-4">
                    <h4 className="text-xs font-bold text-[#0198D5] tracking-widest uppercase mb-1">Awards</h4>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Excellence in Real Estate</h2>
                </div>
                <div className="relative w-full overflow-hidden pb-4 group">
                    <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '25s' }}>
                        {[...awards, ...awards].map((award, i) => (
                            <AwardCard key={`ma-${i}`} award={award} />
                        ))}
                    </div>
                </div>

                {/* Videos */}
                <div className="text-center mb-4 mt-4">
                    <h4 className="text-xs font-bold text-[#0198D5] tracking-widest uppercase mb-1">Client Stories</h4>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Hear From Our Family</h2>
                </div>
                <div className="relative w-full overflow-hidden pb-4 group">
                    <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '30s' }}>
                        {[...videoTestimonials, ...videoTestimonials].map((video, i) => (
                            <VideoCard key={`mv-${i}`} video={video} onClick={setActiveVideo} />
                        ))}
                    </div>
                </div>

                {/* Reviews */}
                <div className="text-center mb-4 mt-4">
                    <h4 className="text-xs font-bold text-[#0198D5] tracking-widest uppercase mb-1">Reviews</h4>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Client Perspectives</h2>
                </div>
                <div className="relative w-full overflow-hidden pb-4 group">
                    <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '35s' }}>
                        {[...customerReviews, ...customerReviews].map((review, i) => (
                            <ReviewCard key={`mr-${i}`} review={review} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-slate-900/95 backdrop-blur-md animate-fade-in">
                    <div className="relative w-full max-w-5xl bg-black rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl">
                        <button 
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/80 border border-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <div className="aspect-video w-full bg-black">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`} 
                                title={activeVideo.title}
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            {/* Vertical scroll CSS — reliable inline keyframes */}
            <style>{`
                @keyframes scrollUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes scrollDown {
                    0% { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }
                .scroll-col {
                    animation: scrollUp 40s linear infinite;
                }
                .scroll-col:hover {
                    animation-play-state: paused;
                }
                .scroll-col-reverse {
                    animation: scrollDown 45s linear infinite;
                }
                .scroll-col-reverse:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;