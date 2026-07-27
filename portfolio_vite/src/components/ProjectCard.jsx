import { useState } from 'react';

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        onClick={() => setShowModal(true)}
        className="relative w-full h-[430px] group cursor-pointer block no-underline"
      >
        {/* Backdrop Shadow Frame matching Home Page Card.jsx offset box concept */}
        <div className="absolute inset-0 bg-black rounded-2xl border-2 border-black translate-x-2.5 translate-y-2.5 transition-transform duration-300 group-hover:translate-x-3.5 group-hover:translate-y-3.5"></div>

        {/* Main Interactive White Card that flips to black on hover */}
        <div className="relative w-full h-full bg-white rounded-2xl border-2 border-black p-5 flex flex-col justify-between transition-all duration-300 group-hover:bg-black group-hover:text-white shadow-sm overflow-hidden z-10">
          
          {/* Top Image Showcase & Category Tag */}
          <div className="relative h-44 w-full rounded-xl overflow-hidden border-2 border-black bg-gray-100 shrink-0">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
          </div>

          {/* Idle State Content (Visible by default, disappears on hover matching Home Page card logic) */}
          <div className="flex flex-col justify-between flex-grow pt-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-hover:pointer-events-none">
            
            <div>
              <h3 className="text-lg font-extrabold text-black tracking-tight leading-snug line-clamp-1">
                {project.title}
              </h3>
              <p className="text-xs text-gray-600 line-clamp-2 mt-1.5 font-medium leading-relaxed">
                {project.shortDesc}
              </p>
            </div>
          </div>

          {/* Hover State Details Overlay (Smoothly fades in inside the card over the text area when hovered) */}
          <div className="absolute inset-x-5 top-[204px] bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex flex-col justify-between overflow-y-auto pr-1">
            <div>
              <span className="text-[9px] font-mono font-bold text-gray-400 tracking-widest uppercase mb-1 block">
                ✦ {project.role || "ARCHITECTURAL OVERVIEW"}
              </span>
              <p className="text-[11px] text-gray-200 leading-relaxed mb-2.5 font-normal line-clamp-3">
                {project.fullDesc || project.shortDesc}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-1 mb-2">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="text-[11px] text-gray-300 flex items-start gap-1.5 leading-tight">
                      <span className="text-white font-bold shrink-0">✓</span>
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Prompt - signature Read more ▷ (Always visible, flips to white on hover) */}
          <div className="pt-3 border-t border-gray-200 group-hover:border-gray-800 flex items-center justify-between text-black group-hover:text-white transition-colors shrink-0">
            <span className="text-xs font-extrabold uppercase tracking-wider">Explore Project Details</span>
            <span className="text-sm font-bold transition-transform group-hover:translate-x-1 animate-pulse">▷</span>
          </div>

        </div>
      </div>

      {/* Touch/Mobile & Desktop Deep-Dive Modal when tapped/clicked */}
      {showModal && (
        <div 
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-black border-2 border-black shadow-2xl relative max-h-[88vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-gray-600">
                  {project.role || "Full-Stack Developer"}
                </span>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm border-none cursor-pointer hover:bg-gray-800"
              >
                ✕
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-4">
              {project.title}
            </h3>

            <div className="rounded-2xl overflow-hidden border-2 border-black mb-6 max-h-[460px] bg-gray-100/80 p-2 flex items-center justify-center">
              <img src={project.image} alt={project.title} className="w-full h-auto max-h-[440px] object-contain rounded-xl mx-auto" />
            </div>

            <h4 className="text-sm font-extrabold uppercase tracking-widest text-black mb-2">
              Project Architecture &amp; Overview
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              {project.fullDesc || project.shortDesc}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
