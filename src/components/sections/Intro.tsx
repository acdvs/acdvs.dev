import { RiGithubFill, RiLinkedinFill, RiStackOverflowFill } from '@remixicon/react';

const IntroSection = () => (
  <div className="flex justify-between gap-14 mb-10">
    <div className="flex-1">
      <h1>Adam Davies</h1>
      <p>
        Front end engineer and open source contributor with expertise in UI and UX design.
      </p>
    </div>
    <div>
      <div className="flex flex-col gap-2">
        <a
          href="https://linkedin.com/in/adamdavies001"
          target="_blank"
          className="flex gap-3 items-center"
        >
          <RiLinkedinFill className="w-6 h-6" />
          <p className="mb-0">LinkedIn</p>
        </a>
        <a
          href="https://github.com/acdvs"
          target="_blank"
          className="flex gap-3 items-center"
        >
          <RiGithubFill className="w-6 h-6" />
          <p className="mb-0">GitHub</p>
        </a>
        <a
          href="https://stackoverflow.com/users/4881192/adam"
          target="_blank"
          className="flex gap-3 items-center"
        >
          <RiStackOverflowFill className="w-6 h-6" />
          <p className="mb-0">Stack Overflow</p>
        </a>
      </div>
    </div>
  </div>
);

export default IntroSection;
