function Icon({ href, children }: { href: string; children: React.ReactNode }) {
  const target = href.startsWith('#') ? '_self' : '_blank';

  return (
    <a href={href} target={target} className="btn-primary">
      {children}
    </a>
  );
}

export default Icon;
