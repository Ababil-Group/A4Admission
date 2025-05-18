import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import service1 from "../../assets/sevices/sb2.webp";
import service2 from "../../assets/sevices/sb3.webp";
import service3 from "../../assets/sevices/Studying-Abroad.webp";
import Testimonial from "../home/Testimonial";
import Universitys from "../home/Universitys";
import { Helmet } from "react-helmet";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: (custom) => ({
      opacity: 0,
      x:
        custom.direction === "left"
          ? -100
          : custom.direction === "right"
          ? 100
          : 0,
      y: custom.direction === "bottom" ? 100 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const titleControls = useAnimation();
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isTitleInView) {
      titleControls.start("visible");
    }
  }, [isTitleInView, titleControls]);

  const titleVariants = {
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

  const uniControls = useAnimation();
  const uniRef = useRef(null);
  const isUniInView = useInView(uniRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isUniInView) {
      uniControls.start("visible");
    }
  }, [isUniInView, uniControls]);

  const uniVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="">
      <Helmet>
        <title>Our Services | Study Abroad, Settlement & Career Coaching</title>
        <meta
          name="description"
          content="Explore our services including study abroad support, settlement assistance, and career coaching. Find your perfect study destination with our expert guidance."
        />
        <meta
          name="keywords"
          content="study destination, study abroad, settlement services, career coaching, student visa, overseas education"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://a4admission.com/pages/services" />
        <meta property="og:title" content="Services | A4 Admission" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://a4admission.com/pages/services"
        />
        <meta
          property="og:description"
          content="Meet A4 Admission, your trusted global partner in studying abroad. Learn about our story and how we support students globally."
        />
      </Helmet>
      <div className="max-w-screen-xl mx-auto p-2 mb-20">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
        >
          <motion.h1 className="text-5xl text-gray-800 font-bold font-quicksand mx-auto py-6 text-center">
            Our Services
          </motion.h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <motion.div
            custom={{ direction: "left" }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="space-y-3 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.img
              src={service3}
              alt="Study Abroad Support"
              className="rounded-lg w-full object-cover"
              whileHover={{ scale: 1.02 }}
            />
            <div className="">
              <motion.h2
                className="text-xl text-gray-800 font-bold font-quicksand"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={textVariants}
              >
                Study Abroad Support
              </motion.h2>
              <ul className="px-4" style={{ listStyleType: "square" }}>
                {[
                  "Expert education consulting",
                  "Help with school & visa applications*",
                  "Custodian arrangements*",
                  "Pre-arrival & onboarding assistance",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="marker:text-gray-500 font-quicksand font-medium text-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.1 + 0.3}
                    variants={textVariants}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            custom={{ direction: "bottom" }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="space-y-3 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.img
              src={service1}
              alt="Settlement Services"
              className="rounded-lg w-full object-cover"
              whileHover={{ scale: 1.02 }}
            />
            <div className="">
              <motion.h2
                className="text-xl text-gray-800 font-bold font-quicksand"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={textVariants}
              >
                Settlement Services
              </motion.h2>
              <ul className="px-4" style={{ listStyleType: "square" }}>
                {[
                  "Airport pickup & housing support",
                  "Bank account & SIM setup",
                  "SIN registration & bus pass help",
                  "Grocery assistance upon arrival",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="marker:text-gray-500 font-quicksand font-medium text-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.1 + 0.3}
                    variants={textVariants}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            custom={{ direction: "right" }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="space-y-3 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.img
              src={service2}
              alt="Career Coaching"
              className="rounded-lg w-full object-cover"
              whileHover={{ scale: 1.02 }}
            />
            <div className="">
              <motion.h2
                className="text-xl text-gray-800 font-bold font-quicksand"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={textVariants}
              >
                Career Coaching
              </motion.h2>
              <ul className="px-4" style={{ listStyleType: "square" }}>
                {[
                  "Mentorship for job search (part-time/full-time)",
                  "1-on-1 HR guidance (resume, job hunt, networking)",
                  "Interview prep & contract review",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="marker:text-gray-500 font-quicksand font-medium text-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.1 + 0.3}
                    variants={textVariants}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        ref={uniRef}
        initial="hidden"
        animate={uniControls}
        variants={uniVariants}
      >
        <Universitys />
      </motion.div>

      <div>
        <Testimonial />
      </div>
    </div>
  );
};

export default Services;
