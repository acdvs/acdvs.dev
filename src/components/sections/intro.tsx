import {
  RiBlueskyFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
} from '@remixicon/react';
import IconLink from '../icon-link';
import { SectionHeader, SectionRoot } from '../section';

function IntroSection() {
  return (
    <SectionRoot>
      <div className="flex justify-between items-center gap-5 mb-4">
        <SectionHeader className="mb-0">Adam Davies</SectionHeader>
        <div className="row-span-1 sm:row-span-2 flex gap-4 sm:gap-2 sm:self-start">
          <h2 className="sr-only">External links</h2>
          <IconLink href="/linkedin" icon={RiLinkedinFill} />
          <IconLink href="/github" icon={RiGithubFill} />
          <IconLink href="/twitter" icon={RiTwitterFill} />
          <IconLink href="/bluesky" icon={RiBlueskyFill} />
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

export default IntroSection;
