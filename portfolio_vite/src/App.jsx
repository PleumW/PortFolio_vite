import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'; 

import Contents from './components/contents';
import ProjectsPage from './components/Projects';
import Myphoto from './components/Myphoto';
import About from './components/About';
import ContactPage from './components/ContactPage';

function PageLoaderWrapper({ children }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-[#F8FAFC] flex flex-col items-center justify-center transition-opacity ease-in-out ${
          isLoading 
            ? 'opacity-100 pointer-events-auto duration-0'
            : 'opacity-0 pointer-events-none duration-400 delay-100'
        }`}
      >
        <div className="newtons-cradle">
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
        </div>
        <p className="mt-8 text-sm font-bold text-slate-700 tracking-wider uppercase animate-pulse">
          Loading Portfolio...
        </p>
      </div>

      <div className="w-full">
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageLoaderWrapper>
    </BrowserRouter> 
  );
}

export default App;