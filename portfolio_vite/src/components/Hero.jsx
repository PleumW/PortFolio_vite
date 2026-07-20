import { Link } from 'react-router-dom';
import profilePic from '../assets/14668415-9D2B-47EA-9A6D-FBC33B1BC7C8-Photoroom.png';

function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#F5F5F5] text-black">

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Column: Text & CTAs */}
          <div className="w-full lg:w-7/12 text-left flex flex-col items-start">

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-black tracking-tight leading-[1.08] mb-4">
              Hello, I&apos;m <br />
              <span className="text-black underline decoration-black decoration-4 underline-offset-8">
                PUNNAPOB WISARAT
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-gray-700 mb-8 max-w-2xl leading-relaxed">
              A passionate <strong className="text-black font-bold">Frontend / Full-Stack Developer</strong> &amp; <strong className="text-black font-bold">UX/UI Designer</strong>. Crafting pixel-perfect, highly responsive web applications that combine robust engineering with minimalist visual elegance.
            </p>

            {/* Action Buttons - matching PageTwo & Contact theme */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                to="/projects"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-2xl bg-black text-white hover:bg-white hover:text-black border-2 border-black font-bold text-sm sm:text-base transition-all duration-300 shadow-sm flex items-center justify-center gap-2.5 group no-underline"
              >
                <span>Explore My Projects</span>
                <span className="group-hover:translate-x-1 transition-transform">➚</span>
              </Link>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-center px-8 py-4 rounded-2xl bg-white text-black border-2 border-black hover:bg-black hover:text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-sm flex items-center justify-center gap-2 no-underline"
              >
                <span>Download CV</span>
                <span>↓</span>
              </a>
            </div>

            {/* University summary */}
            <div className="mt-10 pt-6 border-t-[2px] border-black w-full flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-gray-700 font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse"></span>
                <span>Prince of Songkla University Suratthani Campus</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Showcase & Floating Cards */}
          <div className="w-full lg:w-5/12 flex items-center justify-center relative">

            {/* Main Image Frame Container */}
            <div className="relative w-72 sm:w-80 md:w-96 h-80 sm:h-96 md:h-[430px] flex items-center justify-center">

              {/* Decorative Backdrop shape */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-[#e8e7e7] border-2 border-black rotate-6 scale-95 transition-transform duration-500 hover:rotate-3"></div>

              {/* Inner Card */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white border-2 border-black shadow-lg flex items-end justify-center group">
                <img
                  src={profilePic}
                  alt="Punnapob Wisarat Profile"
                  className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />

                {/* Name Overlay on photo bottom */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-black/90 text-white text-center sm:text-left border-t-2 border-black">
                  <p className="font-extrabold text-lg sm:text-xl leading-tight">Punnapob Wisarat</p>
                  <p className="text-xs text-gray-300 font-semibold">Frontend • UX/UI • Full-Stack</p>
                </div>
              </div>

              {/* Floating Tech Card 1: React & Vite */}
              <div className="absolute -top-6 -left-6 sm:-left-8 bg-white rounded-2xl p-3.5 shadow-md border-2 border-black flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-bold text-black">React &amp; Vite</p>
                  <p className="text-[11px] text-gray-600 font-medium">High Performance UI</p>
                </div>
              </div>



            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
