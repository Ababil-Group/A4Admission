import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Testimonial = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const leftSectionVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const rightSectionVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const textCarousel = [
    {
      id: 1,
      texth: t("studyabrotlist.studyalh1"),
      textl1: t("studyabrotlist.studyalh1l1"),
      textl2: t("studyabrotlist.studyalh1l2"),
      textl3: t("studyabrotlist.studyalh1l3"),
      textl4: t("studyabrotlist.studyalh1l4"),
    },
    {
      id: 2,
      texth: t("studyabrotlist.studyalh2"),
      textl1: t("studyabrotlist.studyalh2l1"),
      textl2: t("studyabrotlist.studyalh2l2"),
      textl3: t("studyabrotlist.studyalh2l3"),
      textl4: t("studyabrotlist.studyalh2l4"),
    },
    {
      id: 3,
      texth: t("studyabrotlist.studyalh3"),
      textl1: t("studyabrotlist.studyalh3l1"),
      textl2: t("studyabrotlist.studyalh3l2"),
      textl3: t("studyabrotlist.studyalh3l3"),
      textl4: t("studyabrotlist.studyalh3l4"),
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F7EEDD]"
    >
      {/* Left Section */}
      <motion.div
        variants={leftSectionVariants}
        className="bg-redest-dark px-2 md:px-16 py-10 text-white space-y-8"
      >
        <motion.div className="space-y-4" whileHover={{ scale: 1.02 }}>
          <motion.h3
            className="text-2xl font-semibold font-quicksand tracking-widest"
            whileHover={{ x: 5 }}
          >
            {t("home.testmoni.left.h1")}
          </motion.h3>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold font-quicksand tracking-wide"
            whileHover={{ scale: 1.01 }}
          >
            {t("home.testmoni.left.hb2")}
          </motion.h1>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 186 17"
            fill="none"
            width={"300px"}
            height={"6px"}
            className="bg-white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
          </motion.svg>
        </motion.div>

        <motion.p
          className="text-lg font-semibold font-quicksand tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {t("home.testmoni.left.p1")}
        </motion.p>
      </motion.div>

      {/* Right Section - Carousel */}
      <motion.div variants={rightSectionVariants} className="relative m-5">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="mySwiper"
          loop={true}
        >
          {textCarousel.map((text) => (
            <SwiperSlide key={text.id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white py-4 rounded-lg shadow-lg md:h-[550px] lg:h-[700px] xl:h-[560px] 2xl:h-[510px] flex flex-col overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-4 flex flex-col h-full">
                  <motion.h3
                    className="font-bold text-lg mb-2 text-center font-quicksand"
                    whileHover={{ scale: 1.05 }}
                  >
                    {text.texth}
                  </motion.h3>
                  <motion.ul
                    className="space-y-3 flex-grow overflow-y-auto px-4 flex flex-col items-center justify-center"
                    style={{ listStyleType: "square" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.li
                      className="text-md font-semibold text-gray-800 font-quicksand marker:text-blue-dark"
                      whileHover={{ x: 5 }}
                    >
                      {text.textl1}
                    </motion.li>
                    <motion.li
                      className="text-md font-semibold text-gray-800 font-quicksand marker:text-blue-dark"
                      whileHover={{ x: 5 }}
                    >
                      {text.textl2}
                    </motion.li>
                    <motion.li
                      className="text-md font-semibold text-gray-800 font-quicksand marker:text-blue-dark"
                      whileHover={{ x: 5 }}
                    >
                      {text.textl3}
                    </motion.li>
                    <motion.li
                      className="text-md font-semibold text-gray-800 font-quicksand marker:text-blue-dark"
                      whileHover={{ x: 5 }}
                    >
                      {text.textl4}
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <motion.div
          className="swiper-button-prev rounded-full w-16 h-16 shadow-md text-[#d01c1f] bg-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>
        <motion.div
          className="swiper-button-next rounded-full shadow-md text-[#d01c1f] bg-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
