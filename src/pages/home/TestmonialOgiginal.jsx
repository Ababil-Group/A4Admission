import React from "react";
import { useTranslation } from "react-i18next";
import u1 from "../../assets/carosel/u0.avif";
import u2 from "../../assets/carosel/u1.webp";
import u3 from "../../assets/carosel/u2.webp";
import u4 from "../../assets/carosel/u3.webp";
import u5 from "../../assets/carosel/u4.avif";
import u6 from "../../assets/carosel/u5.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
const TestmonialOgiginal = () => {
  const { t } = useTranslation();
  const cardCarousel = [
    {
      id: 1,
      img: u1,
      univeristy: "University of Nottingham",
      employ: "Employment Rate",
      employRate: "94.2%",
      accept: "Acceptance rate",
      acceptRate: "11%",
      gradrated: "Graduation Rate",
      gradrateRate: "93%",
      mediumEarn: "Median Earnings",
      mediumEarning: "£31,000 GBP",
      tution: "Tuition Fee Range",
      tutionFree: "£24,292.57 GBP per Year",
    },
    {
      id: 2,
      img: u2,
      univeristy: "University of Reading",
      employ: "Employment Rate",
      employRate: "96%",
      accept: "Acceptance rate",
      acceptRate: "58%",
      gradrated: "Graduation Rate",
      gradrateRate: "85%",
      mediumEarn: "Median Earnings",
      mediumEarning: "£23,000 GBP",
      tution: "Tuition Fee Range",
      tutionFree: "£21,613.75 GBP per Year",
    },
    {
      id: 3,
      img: u3,
      univeristy: "Loughborough University",
      employ: "Employment Rate",
      employRate: "83.7%",
      accept: "Acceptance rate",
      acceptRate: "68%",
      gradrated: "Graduation Rate",
      gradrateRate: "86%",
      mediumEarn: "Median Earnings",
      mediumEarning: "£30,000 GBP",
      tution: "Tuition Fee Range",
      tutionFree: "£20968.90 GBP per Year",
    },
    {
      id: 4,
      img: u4,
      univeristy: "University of Buckingham",
      employ: "Employment Rate",
      employRate: "83.4%",
      accept: "Acceptance rate",
      acceptRate: "18%",
      gradrated: "Graduation Rate",
      gradrateRate: "76%",
      mediumEarn: "Median Earnings",
      mediumEarning: "£24,175 GBP",
      tution: "Tuition Fee Range",
      tutionFree: "£17,811.90 GBP per Year",
    },
    {
      id: 5,
      img: u5,
      univeristy: "Cardiff University",
      employ: "Employment Rate",
      employRate: "95%",
      accept: "Acceptance rate",
      acceptRate: "20%",
      gradrated: "Graduation Rate",
      gradrateRate: "89%",
      mediumEarn: "Median Earnings",
      mediumEarning: "£25,959 GBP",
      tution: "Tuition Fee Range",
      tutionFree: "£19,121.92 GBP per Year",
    },
    {
      id: 6,
      img: u6,
      univeristy: "La Trobe University",
      employ: "Employment Rate",
      employRate: "89.4%",
      accept: "Acceptance rate",
      acceptRate: "100%",
      gradrated: "Graduation Rate",
      gradrateRate: "50.8%",
      mediumEarn: "Median Earnings",
      mediumEarning: "$67,000 AUD",
      tution: "Tuition Fee Range",
      tutionFree: "$34,696.92 AUD per Year",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#d4ba97]">
      <div className="bg-redest-dark px-2 md:px-16 py-10 text-white space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold font-quicksand tracking-widest">
            {t("home.testmoni.left.h1")}
          </h3>
          <h1 className="text-4xl md:text-5xl font-semibold font-quicksand tracking-wide">
            {t("home.testmoni.left.hb2")}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 186 17"
            fill="none"
            width={"300px"}
            height={"6px"}
            className="bg-white"
          >
            <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
          </svg>
        </div>

        <p className="text-lg font-semibold font-quicksand tracking-wide">
          {t("home.testmoni.left.p1")}
        </p>
      </div>
      {/* caresoul */}
      <div className="relative m-5 ">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="mySwiper"
          loop={true}
        >
          {cardCarousel.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-white p-4 rounded-lg shadow-lg h-full">
                <div className="flex items-center justify-center">
                  <img src={card.img} alt={card.univeristy} className="" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 font-quicksand">
                    {card.univeristy}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-800 font-quicksand">
                      {card.employ}
                    </p>
                    <p className="text-lg text-[#d01c1f] font-medium font-quicksand">
                      {card.employRate}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 font-quicksand">
                      {card.accept}
                    </p>
                    <p className="text-lg text-[#d01c1f] font-semibold font-quicksand">
                      {card.acceptRate}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 font-quicksand">
                      {card.gradrated}
                    </p>
                    <p className="text-lg text-[#d01c1f] font-semibold font-quicksand">
                      {card.gradrateRate}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 font-quicksand">
                      {card.mediumEarn}
                    </p>
                    <p className="text-lg text-[#d01c1f] font-semibold font-quicksand">
                      {card.mediumEarning}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 font-quicksand">
                      {card.tution}
                    </p>
                    <p className="text-lg text-[#d01c1f] font-semibold font-quicksand">
                      {card.tutionFree}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev bg-white/60 p-2 rounded-full w-16 h-16 shadow-md text-[#d01c1f] hover:bg-gray-100"></div>
        <div className="swiper-button-next bg-white/60 p-2 rounded-full shadow-md text-[#d01c1f] hover:bg-gray-100"></div>
      </div>
    </div>
  );
};

export default TestmonialOgiginal;
