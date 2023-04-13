import { Question } from "@/components/Question";
import { setQuestion } from "@/hooks/questionHooks";
import { QuestionProps } from "@/hooks/questionHooks/questionHooks";
import React from "react";

interface FaqProps {}

const _Faq: React.FC<FaqProps> = ({}) => {
  const questions = setQuestion();

  const handleClick = (src: QuestionProps[], index: number) => {
    const newQuestions = src.map((question, i) => {
      if (i !== index || question.open === false) {
        return { ...question, open: false };
      } else {
        return { ...question, open: true };
      }
    });

    questions.setQuestion(newQuestions);
  };

  return (
    <div className="w-full flex items-center justify-center px-16 xl:px-0 pb-60 lg:pb-120 overflow-x-hidden">
      <div className="w-full max-w-screen-lg flex flex-col items-center justify-center gap-24">
        <h6
          className="font-montserrat font-bold text-[2.8rem] lg:text-4xl
					  text-center lg:text-left leading-none pb-20 lg:pb-24"
        >
          Perguntas frequentes
        </h6>

        <div className="bg-dark flex flex-col items-center justify-center w-full gap-30 rounded-3xl px-20 py-20 md:px-40 md:py-40">
          {questions.getQuestions().map((item, index) => (
            <button
              key={index}
              className="w-full"
              onClick={() => handleClick(questions.getQuestions(), index)}
            >
              <Question
                question={item.question}
                answer={item.answer}
                open={item.open}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export { _Faq };
