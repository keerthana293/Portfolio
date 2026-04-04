import SectionHeading from './SectionHeading';

function About() {
  return (
    <section id="about" className="section-about scroll-mt-24 py-8" aria-labelledby="about-title">
      <SectionHeading title="About" subtitle="Short background and current focus." />
      <div className="rounded-2xl border border-border bg-highlight p-5 shadow-soft transition-colors sm:p-6">
        <p className="text-base leading-relaxed text-text">
          I'm a 2025 Computer Science graduate with hands-on experience as a Software Engineer Trainee at Alstonair Technologies. I specialize in building full-stack web applications using FastAPI and React.js, focusing on clean APIs and responsive user interfaces. I've worked on real-world projects like a real estate platform(NAL-New Age Land) and education platform(Eduyata), developing authentication systems and dashboards. I'm passionate about solving real-world problems and am seeking opportunities to grow as a Software engineer, full-stack or backend developer.
        </p>
      </div>
    </section>
  );
}

export default About;
