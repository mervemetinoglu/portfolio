import { NavigationBarItem } from './item';

export const NavigationBar = () => {
  return (
    <nav className="mt-8">
      <NavigationBarItem
        url="#experience"
        name="experience"
        className="w-6 group-hover:w-10"
      />
      <NavigationBarItem
        url="#projects"
        name="projects"
        className="w-10 group-hover:w-16"
      />
    </nav>
  );
};
