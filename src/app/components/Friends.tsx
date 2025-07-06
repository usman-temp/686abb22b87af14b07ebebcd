import { motion } from 'framer-motion';

const friends = [
  {
    name: 'John Doe',
    image: '/file.svg',
    experience: 'Full Stack Developer',
    skills: ['React', 'Node.js', 'AWS']
  },
  {
    name: 'Jane Smith',
    image: '/globe.svg',
    experience: 'UI/UX Designer',
    skills: ['Figma', 'Sketch', 'Photoshop']
  }
];

export default function Friends() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 dark:text-white">Friends & Colleagues</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {friends.map((friend, index) => (
            <motion.div
              key={friend.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-6 mb-4">
                <img
                  src={friend.image}
                  alt={friend.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">{friend.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{friend.experience}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {friend.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}