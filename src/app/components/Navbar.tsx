import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/window.svg" 
              alt="Logo" 
              width={40} 
              height={40}
              className="hover:opacity-75 transition-opacity"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Image 
                src="/globe.svg" 
                alt="Language" 
                width={24} 
                height={24}
                className="dark:invert"
              />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}