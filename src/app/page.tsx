import About from '@/components/sections/About';
import Intro from '@/components/sections/Intro';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

export default function Index() {
  return (
    <main className="max-w-[700px] mx-auto p-5 sm:pt-10">
      <Intro />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
