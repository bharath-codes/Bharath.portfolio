
import React, { useEffect, useState } from 'react';
import { GithubRepo } from '../types';

export const GithubActivity: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  // Note: For actual use, replace 'octocat' with real username
  const username = 'microsoft'; 

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`);
        const data = await response.json();
        
        if (Array.isArray(data)) {
          const formatted = data.map((r: any) => ({
            name: r.name,
            description: r.description || 'No description provided.',
            stars: r.stargazers_count,
            forks: r.forks_count,
            language: r.language || 'Plain Text',
            url: r.html_url
          }));
          setRepos(formatted);
        }
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Open Source Activity</h2>
        <p className="text-zinc-400">Monitoring real-time contributions and repository health.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {loading ? (
          [1,2,3,4].map(i => (
            <div key={i} className="h-40 bg-zinc-900 animate-pulse rounded-2xl border border-zinc-800" />
          ))
        ) : (
          repos.map(repo => (
            <a 
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-zinc-900/40 border border-zinc-900 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900 transition-all group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors truncate pr-4">
                  {repo.name}
                </h3>
                <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm text-zinc-500 line-clamp-2 mb-6">{repo.description}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  {repo.language}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <svg className="w-4 h-4 text-yellow-500/50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {repo.stars}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <svg className="w-4 h-4 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15,14L19,10L15,6M9,10L5,14L9,18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {repo.forks}
                </div>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};
