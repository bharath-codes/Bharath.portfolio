
import { Project, Skill, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'infinity-customizations',
    title: 'Infinity Customizations',
    description: 'A premium full stack e-commerce platform for bespoke products. Features a high-performance React frontend and a secure Node/Express/MongoDB backend with a specialized admin suite.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Mongoose', 'Axios'],
    features: [
      'Advanced Category & Subcategory Filtering',
      'Dynamic Admin Dashboard with Full CRUD',
      'Secure Authentication & Role-Based Access',
      'Real-time Inventory & Cloud Image Management',
      'RESTful API Integration & Performance Optimization'
    ],
    liveLink: 'https://www.infinitycustomizations.com',
    githubLink: '#',
    imageUrl: '/images/Infinity.png',
    category: 'Full Stack'
  },
  {
    id: 'mmda-nu',
    title: 'MMDA NU – Dance Academy',
    description: 'A modern, responsive platform for a professional dance academy to showcase classes, programs, and instructors with a focus on high-conversion UI/UX.',
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vercel'],
    features: [
      'Modern UI/UX with Professional Aesthetic',
      'Interactive Dance Program Catalog',
      'Fully Responsive Cross-Device Design',
      'SEO-Optimized Structure',
      'Fast-loading Component Architecture'
    ],
    liveLink: 'https://mmda-nu.vercel.app/',
    githubLink: '#',
    imageUrl: '/images/mmda.png',
    category: 'Frontend'
  }
];

export const SKILLS: Skill[] = [
  // MODERN FRONTEND (Requested list)
  { name: 'HTML5', category: 'Frontend', level: 98 },
  { name: 'CSS3', category: 'Frontend', level: 96 },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 95 },
  { name: 'React.js', category: 'Frontend', level: 96 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 98 },
  { name: 'Responsive Web Design', category: 'Frontend', level: 97 },
  { name: 'REST API Integration', category: 'Frontend', level: 94 },
  { name: 'React Hooks', category: 'Frontend', level: 95 },
  { name: 'React Router', category: 'Frontend', level: 92 },
  { name: 'Context API', category: 'Frontend', level: 90 },
  { name: 'State Management', category: 'Frontend', level: 92 },
  { name: 'Form Handling', category: 'Frontend', level: 94 },
  { name: 'Axios / Fetch', category: 'Frontend', level: 95 },
  { name: 'UI Performance Optimization', category: 'Frontend', level: 89 },
  { name: 'Git & GitHub', category: 'DevOps & Tools', level: 94 },
  { name: 'Debugging & DevTools', category: 'DevOps & Tools', level: 92 },

  // BACKEND & DATABASE (Preserving user expertise)
  { name: 'Node.js', category: 'Backend', level: 92 },
  { name: 'Express.js', category: 'Backend', level: 94 },
  { name: 'MongoDB', category: 'Database', level: 90 },
  { name: 'Mongoose', category: 'Database', level: 92 },
  { name: 'CRUD Operations', category: 'Backend', level: 96 },
  { name: 'Auth & Middleware', category: 'Backend', level: 88 },
  
  // FOUNDATIONS
  { name: 'DSA', category: 'Backend', level: 82 },
  { name: 'Java', category: 'Backend', level: 75 },
  { name: 'Python', category: 'Backend', level: 70 },
  { name: 'C Programming', category: 'Backend', level: 80 },
];

// Added BLOG_POSTS constant to resolve import error in components/Blog.tsx
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable MERN Stack Applications',
    excerpt: 'Deep dive into architecture patterns for enterprise-grade React and Node.js systems.',
    date: 'March 15, 2024',
    readTime: '8 min read',
    link: '#'
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS for High-End UI',
    excerpt: 'Advanced techniques for creating luxury digital experiences with utility-first CSS.',
    date: 'February 28, 2024',
    readTime: '6 min read',
    link: '#'
  },
  {
    id: '3',
    title: 'The Future of Full Stack Development',
    excerpt: 'Exploring the intersection of AI-assisted coding and modern web frameworks.',
    date: 'January 12, 2024',
    readTime: '5 min read',
    link: '#'
  }
];
