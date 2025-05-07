import React, { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa6";
import { TbLoader } from "react-icons/tb";

const ContactFrom = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-screen-xl mx-auto p-4 my-8">
      <div className="col-span-2 space-y-4 mt-5">
        <div className="space-y-3">
          <h2 className="text-4xl text-gray-800 font-bold font-quicksand py-2">
            {t("contact.extra.ch1")}
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 186 17"
            fill="none"
            width={"300px"}
            height={"6px"}
            className="bg-redest-dark"
          >
            <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
          </svg>
          <p className="text-lg text-gray-700 font-medium font-quicksand">
            {t("contact.extra.cp1")}
          </p>
          <p className="text-lg text-gray-700 font-medium font-quicksand">
            {t("contact.extra.cp2")}
          </p>
          <p className="text-lg text-gray-700 font-medium font-quicksand">
            {t("contact.extra.cp3")}
          </p>
        </div>
      </div>
      <div className="col-span-3">
        <form className="space-y-4" onSubmit={submitForm}>
          <div className="space-y-2">
            <label className="block text-gray-700 mb-1">
              {t("contact.from.name")} <span className="text-red-500">*</span>
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
              {t("contact.from.number")} <span className="text-red-500">*</span>
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
    </div>
  );
};

export default ContactFrom;
