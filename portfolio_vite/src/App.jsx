import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

import { ThemeProvider } from './context/ThemeContext';
import ScrollProgressBar from './components/ScrollProgressBar';

import Contents from './components/contents';
import ProjectsPage from './components/Projects';
import Myphoto from './components/Myphoto';
import About from './components/About';
import ContactPage from './components/ContactPage';

// ─── Page Transition Variants ────────────────────────────────────────────────
const pageVariants = {
  initial:  { opacity: 0, y: 24 },
  animate:  { opacity: 1, y: 0,  transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  exit:     { opacity: 0, y: -16, transition: { duration: 0.3,  ease: [0.4, 0, 1, 1] } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full overflow-x-hidden"
      >
        <Routes location={location}>
          <Route path="/"         element={<Contents />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/myphoto"  element={<Myphoto />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Newton's Cradle Loader ───────────────────────────────────────────────────
function PageLoaderWrapper({ children }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-[#F8FAFC] dark:bg-[#0F172A] flex flex-col items-center justify-center transition-opacity ease-in-out ${
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
        <p className="mt-8 text-sm font-bold text-slate-700 dark:text-slate-300 tracking-wider uppercase animate-pulse">
          Loading Portfolio...
        </p>
      </div>
      <div className="w-full">{children}</div>
    </>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Global UI overlays */}
        <ScrollProgressBar />

        <PageLoaderWrapper>
          <AnimatedRoutes />
        </PageLoaderWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
