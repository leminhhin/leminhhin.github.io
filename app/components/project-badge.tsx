import ArrowIcon from './arrow-icon';

export default function ProjectBadge({ name, url, desc }: { name: string, url: string, desc: string }) {

  return (
    <a
      href={url}
      target='_blank'
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className='flex flex-row'>
        <div className="flex flex-col">
          <p className="font-semibold prose prose-neutral dark:prose-invert">
            {name}
          </p>
          <p className="prose prose-sm prose-neutral dark:prose-invert">
            {desc}
          </p>
        </div>
      </div>

      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
}