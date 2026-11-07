import Navbar from './Navbar'; 
import Hero from './Hero';
import PageTwo from './PageTwo';
import PageThree from './Pagethree';
import Contact from './Contact';
import ScrollReveal from './ScrollReveal';

function Contents() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F5F5F5] dark:bg-[#0F172A] text-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <Hero />

        {/* Featured Projects & Skills Section */}
        <ScrollReveal direction="up" threshold={0.1}>
          <PageTwo />
        </ScrollReveal>

        {/* Experience Section */}
        <ScrollReveal direction="up" delay={100} threshold={0.1}>
          <PageThree />
        </ScrollReveal>

        {/* Contact Section */}
        <ScrollReveal direction="up" delay={100} threshold={0.08}>
          <Contact />
        </ScrollReveal>
      </main>
    </div>
  );
}

export default Contents;
