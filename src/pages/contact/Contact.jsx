import React, { useState } from "react";
import frontImge from "../../assets/contact/frontimg.webp";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { LuLoader, LuMapPinCheckInside } from "react-icons/lu";
import { TbLoader } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { Helmet } from "react-helmet";
import contact from "../../assets/contact/contact.jpg";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [message, setMessage] = useState("");
  const [messageTouched, setMessageTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const isNameInvalid = nameTouched && name.trim() === "";
  const isEmailInvalid =
    emailTouched && (email.trim() === "" || !validateEmail(email));
  const isPhoneInvalid = phoneTouched && phone.trim() === "";
  const isMessageInvalid = messageTouched && message.trim() === "";

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    setNameTouched(true);
    setEmailTouched(true);
    setPhoneTouched(true);
    setMessageTouched(true);
    setTimeout(() => {
      if (
        !isNameInvalid &&
        !isEmailInvalid &&
        !isPhoneInvalid &&
        !isMessageInvalid
      ) {
        toast.success("Thank you for sending your message!");
        console.log({ name, email, phone, message });
      }
      setLoading(false);
    }, 2000);
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

  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const offices = [
    {
      id: 1,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.9640289308422!2d-82.30222972452455!3d27.933747976053485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2cdd7a33e2333%3A0x587bb14c838971a1!2s1111%20Oakfield%20Dr%20Suite%20115E%2C%20Brandon%2C%20FL%2033511%2C%20USA!5e0!3m2!1sen!2sbd!4v1747805254549!5m2!1sen!2sbd",
      title: t("contact.location.address1"),
      subtitle: t("contact.location.address1sub"),
      phone: "+447465268767",
      email: "hello@a4admission.com",
    },
    {
      id: 2,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3145154081726!2d-0.1369272235500494!3d51.50744561070026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d122d6fe2b%3A0x3c91549f3a2dd6a!2s33%20St%20James's%20Square%2C%20London%20SW1Y%204JS%2C%20UK!5e0!3m2!1sen!2sbd!4v1747805396911!5m2!1sen!2sbd",
      title: t("contact.location.address2"),
      subtitle: t("contact.location.address2sub"),
      phone: "+447465268767",
      email: "hello@a4admission.com",
    },
    {
      id: 3,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0978564496663!2d55.271088675306366!3d25.199922231590477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42813dbc8057%3A0x3c7ace4f38f16ac0!2sServcorp%20Boulevard%20Plaza%20-%20Coworking%2C%20Offices%2C%20Virtual%20Offices%20%26%20Meeting%20Rooms!5e0!3m2!1sen!2sbd!4v1747805554958!5m2!1sen!2sbd",
      title: t("contact.location.address3"),
      subtitle: t("contact.location.address3sub"),
      phone: "+447465268767",
      email: "hello@a4admission.com",
    },
    {
      id: 4,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7238.138825610877!2d91.8714133924974!3d24.89561384352812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3rd%20floor%20of%20Ananda%20Tower%2C%20Jail%20Road%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1747805715118!5m2!1sen!2sbd",
      title: t("contact.location.address4"),
      subtitle: t("contact.location.address4sub"),
      phone: "+447465268767",
      email: "hello@a4admission.com",
    },
    {
      id: 5,
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.5501459954958!2d91.78499767522949!3d22.3328468417151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9292a030ae5%3A0x799bd0295bf01c54!2sArtillery%20Rd%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1747805872158!5m2!1sen!2sbd",
      title: t("contact.location.address5"),
      subtitle: t("contact.location.address5sub"),
      phone: "+447465268767",
      email: "hello@a4admission.com",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-white my-6"
    >
      <Helmet>
        <title>Contact Us | A4 Admission Study Support</title>
        <meta
          name="description"
          content="Need help with studying abroad? Contact our education advisors for personalized support, online or face-to-face in your area."
        />
        <meta
          name="keywords"
          content="contact study abroad, education advisors, overseas education help, application support, A4 Admission"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://a4admission.com/pages/contact" />
        <meta
          property="og:title"
          content="Need Help? Let's Connect A4 Admission!"
        />
        <meta
          property="og:description"
          content="Got questions about studying abroad or need support with your application? We're here to guide you every step of the way."
        />
        <meta
          property="og:url"
          content="https://a4admission.com/pages/contact"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="bg-cover bg-center py-16 px-4 h-auto sm:min-h-screen relative flex items-center justify-center"
        style={{ backgroundImage: `url(${frontImge})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gray-800/20"></div>
        <motion.div
          variants={fadeInUpAnimation}
          className="flex flex-col items-center justify-center max-w-screen-sm mx-auto relative z-10 space-y-4 px-4"
        >
          <h1 className="text-3xl sm:text-5xl text-white font-bold text-center font-quicksand mx-auto py-6">
            {t("contact.contactFront.heading")}
          </h1>
          <p className="text-base sm:text-lg text-white font-bold text-center font-quicksand mx-auto py-6">
            {t("contact.contactFront.subheading")}
          </p>
        </motion.div>
      </motion.section>

      {/* Intro Section */}
      <motion.section
        variants={fadeInAnimation}
        className="bg-white p-4 sm:p-6"
      >
        <div className=" max-w-screen-xl mx-auto sm:ml-10 mt-8">
          <p className="text-base sm:text-lg text-gray-900 font-quicksand">
            {t("contact.subContact.p1")}
          </p>
        </div>
        <p className="max-w-screen-xl mx-auto sm:ml-10 mt-2 text-base sm:text-lg text-gray-900 font-quicksand">
          {t("contact.subContact.p2")}
        </p>
        <div className="max-w-screen-xl mx-auto sm:ml-10 mt-2">
          <p className="text-lg sm:text-xl text-gray-800 font-semibold font-quicksand mx-auto">
            {t("contact.subContact.p3")}
          </p>
          <p className="text-base sm:text-lg text-gray-800 font-quicksand mx-auto">
            {t("contact.subContact.p2")}
          </p>
          <p className="text-lg sm:text-xl text-gray-800 font-semibold font-quicksand mx-auto">
            {t("contact.subContact.p4")}
          </p>
          <p className="text-base sm:text-lg text-gray-700 font-quicksand mx-auto">
            {t("contact.subContact.p5")}
          </p>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        id="contact"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="bg-white p-4 sm:p-6"
      >
        <h1 className="text-3xl sm:text-5xl text-gray-800 font-bold text-center font-quicksand mx-auto py-6">
          {t("contact.from.heading")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-10 max-w-screen-xl mx-auto">
          <motion.div
            variants={fadeInUpAnimation}
            className="md:col-span-2 hidden md:block"
          >
            <motion.img
              src={contact}
              alt="Contact us"
              className="w-full h-full rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.div
            variants={fadeInUpAnimation}
            className="md:col-span-3 col-span-1"
          >
            <motion.form
              className="space-y-4"
              onSubmit={submitForm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="space-y-2">
                <label className="block text-gray-700 mb-1">
                  {t("contact.from.name")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setNameTouched(true)}
                  placeholder={t("contact.from.namep")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    isNameInvalid
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  required
                />
                {isNameInvalid && (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required.
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 mb-1" htmlFor="email">
                  {t("contact.from.email")}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  placeholder={t("contact.from.emailp")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    isEmailInvalid
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  required
                />
                {emailTouched && email.trim() === "" ? (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required.
                  </p>
                ) : emailTouched && !validateEmail(email) ? (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter a valid email address.
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 mb-1" htmlFor="phone">
                  {t("contact.from.number")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => setPhoneTouched(true)}
                  placeholder={t("contact.from.phonep")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    isPhoneInvalid
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  required
                />
                {isPhoneInvalid && (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required.
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 mb-1" htmlFor="message">
                  {t("contact.from.message")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => setMessageTouched(true)}
                  placeholder={t("contact.from.messagep")}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    isMessageInvalid
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                  required
                  rows={4}
                />
                {isMessageInvalid && (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required.
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                className="bg-redest-dark text-white px-5 py-3 rounded-md hover:bg-red-500/90 font-bold font-quicksand hover:shadow-md cursor-pointer w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <TbLoader className="animate-spin w-4 h-4 mx-auto" />
                ) : (
                  <span className="flex items-center gap-2 justify-center">
                    {t("contact.from.btn")}
                    <FaArrowRight className="animate-pulse" />
                  </span>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Offices Section */}
        <div className="max-w-screen-lg mx-auto mt-10 sm:px-0">
          <motion.h2
            className="font-bold text-3xl sm:text-5xl max-w-sm border-b-4 pb-2 border-redest-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Look For The <span className="text-redest-dark">Office Near</span>{" "}
            You
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-10">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg overflow-hidden border border-[#6e767e] shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-[250px] sm:h-[300px] w-full">
                  <iframe
                    src={office.mapSrc}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-2 space-y-4">
                  <div className="text-start py-2 space-y-3 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <LuMapPinCheckInside className="text-[#6587cf] size-5" />
                      <h2 className="text-xl sm:text-2xl text-[#26587D] font-bold font-quicksand py-2">
                        {office.title}
                      </h2>
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 font-medium font-quicksand">
                      {office.subtitle}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-0">
                    <a className="flex items-center gap-2 justify-center sm:justify-start hover:text-redest-dark text-gray-800 font-poppins transition-colors duration-200 cursor-pointer">
                      <FaWhatsappSquare className="text-blue-dark" />
                      <p className="font-poppins">{office.phone}</p>
                    </a>
                    <div className="h-px sm:h-5 w-full sm:w-px bg-gray-200 mx-auto" />
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2 justify-center sm:justify-end hover:text-redest-dark text-gray-800 font-poppins transition-colors duration-200"
                    >
                      <IoMail className="text-blue-dark" />
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Contact;
