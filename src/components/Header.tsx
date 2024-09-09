import { RiGithubFill, RiLinkedinFill, RiStackOverflowFill } from '@remixicon/react';
import BrandIcon from './icons/Brand';

function Header() {
  return (
    <header className="w-full fixed flex justify-between md:p-5 header-gradient transition-[padding]">
      <BrandIcon />
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
