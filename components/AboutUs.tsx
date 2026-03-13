
import React from 'react';
import { Target, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

const AboutUs: React.FC = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "Campus Area", value: "35 Acres" },
    { icon: <Award className="w-6 h-6" />, label: "Founded", value: "2008" },
    { icon: <BookOpen className="w-6 h-6" />, label: "Courses", value: "B.Tech/BBA/BCA" },
    { icon: <Target className="w-6 h-6" />, label: "Location", value: "Kanpur" }
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h2 className="text-sm font-space font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight">
                A Legacy of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Technical Excellence</span>
              </h3>
            </div>
            
            <div className="space-y-4 text-slate-400 font-space text-base leading-relaxed">
              <p>
                AIT-BD Charitable Educational Society founded Apollo Institute of Technology in 2008. Our leadership includes Director General <span className="text-white font-bold">Dr. S.P. Gupta</span> (M.Tech & Ph.D. from Brooklyn, New York, and Ex. Prof from IIT Kanpur) and Director <span className="text-white font-bold">Dr. P.N. Khoshwari</span> (Ph.D. from Guelph, Canada, and Ex. Director H.B.T.I. Kanpur).
              </p>
              <p>
                Apollo Institute of Technology’s main goal is to give young people the greatest management and technical education to develop their talents and personality qualities for a bright future and make them socially responsible citizens.
              </p>
              <p>
                Situated on a <span className="text-blue-400">35-Acre beautiful and natural campus</span> in Block Sarsaul (Kanpur Allahabad Highway), we provide a pollution-free, calm environment that allows students to learn, grow, and develop their skills with clarity, confidence, and creativity.
              </p>
              <p>
                <span className="text-white font-bold">AIPS (Apollo Institute of Professional Studies)</span> provides opportunities for students in BBA and BCA courses to engage in creative research, interdisciplinary collaboration, and professional innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-xs font-space font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden border border-slate-800 relative group">
              <img 
                src="https://picsum.photos/seed/college/1000/1000" 
                alt="Campus Life" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 p-8 bg-white rounded-3xl shadow-2xl hidden md:block max-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-950 font-bold">Top Ranked</div>
                  <div className="text-slate-500 text-sm">Institution in UP</div>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Recognized for academic excellence and industry-leading placement records.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
