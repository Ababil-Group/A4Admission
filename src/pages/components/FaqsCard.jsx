import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b border-gray-400"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-xl font-quicksand text-gray-800 font-semibold">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2 hover:animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          {faqsList.a && (
            <p className="text-gray-900 font-quicksand text-lg">{faqsList.a}</p>
          )}
          {faqsList.a1 && (
            <div className="space-y-2">
              <h3 className="text-gray-900 font-quicksand text-lg font-bold">
                {faqsList.h1}
              </h3>
              <p className="text-gray-900 font-quicksand text-lg">
                {faqsList.a1}
              </p>
              <h3 className="text-gray-900 font-quicksand text-lg font-bold">
                {faqsList.h2}
              </h3>
              <p className="text-gray-900 font-quicksand text-lg">
                {faqsList.a2}
              </p>
              <h3 className="text-gray-900 font-quicksand text-lg font-bold">
                {faqsList.h3}
              </h3>
              <p className="text-gray-900 font-quicksand text-lg">
                {faqsList.a3}
              </p>
              {faqsList.lists && (
                <ul className="p-6" style={{ listStyleType: "square" }}>
                  {faqsList.lists.map((item, indx) => (
                    <li
                      key={indx}
                      className="text-gray-900 font-quicksand text-lg"
                    >
                      {item.list}
                    </li>
                  ))}
                </ul>
              )}

              <h3 className="text-gray-900 font-quicksand text-lg font-bold">
                {faqsList.h4}
              </h3>
              <p className="text-gray-900 font-quicksand text-lg">
                {faqsList.a4}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqsCard;
