import { QuestionProps } from "@/hooks/questionHooks/questionHooks";
import React, { useEffect } from "react";
import { Arrow } from "../svgs/Arrow";

const Question: React.FC<QuestionProps> = ({ question, answer, open }) => {
  return (
    <div className="bg-purple w-full flex flex-col text-white items-start rounded-3xl px-12 py-8">
      <div className="w-full flex items-center justify-between">
        <span className="font-montserrat font-bold w-[80%] text-left text-[1.7rem] md:text-xl">
          {question}
        </span>

        <Arrow
          className={`w-36 h-36 transition-transform ease-linear duration-[.4s] ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-[max-height] ease-linear delay-0 duration-[.8s] max-h-0 ${
          open ? "max-h-600" : "max-h-0"
        }`}
      >
        <p className={`font-montserrat text-left pt-24 text-base lg:text-lg`}>
          {answer}
        </p>
      </div>
    </div>
  );
};

export { Question };
