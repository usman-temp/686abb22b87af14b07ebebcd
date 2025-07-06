import './globals.css';
import ThemeToggle from './ThemeToggle';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}