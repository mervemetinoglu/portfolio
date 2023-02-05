import Image from 'next/image';
import profileImg from 'public/mm.jpg';
import { FooterLinkItem } from './components';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className="mt-8 flex w-14 items-center md:w-full lg:mt-0">
      <div className="h-16 w-16 overflow-hidden rounded-full">
        <Image src={profileImg} alt="Image of the author" />
      </div>
      <FooterLinkItem
        aria-label="Github"
        href="https://www.github.com/mervemetinoglu"
      >
        <AiOutlineGithub />
      </FooterLinkItem>
      <FooterLinkItem
        aria-label="Linkedin"
        href="https://www.linkedin.com/in/mervemetinoglu"
      >
        <AiOutlineLinkedin />
      </FooterLinkItem>
    </footer>
  );
};
