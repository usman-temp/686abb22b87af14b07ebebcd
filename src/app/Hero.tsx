import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-gray-900 dark:text-white mb-6 text-center"
        >
          Creative Digital Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto"
        >
          Building immersive experiences with modern web technologies
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}