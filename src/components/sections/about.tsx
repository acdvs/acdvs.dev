import { SectionHeader, SectionRoot } from '../section';

function AboutSection() {
  return (
    <SectionRoot>
      <SectionHeader tag="h2">About</SectionHeader>
      <p>
        I've worked with TypeScript, React, and Node for my entire career. I
        obsess over UI, UX, and accessibility details, and I know what works and
        what doesn't. I'm a Tailwind and desktop-first design loyalist.
      </p>
      <p>
        Python, Go, and Rust are my favorite back end languages for APIs and
        services, and I use Postgres whenever I can.
      </p>
    </SectionRoot>
  );
}

export default AboutSection;
