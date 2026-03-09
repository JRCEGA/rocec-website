interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base text-muted">{subtitle}</p>}
    </div>
  );
}
