
import React from 'react';
import { DepartmentWing, Branch } from '../types';
import { X, Sparkles } from 'lucide-react';

interface BranchSelectorProps {
  dept: DepartmentWing;
  onSelect: (branch: Branch) => void;
  onApply: (programName: string) => void;
  onClose: () => void;
}

const BranchSelector: React.FC<BranchSelectorProps> = ({ dept, onSelect, onApply, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100001] flex items-center justify-center p-0 md:p-8">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl hidden md:block" onClick={onClose} />
      
      <div className="relative w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] bg-slate-900 border-0 md:border md:border-slate-800 rounded-none md:rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in duration-500 flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-12 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4 md:gap-6">
             <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-500">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
             </div>
             <div>
               <h2 className="text-xl md:text-4xl font-playfair font-bold text-white mb-1 md:mb-2">
                 {dept.type} Specializations
               </h2>
               <p className="text-slate-400 font-space uppercase text-[10px] md:text-xs tracking-[0.3em]">Select your engineering vertical</p>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 md:p-4 bg-slate-800 hover:bg-red-500/20 hover:text-red-400 rounded-full text-slate-400 transition-all border border-slate-700 hover:border-red-500/50 group"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Branch Grid */}
        <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-y-auto blueprint-grid flex-1 scrollbar-custom">
          {dept.branches?.map((branch, index) => (
            <div
              key={branch.id}
              className="group rounded-[2rem] bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-500 flex flex-col animate-in slide-in-from-bottom-10"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                    <span className="text-[8px] md:text-[10px] font-space font-bold text-slate-500 uppercase tracking-[0.2em]">Department Course</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-space text-white mb-3 md:mb-4 group-hover:text-blue-400 transition-colors">
                    {branch.name}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 font-space leading-relaxed mb-6 md:mb-8">
                    {branch.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-slate-700/50">
                  <button 
                    onClick={() => onApply(`${dept.type} - ${branch.name}`)}
                    className="relative group/btn-apply overflow-hidden py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-space font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-lg shadow-blue-500/10 active:scale-95"
                  >
                    <span className="relative z-10">Apply</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn-apply:translate-x-[100%] transition-transform duration-500 ease-in-out"></div>
                  </button>
                  <button 
                    onClick={() => onSelect(branch)}
                    className="py-3.5 border border-slate-600 hover:border-blue-500/50 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl font-space font-bold text-xs uppercase tracking-[0.2em] transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="p-6 md:p-8 bg-slate-950/80 text-center text-slate-500 text-[8px] md:text-[10px] font-space uppercase tracking-[0.4em] border-t border-slate-800 backdrop-blur-md">
          Academic Excellence Since 1998 • Global Accreditation Standards
        </div>
      </div>

      <style>{`
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

export default BranchSelector;
