import { useState, useMemo } from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import Contact from "./Contact";
import { projectsData } from "../data/projectsData";

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Full-Stack Web App",
    "UX/UI Design",
    "Frontend Architecture",
    "AI & Web Development",
    "Web Development"
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        (activeCategory === "Web Development" && project.tags.some(t => t.toLowerCase().includes("react")));

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen w-full bg-[#e8e7e7] text-black selection:bg-black selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Header Hero for Projects Page - matching Hero.jsx #F5F5F5 monochrome aesthetic exactly */}
        <div className="pt-20 pb-16 md:pt-28 md:pb-24 bg-[#e8e7e7] text-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black tracking-tight mb-4">
              My Projects
            </h1>
            <p className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
              Explore the web applications, interactive UI prototypes, and systems built by <strong className="text-black font-extrabold">Punnapob Wisarat</strong>. Hover over any card below to instantly view architectural specs and highlights.
            </p>

            {/* Swiss Editorial Quick Stats Grid */}

          </div>
        </div>

        {/* Horizontal divider positioned right at the 0px color boundary between #F5F5F5 and #e8e7e7 */}
        <div className="w-full h-[2px] bg-black"></div>

        {/* Filter Controls & Search inside #e8e7e7 background */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-black">

            {/* Category Tabs - high contrast monochrome pill buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 border-2 border-black cursor-pointer uppercase tracking-wider whitespace-nowrap ${activeCategory === cat
                    ? "bg-black text-white shadow-sm scale-105"
                    : "bg-white text-black hover:bg-black hover:text-white"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box - crisp monochrome styling */}
            <div className="w-full lg:w-80 relative">
              <input
                type="text"
                placeholder="Search projects, stack (e.g. React)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-3 rounded-2xl bg-white border-2 border-black text-black text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-xs"
              />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4 text-black absolute left-3.5 top-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-3 text-black hover:text-gray-600 text-xs font-extrabold border-none bg-transparent cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Active Filter Summary */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-gray-700 font-semibold gap-2">
            <p>
              Showing <strong className="text-black font-extrabold">{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''} {activeCategory !== "All" && `in "${activeCategory}"`} {searchQuery && `matching "${searchQuery}"`}
            </p>
            <span className="text-black font-bold">
              💡 Tip: Hover over any card below with your mouse to reveal highlights
            </span>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="my-16 bg-white rounded-3xl p-12 text-center border-2 border-black max-w-md mx-auto shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-3xl mx-auto mb-4 border border-black font-bold">
                ✕
              </div>
              <h3 className="text-2xl font-extrabold text-black mb-2">No Projects Found</h3>
              <p className="text-sm text-gray-600 mb-6 font-medium leading-relaxed">
                We couldn&apos;t find any projects matching your current category or keyword selection.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="px-6 py-3 rounded-2xl bg-black text-white hover:bg-white hover:text-black border-2 border-black text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section at the bottom */}
      <Contact />
    </div>
  );
}

export default ProjectsPage;