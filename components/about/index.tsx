import { Header, Footer, Content } from './components';

export const About = () => {
	return (
		<div className="flex w-full flex-col justify-between py-16 md:sticky md:py-24">
			<Header />
			<Content />
			<Footer />
		</div>
	);
};
