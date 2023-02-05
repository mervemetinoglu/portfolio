export interface IExperienceListItemTitleProps {
  date: string;
  role: string;
  companyName: string;
}

export const ExperienceListItemTitle = (
  props: IExperienceListItemTitleProps
) => {
  const { date, role, companyName } = props;

  return (
    <span className="inline-flex items-center py-2 text-left text-zinc50">
      <span className="mr-5 min-w-max text-sm font-bold md:w-0 md:text-base">
        {date}
      </span>
      <span className="flex items-center justify-between">
        <span className="text-sm font-bold tracking-widest md:min-w-max md:text-base">
          {companyName}
        </span>
        <span className="ml-3 text-xs tracking-wide text-zinc400 md:text-sm">
          {role}
        </span>
      </span>
    </span>
  );
};
