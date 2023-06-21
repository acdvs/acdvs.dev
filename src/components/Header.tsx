import BrandIcon from './icons/Brand';
import LinkedInIcon from './icons/LinkedIn';
import GitHubIcon from './icons/GitHub';
import StackOverflowIcon from './icons/StackOverflow';

function Header() {
  return (
    <header className="w-full fixed flex justify-between md:p-5 header-gradient transition-[padding]">
      <BrandIcon />
      <div className="flex">
        <LinkedInIcon />
        <GitHubIcon />
        <StackOverflowIcon />
      </div>
    </header>
  );
}

export default Header;
