import React from "react";
import { useTranslation } from "react-i18next";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiSchoolBag, GiTeacher } from "react-icons/gi";
import { MdCrisisAlert } from "react-icons/md";
import logo from "../../assets/logo.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const Objective = () => {
  const { t } = useTranslation();

  const features = [
    {
      text: t("home.objective.icon1"),
      icon: <MdCrisisAlert className="text-2xl" />,
    },
    {
      text: t("home.objective.icon2"),
      icon: <BsFillHandThumbsUpFill className="text-2xl" />,
    },
    {
      text: t("home.objective.icon3"),
      icon: <FaMapLocationDot className="text-2xl" />,
    },
    {
      text: t("home.objective.icon4"),
      icon: <GiTeacher className="text-2xl" />,
    },
    {
      text: t("home.objective.icon5"),
      icon: <FaGraduationCap className="text-2xl" />,
    },
    {
      text: t("home.objective.icon6"),
      icon: <GiSchoolBag className="text-2xl" />,
    },
  ];

  // Animation Variants
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
      className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-12 md:py-16"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Column - Why SALAK ED */}
        <motion.div
          variants={fadeInUpAnimation}
          className="md:w-1/3 flex flex-col items-center md:items-start md:sticky md:top-4 md:self-start"
        >
          <img
            src={logo}
            alt="SALAK ED logo"
            className="h-auto w-48 md:w-48 object-contain"
          />
          <motion.h2
            variants={fadeInUpAnimation}
            className="font-bold text-2xl md:text-3xl font-quicksand mb-4 text-gray-900"
          >
            {t("studyabrotlist.studywhy")}
          </motion.h2>
        </motion.div>

        {/* Right Column - Features Grid */}
        <motion.div variants={staggerContainer} className="md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUpAnimation}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 border-l-4 border-redest-dark"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-redest-dark rounded-full flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <p className="text-lg font-medium text-gray-800 font-poppins mt-1">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Objective;
