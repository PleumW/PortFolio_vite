import Navbar from './Navbar';
import PageThree from './Pagethree';
import Contact from './Contact';
import profilePic from '../assets/14668415-9D2B-47EA-9A6D-FBC33B1BC7C8-Photoroom.png';

function About() {
  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] text-slate-900 selection:bg-indigo-600 selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />

        {/* About Hero */}
        <div className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="w-full lg:w-7/12">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 uppercase tracking-widest">
                Developer Profile • Prince of Songkla University
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mt-4 mb-6 text-slate-900">
                About Punnapob Wisarat
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                I am a dedicated 4th-year university student at <strong className="text-slate-900">Prince of Songkla University (PSU)</strong>, specializing in modern web development, frontend architecture, and UX/UI design. My mission is to bridge the gap between engineering robustness and human-centered design.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                Over the past 4 years, I have honed my skills in <strong className="text-indigo-600">React 19, Vite, Tailwind CSS, Node.js, and Figma</strong>. Whether working independently on full-stack applications or leading collaborative senior capstone projects, I strive for clean code, responsive layouts, and zero-compromise performance.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Degree</h4>
                  <p className="text-sm font-bold text-slate-800 mt-1">B.S. in Computer Science / IT</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">University</h4>
                  <p className="text-sm font-bold text-slate-800 mt-1">Prince of Songkla University</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Availability</h4>
                  <p className="text-sm font-bold text-emerald-600 mt-1">Full-Time / Internship 2026</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12 flex justify-center">
              <div className="relative w-72 sm:w-80 h-80 sm:h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-indigo-100 to-white border border-slate-200 shadow-xl flex items-end justify-center">
                <img src={profilePic} alt="Punnapob Profile" className="w-full h-full object-contain object-bottom" />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-900/90 to-transparent text-white text-center">
                  <p className="font-extrabold text-base">Punnapob Wisarat</p>
                  <p className="text-xs text-indigo-300">PSU Class of 2026</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Experience Timeline component inclusion */}
        <PageThree />
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default About;
