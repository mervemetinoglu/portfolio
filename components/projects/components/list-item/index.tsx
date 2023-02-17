import Link from 'next/link';
import Image from 'next/image';
import { TbExternalLink } from 'react-icons/tb';
import { Project } from '@/data/models/projects.model';

export interface IProjectsListItemProps {
  projectItem: Project;
}

export const ProjectsListItem = ({ projectItem }: IProjectsListItemProps) => {
  return (
    <li className="group relative flex h-32 items-center overflow-hidden px-2 py-16 md:h-40 md:cursor-pointer md:py-24">
      <Link
        target="_blank"
        href={projectItem.url}
        aria-label={projectItem.name}
        className="invisible absolute top-0 left-0 bottom-0 right-0 z-50 h-full w-full bg-transparent md:visible"
      />
      <div className="absolute -left-1/2 w-1/2 duration-1000 md:group-hover:left-0">
        <span className="inline-block text-justify text-xs text-zinc400 md:text-base">
          {projectItem.description}
        </span>
      </div>
      <div className="text-md absolute left-0 w-1/2 px-7 font-bold text-zinc50 duration-1000 md:text-2xl md:group-hover:left-1/2 md:group-hover:text-right">
        {projectItem.name}
      </div>
      <div className="absolute left-1/2 w-1/2 text-xs text-zinc400 duration-1000 md:text-base  md:group-hover:left-full">
        <div className="flex flex-wrap items-center">
          {projectItem.tools.map((item) => (
            <Image
              width={36}
              height={36}
              key={item.id}
              src={item.url}
              alt={item.name}
              className="mr-3 mt-2 w-7 md:w-9 lg:mt-0"
            />
          ))}
        </div>
        <div className="mt-3 flex items-center md:hidden">
          <span className="mr-1 text-xs">See the source code</span>
          <Link
            target="_blank"
            href={projectItem.url}
            aria-label={projectItem.name}
          >
            <TbExternalLink />
          </Link>
        </div>
      </div>
    </li>
  );
};
