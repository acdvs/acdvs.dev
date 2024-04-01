import cx from 'classnames';

function Project({
  title,
  date,
  description,
  tags,
  liveURL,
  sourceURL,
  packageURL,
  noLinkText,
}: {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  liveURL?: string;
  sourceURL?: string;
  packageURL?: string;
  noLinkText?: string;
}) {
  const noLinks = !liveURL && !sourceURL && !packageURL;

  return (
    <li className="mb-8 md:mb-0 [&:hover_.tag]:text-white">
      <div className="flex justify-between items-center mb-3">
        <h2 className="mb-0">{title}</h2>
        <span className="text-darkTrans1">{date}</span>
      </div>
      <p className="mb-2">{description}</p>
      <ul className="flex flex-wrap mb-0">
        {tags?.map((tag) => (
          <li
            key={tag}
            className="tag text-sm font-normal text-darkTrans1 bg-darkTrans2 rounded border-1 border-darkTrans px-1 mr-2 mb-2 hover:border-white transition-colors"
          >
            {tag}
          </li>
        ))}
      </ul>
      <ul className="flex">
        {liveURL && (
          <li>
            <ProjectLink url={liveURL} text="Website" />
          </li>
        )}
        {sourceURL && (
          <li>
            <ProjectLink url={sourceURL} text="GitHub" />
          </li>
        )}
        {packageURL && (
          <li>
            <ProjectLink url={packageURL} text="Package" />
          </li>
        )}
        {noLinks && (
          <li>
            <ProjectLink text={noLinkText || 'Under construction'} />
          </li>
        )}
      </ul>
    </li>
  );
}

function ProjectLink({ url, text }: { url?: string; text: string }) {
  return url ? (
    <a
      href={url}
      target="_blank"
      className={cx('btn-secondary mr-6 mb-2', !url && 'text-darkTrans2')}
    >
      {text}
    </a>
  ) : (
    <p className="text-darkTrans1 font-bold uppercase mr-6 mb-2">{text}</p>
  );
}

export default Project;
