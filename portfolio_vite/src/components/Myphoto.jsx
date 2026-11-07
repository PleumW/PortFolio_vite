import Navbar from "./Navbar";
import Photo from "./Photo";
import Contact from "./Contact";
import ScrollReveal from "./ScrollReveal";

function Myphoto() {
  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-white selection:bg-indigo-600 selection:text-white flex flex-col justify-between transition-colors duration-300">
      <div>
        <Navbar />

        {/* Header Section for Photos */}
        <ScrollReveal direction="up" threshold={0.05}>
          <div className="pt-32 pb-12 bg-white dark:bg-[#1E293B] border-b border-slate-200 dark:border-slate-700 text-center transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-3">
                My Photos
              </h1>
            </div>
          </div>
        </ScrollReveal>

        {/* Photo Gallery Component */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Photo />
        </div>
      </div>

      <Contact />
    </div>
  );
}

export default Myphoto;