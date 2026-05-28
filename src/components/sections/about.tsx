import { SectionHeader, SectionRoot } from '../section';

function About() {
  return (
    <SectionRoot>
      <SectionHeader tag="h2" label="About" />
      <p>
        I&apos;ve worked with TypeScript, React, and Next.js for my entire
        career. As someone who has studied design, I&apos;m able to take
        products and features from start to finish entirely on my own with a
        natural sense of component design and composition that fits each use
        case.
      </p>
      <p>
        In addition to the front end, I have experience with a wide range of
        back end languages, databases, and other systems. I commonly use Go for
        building robust APIs, Rust for WebAssembly, and various AWS services
        like S3, EC2, Lambda, and API Gateway.
      </p>
    </SectionRoot>
  );
}

export default About;
