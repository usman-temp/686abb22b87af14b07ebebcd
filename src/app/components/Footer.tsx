export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <img src="/globe.svg" alt="Website" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <img src="/file.svg" alt="Blog" className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
            <p className="text-sm mt-1">Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}