function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-foreground-accent/70 border-b border-foreground-accent/30 text-sm">
      {label}
    </span>
  );
}

export default Tag;
