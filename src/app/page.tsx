import About from '@/components/sections/about';
import Intro from '@/components/sections/intro';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';

export default function Index() {
  return (
    <main className="max-w-175 mx-auto p-5 sm:pt-10">
      <Intro />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
