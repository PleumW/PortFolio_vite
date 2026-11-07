import Navbar from './Navbar';
import Contact from './Contact';
import profilePic from '../assets/about_profile.jpg';
import ScrollReveal from './ScrollReveal';

function About() {
  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-white selection:bg-indigo-600 selection:text-white flex flex-col justify-between transition-colors duration-300">
      <div>
        <Navbar />

        {/* About Hero */}
        <div className="pt-10 pb-16 md:pt-32 md:pb-24 bg-white dark:bg-[#0F172A] border-b border-slate-200/80 dark:border-slate-700 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6 md:px-12">

            {/*
              Layout:
              - Mobile/Tablet : flex-col  → รูปบน, ข้อความล่าง
              - Desktop (lg+) : flex-row  → ข้อความซ้าย, รูปขวา
              รูปอยู่ก่อนในหน้า DOM เพื่อให้บน mobile แสดงก่อน
              บน desktop ใช้ order เพื่อสลับกลับ
            */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

              {/* รูป — DOM อยู่ก่อน = แสดงบนมือถือก่อนเสมอ, desktop ไปอยู่ขวา */}
              <ScrollReveal direction="up" threshold={0.05} className="w-full flex justify-center lg:order-2 lg:w-5/12 shrink-0">
                <div className="relative w-56 sm:w-72 lg:w-full max-w-sm rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl">
                  <img
                    src={profilePic}
                    alt="Punnapob Profile"
                    className="w-full h-auto block"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-900/90 to-transparent text-white text-center">
                    <p className="font-extrabold text-base">Punnapob Wisarat</p>
                    <p className="text-xs text-indigo-300">Pleum</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* ข้อความ — desktop อยู่ซ้าย */}
              <ScrollReveal direction="up" delay={100} threshold={0.05} className="w-full lg:order-1 lg:w-7/12">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                  

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900 dark:text-white leading-tight">
                    Punnapob Wisarat
                  </h1>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                    สวัสดีครับ ผมนายปุณณภพ วิสารัตน์ นักศึกษาสาขาเทคโนโลยีสารสนเทศ มีความถนัดในด้านการพัฒนา Front-end (React, Tailwind CSS, Vite) และการออกแบบ UI Wireframe (Figma) มีความเข้าใจในพื้นฐานการพัฒนาเว็บไซต์และการประกอบคอมพิวเตอร์ มีทักษะการทำงานเป็นทีมซึ่งประยุกต์ใช้จากประสบการณ์ทำงาพาร์ทไทม์และถ่ายภาพ พร้อมด้วยความมุ่งมั่นและกระตือรือร้นที่จะเรียนรู้พัฒนาตนเองอย่างต่อเนื่องครับ
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200 dark:border-slate-700 w-full text-left">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">University</h4>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                        Prince of Songkla University Suratthani Campus
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Internship</h4>
                      <p className="text-sm font-bold text-emerald-600 mt-1">
                        16 November 2026 – 5 March 2027
                      </p>
                    </div>
                  </div>

                </div>
              </ScrollReveal>

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
