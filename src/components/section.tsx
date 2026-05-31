import clsx from 'clsx';

function SectionRoot({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={clsx(className, 'mb-10')}>{children}</section>;
}

function SectionHeader({
  children,
  className,
  tag,
}: {
  children: React.ReactNode | string;
  className?: string;
  tag?: React.HTMLElementType;
}) {
  const HeadingEl = tag ?? 'h1';

  return (
    <header>
      <HeadingEl className={className}>{children}</HeadingEl>
    </header>
  );
}

export { SectionHeader, SectionRoot };
