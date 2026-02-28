import reactMoviesPreview from '../assets/Project Images/react-movies-preview.png';
import grievanceSystemPreview from '../assets/Project Images/grievance-system-preview.svg';
import microsoftCertFile from '../assets/Certifications/Certificates/1)Microsoft AZ 900.pdf';
import oracleCertFile from '../assets/Certifications/Certificates/2)Oracle Certificate.pdf';
import rpaCertFile from '../assets/Certifications/Certificates/3)RPA Certificate.pdf';
import tensorflowCertFile from '../assets/Certifications/Certificates/4)Tensor Flow Certificate.pdf';
import salesforceCertFile from '../assets/Certifications/Certificates/5)Cert5113961 Salesforce AI Associate 20241023.pdf';
import microsoftLogo from '../assets/Certifications/Logos/1)Microsoft-certified-fundamentals-badge.svg-and-3-more-pages-Personal-Microso-1.webp';
import oracleLogo from '../assets/Certifications/Logos/2)Oracle Badge.jpeg';
import rpaLogo from '../assets/Certifications/Logos/3)Bot Aspirant Automation 360.jpeg';
import tensorflowLogo from '../assets/Certifications/Logos/4)Tensorflow-developer-certificate-exam-v0-7z8toestgf071.webp';
import salesforceLogo from '../assets/Certifications/Logos/5)Salesforce.jpeg';

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
  { title: 'Frontend', icon: 'frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', icon: 'backend', items: ['Python', 'FastAPI', 'REST APIs'] },
  { title: 'Databases', icon: 'database', items: ['PostgreSQL', 'MySQL'] },
  { title: 'State Management', icon: 'state', items: ['React Hooks', 'Context API'] },
  { title: 'Testing', icon: 'testing', items: ['Selenium', 'PyTest'] },
  { title: 'Tools & Platforms', icon: 'tools', items: ['Git', 'Docker', 'Postman', 'VS Code', 'Netlify'] },
  { title: 'Cloud', icon: 'cloud', items: ['Microsoft Azure (AZ-900)'] },
];

export const projects = [
  {
    name: 'React Movies App',
    summary: 'Built a movie discovery application using OMDb API.',
    image: reactMoviesPreview,
    features: ['Real-time search', 'Detail pages', 'Responsive UI'],
    tech: ['React', 'JavaScript', 'API', 'CSS'],
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'Live Demo', href: 'https://reactmovieapp223.netlify.app/' },
    ],
  },
  {
    name: 'Online Grievance Management System',
    summary: 'Built a grievance submission and tracking frontend.',
    image: grievanceSystemPreview,
    features: ['Structured UI', 'Priority visualization', 'Responsive layout'],
    tech: ['HTML', 'CSS'],
    links: [{ label: 'GitHub', href: 'https://github.com/' }],
  },
];

export const certifications = [
  {
    name: 'Salesforce Certified AI Associate',
    year: '2024',
    logo: salesforceLogo,
    certificateFile: salesforceCertFile,
  },
  {
    name: 'Google TensorFlow',
    year: '2024',
    logo: tensorflowLogo,
    certificateFile: tensorflowCertFile,
  },
  {
    name: 'Automation Anywhere RPA Professional',
    year: '2024',
    logo: rpaLogo,
    certificateFile: rpaCertFile,
  },
  {
    name: 'Oracle Cloud Infrastructure',
    year: '2023',
    logo: oracleLogo,
    certificateFile: oracleCertFile,
  },
  {
    name: 'Microsoft Azure AZ-900',
    year: '2023',
    logo: microsoftLogo,
    certificateFile: microsoftCertFile,
  },
];
