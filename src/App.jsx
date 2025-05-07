import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Layout from "./pages/components/Layout";
import HomePage from "./pages/home/HomePage";
import Services from "./pages/sevices/Services";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "./pages/components/ScrollToTop";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "./pages/components/NotFoundPage";
import Canada from "./pages/StudyAborad/Canada";
import Usa from "./pages/StudyAborad/Usa";
import Uk from "./pages/StudyAborad/Uk";
import AboutUs from "./pages/aboutus/AboutUs";
import ArticalNews from "./pages/articals/ArticalNews";
import Event from "./pages/event/Event";
import { FaArrowUp } from "react-icons/fa";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
  trickleSpeed: 200,
});

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  // for scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // relode every lodaing
  useEffect(() => {
    let interval;

    const handleStart = () => {
      setIsLoading(true);
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    };

    const handleComplete = () => {
      clearInterval(interval);
      setProgress(100);
      setIsLoading(false);
    };

    handleStart();
    const timer = setTimeout(handleComplete, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [location]);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-64 h-1 bg-gray-200 rounded-full mt-8 mx-auto overflow-hidden">
            <div
              className="h-full bg-red-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <ScrollToTop />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/pages/services" element={<Services />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/pages/study-abroad-canada" element={<Canada />} />
          <Route path="/pages/study-abroad-united-states" element={<Usa />} />
          <Route path="/pages/study-abroad-united-kingdom" element={<Uk />} />
          <Route path="/pages/about-us" element={<AboutUs />} />
          <Route path="/blogs/news" element={<ArticalNews />} />
          <Route path="/pages/event" element={<Event />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 left-8 shadow-2xl hover:shadow-gray-400 cursor-pointer bg-redest-dark text-white p-3 rounded-full hover:bg-redest-dark/90 transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 animate-bounce" />
        </button>
      )}

      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
}

export default App;
