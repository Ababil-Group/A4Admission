import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaYoutube, FaTimes } from "react-icons/fa";
import success from "../../assets/success.jpg";
import img1 from "../../assets/Hungry/h1.png";
import img2 from "../../assets/Malta/m1.png";
import img3 from "../../assets/Romania/r1.png";
import img4 from "../../assets/Hungry/h2.png";
import img5 from "../../assets/Malta/m2.png";
import img6 from "../../assets/Malta/m3.png";
import img7 from "../../assets/Romania/r2.png";
import img8 from "../../assets/Malta/m4.png";
import img9 from "../../assets/Malta/m5.png";
import img10 from "../../assets/Malta/m6.png";
import img11 from "../../assets/Malta/m7.png";
import img12 from "../../assets/Malta/m8.png";
import img13 from "../../assets/Malta/m9.png";
import img14 from "../../assets/Malta/m10.png";
import img15 from "../../assets/Malta/m11.png";
import img16 from "../../assets/Malta/m12.png";
import img17 from "../../assets/Malta/m13.png";
import img18 from "../../assets/Malta/m14.png";
import img19 from "../../assets/Malta/m15.png";
import img20 from "../../assets/Malta/m16.png";
import img21 from "../../assets/Romania/r3.png";
import img22 from "../../assets/Malta/m17.png";
import img23 from "../../assets/Romania/r4.png";
import img24 from "../../assets/Hungry/h3.png";
import img25 from "../../assets/Romania/r5.png";
import img26 from "../../assets/Malta/m18.png";
import img27 from "../../assets/Romania/r6.png";
import img28 from "../../assets/Malta/m19.png";
import img29 from "../../assets/Romania/r7.png";
import img30 from "../../assets/Romania/r8.png";
import { BsArrowsFullscreen } from "react-icons/bs";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Helmet } from "react-helmet";
const SuccessStory = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loadingStates, setLoadingStates] = useState({});
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: false,
    margin: "0px 0px -100px 0px",
  });

  const allImages = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
    { img: img11 },
    { img: img12 },
    { img: img13 },
    { img: img14 },
    { img: img15 },
    { img: img16 },
    { img: img17 },
    { img: img18 },
    { img: img19 },
    { img: img20 },
    { img: img21 },
    { img: img22 },
    { img: img23 },
    { img: img24 },
    { img: img25 },
    { img: img26 },
    { img: img27 },
    { img: img28 },
    { img: img29 },
    { img: img30 },
  ];

  const visibleImages = allImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < allImages.length;

  useEffect(() => {
    const initialLoadingStates = {};
    visibleImages.forEach((_, index) => {
      initialLoadingStates[index] = true;
    });
    setLoadingStates(initialLoadingStates);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newLoadingStates = { ...loadingStates };
      Object.keys(newLoadingStates).forEach((key) => {
        newLoadingStates[key] = false;
      });
      setLoadingStates(newLoadingStates);
    }, 500);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  const getImageSizeClass = (index) => {
    const cyclePosition = index % 5;
    if (cyclePosition < 3) return "lg:col-span-2";
    return "lg:col-span-3";
  };

  const fadeInUpAnimation = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const skeletonAnimation = {
    initial: { opacity: 0.6 },
    animate: {
      opacity: 0.9,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
      },
    },
  };

  const loadMoreImages = async () => {
    setIsLoadingMore(true);

    const newLoadingStates = { ...loadingStates };
    for (
      let i = visibleCount;
      i < Math.min(visibleCount + 5, allImages.length);
      i++
    ) {
      newLoadingStates[i] = true;
    }
    setLoadingStates(newLoadingStates);

    for (
      let i = visibleCount;
      i < Math.min(visibleCount + 5, allImages.length);
      i++
    ) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setLoadingStates((prev) => ({ ...prev, [i]: false }));
    }

    setVisibleCount((prev) => Math.min(prev + 5, allImages.length));
    setIsLoadingMore(false);
  };

  const showLessImages = () => {
    setVisibleCount(10);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-white my-4 md:my-10"
    >
      <Helmet>
        <title>
          Our Success Story | A4 Admission | Global Education Consultants
        </title>
        <meta
          name="description"
          content="A4 Admission is a global education consulting agency helping students achieve their dream of studying abroad. Learn about our story, mission, and experienced team. We Provite Student visa Malta, Romania, Hungary, UK, Canada, USA, Australia and many more..."
        />
        <meta
          name="keywords"
          content="A4 Admission, study abroad consultants, global education agency, international student support, education guidance, study in Canada, USA, UK, Australia"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://a4admission.com/pages/our-success-story"
        />
        <meta property="og:title" content="About Us | A4 Admission" />
        <meta
          property="og:description"
          content="Meet A4 Admission, your trusted global partner in studying abroad. Learn about our story and how we support students globally."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://a4admission.com/pages/our-success-story"
        />
      </Helmet>
      <section
        className="bg-cover bg-center py-16 px-2 h-auto sm:min-h-[60vh] relative flex items-center justify-center"
        style={{ backgroundImage: `url(${success})` }}
      >
        <div className="absolute inset-0 bg-gray-800/30"></div>
        <motion.div
          variants={fadeInUpAnimation}
          className="flex flex-col items-center justify-center max-w-screen-sm mx-auto relative z-10 space-y-4"
        >
          <h1 className="text-5xl text-white font-bold text-center font-quicksand mx-auto py-6">
            {t("successStory.sucesoryh")}
          </h1>
        </motion.div>
      </section>

      <motion.section
        variants={fadeInUpAnimation}
        className="max-w-screen-xl mx-auto space-y-4 my-8"
      >
        <h2 className="text-4xl tracking-wider text-center text-gray-900 font-bold font-quicksand uppercase">
          {t("successStory.sucesoryh2")}
        </h2>
        <div className="flex items-center flex-col">
          <p className="text-lg tracking-widest text-gray-800 uppercase text-center font-bold font-quicksand">
            {t("successStory.sucsorysubh")}
          </p>
          <motion.div
            variants={fadeInUpAnimation}
            className="w-30 h-1 bg-redest-dark"
          ></motion.div>
        </div>
      </motion.section>

      <motion.section className="max-w-screen-lg mx-auto space-y-4 my-14">
        <motion.div
          ref={containerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 font-poppins p-4"
        >
          <AnimatePresence>
            {visibleImages.map((item, index) => (
              <motion.div
                key={`${index}-${item.img}`}
                variants={fadeInUpAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                exit="hidden"
                className={`relative cursor-pointer bg-blue-dark p-2 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-500 ${getImageSizeClass(
                  index
                )}`}
                onClick={() =>
                  !loadingStates[index] && setSelectedImage(item.img)
                }
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              >
                {loadingStates[index] ? (
                  <motion.div
                    variants={skeletonAnimation}
                    initial="initial"
                    animate="animate"
                    className="w-full h-full bg-gray-300 rounded-2xl "
                    style={{ aspectRatio: "1/1" }}
                  />
                ) : (
                  <>
                    <motion.img
                      src={item.img}
                      alt={`Success story ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl cursor-pointer"
                      onLoad={() =>
                        setLoadingStates((prev) => ({
                          ...prev,
                          [index]: false,
                        }))
                      }
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <BsArrowsFullscreen className="text-white text-4xl" />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="flex justify-center mt-8"
          variants={fadeInUpAnimation}
        >
          {hasMoreImages ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={loadMoreImages}
              className="bg-redest-dark text-white px-6 py-3 rounded-lg font-bold shadow-lg flex items-center justify-center cursor-pointer min-w-[200px]"
              disabled={isLoadingMore}
            >
              {isLoadingMore ? (
                <div className="flex items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2 "
                  />
                  Loading...
                </div>
              ) : (
                t("successStory.sucsorysubbtn1")
              )}
            </motion.button>
          ) : (
            visibleCount > 10 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={showLessImages}
                className="bg-blue-dark text-white px-6 py-3 rounded-lg font-bold shadow-lg cursor-pointer"
              >
                {t("successStory.sucsorysubbtn2")}
              </motion.button>
            )
          )}
        </motion.div>
      </motion.section>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-10 right-0 text-redest-dark text-2xl cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <motion.img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full max-h-[80vh] object-contain"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SuccessStory;
