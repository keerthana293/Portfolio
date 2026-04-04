import SectionHeading from './SectionHeading';

function Contact() {
  return (
    <section id="contact" className="section-contact scroll-mt-24 py-8" aria-labelledby="contact-title">
      <SectionHeading title="Contact" subtitle="Open to full-stack opportunities - let's connect." />
      <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h3 id="contact-title" className="font-heading text-xl font-semibold text-text">
          Contact Details
        </h3>
        <ul className="mt-4 space-y-3 text-sm text-muted sm:text-base">
          <li>
            Email:{' '}
            <a className="text-accent hover:underline" href="mailto:bvkeerthi29@gmail.com">
              bvkeerthi29@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a className="text-accent hover:underline" href="https://www.linkedin.com/in/bv-keerthana" target="_blank" rel="noreferrer">
              linkedin.com/in/bv-keerthana
            </a>
          </li>
          <li>
            Mobile:{' '}
            <a className="text-accent hover:underline" href="tel:6362410803">
              6362410803
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Contact;
