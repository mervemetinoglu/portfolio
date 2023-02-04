import { ExperienceListItem } from './components';
import { Experience } from '@/data/models/experiences.model';

export interface IExperienceProps {
	data: Experience[];
}

export const ExperienceList = ({ data }: IExperienceProps) => {
	return (
		<ul className="mb-10 max-w-xs md:max-w-full" id="experience">
			{data.map((item) => {
				return <ExperienceListItem key={item.id} item={item} />;
			})}
		</ul>
	);
};
