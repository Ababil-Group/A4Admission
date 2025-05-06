import React from "react";
import service1 from "../../assets/sevices/sb2.webp";
import service2 from "../../assets/sevices/sb3.webp";
import service3 from "../../assets/sevices/Studying-Abroad.webp";
import Testimonial from "../home/Testimonial";
const Services = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto p-2">
        <h1 className="text-5xl text-gray-800 font-bold font-quicksand mx-auto py-6">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <img src={service3} alt="" />
            <div className="">
              <h2 className="text-xl text-gray-800 font-bold font-quicksand">
                Study Abroad Support
              </h2>
              <ul className="px-4" style={{ listStyleType: "square" }}>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Expert education consulting
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Help with school & visa applications*
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Custodian arrangements*
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Pre-arrival & onboarding assistance
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <img src={service1} alt="" />
            <div className="">
              <h2 className="text-xl text-gray-800 font-bold font-quicksand">
                Settlement Services
              </h2>
              <ul className="px-4" style={{ listStyleType: "square" }}>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Airport pickup & housing support
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Bank account & SIM setup
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  SIN registration & bus pass help
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Grocery assistance upon arrival
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <img src={service2} alt="" />
            <div className="">
              <h2 className="text-xl text-gray-800 font-bold font-quicksand">
                Career Coaching
              </h2>
              <ul className="px-4" style={{ listStyleType: "square" }}>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Mentorship for job search (part-time/full-time)
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  1-on-1 HR guidance (resume, job hunt, networking)
                </li>
                <li className="marker:text-gray-500 font-quicksand font-medium text-lg">
                  Interview prep & contract review
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </div>
  );
};

export default Services;
