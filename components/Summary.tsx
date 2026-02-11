
import React from 'react';

export const Summary: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-24">
      <div className="text-center space-y-8">
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">
          Strategic Overview
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter leading-[1.1]">
          Developed by Bharath. <br/>
          <span className="text-zinc-600">Defined by Performance.</span>
        </h2>
        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-4xl mx-auto font-medium">
          I am <strong>G. Bharath</strong>, a high-performance <strong>Full Stack Developer</strong> specializing in the React ecosystem. 
          Over the last 2 years, I have established a track record of delivering bespoke digital solutions for small to medium enterprises. 
          From architecting the complex product schemas of <strong>Infinity Customizations</strong> to creating modern interfaces for 
          <strong>Dance academy</strong>, my approach centers on precision, scalability, and exceptional UI.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {[
          { label: 'Industry Tenure', value: '2 Years', sub: 'Independent Freelance' },
          { label: 'Deployed', value: '15+', sub: 'End-to-End Solutions' },
          { label: 'Availability', value: 'Active', sub: 'New Opportunities' },
          { label: 'Core Expertise', value: 'MERN', sub: 'Native Stack Mastery' },
        ].map((stat) => (
          <div key={stat.label} className="p-8 md:p-10 rounded-[3rem] bg-zinc-900/20 border border-zinc-900/50 hover:border-blue-500/30 transition-all group relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-500/10 transition-colors" />
            <div className="text-4xl font-black text-white group-hover:text-blue-500 transition-colors tracking-tighter mb-2">{stat.value}</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mb-1">{stat.label}</div>
            <div className="text-[10px] text-zinc-700 uppercase tracking-widest font-bold">{stat.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
