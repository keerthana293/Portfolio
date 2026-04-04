import SectionHeading from './SectionHeading';
import { skills } from '../data/portfolioData';

function SkillIcon({ type }) {
  const icons = {
    frontend: 'M3 5h18v3H3V5Zm0 5h10v3H3v-3Zm0 5h18v3H3v-3Z',
    backend: 'M4 4h16v5H4V4Zm0 7h16v9H4v-9Zm3 2v2h3v-2H7Zm0 3v2h3v-2H7Z',
    database: 'M12 3c-4.4 0-8 1.6-8 3.5S7.6 10 12 10s8-1.6 8-3.5S16.4 3 12 3Zm-8 6v4.5C4 15.4 7.6 17 12 17s8-1.6 8-3.5V9c-1.7 1.5-4.8 2.5-8 2.5S5.7 10.5 4 9Zm0 6v2.5C4 19.4 7.6 21 12 21s8-1.6 8-3.5V15c-1.7 1.5-4.8 2.5-8 2.5S5.7 16.5 4 15Z',
    state: 'M12 4a8 8 0 1 0 8 8h-3l4 4 4-4h-3a10 10 0 1 1-3-7.1l-1.4 1.4A8 8 0 0 0 12 4Z',
    testing: 'M5 3h14v2h-1v5.3l2.7 5.4A3 3 0 0 1 18 20H6a3 3 0 0 1-2.7-4.3L6 10.3V5H5V3Zm4.2 8-2.7 5.4a1 1 0 0 0 .9 1.6h9.2a1 1 0 0 0 .9-1.6L14.8 11H9.2Z',
    tools: 'M21.7 7.3 16.5 12.5l-5-5L16.7 2.3a4 4 0 0 1 5 5Zm-7 7 5.5 5.5a1 1 0 0 1-1.4 1.4l-5.5-5.5L4.8 22H2v-2.8l6.2-8.5 6.5 6.5Z',
    cloud: 'M17.5 10a4.5 4.5 0 0 0-8.7-1.7A4 4 0 0 0 9 16h8.5a3 3 0 0 0 0-6Z',
  };

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-muted" aria-hidden="true">
      <path d={icons[type] || icons.tools} />
    </svg>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-skills scroll-mt-24 py-8" aria-labelledby="skills-title">
      <SectionHeading title="Skills" subtitle="" />
      <h3 id="skills-title" className="sr-only">
        Skills list
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <article
            key={group.title}
            className="rounded-xl border border-border bg-card p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent"
          >
            <h4 className="flex items-center gap-2 font-heading text-lg font-semibold text-text">
              <SkillIcon type={group.icon} />
              <span>{group.title}</span>
            </h4>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
