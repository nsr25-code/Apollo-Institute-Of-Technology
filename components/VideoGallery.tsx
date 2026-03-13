
import React from 'react';
import { Play, ExternalLink, Youtube } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Experience Excellence at Apollo Institute",
    thumbnail: "https://img.youtube.com/vi/EGInbQ2Z6pU/maxresdefault.jpg",
    link: "https://youtu.be/EGInbQ2Z6pU?si=FN1wl4CW2dCf_ISF",
    duration: "02:15",
    category: "Campus Tour"
  }
];

const VideoGallery: React.FC = () => {
  return (
    <section id="videos" className="py-12 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-space uppercase tracking-widest">
              <Youtube className="w-3 h-3" />
              Official Channel
            </div>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white">
              Campus <span className="text-blue-500 italic">Insights</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 font-space max-w-xl">
              Experience our vibrant community and academic excellence through our curated video gallery.
            </p>
          </div>
          <a 
            href="https://www.youtube.com/channel/UCNaAZI9vBeGG19LvxFIXVlQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors font-space text-sm group"
          >
            Visit YouTube Channel
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-800 hover:border-red-500/30 transition-all duration-500 shadow-2xl"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white transform transition-all duration-500 group-hover:scale-110 shadow-xl shadow-red-600/20">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 px-2 py-1 rounded bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-space font-bold">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-space uppercase tracking-widest">
                  {video.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-playfair font-bold text-white group-hover:text-red-500 transition-colors leading-tight mb-4">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-space uppercase tracking-widest">
                  <span>Watch on YouTube</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
  </svg>
);

export default VideoGallery;
