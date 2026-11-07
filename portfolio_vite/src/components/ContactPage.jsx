import Navbar from './Navbar';
import Contact from './Contact';

function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-[#e8e7e7] dark:bg-[#1E293B] flex flex-col justify-between transition-colors duration-300">
      <Navbar />
      <div className="pt-5">
        <Contact />
      </div>
    </div>
  );
}

export default ContactPage;
