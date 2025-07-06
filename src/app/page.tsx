import Hero from './Hero';
import Projects from './Projects';
import About from './components/About';
import Contact from './components/Contact';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <div className="py-12 text-center bg-gray-50 dark:bg-gray-800">
        <h3 className="text-2xl font-semibold mb-4 dark:text-white">Meet My Friends</h3>
        <Link
          href="/friends"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Friends
        </Link>
      </div>
    </main>
  );
}