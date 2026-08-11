import Navbar from './Navbar';
import Contact from './Contact';
import profilePic from '../assets/about_profile.jpg';

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
                • Prince of Songkla University
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mt-4 mb-6 text-slate-900">
                Punnapob Wisarat
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                สวัสดีครับ ผมนายปุณณภพ วิสารัตน์ นักศึกษาสาขาเทคโนโลยีสารสนเทศ มีความถนัดในด้านการพัฒนา Front-end (React, Tailwind CSS, Vite) และการออกแบบ UI Wireframe (Figma) มีความเข้าใจในพื้นฐานการพัฒนาเว็บไซต์และการประกอบคอมพิวเตอร์ มีทักษะการทำงานเป็นทีมซึ่งประยุกต์ใช้จากประสบการณ์ทำงาพาร์ทไทม์และถ่ายภาพ พร้อมด้วยความมุ่งมั่นและกระตือรือร้นที่จะเรียนรู้พัฒนาตนเองอย่างต่อเนื่องครับ
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">University</h4>
                  <p className="text-sm font-bold text-slate-800 mt-1">Prince of Songkla University Suratthani Campus</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Internship</h4>
                  <p className="text-sm font-bold text-emerald-600 mt-1 text-nowrap">16 November 2026 – 5 March 2027</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12 flex justify-center">
              <div className="relative w-72 sm:w-80 rounded-3xl overflow-hidden border border-slate-200 shadow-xl mx-auto flex flex-col">
                <img src={profilePic} alt="Punnapob Profile" className="w-full h-auto block" />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-900/90 to-transparent text-white text-center">
                  <p className="font-extrabold text-base">Punnapob Wisarat</p>
                  <p className="text-xs text-indigo-300">Pleum</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default About;
