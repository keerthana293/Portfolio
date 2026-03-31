import SectionHeading from './SectionHeading';
import ubdtLogo from '../assets/University Logo/ubdt.jpg';
import sannidhiLogo from '../assets/University Logo/sannidhi.jpg';

function Education() {
  return (
    <section id="education" className="section-education scroll-mt-24 py-16" aria-labelledby="education-title">
      <SectionHeading title="Education" subtitle="Academic foundation relevant to software engineering roles." />
      <div className="space-y-6">
        <article className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-4">
            <a href="https://www.ubdtce.org/" target="_blank" rel="noreferrer">
              <img src={ubdtLogo} alt="UBDT College logo" className="h-14 w-14 rounded-full object-cover border border-border" />
            </a>
            <div>
              <h3 id="education-title" className="font-heading text-xl font-semibold text-text">
                B.E in Computer Science and Engineering
              </h3>
              <a href="https://www.ubdtce.org/" target="_blank" rel="noreferrer" className="mt-1 text-sm text-accent hover:underline sm:text-base">
                University BDT College of Engineering, Davanagere
              </a>
              <p className="text-sm text-muted sm:text-base">Jun 2025 | CGPA: 8.4 / 10</p>
            </div>
          </div>
        </article>
        <article className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-4">
            <img src={sannidhiLogo} alt="Sri Sannidhi PU College logo" className="h-14 w-14 rounded-full object-cover border border-border" />
            <div>
              <h3 className="font-heading text-xl font-semibold text-text">
                Class XII, PCMB
              </h3>
              <p className="mt-1 text-sm text-muted sm:text-base">Sri Sannidhi PU College, Kotturu</p>
              <p className="text-sm text-muted sm:text-base">Jul 2021 | Percentage: 99.86%</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
