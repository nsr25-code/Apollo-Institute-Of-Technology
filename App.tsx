
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import AcademicPortfolio from './components/AcademicPortfolio';
import SyllabusBlueprint from './components/SyllabusBlueprint';
import StudentLife from './components/StudentLife';
import NewsEvents from './components/NewsEvents';
import VideoGallery from './components/VideoGallery';
import BranchSelector from './components/BranchSelector';
import ApplicationForm from './components/ApplicationForm';
import ContactModal from './components/ContactModal';
import { Phone, Mail, Headphones, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { DepartmentWing, Branch } from './types';

const App: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<DepartmentWing | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [showBranchSelection, setShowBranchSelection] = useState(false);
  
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [applyingFor, setApplyingFor] = useState('');

  const handleDeptSelect = (dept: DepartmentWing, action?: 'apply' | 'detail') => {
    if (action === 'detail' || (!dept.branches && !action)) {
      setSelectedDept(dept);
      setShowBranchSelection(false);
      setSelectedBranch(null);
    } else if (dept.branches && dept.branches.length > 0) {
      setSelectedDept(dept);
      setShowBranchSelection(true);
      setSelectedBranch(null);
    }
  };

  const handleBranchSelect = (branch: Branch) => {
    setSelectedBranch(branch);
    setShowBranchSelection(false);
  };

  const openApplyForm = (programName: string) => {
    setApplyingFor(programName);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen font-space selection:bg-blue-500 selection:text-white bg-slate-950">
      <Header 
        onAdmissionsClick={() => openApplyForm('')} 
        onContactClick={() => setIsContactModalOpen(true)}
      />
      
      <main>
        <div id="home">
          <Hero />
        </div>

        <AboutUs />

        <div id="programs">
          <AcademicPortfolio 
            onSelect={handleDeptSelect} 
            onApply={openApplyForm} 
          />
        </div>

        <div id="student-life">
          <StudentLife />
        </div>

        <div id="news-events">
          <NewsEvents />
        </div>

        <div id="videos">
          <VideoGallery />
        </div>

        {/* Branch Selection Overlay */}
        {showBranchSelection && selectedDept && (
          <BranchSelector 
            dept={selectedDept} 
            onSelect={handleBranchSelect} 
            onApply={openApplyForm}
            onClose={() => setShowBranchSelection(false)} 
          />
        )}

        {/* Interactive Syllabus Viewer (Modal) */}
        {(selectedBranch || (selectedDept && (!selectedDept.branches || selectedDept.branches.length === 0))) && !showBranchSelection && (
          <SyllabusBlueprint 
            dept={selectedDept!} 
            branch={selectedBranch || undefined}
            onClose={() => {
              setSelectedBranch(null);
              setSelectedDept(null);
            }} 
          />
        )}

        {/* Application Form Modal */}
        {isApplyModalOpen && (
          <ApplicationForm 
            programName={applyingFor} 
            onClose={() => setIsApplyModalOpen(false)} 
          />
        )}

        {/* Contact Us Modal */}
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </main>

      <footer className="py-20 border-t border-slate-900 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="space-y-6">
               <div className="text-3xl font-playfair font-bold text-white">AIT <span className="text-blue-500">& AIPS</span></div>
               <p className="text-slate-500 font-space text-sm">
                 An elite hub for technical and business innovation. Our mission is to produce global leaders capable of architecting a smarter world.
               </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 font-space uppercase tracking-widest text-sm text-slate-300">Quick Links</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-space">
                <li><a href="#news-events" className="hover:text-blue-400 transition-colors">Academic Calendar</a></li>
                <li><a href="https://apolloit.ac.in/mandatory-disclosure/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Mandatory Disclosure</a></li>
                <li><a href="https://apolloit.ac.in/fee-structure/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Fee Structure</a></li>
                <li><a href="https://apolloit.ac.in/anti-ragging-act-2010/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Anti Ragging ACT, 2010</a></li>
                <li><a href="https://apolloit.ac.in/anti-ragging-committee/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Anti Ragging Committee</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 font-space uppercase tracking-widest text-sm text-slate-300">Location</h4>
              <p className="text-slate-500 leading-relaxed font-space text-sm">
                Sundhela, Block- Sarsaul,<br />
                Kanpur-Allahabad Highway,<br />
                NH2, Kanpur (UP) 209402
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 font-space uppercase tracking-widest text-sm text-slate-300">Contact</h4>
              <div className="text-slate-500 font-space space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>7525003820/21</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>helpdesk@apolloit.ac.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Headphones className="w-4 h-4 text-blue-500" />
                  <span>TollFree : 1800-121-0353</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 font-space uppercase tracking-widest text-sm text-slate-300">Social Info</h4>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.facebook.com/AITKanpurOfficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://x.com/ApolloKanpur" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/apollo_353/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F108287185%2Fadmin%2Fpage-posts%2Fpublished%2F" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/channel/UCNaAZI9vBeGG19LvxFIXVlQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs font-space">
            <div>© {new Date().getFullYear()} AIT & AIPS. All Rights Reserved.</div>
            <div className="uppercase tracking-widest opacity-50">
              Designed by - <span className="text-blue-500 font-bold">MD Nisar Ahmad</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917525003820" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[100] group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          {/* Ripple Effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          {/* Main Button */}
          <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
            <svg 
              viewBox="0 0 24 24" 
              className="w-8 h-8 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default App;
