import React, { useEffect, useRef } from "react";
import faqsimg from "../../assets/faqs/fa1.webp";
import { useTranslation } from "react-i18next";
import FaqsCard from "../components/FaqsCard";
import { motion, useAnimation, useInView } from "framer-motion";
const Faqs = () => {
  const { t } = useTranslation();

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const faqList = [
    {
      fqgh: t("faqs.second.glh1"),
      fqgllist: [
        { list: t("faqs.second.glp1l1") },
        { list: t("faqs.second.glp1l2") },
        { list: t("faqs.second.glp1l3") },
        { list: t("faqs.second.glp1l4") },
        { list: t("faqs.second.glp1l5") },
        { list: t("faqs.second.glp1l6") },
        { list: t("faqs.second.glp1l7") },
        { list: t("faqs.second.glp1l8") },
      ],
    },
    {
      fqgh: t("faqs.second.glh2"),
      fqgllist: [
        { list: t("faqs.second.glp2l1") },
        { list: t("faqs.second.glp2l2") },
        { list: t("faqs.second.glp2l3") },
        { list: t("faqs.second.glp2l4") },
        { list: t("faqs.second.glp2l5") },
        { list: t("faqs.second.glp2l6") },
        { list: t("faqs.second.glp2l7") },
        { list: t("faqs.second.glp2l8") },
      ],
    },
    {
      fqgh: t("faqs.second.glh3"),
      fqgp: t("faqs.second.glp3l1"),
    },
    {
      fqgh: t("faqs.second.glh4"),
      fqgllist: [
        { list: t("faqs.second.glp4l1") },
        { list: t("faqs.second.glp4l2") },
        { list: t("faqs.second.glp4l3") },
        { list: t("faqs.second.glp4l4") },
        { list: t("faqs.second.glp4l5") },
      ],
    },
    {
      fqgh: t("faqs.second.glh5"),
      fqgp: t("faqs.second.glp5l1"),
    },
    {
      fqgh: t("faqs.second.glh6"),
      fqgp: t("faqs.second.glp6l1"),
    },
    {
      fqgh: t("faqs.second.glh7"),
      fqgllist: [
        { list: t("faqs.second.glp7l1") },
        { list: t("faqs.second.glp7l2") },
      ],
      fqgp: t("faqs.second.glp7l1"),
    },
    {
      fqgh: t("faqs.second.glh8"),
      fqgp: t("faqs.second.glp8l1"),
    },
    {
      fqgh: t("faqs.second.glh9"),
      fqgp: t("faqs.second.glp9l1"),
    },
    {
      fqgh: t("faqs.second.glh10"),
      fqgp: t("faqs.second.glp10l1"),
    },
    {
      fqgh: t("faqs.second.glh11"),
      fqgllist: [
        { list: t("faqs.second.glp11l1") },
        { list: t("faqs.second.glp11l2") },
        { list: t("faqs.second.glp11l3") },
        { list: t("faqs.second.glp11l4") },
        { list: t("faqs.second.glp11l5") },
      ],
    },
    {
      fqgh: t("faqs.second.glh12"),
      fqgllist: [
        { list: t("faqs.second.glp12l1") },
        { list: t("faqs.second.glp12l2") },
        { list: t("faqs.second.glp12l3") },
        { list: t("faqs.second.glp12l4") },
      ],
    },
    {
      fqgh: t("faqs.second.glh13"),
      fqgllist: [
        { list: t("faqs.second.glp13l1") },
        { list: t("faqs.second.glp13l2") },
      ],
    },
    {
      fqgh: t("faqs.second.glh14"),
      fqgp: t("faqs.second.glp14l1"),
    },
    {
      fqgh: t("faqs.second.glh15"),
      fqgp: t("faqs.second.glp15l1"),
    },
  ];

  const FaqList2 = [
    {
      fqph: t("faqs.second.plh1"),
      fqpp: t("faqs.second.plp1l1"),
    },
    {
      fqph: t("faqs.second.plh2"),
      fqpp: t("faqs.second.plp2l1"),
    },
    {
      fqph: t("faqs.second.plh3"),
      fqpp: t("faqs.second.plp3l1"),
    },
    {
      fqph: t("faqs.second.plh4"),
      fqpp: t("faqs.second.plp4l1"),
    },
    {
      fqph: t("faqs.second.plh5"),
      fqpllist: [
        { list: t("faqs.second.plp5l1") },
        { list: t("faqs.second.plp5l2") },
        { list: t("faqs.second.plp5l3") },
        { list: t("faqs.second.plp5l4") },
      ],
    },
    {
      fqph: t("faqs.second.plh6"),
      fqpp: t("faqs.second.plp6l1"),
    },
    {
      fqph: t("faqs.second.plh7"),
      fqpllist: [
        { list: t("faqs.second.plp7l1") },
        { list: t("faqs.second.plp7l2") },
      ],
    },
    {
      fqph: t("faqs.second.plh8"),
      fqpp: t("faqs.second.plp8l1"),
    },
    {
      fqph: t("faqs.second.plh9"),
      fqpp: t("faqs.second.plp9l1"),
    },
    {
      fqph: t("faqs.second.plh10"),
      fqpp: t("faqs.second.plp10l1"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="bg-white my-6">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-cover bg-center py-16 px-2 h-auto sm:min-h-[70vh] flex items-center justify-center relative"
        style={{ backgroundImage: `url(${faqsimg})` }}
      >
        <div className="absolute inset-0 bg-gray-800/30"></div>
        <motion.h1
          variants={fadeInUp}
          className="flex flex-col items-center relative z-10 justify-end font-bold text-white text-4xl sm:text-5xl mt-14"
        >
          {t("faqs.faqh")}
        </motion.h1>
      </motion.section>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-screen-lg mx-auto px-2 my-16 space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <motion.h2 className="text-3xl font-bold font-quicksand text-gray-900">
            {t("faqs.second.sh")}
          </motion.h2>
          <motion.p
            className="font-quicksand text-lg font-medium mt-4"
            variants={fadeInUp}
          >
            {t("faqs.second.sp1")}
          </motion.p>
          <motion.p
            className="font-quicksand text-lg font-medium"
            variants={fadeInUp}
          >
            {t("faqs.second.sp2")}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <motion.button
            variants={slideInFromLeft}
            whileHover="hover"
            whileTap="tap"
            className="before:ease relative h-12 w-[220px] overflow-hidden border border-redest-dark bg-redest-dark text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer"
          >
            <a href="#genaral" className="relative z-10 font-bold">
              {t("faqs.second.btn1")}
            </a>
          </motion.button>

          <motion.button
            variants={fadeInUp}
            whileHover="hover"
            whileTap="tap"
            className="before:ease relative h-12 w-[220px] overflow-hidden border border-redest-dark bg-redest-dark text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer"
          >
            <a href="#parents" className="relative z-10 font-bold">
              {t("faqs.second.btn2")}
            </a>
          </motion.button>

          <motion.button
            variants={slideInFromRight}
            whileHover="hover"
            whileTap="tap"
            className="before:ease relative h-12 w-[220px] overflow-hidden border border-redest-dark bg-redest-dark text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer"
          >
            <a href="#student" className="relative z-10 font-bold">
              {t("faqs.second.btn3")}
            </a>
          </motion.button>
        </motion.div>
      </motion.section>

      {/* General FAQs Section */}
      <motion.section
        id="genaral"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-screen-lg mx-auto px-2 my-16 space-y-3"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-xl font-bold font-quicksand text-gray-900"
        >
          {t("faqs.second.btn1")}
        </motion.h2>
        <motion.div className="mt-14 space-y-6">
          {faqList.map((item, idx) => (
            <motion.div key={idx} custom={idx} variants={cardVariants}>
              <FaqsCard idx={idx} faqsList={item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Parents FAQs Section */}
      <motion.section
        id="parents"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-screen-lg mx-auto px-2 my-16 space-y-3"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-xl font-bold font-quicksand text-gray-900"
        >
          {t("faqs.second.btn2")}
        </motion.h2>
        <motion.div className="mt-14 space-y-6">
          {FaqList2.map((item, idx) => (
            <motion.div key={idx} custom={idx} variants={cardVariants}>
              <FaqsCard idx={idx} faqsList={item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Student FAQs Section */}
      <motion.section
        id="student"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-screen-lg mx-auto px-2 my-16 space-y-3"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-xl font-bold font-quicksand text-gray-900"
        >
          {t("faqs.second.btn3")}
        </motion.h2>
      </motion.section>
    </div>
  );
};

export default Faqs;
