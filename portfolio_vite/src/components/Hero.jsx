import { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/Profile.png';
import ScrollReveal from './ScrollReveal';

function Hero() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] pb-16 md:pt-24 md:pb-24 flex items-center justify-center overflow-hidden bg-[#F5F5F5] dark:bg-[#0F172A] text-black dark:text-white transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Column: Text & CTAs */}
          <div className="w-full lg:w-7/12 text-left flex flex-col items-start">

            {/* Mobile Profile Image (Visible on mobile/tablet, placed ABOVE text) */}
            <ScrollReveal direction="up" duration={600} className="flex lg:hidden w-full justify-start mb-6">
              <div className="relative w-36 h-40 sm:w-44 sm:h-48 rounded-3xl overflow-hidden border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <img
                  src={profilePic}
                  alt="Punnapob Wisarat Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal direction="up" duration={700} className="w-full">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-black dark:text-white tracking-tight leading-[1.15] mb-4">
                Hello, I&apos;m <br />
                <span className="break-words">
                  PUNNAPOB WISARAT
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150} duration={700}>
              <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                I am punnapob wisarat nickname pleum from Information Technology student specializing in front-end development (React, Tailwind CSS, Vite) and UI wireframing (Figma). Familiar with back-end integration and web fundamentals. Proven ability to work effectively in team environments through part-time and photography experience, with a strong drive for continuous learning.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal direction="up" delay={250} duration={700}>
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  to="/projects"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border-2 border-black dark:border-white font-bold text-sm sm:text-base transition-all duration-300 shadow-sm flex items-center justify-center gap-2.5 group no-underline"
                >
                  <span>Explore My Projects</span>
                  <span className="group-hover:translate-x-1 transition-transform">➚</span>
                </Link>

                <button
                  onClick={() => setIsCvModalOpen(true)}
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-2xl bg-white dark:bg-transparent text-black dark:text-white border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-bold text-sm sm:text-base transition-all duration-300 shadow-sm flex items-center justify-center gap-2 no-underline"
                >
                  <span>Download CV</span>
                  <span>↓</span>
                </button>
              </div>
            </ScrollReveal>

            {/* University summary */}
            <ScrollReveal direction="up" delay={350} duration={700}>
              <div className="mt-10 pt-6 border-t-[2px] border-black dark:border-white w-full flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-gray-700 dark:text-gray-400 font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-black dark:bg-white animate-pulse"></span>
                  <span>Prince of Songkla University Suratthani Campus</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Profile Image (Desktop) */}
          <ScrollReveal direction="left" delay={200} duration={800} className="hidden lg:flex w-full lg:w-5/12 items-center justify-center relative">
            <div className="relative w-80 sm:w-96 md:w-[28rem] lg:w-[30rem] h-[400px] sm:h-[480px] md:h-[560px] lg:h-[600px] flex items-center justify-center">

              {/* Decorative Backdrop */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-[#e8e7e7] dark:bg-[#1E293B] border-2 border-black dark:border-white rotate-6 scale-95 transition-transform duration-500 hover:rotate-3"></div>

              {/* Inner Card */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white dark:bg-[#1E293B] border-2 border-black dark:border-white shadow-lg flex items-end justify-center group">
                <img
                  src={profilePic}
                  alt="Punnapob Wisarat Profile"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Name Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-black/90 text-white text-center sm:text-left border-t-2 border-black">
                  <p className="font-extrabold text-lg sm:text-xl leading-tight">Punnapob Wisarat</p>
                  <p className="text-xs text-gray-300 font-semibold">Nickname : Pleum</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* CV Modal */}
      {isCvModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#1E293B] border-2 border-black dark:border-white rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transform transition-all">
            <button
              onClick={() => setIsCvModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-black hover:text-white border-2 border-transparent hover:border-black transition-all font-bold text-black dark:text-white"
            >
              ✕
            </button>
            <h3 className="text-2xl font-black mb-2 text-black dark:text-white text-center">เลือกภาษาที่ต้องการ</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium text-sm text-center">อยากดูเรซูเม่แบบไหนครับ</p>
            <div className="flex flex-col gap-3">
              <a
                href="/resume-th.pdf"
                download="Resume_Punnapob_TH.pdf"
                onClick={() => setIsCvModalOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-black dark:bg-white text-white dark:text-black text-center font-bold border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all"
              >
                ภาษาไทย
              </a>
              <a
                href="/resume-en.pdf"
                download="Resume_Punnapob_ENG.pdf"
                onClick={() => setIsCvModalOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-white dark:bg-transparent text-black dark:text-white text-center font-bold border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                English
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Hero;
