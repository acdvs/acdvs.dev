function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

export default Section;
