import React from "react";
import netherland from "../../assets/country/netherland.jpg";
import { useTranslation } from "react-i18next";
import FaqsCard from "../components/FaqsCard";
import studyInfo from "../../assets/country/cimg1.webp";
import Sidebar from "./Sidebar";
import Testimonial from "../home/Testimonial";
import ContactFrom from "../components/ContactFrom";
import Carusel from "../home/Carusel";
import { Helmet } from "react-helmet";
const NetherLand = () => {
  const { t } = useTranslation();
  const faqsList = [
    {
      q: t("studyabrod.netherland.subTextL.subhfh0"),
      a: t("studyabrod.netherland.subTextL.subhfp0"),
    },
    {
      q: t("studyabrod.netherland.subTextL.subhfh1"),
      a: t("studyabrod.netherland.subTextL.subhfp1"),
    },
    {
      q: t("studyabrod.netherland.subTextL.subhfh2"),
      a: t("studyabrod.netherland.subTextL.subhfp2"),
    },
    {
      q: t("studyabrod.netherland.subTextL.subhfh3"),
      a: t("studyabrod.netherland.subTextL.subhfp3"),
    },
  ];

  const faqsList2 = [
    {
      q: t("studyabrod.netherland.thirdText.thfh1"),
      h1: t("studyabrod.netherland.thirdText.thfh1ph1"),
      a1: t("studyabrod.netherland.thirdText.thfh1p1"),
      h2: t("studyabrod.netherland.thirdText.thfh1ph2"),
      a2: t("studyabrod.netherland.thirdText.thfh1p2"),
      h3: t("studyabrod.netherland.thirdText.thfh1ph3"),
      a3: t("studyabrod.netherland.thirdText.thfh1p3"),
      h4: t("studyabrod.netherland.thirdText.thfh1ph4"),
      a4: t("studyabrod.netherland.thirdText.thfh1p4"),
      h5: t("studyabrod.netherland.thirdText.thfh1ph5"),
      a5: t("studyabrod.netherland.thirdText.thfh1p5"),
      h6: t("studyabrod.netherland.thirdText.thfh1ph6"),
      a6: t("studyabrod.netherland.thirdText.thfh1p6"),
    },
    {
      q: t("studyabrod.netherland.thirdText.thfh2"),
      h1: t("studyabrod.netherland.thirdText.thfh2ph1"),
      a1: t("studyabrod.netherland.thirdText.thfh2p1"),

      h2: t("studyabrod.netherland.thirdText.thfh2ph2"),
      a2: t("studyabrod.netherland.thirdText.thfh2p2"),
      h3: t("studyabrod.netherland.thirdText.thfh2ph3"),
      a3: t("studyabrod.netherland.thirdText.thfh2p3"),
      h4: t("studyabrod.netherland.thirdText.thfh2ph4"),
      a4: t("studyabrod.netherland.thirdText.thfh2p4"),
      h5: t("studyabrod.netherland.thirdText.thfh2ph5"),
      a5: t("studyabrod.netherland.thirdText.thfh2p5"),
      h6: t("studyabrod.netherland.thirdText.thfh2ph6"),
      a6: t("studyabrod.netherland.thirdText.thfh2p6"),
      lists: [
        { list: t("studyabrod.netherland.thirdText.thfh2p4lm1") },
        { list: t("studyabrod.netherland.thirdText.thfh2p4lm2") },
        { list: t("studyabrod.netherland.thirdText.thfh2p4lm3") },
        { list: t("studyabrod.netherland.thirdText.thfh2p4lm4") },
        { list: t("studyabrod.netherland.thirdText.thfh2p4lm5") },
      ],
    },
    {
      q: t("studyabrod.netherland.thirdText.thfh3"),
      h1: t("studyabrod.netherland.thirdText.thfh3ph5"),
      a1: t("studyabrod.netherland.thirdText.thfh3p5"),
      h2: t("studyabrod.netherland.thirdText.thfh3ph6"),
      a2: t("studyabrod.netherland.thirdText.thfh3p6"),
      lists: [
        { list: t("studyabrod.netherland.thirdText.thfh2p6lm1") },
        { list: t("studyabrod.netherland.thirdText.thfh2p6lm2") },
        { list: t("studyabrod.netherland.thirdText.thfh2p6lm3") },
      ],
    },
  ];
  return (
    <div className="bg-white">
      <Helmet>
        <title>Study in Netherland | A4 Admission</title>
        <meta
          name="description"
          content="Explore top universities, world-class education, affordable living, and excellent career opportunities for international students in the Netherlands. Learn about student visas, costs, work options, and more with A4 Admission."
        />
        <meta
          name="keywords"
          content="Study in Netherlands, Dutch Universities, International Students, Student Visa Netherlands, Delft University, University of Amsterdam, Work in Netherlands, Living Cost Netherlands, Education in Holland, A4 Admission Netherlands"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://a4admission.com/pages/study-abroad-netherlands"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Study in Netherlands | A4 Admission" />
        <meta
          property="og:description"
          content="Explore Netherlands globally ranked universities, sustainable living, student-friendly cities, and career opportunities for international students. Your journey starts with A4 Admission."
        />

        <meta
          property="og:url"
          content="https://a4admission.com/pages/study-abroad-netherlands"
        />
        <meta property="og:locale" content="nl_NL" />
      </Helmet>

      {/* <hr class="hidden md:block h-px my-6 bg-gray-200 border-0 dark:bg-gray-400" /> */}
      <div
        className="bg-cover bg-center md:py-16 px-2 min-h-[50vh] w-full md:min-h-[80vh] relative md:my-4"
        style={{ backgroundImage: `url(${netherland})` }}
      >
        <div className="hidden sm:block bg-redest-dark/85 max-w-screen-sm p-8 md:ml-15 space-y-5">
          <h2 className="text-white text-4xl font-bold font-quicksand">
            {t("studyabrod.netherland.topText.nuath")}
          </h2>
          <p className="text-white text-lg font-quicksand font-medium">
            {t("studyabrod.netherland.topText.nuatp")}
          </p>
        </div>
      </div>
      <section className="block sm:hidden bg-redest-dark/85 max-w-screen-xl mx-auto p-4 space-y-5">
        <h2 className="text-white text-3xl font-bold font-quicksand">
          {t("studyabrod.netherland.topText.nuath")}
        </h2>
        <p className="text-white text-md font-quicksand font-medium">
          {t("studyabrod.netherland.topText.nuatp")}
        </p>
      </section>

      <section className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h1 className="text-gray-800 text-4xl font-bold font-quicksand">
              {t("studyabrod.netherland.subTextL.subTextLh")}
            </h1>
            <div className="mt-14">
              {faqsList.map((item, idx) => (
                <FaqsCard idx={idx} faqsList={item} />
              ))}
            </div>
          </div>
          <Sidebar />
        </div>
      </section>

      <section className="bg-red-gray py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto p-4 gap-18">
          <div className="">
            <img src={studyInfo} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-gray-800 text-4xl font-bold font-quicksand">
              {t("studyabrod.netherland.thirdText.th")}
            </h1>
            <div className="mt-14">
              {faqsList2.map((item, idx) => (
                <FaqsCard idx={idx} faqsList={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <ContactFrom />
      <Carusel />
    </div>
  );
};

export default NetherLand;
