import Navbar from './Navbar'; 
import profilePic from '../assets/14668415-9D2B-47EA-9A6D-FBC33B1BC7C8-Photoroom.png';
import PageTwo from './PageTwo';
import PageThree from './Pagethree';
import Contact from './Contact';


function Contents() {
  


  return (
    <div className="relative w-full h-screen overflow-x-hidden overflow-y-scroll bg-[#F5F5F5] scroll-smooth"> 
      
      {/* ส่วนของ Navbar (วางถูกที่แล้วครับ!) */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className='flex justify-between w-full h-screen px-20 py-10 lg:px-48'>
        
        <div className='flex items-center justify-center text-left relative w-1/2 h-full'>
          <div className='flex flex-col justify-center gap-10'>
            <p className='text-5xl font-bold text-black'>my portfolio</p>
            <div>
            <p className='text-7xl font-bold text-gray-500 w-full z-10 whitespace-nowrap absolute '>PUNNAPOB WISARAT</p>
            <p className='text-7xl font-bold text-black w-full z-10 whitespace-nowrap relative top-1 left-1 '>PUNNAPOB WISARAT</p>
            </div>
            
            <div className="flex items-center justify-center px-2 py-3 space-x-10 text-left">

                <p className="flex justify-center text-2xl text-white transition-colors bg-black rounded-xl animate-bounce hover:bg-gray-800 w-auto px-4 py-2">
                  Download CV
                </p>
           
            </div>

          </div>
        </div>

        <div className='flex items-center justify-center w-1/2 h-full absolute top-0 right-0'>
          <img src={profilePic} alt="Profile" className="object-contain w-auto h-auto" />
        </div>
      </div>


        <PageTwo />
 
      
      <PageThree />

<div>
      <Contact />
</div>
    </div>
  );
}

export default Contents;