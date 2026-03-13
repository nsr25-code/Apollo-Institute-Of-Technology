import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, GraduationCap, Send, CheckCircle, BookOpen, Globe, Users, Home } from 'lucide-react';
import { DEPARTMENTS } from '../constants';

interface ApplicationFormProps {
  programName: string;
  onClose: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ programName, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    address: '',
    qualification: '',
    gender: '',
    caste: '',
    religion: '',
    selectedCourse: programName || ''
  });

  // Extract all available courses from DEPARTMENTS
  const allCourses = DEPARTMENTS.flatMap(dept => {
    if (dept.branches) {
      return dept.branches.map(branch => `${dept.type} - ${branch.name}`);
    }
    return [dept.type];
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={onClose} />
        <div className="relative w-full max-w-md glass-morphism border border-emerald-500/30 rounded-[2.5rem] p-12 text-center animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-space font-black text-white mb-4 uppercase">Success!</h2>
          <p className="text-slate-400 font-space mb-8">
            Your application for <span className="text-emerald-400 font-bold">{formData.selectedCourse || programName}</span> has been received. Our admissions counselor will contact you within 24 hours.
          </p>
          <button 
            onClick={onClose}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-space font-bold transition-all shadow-lg shadow-emerald-500/20"
          >
            Close Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300 flex flex-col max-h-[95vh]">
        
        {/* Progress Bar Decor */}
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 z-30">
          <div className="h-full bg-blue-600 animate-[progress_2s_ease-in-out]"></div>
        </div>

        {/* Header - Fixed at top */}
        <div className="p-6 md:p-8 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-xl z-20">
          <div className="space-y-1">
            <div className="inline-block px-3 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-space text-[10px] font-bold tracking-widest uppercase border border-blue-500/20">
              Admission Portal 2024-25
            </div>
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white uppercase">
              Application Form
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-slate-800 hover:bg-red-500/20 hover:text-red-400 rounded-full text-slate-400 transition-all border border-slate-700 hover:border-red-500/50 group"
            title="Close Form"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Form Body - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <form id="admission-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section: Personal Information */}
            <div className="space-y-6">
              <h3 className="text-blue-500 font-space font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <User className="w-4 h-4" /> Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-space font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                      <User className="w-4 h-4" />
                    </div>
                    <input 
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-space focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <label className="block text-xs font-space font-bold text-slate-500 uppercase tracking-widest ml-1">Gender</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                    <select 
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-space focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all appearance-none"
                      value={formData.gender}
                      onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    >
                      <option value="" disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Caste */}
                <div className="space-y-2">
                  <label className="block text-xs font-space font-bold text-slate-500 uppercase tracking-widest ml-1">Caste</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                    <input 
                      required
                      type="text"
                      placeholder="General / OBC / SC / ST"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-space focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all"
                      value={formData.caste}
                      onChange={(e) => setFormData({...formData, caste: e.target.value})}
                    />
                  </div>
                </div>

                {/* Religion */}
                <div className="space-y-2">
                  <label className="block text-xs font-space font-bold text-slate-500 uppercase tracking-widest ml-1">Religion</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                      <Globe className="w-4 h-4" />
                    </div>
                    <input 
                      required
                      type="text"
                      placeholder="Hinduism / Islam / etc."
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-space focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all"
                      value={formData.religion}
                      onChange={(e) => setFormData({...formData, religion: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Contact Details */}
            <div className="space-y-6">
              <h3 className="text-blue-500 font-space font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <Phone className="w-4 h-4" /> Contact Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-xs font-space font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input 
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-space focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-xs font-space font-bold text-slate-500 uppercase tracking-widest ml-1">Contact Number</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input 
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-space focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="block text-xs font-space font-bold text-slate-500 uppercase tracking-widest ml-1">Full Address</label>
                <div className="relative group">
                  <div className="absolute top-4 left-4 pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                    <Home className="w-4 h-4" />
                  </div>
                  <textarea 
                    required
                    rows={3}
                    placeholder="House No., Street, Area..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-space focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all resize-none"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* City */}
                <div className="space-y-2">
                  <label className="block text-xs font-space font-bold text-slate-500 uppercase tracking-widest ml-1">City</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input 
                      required
                      type="text"
                      placeholder="Kanpur"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-space focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                </div>

                {/* State */}
                <div className="space-y-2">
                  <label className="block text-xs font-space font-bold text-slate-500 uppercase tracking-widest ml-1">State</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input 
                      required
                      type="text"
                      placeholder="Uttar Pradesh"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-space focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Academic Details */}
            <div className="space-y-6">
              <h3 className="text-blue-500 font-space font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Academic Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Qualification */}
                <div className="space-y-2">
                  <label className="block text-xs font-space font-bold text-slate-500 uppercase tracking-widest ml-1">Highest Qualification</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <select 
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-space focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all appearance-none"
                      value={formData.qualification}
                      onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                    >
                      <option value="" disabled>Select Qualification</option>
                      <option value="10th">10th Standard</option>
                      <option value="12th">12th Standard / Diploma</option>
                      <option value="grad">Graduate</option>
                      <option value="post-grad">Post Graduate</option>
                    </select>
                  </div>
                </div>

                {/* Course Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-space font-bold text-slate-500 uppercase tracking-widest ml-1">Select Course</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-blue-500 transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <select 
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white font-space focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all appearance-none"
                      value={formData.selectedCourse}
                      onChange={(e) => setFormData({...formData, selectedCourse: e.target.value})}
                    >
                      <option value="" disabled>Select a Course</option>
                      {allCourses.map((course, idx) => (
                        <option key={idx} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="p-6 md:p-8 border-t border-slate-800 bg-slate-900/80 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-600 font-space uppercase tracking-[0.3em] order-2 md:order-1">
            Secure Admissions Portal • Accredited by NBA & NAAC
          </p>
          <button 
            form="admission-form"
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-space font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98] flex items-center justify-center gap-3 group/submit order-1 md:order-2"
          >
            Submit Application
            <Send className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default ApplicationForm;
