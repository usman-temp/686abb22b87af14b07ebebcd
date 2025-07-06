import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center dark:text-white">Contact Me</h2>
        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}