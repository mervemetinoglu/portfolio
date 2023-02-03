import Link from 'next/link';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body className="bg-night">{children}</body>
		</html>
	);
}
