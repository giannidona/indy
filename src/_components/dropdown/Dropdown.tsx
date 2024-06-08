"use client";

import { useState } from "react";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";

const questions = [
  { title: "Question 1", answer: "Answer 1" },
  { title: "Question 2", answer: "Answer 2" },
  { title: "Question 3", answer: "Answer 3" },
];

export const Dropdown: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const onToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} className="text-white p-2">
          <div>
            <button
              onClick={() => onToggle(index)}
              className="w-[500px] font-bold cursor-pointer flex justify-between items-center px-2 border-b border-white/50"
            >
              <div>
                <p className="mb-2">{question.title}</p>
              </div>
              <div className="mb-2">
                {openIndex === index ? (
                  <MdOutlineArrowDropUp />
                ) : (
                  <MdOutlineArrowDropDown />
                )}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all ${
                openIndex === index ? "p-2" : "max-h-0"
              }`}
            >
              <p>{question.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
