import { AreaHTMLAttributes } from 'react';

export interface INavigationBarItemProps
	extends AreaHTMLAttributes<HTMLSpanElement> {
	url: string;
	name: string;
}

export const NavigationBarItem = ({
	url,
	name,
	className = '',
}: INavigationBarItemProps) => {
	return (
		<a
			href={url}
			className="group mt-4 flex items-center text-neutral400 lg:mt-10"
		>
			<span
				className={`-mt-px inline-block h-px bg-neutral400 transition-all group-hover:bg-zinc50 ${className}`}
			></span>
			<span className="ml-4 inline-block text-xs uppercase tracking-widest group-hover:text-zinc50">
				{name}
			</span>
		</a>
	);
};
