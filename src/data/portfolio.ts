export const personal = {
  name: 'Umang Kumar',
  title: 'Full Stack Developer',
  location: 'Greater Noida, India',
  email: 'umangkumarravi123@gmail.com',
  phone: '+91 9258405605',
  linkedin: 'https://www.linkedin.com/in/umang-kumar-kataria-193ab2279/',
  github: 'https://github.com/umangkumar612',
  headline: 'Building digital experiences that feel alive.',
  subheadline:
    'Full Stack Developer focused on scalable applications, modern interfaces, SSR, APIs and clean architecture.',
  about:
    'Full Stack Developer with hands-on experience building scalable web applications using Node.js, Vue.js, React.js, MySQL, JavaScript, and REST APIs. Experienced in developing SSR-based news platforms, video streaming applications, and permission-based enterprise systems with a focus on performance, scalability, and clean architecture.',
};

export const metrics = [
  { value: '80+', label: 'Backend Modules' },
  { value: '100+', label: 'Components' },
  { value: '20+', label: 'REST APIs' },
];

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Site Guru Private Limited',
    period: 'June 2026 – Present',
    highlights: [
      'Developed scalable full-stack web applications using Vue2.js, React.js, Node.js, MySQL, HTML, CSS and Server-Side Rendering.',
      'Contributed to 80+ backend modules.',
      'Built 100+ reusable frontend components.',
      'Implemented role-based authentication and authorization.',
      'Worked with user-type management and protected routes.',
      'Integrated 20+ RESTful APIs.',
      'Built CRUD and content/media management features.',
      'Worked with chunk-based large file uploads.',
      'Worked with CDN integration.',
      'Optimized SQL queries and backend workflows.',
      'Implemented dynamic routing.',
      'Worked on SEO-friendly metadata.',
      'Developed SSR-powered pages.',
    ],
  },
];

export const skills = {
  languages: ['Java', 'JavaScript', 'SQL'],
  frontend: ['React.js', 'Vue2.js', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
  backend: ['Node.js', 'REST APIs'],
  database: ['MySQL', 'MongoDB'],
  tools: ['Git', 'GitHub', 'Netlify', 'Render', 'Railway', 'Vercel'],
  highlights: [
    'Server-Side Rendering',
    'Authentication & Authorization',
    'REST APIs',
    'Permission-based architecture',
    'CRUD',
    'Large file uploads',
    'CDN integration',
  ],
};

export const orbitSkills = [
  'React.js',
  'Vue2.js',
  'JavaScript',
  'Node.js',
  'MySQL',
  'MongoDB',
  'Java',
  'SQL',
  'HTML5',
  'CSS3',
  'REST APIs',
  'SSR',
  'Git',
  'GitHub',
];

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  live: string;
  github?: string;
  featured: boolean;
  metrics: string[];
  tech: string[];
  highlights?: string[];
};

export const projects: Project[] = [
  {
    id: 'hdtv-bharat',
    number: '01',
    title: 'HDTV Bharat',
    category: 'OTT / Video Streaming Platform',
    description:
      'A scalable video streaming platform built on the Site Guru platform with category-based navigation, homepage rendering, user authentication, profile management, video playback and content management.',
    live: 'https://1000875.site.guru/?mode=dev',
    featured: true,
    metrics: [
      '40+ backend modules',
      '50+ frontend components',
      '15+ REST APIs',
    ],
    tech: ['Vue2.js', 'Node.js', 'MySQL', 'REST APIs', 'SSR'],
    highlights: [
      'Video content management',
      'Category-based navigation',
      'Authentication',
      'Profile management',
      'Video playback',
      'State management',
      'Performance optimization',
    ],
  },
  {
    id: 'newsorbit',
    number: '02',
    title: 'NewsOrbit',
    category: 'Full Stack News Platform',
    description:
      'A scalable full-stack news platform using Vue.js, Node.js, MySQL and Server-Side Rendering with a centralized permission-based architecture.',
    live: 'https://1000765.site.guru/?mode=dev',
    featured: true,
    metrics: [
      '80+ backend modules',
      '100+ frontend components',
      '5 user roles',
    ],
    tech: ['Vue.js', 'Node.js', 'MySQL', 'SSR', 'REST APIs'],
    highlights: [
      'Permission-based architecture',
      'Authentication and authorization',
      '20+ REST APIs',
      'CRUD operations',
      'Organization management',
      'Employee management',
      'Dashboard analytics',
      'Optimized SQL queries',
      'SSR rendering',
    ],
  },
  {
    id: 'blogify',
    number: '03',
    title: 'Blogify',
    category: 'Modern Content / Blog',
    description:
      'A modern content and blog project with a clean reading experience and thoughtful content management.',
    live: 'https://peaceful-daifuku-9166fa.netlify.app/',
    featured: false,
    metrics: [],
    tech: ['React', 'JavaScript'],
  },
  {
    id: 'image-compressor',
    number: '04',
    title: 'Image Compressor',
    category: 'Browser Utility',
    description:
      'A lightweight, browser-based utility for compressing images quickly without leaving the browser.',
    live: 'https://stellular-khapse-a58988.netlify.app/',
    featured: false,
    metrics: [],
    tech: ['JavaScript', 'Browser APIs'],
  },
];

export const education = [
  {
    institution: 'Galgotias University',
    degree: 'B.Tech in Computer Science and Engineering',
    period: 'August 2022 – May 2026',
    detail: 'CGPA: 8.0/10',
    coursework: [
      'Data Structures and Algorithms',
      'Database Management System',
      'Object-Oriented Programming',
    ],
  },
  {
    institution: 'MDS Inter College',
    degree: 'XIIth',
    period: '2021–2022',
    detail: '75%',
    coursework: [],
  },
  {
    institution: 'ARN Kela Inter College',
    degree: 'Xth',
    period: '2019–2020',
    detail: '81%',
    coursework: [],
  },
];

export const certification = {
  title: 'Java Full Stack',
  issuer: 'TalentNext / Wipro',
  period: 'July – October 2025',
  program: 'Digital Skills Readiness Program',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
