import React from "react";
import sweden from "../../assets/country/sweden.jpg";
import { useTranslation } from "react-i18next";
import FaqsCard from "../components/FaqsCard";
import studyInfo from "../../assets/country/cimg1.webp";
import Sidebar from "./Sidebar";
import Testimonial from "../home/Testimonial";
import ContactFrom from "../components/ContactFrom";
import Carusel from "../home/Carusel";
import { Helmet } from "react-helmet";
const Sweden = () => {
  const { t } = useTranslation();
  const faqsList = [
    {
      q: t("studyabrod.sweden.subTextL.subhfh0"),
      a: t("studyabrod.sweden.subTextL.subhfp0"),
    },
    {
      q: t("studyabrod.sweden.subTextL.subhfh1"),
      a: t("studyabrod.sweden.subTextL.subhfp1"),
    },
    {
      q: t("studyabrod.sweden.subTextL.subhfh2"),
      a: t("studyabrod.sweden.subTextL.subhfp2"),
    },
    {
      q: t("studyabrod.sweden.subTextL.subhfh3"),
      a: t("studyabrod.sweden.subTextL.subhfp3"),
    },
  ];

  const faqsList2 = [
    {
      q: t("studyabrod.sweden.thirdText.thfh1"),
      h1: t("studyabrod.sweden.thirdText.thfh1ph1"),
      a1: t("studyabrod.sweden.thirdText.thfh1p1"),
      h2: t("studyabrod.sweden.thirdText.thfh1ph2"),
      a2: t("studyabrod.sweden.thirdText.thfh1p2"),
      h3: t("studyabrod.sweden.thirdText.thfh1ph3"),
      a3: t("studyabrod.sweden.thirdText.thfh1p3"),
      h4: t("studyabrod.sweden.thirdText.thfh1ph4"),
      a4: t("studyabrod.sweden.thirdText.thfh1p4"),
      h5: t("studyabrod.sweden.thirdText.thfh1ph5"),
      a5: t("studyabrod.sweden.thirdText.thfh1p5"),
      h6: t("studyabrod.sweden.thirdText.thfh1ph6"),
      a6: t("studyabrod.sweden.thirdText.thfh1p6"),
    },
    {
      q: t("studyabrod.sweden.thirdText.thfh2"),
      h1: t("studyabrod.sweden.thirdText.thfh2ph1"),
      a1: t("studyabrod.sweden.thirdText.thfh2p1"),

      h2: t("studyabrod.sweden.thirdText.thfh2ph2"),
      a2: t("studyabrod.sweden.thirdText.thfh2p2"),
      h3: t("studyabrod.sweden.thirdText.thfh2ph3"),
      a3: t("studyabrod.sweden.thirdText.thfh2p3"),
      h4: t("studyabrod.sweden.thirdText.thfh2ph4"),
      a4: t("studyabrod.sweden.thirdText.thfh2p4"),
      h5: t("studyabrod.sweden.thirdText.thfh2ph5"),
      a5: t("studyabrod.sweden.thirdText.thfh2p5"),
      h6: t("studyabrod.sweden.thirdText.thfh2ph6"),
      a6: t("studyabrod.sweden.thirdText.thfh2p6"),
      lists: [
        { list: t("studyabrod.sweden.thirdText.thfh2p4lm1") },
        { list: t("studyabrod.sweden.thirdText.thfh2p4lm2") },
        { list: t("studyabrod.sweden.thirdText.thfh2p4lm3") },
        { list: t("studyabrod.sweden.thirdText.thfh2p4lm4") },
        { list: t("studyabrod.sweden.thirdText.thfh2p4lm5") },
      ],
    },
    {
      q: t("studyabrod.sweden.thirdText.thfh3"),
      h1: t("studyabrod.sweden.thirdText.thfh3ph5"),
      a1: t("studyabrod.sweden.thirdText.thfh3p5"),
      h2: t("studyabrod.sweden.thirdText.thfh3ph6"),
      a2: t("studyabrod.sweden.thirdText.thfh3p6"),
      lists: [
        { list: t("studyabrod.sweden.thirdText.thfh2p6lm1") },
        { list: t("studyabrod.sweden.thirdText.thfh2p6lm2") },
        { list: t("studyabrod.sweden.thirdText.thfh2p6lm3") },
      ],
    },
  ];
  return (
    <div className="bg-white">
      <Helmet>
        <title>Study in Sweden | A4 Admission</title>

        <meta
          name="description"
          content="Discover why Sweden is a top destination for international students. Learn about tuition fees, cost of living, student visas, job opportunities, and more."
        />
        <meta
          name="keywords"
          content="study in Sweden, Sweden universities, Sweden student visa, cost of living in Sweden, Swedish education, international students Sweden"
        />
        <meta
          property="og:title"
          content="Study in Sweden - Start Your Education Journey"
        />
        <meta
          property="og:description"
          content="Explore Sweden's world-class education system, vibrant student life, and future career opportunities."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://a4admission.com/pages/study-abroad-sweden"
        />

        <link
          rel="canonical"
          href="https://a4admission.com/pages/study-abroad-sweden"
        />
      </Helmet>
      {/* <hr class="hidden md:block h-px my-6 bg-gray-200 border-0 dark:bg-gray-400" /> */}
      <div
        className="bg-cover bg-center md:py-16 px-2 min-h-[50vh] w-full md:min-h-[80vh] relative md:my-4"
        style={{ backgroundImage: `url(${sweden})` }}
      >
        <div className="hidden sm:block bg-redest-dark/85 max-w-screen-sm p-8 md:ml-15 space-y-5">
          <h2 className="text-white text-4xl font-bold font-quicksand">
            {t("studyabrod.sweden.topText.nuath")}
          </h2>
          <p className="text-white text-lg font-quicksand font-medium">
            {t("studyabrod.sweden.topText.nuatp")}
          </p>
        </div>
      </div>
      <section className="block sm:hidden bg-redest-dark/85 max-w-screen-xl mx-auto p-4 space-y-5">
        <h2 className="text-white text-3xl font-bold font-quicksand">
          {t("studyabrod.sweden.topText.nuath")}
        </h2>
        <p className="text-white text-md font-quicksand font-medium">
          {t("studyabrod.sweden.topText.nuatp")}
        </p>
      </section>

      <section className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h1 className="text-gray-800 text-4xl font-bold font-quicksand">
              {t("studyabrod.sweden.subTextL.subTextLh")}
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
              {t("studyabrod.sweden.thirdText.th")}
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

export default Sweden;
