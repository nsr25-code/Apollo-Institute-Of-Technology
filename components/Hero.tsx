
import React from 'react';

const AnimatedText = ({ text, className, delayOffset = 0 }: { text: string; className: string; delayOffset?: number }) => {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="reveal-letter"
          style={{ animationDelay: `${(i * 0.04) + delayOffset}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

const Hero: React.FC = () => {
  const handleEnquiry = () => {
    // Redirects to dial pad
    window.location.href = 'tel:7571912395';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 font-space text-sm tracking-widest uppercase">
          Empowering Tomorrow's Architects
        </div>
        
        <h1 className="text-3xl md:text-7xl font-space font-black mb-4 md:mb-6 leading-tight uppercase tracking-tighter">
          <AnimatedText 
            text="AIT & AIPS" 
            className="block mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400" 
            delayOffset={0.2}
          />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-y-2 sm:gap-y-0 sm:gap-x-4">
            <AnimatedText 
              text="APOLLO INSTITUTE" 
              className="text-blue-500 block text-4xl sm:text-3xl md:text-5xl lg:text-6xl" 
              delayOffset={0.8}
            />
            <AnimatedText 
              text="OF TECHNOLOGY" 
              className="text-blue-500 block text-4xl sm:text-3xl md:text-5xl lg:text-6xl" 
              delayOffset={1.45}
            />
          </div>
        </h1>
        
        <div className="max-w-6xl mx-auto mt-6 md:mt-12 space-y-6 md:space-y-12 opacity-0 animate-[fade-in_1.5s_ease-out_2.5s_forwards]">
          {/* Vision Statement */}
          <div className="relative p-6 md:p-8 rounded-3xl glass-morphism border-blue-500/20 overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 group-hover:w-2 transition-all duration-300"></div>
            <h2 className="text-xl md:text-3xl font-playfair font-bold text-white mb-4 leading-tight">
              Powered by Knowledge & Driven by Ethical Values
            </h2>
            <p className="text-base md:text-lg text-slate-300 font-space leading-relaxed italic">
              "Apollo Institute of Technology (AIT) is powered by Knowledge and Driven by Ethical values with a Global Competence and Indian Roots. An Institute well known in the corporate and mediator preserving professional."
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Modern Infrastructure */}
            <div className="p-4 md:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-space">Modern Campus</h3>
              <p className="text-xs md:text-sm text-slate-400 font-space leading-relaxed">
                The most modern, purpose-built Engineering College in UP. A place of study and work with dozens of rooms for brainstorming and project work.
              </p>
            </div>

            {/* Eco-Campus */}
            <div className="p-4 md:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-emerald-500/10 flex-shrink-0 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-space">Eco-Campus</h3>
              <p className="text-xs md:text-sm text-slate-400 font-space leading-relaxed">
                A nature-rich, sustainable environment with premium sports facilities. Aesthetically built to inspire creativity and unlock your professional potential.
              </p>
            </div>

            {/* Affiliation & Legacy */}
            <div className="p-4 md:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-space">AKTU & AICTE</h3>
              <p className="text-xs md:text-sm text-slate-400 font-space leading-relaxed">
                Affiliated to AKTU Lucknow & approved by AICTE. Established in 2008 with a legacy of industry linkage and national significance.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-12 opacity-0 animate-[fade-in_1s_ease-out_3.5s_forwards]">
          <button 
            onClick={handleEnquiry}
            className="group relative px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-space font-bold transition-all shadow-lg shadow-blue-500/25 pulse-gold overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Enquiry Now
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </div>
      </div>
      
      {/* Visual Element: Schematic Lines */}
      <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10" viewBox="0 0 1440 320">
        <path fill="#3b82f6" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      <style>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(20px);
            filter: blur(5px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
