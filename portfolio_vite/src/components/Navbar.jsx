import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-5 bg-transparent text-black z-[100] relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Original Logo/Title */}
        <Link to="/" className="text-xl font-bold hover:text-gray-500 transition-colors cursor-pointer no-underline text-black">
          Portfolio
        </Link>

        {/* Desktop / Tablet Navigation - Exact Original Structure & Style */}
        <div className="hidden lg:flex space-x-6 xl:space-x-10 text-lg">

          <div className="text-left">
            <div className="h-[2px] w-[110px] bg-black"></div>
            <Link to="/projects" className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors no-underline">
              <span className="text-sm">My projects</span>
              <span className="text-sm">➚</span>
            </Link>
          </div>

          <div className="text-left">
            <div className="h-[2px] w-[110px] bg-black"></div>
            <Link to="/myphoto" className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors no-underline">
              <span className="text-sm">My Photos</span>
              <span className="text-sm">➚</span>
            </Link>
          </div>

          <div className="text-left">
            <div className="h-[2px] w-[110px] bg-black"></div>
            <a href="https://github.com/PleumW" target="_blank" rel="noopener noreferrer" className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors no-underline">
              <span className="text-sm">Github</span>
              <span className="text-sm">➚</span>
            </a>
          </div>

          <div className="text-left">
            <div className="h-[2px] w-[110px] bg-black"></div>
            <Link to="/about" className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors no-underline">
              <span className="text-sm">About Me</span>
              <span className="text-sm">➚</span>
            </Link>
          </div>



        </div>

        {/* Mobile Hamburger Button (Responsive support) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-2 text-black hover:text-gray-600 focus:outline-none bg-transparent border-none cursor-pointer"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer - Preserves Exact Original Design (Black Line + Link with ➚) */}
      {isOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-gray-300 bg-[#F5F5F5] sm:bg-transparent transition-all duration-300">
          <div className="flex flex-col space-y-4 max-w-xs mx-auto">

            <div className="text-left">
              <div className="h-[2px] w-full bg-black"></div>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors no-underline py-1"
              >
                <span className="text-sm font-bold">My projects</span>
                <span className="text-sm">➚</span>
              </Link>
            </div>

            <div className="text-left">
              <div className="h-[2px] w-full bg-black"></div>
              <Link
                to="/myphoto"
                onClick={() => setIsOpen(false)}
                className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors no-underline py-1"
              >
                <span className="text-sm font-bold">My Photos</span>
                <span className="text-sm">➚</span>
              </Link>
            </div>

            <div className="text-left">
              <div className="h-[2px] w-full bg-black"></div>
              <a
                href="https://github.com/PleumW"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors no-underline py-1"
              >
                <span className="text-sm font-bold">Github</span>
                <span className="text-sm">➚</span>
              </a>
            </div>

            <div className="text-left">
              <div className="h-[2px] w-full bg-black"></div>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors no-underline py-1"
              >
                <span className="text-sm font-bold">About Me</span>
                <span className="text-sm">➚</span>
              </Link>
            </div>



          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;