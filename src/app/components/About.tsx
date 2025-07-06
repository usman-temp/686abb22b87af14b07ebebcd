import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 dark:text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Experience</h3>
            <p className="text-gray-600 dark:text-gray-300">
              5+ years building web applications with modern technologies...
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Skills</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((skill) => (
                <li key={skill}>✓ {skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}