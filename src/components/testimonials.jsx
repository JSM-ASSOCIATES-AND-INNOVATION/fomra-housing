import React, { useState } from 'react';
import { Award, Star, ShieldCheck, Play, X } from 'lucide-react';

const awards = [
    {
        id: 1,
        title: "Best Developer in Affordable Housing",
        issuer: "NDTV Profit (Real Estate Awards)",
        description: "Awarded to Fomra Housing and Infrastructure Pvt Ltd for outstanding achievements.",
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
        issuer: "Silicon India (Chennai Real Estate Awards)",
        description: "Awarded for the Fomra Jardin (Shenoy Nagar) residential project.",
        image: "https://www.fomrahousing.in/assets/images/vission-mission/awards.jpg"
    }
];

const customerReviews = [
    {
        id: 1,
        text: "It was my dream to buy a CMDA approved plot in Chennai. I have been on a search for a year... When I saw Ragas I didn't have a second thought about it.",
        author: "Senthl Anand",
        role: "Plot Owner at Fomra Ragas",
        image: null
    },
    {
        id: 2,
        text: "The entire process was transparent and went seamlessly as per the promise. The registration was done instantly as per my request...",
        author: "Dr. P.C. Lakshmi Narayanan",
        role: "Project Ragas Buyer",
        image: "https://www.fomrahousing.in/assets/images/testimonials/lakshmi-narayanan.jpg"
    },
    {
        id: 3,
        text: "Our 16 month search for a perfect home culminated in us buying an apartment at Fomra Westend. Ever since our first visit to Fomra we were more than satisfied...",
        author: "Ratheesh Chandran",
        role: "Fomra Westend Resident",
        image: "https://www.fomrahousing.in/assets/images/testimonials/ratheesh.jpg"
    }
];

const videoTestimonials = [
    {
        id: 1,
        title: "Life at Fomra Hues",
        author: "Mr. & Mrs. Karthik",
        thumbnail: "/fomra-hues-about.jpg",
        youtubeId: "dQw4w9WgXcQ"
    },
    {
        id: 2,
        title: "Our Dream Villa at Bay Pristine",
        author: "Dr. Prakash",
        thumbnail: "/fomra-hues-hero.jpg",
        youtubeId: "dQw4w9WgXcQ"
    }
];

const AwardCard = ({ award }) => (
    <div className="w-[350px] flex-shrink-0 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-soft border border-slate-100 dark:border-slate-700 group flex flex-col justify-between">
        {award.image && (
            <div className="w-full h-48 bg-white dark:bg-slate-900 mb-6 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-700">
                <img src={award.image} alt={award.title} className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal" />
            </div>
        )}
        <div className="px-8 pb-8">
            <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-fomra-blue" />
                <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">{award.issuer}</span>
            </div>
            <h4 className="font-black text-slate-900 dark:text-white text-lg mb-2 group-hover:text-fomra-blue transition-colors duration-300">"{award.title}"</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{award.description}</p>
        </div>
    </div>
);

const ReviewCard = ({ review }) => (
    <div className="w-[400px] flex-shrink-0 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-700 group flex flex-col justify-between">
        <div>
            <div className="flex items-center justify-between mb-6">
                <div className="px-3 py-1 bg-fomra-blue/10 dark:bg-fomra-blue/20 rounded-full">
                    <span className="font-bold text-fomra-blue text-xs uppercase tracking-wider">Verified Buyer</span>
                </div>
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#FBBC05" color="#FBBC05" />
                    ))}
                </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic mb-8 text-lg">"{review.text}"</p>
        </div>
        <div className="flex items-center gap-4 mt-auto border-t border-slate-100 dark:border-slate-700 pt-6">
            {review.image ? (
                <img src={review.image} alt={review.author} className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm" />
            ) : (
                <div className="w-12 h-12 rounded-full bg-fomra-blue text-white flex items-center justify-center font-bold shadow-sm">
                    {review.author.charAt(0)}
                </div>
            )}
            <div>
                <div className="font-bold text-slate-900 dark:text-white group-hover:text-fomra-blue transition-colors duration-300 text-[15px]">{review.author}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center mt-1">
                    <ShieldCheck size={12} className="mr-1 text-green-500" />
                    {review.role}
                </div>
            </div>
        </div>
    </div>
);

const VideoCard = ({ video, onClick }) => (
    <div 
      className="relative w-[300px] md:w-[400px] h-[250px] md:h-[300px] rounded-3xl overflow-hidden cursor-pointer group shadow-soft"
      onClick={() => onClick(video)}
    >
        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10"></div>
        
        <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-fomra-blue transition-colors duration-300 shadow-xl">
                <Play size={24} className="text-white ml-1" />
            </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 z-20">
            <h4 className="text-white font-bold text-lg mb-1 leading-snug">{video.title}</h4>
            <p className="text-slate-300 text-sm font-medium">{video.author}</p>
        </div>
    </div>
);

const Testimonials = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Awards Header */}
                <div className="text-center mb-16">
                    <h4 className="text-sm font-bold text-fomra-blue tracking-widest uppercase mb-3">Awards & Recognition</h4>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Excellence in Real Estate</h2>
                    <div className="h-1 w-24 bg-fomra-blue rounded-full mx-auto mt-6"></div>
                </div>

                {/* Awards Marquee */}
                <div className="relative w-full overflow-hidden pb-12 group">
                    <div className="flex gap-8 w-max animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '30s' }}>
                        {awards.map((award) => (
                            <AwardCard key={award.id} award={award} />
                        ))}
                        {awards.map((award) => (
                            <AwardCard key={`${award.id}-dup`} award={award} />
                        ))}
                    </div>
                </div>

                {/* Video Testimonials Header */}
                <div className="text-center mb-16 mt-12">
                    <h4 className="text-sm font-bold text-fomra-blue tracking-widest uppercase mb-3">Client Stories</h4>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Hear From Our Family</h2>
                    <div className="h-1 w-24 bg-fomra-blue rounded-full mx-auto mt-6"></div>
                </div>

                <div className="flex justify-center gap-6 md:gap-12 flex-wrap mb-24">
                    {videoTestimonials.map((video) => (
                        <VideoCard key={video.id} video={video} onClick={setActiveVideo} />
                    ))}
                </div>

                {/* Text Testimonials Header */}
                <div className="text-center mb-16">
                    <h4 className="text-sm font-bold text-fomra-blue tracking-widest uppercase mb-3">Written Reviews</h4>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Client Perspectives</h2>
                    <div className="h-1 w-24 bg-fomra-blue rounded-full mx-auto mt-6"></div>
                </div>

                {/* Testimonials Marquee */}
                <div className="relative w-full overflow-hidden pb-12 group">
                    <div className="flex gap-8 w-max animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '40s' }}>
                        {customerReviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                        {customerReviews.map((review) => (
                            <ReviewCard key={`${review.id}-dup`} review={review} />
                        ))}
                    </div>
                </div>
                
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm animate-fade-in">
                    <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl">
                        <button 
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <div className="aspect-video w-full bg-slate-800 flex items-center justify-center">
                            {/* In a real app, this would be an iframe or video tag */}
                            <p className="text-slate-400 font-medium">Video Player Placeholder: {activeVideo.title}</p>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;