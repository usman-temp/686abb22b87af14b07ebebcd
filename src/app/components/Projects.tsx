import { motion } from 'framer-motion';
import { CodeBracketIcon, WindowIcon } from '@heroicons/react/24/outline';

type Project = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Next.js and Stripe',
      stack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#'
    }
    // Add more projects
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-4">
              <WindowIcon className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                  Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}