import { useState } from 'react';

function Photo() {
  // 1. สร้าง State สำหรับเก็บว่ากำลังเลือกหมวดหมู่ไหนอยู่ (ค่าเริ่มต้นคือ 'all')
  const [filter, setFilter] = useState('all');

  // 2. สร้างข้อมูลรูปภาพ (Array of Objects) เพื่อให้จัดการง่ายขึ้น
  // 💡 จุดสำคัญ: คุณต้องใส่ 'type' ให้รูปแต่ละใบว่าเป็น 'portrait' หรือ 'landscape'
  const photos = [
    {
      id: 1,
      src: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/562334130_1532360011127526_6557160098988457395_n.jpg?stp=dst-jpg_tt6&cstp=mx1413x2048&ctp=s1413x2048&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nPVSUVN-ck0Q7kNvwEnFuXT&_nc_oc=AdohpKCK2nbaVyFVN44EB7tYs90VofbKLU3abue9wK0bXvbiFyaLQXQdv6aimQj1jZE&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=1iaBQTfzdreUYke-CgvWOQ&_nc_ss=7a2a8&oh=00_AQBDwxyXa5WNtyJbKQpRKO5-qpy57An2m2PNxCLJNaY7vQ&oe=6A62F4A4",
      type: "portrait" // สมมติว่านี่คือรูปแนวตั้ง
    },
    {
      id: 2,
      src: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/564230409_1532360087794185_1950772453690701404_n.jpg?stp=dst-jpg_tt6&cstp=mx1414x2048&ctp=s1414x2048&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s2JAlzMZovYQ7kNvwEkd65e&_nc_oc=AdrnkwlfRFrK6CtbFDUxUsn07l8UxgB-JmloCjhrvGzdbIlVjI5oaGYiigcqg0ZWFWY&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=QRgX6GPgp2E_keX7R1aNwA&_nc_ss=7a2a8&oh=00_AQAq5l0xUQKvpIWKFU9Se58CkNQbT9aQYMu8_vvsYuX3Cw&oe=6A62EF80",
      type: "portrait" // สมมติว่านี่คือรูปแนวนอน
    },
    {
      id: 3,
      src: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/561617121_1532360001127527_6239713415218889400_n.jpg?stp=dst-jpg_tt6&cstp=mx1624x2048&ctp=s1624x2048&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=O6-Q2RR3Z54Q7kNvwGW705n&_nc_oc=AdoqgL9z5FDwt4T1Jr22MCVSsvHpz8fTMtCa_irK6CNW_W5TCV6AEZi5AbJ6lshggLY&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=UNZxW-BdI8bObbKzFubw7Q&_nc_ss=7a2a8&oh=00_AQCt_Y6UZYTYwblAS23Ihd_QQZc6e4Q4kRK8DhTtiHIC7A&oe=6A62ED5E",
      type: "portrait"
    },
    {
      id: 4,
      src: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/561369737_1532356721127855_6270758182303208713_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pxdOaNyh-6oQ7kNvwFgSD5_&_nc_oc=AdqQXRtsDFJJ-ZezDfbT7EV2V-vAO9vf9CluwlYJEOwM6UdvQ6MgtSYwqVxqMXnvddo&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=jWs4iGt5lyrZGptxfbfGcw&_nc_ss=7a2a8&oh=00_AQCsX2hQku6S_CRkjZj_DKKaJDAqwwNgRpekxcT5-rz-Ag&oe=6A62C64F",
      type: "portrait"
    },
    {
      id: 5,
      src: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/564246164_1532356757794518_566622152315480550_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AQeY1ujhBPEQ7kNvwFv8vMK&_nc_oc=AdoX85ni057dO3epdH-9WDA-jQ5j2bDX5xvBw2sNLSPKrS3KnVK51sGmVvMicKAzbjg&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=58sSYDjQy6Qmc8eSjU_b9A&_nc_ss=7a2a8&oh=00_AQC4XXdyYvDkIxCdgqNUV_AB_bt-F9_9k9_uWg78F2tAsQ&oe=6A62F719",
      type: "portrait"
    },
    {
      id: 6,
      src: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/559712577_1532358187794375_8512769467152592885_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UZQaW8IQ0Z8Q7kNvwEDESuL&_nc_oc=AdrzxWlV8vV7F6riOtTWgeL0v26S2wNfCvU90A8c5XwJQhLSCYxtpsZl8nOpQsATKtc&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=DdcY7-18_SffHvR_pw5IRQ&_nc_ss=7a2a8&oh=00_AQBuO_O15aaPfYDpofLe_iWoVemjjng8tMHdb6c8lPAPkg&oe=6A62F753",
      type: "portrait"
    },
    {
      id: 7,
      src: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/559711427_1532357457794448_7637024683630716808_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=D0TlGLyuCkUQ7kNvwHRA0T3&_nc_oc=Adq8w7LSEoFF-zPC-5VMcCR2M-XiSjy8ds4Ukwm0qSMSXFFan7nVIxy8yYUg_Yb4ItU&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=4kvoHHW729k1X1i5p8ZPug&_nc_ss=7a2a8&oh=00_AQAA4_1vY0SM9QEnk9z9vX4puky6GsQp0WvaKMi6_y_NdA&oe=6A62D6F8",
      type: "portrait"
    },
    {
      id: 8,
      src: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/561165970_1532357747794419_2665488455058886122_n.jpg?stp=dst-jpg_tt6&cstp=mx1278x2048&ctp=s1278x2048&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EJxlc7IRvFAQ7kNvwEhCw8y&_nc_oc=AdozQ-85VT2aZpdMRnkZkJlA5mCZmZYqWzd1xamSOy6G8XwimsXqgbjRrYmWhHxu7Jc&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=39NSiqbmK0Ryedn_mA9tfA&_nc_ss=7a2a8&oh=00_AQCp8LfNGeY5FePVdxdKA2A0D6ddf92oHtw--TVh27YuOg&oe=6A62E5A7",
      type: "portrait"
    },
    {
      id: 9,
      src: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/564014556_1532357987794395_4852501614785413617_n.jpg?stp=dst-jpg_tt6&cstp=mx1365x2048&ctp=s1365x2048&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=B2tO4J7lhjEQ7kNvwGvjeWf&_nc_oc=AdoAjoRFxl7E-c63ub2UwiY9WT44nCk6uYumFm2EbNToj5HvgwoMV9yaHX31vzlU7c0&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=Umw5rfgpETDq88ItUTw2eQ&_nc_ss=7a2a8&oh=00_AQDuu5dlVrUMJO7MqG352q78od9zL8acsuNtPPQpOzxOpw&oe=6A62F21F",
      type: "portrait"
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
          className={`text-sm py-1.5 px-4 rounded-full text-left transition-all duration-300 w-max ${filter === 'all'
            ? 'bg-black text-white shadow-sm'
            : 'text-gray-500 bg-transparent hover:text-black hover:bg-gray-100'
            }`}
        >
          All Photos
        </button>

        {/* ปุ่ม Portrait */}
        <button
          onClick={() => setFilter('portrait')}
          className={`text-sm py-1.5 px-4 rounded-full text-left transition-all duration-300 w-max ${filter === 'portrait'
            ? 'bg-black text-white shadow-sm'
            : 'text-gray-500 bg-transparent hover:text-black hover:bg-gray-100'
            }`}
        >
          Portrait
        </button>

        {/* ปุ่ม Landscape */}
        <button
          onClick={() => setFilter('landscape')}
          className={`text-sm py-1.5 px-4 rounded-full text-left transition-all duration-300 w-max ${filter === 'landscape'
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