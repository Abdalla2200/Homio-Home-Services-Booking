type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm rtl:tracking-normal">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}
