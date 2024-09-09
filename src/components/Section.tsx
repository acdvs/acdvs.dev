type Props = React.PropsWithChildren & {
  title?: string;
};

const Section = ({ title, children }: Props) => {
  return (
    <div className="mb-10">
      {title && <h2 className="text-gradient">{title}</h2>}
      {children}
    </div>
  );
};

export default Section;
