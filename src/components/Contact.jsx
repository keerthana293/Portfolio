import { useState } from 'react';
import SectionHeading from './SectionHeading';

function Contact() {
  const [form, setForm] = useState({ from_name: '', reply_to: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ from_name: '', reply_to: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section-contact scroll-mt-24 py-16" aria-labelledby="contact-title">
      <SectionHeading title="Contact" subtitle="Open to full-stack opportunities - let's connect." />
      <div className="grid gap-6 lg:grid-cols-2">
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

        <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h3 className="font-heading text-xl font-semibold text-text">Quick Message</h3>
          <form className="mt-4 space-y-3" onSubmit={handleSubmit} aria-label="Contact form">
            <label className="block text-sm text-muted">
              Name
              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2 text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm text-muted">
              Email
              <input
                type="email"
                name="reply_to"
                value={form.reply_to}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2 text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="you@example.com"
              />
            </label>
            <label className="block text-sm text-muted">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                required
                className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-2 text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="Write your message"
              />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>
            {status === 'success' && (
              <p className="text-sm text-green-500">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
            )}
          </form>
        </article>
      </div>
    </section>
  );
}

export default Contact;
