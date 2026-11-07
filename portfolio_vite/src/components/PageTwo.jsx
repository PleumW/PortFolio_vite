import Card from "./card";
import ScrollReveal from "./ScrollReveal";

const skills = [
  "Visual Studio",
  "Tailwind CSS",
  "Vite",
  "React",
  "Vue.js",
];

function PageTwo() {
  return (
    <div className="bg-[#e8e7e7] dark:bg-[#1E293B] w-full overflow-hidden text-black dark:text-white transition-colors duration-300">
      {/* Top divider */}
      <div className="w-full h-[2px] bg-black dark:bg-white"></div>

      {/* Main split content section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 pb-12 flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 items-center lg:items-start">

        {/* Left Column: Domain Tree */}
        <ScrollReveal direction="right" threshold={0.1}>
          <div className="flex flex-col items-start w-full lg:w-auto shrink-0">

            {/* Domain 01 */}
            <div className="flex space-x-6 sm:space-x-8 items-center group cursor-pointer">
              <div className="w-[3px] h-20 sm:h-24 bg-black dark:bg-white relative flex items-center">
                <div className="absolute -left-[5px] w-3 h-3 bg-black dark:bg-white rounded-full transition-transform group-hover:scale-125"></div>
              </div>
              <div className="py-2 transition-transform duration-300 group-hover:translate-x-1.5">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase block">Domain 01</span>
                <h3 className="text-base sm:text-lg font-extrabold tracking-tight mt-0.5 ">Web Development</h3>
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mt-0.5">Full-Stack &amp; Frontend Architecture</p>
              </div>
            </div>

            <div className="w-48 h-[2px] bg-black dark:bg-white rounded-full ml-[-2px] my-1"></div>

            {/* Domain 02 */}
            <div className="flex space-x-6 sm:space-x-8 items-center group cursor-pointer">
              <div className="w-[3px] h-20 sm:h-24 bg-black dark:bg-white relative flex items-center">
                <div className="absolute -left-[5px] w-3 h-3 bg-black dark:bg-white rounded-full transition-transform group-hover:scale-125"></div>
              </div>
              <div className="py-2 transition-transform duration-300 group-hover:translate-x-1.5">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase block">Domain 02</span>
                <h3 className="text-base sm:text-lg font-extrabold tracking-tight mt-0.5 ">UX UI Design</h3>
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mt-0.5">Figma Systems &amp; Prototyping</p>
              </div>
            </div>

            <div className="w-48 h-[2px] bg-black dark:bg-white rounded-full ml-[-2px] my-1"></div>

            {/* Domain 03 */}
            <div className="flex space-x-6 sm:space-x-8 items-center group cursor-pointer">
              <div className="w-[3px] h-20 sm:h-24 bg-black dark:bg-white relative flex items-center">
                <div className="absolute -left-[5px] w-3 h-3 bg-black dark:bg-white rounded-full transition-transform group-hover:scale-125"></div>
              </div>
              <div className="py-2 transition-transform duration-300 group-hover:translate-x-1.5">
                <span className="text-[10px] font-mono font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase block">Domain 03</span>
                <h3 className="text-base sm:text-lg font-extrabold tracking-tight mt-0.5 ">Photography</h3>
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mt-0.5">Visual Perspectives &amp; Composition</p>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Right: Cards */}
        <ScrollReveal direction="up" delay={150} threshold={0.1} className="flex flex-col items-center justify-center w-full">
          <Card />
        </ScrollReveal>

      </div>

      {/* Bottom Skills Timeline Flow */}
      <ScrollReveal direction="up" delay={100} threshold={0.1}>
        <div className="w-full px-6 sm:px-12 pb-16 mt-6">

          {/* Desktop Layout: Horizontal Connected Flow */}
          <div className="hidden lg:flex max-w-5xl mx-auto flex-row items-center justify-between relative">
            {skills.map((skill, index) => (
              <div key={skill} className="contents">
                <div className="flex flex-col items-center group cursor-pointer shrink-0">
                  <div className="px-4 py-2 rounded-xl bg-white dark:bg-[#0F172A] border-2 border-black dark:border-white font-extrabold text-xs text-black dark:text-white shadow-xs group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                    {skill}
                  </div>
                  <div className="w-3.5 h-3.5 bg-black dark:bg-white rounded-full mt-2 ring-4 ring-[#e8e7e7] dark:ring-[#1E293B] group-hover:scale-125 transition-transform"></div>
                </div>
                {index < skills.length - 1 && (
                  <div className="flex-1 h-[2px] bg-black dark:bg-white mx-3 min-w-[24px]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Layout: Clean Stepped Vertical Timeline ("เป็นขั้นแนวตั้ง ไม่รก") */}
          <div className="block lg:hidden max-w-xs sm:max-w-sm mx-auto relative py-2">
            {/* Central Vertical Spine Line */}
            <div className="absolute left-1/2 top-3 bottom-3 w-[2px] -translate-x-1/2 bg-black dark:bg-white"></div>

            <div className="flex flex-col space-y-4 relative z-10">
              {skills.map((skill, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={skill} className="relative flex items-center w-full group cursor-pointer">
                    {/* Left Side */}
                    <div className="w-1/2 flex items-center justify-end pr-4">
                      {isLeft && (
                        <div className="flex items-center">
                          <div className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#0F172A] border-2 border-black dark:border-white font-extrabold text-xs text-black dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                            {skill}
                          </div>
                          <div className="w-3 sm:w-4 h-[2px] bg-black dark:bg-white shrink-0"></div>
                        </div>
                      )}
                    </div>

                    {/* Central Node Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-black dark:bg-white ring-4 ring-[#e8e7e7] dark:ring-[#1E293B] shrink-0 z-10 group-hover:scale-125 transition-transform"></div>

                    {/* Right Side */}
                    <div className="w-1/2 flex items-center justify-start pl-4">
                      {!isLeft && (
                        <div className="flex items-center">
                          <div className="w-3 sm:w-4 h-[2px] bg-black dark:bg-white shrink-0"></div>
                          <div className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#0F172A] border-2 border-black dark:border-white font-extrabold text-xs text-black dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                            {skill}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </ScrollReveal>

    </div>
  );
}

export default PageTwo;
