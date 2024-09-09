import cx from 'classnames';

import { projects } from '@/data';

function Project({
  title,
  date,
  description,
  tags,
  liveURL,
  sourceURL,
  packageURL,
  noURL,
}: (typeof projects)[number]) {
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
      <div className="flex">
        {liveURL && <ProjectLink url={liveURL} text="Website" />}
        {sourceURL && <ProjectLink url={sourceURL} text="GitHub" />}
        {packageURL && <ProjectLink url={packageURL} text="Package" />}
        {noLinks && <ProjectLink text={noURL || 'Under construction'} />}
      </div>
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
