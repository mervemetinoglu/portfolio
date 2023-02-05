export interface IExperienceListItemContentProps {
  description: string;
}

export const ExperienceListItemContent = ({
  description,
}: IExperienceListItemContentProps) => {
  return (
    <div className="ml-14 border-l-2 border-solid border-l-neutral500 py-4 pl-6">
      <div className="ml-10 h-auto w-52 text-xs tracking-wider text-zinc400 md:ml-14 md:w-96 md:text-sm">
        {description}
      </div>
    </div>
  );
};
