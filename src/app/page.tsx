import Intro from '@/components/sections/Intro';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';

export default function Index() {
  return (
    <>
      <div className="max-w-[700px] mx-auto p-5 sm:pt-10">
        <Intro />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
