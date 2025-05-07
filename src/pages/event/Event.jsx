import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/event/e1.webp";
import img2 from "../../assets/event/e2.webp";
import { FaYoutube } from "react-icons/fa";
const Event = () => {
  const { t } = useTranslation();
  const [playOpen, setPlayOpen] = useState(false);
  return (
    <div className="bg-white my-4 md:my-10">
      <hr class="hidden md:block h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="bg-cover bg-center max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[100vh] w-full md:min-h-[40vh] relative md:my-4">
        <div className="col-span-2 w-full h-full">
          <img src={img1} alt="" className="w-full h-full " />
        </div>

        <div className="col-span-1 relative w-full h-full">
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
      <section className="max-w-screen-xl mx-auto space-y-4 my-8">
        <h2 className="text-4xl tracking-wider text-gray-900 font-bold font-quicksand ">
          {t("event.subevent.sh1")}
        </h2>
        <p className="text-lg tracking-widest text-gray-800 uppercase font-bold font-quicksand ">
          {t("event.subevent.sp")}
        </p>
      </section>
      <section className="max-w-screen-2xl mx-auto space-y-4 my-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img src={img2} alt="" className="md:h-[700px] w-full" />
          <div className="flex flex-col space-y-3">
            <h2 className="text-4xl text-gray-900 font-bold font-quicksand ">
              {t("event.thirdevnt.th")}
            </h2>
            <p className="text-md text-gray-950 font-medium font-quicksand ">
              {t("event.thirdevnt.tp1")}
            </p>
            <p className="text-md text-gray-950 font-medium font-quicksand ">
              {t("event.thirdevnt.tp2")}
            </p>
            <p className="text-md text-gray-950 font-medium font-quicksand ">
              {t("event.thirdevnt.tp3")}
            </p>
            <p className="text-md text-gray-950 font-medium font-quicksand ">
              {t("event.thirdevnt.tp4")}
            </p>
            <p className="text-md text-gray-950 font-medium font-quicksand ">
              {t("event.thirdevnt.tp5")}
            </p>
            <p className="text-md text-gray-950 font-medium font-quicksand ">
              {t("event.thirdevnt.tp6")}
            </p>
            <div className="mt-6">
              <a
                href=""
                className="before:ease relative h-12 w-auto overflow-hidden border border-redest-dark bg-redest-dark text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-4 py-3 tracking-wider cursor-pointer font-bold"
              >
                {t("event.thirdevnt.btn")}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 max-w-screen-xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center py-8">
          <p className="text-xl col-span-2 text-gray-950 font-medium font-quicksand ">
            {t("event.forth.fpl")}
          </p>
          <div className="space-y-5 col-span-1">
            <h2 className="text-4xl text-gray-900 text-center font-bold font-quicksand ">
              {t("event.forth.fprh")}
            </h2>
            <p className="text-lg text-gray-950 font-medium text-center font-quicksand ">
              {t("event.forth.fprp")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
