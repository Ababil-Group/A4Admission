import React from "react";
import faqsimg from "../../assets/faqs/fa1.webp";
const Faqs = () => {
  return (
    <div className="bg-white my-6">
      <section
        className="bg-cover bg-center py-16 px-2 h-auto sm:min-h-screen relative flex items-center justify-center"
        style={{ backgroundImage: `url(${faqsimg})` }}
      ></section>
    </div>
  );
};

export default Faqs;
