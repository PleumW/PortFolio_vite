import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  const [activeModal, setActiveModal] = useState(null);

  const projectDetails = {
    web: {
      title: "Web Development Projects",
      subtitle: "01 // FULL-STACK ARCHITECTURE",
      desc: "Built high-performance corporate web applications using React 19, Vite, Tailwind CSS v4, and Node.js. Optimized for 99% Lighthouse scores, real-time data flow, and responsive mobile UX.",
      tags: ["React 19", "Vite", "Tailwind v4", "Node.js", "REST APIs"],
      link: "/projects"
    },
    ux: {
      title: "UX / UI Design Case Studies",
      subtitle: "02 // HUMAN-CENTERED DESIGN",
      desc: "Designed over 45+ high-fidelity Figma prototypes and scalable design systems. Focused on WCAG accessibility compliance, interactive micro-animations, and seamless user onboarding flows.",
      tags: ["Figma Design", "Prototyping", "Design Systems", "User Research"],
      link: "/projects"
    },
    photo: {
      title: "Photography & Visual Arts",
      subtitle: "03 // CREATIVE PERSPECTIVES",
      desc: "A curated gallery of portraiture, architectural landscapes, and visual storytelling. Demonstrating composition, lighting, and creative direction beyond code.",
      tags: ["Portraiture", "Landscapes", "Composition", "Color Grading"],
      link: "/myphoto"
    }
  };

  return (
    <>
      {/* Responsive container for the 3 signature square cards */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 sm:gap-10 pt-6 pb-4 w-full">
        
        {/* Card 1: Web Development */}
        <Link 
          to="/projects"
          onClick={(e) => {
            if (window.innerWidth < 768) {
              e.preventDefault();
              setActiveModal('web');
            }
          }}
          className="relative w-[220px] h-[220px] group cursor-pointer block no-underline shrink-0"
        >
          {/* Backdrop Shadow Frame */}
          <div className="absolute inset-0 bg-black rounded-2xl border-2 border-black translate-x-2.5 translate-y-2.5 transition-transform duration-300 group-hover:translate-x-3.5 group-hover:translate-y-3.5"></div>

          {/* Interactive Square Card */}
          <div className="relative w-full h-full bg-white rounded-2xl border-2 border-black p-5 flex flex-col justify-between transition-all duration-300 group-hover:bg-black group-hover:text-white shadow-sm overflow-hidden z-10">
            
            {/* Idle State Content (Visible by default, disappears on hover according to user request) */}
            <div className="flex flex-col justify-between flex-grow transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-hover:pointer-events-none">
              
              {/* Top Bar: Number Tag & Icon */}
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400">
                  01 // CODE
                </span>
                <div className="w-8 h-8 rounded-lg bg-gray-100 border border-black/20 flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
              </div>

              {/* Card Title & Subtitle */}
              <div className="mb-2">
                <h4 className="text-lg font-extrabold text-black tracking-tight leading-snug">
                  Web Development
                </h4>
                <p className="text-[11px] text-gray-500 font-medium mt-1">
                  Full-Stack &amp; Frontend Apps
                </p>
              </div>

            </div>

            {/* Hover State Details Overlay (Fades in when mouse hovers over card, replacing the title) */}
            <div className="absolute inset-x-5 top-5 bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex flex-col justify-center">
              <span className="text-[9px] font-mono font-bold text-indigo-400 tracking-widest uppercase mb-1 block">
                ✦ KEY HIGHLIGHTS
              </span>
              <p className="text-[11px] text-gray-200 leading-relaxed mb-3 font-normal line-clamp-3">
                React 19, Vite &amp; Tailwind architecture with REST APIs, real-time data &amp; 99% Lighthouse UX.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 rounded bg-gray-800 text-[9px] font-mono text-gray-200 border border-gray-700">React 19</span>
                <span className="px-1.5 py-0.5 rounded bg-gray-800 text-[9px] font-mono text-gray-200 border border-gray-700">Vite</span>
                <span className="px-1.5 py-0.5 rounded bg-gray-800 text-[9px] font-mono text-gray-200 border border-gray-700">Tailwind</span>
              </div>
            </div>

            {/* Bottom Prompt - signature Read more ▷ (Always visible, flips color on hover) */}
            <div className="pt-3 border-t border-gray-200 group-hover:border-gray-800 flex items-center justify-between text-black group-hover:text-white transition-colors shrink-0">
              <span className="text-xs font-extrabold uppercase tracking-wider">Read more</span>
              <span className="text-sm font-bold transition-transform group-hover:translate-x-1 animate-pulse">▷</span>
            </div>

          </div>
        </Link>


        {/* Card 2: UX / UI Design */}
        <Link 
          to="/projects"
          onClick={(e) => {
            if (window.innerWidth < 768) {
              e.preventDefault();
              setActiveModal('ux');
            }
          }}
          className="relative w-[220px] h-[220px] group cursor-pointer block no-underline shrink-0"
        >
          <div className="absolute inset-0 bg-black rounded-2xl border-2 border-black translate-x-2.5 translate-y-2.5 transition-transform duration-300 group-hover:translate-x-3.5 group-hover:translate-y-3.5"></div>

          <div className="relative w-full h-full bg-white rounded-2xl border-2 border-black p-5 flex flex-col justify-between transition-all duration-300 group-hover:bg-black group-hover:text-white shadow-sm overflow-hidden z-10">
            
            {/* Idle State Content */}
            <div className="flex flex-col justify-between flex-grow transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-hover:pointer-events-none">
              
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400">
                  02 // DESIGN
                </span>
                <div className="w-8 h-8 rounded-lg bg-gray-100 border border-black/20 flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>
                </div>
              </div>

              <div className="mb-2">
                <h4 className="text-lg font-extrabold text-black tracking-tight leading-snug">
                  UX UI Design
                </h4>
                <p className="text-[11px] text-gray-500 font-medium mt-1">
                  Figma Systems &amp; Prototyping
                </p>
              </div>

            </div>

            {/* Hover State Details Overlay */}
            <div className="absolute inset-x-5 top-5 bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex flex-col justify-center">
              <span className="text-[9px] font-mono font-bold text-purple-400 tracking-widest uppercase mb-1 block">
                ✦ KEY HIGHLIGHTS
              </span>
              <p className="text-[11px] text-gray-200 leading-relaxed mb-3 font-normal line-clamp-3">
                45+ high-fidelity mobile &amp; web screens with WCAG accessibility &amp; micro-interactions.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 rounded bg-gray-800 text-[9px] font-mono text-gray-200 border border-gray-700">Figma</span>
                <span className="px-1.5 py-0.5 rounded bg-gray-800 text-[9px] font-mono text-gray-200 border border-gray-700">Design Sys</span>
                <span className="px-1.5 py-0.5 rounded bg-gray-800 text-[9px] font-mono text-gray-200 border border-gray-700">Prototypes</span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200 group-hover:border-gray-800 flex items-center justify-between text-black group-hover:text-white transition-colors shrink-0">
              <span className="text-xs font-extrabold uppercase tracking-wider">Read more</span>
              <span className="text-sm font-bold transition-transform group-hover:translate-x-1 animate-pulse">▷</span>
            </div>

          </div>
        </Link>


        {/* Card 3: Photography */}
        <Link 
          to="/myphoto" 
          className="relative w-[220px] h-[220px] group cursor-pointer block no-underline shrink-0"
        >
          <div className="absolute inset-0 bg-black rounded-2xl border-2 border-black translate-x-2.5 translate-y-2.5 transition-transform duration-300 group-hover:translate-x-3.5 group-hover:translate-y-3.5"></div>

          <div className="relative w-full h-full bg-white rounded-2xl border-2 border-black p-5 flex flex-col justify-between transition-all duration-300 group-hover:bg-black group-hover:text-white shadow-sm overflow-hidden z-10">
            
            {/* Idle State Content */}
            <div className="flex flex-col justify-between flex-grow transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-hover:pointer-events-none">
              
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400">
                  03 // LENS
                </span>
                <div className="w-8 h-8 rounded-lg bg-gray-100 border border-black/20 flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  </svg>
                </div>
              </div>

              <div className="mb-2">
                <h4 className="text-lg font-extrabold text-black tracking-tight leading-snug">
                  Photography
                </h4>
                <p className="text-[11px] text-gray-500 font-medium mt-1">
                  Visual Perspectives &amp; Art
                </p>
              </div>

            </div>

            {/* Hover State Details Overlay */}
            <div className="absolute inset-x-5 top-5 bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex flex-col justify-center">
              <span className="text-[9px] font-mono font-bold text-pink-400 tracking-widest uppercase mb-1 block">
                ✦ KEY HIGHLIGHTS
              </span>
              <p className="text-[11px] text-gray-200 leading-relaxed mb-3 font-normal line-clamp-3">
                Curated gallery of portraiture, architectural composition, lighting &amp; visual storytelling.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 rounded bg-gray-800 text-[9px] font-mono text-gray-200 border border-gray-700">Portrait</span>
                <span className="px-1.5 py-0.5 rounded bg-gray-800 text-[9px] font-mono text-gray-200 border border-gray-700">Landscape</span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200 group-hover:border-gray-800 flex items-center justify-between text-black group-hover:text-white transition-colors shrink-0">
              <span className="text-xs font-extrabold uppercase tracking-wider">Read more</span>
              <span className="text-sm font-bold transition-transform group-hover:translate-x-1 animate-pulse">▷</span>
            </div>

          </div>
        </Link>

      </div>

      {/* Mobile/Touch accessible popup when tapped without hover */}
      {activeModal && (
        <div 
          onClick={() => setActiveModal(null)}
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xs flex items-center justify-center p-6"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-md w-full p-6 text-black relative border-2 border-black shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
              <span className="text-xs font-mono font-bold text-gray-500">
                {projectDetails[activeModal].subtitle}
              </span>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm border-none cursor-pointer hover:bg-gray-800"
              >
                ✕
              </button>
            </div>
            
            <h3 className="text-2xl font-extrabold tracking-tight mb-3 text-black">
              {projectDetails[activeModal].title}
            </h3>
            
            <p className="text-sm text-gray-700 leading-relaxed mb-6 font-medium">
              {projectDetails[activeModal].desc}
            </p>
            
            <div className="mb-6">
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-2.5">
                Key Technologies &amp; Methods:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {projectDetails[activeModal].tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-gray-100 border-2 border-black text-xs rounded-lg font-extrabold text-black">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to={projectDetails[activeModal].link}
              onClick={() => setActiveModal(null)}
              className="block w-full text-center py-3.5 bg-black text-white font-extrabold text-sm rounded-xl no-underline hover:bg-gray-800 transition-colors shadow-md border-2 border-black"
            >
              Explore Full Projects Catalog ➚
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;