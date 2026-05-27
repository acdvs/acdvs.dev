import { RemixiconComponentType } from "@remixicon/react";
import Link from "next/link";

function IconLink({
  href,
  icon,
}: {
  href: string;
  icon: RemixiconComponentType;
}) {
  const Icon = icon;

  return (
    <Link
      href={href}
      target="_blank"
      className="flex gap-3 items-center group"
    >
      <Icon className="size-7 fill-primary group-hover:fill-primary-light transition-colors" />
    </Link>
  );
}

export default IconLink;