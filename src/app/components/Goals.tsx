import { AcademicCapIcon, GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Goals() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Our Strategic Vision
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <AcademicCapIcon className="w-12 h-12 text-purple-600 mb-6" />
            <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Innovation Leadership</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Pioneer cutting-edge solutions that redefine industry standards and drive technological advancement.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <GlobeAltIcon className="w-12 h-12 text-blue-600 mb-6" />
            <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Global Impact</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Deliver transformative solutions that empower businesses worldwide to achieve digital excellence.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CodeBracketIcon className="w-12 h-12 text-green-600 mb-6" />
            <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Sustainable Growth</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Foster long-term success through scalable architectures and future-proof development practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}