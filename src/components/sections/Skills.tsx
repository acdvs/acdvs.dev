import Section from '../Section';

function Skills() {
  return (
    <Section title="Skills">
      <div className="mb-7">
        <h2>Front End</h2>
        <p>
          TypeScript, JavaScript, React, Redux, Next.js, Tailwind, SCSS, CSS-in-JS, UI/UX
          design, web accessibility, WebAssembly, WebGL
        </p>
      </div>
      <div className="mb-7">
        <h2>Back End</h2>
        <p>
          Node.js, Rust, Go, Python, GraphQL, MongoDB, PostgreSQL, API design, AWS
          Amplify, AWS EC2, AWS ECS, AWS Lambda, DigitalOcean, microservices, CI/CD, Git,
          GitHub
        </p>
      </div>
      <div className="mb-7">
        <h2>Learning</h2>
        <p>gRPC, Docker, Kubernetes</p>
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
