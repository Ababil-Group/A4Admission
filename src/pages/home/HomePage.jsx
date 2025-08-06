import React, { useState, useEffect, useRef } from "react";
import frontImg from "../../assets/home/frontimg.webp";
import subfront from "../../assets/home/subimage.webp";
import img1 from "../../assets/home/Cypras.jpg";
import img2 from "../../assets/home/Malta.jpg";
import img3 from "../../assets/home/Romania.jpg";
import img4 from "../../assets/home/Russia.jpg";
import img5 from "../../assets/home/Hungry.jpg";
import { useTranslation } from "react-i18next";
import { motion, useAnimation, useInView } from "framer-motion";
import Stats from "./Stats";
import Objective from "./Objective";
import Universitys from "./Universitys";
import Testimonial from "./Testimonial";
import ProgramsTab from "./ProgramsTab";
import Carusel from "./Carusel";
import { FaArrowRight, FaPlaneDeparture } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FacebookTestimonial from "./FacebookTestimonial";

const HomePage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("tab1");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const imgs = [
    {
      img: img1,
      text: "Cyprus",
    },
    {
      img: img2,
      text: "Malta",
    },
    {
      img: img3,
      text: "Romania",
    },
    {
      img: img4,
      text: "Russia",
    },
    {
      img: img5,
      text: "Hungary",
    },
  ];

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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="bg-white my-6">
      <Helmet>
        <title>Study Abroad with A4 Admission | Free Consultation</title>
        <meta
          name="description"
          content="Unlock your global education dreams with A4 Admission. Expert guidance for studying in Canada, USA, UK, Australia, and more. Get free consultation now!"
        />
        <meta
          name="keywords"
          content="Study Abroad, A4 Admission, Free Consultation, Canada, USA, UK, Australia, Student Visa, Overseas Education, University Admission, Global Education"
        />
        <meta name="author" content="A4 Admission" />
        <meta property="og:title" content="Study Abroad with A4 Admission" />
        <meta
          property="og:description"
          content="Get personalized admission support and visa assistance for studying in top global destinations. Join 1000+ successful students."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.a4admission.com" />
        <meta
          property="og:image"
          content="https://www.a4admission.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study Abroad with A4 Admission" />
        <meta
          name="twitter:description"
          content="Expert study abroad consultancy for Canada, UK, USA, and more. Start your journey today!"
        />
        <meta
          name="twitter:image"
          content="https://www.a4admission.com/twitter-image.jpg"
        />
        <link rel="canonical" href="https://www.a4admission.com" />
      </Helmet>

      <section
        className="bg-cover bg-center py-16 px-2 h-auto md:min-h-[80vh] relative flex items-center justify-center"
        style={{ backgroundImage: `url(${frontImg})` }}
      >
        <div className="absolute inset-0 bg-gray-800/20"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-screen-xl mx-auto text-left w-full px-2 space-y-6"
        >
          <motion.h1
            variants={fadeInUpAnimation}
            className="text-4xl lg:text-5xl font-bold text-white max-w-screen-md"
          >
            {t("home.frontText.textpri")}
          </motion.h1>
          <motion.h2
            variants={fadeInUpAnimation}
            className="text-lg md:text-xl lg:text-2xl font-bold text-white"
          >
            {t("home.frontText.textsec")}
          </motion.h2>
          <motion.button
            variants={fadeInUpAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="before:ease relative h-12 w-auto overflow-hidden border border-redest-dark bg-redest-dark text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-80 uppercase rounded-xl px-4 py-3 tracking-wider cursor-pointer font-bold"
          >
            <Link
              variants={fadeInUpAnimation}
              to={"/pages/contact"}
              className="relative z-10 flex items-center gap-2"
            >
              {t("home.frontText.btn")}{" "}
              <FaArrowRight className="animate-pulse" />
            </Link>
          </motion.button>
        </motion.div>
      </section>
      {/* facebook testmotional */}
      {/* <section>
        <FacebookTestimonial />
      </section> */}

      <section ref={ref} className="my-10 max-w-screen-xl mx-auto p-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.img
            variants={fadeInUpAnimation}
            src={subfront}
            alt="subimg"
            className="w-full shadow rounded-2xl"
          />
          <motion.div
            variants={staggerContainer}
            className="flex flex-col items-start justify-center space-y-5"
          >
            <motion.h1
              variants={fadeInUpAnimation}
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 font-quicksand"
            >
              {t("home.second.texth")}
            </motion.h1>
            <motion.svg
              variants={fadeInUpAnimation}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 186 17"
              fill="none"
              width={"300px"}
              height={"6px"}
              className="bg-redest-dark"
            >
              <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
            </motion.svg>
            <motion.p
              variants={fadeInUpAnimation}
              className="text-lg font-medium text-gray-900 font-quicksand"
            >
              {t("home.second.textp1")}
            </motion.p>
            <motion.p
              variants={fadeInUpAnimation}
              className="text-lg font-medium text-gray-900 font-quicksand"
            >
              {t("home.second.textp2")}
            </motion.p>
            <motion.button
              variants={fadeInUpAnimation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="before:ease relative h-12 w-[200px] overflow-hidden border border-redest-dark bg-redest-dark text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer"
            >
              <Link
                to={"/pages/about-us"}
                relative="relative z-10"
                className="font-bold"
              >
                {t("home.second.btn")}
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
      {/*  new section */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpAnimation}
        className="bg-[#ecdecc]"
      >
        <h2 className="text-2xl text-gray-900 font-semibold text-center font-quicksand max-w-screen-md mx-auto pt-6">
          {t("home.objective.heading")}
        </h2>
        <Objective />
      </motion.section>

      <section className="bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="my-10 max-w-screen-lg mx-auto p-4 space-y-10"
        >
          <motion.div
            variants={fadeInUpAnimation}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 font-quicksand text-center">
              {t("home.third.texth")}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 186 17"
              fill="none"
              width={"300px"}
              height={"6px"}
              className="bg-[#d01c1f]"
            >
              <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
            </svg>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            <motion.button
              variants={fadeInUpAnimation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`before:ease relative h-12 w-[200px] overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer font-bold ${
                activeTab === "tab1"
                  ? "bg-redest-dark border-redest-dark"
                  : "bg-blue-dark border-[#d4ba97] hover:text-gray-800/90"
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              <span className="flex items-center gap-2">
                <FaPlaneDeparture className="animate-pulse" />
                {t("home.third.btn1")}
              </span>
            </motion.button>

            <motion.div variants={fadeInUpAnimation}>
              <Link
                to={"/pages/our-success-story"}
                className={`flex items-center justify-center gap-2 before:ease relative h-12 w-[200px] overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-2 py-3 tracking-wider cursor-pointer font-bold ${
                  activeTab === "tab2"
                    ? "bg-redest-dark border-redest-dark"
                    : "bg-blue-dark border-[#d4ba97] hover:text-gray-800/90"
                }`}
                onClick={() => setActiveTab("tab2")}
              >
                {t("home.third.btn2")}
              </Link>
            </motion.div>

            <motion.button
              variants={fadeInUpAnimation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`before:ease relative h-12 w-[200px] overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer font-bold ${
                activeTab === "tab3"
                  ? "bg-redest-dark border-redest-dark"
                  : "bg-blue-dark border-[#d4ba97] hover:text-gray-800/90"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              <span className="flex items-center gap-2">
                {t("home.third.btn3")}
                <GrServices className="animate-spin" />
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpAnimation}
            className="max-w-screen-lg"
          >
            {activeTab === "tab1" && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-white font-poppins p-4"
              >
                {imgs.map((item, inx) => (
                  <motion.div
                    key={inx}
                    variants={fadeInUpAnimation}
                    whileHover={{ scale: 1.05 }}
                    className={`hover:scale-105 transition-transform duration-500 relative ${
                      inx < 3 ? "lg:col-span-2" : ""
                    } ${inx >= 3 && inx < 5 ? "lg:col-span-3" : ""} ${
                      inx >= 5 ? "lg:col-span-6" : ""
                    }`}
                  >
                    <img
                      src={item.img}
                      alt="image"
                      className="w-full h-full object-cover rounded-4xl"
                    />
                    <p className="absolute top-4 left-5 text-white text-lg tracking-widest font-semibold font-quicksand">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
            {activeTab === "tab2" && (
              <div className="w-full md:flex items-center gap-4 space-y-2 bg-white font-poppins p-4"></div>
            )}
            {activeTab === "tab3" && (
              <div className="relative py-12 px-4 sm:px-6 lg:px-8">
                <Stats />
              </div>
            )}
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpAnimation}
        className="mb-20"
      >
        <Universitys />
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpAnimation}
        className="bg-red-gray my-6"
      >
        <Testimonial />
      </motion.section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpAnimation}
      >
        <ProgramsTab />
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpAnimation}
      >
        <Carusel />
      </motion.section>
    </div>
  );
};

export default HomePage;
