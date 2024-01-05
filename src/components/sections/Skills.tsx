import Section from '../Section';

function Skills() {
  return (
    <Section title="Skills">
      <div className="mb-7">
        <h2>Top Proficiencies</h2>
        <p>
          TypeScript, JavaScript, React, Redux, Node.js, Next.js, Tailwind, SCSS,
          CSS-in-JS, UI/UX design, GraphQL, MongoDB, PostgreSQL, API design, web
          accessibility, microservices, CI/CD, documentation, Git, GitHub
        </p>
      </div>
      <div className="mb-7">
        <h2>Learning</h2>
        <p>Rust, WebAssembly, WebGL, Go, gRPC, Python, Docker, Kubernetes, AWS</p>
      </div>
      <div className="mb-7">
        <h2>Software</h2>
        <p>
          Photoshop, Illustrator, After Effects, Premiere Pro, InDesign, TouchDesigner,
          Cinema 4D
        </p>
      </div>
    </Section>
  );
}

export default Skills;
