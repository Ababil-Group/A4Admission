import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/Malta/m1.png";
import img2 from "../../assets/Malta/m2.png";
import img3 from "../../assets/Hungry/h1.png";
import img4 from "../../assets/Romania/r1.png";
import img5 from "../../assets/Hungry/h2.png";
import img6 from "../../assets/Romania/r2.png";
import img7 from "../../assets/Malta/m6.png";
import img8 from "../../assets/Malta/m9.png";
import img9 from "../../assets/Malta/m12.png";
import { useTranslation } from "react-i18next";
const Carousel = () => {
  const {t} = useTranslation();

  const testimonials = [
    {
      avatar: img1,
      name: t("carusel.caruh1"),
      quote:
        t("carusel.caruht1"),
    },
    {
      avatar: img2,
     name: t("carusel.caruh2"),
      quote:
        t("carusel.caruht2"),
    },
    {
      avatar: img3,
      name: t("carusel.caruh3"),
      quote:
        t("carusel.caruht3"),
    },
    {
      avatar: img4,
      name: t("carusel.caruh4"),
      quote:
        t("carusel.caruht4"),
    },
    {
      avatar: img5,
     name: t("carusel.caruh5"),
      quote:
        t("carusel.caruht5"),
    },
    {
      avatar: img6,
      name: t("carusel.caruh6"),
      quote:
        t("carusel.caruht6"),
    },
    {
      avatar: img7,
      name: t("carusel.caruh7"),
      quote:
        t("carusel.caruht7"),
    },
    {
      avatar: img8,
      name: t("carusel.caruh8"),
      quote:
        t("carusel.caruht8"),
    },
    {
      avatar: img9,
      name: t("carusel.caruh9"),
      quote:
        t("carusel.caruht9"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance carousel (pauses on hover)
  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        setDirection("right");
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [testimonials.length, isHovering]);

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction === "right" ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction === "right" ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  const thumbnailVariants = {
    inactive: {
      scale: 0.9,
      borderRadius: "8px",
      opacity: 0.7,
      transition: { duration: 0.3 },
    },
    active: {
      scale: 1.1,
      borderRadius: "16px 0 16px 0",
      opacity: 1,
      zIndex: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      opacity: 0.9,
      transition: { duration: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
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

        {/* Main testimonial with animation */}
        <div
          className="relative h-96 md:h-80 mb-12 overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center justify-center px-4"
            >
              <figure className="max-w-2xl mx-auto text-center">
                <blockquote>
                  <motion.p
                    className="text-gray-700 text-xl font-semibold sm:text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.p>
                </blockquote>
                <div className="mt-8">
                  <motion.img
                    src={testimonials[currentIndex].avatar}
                    className="w-16 h-16 mx-auto rounded-full shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  />
                  <motion.div
                    className="mt-4"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="block text-gray-800 font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </span>
                  </motion.div>
                </div>
              </figure>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail navigation */}
        <div
          className="flex justify-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto px-4">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative cursor-pointer"
                onClick={() => goToSlide(idx)}
                initial={false}
                animate={currentIndex === idx ? "active" : "inactive"}
                whileHover={currentIndex !== idx ? "hover" : {}}
                variants={thumbnailVariants}
              >
                <img
                  src={item.avatar}
                  className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md bg-blue-dark p-1"
                  alt={item.name}
                  style={{
                    borderBottomLeftRadius: currentIndex === idx ? "0" : "20px",
                    borderTopLeftRadius: currentIndex === idx ? "32px" : "8px",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gray-800/30"
                  style={{
                    borderBottomLeftRadius: currentIndex === idx ? "0" : "20px",
                    borderTopLeftRadius: currentIndex === idx ? "32px" : "8px",
                  }}
                ></div>
                {currentIndex === idx && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-white text-sm font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.name}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center mt-8 space-x-4">
          <motion.button
            onClick={handlePrev}
            className="p-3 rounded-full bg-redest-dark text-white hover:bg-redest-darker transition-colors shadow-lg"
            aria-label="Previous"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="p-3 rounded-full bg-redest-dark text-white hover:bg-redest-darker transition-colors shadow-lg"
            aria-label="Next"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
