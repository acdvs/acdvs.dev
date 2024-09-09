import { RiGithubFill, RiLinkedinFill, RiStackOverflowFill } from '@remixicon/react';
import Logo from './Logo';

function Header() {
  return (
    <header className="w-full sticky top-0 flex justify-between md:p-5 header-gradient">
      <a href="#">
        <Logo className="w-10 h-10" />
      </a>
      <div className="flex gap-4">
        <a href="https://linkedin.com/in/adamdavies001" target="_blank">
          <RiLinkedinFill className="w-10 h-10" />
        </a>
        <a href="https://github.com/acdvs" target="_blank">
          <RiGithubFill className="w-10 h-10" />
        </a>
        <a href="https://stackoverflow.com/users/4881192/adam" target="_blank">
          <RiStackOverflowFill className="w-10 h-10" />
        </a>
      </div>
    </header>
  );
}

export default Header;
