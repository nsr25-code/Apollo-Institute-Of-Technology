
import React from 'react';
import { Calendar, ArrowRight, Bell } from 'lucide-react';

const news = [
  {
    id: 1,
    title: "AIT ACHIEVEMENTS",
    date: "March 15, 2024",
    category: "Achievement",
    image: "https://picsum.photos/seed/innovation/800/600"
  }
];

const events = [
  {
    id: 1,
    title: "Annual Tech Fest: Innovision 2024",
    date: "April 12-14",
    time: "10:00 AM onwards"
  },
  {
    id: 2,
    title: "Campus Recruitment Drive: Global Tech Giants",
    date: "April 20",
    time: "09:00 AM"
  },
  {
    id: 3,
    title: "Guest Lecture by Dr. Sarah Jenkins on Sustainability",
    date: "April 25",
    time: "02:00 PM"
  }
];

const academicCalendar = [
  { event: "Commencement of Classes", date: "August 01, 2024" },
  { event: "Mid-Semester Examination", date: "October 15-22, 2024" },
  { event: "End-Semester Examination", date: "December 05-20, 2024" },
  { event: "Winter Vacation", date: "Dec 21 - Jan 05, 2025" },
  { event: "Even Semester Starts", date: "January 06, 2025" }
];

const NewsEvents: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-space uppercase tracking-widest">
              <Bell className="w-3 h-3" />
              Latest Updates
            </div>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white">
              News & <span className="text-blue-500 italic">Events</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors font-space text-sm group">
            View All Updates
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* News Section */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <div 
                key={item.id} 
                className={`group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all duration-500 ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative ${index === 0 ? 'h-80' : 'h-56'} overflow-hidden`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-space uppercase tracking-widest">
                    {item.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-slate-500 text-xs font-space mb-3">{item.date}</div>
                  <h3 className={`font-playfair font-bold text-white group-hover:text-blue-400 transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Events Section */}
          <div className="space-y-8">
            <h3 className="text-xl font-space font-bold text-white flex items-center gap-3 mb-8">
              <Calendar className="w-5 h-5 text-blue-500" />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {events.map((event) => (
                <div 
                  key={event.id} 
                  className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:bg-slate-900 hover:border-blue-500/20 transition-all group cursor-pointer"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex flex-col items-center justify-center text-blue-400">
                      <span className="text-lg font-bold font-space">{event.date.split(' ')[1]?.split('-')[0] || event.date.split(' ')[1]}</span>
                      <span className="text-[10px] uppercase font-space">{event.date.split(' ')[0]}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-space font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                        {event.title}
                      </h4>
                      <div className="text-xs text-slate-500 font-space">{event.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-8 rounded-[2rem] bg-slate-900/80 border border-slate-800 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-playfair font-bold text-white mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Academic Calendar
                </h4>
                <div className="space-y-4 mb-8">
                  {academicCalendar.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start gap-4 pb-3 border-b border-slate-800/50 last:border-0">
                      <span className="text-slate-300 text-sm font-space leading-tight">{item.event}</span>
                      <span className="text-blue-400 text-[10px] font-space font-bold whitespace-nowrap uppercase tracking-wider">{item.date}</span>
                    </div>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-space text-sm font-bold cursor-pointer group/dl">
                  Download Full PDF <ArrowRight className="w-4 h-4 group-hover/dl:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <Calendar className="w-32 h-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
