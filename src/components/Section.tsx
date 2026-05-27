import clsx from 'clsx';

function SectionRoot({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={clsx(className, 'mb-10')}>
      {children}
    </section>
  );
}

function SectionHeader({ className, label, tag }: { className?: string; label: string, tag?: React.HTMLElementType; }) {
  const HeadingEl = tag ?? 'h1';

  return (
    <header>
      <HeadingEl className={className}>{label}</HeadingEl>
    </header>
  )
}

export {
  SectionRoot,
  SectionHeader
};
