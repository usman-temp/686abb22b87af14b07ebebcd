import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'E-commerce Platform', tech: 'Next.js · Tailwind · Node.js' },
  { id: 2, title: 'AI Dashboard', tech: 'React · TensorFlow · Express' },
  { id: 3, title: 'Social Network', tech: 'GraphQL · MongoDB · AWS' },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}