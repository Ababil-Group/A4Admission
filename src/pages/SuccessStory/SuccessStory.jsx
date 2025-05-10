import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaYoutube, FaTimes } from "react-icons/fa";
import success from "../../assets/success.jpg";
import img1 from "../../assets/s1.jpg";
import img2 from "../../assets/s2.jpg";
import img3 from "../../assets/s3.jpg";
import img4 from "../../assets/s4.jpg";
import img5 from "../../assets/s5.jpg";
import img6 from "../../assets/s6.jpg";
import img7 from "../../assets/s7.jpg";
import img8 from "../../assets/s8.jpg";
import { BsArrowsFullscreen } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const SuccessStory = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const imgs = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
  ];

  const getImageSizeClass = (index) => {
    if (index < 3) return "lg:col-span-2";
    if (index >= 3 && index < 5) return "lg:col-span-3";
    return "lg:col-span-2";
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
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

      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="max-w-screen-lg mx-auto space-y-4 my-14"
      >
        <motion.div
          variants={staggerContainer}
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 font-poppins p-4"
        >
          {imgs.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUpAnimation}
              whileHover={{ scale: 1.05 }}
              className={`hover:scale-105 transition-transform duration-500 relative cursor-pointer bg-redest-dark/60 p-2 rounded-2xl ${getImageSizeClass(
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
        </motion.div>
      </motion.section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SuccessStory;
