import Navbar from './Navbar'; 
import Hero from './Hero';
import PageTwo from './PageTwo';
import PageThree from './Pagethree';
import Contact from './Contact';

function Contents() {
  return (
    <div className="min-h-screen w-full bg-[#F5F5F5] text-black selection:bg-black selection:text-white"> 
      {/* Navigation */}
      <Navbar />

      {/* Hero Section (Cover Page / หน้าปก) */}
      <main>
        <Hero />

        {/* Featured Projects & Skills Section (PageTwo) */}
        <PageTwo />

        {/* Experience Section (PageThree) */}
        <PageThree />

        {/* Contact Section (Get In Touch) */}
        <Contact />
      </main>
    </div>
  );
}

export default Contents;