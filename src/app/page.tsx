import Header from '@/components/Header';
import Sections from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="mb-10">
          <h1>Adam Davies</h1>
          <p>
            Full stack software engineer and open source contributor with expertise in UI
            and UX design.
          </p>
        </div>
        <Sections.About />
        <Sections.Skills />
        <Sections.Projects />
      </main>
    </>
  );
}
