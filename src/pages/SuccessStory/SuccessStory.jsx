import React, { useState } from "react";
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
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

const SuccessStory = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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

  const getImageSizeClass = (index) => {
    const cyclePosition = index % 5;
    if (cyclePosition < 3) return "lg:col-span-2";
    return "lg:col-span-3";
  };

  const fadeInUpAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const loadMoreImages = () => {
    setVisibleCount((prev) => Math.min(prev + 5, allImages.length));
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
            Visa Success
          </h1>
        </motion.div>
      </section>

      <motion.section
        variants={fadeInUpAnimation}
        className="max-w-screen-xl mx-auto space-y-4 my-8"
      >
        <h2 className="text-4xl tracking-wider text-center text-gray-900 font-bold font-quicksand uppercase">
          Our Visa Success Stories
        </h2>
        <div className="flex items-center flex-col">
          <p className="text-lg tracking-widest text-gray-800 uppercase text-center font-bold font-quicksand">
            Enjoy with us
          </p>
          <motion.div
            variants={fadeInUpAnimation}
            className="w-30 h-1 bg-redest-dark"
          ></motion.div>
        </div>
      </motion.section>

      <motion.section className="max-w-screen-lg mx-auto space-y-4 my-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 font-poppins p-4"
        >
          <AnimatePresence>
            {visibleImages.map((item, index) => (
              <motion.div
                key={`${index}-${visibleCount}`}
                variants={fadeInUpAnimation}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ scale: 1.05 }}
                className={`hover:scale-105 transition-transform duration-500 relative cursor-pointer bg-blue-dark p-2 rounded-2xl ${getImageSizeClass(
                  index
                )}`}
                onClick={() => setSelectedImage(item.img)}
              >
                <img
                  src={item.img}
                  alt={`Success story ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <BsArrowsFullscreen className="text-white text-4xl" />
                </div>
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
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={loadMoreImages}
              className="bg-redest-dark text-white px-6 py-3 rounded-lg font-bold shadow-lg"
            >
              Show More Success Stories
            </motion.button>
          ) : (
            visibleCount > 10 && (
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={showLessImages}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg"
              >
                Show Less
              </motion.button>
            )
          )}
        </motion.div>
      </motion.section>
      <AnimatePresence>
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
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SuccessStory;
