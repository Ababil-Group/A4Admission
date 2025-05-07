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

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
  trickleSpeed: 200,
});

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  // Handle progress bar and loading state for route changes
  useEffect(() => {
    let interval;

    const handleStart = () => {
      setIsLoading(true);
      setProgress(0); // Reset progress
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10; // Increment progress
        });
      }, 200);
    };

    const handleComplete = () => {
      clearInterval(interval);
      setProgress(100); // Ensure progress reaches 100%
      setIsLoading(false);
    };

    handleStart();
    const timer = setTimeout(handleComplete, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [location]); // Trigger on every route change

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
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pages/study-abroad-canada" element={<Canada />} />
          <Route path="/pages/study-abroad-united-states" element={<Usa />} />
          <Route path="/pages/study-abroad-united-kingdom" element={<Uk />} />
          <Route path="/pages/about-us" element={<AboutUs />} />
          <Route path="/blogs/news" element={<ArticalNews />} />
          <Route path="/pages/event" element={<Event />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
}

export default App;
