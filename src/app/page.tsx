import Sections from '@/components/sections';

export default function Index() {
  return (
    <div className="w-full lg:w-[700px] mx-auto p-3">
      <Sections.Intro />
      <Sections.About />
      <Sections.Skills />
      <Sections.Projects />
    </div>
  );
}
