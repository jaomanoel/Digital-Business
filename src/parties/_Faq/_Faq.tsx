import { Question } from "@/components/Question";
import { useQuestion } from "@/hooks/questionHooks";
import React, { useMemo } from "react";

interface FaqProps {}

const _Faq: React.FC<FaqProps> = ({}) => {
  const questions = useQuestion();

  const questionList = useMemo(() => questions.getQuestions(), [questions]);

  const handleClick = (index: number) => {
    const newQuestions = questionList.map((question, i) => {
      if (i !== index || (i === index && question.open === true)) {
        return { ...question, open: false };
      } else {
        return { ...question, open: true };
      }
    });

    questions.setQuestion(newQuestions);
  };

  return (
    <div className="w-full flex items-center justify-center px-16 xl:px-0 pb-60 lg:pb-120 overflow-x-hidden">
      <div className="w-full max-w-screen-lg flex flex-col items-center justify-center">
        <h6
          data-aos="fade-up"
          className="font-montserrat font-bold text-[2.8rem] lg:text-4xl
					  text-center lg:text-left leading-none pb-20 lg:pb-24"
        >
          Perguntas frequentes
        </h6>

        <div
          data-aos="slide-right"
          className="bg-dark flex flex-col items-center justify-center w-full gap-30 rounded-3xl px-20 py-20 md:px-40 md:py-40"
        >
          {questionList.map((item, index) => (
            <button
              data-aos="slide-left"
              key={index}
              className="w-full"
              onClick={() => handleClick(index)}
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
