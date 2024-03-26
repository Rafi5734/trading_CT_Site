import { useState } from "react";
import "./faqAccordion.css";
const FaqAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" mb-3">
      <div className="accordion" onClick={toggleAccordion}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`font-medium rounded border border-slate-500 w-full p-5 poppins accordion-button flex justify-between items-center accordion_btn ${
                isOpen ? "bg-primary" : ""
              }`}
              onClick={toggleAccordion}
            >
              {title}
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            className={`accordion_panel poppins p-3 accordion-content rounded ${
              isOpen ? "" : "hidden"
            } overflow-hidden transition-max-h duration-300 cardDescriptionStyle ease-in-out`}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
