import Header from '@/components/Header';
import Sections from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-[100px]">
        <div className="h-screen flex justify-center items-center mb-5">
          <div className="max-w-xl px-10 position-absolute top-50 translate-middle-y">
            <div>
              <h1 className="text-center">
                Hi, I&apos;m <span className="text-gradient m-0">Adam</span>.
              </h1>
              <p className="mb-10 text-center">
                Full stack software engineer and open source contributor with expertise in
                UI and UX design.
              </p>
              <nav>
                <ul className="flex justify-center">
                  <li>
                    <a href="#about" className="btn-primary">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="btn-primary">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="btn-primary">
                      Projects
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <Sections.About />
        <Sections.Skills />
        <Sections.Projects />
      </main>
    </>
  );
}
