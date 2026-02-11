
import React from 'react';
import { BLOG_POSTS } from '../constants';

export const Blog: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Writing</h2>
        <p className="text-zinc-400">Sharing insights and development patterns.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {BLOG_POSTS.map(post => (
          <article 
            key={post.id}
            className="group flex flex-col p-8 bg-zinc-900/30 border border-zinc-900 rounded-3xl hover:border-zinc-700 transition-all"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{post.date}</span>
              <span className="text-[10px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-md">{post.readTime}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <div className="mt-auto">
              <a href={post.link} className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-4 transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};