import SectionHeading from './SectionHeading';
import { certifications } from '../data/portfolioData';

function Certifications() {
  return (
    <section id="certifications" className="section-certifications scroll-mt-24 py-8" aria-labelledby="certifications-title">
      <SectionHeading title="Certifications" subtitle="Verified credentials and learning milestones." />
      <h3 id="certifications-title" className="sr-only">Certification list</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((item) => (
          <a
            key={item.name}
            href={item.pdf}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-border bg-card p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent block"
          >
            <img src={item.logo} alt={`${item.issuer} logo`} className="h-10 w-auto object-contain mb-3" />
            <p className="text-sm font-medium text-accent uppercase tracking-wide">{item.issuer}</p>
            <p className="mt-1 text-base font-semibold text-text">{item.name}</p>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
