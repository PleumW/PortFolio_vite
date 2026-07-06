import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'; 

import Contents from './components/contents';
import ProjectsPage from './components/Projects';
import Myphoto from './components/Myphoto';

function PageLoaderWrapper({ children }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    // โชว์หน้าโหลดทันที
    setIsLoading(true);

    // ให้เวลาโหลด 1 วินาที แล้วค่อยสั่งละลายหายไป
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div 
        // 🌟 จุดที่แก้คือตรงนี้ครับ! เราแยก duration ตอนโผล่ กับ ตอนหาย ออกจากกัน
        className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-[#F5F5F5] flex flex-col items-center justify-center transition-opacity ease-in-out ${
          isLoading 
            ? 'opacity-100 pointer-events-auto duration-0'   // 👈 ตอนกาง: ไม่ต้องรอ (0 วิ) บังหน้าเว็บมิดทันที!
            : 'opacity-0 pointer-events-none duration-400 delay-100' // 👈 ตอนเก็บ: ค่อยๆ จางหายไป (0.4 วิ)
        }`}
      >
        
        <div className="newtons-cradle">
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
        </div>

        <p className="mt-8 text-xl font-bold text-black">Loading...</p>
        
      </div>

      <div>
        {children}
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PageLoaderWrapper>
        <Routes>
          <Route path="/" element={<Contents />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/myphoto" element={<Myphoto />} />
        </Routes>
      </PageLoaderWrapper>
    </BrowserRouter> 
  );
}

export default App;