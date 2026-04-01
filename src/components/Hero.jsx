function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {children}
    </a>
  );
}

function Hero() {
  const highlights = ['React.js', 'FastAPI', 'Python', 'SQL', 'Git'];

  return (
    <section id="home" className="section-hero flex min-h-[85vh] scroll-mt-24 flex-col justify-center py-16 sm:py-24" aria-labelledby="hero-title">
      <h1 id="hero-title" className="animate-fadeUp font-heading text-3xl font-semibold leading-tight sm:text-5xl">
        B V Keerthana
      </h1>
      <p className="mt-4 max-w-3xl animate-fadeUp text-base text-muted sm:text-xl">
        Software Engineer
      </p>
      <ul className="mt-5 flex animate-fadeUp flex-wrap gap-2" aria-label="Core focus areas">
        {highlights.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted transition hover:border-accent hover:text-accent"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-2xl animate-fadeUp text-base text-muted">
        I'm specialized in building full-stack web applications using FastAPI and React.js. I'm focusing on creating clean, well-structured APIs and developing responsive, dynamic user interfaces that deliver a seamless user experience.
      </p>

      <div className="mt-8 flex animate-fadeUp flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          View Projects
        </a>

      </div>

      <div className="mt-8 flex animate-fadeUp items-center gap-3">
        <SocialLink href="https://www.linkedin.com/in/bv-keerthana" label="LinkedIn profile">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M20.4 20.5h-3.6v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8H9.1V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.3-1.9 3.6 0 4.3 2.4 4.3 5.4v6.4ZM5 7.4a2.1 2.1 0 1 1 0-4.3 2.1 2.1 0 0 1 0 4.3ZM6.8 20.5H3.2V9h3.6v11.5Z" />
          </svg>
        </SocialLink>
        <SocialLink href="mailto:bvkeerthi29@gmail.com" label="Send email">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l9 5.5 9-5.5V7H3Zm18 10V9.5l-8.5 5.2a1 1 0 0 1-1 0L3 9.5V17h18Z" />
          </svg>
        </SocialLink>
      </div>
    </section>
  );
}

export default Hero;
