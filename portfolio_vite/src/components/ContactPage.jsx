import Navbar from './Navbar';
import Contact from './Contact';

function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-[#e8e7e7] flex flex-col justify-between">
      <Navbar />
      <div className="pt-5">
        <Contact />
      </div>
    </div>
  );
}

export default ContactPage;
