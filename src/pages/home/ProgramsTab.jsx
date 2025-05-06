import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiSearch, BiTestTube } from "react-icons/bi";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi2";
import { MdOutlineAddBusiness } from "react-icons/md";
import { TbRibbonHealth } from "react-icons/tb";

const ProgramsTab = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("tab1");

  const engineering1 = [
    { list: t("home.program.engineering.el1") },
    { list: t("home.program.engineering.el2") },
    { list: t("home.program.engineering.el3") },
    { list: t("home.program.engineering.el4") },
    { list: t("home.program.engineering.el5") },
    { list: t("home.program.engineering.el6") },
    { list: t("home.program.engineering.el7") },
    { list: t("home.program.engineering.el8") },
    { list: t("home.program.engineering.el9") },
    { list: t("home.program.engineering.el10") },
    { list: t("home.program.engineering.el11") },
    { list: t("home.program.engineering.el12") },
    { list: t("home.program.engineering.el13") },
    { list: t("home.program.engineering.el14") },
    { list: t("home.program.engineering.el15") },
  ];
  const scienceList = [
    { list: t("home.program.science.sl1") },
    { list: t("home.program.science.sl2") },
    { list: t("home.program.science.sl3") },
    { list: t("home.program.science.sl4") },
    { list: t("home.program.science.sl5") },
    { list: t("home.program.science.sl6") },
    { list: t("home.program.science.sl7") },
    { list: t("home.program.science.sl8") },
    { list: t("home.program.science.sl9") },
    { list: t("home.program.science.sl10") },
    { list: t("home.program.science.sl11") },
    { list: t("home.program.science.sl12") },
    { list: t("home.program.science.sl13") },
    { list: t("home.program.science.sl14") },
    { list: t("home.program.science.sl15") },
    { list: t("home.program.science.sl16") },
    { list: t("home.program.science.sl17") },
  ];

  const artsList = [
    { list: t("home.program.arts.al1") },
    { list: t("home.program.arts.al2") },
    { list: t("home.program.arts.al3") },
    { list: t("home.program.arts.al4") },
    { list: t("home.program.arts.al5") },
    { list: t("home.program.arts.al6") },
    { list: t("home.program.arts.al7") },
    { list: t("home.program.arts.al8") },
    { list: t("home.program.arts.al9") },
    { list: t("home.program.arts.al10") },
    { list: t("home.program.arts.al11") },
    { list: t("home.program.arts.al12") },
    { list: t("home.program.arts.al13") },
    { list: t("home.program.arts.al14") },
    { list: t("home.program.arts.al15") },
    { list: t("home.program.arts.al16") },
    { list: t("home.program.arts.al17") },
    { list: t("home.program.arts.al18") },
    { list: t("home.program.arts.al19") },
  ];

  const businessList = [
    { list: t("home.program.busness.al1") },
    { list: t("home.program.busness.al2") },
    { list: t("home.program.busness.al3") },
    { list: t("home.program.busness.al4") },
    { list: t("home.program.busness.al5") },
    { list: t("home.program.busness.al6") },
    { list: t("home.program.busness.al7") },
    { list: t("home.program.busness.al8") },
    { list: t("home.program.busness.al9") },
    { list: t("home.program.busness.al10") },
    { list: t("home.program.busness.al11") },
    { list: t("home.program.busness.al12") },
  ];

  const healthList = [
    { list: t("home.program.health.al1") },
    { list: t("home.program.health.al2") },
    { list: t("home.program.health.al3") },
    { list: t("home.program.health.al4") },
    { list: t("home.program.health.al5") },
  ];

  const socialList = [
    { list: t("home.program.social.al1") },
    { list: t("home.program.social.al2") },
    { list: t("home.program.social.al3") },
    { list: t("home.program.social.al4") },
    { list: t("home.program.social.al5") },
  ];

  return (
    <section className="bg-white">
      <div className="my-10 max-w-screen-lg mx-auto p-4 space-y-10">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 font-quicksand text-center">
            {t("home.program.ph1")}
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
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <button
            className={`flex items-center justify-center gap-2 before:ease relative w-[300px] h-20 overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-20 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-80 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer font-bold ${
              activeTab === "tab1"
                ? "bg-redest-dark border-redest-dark"
                : "bg-blue-dark border-[#d4ba97] hover:text-gray-800/90"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            <BiTestTube className="w-8 h-8" />{" "}
            {t("home.program.engineering.h1")}
          </button>
          <button
            className={`flex items-center justify-center gap-2 before:ease relative w-[300px] h-20 overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-20 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-80 uppercase rounded-xl px-2 py-3 tracking-wider cursor-pointer font-bold ${
              activeTab === "tab2"
                ? "bg-redest-dark border-redest-dark"
                : "bg-blue-dark border-[#d4ba97] hover:text-white/90"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            <HiLightBulb className="w-8 h-8" />

            {t("home.program.science.h1")}
          </button>
          <button
            className={`flex items-center justify-center gap-2 before:ease relative w-[300px] h-20 overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-20 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-80 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer font-bold ${
              activeTab === "tab3"
                ? "bg-redest-dark border-redest-dark"
                : "bg-blue-dark border-[#d4ba97] hover:text-gray-800/90"
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            <FaEye className="w-8 h-8" />

            {t("home.program.arts.h1")}
          </button>
          <button
            className={`flex items-center justify-center gap-2 before:ease relative w-[300px] h-20 overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-20 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-80 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer font-bold ${
              activeTab === "tab4"
                ? "bg-redest-dark border-redest-dark"
                : "bg-blue-dark border-[#d4ba97] hover:text-gray-800/90"
            }`}
            onClick={() => setActiveTab("tab4")}
          >
            <MdOutlineAddBusiness className="w-8 h-8" />

            {t("home.program.busness.h1")}
          </button>
          <button
            className={`flex items-center justify-center gap-2 before:ease relative w-[300px] h-20 overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-20 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-80 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer font-bold ${
              activeTab === "tab5"
                ? "bg-redest-dark border-redest-dark"
                : "bg-blue-dark border-[#d4ba97] hover:text-gray-800/90"
            }`}
            onClick={() => setActiveTab("tab5")}
          >
            <TbRibbonHealth className="w-8 h-8" />

            {t("home.program.health.h1")}
          </button>
          <button
            className={`flex items-center justify-center gap-2 before:ease relative w-[300px] h-20 overflow-hidden border text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-20 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-80 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer font-bold ${
              activeTab === "tab6"
                ? "bg-redest-dark border-redest-dark"
                : "bg-blue-dark border-[#d4ba97] hover:text-gray-800/90"
            }`}
            onClick={() => setActiveTab("tab6")}
          >
            <CiBookmarkCheck className="w-8 h-8" />

            {t("home.program.social.h1")}
          </button>
        </div>

        {/* Tabs Content */}
        <div className="max-w-screen-lg ">
          <div className="max-w-screen-lg">
            {activeTab === "tab1" && (
              <div className="">
                <h2 className="text-3xl font-bold font-quicksand ">
                  {t("home.program.engineering.h1")}
                </h2>
                <ul
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 bg-white font-poppins p-4"
                  style={{ listStyleType: "square" }}
                >
                  {engineering1.map((item, indx) => (
                    <li key={indx} className="space-y-2 marker:text-blue-dark">
                      {item.list}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {activeTab === "tab2" && (
            <div className="">
              <h2 className="text-3xl font-bold font-quicksand ">
                {t("home.program.science.h1")}
              </h2>
              <ul
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 bg-white font-poppins p-4"
                style={{ listStyleType: "square" }}
              >
                {scienceList.map((item, indx) => (
                  <li key={indx} className="space-y-2 marker:text-blue-dark">
                    {item.list}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "tab3" && (
            <div className="">
              <h2 className="text-3xl font-bold font-quicksand ">
                {t("home.program.arts.h1")}
              </h2>
              <ul
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 bg-white font-poppins p-4"
                style={{ listStyleType: "square" }}
              >
                {artsList.map((item, indx) => (
                  <li key={indx} className="space-y-2 marker:text-blue-dark">
                    {item.list}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "tab4" && (
            <div className="">
              <h2 className="text-3xl font-bold font-quicksand ">
                {t("home.program.busness.h1")}
              </h2>
              <ul
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 bg-white font-poppins p-4"
                style={{ listStyleType: "square" }}
              >
                {businessList.map((item, indx) => (
                  <li key={indx} className="space-y-2 marker:text-blue-dark">
                    {item.list}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "tab5" && (
            <div className="">
              <h2 className="text-3xl font-bold font-quicksand ">
                {t("home.program.health.h1")}
              </h2>
              <ul
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 bg-white font-poppins p-4"
                style={{ listStyleType: "square" }}
              >
                {healthList.map((item, indx) => (
                  <li key={indx} className="space-y-2 marker:text-blue-dark">
                    {item.list}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "tab6" && (
            <div className="">
              <h2 className="text-3xl font-bold font-quicksand ">
                {t("home.program.social.h1")}
              </h2>
              <ul
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 bg-white font-poppins p-4"
                style={{ listStyleType: "square" }}
              >
                {socialList.map((item, indx) => (
                  <li key={indx} className="space-y-2 marker:text-blue-dark">
                    {item.list}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramsTab;
