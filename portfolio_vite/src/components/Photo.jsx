import { useState } from 'react';

function Photo() {
  // 1. สร้าง State สำหรับเก็บว่ากำลังเลือกหมวดหมู่ไหนอยู่ (ค่าเริ่มต้นคือ 'all')
  const [filter, setFilter] = useState('all');

  // 2. สร้างข้อมูลรูปภาพ (Array of Objects) เพื่อให้จัดการง่ายขึ้น
  // 💡 จุดสำคัญ: คุณต้องใส่ 'type' ให้รูปแต่ละใบว่าเป็น 'portrait' หรือ 'landscape'
  const photos = [
    {
      id: 1,
      src: "/gallery/photo_1.jpg",
      type: "portrait" // สมมติว่านี่คือรูปแนวตั้ง
    },
    {
      id: 2,
      src: "/gallery/photo_2.jpg",
      type: "portrait" // สมมติว่านี่คือรูปแนวนอน
    },
    {
      id: 3,
      src: "/gallery/photo_3.jpg",
      type: "portrait"
    },
    {
      id: 4,
      src: "/gallery/photo_4.jpg",
      type: "portrait"
    },
    {
      id: 5,
      src: "/gallery/photo_5.jpg",
      type: "portrait"
    },
    {
      id: 6,
      src: "/gallery/photo_6.jpg",
      type: "portrait"
    },
    {
      id: 7,
      src: "/gallery/photo_7.jpg",
      type: "portrait"
    },
    {
      id: 8,
      src: "/gallery/photo_9.jpg",
      type: "portrait"
    },
    {
      id: 9,
      src: "/gallery/photo_10.jpg",
      type: "portrait"
    },
    {
      id: 10,
      src: "/gallery/photo_10.jpg",
      type: "cosplay"
    },
    {
      id: 11,
      src: "/gallery/photo_11.jpg",
      type: "cosplay"
    },
    {
      id: 12,
      src: "/gallery/photo_12.jpg",
      type: "cosplay"
    }, {
      id: 13,
      src: "/gallery/photo_13.jpg",
      type: "cosplay"
    }, {
      id: 14,
      src: "/gallery/photo_14.jpg",
      type: "cosplay"
    }, {
      id: 15,
      src: "/gallery/photo_15.jpg",
      type: "cosplay"
    }, {
      id: 16,
      src: "/gallery/photo_16.jpg",
      type: "cosplay"
    }, {
      id: 17,
      src: "/gallery/photo_17.jpg",
      type: "cosplay"
    }, {
      id: 18,
      src: "/gallery/photo_18.jpg",
      type: "cosplay"
    }, {
      id: 19,
      src: "/gallery/photo_19.jpg",
      type: "cosplay"
    }, {
      id: 20,
      src: "/gallery/photo_20.jpg",
      type: "cosplay"
    }, {
      id: 21,
      src: "/gallery/photo_21.jpg",
      type: "cosplay"
    }, {
      id: 22,
      src: "/gallery/photo_22.jpg",
      type: "cosplay"
    }, {
      id: 23,
      src: "/gallery/photo_23.jpg",
      type: "cosplay"
    }, {
      id: 24,
      src: "/gallery/photo_24.jpg",
      type: "cosplay"
    }, {
      id: 25,
      src: "/gallery/photo_25.jpg",
      type: "cosplay"
    }, {
      id: 26,
      src: "/gallery/photo_26.jpg",
      type: "cosplay"
    }, {
      id: 27,
      src: "/gallery/photo_27.jpg",
      type: "cosplay"
    }, {
      id: 28,
      src: "/gallery/photo_28.jpg",
      type: "cosplay"
    }, {
      id: 29,
      src: "/gallery/photo_29.jpg",
      type: "landscape"
    }, {
      id: 30,
      src: "/gallery/photo_30.jpg",
      type: "landscape"
    }, {
      id: 31,
      src: "/gallery/photo_31.jpg",
      type: "landscape"
    }, {
      id: 32,
      src: "/gallery/photo_32.jpg",
      type: "landscape"
    }, {
      id: 33,
      src: "/gallery/photo_33.jpg",
      type: "landscape"
    }, {
      id: 34,
      src: "/gallery/photo_34.jpg",
      type: "landscape"
    }, {
      id: 35,
      src: "/gallery/photo_35.jpg",
      type: "landscape"
    }, {
      id: 36,
      src: "/gallery/photo_36.jpg",
      type: "landscape"
    }, {
      id: 37,
      src: "/gallery/photo_37.jpg",
      type: "landscape"
    }, {
      id: 38,
      src: "/gallery/photo_38.jpg",
      type: "landscape"
    }, {
      id: 39,
      src: "/gallery/photo_39.jpg",
      type: "landscape"
    },
    {
      id: 40,
      src: "/gallery/photo_40.jpg",
      type: "landscape"
    },
    {
      id: 41,
      src: "/gallery/photo_41.jpg",
      type: "landscape"
    },
    {
      id: 42,
      src: "/gallery/photo_42.jpg",
      type: "landscape"
    },
    {
      id: 43,
      src: "/gallery/photo_43.jpg",
      type: "landscape"
    },
    {
      id: 44,
      src: "/gallery/photo_44.jpg",
      type: "landscape"
    },
    {
      id: 45,
      src: "/gallery/photo_45.jpg",
      type: "landscape"
    },
    {
      id: 46,
      src: "/gallery/photo_46.jpg",
      type: "landscape"
    },
    {
      id: 47,
      src: "/gallery/photo_47.jpg",
      type: "landscape"
    },
    {
      id: 48,
      src: "/gallery/photo_48.jpg",
      type: "event"
    },
    {
      id: 49,
      src: "/gallery/photo_49.jpg",
      type: "event"
    },
    {
      id: 50,
      src: "/gallery/photo_50.jpg",
      type: "event"
    },
    {
      id: 51,
      src: "/gallery/photo_51.jpg",
      type: "event"
    },
    {
      id: 52,
      src: "/gallery/photo_52.jpg",
      type: "event"
    },
    {
      id: 53,
      src: "/gallery/photo_53.jpg",
      type: "event"
    },
    {
      id: 54,
      src: "/gallery/photo_54.jpg",
      type: "event"
    },
    {
      id: 55,
      src: "/gallery/photo_55.jpg",
      type: "event"
    },
    {
      id: 56,
      src: "/gallery/photo_56.jpg",
      type: "event"
    },
    {
      id: 57,
      src: "/gallery/photo_57.jpg",
      type: "event"
    },
    {
      id: 58,
      src: "/gallery/photo_58.jpg",
      type: "event"
    },
    {
      id: 59,
      src: "/gallery/photo_59.jpg",
      type: "event"
    },
    {
      id: 60,
      src: "/gallery/photo_60.jpg",
      type: "event"
    },
    {
      id: 61,
      src: "/gallery/photo_61.jpg",
      type: "event"
    },
    {
      id: 62,
      src: "/gallery/photo_62.jpg",
      type: "event"
    },
    {
      id: 63,
      src: "/gallery/photo_63.jpg",
      type: "event"
    },
    {
      id: 64,
      src: "/gallery/photo_64.jpg",
      type: "event"
    },
    {
      id: 65,
      src: "/gallery/photo_65.jpg",
      type: "event"
    },
    {
      id: 66,
      src: "/gallery/photo_66.jpg",
      type: "event"
    },

    {
      id: 67,
      src: "/gallery/photo_67.jpg",
      type: "event"
    },
    {
      id: 68,
      src: "/gallery/photo_68.jpg",
      type: "event"
    },
    {
      id: 69,
      src: "/gallery/photo_69.jpg",
      type: "event"
    },
    {
      id: 70,
      src: "/gallery/photo_70.jpg",
      type: "event"
    },








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

        {/* ปุ่ม Cosplay */}
        <button
          onClick={() => setFilter('cosplay')}
          className={`text-sm py-1.5 px-4 rounded-full text-left transition-all duration-300 w-max ${filter === 'cosplay'
            ? 'bg-black text-white shadow-sm'
            : 'text-gray-500 bg-transparent hover:text-black hover:bg-gray-100'
            }`}
        >
          Cosplay
        </button>

        {/* ปุ่ม Event */}
        <button
          onClick={() => setFilter('event')}
          className={`text-sm py-1.5 px-4 rounded-full text-left transition-all duration-300 w-max ${filter === 'event'
            ? 'bg-black text-white shadow-sm'
            : 'text-gray-500 bg-transparent hover:text-black hover:bg-gray-100'
            }`}
        >
          Event
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