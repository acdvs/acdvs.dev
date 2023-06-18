import Header from '@/components/Header';
import Sections from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-[100px]">
        <div className="h-screen flex justify-center items-center mb-5">
          <div className="px-4 w-100 position-absolute top-50 translate-middle-y">
            <div>
              <div className="flex justify-center">
                <h1 className="mr-3">Hi, I'm</h1>
                <h1 className="text-gradient">Adam</h1>
                <h1>.</h1>
              </div>
              <p className="mb-10 text-center">
                Full stack software engineer with expertise in UI and UX design.
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
