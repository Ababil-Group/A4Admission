import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/Malta/m1.png";
import img2 from "../../assets/Malta/m2.png";
import img3 from "../../assets/Hungry/h1.png";
import img4 from "../../assets/Romania/r1.png";
import img5 from "../../assets/Hungry/h2.png";
import img6 from "../../assets/Romania/r2.png";
import img7 from "../../assets/Malta/m6.png";
import img8 from "../../assets/Malta/m9.png";
import img9 from "../../assets/Malta/m12.png";

const Carousel = () => {
  const { t } = useTranslation();
  const testimonials = [
    { avatar: img1, name: t("carusel.caruh1"), quote: t("carusel.caruht1") },
    { avatar: img2, name: t("carusel.caruh2"), quote: t("carusel.caruht2") },
    { avatar: img3, name: t("carusel.caruh3"), quote: t("carusel.caruht3") },
    { avatar: img4, name: t("carusel.caruh4"), quote: t("carusel.caruht4") },
    { avatar: img5, name: t("carusel.caruh5"), quote: t("carusel.caruht5") },
    { avatar: img6, name: t("carusel.caruh6"), quote: t("carusel.caruht6") },
    { avatar: img7, name: t("carusel.caruh7"), quote: t("carusel.caruht7") },
    { avatar: img8, name: t("carusel.caruh8"), quote: t("carusel.caruht8") },
    { avatar: img9, name: t("carusel.caruh9"), quote: t("carusel.caruht9") },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering, testimonials.length]);

  // Calculate visible images based on screen size
  const getVisibleIndices = () => {
    const visibleCount = window.innerWidth < 768 ? 3 : 5;
    let start = activeIndex - Math.floor(visibleCount / 2);

    // Handle boundaries
    if (start < 0) {
      start = 0;
    } else if (start + visibleCount > testimonials.length) {
      start = testimonials.length - visibleCount;
    }

    return Array.from(
      { length: visibleCount },
      (_, i) => (start + i) % testimonials.length
    );
  };

  const [visibleIndices, setVisibleIndices] = useState(getVisibleIndices());

  useEffect(() => {
    const handleResize = () => {
      setVisibleIndices(getVisibleIndices());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  useEffect(() => {
    setVisibleIndices(getVisibleIndices());
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-14 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h3
            className="text-gray-900 font-bold font-quicksand text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What They Say About A4-Admission
          </motion.h3>
        </div>

        {/* Text Content */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 text-center min-h-[300px] flex items-center justify-center overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full"
            >
              <blockquote className="mb-6">
                <p className="text-gray-700 text-xl font-semibold sm:text-2xl">
                  "{testimonials[activeIndex].quote}"
                </p>
              </blockquote>
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[activeIndex].avatar}
                  className="w-16 h-16 rounded-full shadow-lg mr-4"
                  alt={testimonials[activeIndex].name}
                />
                <div className="text-gray-800 font-semibold text-lg">
                  {testimonials[activeIndex].name}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex items-center justify-center">
            {visibleIndices.map((idx) => (
              <motion.div
                key={idx}
                className="px-2 cursor-pointer"
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                initial={false}
                animate={activeIndex === idx ? "active" : "inactive"}
                variants={{
                  active: {
                    scale: 1.2,
                    zIndex: 10,
                    transition: { duration: 0.3 },
                  },
                  inactive: {
                    scale: 0.8,
                    opacity: 0.7,
                    transition: { duration: 0.3 },
                  },
                }}
                whileHover={{ scale: activeIndex === idx ? 1.2 : 0.9 }}
                layout // Add layout animation for smooth repositioning
              >
                <div className="relative">
                  <img
                    src={testimonials[idx].avatar}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md bg-blue-dark p-1 mx-auto"
                    alt={testimonials[idx].name}
                    style={{
                      borderBottomLeftRadius:
                        activeIndex === idx ? "0" : "20px",
                      borderTopLeftRadius: activeIndex === idx ? "32px" : "8px",
                      border:
                        activeIndex === idx ? "3px solid #f87171" : "none",
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-gray-800/30 rounded-lg"
                    style={{
                      borderBottomLeftRadius:
                        activeIndex === idx ? "0" : "20px",
                      borderTopLeftRadius: activeIndex === idx ? "32px" : "8px",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-4 space-x-4">
            <motion.button
              onClick={handlePrev}
              className="p-2 rounded-full bg-redest-dark text-white hover:bg-redest-darker transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="p-2 rounded-full bg-redest-dark text-white hover:bg-redest-darker transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
