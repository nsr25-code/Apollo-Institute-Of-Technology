
import React, { useState } from 'react';
import { DepartmentWing, Branch } from '../types';
import { X, ChevronRight, FileText } from 'lucide-react';

interface BlueprintProps {
  dept: DepartmentWing;
  branch?: Branch;
  onClose: () => void;
}

const SyllabusBlueprint: React.FC<BlueprintProps> = ({ dept, branch, onClose }) => {
  const [selectedYear, setSelectedYear] = useState(1);

  const years = Array.from({ length: dept.years }, (_, i) => i + 1);
  const syllabusData = branch ? branch.syllabus : dept.syllabus || [];
  
  const currentSyllabus = syllabusData.filter(s => 
    s.semester === (selectedYear * 2 - 1) || s.semester === (selectedYear * 2)
  );

  return (
    <div className="fixed inset-0 z-[100001] flex items-center justify-center p-0 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl cursor-pointer hidden md:block" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl h-full md:h-[90vh] bg-slate-900 border-0 md:border md:border-slate-700/50 rounded-none md:rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(59,130,246,0.15)] animate-in zoom-in duration-300">
        
        {/* Header */}
        <div className="p-5 md:p-8 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3 md:gap-6">
            <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-${dept.accentColor}/10 text-${dept.accentColor}`}>
               <FileText className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-playfair font-bold text-white mb-0.5 md:mb-1 uppercase tracking-tight">
                {branch ? branch.name : dept.type} Blueprint
              </h2>
              <p className="text-slate-400 font-space text-[10px] md:text-sm tracking-widest uppercase">
                {dept.title} • {branch ? 'Specialized Focus' : `Focus on ${dept.focus}`}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 md:p-4 bg-slate-800 hover:bg-red-500/20 hover:text-red-400 rounded-full transition-all border border-slate-700 hover:border-red-500/50"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Orbital Switch (Years) */}
        <div className="px-5 md:px-8 py-4 md:py-8 bg-slate-800/10 border-b border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
             <span className="text-slate-500 font-space text-[10px] md:text-xs font-bold uppercase tracking-widest">Select Academic Year</span>
             <div className="flex bg-slate-950 p-1 rounded-full border border-slate-700 w-full md:w-auto justify-center">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`flex-1 md:flex-none px-4 md:px-10 py-2 md:py-3 rounded-full font-space text-xs md:text-sm font-bold transition-all ${
                    selectedYear === year 
                    ? `bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]` 
                    : 'text-slate-500 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  Year {year}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center md:text-right">
             <div className="text-blue-400 font-space text-lg md:text-2xl font-bold">Semesters {selectedYear * 2 - 1} & {selectedYear * 2}</div>
             <div className="text-slate-500 text-[10px] uppercase tracking-widest font-space">Curriculum Progress 2024-25</div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 md:p-12 space-y-8 md:space-y-16 scrollbar-custom blueprint-grid">
           {currentSyllabus.length > 0 ? (
             currentSyllabus.map((sem, sIdx) => (
               <div key={sem.semester} className="space-y-6 md:space-y-8 animate-in slide-in-from-bottom-10 duration-500" style={{ animationDelay: `${sIdx * 0.1}s` }}>
                 <div className="flex items-center gap-6">
                   <div className="relative">
                      <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/30 font-black text-blue-500 font-space text-lg md:text-xl shadow-lg shadow-blue-500/5">
                        {sem.semester}
                      </div>
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-blue-600 text-white text-[8px] flex items-center justify-center rounded-full font-bold">SEM</div>
                   </div>
                   <div className="space-y-1">
                      <h3 className="text-lg md:text-3xl font-space font-black tracking-tight text-white uppercase">Semester {sem.semester}</h3>
                      <p className="text-slate-500 text-[10px] md:text-sm font-space">Academic Stage: {selectedYear === 1 ? 'Foundational' : selectedYear === 2 ? 'Intermediate' : 'Advanced'}</p>
                   </div>
                   <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 via-slate-700/50 to-transparent ml-2 md:ml-4"></div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                   {sem.modules.map((module, mIdx) => (
                     <div 
                       key={module.title}
                       className="p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-slate-800/40 border border-slate-700/40 hover:bg-slate-800/60 hover:border-blue-500/30 transition-all group relative overflow-hidden"
                       style={{ animation: `springUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${mIdx * 0.15}s forwards`, opacity: 0 }}
                     >
                       <div className="relative z-10">
                         <div className="flex justify-between items-start mb-6">
                           <h4 className="text-lg md:text-xl font-black text-blue-400 font-space uppercase tracking-tight">{module.title}</h4>
                           <span className="text-[8px] md:text-[10px] font-space font-bold bg-slate-700/50 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-slate-400 border border-slate-600">CORE MODULE</span>
                         </div>
                         <ul className="space-y-4">
                           {module.topics.map(topic => (
                             <li key={topic} className="flex items-center text-slate-300 text-xs md:text-sm font-space group/item">
                               <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-blue-500/40 mr-3 md:mr-4 group-hover/item:scale-150 group-hover/item:bg-blue-400 transition-all"></div>
                               <span className="group-hover/item:text-white transition-colors">{topic}</span>
                             </li>
                           ))}
                         </ul>
                       </div>
                       
                       {/* Subtle Decoration */}
                       <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <ChevronRight className="w-16 h-16" />
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             ))
           ) : (
             <div className="text-center py-32 space-y-4">
               <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-700">
                  <FileText className="w-10 h-10 text-slate-600" />
               </div>
               <h3 className="text-2xl font-space font-bold text-slate-300">Curriculum Under Review</h3>
               <p className="text-slate-500 font-space max-w-md mx-auto leading-relaxed">Detailed modules for this specific academic phase are currently being refined by the Board of Studies to align with industry 5.0 standards.</p>
             </div>
           )}
        </div>
      </div>

      <style>{`
        @keyframes springUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .scrollbar-custom::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: rgba(30, 41, 59, 0.8);
          border-radius: 20px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </div>
  );
};

export default SyllabusBlueprint;
