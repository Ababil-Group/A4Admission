import React, { useState } from "react";
import frontImge from "../../assets/contact/frontimg.webp";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { LuLoader } from "react-icons/lu";
import { TbLoader } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
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
        toast.success("Thank you sending Message");

        console.log({ name, email, phone, message });
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="mb-10">
      <section
        className="bg-cover bg-center py-16 px-2 h-auto sm:min-h-screen relative flex items-center justify-center"
        style={{ backgroundImage: `url(${frontImge})` }}
      >
        <div className="absolute inset-0 bg-gray-800/20"></div>
        <div className="flex flex-col items-center justify-center max-w-screen-sm mx-auto relative z-10">
          <h1 className="text-5xl text-white font-bold text-center font-quicksand mx-auto py-6">
            {t("contact.contactFront.heading")}
          </h1>
          <p className="text-lg text-white font-bold text-center font-quicksand mx-auto py-6">
            {t("contact.contactFront.subheading")}
          </p>
        </div>
      </section>

      <section className="bg-white p-2">
        <div className="space-y-2 max-w-screen-xl md:ml-10 mt-8">
          <p className="text-lg text-gray-900 font-quicksand">
            {t("contact.subContact.p1")}
          </p>
        </div>
        <p className="max-w-screen-xl md:ml-10 mt-4 text-lg text-gray-900 font-quicksand">
          {t("contact.subContact.p2")}
        </p>
        <div className="max-w-screen-xl md:ml-10 mt-8">
          <p className="text-xl text-gray-800 font-semibold font-quicksand mx-auto">
            {t("contact.subContact.p3")}
          </p>
          <p className="text-lg text-gray-800 font-quicksand mx-auto">
            {t("contact.subContact.p2")}
          </p>
          <p className="text-xl text-gray-800 font-semibold font-quicksand mx-auto">
            {t("contact.subContact.p4")}
          </p>
          <p className="text-lg text-gray-700 font-quicksand mx-auto">
            {t("contact.subContact.p5")}
          </p>
        </div>
        <h1 className="text-5xl text-gray-800 font-bold text-center font-quicksand mx-auto py-6">
          {t("contact.from.heading")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-screen-xl mx-auto">
          <div className="col-span-3">
            <form className="space-y-4" onSubmit={submitForm}>
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

              <button
                type="submit"
                className="bg-redest-dark text-white px-5 py-2 rounded-md hover:bg-red-500/90 font-bold font-quicksand hover:shadow-md cursor-pointer"
              >
                {loading ? (
                  <TbLoader className="animate-spin w-4 h-4" />
                ) : (
                  <span className="flex items-center gap-2">
                    {t("contact.from.btn")}{" "}
                    <FaArrowRight className="animate-pulse" />
                  </span>
                )}
              </button>
            </form>
          </div>
          <div className="col-span-2 space-y-4 mt-5">
            {/* <div className="space-y-3">
              <h2 className="text-2xl text-gray-800 font-bold font-quicksand mx-auto py-2">
                {t("contact.location.location2")}
              </h2>
              <p className="text-lg text-gray-700 font-medium font-quicksand">
                {t("contact.location.number2")}
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl text-gray-800 font-bold font-quicksand mx-auto py-2">
                {t("contact.location.location2")}
              </h2>
              <p className="text-lg text-gray-700 font-medium font-quicksand">
                {t("contact.location.number1")}
              </p>
            </div> */}
            <div className="space-y-3">
              <h2 className="text-2xl text-gray-800 font-bold font-quicksand py-2">
                {t("contact.location.address1")}
              </h2>
              <p className="text-lg text-gray-700 font-medium font-quicksand">
                {t("contact.location.address1sub")}
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl text-gray-800 font-bold font-quicksand mx-auto py-2">
                {t("contact.location.address2")}
              </h2>
              <p className="text-lg text-gray-700 font-medium font-quicksand">
                {t("contact.location.address2sub")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
