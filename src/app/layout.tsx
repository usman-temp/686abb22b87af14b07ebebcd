import Link from 'next/link';

// ... existing imports ...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 border-b">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
              <Link href="/" className="hover:text-gray-500 transition-colors">Home</Link>
              <Link href="/projects" className="hover:text-gray-500 transition-colors">Projects</Link>
              <Link href="/friends" className="hover:text-gray-500 transition-colors">Friends</Link>
              <Link href="/about" className="hover:text-gray-500 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-gray-500 transition-colors">Contact</Link>
            </div>
            <ThemeToggle />
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}