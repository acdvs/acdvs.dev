type Props = React.PropsWithChildren & {
  href: string;
};

function Icon({ href, children }: Props) {
  const target = href.startsWith('#') ? '_self' : '_blank';

  return (
    <a href={href} target={target} className="btn-primary">
      {children}
    </a>
  );
}

export default Icon;
