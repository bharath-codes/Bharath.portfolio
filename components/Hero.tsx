
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-24 lg:py-40">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-1/4 w-[50rem] h-[50rem] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none animate-glow"></div>
      <div className="absolute bottom-0 -right-1/4 w-[50rem] h-[50rem] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none animate-glow" style={{ animationDelay: '2s' }}></div>

      <div className="space-y-10 max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 shadow-xl mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em]">Open for Strategic Roles & Freelance</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-tight md:leading-[1.1]">
          I'm <span className="text-blue-500">G. Bharath</span>. <br />
          <span className="text-gradient">Full Stack Developer</span>.
        </h1>
        
        <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Transforming complex business logic into high-end digital experiences. With 2 years of freelance mastery in the MERN stack, I build the future of web commerce and architecture.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
          <a 
            href="#projects"
            className="group px-12 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-3 active:scale-95"
          >
            Selected Works
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a 
            href="#contact"
            className="px-12 py-5 bg-zinc-900/50 backdrop-blur-sm text-white border border-zinc-800 rounded-2xl font-black uppercase tracking-widest hover:bg-zinc-800 transition-all transform hover:-translate-y-1 flex items-center justify-center active:scale-95"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};