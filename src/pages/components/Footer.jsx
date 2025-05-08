import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneVolume,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaTiktok } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="py-8 border-b border-gray-50 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-center gap-4">
          <div className="col-span-1 flex flex-col items-center gap-6">
            <img src={logo} alt="logo" className="w-32" />
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/a4admission" target="_blank">
                <FaInstagram className="bg-blue-dark size-8 p-1 rounded-md text-white hover:bg-redest-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/a4admission/" target="_blank">
                <FaFacebook className="bg-blue-dark size-8 p-1 rounded-md text-white hover:bg-redest-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/@a4.admission" target="_blank">
                <FaYoutube className="bg-blue-dark size-8 p-1 rounded-md text-white hover:bg-redest-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/company/a4-admission/"
                target="_blank"
              >
                <FaLinkedin className="bg-blue-dark size-8 p-1 rounded-md text-white hover:bg-redest-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
              <a href="https://twitter.com/a4admission" target="_blank">
                <FaTwitter className="bg-blue-dark size-8 p-1 rounded-md text-white hover:bg-red-600 hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
              <a href="https://ro.pinterest.com/aforadmission/" target="_blank">
                <FaPinterest className="bg-blue-dark size-8 p-1 rounded-md text-white hover:bg-redest-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
              <a
                href="https://www.tiktok.com/@a4admissionofficial"
                target="_blank"
              >
                <FaTiktok className="bg-blue-dark size-8 p-1 rounded-md text-white hover:bg-redest-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-3 pl-6 p-2">
            <h2 className="font-quicksand font-semibold text-gray-800 text-2xl">
              Contact Us
            </h2>

            <a
              href="https://g.co/kgs/mxf7nKs"
              target="_blank"
              className="flex items-center gap-2 hover:text-redest-dark text-gray-800 font-quicksand transition-colors duration-200 cursor-pointer"
            >
              <FaLocationDot className="text-blue-dark" />
              <p className="font-poppins">
                <span className="font-bold font-quicksand pr-2">
                  USA [ Mission HQ ] :
                </span>
                1111 Oakfield Dr., Ste. 115E ,Brandon ,FL 33511
              </p>
            </a>
            <a
              href="https://g.co/kgs/pFNT27o"
              target="_blank"
              className="flex items-center gap-2 hover:text-redest-dark text-gray-800 font-poppins transition-colors duration-200 cursor-pointer"
            >
              <FaLocationDot className="text-blue-dark" />
              <p className="font-poppins">
                <span className="font-bold font-quicksand">UK :</span> 33 St
                James's Square, London SW1Y 4JS, United Kingdom
              </p>
            </a>
            <a
              href="https://g.co/kgs/Yj1B78M"
              target="_blank"
              className="flex items-center gap-2 hover:text-redest-dark text-gray-800 font-poppins transition-colors duration-200 cursor-pointer"
            >
              <FaLocationDot className="text-blue-dark" />
              <p className="font-poppins">
                <span className="font-bold font-quicksand">UAE :</span> Level
                23, Boulevard Plaza 2 Sheikh Mohammed bin Rashid Boulevard -
                Dubai
              </p>
            </a>
            <a
              href="https://g.co/kgs/BenzwYT"
              target="_blank"
              className="flex items-center gap-2 hover:text-redest-dark text-gray-800 font-poppins transition-colors duration-200 cursor-pointer"
            >
              <FaLocationDot className="text-blue-dark" />
              <p className="font-poppins">
                <span className="font-bold font-quicksand pr-2">
                  Bangladesh :
                </span>
                3rd floor of Ananda Tower, Jail Road, Sylhet
              </p>
            </a>
            <a
              href="https://g.co/kgs/BenzwYT"
              target="_blank"
              className="flex items-center gap-2 hover:text-redest-dark text-gray-800 font-poppins transition-colors duration-200 cursor-pointer"
            >
              <FaLocationDot className="text-blue-dark" />
              <p className="font-poppins">
                <span className="font-bold font-quicksand pr-2">
                  Bangladesh :
                </span>
                3rd Floor, VIP Plaza, PC Road, G-Block, Near Artillery,
                Halisahar, Chittagong
              </p>
            </a>
            <a className="flex items-center gap-2 hover:text-redest-dark text-gray-800 font-poppins transition-colors duration-200 cursor-pointer">
              <FaWhatsappSquare className="text-blue-dark" />

              <p className="font-poppins">+447465268767</p>
            </a>
            {/* <Link className="flex items-center gap-2 hover:text-redest-dark text-gray-700 font-poppins transition-colors duration-200 cursor-pointer">
              <FaWhatsappSquare />

              <p className="font-poppins">+4407943642473</p>
            </Link> */}
            <a
              href="mailto:hello@a4admission.com"
              className="flex items-center gap-2 hover:text-redest-dark text-gray-800 font-poppins transition-colors duration-200"
            >
              <IoMail className="text-blue-dark" />
              hello@a4admission.com
            </a>
          </div>
          <div className="col-span-1 flex flex-col gap-3 pl-6 p-2">
            <h2 className="text-xl font-medium font-poppins">Manus</h2>

            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-800 font-medium font-poppins hover:text-blue-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/pages/services"}
                  className="text-gray-800 font-medium font-poppins hover:text-blue-dark hover:translate-x-2 transition-transform"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/pages/study-abroad-canada"}
                  className="text-gray-800 font-medium font-poppins hover:text-blue-dark hover:translate-x-2 transition-transform"
                >
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-gray-800 font-medium font-poppins hover:text-blue-dark hover:translate-x-2 transition-transform"
                >
                  Highschool in Canada
                </Link>
              </li>
              <li>
                <Link
                  to={"/pages/about-us"}
                  className="text-gray-800 font-medium font-poppins hover:text-blue-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/blogs/news"}
                  className="text-gray-800 font-medium font-poppins hover:text-blue-dark hover:translate-x-2 transition-transform"
                >
                  Article/News
                </Link>
              </li>
              <li>
                <Link
                  to={"/pages/event"}
                  className="text-gray-800 font-medium font-poppins hover:text-blue-dark hover:translate-x-2 transition-transform"
                >
                  Event
                </Link>
              </li>
              <li>
                <Link
                  to={"/pages/contact"}
                  className="text-gray-800 font-medium font-poppins hover:text-blue-dark hover:translate-x-2 transition-transform"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className=" text-gray-500 font-poppins font-medium text-sm">
            © {new Date().getFullYear()} A4 Admission. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
