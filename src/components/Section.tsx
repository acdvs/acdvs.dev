import clsx from 'clsx';

function Section({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={clsx(className, 'mb-10')}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;
