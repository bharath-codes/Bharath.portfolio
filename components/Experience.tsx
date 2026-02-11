
import React from 'react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Freelance Full Stack Developer',
      company: 'Self-Employed',
      period: '2023 - Present',
      description: 'Developed comprehensive digital platforms for small businesses, focusing on creating high-conversion e-commerce and portfolio websites.',
      achievements: [
        'Developed Infinity Customizations, a MERN stack e-commerce platform with a bespoke admin dashboard.',
        'Successfully delivered 15+ full-scale projects, consistently meeting tight deadlines for diverse clients.',
        'Integrated automated payment processing and inventory tracking systems reducing manual overhead for clients.',
        'Optimized core web vitals for small business sites, resulting in 25% faster average page load times.'
      ]
    },
    {
      role: 'Web Development Practitioner',
      company: 'Small Business Solutions',
      period: '2022 - 2023',
      description: 'Started professional freelance journey by delivering modern UI/UX and lightweight backend solutions for local brands.',
      achievements: [
        'Mastered the React.js ecosystem through the delivery of interactive user interfaces.',
        'Architected structured MongoDB schemas to handle dynamic product data efficiently.',
        'Used Postman for rigorous API testing to ensure 99.9% uptime for client systems.',
        'Bridged the gap between design and functionality using Tailwind CSS and modern JavaScript.'
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">Professional Experience</h2>
        <p className="text-zinc-400">Two years of delivering high-impact development solutions.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Elegant side border for active item look */}
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600/0 via-blue-600 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="p-10 bg-zinc-900/30 border border-zinc-900 rounded-[2rem] hover:border-zinc-800 transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                  <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-950 px-4 py-1.5 rounded-full border border-zinc-800">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-zinc-400 text-base mb-8 leading-relaxed max-w-2xl">{exp.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-950/50 border border-zinc-900/50">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    <span className="text-sm text-zinc-400 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};