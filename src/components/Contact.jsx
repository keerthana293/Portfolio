import SectionHeading from './SectionHeading';

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16" aria-labelledby="contact-title">
      <SectionHeading title="Contact" subtitle="Open to frontend and full-stack opportunities - let's connect." />
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h3 id="contact-title" className="font-heading text-xl font-semibold text-text">
            Contact Details
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted sm:text-base">
            <li>
              Email:{' '}
              <a className="text-accent hover:underline" href="mailto:boppanagowtham04@gmail.com">
                boppanagowtham04@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{' '}
              <a className="text-accent hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                linkedin.com/in/gowtham
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a className="text-accent hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">
                github.com/gowtham
              </a>
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h3 className="font-heading text-xl font-semibold text-text">Quick Message</h3>
          <form className="mt-4 space-y-3" onSubmit={(event) => event.preventDefault()} aria-label="Contact form">
            <label className="block text-sm text-muted">
              Name
              <input
                type="text"
                name="name"
                className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2 text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm text-muted">
              Email
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2 text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="you@example.com"
              />
            </label>
            <label className="block text-sm text-muted">
              Message
              <textarea
                name="message"
                rows="4"
                className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2 text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="Write your message"
              />
            </label>
            <button
              type="submit"
              className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Send
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}

export default Contact;
