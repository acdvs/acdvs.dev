type Props = React.PropsWithChildren & {
  title: string;
};

function Section({ title, children }: Props) {
  return (
    <div className="max-w-[750px] px-4 mx-auto mb-24">
      <div id={title.toLowerCase()} className="offset-anchor" />
      <h1 className="text-gradient mb-4">{title}</h1>
      {children}
    </div>
  );
}

export default Section;
