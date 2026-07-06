import Navbar from "./Navbar";
import Photo from "./Photo";


function Myphoto() {
  return (
    // ใส่ relative ให้กรอบนอกสุด และตั้งค่าพื้นหลัง
    <div className="relative w-full h-screen bg-[#F5F5F5] overflow-y-auto">
      
      {/* ส่วนของ Navbar (ลอยอยู่บนสุด) */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* 

      */}
      <div className="flex flex-col items-center w-full pt-25    px-10">
        
        <p className="text-4xl font-bold text-black mb-6">My Photos</p>
        
        <Photo />
      </div>
      
    </div>
  );
}

export default Myphoto;