import SectionHeading from './SectionHeading';
import klUniversityLogo from '../assets/University Logo/LOGO_GRNC7Yq-a.webp';

function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16" aria-labelledby="education-title">
      <SectionHeading title="Education" subtitle="Academic foundation relevant to software engineering roles." />
      <article className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
        <img
          src={klUniversityLogo}
          alt="KL University logo"
          className="mb-4 h-12 w-12 rounded-md border border-border bg-bg object-contain p-1"
          loading="lazy"
        />
        <h3 id="education-title" className="font-heading text-xl font-semibold text-text">
          B.Tech in Computer Science (Data Science)
        </h3>
        <p className="mt-2 text-sm text-muted sm:text-base">
          <a
            href="https://www.kluniversity.in"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            KL University ↗
          </a>{' '}
          | 2021 - 2025
        </p>
        <p className="mt-1 text-sm text-muted sm:text-base">CGPA: 8.14 / 10</p>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Relevant coursework: Data Structures, Databases, Software Engineering
        </p>
      </article>
    </section>
  );
}

export default Education;
