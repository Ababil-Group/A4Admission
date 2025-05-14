import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import svg1 from "../../assets/home/svg1.webp";
import svg2 from "../../assets/home/svg2.webp";
import svg3 from "../../assets/home/svg3.webp";
import svg4 from "../../assets/home/svg4.webp";
import svg5 from "../../assets/home/svg5.webp";
import svg6 from "../../assets/home/sv6.webp";
import svg7 from "../../assets/home/svg7.webp";
import svg8 from "../../assets/home/svg8.webp";
import svg9 from "../../assets/home/svg9.webp";

const Stats = () => {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      title: t("home.fifth.title1"),
      description: t("home.fifth.des1"),
      image: svg1,
    },
    {
      id: 2,
      title: t("home.fifth.title2"),
      description: t("home.fifth.des2"),
      image: svg2,
    },
    {
      id: 3,
      title: t("home.fifth.title3"),
      description: t("home.fifth.des3"),
      image: svg3,
    },
    {
      id: 4,
      title: t("home.fifth.title4"),
      description: t("home.fifth.des4"),
      image: svg4,
    },
    {
      id: 5,
      title: t("home.fifth.title5"),
      description: t("home.fifth.des5"),
      image: svg5,
    },
    {
      id: 6,
      title: t("home.fifth.title6"),
      description: t("home.fifth.des6"),
      image: svg6,
    },
    {
      id: 7,
      title: t("home.fifth.title7"),
      description: t("home.fifth.des7"),
      image: svg7,
    },
    {
      id: 8,
      title: t("home.fifth.title8"),
      description: t("home.fifth.des8"),
      image: svg8,
    },
    {
      id: 9,
      title: t("home.fifth.title9"),
      description: t("home.fifth.des9"),
      image: svg9,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const horizontalScrollVariants = {
    hidden: { opacity: 0, x: (index) => (index % 2 === 0 ? -100 : 100) },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "anticipate",
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto overflow-hidden">
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-1/2"></div>

        <div className="space-y-16 pl-8 md:pl-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative"
              custom={index}
              variants={itemVariants}
            >
              <motion.div
                className="absolute left-0 md:left-1/2 top-1/2 w-6 h-6 bg-blue-dark rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />

              {/* Mobile View */}
              <motion.div
                className="md:hidden ml-8"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div
                  className="mb-4 overflow-hidden rounded-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  />
                </motion.div>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ y: -5 }}
                >
                  <span className="text-blue-500 font-bold">
                    Step {step.id}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              </motion.div>

              {/* Desktop View */}
              <motion.div
                className={`hidden md:flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                custom={index}
                variants={horizontalScrollVariants}
              >
                <motion.div
                  className={`w-1/2 p-4 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="overflow-hidden rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className={`w-1/2 p-4 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-blue-500 font-bold">
                      Step {step.id}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.h1
        className="text-center text-3xl md:text-4xl font-quicksand font-bold pt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("home.fifth.headingbuttom")}
      </motion.h1>
    </div>
  );
};

export default Stats;
