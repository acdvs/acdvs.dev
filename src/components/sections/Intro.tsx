import { RiGithubFill, RiLinkedinFill, RiStackOverflowFill } from '@remixicon/react';
import Section from '../Section';

function IntroSection() {
  return (
    <Section>
      <div className="grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-x-14 gap-y-4">
        <h1 className="mb-0">Adam Davies</h1>
        <p className="order-last col-span-2 sm:col-span-1">
          Front end engineer with a passion for pixel-perfect design and accessibility
          standards. Bringing valuable UI/UX insight and direction to any project.
        </p>
        <div className="row-span-1 sm:row-span-2 flex sm:flex-col gap-4 sm:gap-2 sm:self-start">
          <a
            href="https://linkedin.com/in/adamdavies001"
            target="_blank"
            className="flex gap-3 items-center"
          >
            <RiLinkedinFill className="w-7 h-7" />
            <p className="mb-0 hidden sm:block">LinkedIn</p>
          </a>
          <a
            href="https://github.com/acdvs"
            target="_blank"
            className="flex gap-3 items-center"
          >
            <RiGithubFill className="w-7 h-7" />
            <p className="mb-0 hidden sm:block">GitHub</p>
          </a>
          <a
            href="https://stackoverflow.com/users/4881192/adam"
            target="_blank"
            className="flex gap-3 items-center"
          >
            <RiStackOverflowFill className="w-7 h-7" />
            <p className="mb-0 hidden sm:block">Stack Overflow</p>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default IntroSection;
