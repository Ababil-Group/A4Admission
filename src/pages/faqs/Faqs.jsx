import React from "react";
import faqsimg from "../../assets/faqs/fa1.webp";
import { useTranslation } from "react-i18next";
const Faqs = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white my-6">
      <section
        className="bg-cover bg-center py-16 px-2 h-auto sm:min-h-[70vh] relative flex items-center justify-center relative"
        style={{ backgroundImage: `url(${faqsimg})` }}
      >
        <div className="absolute inset-0 bg-gray-800/50"></div>
        <h1 className="flex flex-col items-center relative z-10 justify-end font-bold text-white text-5xl mt-14">{t("faqs.faqh")}</h1>
      </section>
    </div>
  );
};

export default Faqs;
