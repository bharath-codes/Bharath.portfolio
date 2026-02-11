
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  liveLink: string;
  githubLink: string;
  imageUrl: string;
  category: 'Full Stack' | 'Frontend' | 'Backend';
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps & Tools';
  level: number;
}

// Added GithubRepo interface to fix import error in components/GithubActivity.tsx
export interface GithubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

// Added BlogPost interface to support BLOG_POSTS constant
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
}
