import Section from '../Section';

function Skills() {
  return (
    <Section title="Skills">
      <div className="mb-7">
        <h2>Top Proficiencies</h2>
        <p>
          TypeScript, JavaScript, React, Redux, Node.js, Next.js, Tailwind, SCSS, Styled
          Components, GraphQL, MongoDB, PostgreSQL, Prisma, Remix, API design, WCAG, UX
          design, microservices, CI/CD, documentation, git, GitHub
        </p>
      </div>
      <div className="mb-7">
        <h2>Learning</h2>
        <p>Go, gRPC, Python, Docker, Kubernetes, AWS</p>
      </div>
      <div className="mb-7">
        <h2>Software</h2>
        <p>Photoshop, Illustrator, After Effects, InDesign, TouchDesigner</p>
      </div>
    </Section>
  );
}

export default Skills;
