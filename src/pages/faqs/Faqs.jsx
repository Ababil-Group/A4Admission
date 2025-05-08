import React from "react";
import faqsimg from "../../assets/faqs/fa1.webp";
import { useTranslation } from "react-i18next";
import FaqsCard from "../components/FaqsCard";
const Faqs = () => {
  const { t } = useTranslation();

  const faqList = [
    {
      fqgh: t("faqs.second.glh1"),
      fqgllist: [
        { list: t("faqs.second.glp1l1") },
        { list: t("faqs.second.glp1l2") },
        { list: t("faqs.second.glp1l3") },
        { list: t("faqs.second.glp1l4") },
        { list: t("faqs.second.glp1l5") },
        { list: t("faqs.second.glp1l6") },
        { list: t("faqs.second.glp1l7") },
        { list: t("faqs.second.glp1l8") },
      ],
    },
    {
      fqgh: t("faqs.second.glh2"),
      fqgllist: [
        { list: t("faqs.second.glp2l1") },
        { list: t("faqs.second.glp2l2") },
        { list: t("faqs.second.glp2l3") },
        { list: t("faqs.second.glp2l4") },
        { list: t("faqs.second.glp2l5") },
        { list: t("faqs.second.glp2l6") },
        { list: t("faqs.second.glp2l7") },
        { list: t("faqs.second.glp2l8") },
      ],
    },
    {
      fqgh: t("faqs.second.glh3"),
      fqgp: t("faqs.second.glp3l1"),
    },
    {
      fqgh: t("faqs.second.glh4"),
      fqgllist: [
        { list: t("faqs.second.glp4l1") },
        { list: t("faqs.second.glp4l2") },
        { list: t("faqs.second.glp4l3") },
        { list: t("faqs.second.glp4l4") },
        { list: t("faqs.second.glp4l5") },
      ],
    },
    {
      fqgh: t("faqs.second.glh5"),
      fqgp: t("faqs.second.glp5l1"),
    },
    {
      fqgh: t("faqs.second.glh6"),
      fqgp: t("faqs.second.glp6l1"),
    },
    {
      fqgh: t("faqs.second.glh7"),
      fqgllist: [
        { list: t("faqs.second.glp7l1") },
        { list: t("faqs.second.glp7l2") },
      ],
      fqgp: t("faqs.second.glp7l1"),
    },
    {
      fqgh: t("faqs.second.glh8"),
      fqgp: t("faqs.second.glp8l1"),
    },
    {
      fqgh: t("faqs.second.glh9"),
      fqgp: t("faqs.second.glp9l1"),
    },
    {
      fqgh: t("faqs.second.glh10"),
      fqgp: t("faqs.second.glp10l1"),
    },
    {
      fqgh: t("faqs.second.glh11"),
      fqgllist: [
        { list: t("faqs.second.glp11l1") },
        { list: t("faqs.second.glp11l2") },
        { list: t("faqs.second.glp11l3") },
        { list: t("faqs.second.glp11l4") },
        { list: t("faqs.second.glp11l5") },
      ],
    },
    {
      fqgh: t("faqs.second.glh12"),
      fqgllist: [
        { list: t("faqs.second.glp12l1") },
        { list: t("faqs.second.glp12l2") },
        { list: t("faqs.second.glp12l3") },
        { list: t("faqs.second.glp12l4") },
      ],
    },
    {
      fqgh: t("faqs.second.glh13"),
      fqgllist: [
        { list: t("faqs.second.glp13l1") },
        { list: t("faqs.second.glp13l2") },
      ],
    },
    {
      fqgh: t("faqs.second.glh14"),
      fqgp: t("faqs.second.glp14l1"),
    },
    {
      fqgh: t("faqs.second.glh15"),
      fqgp: t("faqs.second.glp15l1"),
    },
  ];

  const FaqList2 = [
    {
      fqph: t("faqs.second.plh1"),
      fqpp: t("faqs.second.plp1l1"),
    },
    {
      fqph: t("faqs.second.plh2"),
      fqpp: t("faqs.second.plp2l1"),
    },
    {
      fqph: t("faqs.second.plh3"),
      fqpp: t("faqs.second.plp3l1"),
    },
    {
      fqph: t("faqs.second.plh4"),
      fqpp: t("faqs.second.plp4l1"),
    },
    {
      fqph: t("faqs.second.plh5"),
      fqpllist: [
        { list: t("faqs.second.plp5l1") },
        { list: t("faqs.second.plp5l2") },
        { list: t("faqs.second.plp5l3") },
        { list: t("faqs.second.plp5l4") },
      ],
    },
    {
      fqph: t("faqs.second.plh6"),
      fqpp: t("faqs.second.plp6l1"),
    },
    {
      fqph: t("faqs.second.plh7"),
      fqpllist: [
        { list: t("faqs.second.plp7l1") },
        { list: t("faqs.second.plp7l2") },
      ],
    },
    {
      fqph: t("faqs.second.plh8"),
      fqpp: t("faqs.second.plp8l1"),
    },
    {
      fqph: t("faqs.second.plh9"),
      fqpp: t("faqs.second.plp9l1"),
    },
    {
      fqph: t("faqs.second.plh10"),
      fqpp: t("faqs.second.plp10l1"),
    },
  ];
  return (
    <div className="bg-white my-6">
      <section
        className="bg-cover bg-center py-16 px-2 h-auto sm:min-h-[70vh] flex items-center justify-center relative"
        style={{ backgroundImage: `url(${faqsimg})` }}
      >
        <div className="absolute inset-0 bg-gray-800/50"></div>
        <h1 className="flex flex-col items-center relative z-10 justify-end font-bold text-white text-5xl mt-14">
          {t("faqs.faqh")}
        </h1>
      </section>
      <section className="max-w-screen-lg mx-auto px-2 my-16 space-y-3">
        <h2 className="text-3xl font-bold font-quicksand text-gray-900">
          {t("faqs.second.sh")}
        </h2>
        <p className="font-quicksand text-lg font-medium">
          {t("faqs.second.sp1")}
        </p>
        <p className="font-quicksand text-lg font-medium">
          {t("faqs.second.sp2")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <button className="before:ease relative h-12 w-[220px] overflow-hidden border border-redest-dark bg-redest-dark text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer">
            <a href="#genaral" relative="relative z-10" className="font-bold">
              {t("faqs.second.btn1")}
            </a>
          </button>
          <button className="before:ease relative h-12 w-[220px] overflow-hidden border border-redest-dark bg-redest-dark text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer">
            <a href="#parents" relative="relative z-10" className="font-bold">
              {t("faqs.second.btn2")}
            </a>
          </button>
          <button className="before:ease relative h-12 w-[220px] overflow-hidden border border-redest-dark bg-redest-dark text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40 uppercase rounded-xl px-7 py-3 tracking-wider cursor-pointer">
            <a href="#student" relative="relative z-10" className="font-bold">
              {t("faqs.second.btn3")}
            </a>
          </button>
        </div>
      </section>

      <section
        id="genaral"
        className="max-w-screen-lg mx-auto px-2 my-16 space-y-3"
      >
        <h2 className="text-xl font-bold font-quicksand text-gray-900">
          {t("faqs.second.btn1")}
        </h2>
        <div className="mt-14">
          {faqList.map((item, idx) => (
            <FaqsCard idx={idx} faqsList={item} />
          ))}
        </div>
      </section>

      <section
        id="parents"
        className="max-w-screen-lg mx-auto px-2 my-16 space-y-3"
      >
        <h2 className="text-xl font-bold font-quicksand text-gray-900">
          {t("faqs.second.btn2")}
        </h2>
        <div className="mt-14">
          {FaqList2.map((item, idx) => (
            <FaqsCard idx={idx} faqsList={item} />
          ))}
        </div>
      </section>
      <section
        id="student"
        className="max-w-screen-lg mx-auto px-2 my-16 space-y-3"
      >
        <h2 className="text-xl font-bold font-quicksand text-gray-900">
          {t("faqs.second.btn3")}
        </h2>
      </section>
    </div>
  );
};

export default Faqs;
