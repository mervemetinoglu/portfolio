import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body className="bg-night100">{children}</body>
		</html>
	);
}
