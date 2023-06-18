import cx from 'classnames';

type ProjectProps = {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  demoURL?: string;
  githubURL?: string;
  npmURL?: string;
};

function Project({
  title,
  date,
  description,
  tags,
  demoURL,
  githubURL,
  npmURL,
}: ProjectProps) {
  const noLinks = !demoURL && !githubURL && !npmURL;

  return (
    <li className="mb-8 md:mb-0">
      <div className="flex justify-between items-center mb-3">
        <h2 className="mb-0">{title}</h2>
        <span className="text-darkTrans">{date}</span>
      </div>
      <p className="mb-4">{description}</p>
      <ul className="flex flex-wrap mb-2">
        {tags?.map((tag) => (
          <li
            key={tag}
            className="text-sm font-normal text-darkTrans bg-darkerTrans rounded-sm px-1 mr-2 mb-2"
          >
            {tag}
          </li>
        ))}
      </ul>
      <ul className="flex">
        {demoURL && (
          <li>
            <ProjectLink url={demoURL} text="Check it out" />
          </li>
        )}
        {githubURL && (
          <li>
            <ProjectLink url={githubURL} text="View on GitHub" />
          </li>
        )}
        {npmURL && (
          <li>
            <ProjectLink url={npmURL} text="View on NPM" />
          </li>
        )}
        {noLinks && (
          <li>
            <ProjectLink text="Under construction" />
          </li>
        )}
      </ul>
    </li>
  );
}

type LinkProps = {
  url?: string;
  text: string;
};

function ProjectLink({ url, text }: LinkProps) {
  return (
    <a href={url} className={cx('btn-secondary mr-6 mb-2', !url && 'text-darkTrans')}>
      {text}
    </a>
  );
}

export default Project;
