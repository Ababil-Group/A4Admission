import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaYoutube } from "react-icons/fa6";
import Objective from "../home/Objective";
import img1 from "../../assets/about/our_team_1.webp";
import img2 from "../../assets/about/our_team_2.webp";
import img3 from "../../assets/about/our_team_3.webp";
import img4 from "../../assets/about/our_team_4.webp";
import img5 from "../../assets/about/pleasholder.jpg";

const AboutUs = () => {
  const { t } = useTranslation();
  const [playOpen, setPlayOpen] = useState(false);
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

  return (
    <div className="bg-white my-4 md:my-10">
      <div className="bg-cover bg-center grid grid-cols-1 md:grid-cols-2 min-h-[100vh] w-full md:min-h-[60vh] relative md:my-4">
        <div className="w-full h-full flex flex-col p-10 items-center justify-center bg-redest-dark space-y-8">
          <h2 className="text-white text-4xl font-bold font-quicksand">
            {t("aboutus.tophero.ah")}
          </h2>
          <p className="text-white text-lg font-medium font-quicksand">
            {t("aboutus.tophero.ap")}
          </p>
        </div>
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
            src={`https://www.youtube.com/embed/sHiNsZxKM6s${
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

      <div className="my-8 max-w-screen-xl mx-auto min-h-[30vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-gray-900 text-4xl font-bold font-quicksand">
          {t("aboutus.second.ash")}
        </h2>
        <p className="text-gray-900 text-lg font-medium max-w-screen-sm text-center mx-auto font-quicksand">
          {t("aboutus.second.asp")}
        </p>
      </div>

      <Objective />

      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-gray-900 text-4xl font-bold font-quicksand">
          {t("aboutus.third.ath")}
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-white font-poppins p-4">
          {imgs.map((item, inx) => (
            <div
              key={inx}
              className={`relative overflow-hidden rounded-md ${
                inx < 3 ? "lg:col-span-2" : ""
              } ${inx >= 3 && inx < 5 ? "lg:col-span-3" : ""} ${
                inx >= 5 ? "lg:col-span-6" : ""
              }`}
            >
              <img
                src={item?.img || "https://via.placeholder.com/400"}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
