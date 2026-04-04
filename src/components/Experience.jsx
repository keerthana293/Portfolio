import SectionHeading from './SectionHeading';
import alstonairLogo from '../assets/University Logo/alsto.jpg';
import pyspidersLogo from '../assets/University Logo/py.jpg';

const alstonairPoints = [
  'Contributing to the design and development of NAL (New Age Land), a real estate web application.',
  'Developing and maintaining backend APIs using FastAPI.',
  'Building responsive frontend components using React.js.',
  'Collaborated with team members and followed Git-based version control for feature development.',
];

const pyspidersPoints = [
  'Completed Python Full-Stack Development training with hands-on experience in backend and frontend development.',
  'Built full-stack web applications using React.js and FastAPI.',
  'Application deployment and version control using Git and GitHub.',
];

function BulletList({ points }) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-muted sm:text-base">
      {points.map((point) => (
        <li key={point} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

function CompanyCard({ company, role, duration, logo, link, children }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-soft transition duration-300 hover:border-accent sm:p-8">
      <header className="border-b border-border pb-4 flex items-center gap-4">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={logo} alt={`${company} logo`} className="h-14 w-14 rounded-full object-cover border border-border" />
        </a>
        <div>
          <a href={link} target="_blank" rel="noreferrer" className="font-heading text-xl font-semibold text-text hover:text-accent">{company}</a>
          <p className="mt-1 text-sm font-medium text-accent">{role}</p>
          <p className="mt-1 text-sm text-muted">{duration}</p>
        </div>
      </header>
      <div className="mt-5">{children}</div>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-experience scroll-mt-24 py-8" aria-labelledby="experience-title">
      <SectionHeading title="Experience" subtitle="Professional contribution and real-world impact." />
      <div className="space-y-6">
        <CompanyCard
          company="Alstonair Technologies Pvt Ltd, Bengaluru"
          role="Software Engineer Trainee"
          duration="Aug 2025 - Present"
          logo={alstonairLogo}
          link="https://alstonair.com/"
        >
          <BulletList points={alstonairPoints} />
        </CompanyCard>

        <CompanyCard
          company="PySpiders, Bengaluru"
          role="Python Full Stack Development"
          duration="Mar 2025 - Jul 2025"
          logo={pyspidersLogo}
          link="https://pyspiders.com/"
        >
          <BulletList points={pyspidersPoints} />
        </CompanyCard>
      </div>
    </section>
  );
}

export default Experience;
