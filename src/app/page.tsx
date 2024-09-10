import Sections from '@/components/sections';

export default function Index() {
  return (
    <>
      <div className="max-w-[700px] mx-auto p-5 sm:pt-10">
        <Sections.Intro />
        <Sections.About />
        <Sections.Skills />
        <Sections.Projects />
      </div>
      <div className="bg-gradient fixed inset-0 -z-10" />
    </>
  );
}
