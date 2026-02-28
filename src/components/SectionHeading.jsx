function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-8 animate-fadeUp">
      <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">{subtitle}</p> : null}
    </div>
  );
}

export default SectionHeading;
