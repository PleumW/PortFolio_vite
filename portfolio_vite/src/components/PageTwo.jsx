import Card from "./card";
import { Link } from "react-router-dom";

function PageTwo() {
  return (
    <div className="bg-[#e8e7e7] w-full overflow-hidden text-black">
      {/* Top horizontal black divider line positioned right at the 0px color boundary */}
      <div className="w-full h-[2px] bg-black"></div>

      {/* Main split content section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 pb-12 flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 items-center lg:items-start">

        {/* Left Column: The Specialized Domain Tree - elevating the original vertical lines concept */}
        <div className="flex flex-col items-start w-full lg:w-auto shrink-0">

          <div className="flex space-x-6 sm:space-x-8 items-center group cursor-pointer">
            <div className="w-[2px] h-20 sm:h-24 bg-black relative flex items-center">
              <div className="absolute -left-[5px] w-3 h-3 bg-black rounded-full transition-transform group-hover:scale-125"></div>
            </div>
            <div className="py-2 transition-transform duration-300 group-hover:translate-x-1.5">
              <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase block">Domain 01</span>
              <h3 className="text-base sm:text-lg font-extrabold text-black tracking-tight mt-0.5">Web Development</h3>
              <p className="text-xs font-semibold text-gray-600 mt-0.5">Full-Stack &amp; Frontend Architecture</p>
            </div>
          </div>

          <div className="w-6 h-2 bg-black rounded-full ml-[-2px] my-1"></div>

          <div className="flex space-x-6 sm:space-x-8 items-center group cursor-pointer">
            <div className="w-[2px] h-20 sm:h-24 bg-black relative flex items-center">
              <div className="absolute -left-[5px] w-3 h-3 bg-black rounded-full transition-transform group-hover:scale-125"></div>
            </div>
            <div className="py-2 transition-transform duration-300 group-hover:translate-x-1.5">
              <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase block">Domain 02</span>
              <h3 className="text-base sm:text-lg font-extrabold text-black tracking-tight mt-0.5">UX UI Design</h3>
              <p className="text-xs font-semibold text-gray-600 mt-0.5">Figma Systems &amp; Prototyping</p>
            </div>
          </div>

          <div className="w-6 h-2 bg-black rounded-full ml-[-2px] my-1"></div>

          <div className="flex space-x-6 sm:space-x-8 items-center group cursor-pointer">
            <div className="w-[2px] h-20 sm:h-24 bg-black relative flex items-center">
              <div className="absolute -left-[5px] w-3 h-3 bg-black rounded-full transition-transform group-hover:scale-125"></div>
            </div>
            <div className="py-2 transition-transform duration-300 group-hover:translate-x-1.5">
              <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase block">Domain 03</span>
              <h3 className="text-base sm:text-lg font-extrabold text-black tracking-tight mt-0.5">Photography</h3>
              <p className="text-xs font-semibold text-gray-600 mt-0.5">Visual Perspectives &amp; Composition</p>
            </div>
          </div>

        </div>

        {/* Right / Center Section: Editorial Summary & Square Cards */}
        <div className="flex flex-col items-center justify-center w-full">
          <Card />

        </div>

      </div>

      {/* Bottom Skills Timeline Flow - preserving exact ↓ bouncing circle & connected dots */}
      <div className="w-full px-6 sm:px-12  pb-16  mt-8 ">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 relative">


          {/* Skill 1: Visual Studio Code */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="px-3.5 py-1.5 rounded-xl bg-white border-2 border-black font-extrabold text-xs text-black shadow-xs group-hover:bg-black group-hover:text-white transition-all">
              Visual Studio
            </div>
            <div className="w-3.5 h-3.5 bg-black rounded-full mt-2 ring-4 ring-white group-hover:scale-125 transition-transform"></div>
          </div>

          {/* Horizontal Connecting Line */}
          <div className="hidden lg:block flex-1 h-[2px] bg-black mx-2"></div>

          {/* Skill 2: Tailwind CSS */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="px-3.5 py-1.5 rounded-xl bg-white border-2 border-black font-extrabold text-xs text-black shadow-xs group-hover:bg-black group-hover:text-white transition-all">
              Tailwind CSS
            </div>
            <div className="w-3.5 h-3.5 bg-black rounded-full mt-2 ring-4 ring-white group-hover:scale-125 transition-transform"></div>
          </div>

          {/* Horizontal Connecting Line */}
          <div className="hidden lg:block flex-1 h-[2px] bg-black mx-2"></div>

          {/* Skill 3: Vite */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="px-3.5 py-1.5 rounded-xl bg-white border-2 border-black font-extrabold text-xs text-black shadow-xs group-hover:bg-black group-hover:text-white transition-all">
              Vite
            </div>
            <div className="w-3.5 h-3.5 bg-black rounded-full mt-2 ring-4 ring-white group-hover:scale-125 transition-transform"></div>
          </div>

          {/* Horizontal Connecting Line */}
          <div className="hidden lg:block flex-1 h-[2px] bg-black mx-2"></div>

          {/* Skill 4: React */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="px-3.5 py-1.5 rounded-xl bg-white border-2 border-black font-extrabold text-xs text-black shadow-xs group-hover:bg-black group-hover:text-white transition-all">
              React
            </div>
            <div className="w-3.5 h-3.5 bg-black rounded-full mt-2 ring-4 ring-white group-hover:scale-125 transition-transform"></div>
          </div>

          {/* Horizontal Connecting Line */}
          <div className="hidden lg:block flex-1 h-[2px] bg-black mx-2"></div>

          {/* Skill 5: Vue */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="px-3.5 py-1.5 rounded-xl bg-white border-2 border-black font-extrabold text-xs text-black shadow-xs group-hover:bg-black group-hover:text-white transition-all">
              Vue.js
            </div>
            <div className="w-3.5 h-3.5 bg-black rounded-full mt-2 ring-4 ring-white group-hover:scale-125 transition-transform"></div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default PageTwo;