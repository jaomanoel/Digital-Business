/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

export interface QuestionProps {
  question: string;
  answer: string;
  open: boolean;
}

const setQuestion = () => {
  const [questions, setQuestions] = useState<QuestionProps[]>([
    {
      question: "Qual é o prazo de entrega?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in odio ligula. In mollis euismod augue et viverra. Aenean a odio hendrerit, pellentesque dolor vel, consectetur justo. Aliquam in lobortis augue. Ut commodo sem id eros euismod fermentum. Donec aliquet orci at lectus viverra, sit amet semper lacus cursus. Nullam ut arcu lacinia, dictum ipsum at, tincidunt ante.",
      open: false,
    },
    {
      question: "Qual é o processo de pagamento?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in odio ligula. In mollis euismod augue et viverra. Aenean a odio hendrerit, pellentesque dolor vel, consectetur justo. Aliquam in lobortis augue. Ut commodo sem id eros euismod fermentum. Donec aliquet orci at lectus viverra, sit amet semper lacus cursus. Nullam ut arcu lacinia, dictum ipsum at, tincidunt ante.",
      open: false,
    },
    {
      question: "Vocês oferecem serviços de hospedagem e domínio?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in odio ligula. In mollis euismod augue et viverra. Aenean a odio hendrerit, pellentesque dolor vel, consectetur justo. Aliquam in lobortis augue. Ut commodo sem id eros euismod fermentum. Donec aliquet orci at lectus viverra, sit amet semper lacus cursus. Nullam ut arcu lacinia, dictum ipsum at, tincidunt ante.",
      open: false,
    },
    {
      question: "Vocês oferecem suporte após a entrega do trabalho?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in odio ligula. In mollis euismod augue et viverra. Aenean a odio hendrerit, pellentesque dolor vel, consectetur justo. Aliquam in lobortis augue. Ut commodo sem id eros euismod fermentum. Donec aliquet orci at lectus viverra, sit amet semper lacus cursus. Nullam ut arcu lacinia, dictum ipsum at, tincidunt ante.",
      open: false,
    },
    {
      question: "Posso solicitar mais alterações após o trabalho ser entregue?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in odio ligula. In mollis euismod augue et viverra. Aenean a odio hendrerit, pellentesque dolor vel, consectetur justo. Aliquam in lobortis augue. Ut commodo sem id eros euismod fermentum. Donec aliquet orci at lectus viverra, sit amet semper lacus cursus. Nullam ut arcu lacinia, dictum ipsum at, tincidunt ante.",
      open: false,
    },
  ]);

  function getQuestions(): QuestionProps[] {
    return questions;
  }

  function setQuestion(questions: QuestionProps[]) {
    setQuestions(questions);
  }

  return {
    getQuestions,
    setQuestion,
  };
};

export { setQuestion };
