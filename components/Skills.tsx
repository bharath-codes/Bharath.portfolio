
import React from 'react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  const customCategories = [
    { key: 'Frontend', label: 'Modern Frontend', desc: 'React Ecosystem & User Interface' },
    { key: 'Backend', label: 'Backend Development', desc: 'Node.js, APIs & Logic' },
    { key: 'Database', label: 'Data Engineering', desc: 'MongoDB & Modeling' },
    { key: 'DevOps & Tools', label: 'Tools & Platform', desc: 'Git, Vercel & Debugging' }
  ];

  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">
          Technical Arsenal
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">Core Proficiencies</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto font-medium">
          A deep dive into my specialized skill set, ranging from modern UI development to scalable backend architectures.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
        {customCategories.map((cat) => (
          <div key={cat.key} className="p-10 rounded-[2.5rem] bg-zinc-900/20 border border-zinc-900 flex flex-col hover:border-zinc-800 transition-all">
            <div className="mb-10 flex justify-between items-end">
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-1">{cat.label}</h3>
                <p className="text-xs text-blue-500 font-bold tracking-widest uppercase">{cat.desc}</p>
              </div>
              <div className="text-zinc-800 font-black text-4xl opacity-20 pointer-events-none">{cat.key[0]}</div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 flex-1">
              {SKILLS.filter(s => s.category === cat.key).map((skill) => (
                <div key={skill.name} className="space-y-3 group">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-xs font-bold text-zinc-400 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{skill.name}</span>
                    <span className="text-[10px] font-mono text-zinc-700">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000 ease-out rounded-full group-hover:from-blue-400 group-hover:to-white shadow-[0_0_12px_rgba(59,130,246,0.3)]" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Foundational Programming Highlight */}
      <div className="p-8 md:p-12 bg-zinc-900/40 border border-zinc-900 rounded-[3rem] mt-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white uppercase tracking-tight">Computer Science Foundations</h4>
            <p className="text-sm text-zinc-500">Strong academic background in core programming principles and data structures.</p>
          </div>
          <div className="md:col-span-2 flex flex-wrap gap-4">
            {SKILLS.filter(s => ['DSA', 'Java', 'Python', 'C Programming'].includes(s.name)).map((skill) => (
              <span key={skill.name} className="px-5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs font-bold text-zinc-400 hover:text-white hover:border-zinc-600 transition-all cursor-default">
                {skill.name}
              </span>
            ))}
            {['Problem Solving', 'API Integration', 'Schema Design', 'Middleware'].map((tag) => (
              <span key={tag} className="px-5 py-2.5 rounded-2xl bg-zinc-900/20 border border-zinc-900 text-xs font-bold text-zinc-500 uppercase tracking-widest cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
