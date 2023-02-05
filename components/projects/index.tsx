import { ProjectsListItem } from './components';
import { Project } from '@/data/models/projects.model';

export interface IProjectsProps {
  data: Project[];
}

export const Projects = ({ data }: IProjectsProps) => {
  return (
    <ul className="divide-y-2 divide-neutral500" id="projects">
      {data.map((item) => (
        <ProjectsListItem key={item.id} projectItem={item} />
      ))}
    </ul>
  );
};
