
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white tracking-tight">Let's build something <span className="text-blue-500">extraordinary</span>.</h2>
          <p className="text-zinc-400 max-w-md leading-relaxed">
            I'm currently available for freelance opportunities or full-time roles. If you have a project 
            in mind or just want to chat, feel free to reach out.
          </p>
        </div>

        <div className="space-y-6">
          {[
            { label: 'Email', value: 'bharathgopavaram2005@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            { label: 'Phone', value: '7995732336', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
            { label: 'Instagram', value: '@bhaxathh', icon: 'M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM17.5 6.5C17.5 5.94772 17.0523 5.5 16.5 5.5C15.9477 5.5 15.5 5.94772 15.5 6.5C15.5 7.05228 15.9477 7.5 16.5 7.5C17.0523 7.5 17.5 7.05228 17.5 6.5ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9Z' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                <svg className="w-5 h-5 text-zinc-500 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">{item.label}</p>
                <p className="text-zinc-300 font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-10 bg-zinc-900/30 border border-zinc-900 rounded-[2.5rem] relative overflow-hidden">
        {/* Abstract shape */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full" />
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-500 uppercase">Full Name</label>
            <input 
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-500 uppercase">Email Address</label>
            <input 
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-500 uppercase">Message</label>
            <textarea 
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="How can I help you?"
            />
          </div>
          
          <button 
            type="submit"
            disabled={status !== 'idle'}
            className={`w-full py-4 rounded-xl font-bold transition-all transform flex items-center justify-center gap-2 ${
              status === 'success' 
              ? 'bg-green-600 text-white' 
              : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
            }`}
          >
            {status === 'sending' ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : status === 'success' ? (
              'Message Sent Successfully'
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
