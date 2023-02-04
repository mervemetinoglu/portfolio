import Link from 'next/link';

export interface IFooterLinkItemProps {
	url: string;
	children?: React.ReactNode;
}

export const FooterLinkItem = (props: IFooterLinkItemProps) => {
	const { url, children } = props;

	return (
		<Link
			href={url}
			target="_blank"
			aria-label="Link to external site"
			className="ml-4 text-2xl text-white hover:text-neutral400"
		>
			{children}
		</Link>
	);
};
