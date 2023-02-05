import {
  ExperienceListItemTitle,
  ExperienceListItemContent,
} from './components';
import { Experience } from '@/data/models/experiences.model';

export interface IExperienceListItemProps {
  item: Experience;
}

export const ExperienceListItem = ({ item }: IExperienceListItemProps) => {
  return (
    <li className="flex w-full flex-col">
      <ExperienceListItemTitle
        date={item.date}
        role={item.role}
        companyName={item.companyName}
      />
      <ExperienceListItemContent description={item.description} />
    </li>
  );
};
