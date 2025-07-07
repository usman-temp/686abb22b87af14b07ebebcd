import Link from 'next/link';
import { FiHome, FiFile, FiUsers, FiGlobe } from 'react-icons/fi';

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-500">
              <FiHome className="text-lg" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/projects" className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-500">
              <FiFile className="text-lg" />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/friends" className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-500">
              <FiUsers className="text-lg" />
              <span>Friends</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-500">
              <FiGlobe className="text-lg" />
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}