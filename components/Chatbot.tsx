
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: '👋 Hello! Welcome to the AIT & AIPS AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const systemInstruction = `
        You are the official AI Assistant for Apollo Institute of Technology (AIT) and Apollo Institute of Professional Studies (AIPS) in Kanpur.
        Provide accurate, professional, and helpful information based on the following comprehensive data:

        INSTITUTION OVERVIEW:
        - Name: Apollo Institute of Technology (AIT) & Apollo Institute of Professional Studies (AIPS).
        - Founded: 2008 by AIT-BD Charitable Educational Society.
        - Campus: 35-Acre pollution-free, natural campus in Block Sarsaul, Kanpur.
        - Leadership: Director General Dr. S.P. Gupta (Ex-Prof IIT Kanpur, Ph.D. from Brooklyn, NY) and Director Dr. P.N. Khoshwari (Ex-Director HBTI Kanpur, Ph.D. from Guelph, Canada).
        - Mission: To provide top-tier management and technical education to develop talent and personality.

        ACADEMIC PROGRAMS:
        - B.Tech (4 Years): AIML (Artificial Intelligence & Machine Learning), CSE (Computer Science), Mechanical, Civil, Electrical, Electronics.
        - MBA (2 Years): Focus on Data Analytics & Digital Strategy.
        - BCA (3 Years): Focus on Software & App Development.
        - BBA (3 Years): Focus on Entrepreneurship.
        - Diploma (3 Years): Mechanical, Civil, Electrical, Electronics.

        CAMPUS FACILITIES:
        - Library: 5,000+ volumes, e-journals, digital research zones.
        - Computer Lab: AI workstations, cloud servers, full-stack tools.
        - Workshops: CNC machining, robotics fabrication, heavy mechanical units.
        - Sports: Tech clubs, cultural fests, olympic-grade courts.
        - Seminars: Air-conditioned auditoriums for industry summits.

        ADMISSIONS & CONTACT:
        - Status: Admissions are currently OPEN.
        - Contact: 7525003820, 7525003821.
        - Toll-Free: 1800-121-0353.
        - Email: helpdesk@apolloit.ac.in.
        - Address: Sundhela, Block- Sarsaul, Kanpur-Allahabad Highway, NH2, Kanpur (UP) 209402.

        NEWS & EVENTS:
        - Annual Tech Fest: Innovision 2024 (April 12-14).
        - Recruitment Drive: Global Tech Giants (April 20).
        - Guest Lecture: Dr. Sarah Jenkins on Sustainability (April 25).

        ACADEMIC CALENDAR (2024-25):
        - Classes Start: August 01, 2024.
        - Mid-Sem Exams: October 15-22, 2024.
        - End-Sem Exams: December 05-20, 2024.
        - Winter Vacation: Dec 21 - Jan 05, 2025.
        - Even Sem Starts: January 06, 2025.

        INSTRUCTIONS:
        - GREETING: ONLY respond with a warm greeting (e.g., "👋 Hello! Welcome...") if the user's message is a greeting (like "Hi", "Hello", "Hey"). If the user asks a specific question, answer it directly without repeating the greeting.
        - FORMATTING: Use **Bold Headings**, Emojis (sparingly), and clean Bullet Points.
        - CONCISENESS: Keep answers short and direct. Avoid long paragraphs.
        - COURSE LISTING: When asked about courses, use this clean structure:
          **🎓 B.Tech (4 Years)**
          • AIML, CSE, ME, CE, EE, ECE
          **💼 MBA (2 Years)**
          • Digital Strategy & Analytics
          **💻 BCA / BBA (3 Years)**
          • Software Dev / Entrepreneurship
          **🛠️ Diploma (3 Years)**
          • ME, CE, EE, ECE
        - ADMISSIONS: Always highlight "**Admissions are OPEN!**" 🚀
        - FALLBACK: If info is missing, suggest: "📞 Call: 7525003820" or "📍 Visit: Sarsaul, Kanpur".
      `;

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API_KEY_MISSING");
      }

      const genAI = new GoogleGenAI({ apiKey });
      
      const response = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
          topP: 0.95,
          topK: 40,
        },
      });

      const aiResponse = response.text || "I'm sorry, I couldn't process that request. Please try again or contact our helpdesk.";
      setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (error: unknown) {
      console.error("Chatbot Error:", error);
      let errorMessage = "I'm having trouble connecting right now. Please try again later.";
      
      const message = error instanceof Error ? error.message : String(error);

      if (message === "API_KEY_MISSING") {
        errorMessage = "⚠️ API Key is missing. If you are using Vercel, please add GEMINI_API_KEY to your Environment Variables.";
      } else if (message.includes("API key not valid")) {
        errorMessage = "⚠️ Invalid API Key. Please check your Gemini API configuration.";
      }

      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000000] font-space">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-48px)] sm:w-[350px] md:w-[400px] h-[500px] max-h-[70vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-blue-600 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">AIT AI Assistant</div>
                  <div className="text-blue-100 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-blue-600' : 'bg-slate-800'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-blue-400" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-slate-800 text-slate-200 rounded-tl-none'
                    }`}>
                      <div className="markdown-body">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none">
                      <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="w-full bg-slate-800 text-white text-sm rounded-xl py-3 pl-4 pr-12 border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-2 text-[10px] text-center text-slate-500 uppercase tracking-widest">
                powered by AIT & AIPS
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
        aria-label="Open AI Chatbot"
      >
        <div className="relative flex items-center justify-center">
          {/* Ripple Effect */}
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          {/* Main Button */}
          <div className="relative w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
            {isOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <MessageSquare className="w-7 h-7 text-white" />
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default Chatbot;
