import Link, { LinkProps } from 'next/link';

export interface IFooterLinkItemProps extends LinkProps {
  children?: React.ReactNode;
}

export const FooterLinkItem = (props: IFooterLinkItemProps) => {
  const { children, ...rest } = props;

  return (
    <Link
      target="_blank"
      className="ml-4 text-2xl text-white hover:text-neutral400"
      {...rest}
    >
      {children}
    </Link>
  );
};
