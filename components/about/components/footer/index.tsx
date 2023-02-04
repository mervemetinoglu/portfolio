import Image from 'next/image';
import profileImg from 'public/mm-2.jpg';
import { FooterLinkItem } from './components';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

export const Footer = () => {
	return (
		<footer className="mt-8 flex w-14 items-center md:w-full lg:mt-0">
			<Image
				width={50}
				height={50}
				src={profileImg}
				className="rounded-full"
				alt="Image of the author"
			/>
			<FooterLinkItem url="https://www.github.com/mervemetinoglu">
				<AiOutlineGithub />
			</FooterLinkItem>
			<FooterLinkItem url="https://www.linkedin.com/in/mervemetinoglu">
				<AiOutlineLinkedin />
			</FooterLinkItem>
		</footer>
	);
};
