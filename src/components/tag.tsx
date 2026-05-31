import clsx from 'clsx';

function Tag({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        'font-mono border-b border-current/30 text-sm',
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Tag;
