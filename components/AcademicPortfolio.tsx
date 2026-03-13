
import React from 'react';
import { DEPARTMENTS, ICONS } from '../constants';
import { DepartmentWing } from '../types';

interface PortfolioProps {
  onSelect: (dept: DepartmentWing, action?: 'apply' | 'detail') => void;
  onApply: (programName: string) => void;
}

const AcademicPortfolio: React.FC<PortfolioProps> = ({ onSelect, onApply }) => {
  return (
    <section id="programs" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4 text-white">Department Wings</h2>
          <p className="text-sm md:text-base text-slate-400 font-space max-w-xl">
            Choose your arena of specialization. Each program is curated by industry veterans and academic scholars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DEPARTMENTS.map((dept) => {
            const hasBranches = dept.branches && dept.branches.length > 0;
            
            return (
              <div
                key={dept.id}
                className="group relative"
              >
                {/* Card Container */}
                <div className="h-full rounded-[1.5rem] md:rounded-[2.5rem] glass-morphism border border-slate-800 hover:border-blue-500/40 transition-all duration-500 ease-out overflow-hidden flex flex-col relative z-10 bg-slate-900/40 shadow-xl hover:shadow-blue-500/5">
                  
                  {/* Image Section */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img 
                      src={dept.image} 
                      alt={dept.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    
                    {/* Floating Icon Overlay */}
                    <div className={`absolute bottom-4 left-4 md:bottom-6 md:left-6 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/50 flex items-center justify-center text-${dept.accentColor} transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600/20 group-hover:text-white`}>
                      {/* Fix: Added explicit typing to allow className injection in cloneElement */}
                      {React.cloneElement(ICONS[dept.type] as React.ReactElement<{ className?: string }>, { className: "w-5 h-5 md:w-6 md:h-6" })}
                    </div>
                  </div>

                  <div className="p-5 md:p-8 space-y-3 md:space-y-4 relative z-10 flex-grow">
                    <h3 className={`text-xl md:text-2xl font-bold font-space transition-colors duration-300 group-hover:text-white uppercase`}>
                      {dept.type}
                    </h3>
                    <div className="text-base md:text-lg font-playfair text-slate-300 italic mb-2">{dept.title}</div>
                    
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-blue-400 font-space font-semibold text-[9px] md:text-[10px] tracking-widest uppercase transition-all group-hover:bg-blue-500/20 group-hover:text-blue-300">
                      {dept.focus}
                    </div>
                    
                    <p className="text-xs md:text-sm text-slate-400 font-space leading-relaxed transition-colors duration-300 group-hover:text-slate-300">
                      {dept.description}
                    </p>
                  </div>

                  {/* Dynamic Action Area */}
                  <div className="px-5 pb-5 md:px-8 md:pb-8 mt-auto">
                    <div className="pt-4 md:pt-6 border-t border-slate-800/50">
                      {hasBranches ? (
                        <button 
                          onClick={() => onSelect(dept)}
                          className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-2xl font-space font-bold transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 active:scale-[0.98]"
                        >
                          Explore Branches
                          <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                        </button>
                      ) : (
                        <div className="grid grid-cols-2 gap-4">
                          <button 
                            onClick={() => onApply(dept.type)}
                            className="relative group/apply overflow-hidden py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-space font-bold text-sm transition-all shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95"
                          >
                            <span className="relative z-10">Apply</span>
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/apply:translate-x-[100%] transition-transform duration-500 ease-in-out"></div>
                          </button>
                          <button 
                            onClick={() => onSelect(dept, 'detail')}
                            className="py-3.5 border border-slate-700 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl font-space font-bold text-sm transition-all active:scale-95"
                          >
                            Detail
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Animated Background Decor */}
                  <div className={`absolute -bottom-10 -right-10 w-48 h-48 bg-${dept.accentColor}/5 rounded-full blur-3xl transition-all duration-700 group-hover:bg-${dept.accentColor}/10 group-hover:scale-150`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicPortfolio;
