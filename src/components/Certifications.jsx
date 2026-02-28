import SectionHeading from './SectionHeading';
import { certifications } from '../data/portfolioData';

function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-16" aria-labelledby="certifications-title">
      <SectionHeading title="Certifications" subtitle="Verified credentials and learning milestones." />
      <h3 id="certifications-title" className="sr-only">
        Certification list
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item) => (
          <article
            key={item.name}
            className="rounded-xl border border-border bg-card p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent"
          >
            <div className="flex items-start gap-3">
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="h-12 w-12 rounded-md border border-border bg-bg object-contain p-1"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="text-sm font-medium text-text">{item.name}</p>
                <p className="mt-1 text-xs text-muted">{item.year}</p>
              </div>
            </div>
            <a
              href={item.certificateFile}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-md border border-border px-3 py-2 text-xs font-medium text-text transition hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              View Certificate
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
