import Navbar from "./Navbar";
import Photo from "./Photo";
import Contact from "./Contact";

function Myphoto() {
  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] text-slate-900 selection:bg-indigo-600 selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Header Section for Photos */}
        <div className="pt-32 pb-12 bg-white border-b border-slate-200 text-center">
          <div className="max-w-7xl mx-auto px-6">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-3">
              My Photos
            </h1>
          </div>
        </div>

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