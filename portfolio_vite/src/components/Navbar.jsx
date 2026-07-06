import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-5 bg-transparent text-black z-[100] relative">
      <div className="flex justify-between items-center">
        
        <Link to="/" className="text-xl font-bold hover:text-gray-500 transition-colors cursor-pointer">
          Portfolio
        </Link>
        
        <div className="flex space-x-10 text-lg">
          
          
          <div className="text-left">
            <div className="h-[2px] w-[110px] bg-black"></div>
            
            <Link to="/projects" className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors">
              <span className="text-sm">My projects</span>
              <span className="text-sm">➚</span>
            </Link>
          </div>

          <div className="text-left">
            <div className="h-[2px] w-[110px] bg-black"></div>
            
            <Link to="/myphoto" className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors">
              <span className="text-sm">My Photos</span>
              <span className="text-sm">➚</span>
            </Link>
          </div>

          <div className="text-left">
            <div className="h-[2px] w-[110px] bg-black"></div>
            
            <Link to="https://github.com/PleumW" className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors">
              <span className="text-sm">Github</span>
              <span className="text-sm">➚</span>
            </Link>
          </div>

          

          <div className="text-left">
            <div className="h-[2px] w-[110px] bg-black"></div>
            <Link to="/about" className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors">
              <span className="text-sm">About Me</span>
              <span className="text-sm">➚</span>
            </Link>
          </div>

     
          <div className="text-left">
            <div className="h-[2px] w-[110px] bg-black"></div>
            <Link to="/contact" className="flex justify-between mt-1 text-black hover:text-gray-500 transition-colors">
              <span className="text-sm">Contact</span>
              <span className="text-sm">➚</span>
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}  

export default Navbar;