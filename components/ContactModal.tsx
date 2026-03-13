
import React from 'react';
import { X, Phone, Mail, MapPin, Clock, Globe, MessageSquare, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const contactSections = [
    {
      title: "Academic Enquiry",
      icon: <Phone className="w-5 h-5" />,
      content: ["7525003804"]
    },
    {
      title: "Exam Enquiry",
      icon: <MessageSquare className="w-5 h-5" />,
      content: ["7525003805"]
    },
    {
      title: "Admissions",
      icon: <Globe className="w-5 h-5" />,
      content: [
        "Toll Free: 1800-121-0353",
        "7525003818 / 19 / 20 / 21"
      ]
    },
    {
      title: "Administration",
      icon: <Clock className="w-5 h-5" />,
      content: ["7525003811"]
    },
    {
      title: "Training & Placement",
      icon: <Rocket className="w-5 h-5" />,
      content: ["7525003807 / 21"]
    },
    {
      title: "Write to us",
      icon: <Mail className="w-5 h-5" />,
      content: ["helpdesk@apolloit.ac.in"]
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-8 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-white">Contact Us</h2>
              <p className="text-slate-400 mt-1">Get in touch with our team</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 gap-6">
                {contactSections.map((section, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="font-space font-bold text-white text-sm uppercase tracking-wider">{section.title}</h3>
                      {section.content.map((line, i) => (
                        <p key={i} className="text-slate-300 mt-1">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Addresses */}
              <div className="space-y-8">
                <div className="p-6 rounded-3xl bg-blue-600/10 border border-blue-500/20">
                  <div className="flex gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-blue-400 shrink-0" />
                    <div>
                      <h3 className="font-space font-bold text-white text-lg">Campus Address</h3>
                      <p className="text-slate-300 mt-2 leading-relaxed">
                        Apollo Institute of Technology Sundhela, Block- Sarsaul, Kanpur-Allahabad Highway, NH2, Kanpur (UP)
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-48 rounded-2xl overflow-hidden border border-blue-500/20">
                    <iframe 
                      src="https://maps.google.com/maps?q=Apollo%20Institute%20of%20Technology%20Sundhela%20Kanpur&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy"
                      title="Campus Map"
                    />
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700">
                  <div className="flex gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-slate-400 shrink-0" />
                    <div>
                      <h3 className="font-space font-bold text-white text-lg">Corporate Address</h3>
                      <p className="text-slate-300 mt-2 leading-relaxed">
                        Apollo Institute of Technology 15/59, H, Civil Lines, Vrindavan Colony, Near DAV Inter College, Kanpur-208001
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-700">
                    <iframe 
                      src="https://maps.google.com/maps?q=Apollo%20Institute%20of%20Technology%20Civil%20Lines%20Kanpur&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy"
                      title="Corporate Map"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;
