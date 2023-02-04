import Link from 'next/link';
import { Project } from '@/data/models/projects.model';

export interface IProjectsListItemProps {
	projectItem: Project;
}

export const ProjectsListItem = ({ projectItem }: IProjectsListItemProps) => {
	const toolsWithComma = projectItem.tools.map((item) => item.name).join(', ');

	return (
		<li className="group relative mb-6 flex h-32 cursor-pointer items-center px-2 md:h-40">
			<Link
				target="_blank"
				href={projectItem.url}
				className="absolute top-0 left-0 bottom-0 right-0 w-full bg-transparent"
			/>
			<div className="ml-5 hidden w-80 duration-1000 group-hover:block">
				<span className="text-xs text-zinc400 md:text-justify md:text-base">
					{projectItem.description}
				</span>
			</div>
			<div className="text-md w-56 font-bold text-zinc50 duration-1000 group-hover:translate-x-28 md:w-96 md:text-2xl">
				{projectItem.name}
			</div>
			<div className="ml-5 w-full group-hover:hidden">
				<span className="text-xs text-zinc400 md:text-justify md:text-base">
					{toolsWithComma}
				</span>
			</div>
		</li>
	);
};
