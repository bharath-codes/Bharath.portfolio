
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">Featured Work</h2>
          <p className="text-zinc-500 max-w-lg font-medium">Highlighting flagship builds like Infinity Customizations and small business digital transformations.</p>
        </div>
        
        <div className="flex bg-zinc-900/50 p-1.5 rounded-2xl border border-zinc-900">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-xl transition-all ${
                filter === cat ? 'bg-zinc-800 text-white shadow-xl' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="group relative bg-zinc-900/10 border border-zinc-900 rounded-[3rem] overflow-hidden hover:border-zinc-800 transition-all flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 bg-blue-600/10 backdrop-blur-md border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase rounded-full tracking-widest">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-10 flex-1 flex flex-col">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-[10px] font-bold px-3 py-1 bg-zinc-900/50 text-zinc-500 rounded-lg border border-zinc-800 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 flex-1 mb-10">
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Key Capabilities</p>
                <div className="grid grid-cols-1 gap-3">
                  {project.features.map(feature => (
                    <div key={feature} className="text-xs text-zinc-400 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600/50 shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-8 border-t border-zinc-900/50">
                <a href={project.liveLink} target="_blank" rel="noopener" className="flex-1 text-center py-4 text-xs bg-white text-zinc-950 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all transform active:scale-95 shadow-lg shadow-white/5">
                  Launch Site
                </a>
                <a href={project.githubLink} className="flex-1 text-center py-4 text-xs bg-zinc-900 text-zinc-400 rounded-2xl font-black uppercase tracking-widest border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all transform active:scale-95">
                  Case Study
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
