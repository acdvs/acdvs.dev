import { RiGithubFill, RiLinkedinFill, RiStackOverflowFill } from '@remixicon/react';
import Section from '../ui/Section';

function IntroSection() {
  return (
    <Section className="grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-x-14 gap-y-4">
      <h1 className="mb-0">Adam Davies</h1>
      <p className="order-last col-span-2 sm:col-span-1">
        Full stack engineer building websites and tools that look good, work well, and
        make a difference. Frequent open source contributor and real-time audiovisual
        hobbyist.
      </p>
      <aside className="row-span-1 sm:row-span-2 flex sm:flex-col gap-4 sm:gap-2 sm:self-start">
        <h2 className="sr-only">External Links</h2>
        <a
          href="https://linkedin.com/in/adamdavies001"
          target="_blank"
          className="flex gap-3 items-center"
        >
          <RiLinkedinFill className="size-7" />
          <p className="mb-0 sr-only sm:not-sr-only">LinkedIn</p>
        </a>
        <a
          href="https://github.com/acdvs"
          target="_blank"
          className="flex gap-3 items-center"
        >
          <RiGithubFill className="size-7" />
          <p className="mb-0 sr-only sm:not-sr-only">GitHub</p>
        </a>
        <a
          href="https://stackoverflow.com/users/4881192/adam"
          target="_blank"
          className="flex gap-3 items-center"
        >
          <RiStackOverflowFill className="size-7" />
          <p className="mb-0 sr-only sm:not-sr-only">Stack Overflow</p>
        </a>
      </aside>
    </Section>
  );
}

export default IntroSection;
