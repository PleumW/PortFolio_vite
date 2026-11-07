import ScrollReveal from './ScrollReveal';

function PageThree() {
  const expCardClass = "border-solid border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black w-full max-w-5xl transition-colors duration-300 mt-6 overflow-hidden";

  return (
    <div className="w-full bg-[#F5F5F5] dark:bg-[#0F172A] overflow-hidden text-black dark:text-white transition-colors duration-300">
      {/* Top dividing line */}
      <div className="w-full h-[2px] bg-black dark:bg-white"></div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 flex flex-col items-center bg-[#F5F5F5] dark:bg-[#0F172A]">

        {/* EXPERIENCE heading */}
        <ScrollReveal direction="up" threshold={0.1}>
          <p className="text-4xl font-bold tracking-tight">EXPERIENCE</p>
        </ScrollReveal>

        {/* Card 1: Freshy Crape */}
        <ScrollReveal direction="up" delay={80} threshold={0.08} className="w-full flex flex-col items-center">
          <div className={expCardClass}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full p-6 sm:p-8 gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 flex-grow w-full md:w-auto">
                <p className="text-xl font-bold sm:px-4 shrink-0">1</p>
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-xl font-bold pb-1">Freshy Crape</p>
                  <div className="text-sm space-y-2 leading-relaxed">
                    <p>- Prepared and served crepes for walk-in customers and online delivery orders (Grab).</p>
                    <p>- Maintained inventory levels and organized store supplies to prevent shortages.</p>
                    <p>- Handled back-counter food preparation, including noodles and various deep-fried snacks (e.g., french fries, wontons).</p>
                    <p>- Maintained cleanliness of the store interior and storefront during opening and closing shifts.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg sm:text-xl font-semibold shrink-0 md:px-6 pt-4 md:pt-0 border-t border-gray-300 dark:border-gray-600 md:border-none w-full md:w-auto text-left md:text-right">
                2025 - 2026
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 2: Tokio Haus */}
        <ScrollReveal direction="up" delay={130} threshold={0.08} className="w-full flex flex-col items-center">
          <div className={expCardClass}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full p-6 sm:p-8 gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 flex-grow w-full md:w-auto">
                <p className="text-xl font-bold sm:px-4 shrink-0">2</p>
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-xl font-bold pb-1">Tokio Haus</p>
                  <div className="text-sm space-y-2 leading-relaxed">
                    <p>- Managed food and beverage service for dine-in patrons to ensure a positive dining experience.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg sm:text-xl font-semibold shrink-0 md:px-6 pt-4 md:pt-0 border-t border-gray-300 dark:border-gray-600 md:border-none w-full md:w-auto text-left md:text-right">
                2025 - 2026
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 3: Photography */}
        <ScrollReveal direction="up" delay={180} threshold={0.08} className="w-full flex flex-col items-center">
          <div className={expCardClass}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full p-6 sm:p-8 gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 flex-grow w-full md:w-auto">
                <p className="text-xl font-bold sm:px-4 shrink-0">3</p>
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-xl font-bold pb-1">Photography</p>
                  <div className="text-sm space-y-2 leading-relaxed">
                    <p>- Provided freelance photography services specializing in portraits, portfolios, cosplay, and occasional graduation events.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg sm:text-xl font-semibold shrink-0 md:px-6 pt-4 md:pt-0 border-t border-gray-300 dark:border-gray-600 md:border-none w-full md:w-auto text-left md:text-right">
                2025 - present
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ACTIVITY heading */}
        <ScrollReveal direction="up" threshold={0.1} className="w-full flex flex-col items-center">
          <p className="text-4xl font-bold tracking-tight pt-20">ACTIVITY</p>
        </ScrollReveal>

        {/* Activity Card 1: Com7 */}
        <ScrollReveal direction="up" delay={80} threshold={0.08} className="w-full flex flex-col items-center">
          <div className={expCardClass}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full p-6 sm:p-8 gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 flex-grow w-full md:w-auto">
                <p className="text-xl font-bold sm:px-4 shrink-0">1</p>
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-xl font-bold pb-1">Com7</p>
                  <div className="text-sm space-y-2 leading-relaxed">
                    <p>- Participated in the Com7 internship training program, focusing on media development and operational workflows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Activity Card 2: Thailand Artec Robotics */}
        <ScrollReveal direction="up" delay={130} threshold={0.08} className="w-full flex flex-col items-center">
          <div className={expCardClass}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full p-6 sm:p-8 gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 flex-grow w-full md:w-auto">
                <p className="text-xl font-bold sm:px-4 shrink-0">2</p>
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-xl font-bold pb-1">Thailand Artec Robotics PSU 2026.</p>
                  <div className="text-sm space-y-2 leading-relaxed">
                    <p>- Evaluated and recorded competition scores as a Judging Committee Member for the Real Robotics category at Thailand Artec Robotics PSU 2026.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      <div></div>
    </div>
  );
}

export default PageThree;
