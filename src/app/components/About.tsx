export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
              Crafting Digital Excellence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We transform complex challenges into seamless digital experiences. With 8+ years of expertise, our team delivers solutions that marry form and function.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Full-stack development expertise</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Award-winning UI/UX design</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="/globe.svg"
              alt="About us"
              className="relative rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}