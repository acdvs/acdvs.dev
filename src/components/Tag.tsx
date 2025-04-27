function Tag({ label }: { label: string }) {
  return (
    <span className="text-sm border-2 border-zinc-100/40 rounded-md px-1 cursor-default">
      {label}
    </span>
  );
}

export default Tag;
