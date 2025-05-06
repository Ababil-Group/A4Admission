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
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="py-8 border-b border-gray-50 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 flex flex-col items-center gap-6">
            <img src={logo} alt="logo" className="h-22" />
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/aladdin_group_ltd/"
                target="_blank"
              >
                <FaInstagram className="bg-zinc-600 size-8 p-1 rounded-md text-white hover:bg-redest-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
              <a
                href="https://www.facebook.com/aladdingroup.online"
                target="_blank"
              >
                <FaFacebook className="bg-zinc-600 size-8 p-1 rounded-md text-white hover:bg-redest-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com/@AladdinGroupLimited"
                target="_blank"
              >
                <FaYoutube className="bg-zinc-600 size-8 p-1 rounded-md text-white hover:bg-redest-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/company/aladdin-group-limited"
                target="_blank"
              >
                <FaLinkedin className="bg-zinc-600 size-8 p-1 rounded-md text-white hover:bg-redest-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
              <a href="https://twitter.com/GroupAladdinLt" target="_blank">
                <FaTwitter className="bg-zinc-600 size-8 p-1 rounded-md text-white hover:bg-red-600 hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
              <a
                href="https://www.pinterest.com/aladdingrouplimited"
                target="_blank"
              >
                <FaPinterest className="bg-zinc-600 size-8 p-1 rounded-md text-white hover:bg-redest-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-3 p-2">
            <h2 className="font-poppins font-medium text-xl">Contact Us</h2>

            <Link className="flex items-center gap-2 hover:text-redest-dark text-gray-700 font-poppins transition-colors duration-200 cursor-pointer">
              <FaLocationDot className="" />
              <p className="font-poppins">
                Salak Education Consulting Kitchener, Ontario, Canada
              </p>
            </Link>
            {/* <Link className="flex items-center gap-2 hover:text-redest-dark text-gray-700 font-poppins transition-colors duration-200 cursor-pointer">
              <FaWhatsappSquare />

              <p className="font-poppins">+62 878-2066-7883</p>
            </Link>
            <Link className="flex items-center gap-2 hover:text-redest-dark text-gray-700 font-poppins transition-colors duration-200 cursor-pointer">
              <FaWhatsappSquare />

              <p className="font-poppins">+4407943642473</p>
            </Link> */}
            <a
              href="mailto:contact@aladdingroup.online"
              className="flex items-center gap-2 hover:text-blue-400 text-redest-dark font-poppins transition-colors duration-200"
            >
              <IoMail />
              contact@a4admission.com
            </a>
          </div>
          <div className="col-span-1 flex flex-col gap-3 p-2">
            <h2 className="text-xl font-medium font-poppins">Manu</h2>
            <ul className="flex flex-col">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-700 font-medium font-poppins hover:text-blue-dark hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/services"}
                  className="text-gray-700 font-medium font-poppins hover:text-blue-dark hover:translate-x-2 transition-transform"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-gray-700 font-medium font-poppins hover:text-blue-dark hover:translate-x-2 transition-transform"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className=" text-gray-500 font-poppins font-medium text-sm">
            © {new Date().getFullYear()} Salak Education. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
