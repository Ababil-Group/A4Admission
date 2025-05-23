import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { BiWorld } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedItems, setExpandedItems] = useState([]);

  const countryCodes = {
    "study-abroad-canada": "CA",
    "study-abroad-united-states": "US",
    "study-abroad-united-kingdom": "GB",
    "study-abroad-australia": "AU",
    "study-abroad-new-zealand": "NZ",
    "study-abroad-china": "CN",
    "study-abroad-japan": "JP",
    "study-abroad-south-korea": "KR",
    "study-abroad-ireland": "IE",
    "study-abroad-sweden": "SE",
    "study-abroad-germany": "DE",
    "study-abroad-denmark": "DK",
    "study-abroad-norway": "NO",
    "study-abroad-finland": "FI",
    "study-abroad-netherlands": "NL",
    "study-abroad-iceland": "IS",
    "study-abroad-malta": "MT",
    "study-abroad-hungary": "HU",
    "study-abroad-romania": "RO",
    "study-abroad-bulgaria": "BG",
  };

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data?.country === "HR" && i18n?.language !== "hr") {
          i18n.changeLanguage("hr");
        }
      } catch (error) {
        console.error("Error detecting country:", error);
      }
    };

    detectCountry();
  }, [i18n]);

  const languages = [
    { code: "en", name: "English", countryCode: "GB" },
    { code: "hr", name: "Croatia", countryCode: "HR" },
  ];

  const currentCountryCode =
    languages.find((lang) => lang.code === currentLanguage)?.countryCode ||
    "GB";

  const navigation = [
    { title: t("menu.home"), path: "/" },
    { title: t("menu.services"), path: "/pages/services" },
    {
      title: t("menu.studyAbrod"),
      subNav: [
        {
          title: t("menu.studyAl1"),
          path: "/pages/study-abroad-canada",
        },
        {
          title: t("menu.studyAl2"),
          path: "/pages/study-abroad-united-states",
        },
        {
          title: t("menu.studyAl3"),
          path: "/pages/study-abroad-united-kingdom",
        },
        {
          title: t("menu.studyAl4"),
          path: "/pages/study-abroad-australia",
        },
        {
          title: t("menu.studyAl5"),
          path: "/pages/study-abroad-new-zealand",
        },
        {
          title: t("menu.studyAl6"),
          path: "/pages/study-abroad-china",
        },
        {
          title: t("menu.studyAl7"),
          path: "/pages/study-abroad-japan",
        },
        {
          title: t("menu.studyAl8"),
          path: "/pages/study-abroad-south-korea",
        },
        {
          title: t("menu.studyAl9"),
          path: "/pages/study-abroad-ireland",
        },
        {
          title: t("menu.studyAl10"),
          path: "/pages/study-abroad-sweden",
        },
        {
          title: t("menu.studyAl11"),
          path: "/pages/study-abroad-germany",
        },
        {
          title: t("menu.studyAl12"),
          path: "/pages/study-abroad-denmark",
        },
        {
          title: t("menu.studyAl13"),
          path: "/pages/study-abroad-norway",
        },
        {
          title: t("menu.studyAl14"),
          path: "/pages/study-abroad-finland",
        },
        {
          title: t("menu.studyAl15"),
          path: "/pages/study-abroad-netherlands",
        },
        {
          title: t("menu.studyAl16"),
          path: "/pages/study-abroad-iceland",
        },
        {
          title: t("menu.studyAl17"),
          path: "/pages/study-abroad-malta",
        },
        {
          title: t("menu.studyAl18"),
          path: "/pages/study-abroad-hungary",
        },
        {
          title: t("menu.studyAl19"),
          path: "/pages/study-abroad-romania",
        },
        {
          title: t("menu.studyAl20"),
          path: "/pages/study-abroad-bulgaria",
        },
      ],
    },
    { title: t("menu.about"), path: "/pages/about-us" },
    { title: t("menu.event"), path: "/pages/our-success-story" },
    { title: t("menu.contact"), path: "/pages/contact" },
    { title: t("menu.faq"), path: "/pages/faq" },
  ];

  const changeLanguage = async (lng) => {
    setIsChangingLanguage(true);
    try {
      await i18n.changeLanguage(lng);
      setCurrentLanguage(lng);
      localStorage.setItem("userLanguage", lng);
      await i18n.reloadResources(lng);
    } catch (error) {
      console.error("Language change failed:", error);
      i18n.changeLanguage("en");
      setCurrentLanguage("en");
    } finally {
      setIsChangingLanguage(false);
      setIsLanguageDropdownOpen(false);
    }
  };

  const toggleItem = (idx) => {
    setExpandedItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const getCountryCode = (path) => {
    const pathKey = path.replace("/pages/", "");
    return countryCodes[pathKey] || "";
  };

  // Function to chunk the array into groups for the grid layout
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  return (
    <nav className="bg-white w-full pr-10">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 relative">
        <button
          className="inline-flex md:hidden text-gray-800 hover:text-red-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <HiMiniBars3CenterLeft className="w-8 h-8" />
          )}
        </button>
        <div className="md:absolute left-10/12 transform translate-x-1/2 md:static md:transform-none md:mx-auto">
          <Link to="/" className="flex items-center justify-center ">
            <img src={Logo} alt="A4-Admission" className="w-22" />
          </Link>
        </div>
        <div className="relative hidden sm:block">
          <button
            className="flex items-center gap-2"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            disabled={isChangingLanguage}
          >
            <ReactCountryFlag
              countryCode={currentCountryCode}
              svg
              style={{
                width: "1.2em",
                height: "1.2em",
                borderRadius: "50%",
              }}
              title={currentCountryCode}
            />
            <span>
              {languages.find((lang) => lang.code === currentLanguage)?.name ||
                "English"}
            </span>
            {isChangingLanguage ? (
              <span className="animate-spin">↻</span>
            ) : isLanguageDropdownOpen ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </button>

          {/* Keep the existing dropdown code */}
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 top-8 z-10 bg-white shadow-md rounded-md p-2 min-w-[150px]">
              {languages.map((language) => (
                <button
                  key={language.code}
                  className={`flex items-center w-full text-left px-2 py-1 hover:bg-gray-100 rounded ${
                    currentLanguage === language.code
                      ? "font-bold text-redest-dark"
                      : ""
                  }`}
                  onClick={() => changeLanguage(language.code)}
                  disabled={isChangingLanguage}
                >
                  <ReactCountryFlag
                    countryCode={language.countryCode}
                    svg
                    style={{
                      width: "1.2em",
                      height: "1.2em",
                      marginRight: "0.5em",
                      borderRadius: "50%",
                    }}
                    title={language.countryCode}
                  />
                  {language.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto border-t-[2px] border-[#ece7df]">
        {/* Desktop Navigation */}
        <div className="hidden md:block my-2">
          <ul className="flex flex-wrap items-center justify-center space-x-6 space-x-6">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="relative group"
                onMouseEnter={() => setHoveredItem(idx)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={item.path || "#"}
                  className={`font-semibold text-sm transition-colors uppercase tracking-widest font-quicksand ${
                    location.pathname === item.path
                      ? "border-b-2 border-redest-dark text-redest-dark"
                      : "text-gray-900 hover:text-redest-dark hover:border-b-2 hover:border-redest-dark duration-300"
                  }`}
                >
                  {item.title}
                  {item.subNav && (
                    <span className="ml-1 inline-block">
                      <MdKeyboardArrowDown className="inline" />
                    </span>
                  )}
                </Link>

                {/* Sub-navigation dropdown */}
                {item.subNav && (
                  <div
                    className={`absolute left-0 top-full p-4 mt-0 w-[800px] bg-white shadow-lg rounded-md z-50 
                      ${hoveredItem === idx ? "block" : "hidden"} 
                      transition-all duration-300 ease-in-out`}
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {chunkArray(item.subNav, 7).map((column, colIdx) => (
                        <div key={colIdx} className="space-y-2">
                          {column.map((subItem, subIdx) => {
                            const countryCode = getCountryCode(subItem.path);
                            return (
                              <Link
                                key={subIdx}
                                to={subItem.path}
                                className={`flex items-center px-3 py-2 text-[15px] text-gray-800 hover:bg-gray-50 rounded-md transition-colors ${
                                  location.pathname === subItem.path
                                    ? "bg-gray-50 text-redest-dark"
                                    : "text-gray-700"
                                }`}
                              >
                                {countryCode && (
                                  <ReactCountryFlag
                                    countryCode={countryCode}
                                    svg
                                    style={{
                                      width: "1.5em",
                                      height: "1.5em",
                                      marginRight: "0.75em",
                                      borderRadius: "50%",
                                      boxShadow: "0 0 3px rgba(0,0,0,0.2)",
                                    }}
                                    title={countryCode}
                                  />
                                )}
                                <span className="font-medium whitespace-nowrap">
                                  {subItem.title}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden bg-black/50 transition-transform duration-500">
            <div
              className="absolute inset-0 bg-opacity-75"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            <div className="absolute left-0 top-0 h-full w-8/12 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full relative">
                <button
                  className="text-white hover:text-gray-800 absolute top-1 right-0 bg-blue-dark text rounded-full p-1 "
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaTimes className="w-6 h-6" />
                </button>

                <nav className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-2">
                    {navigation.map((item, idx) => (
                      <li key={idx} className="border-b border-gray-200 pb-2">
                        <div className="flex flex-col">
                          <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => {
                              if (item.subNav) {
                                toggleItem(idx);
                              } else {
                                setIsMenuOpen(false);
                              }
                            }}
                          >
                            <Link
                              to={item.path || "#"}
                              className={`block px-2 py-2 text-lg font-medium text-blue-dark rounded-lg transition-colors ${
                                !item.subNav ? "w-full" : ""
                              }`}
                              onClick={(e) => {
                                if (item.subNav) {
                                  e.preventDefault();
                                } else {
                                  setIsMenuOpen(false);
                                }
                              }}
                            >
                              {item.title}
                            </Link>
                            {item.subNav && (
                              <span className="px-2 py-2">
                                {expandedItems.includes(idx) ? (
                                  <MdKeyboardArrowUp />
                                ) : (
                                  <MdKeyboardArrowDown />
                                )}
                              </span>
                            )}
                          </div>
                          {item.subNav && expandedItems.includes(idx) && (
                            <div className="pl-4 mt-2 bg-gray-50 rounded-lg">
                              {item.subNav.map((subItem, subIdx) => {
                                const countryCode = getCountryCode(
                                  subItem.path
                                );
                                return (
                                  <Link
                                    key={subIdx}
                                    to={subItem.path}
                                    className="flex items-center px-4 py-3 text-base text-gray-800 hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {countryCode && (
                                      <ReactCountryFlag
                                        countryCode={countryCode}
                                        svg
                                        style={{
                                          width: "1.2em",
                                          height: "1.2em",
                                          marginRight: "0.5em",
                                          borderRadius: "50%",
                                        }}
                                      />
                                    )}
                                    {subItem.title}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
