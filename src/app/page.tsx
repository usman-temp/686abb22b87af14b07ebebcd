import Hero from './components/Hero';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <Projects />
    </main>
  );
}