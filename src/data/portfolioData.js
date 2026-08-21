export const profile = {
  name: 'Umang Kumar',
  role: 'Full Stack Developer',
  educationStatus: 'B.Tech Computer Science Engineering student',
  email: 'umangkumarravi123@gmail.com',
  phone: '+91 9258405605',
  linkedin: 'https://www.linkedin.com/in/umang-kumar-kataria-193ab2279/',
  github: 'https://github.com/umangkumar612',
  instagram: 'https://www.instagram.com/umang___kataria_/?hl=en',
  resumeUrl: 'https://drive.google.com/file/d/1AOkE-N1ltM3VDSTKjoOBSIAUngi3f946/view?usp=sharing',
  summary:
    'Full Stack Developer with hands-on experience building scalable web applications using Node.js, Vue.js, React.js, MySQL, JavaScript, and REST APIs. Experienced in SSR-based news platforms, video streaming applications, and permission-based enterprise systems with a focus on performance, scalability, and clean architecture.',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend Technologies & Frameworks',
    skills: ['Vue2.js', 'React.js', 'JavaScript', 'CSS3', 'Bootstrap', 'HTML5'],
  },
  {
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Netlify', 'Render', 'Railway', 'Vercel'],
  },
  {
    title: 'Development Concepts',
    skills: [
      'REST APIs',
      'Server-Side Rendering (SSR)',
      'Project Architecture',
      'Database/Table Design',
      'Role-Based Access Control',
      'Permission-Based Systems',
      'Responsive Web Design',
    ],
  },
];

export const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Site Guru Private Limited',
    period: 'June 2026 - Present',
    points: [
      'Developed scalable full-stack web applications on the Site Guru platform using Vue2.js, React.js, Node.js, MySQL, HTML, CSS, and Server-Side Rendering (SSR), contributing to 80+ backend modules and 100+ reusable frontend components.',
      'Designed and implemented secure role-based authentication and authorization, user-type management, protected routes, and integrated 20+ RESTful APIs for enterprise-scale web applications.',
      'Built content and media management features including CRUD operations, chunk-based large file uploads, CDN integration, optimized SQL queries, and efficient backend workflows.',
      'Developed reusable frontend components, dynamic routing, SEO-friendly metadata, category-based content rendering, and SSR-powered pages to improve performance, maintainability, and user experience.',
      'Analyzed projects including BizHub, Best Prep, InteriorPro, CateringOS, Staxion, and Haldiram to understand project architecture, modules, permissions, access levels, and implementation structure.',
    ],
  },
];
export const projects = [
  {
    name: 'NewsOrbit',
    type: 'Digital News Platform',
    description:
        'A scalable SSR-based news platform built with Vue.js, Node.js, and MySQL. It features 5 user types, a centralized permission-based architecture, admin modules, organization and employee management, dynamic news content, reusable components, REST API integration, and global state management.',
    technologies: [
      'HTML',
      'CSS',
      'Vue.js',
      'Node.js',
      'MySQL',
      'REST APIs',
      'SSR',
      'Role-Based Access',
    ],
    highlights: [
      '5 different user types',
      'Centralized permission-based system',
      'Parent and child organization structure',
      'Admin modules and employee management',
      'Dynamic news content management',
      'SSR and reusable frontend architecture',
      'REST API and global state integration',
      '80+ backend modules and 100+ reusable frontend components',
    ],
    visual: 'news',
    liveUrl: 'https://1000765.site.guru/?mode=dev',
  },
  {
    name: 'HDTV Bharat',
    type: 'Video Platform',
    description:
        'A scalable video streaming platform on the Site Guru platform with category-based navigation, homepage rendering, user authentication, profile management, video playback, and content management.',
    technologies: ['Node.js', 'MySQL', 'REST APIs', 'Video Uploads', 'Frontend Integration'],
    highlights: [
      'Video management',
      '40+ backend modules and 50+ reusable frontend components',
      'Large video upload architecture',
      'Chunked/resumable upload approach',
      'Upload progress and retry handling',
      '15+ REST API integrations',
      'Video metadata management',
    ],
    visual: 'video',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Blogify',
    type: 'MERN Threaded Discussion Forum',
    description:
        'A full-stack MERN discussion platform where users can create threads, post deeply nested replies, and earn dynamic credits based on discussion depth.',
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Mongoose',
      'JWT',
      'REST APIs',
      'Tailwind CSS',
    ],
    highlights: [
      'User signup and login authentication',
      'JWT-based authentication and protected routes',
      'Create and manage discussion threads',
      'Deeply nested comment and reply system',
      'Recursive comment handling',
      'Dynamic credit calculation based on reply depth',
      'MongoDB Atlas database integration',
      'RESTful API architecture',
      'Dark and light theme support',
      'Deployed frontend on Netlify and backend on Railway',
    ],
    visual: 'blog',
    liveUrl: 'https://peaceful-daifuku-9166fa.netlify.app',
    githubUrl: 'https://github.com/umangkumar612/anchors-project',
  },
];

export const approachSteps = [
  'Understand Requirements',
  'Identify User Types',
  'Plan Modules and Access',
  'Design Project Architecture',
  'Plan Frontend Structure',
  'Design Database/Table Structure',
  'Implement Features',
  'Test and Improve',
];

export const education = {
  degree: 'B.Tech in Computer Science and Engineering',
  university: 'Galgotias University',
  period: '2022 - 2026',
  cgpa: '8/10',
  relevantAreas: [
    'Data Structures and Algorithms',
    'Database Management Systems',
    'Object-Oriented Programming',
  ],
};
