import {
  type RemixiconComponentType,
  RiGithubFill,
  RiLinkedinFill,
  RiStackOverflowFill,
} from '@remixicon/react';
import Link from 'next/link';
import { SectionHeader, SectionRoot } from '../Section';

function IntroSection() {
  return (
    <SectionRoot className="grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-x-14 gap-y-4">
      <SectionHeader label="Adam Davies" className="mb-0" />
      <p className="order-last col-span-2 sm:col-span-1">
        Full stack engineer building websites and tools that look good, work
        well, and make a difference. Frequent open source contributor and
        real-time audiovisual hobbyist.
      </p>
      <aside className="row-span-1 sm:row-span-2 flex sm:flex-col gap-4 sm:gap-2 sm:self-start">
        <h2 className="sr-only">External links</h2>
        <SocialLink type="linkedin" label="LinkedIn" icon={RiLinkedinFill} />
        <SocialLink type="github" label="GitHub" icon={RiGithubFill} />
        <SocialLink
          type="stackoverflow"
          label="Stack Overflow"
          icon={RiStackOverflowFill}
        />
      </aside>
    </SectionRoot>
  );
}

function SocialLink({
  type,
  label,
  icon,
}: {
  type: string;
  label: string;
  icon: RemixiconComponentType;
}) {
  const Icon = icon;

  return (
    <Link
      href={`/sm/${type}`}
      target="_blank"
      className="flex gap-3 items-center group"
    >
      <Icon className="size-7 fill-primary group-hover:fill-primary-light transition-colors" />
      <p className="mb-0 sr-only sm:not-sr-only">{label}</p>
    </Link>
  );
}

export default IntroSection;
