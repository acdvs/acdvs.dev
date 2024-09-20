const Tag = ({ label }: { label: string }) => (
  <span className="text-sm border-2 border-zinc-100/40 rounded-md px-1 hover:border-white transition-colors hover:cursor-default">
    {label}
  </span>
);

export default Tag;
