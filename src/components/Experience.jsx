import SectionHeading from './SectionHeading';

const alstonairProjects = [
  {
    name: 'NAL - Real Estate Platform',
    tech: ['React', 'JavaScript', 'REST APIs', 'Context API'],
    points: [
      'Built locality intelligence features for property discovery, improving relevance and clarity during location-based property research.',
      'Implemented Title Search & Property History modules for ownership transparency, enabling faster trust checks before inquiry and shortlist decisions.',
      'Developed frontend pages for Digital Marketing, Property Management, and Marketing Services',
      'Built Campaign Management functionality with role-based access control',
      'Redesigned Seller Dashboard to improve usability and navigation, reducing friction in campaign setup and improving task discoverability for sellers.',
      'Integrated REST APIs and managed frontend state',
      'Participated in Agile ceremonies and code reviews',
    ],
  },
  {
    name: 'OneClick - Product Marketing Platform',
    tech: ['React', 'Tailwind CSS', 'UI Architecture'],
    points: [
      'Developed landing pages and dashboard UI aligned with updated business requirements',
      'Created complete project and design documentation including workflows and architecture, improving implementation clarity across contributors.',
      'Collaborated with senior engineers to refine information architecture and validate features, helping streamline navigation and feature discoverability.',
    ],
  },
  {
    name: 'NGO - Internal Management System',
    tech: ['React', 'Role-based UI', 'Responsive Design'],
    points: [
      'Built responsive UI components for dashboards, donation flows, staff login, and admin modules, improving cross-device usability for internal teams.',
      'Redesigned key screens to fix UI/UX issues and improve readability, reducing ambiguity in high-frequency operational screens.',
      'Implemented role-based views, HR management, MOU integration, and donor management, enabling clearer access boundaries and workflow continuity.',
      'Collaborated with senior developers through stand-ups and review sessions',
    ],
  },
];

const dataFoundryPoints = [
  'Built Python-based automation scripts strengthening core programming fundamentals and improving repeatability of regression checks.',
  'Developed Selenium scripts for functional testing and automation, reducing manual verification effort for recurring workflows.',
  'Assisted in test case creation and execution for application workflows',
  'Performed API testing and data validation',
  'Worked with structured datasets for testing and verification',
  'Contributed to document classification and automation tasks',
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

function ProjectSection({ name, tech, points }) {
  return (
    <section className="rounded-xl border border-border bg-highlight p-4 sm:p-5" aria-label={name}>
      <h4 className="font-heading text-base font-semibold text-text sm:text-lg">{name}</h4>
      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted">
        Tech: {tech.join(', ')}
      </p>
      <div className="mt-3">
        <BulletList points={points} />
      </div>
    </section>
  );
}

function CompanyCard({ company, role, duration, children }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-soft transition duration-300 hover:border-accent sm:p-8">
      <header className="border-b border-border pb-4">
        <h3 className="font-heading text-xl font-semibold text-text">{company}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{role}</p>
        <p className="mt-1 text-sm text-muted">{duration}</p>
      </header>
      <div className="mt-5">{children}</div>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16" aria-labelledby="experience-title">
      <SectionHeading title="Experience" subtitle="Professional contribution and real-world impact." />

      <div className="space-y-6">
        <CompanyCard
          company="Alstonair Technologies"
          role="Software Developer"
          duration="Sep 2025 - Present"
        >
          <div className="space-y-4">
            {alstonairProjects.map((project) => (
              <ProjectSection
                key={project.name}
                name={project.name}
                tech={project.tech}
                points={project.points}
              />
            ))}
          </div>
        </CompanyCard>

        <CompanyCard
          company="Data Foundry"
          role="Software Test Automation Intern"
          duration="Jan 2025 - Aug 2025"
        >
          <BulletList points={dataFoundryPoints} />
        </CompanyCard>
      </div>
    </section>
  );
}

export default Experience;
