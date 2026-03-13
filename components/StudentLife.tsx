
import React from 'react';
import { BookOpen, Users, Monitor, Hammer, Mic2, Play } from 'lucide-react';

const LIFE_SECTIONS = [
  {
    title: 'LIBRARY',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'A massive knowledge hub featuring 5,000+ volumes, e-journals, and high-speed digital research zones.',
    accent: 'blue-500',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'CO-CURRICULAM & SPORTS',
    icon: <Users className="w-6 h-6" />,
    description: 'Vibrant student-led tech clubs and cultural fests merged with elite athletic facilities and olympic-grade courts.',
    accent: 'purple-500',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'COMPUTER LAB',
    icon: <Monitor className="w-6 h-6" />,
    description: 'Next-gen computing labs equipped with AI workstations, cloud servers, and full-stack development tools.',
    accent: 'emerald-500',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'WORKSHOPS',
    icon: <Hammer className="w-6 h-6" />,
    description: 'Hands-on training in heavy mechanical workshops, CNC machining, and robotics fabrication units.',
    accent: 'rose-500',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'SEMINARS',
    icon: <Mic2 className="w-6 h-6" />,
    description: 'Air-conditioned auditoriums hosting global visionaries, industry summits, and academic conferences.',
    accent: 'indigo-500',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800'
  }
];

const StudentLife: React.FC = () => {
  return (
    <section id="student-life" className="py-12 md:py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-20 space-y-4">
          <div className="inline-block px-4 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 font-space text-xs tracking-[0.3em] uppercase mb-4 animate-pulse">
            Campus Ecosystem
          </div>
          <h2 className="text-4xl md:text-6xl font-space font-black tracking-tighter text-white uppercase">
            STUDENT LIFE AT <span className="text-blue-500">AIT & AIPS</span>
          </h2>
          <p className="text-slate-400 font-space max-w-2xl mx-auto leading-relaxed mb-8">
            A 360-degree approach to education where world-class infrastructure meets dynamic student growth.
          </p>
          <a 
            href="https://youtu.be/P3gGIvZZIwE?si=-2JLZKkt1jmrrCZ6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-space font-bold transition-all hover:scale-105 shadow-xl shadow-red-600/20 group"
          >
            <Play className="w-5 h-5 fill-current" />
            WATCH CAMPUS LIFE VIDEO
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {LIFE_SECTIONS.map((item, index) => (
            <div 
              key={item.title}
              className={`group relative h-full flex flex-col rounded-[2.5rem] overflow-hidden bg-slate-900/40 border border-slate-800 transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 ${
                index >= 3 && LIFE_SECTIONS.length % 3 !== 0 ? 'lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-6 left-6 p-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-space font-black tracking-widest text-white uppercase group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-4xl font-space font-black tracking-tighter italic text-slate-800 group-hover:text-slate-700 transition-colors">
                    0{index + 1}
                  </span>
                </div>
                
                <p className="text-slate-400 font-space text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                  {item.description}
                </p>

                <div className="mt-auto">
                  <div className={`h-1 w-12 rounded-full bg-slate-800 group-hover:w-full transition-all duration-500 group-hover:bg-${item.accent}`}></div>
                </div>
              </div>

              {/* Hover Effect Light */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
