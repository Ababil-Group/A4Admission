import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaYoutube } from "react-icons/fa6";
import Objective from "../home/Objective";
import img1 from "../../assets/about/our_team_1.webp";
import img2 from "../../assets/about/our_team_2.webp";
import img3 from "../../assets/about/our_team_3.webp";
import img4 from "../../assets/about/our_team_4.webp";
import img5 from "../../assets/about/pleasholder.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { Helmet } from "react-helmet";
import FacebookTestimonial from "../home/FacebookTestimonial";
const AboutUs = () => {
  const { t } = useTranslation();
  const [playOpen, setPlayOpen] = useState(false);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const imgs = [
    {
      img: img1,
      text: t("aboutus.third.imgt1"),
    },
    {
      img: img2,
      text: t("aboutus.third.imgt2"),
    },
    {
      img: img3,
      text: t("aboutus.third.imgt3"),
      textn: t("aboutus.third.imgt3n"),
    },
    {
      img: img4,
      text: t("aboutus.third.imgt4"),
      textn: t("aboutus.third.imgt4n"),
    },
    {
      img: img5,
      text: "No Image",
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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-white my-4 md:my-10"
    >
      <Helmet>
        <title>About Us | A4 Admission | Global Education Consultants</title>
        <meta
          name="description"
          content="A4 Admission is a global education consulting agency helping students achieve their dream of studying abroad. Learn about our story, mission, and experienced team."
        />
        <meta
          name="keywords"
          content="A4 Admission, study abroad consultants, global education agency, international student support, education guidance, study in Canada, USA, UK, Australia"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://a4admission.com/pages/about-us" />
        <meta property="og:title" content="About Us | A4 Admission" />
        <meta
          property="og:description"
          content="Meet A4 Admission, your trusted global partner in studying abroad. Learn about our story and how we support students globally."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://a4admission.com/pages/about-us"
        />
      </Helmet>
      <div className="bg-cover bg-center grid grid-cols-1 md:grid-cols-2 min-h-[100vh] w-full md:min-h-[60vh] relative md:my-4">
        <motion.div
          variants={fadeInUpAnimation}
          className="w-full h-full flex flex-col p-10 items-center justify-center bg-redest-dark space-y-8"
        >
          <h2 className="text-white text-4xl font-bold font-quicksand">
            {t("aboutus.tophero.ah")}
          </h2>
          <p className="text-white text-lg font-medium font-quicksand">
            {t("aboutus.tophero.ap")}
          </p>
        </motion.div>
        <div className="relative w-full h-full">
          {!playOpen ? (
            <div className="absolute inset-0 bg-gray-400/40 flex items-center justify-center z-10">
              <FaYoutube
                className="w-20 h-20 cursor-pointer text-redest-dark"
                onClick={() => setPlayOpen(true)}
              />
            </div>
          ) : null}

          <iframe
            src={`https://www.youtube.com/embed/sHiNsZxKM6s ${
              playOpen ? "?autoplay=1" : ""
            }`}
            title="A4 Admission - a Worldwide Education Consultancy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <motion.div
        variants={fadeInUpAnimation}
        className="my-8 max-w-screen-xl mx-auto min-h-[30vh] flex flex-col items-center justify-center p-2 space-y-4"
      >
        <h2 className="text-gray-900 text-4xl font-bold font-quicksand">
          {t("aboutus.second.ash")}
        </h2>
        <p className="text-gray-900 text-lg font-medium max-w-screen-sm text-center mx-auto font-quicksand">
          {t("aboutus.second.asp")}
        </p>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpAnimation}
      >
        <Objective />
      </motion.section>

      {/* <div>
        <FacebookTestimonial />{" "}
      </div> */}

      {/* <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="max-w-screen-xl mx-auto"
      >
        <h2 className="text-gray-900 text-4xl font-bold font-quicksand p-4">
          {t("aboutus.third.ath")}
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-white font-poppins p-4">
          {imgs.map((item, inx) => (
            <motion.div
              key={inx}
              variants={fadeInUpAnimation}
              whileHover={{ scale: 1.05 }}
              className={`relative overflow-hidden rounded-md ${
                inx < 3 ? "lg:col-span-2" : ""
              } ${inx >= 3 && inx < 5 ? "lg:col-span-3" : ""} ${
                inx >= 5 ? "lg:col-span-6" : ""
              }`}
            >
              <img
                src={item?.img || "https://via.placeholder.com/400 "}
                alt="image"
                className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <p className="absolute bottom-4 left-5 text-white text-lg tracking-widest font-semibold font-quicksand">
                {item.text}
              </p>
              {item.textn && (
                <p className="absolute bottom-20 left-5 text-white text-lg tracking-widest font-semibold font-quicksand">
                  {item.textn}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div> */}
    </motion.div>
  );
};

export default AboutUs;
