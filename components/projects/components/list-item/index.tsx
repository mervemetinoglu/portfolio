import Link from 'next/link';
import { Project } from '@/data/models/projects.model';

export interface IProjectsListItemProps {
  projectItem: Project;
}

export const ProjectsListItem = ({ projectItem }: IProjectsListItemProps) => {
  const toolsWithComma = projectItem.tools.map((item) => item.name).join(', ');

  return (
    <li className="group relative mb-6 flex h-32 cursor-pointer items-center overflow-hidden px-2 md:h-40">
      <Link
        target="_blank"
        href={projectItem.url}
        aria-label={projectItem.name}
        className="absolute top-0 left-0 bottom-0 right-0 w-full bg-transparent"
      />
      <div className="absolute -left-1/2 w-1/2 duration-1000 group-hover:left-0">
        <span className="inline-block text-justify text-xs text-zinc400 md:text-base">
          {projectItem.description}
        </span>
      </div>
      <div className="text-md absolute left-0 w-1/2 px-7 font-bold text-zinc50 duration-1000 group-hover:left-1/2 group-hover:text-right md:text-2xl">
        {projectItem.name}
      </div>
      <div className="absolute left-1/2 w-1/2 text-xs text-zinc400 duration-1000 group-hover:left-full  md:text-base">
        <span>{toolsWithComma}</span>
      </div>
    </li>
  );
};
