import React from "react";
import contactimg from "../../assets/home/frontimg.webp";
import { useTranslation } from "react-i18next";
import { PiCertificateFill } from "react-icons/pi";
import { FaHandshakeAngle, FaUsers } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <div className="md:block w-full md:w-96 flex-shrink-0">
      <div className="sticky top-4 bg-redest-dark/60 p-4 rounded-lg shadow-sm">
        <div className="relative">
          <img src={contactimg} alt="" />
          <button className="absolute top-4 left-2 bg-white uppercase font-quicksand text-sm font-bold rounded-md text-redest-dark px-3 py-2">
            {t("studyabrod.canada.subTextR.btn")}
          </button>
        </div>
        <div className="bg-white p-2 space-y-3">
          <h2 className="text-2xl font-bold font-quicksand ">
            {t("studyabrod.canada.subTextR.subhr1")}
          </h2>
          <p className="text-sm font-medium font-quicksand text-gray-900">
            {t("studyabrod.canada.subTextR.subpr1")}
          </p>
          <div className="p-1 space-y-2">
            <h3 className="flex items-center text-redest-dark gap-4 font-bold text-md font-quicksand">
              <PiCertificateFill className="w-6 h-6" />
              <span>{t("studyabrod.canada.subTextR.subrph1")}</span>
            </h3>
            <p className="text-gray-900 text-sm font-quicksand font-medium">
              {t("studyabrod.canada.subTextR.subrpt1")}.
            </p>
            <h3 className="flex items-center text-redest-dark gap-4 font-bold text-md font-quicksand">
              <FaHandshakeAngle className="w-6 h-6" />
              <span>{t("studyabrod.canada.subTextR.subrph2")}</span>
            </h3>
            <p className="text-gray-900 text-sm font-quicksand font-medium">
              {t("studyabrod.canada.subTextR.subrpt2")}.
            </p>
            <h3 className="flex items-center text-redest-dark gap-4 font-bold text-md font-quicksand">
              <FaUsers className="w-6 h-6" />
              <span>{t("studyabrod.canada.subTextR.subrph3")}</span>
            </h3>
            <p className="text-gray-900 text-sm font-quicksand font-medium">
              {t("studyabrod.canada.subTextR.subrpt3")}.
            </p>
          </div>
          <div className="my-4 flex items-center gap-4">
            <Link
              to={"/contact"}
              className="before:ease relative h-12 w-auto overflow-hidden flex-1 text-center border border-redest-dark bg-redest-dark text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-80 uppercase rounded-xl px-4 py-3 tracking-wider cursor-pointer font-bold hover:scale-95 transition-transform duration-300"
            >
              {t("studyabrod.canada.subTextR.btn2")}
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=1234567890"
              target="_blank"
              className="border border-redest-dark p-2 rounded-lg hover:scale-95 transition-transform duration-300"
            >
              <RiWhatsappFill className="text-redest-dark w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
