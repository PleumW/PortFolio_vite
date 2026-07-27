import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import Contact from "./Contact";
import { projectsData } from "../data/projectsData";

function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-[#e8e7e7] text-black selection:bg-black selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Header Hero for Projects Page */}
        <div className="pt-20 pb-16 md:pt-28 md:pb-24 bg-[#e8e7e7] text-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black tracking-tight mb-4">
              My Projects
            </h1>
          </div>
        </div>

        {/* Horizontal divider */}
        <div className="w-full h-[2px] bg-black"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-gray-700 font-semibold gap-2">
            <p>
              Showing <strong className="text-black font-extrabold">{projectsData.length}</strong> project{projectsData.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section at the bottom */}
      <Contact />
    </div>
  );
}

export default ProjectsPage;