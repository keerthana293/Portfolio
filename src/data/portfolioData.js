import nalPreview from '../assets/Project Images/image.png';
import taskManagerPreview from '../assets/Project Images/task.png';
import fuStepsPreview from '../assets/Project Images/fu.png';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export const skills = [
  { title: 'Programming Languages', icon: 'frontend', items: ['Python', 'JavaScript'] },
  { title: 'Backend Technologies', icon: 'backend', items: ['Django', 'FastAPI'] },
  { title: 'Frontend Technologies', icon: 'frontend', items: ['React.js', 'HTML', 'CSS', 'Bootstrap'] },
  { title: 'Databases', icon: 'database', items: ['Oracle SQL', 'PostgreSQL'] },
  { title: 'Tools & Libraries', icon: 'tools', items: ['AWS', 'Git', 'GitHub', 'NumPy'] },
];

export const projects = [
  {
    name: 'NAL (New Age Land) - Real Estate Web Application',
    summary: 'NAL is a real estate web application where I developed backend APIs and integrated frontend features for user authentication, property listings, and dashboards. The project focuses on building scalable, user-friendly solutions for managing real estate operations.',
    image: nalPreview,
    tech: ['FastAPI', 'React.js', 'PostgreSQL', 'REST APIs'],
    links: [],
  },
  {
    name: 'Task Manager Web Application',
    summary: 'A full-stack Task Manager web application with user authentication and secure session management. Features RESTful APIs, a responsive React interface, and efficient CRUD operations for managing tasks. Designed for smooth performance with optimized database interactions and a user-friendly experience.',
    image: taskManagerPreview,
    tech: ['Django', 'React', 'PostgreSQL'],
    links: [],
  },
  {
    name: 'FuSteps - Education Related Platform',
    summary: 'FuSteps is a career-focused platform that connects students, mentors, alumni, and recruiters in one place. It enables job discovery, mentorship booking, and community engagement through structured features like search, filters, and communication tools.',
    image: fuStepsPreview,
    tech: ['React.js', 'MySQL', 'Django'],
    links: [],
  },
];

export const certifications = [
  {
    name: 'Python Programming',
    issuer: 'HackerRank',
    logo: new URL('../assets/Certifications/Logos/hacker.png', import.meta.url).href,
    pdf: new URL('../assets/Certifications/Certificates/python_basic certificate.pdf', import.meta.url).href,
    description: 'Solved coding challenges applying fundamental Python concepts and logic-building skills.',
  },
  {
    name: 'Web Development Training',
    issuer: 'Internshala Trainings',
    logo: new URL('../assets/Certifications/Logos/internshala.png', import.meta.url).href,
    pdf: new URL('../assets/Certifications/Certificates/Web Development Training - Certificate of Completion.pdf', import.meta.url).href,
    description: 'Front-end web development covering HTML, CSS, JavaScript, responsive interfaces, and interactive components.',
  },
];
