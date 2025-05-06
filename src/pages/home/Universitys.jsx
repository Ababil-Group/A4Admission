import React from "react";
import { useTranslation } from "react-i18next";
import u1 from "../../assets/university/u1.webp";
import u2 from "../../assets/university/u2.webp";
import u3 from "../../assets/university/u3.webp";
import u4 from "../../assets/university/u4.webp";
import u5 from "../../assets/university/u5.webp";
import u6 from "../../assets/university/u6.webp";
import u7 from "../../assets/university/u7.avif";
import u8 from "../../assets/university/u8.avif";
import u9 from "../../assets/university/u9.webp";
import u10 from "../../assets/university/u10.webp";
import u11 from "../../assets/university/u11.webp";
import u12 from "../../assets/university/u12.avif";
import u13 from "../../assets/university/u13.webp";
import u14 from "../../assets/university/u14.webp";
import u15 from "../../assets/university/u15.webp";
import u16 from "../../assets/university/u16.webp";
import { Link } from "react-router-dom";
const Universitys = () => {
  const { t } = useTranslation();
  const slides = [
    { img: u1 },
    { img: u2 },
    { img: u3 },
    { img: u4 },
    { img: u5 },
    { img: u6 },
    { img: u7 },
    { img: u8 },
    { img: u9 },
    { img: u10 },
    { img: u11 },
    { img: u12 },
    { img: u13 },
    { img: u14 },
    { img: u15 },
    { img: u16 },
  ];

  const extended = [...slides, ...slides];
  const IsContactButtonOpen = () => {
    setContactOpen((open) => !open);
  };
  return (
    <div className="relative overflow-hidden space-y-6 my-6">
      <h1 className="text-4xl text-gray-900 font-semibold text-center font-quicksand mx-auto py-6">
        {t("home.university.title")}
      </h1>
      <div className="slider-track flex whitespace-nowrap will-change-transform">
        {extended.map((image, i) => (
          <ul
            key={i}
            className="flex-shrink-0 m-2 flex items-center justify-center rounded-lg"
          >
            <li>
              <Link
                onClick={IsContactButtonOpen}
                className="flex items-center gap-5 text-white border-r px-4 font-semibold font-poppins cursor-pointer"
              >
                <img src={image.img} alt="" />
              </Link>
            </li>
          </ul>
        ))}
      </div>
      {/* <div className="flex items-center justify-center">
        <Link className="before:ease relative h-12 w-auto overflow-hidden border border-[#d01c1f] bg-[#d01c1f] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer">
          <span relative="relative z-10 ">{t("home.university.btn")}</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Universitys;
