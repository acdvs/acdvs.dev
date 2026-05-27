import {
  type RemixiconComponentType,
  RiBlueskyFill,
  RiGithubFill,
  RiLinkedinFill,
  RiStackOverflowFill,
  RiTwitterFill,
} from '@remixicon/react';
import Link from 'next/link';
import { SectionHeader, SectionRoot } from '../Section';

function IntroSection() {
  return (
    <SectionRoot>
      <div className='flex justify-between items-center gap-5 mb-4'>
        <SectionHeader label="Adam Davies" className='mb-0' />
        <div className="row-span-1 sm:row-span-2 flex gap-4 sm:gap-2 sm:self-start">
          <h2 className="sr-only">External links</h2>
          <SocialLink href="/linkedin" icon={RiLinkedinFill} />
          <SocialLink href="/github" icon={RiGithubFill} />
          <SocialLink href="/twitter" icon={RiTwitterFill} />
          <SocialLink href="/bluesky" icon={RiBlueskyFill} />
        </div>
      </div>
      <p className="order-last col-span-2 sm:col-span-1">
        Full stack engineer building websites and tools that look good, work
        well, and make a difference. Frequent open source contributor and
        real-time audiovisual hobbyist.
      </p>
    </SectionRoot>
  );
}

function SocialLink({
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

export default IntroSection;
