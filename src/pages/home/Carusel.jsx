import React, { useState } from "react";

const Carusel = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin Escobar",
      quote:
        "I’m so grateful to A4 Admission for providing such tailored advice. They didn’t just suggest random universities, they carefully listened to my goals and recommended options that actually made sense for my future. Truly exceptional service,",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela Stian",
      quote:
        "The entire process from document prep to visa guidance was handled with such professionalism. A4 Admission made something that felt overwhelming become so simple and organized.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim Ahmed",
      quote:
        "The visa application process can be scary, but A4 Admission made sure I was well-prepared for everything—from paperwork to the interview. I got my visa on the first try.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Sophie Müller",
      quote:
        "Every step with A4 Admission felt smooth and well-coordinated. From my first consultation to booking my flight, they handled everything with complete professionalism.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      name: "David Zhang",
      quote:
        "They didn’t just stop after submitting my application. A4 Admission helped with my accommodation, travel, and even a pre-departure session. That extra care made me feel really supported.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/62.jpg",
      name: "Fatima Noor",
      quote:
        "What I received from A4 Admission was far beyond what I expected. Their services are worth every penny quality guidance, prompt communication, and genuine care throughout.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/71.jpg",
      name: "Lucas Green",
      quote:
        "Unlike other agencies, A4 Admission felt personal. They truly cared about my journey and success. I felt like more than just a client, I felt valued.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-gray-900 font-bold pb-6 font-quicksand text-4xl">
            What They Say About A4-Admisstion
          </h3>
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-gray-700 text-xl font-semibold sm:text-2xl">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 mx-auto rounded-full"
                      />
                      <div className="mt-3">
                        <span className="block text-gray-800 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-redest-dark focus:ring ${
                    currentTestimonial == idx ? "bg-redest-dark" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Carusel;
