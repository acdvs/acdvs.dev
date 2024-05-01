import Section from '../Section';

function Skills() {
  return (
    <Section title="Skills">
      <div className="mb-7">
        <h2>Front End</h2>
        <p>
          TypeScript, JavaScript, React, Next.js, Tailwind, SCSS, CSS-in-JS, React Query,
          Zustand, Redux, WebAssembly, WebGL, UI/UX design, accessibility, Figma
        </p>
      </div>
      <div className="mb-7">
        <h2>Back End</h2>
        <p>
          Node.js, Rust, Go, Python, GraphQL, MongoDB, PostgreSQL, API design,
          microservices, AWS (S3, EC2, ECS, Lambda, API Gateway, Amplify, VPC),
          DigitalOcean, CI/CD, Git, GitHub
        </p>
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
