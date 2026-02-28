import SectionHeading from './SectionHeading';

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16" aria-labelledby="about-title">
      <SectionHeading title="About" subtitle="Short background and current focus." />
      <div className="rounded-2xl border border-border bg-highlight p-5 shadow-soft transition-colors sm:p-6">
        <p id="about-title" className="text-base leading-relaxed text-text">
          I’m a 2025 Computer Science graduate specializing in Data Science, with hands-on
          production experience as a Software Developer at Alstonair Technologies.
          I focus on building React-based web applications, integrating REST APIs, and
          developing scalable frontend features for real-world products.
        </p>
        <p className="mt-4 text-base leading-relaxed text-text">
          I’ve worked on large modules for real estate platforms, including dashboards,
          campaign management, and data-driven UI features, while collaborating closely
          with backend teams in agile environments. I’m currently seeking frontend or
          full-stack roles where I can continue building impactful products and grow as
          a software engineer.
        </p>
      </div>
    </section>
  );
}

export default About;
