import { Nunito } from '@next/font/google';
import projects from '@/data/projects.json';
import experiences from '@/data/experiences.json';
import { About, Projects, ExperienceList } from '@/components';

const nunito = Nunito({
	subsets: ['latin'],
	variable: '--font-nunito',
	weight: ['400', '600', '700'],
});

export const HomeContainer = () => {
	return (
		<main
			className={`${nunito.variable} mx-auto flex h-screen max-w-xs flex-col font-sans md:max-w-md lg:max-w-7xl lg:flex-row`}
		>
			<About />
			<div className="mt-6 w-full md:pb-24 lg:mt-24 lg:overflow-y-scroll">
				<ExperienceList data={experiences.data} />
				<Projects data={projects.data} />
			</div>
		</main>
	);
};
