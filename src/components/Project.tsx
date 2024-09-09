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
    <div className="mb-8 md:mb-0">
      <div className="flex justify-between items-center mb-3">
        <h3 className="mb-0">{title}</h3>
        <span className="text-zinc-100/40">{date}</span>
      </div>
      <p className="mb-3">{description}</p>
      <div className="flex flex-wrap mb-3 gap-2">
        {tags?.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {liveURL && <ProjectLink url={liveURL} text="Website" />}
        {sourceURL && <ProjectLink url={sourceURL} text="GitHub" />}
        {packageURL && <ProjectLink url={packageURL} text="Package" />}
        {noLinks && <ProjectLink text={noURL || 'Under construction'} />}
      </div>
    </div>
  );
}

function ProjectLink({ url, text }: { url?: string; text: string }) {
  return url ? (
    <a
      href={url}
      target="_blank"
      className={cx('font-bold uppercase', !url && 'text-darkTrans2')}
    >
      {text}
    </a>
  ) : (
    <p className="text-zinc-100/40 font-bold uppercase mr-6 mb-2">{text}</p>
  );
}

export default Project;
