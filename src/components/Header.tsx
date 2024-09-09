import { RiGithubFill, RiLinkedinFill, RiStackOverflowFill } from '@remixicon/react';
import Logo from './Logo';

function Header() {
  return (
    <header className="w-full sticky top-0 flex justify-between md:p-5 header-gradient">
      <a href="#" className="btn-primary">
        <Logo className="w-10" />
      </a>
      <div className="flex">
        <a
          href="https://linkedin.com/in/adamdavies001"
          target="_blank"
          className="btn-primary"
        >
          <RiLinkedinFill className="w-10" />
        </a>
        <a href="https://github.com/acdvs" target="_blank" className="btn-primary">
          <RiGithubFill className="w-10" />
        </a>
        <a
          href="https://stackoverflow.com/users/4881192/adam"
          target="_blank"
          className="btn-primary"
        >
          <RiStackOverflowFill className="w-10" />
        </a>
      </div>
    </header>
  );
}

export default Header;
