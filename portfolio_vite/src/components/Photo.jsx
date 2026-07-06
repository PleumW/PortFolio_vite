import { useState } from 'react';

function Photo() {
  // 1. สร้าง State สำหรับเก็บว่ากำลังเลือกหมวดหมู่ไหนอยู่ (ค่าเริ่มต้นคือ 'all')
  const [filter, setFilter] = useState('all');

  // 2. สร้างข้อมูลรูปภาพ (Array of Objects) เพื่อให้จัดการง่ายขึ้น
  // 💡 จุดสำคัญ: คุณต้องใส่ 'type' ให้รูปแต่ละใบว่าเป็น 'portrait' หรือ 'landscape'
  const photos = [
    {
      id: 1,
      src: "https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/560902526_1533169004379960_6550618144873166852_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=YgAlvpp1ksoQ7kNvwFgAE5J&_nc_oc=AdqndYRmron9h-MvYBmYuDULQPqmvCOMILej-9TZ900yQ5julZrkBo2ckYZgic6mP8Ij-NwJscIZf_BDosvAAk4v&_nc_zt=23&_nc_ht=scontent.fbkk22-6.fna&_nc_gid=ighlqiCzr2pdXvFvKhdVDg&_nc_ss=7b2a8&oh=00_Af4ttrC7n_SP-4l503IK2UNuWSMd805EaChZNv9w9eoyrQ&oe=69FB855C",
      type: "portrait" // สมมติว่านี่คือรูปแนวตั้ง
    },
    {
      id: 2,
      src: "https://scontent.fbkk22-4.fna.fbcdn.net/v/t39.30808-6/565718363_1532356684461192_5083739451010829027_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=VCKJyEZhOkYQ7kNvwF3668e&_nc_oc=AdqRanWJNoPy6HZfLsp5YubKYk848rFiL55wK8jO-QXBDdoWCBOchwKrXBiF__apqK2D81QjXZcYr98mNPNVlIQr&_nc_zt=23&_nc_ht=scontent.fbkk22-4.fna&_nc_gid=WXSKP1-afBvTDhxhaCKeTQ&_nc_ss=7b2a8&oh=00_Af58ET1VFlYwVnCP_DeZcPauJRxBkPJ_80-y3FcnE41UZw&oe=69FB5AB8",
      type: "landscape" // สมมติว่านี่คือรูปแนวนอน
    },
    {
      id: 3,
      src: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-6/561724182_1533169224379938_608351768343997051_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=jVyH2rdiTUQQ7kNvwFKcI2t&_nc_oc=AdpPQNmVDzoS2m986EyaEw6FB-noLpleoqSSriDIujlPofyVLoZsO7OvQ0KSztEv6WdemzOlM5A0EbWT8zm_fmiI&_nc_zt=23&_nc_ht=scontent.fbkk22-3.fna&_nc_gid=A8wA4PV3G2hur7VGioPzNg&_nc_ss=7b2a8&oh=00_Af55QizNS4OR6zZhb8XJUK56Shir9cYsGFpB7bUTudmxhg&oe=69FB5D03",
      type: "portrait"
    },
    {
      id: 4,
      src: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-6/561369737_1532356721127855_6270758182303208713_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=G7IDAKP7qRwQ7kNvwHDXJDb&_nc_oc=Ado7kvu0JrG07K2ClKY7xBz95DeK7dwukmDvIz5Gd4HP3hK47mb6bhQ-Z5hKM6Cwo9jtgUcG_FcMRicvpQr0DbL0&_nc_zt=23&_nc_ht=scontent.fbkk22-3.fna&_nc_gid=MYKTqig4rePXkAE9wtczfQ&_nc_ss=7b2a8&oh=00_Af5H1IzE-V88b9Nzh6nsG6Yg_0acRgdlg3MFopEHjVah4g&oe=69FB80CF",
      type: "landscape"
    },
    // ... คุณสามารถเอารูปอื่นๆ มาเติมลงในนี้ได้เลยครับ แค่ใส่ type ให้ถูก
  ];

  // 3. ฟังก์ชันสำหรับกรองรูปภาพ
  // ถ้าเลือก 'all' ให้แสดงทั้งหมด ถ้าเลือกอย่างอื่น ให้กรองเฉพาะรูปที่ type ตรงกัน
  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(photo => photo.type === filter);

  return ( 
    // โครงสร้างหลัก: แบ่งจอเป็น 2 ส่วน (ซ้าย-ขวา)
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto mt-10 px-2 gap-10">
      
      {/* 🌟 ฝั่งซ้าย: เมนูกรองรูปภาพ (กว้างประมาณ 25%) */}
      <div className="w-full md:w-1/4 flex flex-col gap-2">
  {/* ปรับหัวข้อให้เล็กลงนิดนึง เพื่อให้เข้ากับความมินิมอล */}
  <h2 className="text-lg font-semibold mb-2 text-black">Categories</h2>
  
  {/* ปุ่ม All */}
  <button 
    onClick={() => setFilter('all')}
    // ใช้ w-max เพื่อให้ปุ่มหดพอดีคำ ไม่ยืดยาวเต็มบรรทัด
    className={`text-sm py-1.5 px-4 rounded-full text-left transition-all duration-300 w-max ${
      filter === 'all' 
        ? 'bg-black text-white shadow-sm' 
        : 'text-gray-500 bg-transparent hover:text-black hover:bg-gray-100'
    }`}
  >
    All Photos
  </button>

  {/* ปุ่ม Portrait */}
  <button 
    onClick={() => setFilter('portrait')}
    className={`text-sm py-1.5 px-4 rounded-full text-left transition-all duration-300 w-max ${
      filter === 'portrait' 
        ? 'bg-black text-white shadow-sm' 
        : 'text-gray-500 bg-transparent hover:text-black hover:bg-gray-100'
    }`}
  >
    Portrait
  </button>

  {/* ปุ่ม Landscape */}
  <button 
    onClick={() => setFilter('landscape')}
    className={`text-sm py-1.5 px-4 rounded-full text-left transition-all duration-300 w-max ${
      filter === 'landscape' 
        ? 'bg-black text-white shadow-sm' 
        : 'text-gray-500 bg-transparent hover:text-black hover:bg-gray-100'
    }`}
  >
    Landscape
  </button>
</div>

      {/* 🌟 ฝั่งขวา: แกลเลอรีรูปภาพ (กว้างประมาณ 75%) */}
      <div className="w-full md:w-3/4">
        {/* ใช้ columns-3 หรือ 4 ตามความชอบ (ผมปรับเป็น 3 เพื่อให้รูปใหญ่ขึ้นหน่อยเมื่อมีเมนูด้านซ้าย) */}
        <div className="columns-2 md:columns-3 gap-4">
          
          {/* 4. วนลูป (map) นำรูปที่ผ่านการกรองแล้วมาแสดงผล */}
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="w-full mb-4 break-inside-avoid">
              <img 
                src={photo.src} 
                alt={`Project ${photo.id}`} 
                className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out" 
              />
            </div>
          ))}

        </div>
        
        {/* แสดงข้อความถ้ารูปในหมวดหมู่นั้นว่างเปล่า (เผื่อไว้) */}
        {filteredPhotos.length === 0 && (
          <p className="text-center text-gray-500 mt-10">ไม่พบรูปภาพในหมวดหมู่นี้</p>
        )}
      </div>

    </div>
  );
}

export default Photo;