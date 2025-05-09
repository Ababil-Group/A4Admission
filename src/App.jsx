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
import Faqs from "./pages/faqs/Faqs";
import Australia from "./pages/StudyAborad/Australia";
import NewZealand from "./pages/StudyAborad/NewZealand";
import China from "./pages/StudyAborad/China";
import Japan from "./pages/StudyAborad/Japan";
import SouthKoriea from "./pages/StudyAborad/SouthKoriea";
import Ireland from "./pages/StudyAborad/Ireland";
import Sweden from "./pages/StudyAborad/Sweden";
import Garmany from "./pages/StudyAborad/Garmany";
import Denmark from "./pages/StudyAborad/Denmark";
import Norway from "./pages/StudyAborad/Norway";
import Findland from "./pages/StudyAborad/Findland";
import NetherLand from "./pages/StudyAborad/NetherLand";
import Iceland from "./pages/StudyAborad/Iceland";
import Malta from "./pages/StudyAborad/Multa";
import Hungary from "./pages/StudyAborad/Hungray";
import Romaniya from "./pages/StudyAborad/Romaniya";
import Bulgeria from "./pages/StudyAborad/Bulgeria";

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
          <Route path="/pages/study-abroad-australia" element={<Australia />} />
          <Route
            path="/pages/study-abroad-new-zealand"
            element={<NewZealand />}
          />
          <Route path="/pages/study-abroad-china" element={<China />} />
          <Route path="/pages/study-abroad-japan" element={<Japan />} />
          <Route
            path="/pages/study-abroad-south-korea"
            element={<SouthKoriea />}
          />
          <Route path="/pages/study-abroad-ireland" element={<Ireland />} />
          <Route path="/pages/study-abroad-sweden" element={<Sweden />} />
          <Route path="/pages/study-abroad-germany" element={<Garmany />} />
          <Route path="/pages/study-abroad-denmark" element={<Denmark />} />
          <Route path="/pages/study-abroad-norway" element={<Norway />} />
          <Route path="/pages/study-abroad-finland" element={<Findland />} />
          <Route
            path="/pages/study-abroad-netherlands"
            element={<NetherLand />}
          />
          <Route path="/pages/study-abroad-iceland" element={<Iceland />} />
          <Route path="/pages/study-abroad-malta" element={<Malta />} />
          <Route path="/pages/study-abroad-hungary" element={<Hungary />} />
          <Route path="/pages/study-abroad-romania" element={<Romaniya />} />
          <Route path="/pages/study-abroad-bulgaria" element={<Bulgeria />} />
          <Route path="/pages/about-us" element={<AboutUs />} />
          {/* <Route path="/blogs/news" element={<ArticalNews />} /> */}
          <Route path="/pages/our-success-story" element={<Event />} />
          <Route path="/pages/faq" element={<Faqs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 left-2 before:shadow-2xl shadow-2xl hover:shadow-gray-400 cursor-pointer hover:bg-redest-dark p-3 rounded-full transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 text-blue-dark hover:text-white animate-bounce" />
        </button>
      )}

      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
}

export default App;
