import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolioData';

function Projects() {
  return (
    <section id="projects" className="section-projects scroll-mt-24 py-16" aria-labelledby="projects-title">
      <SectionHeading title="Projects" subtitle="Selected builds with practical, user-focused outcomes." />
      <h3 id="projects-title" className="sr-only">
        Project list
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent"
          >
            <img
              src={project.image}
              alt={`${project.name} project preview`}
              className="mb-5 h-48 w-full rounded-xl border border-border object-contain bg-highlight"
              loading="lazy"
            />
            <h4 className="font-heading text-xl font-semibold text-text">{project.name}</h4>
            <p className="mt-3 text-sm text-muted sm:text-base text-justify">
              {project.summary}
            </p>

            <p className="mt-4 text-sm text-muted">
              <span className="font-medium text-text">Tech:</span> {project.tech.join(', ')}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text transition hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
